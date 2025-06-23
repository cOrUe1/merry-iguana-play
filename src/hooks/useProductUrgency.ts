import { useState, useEffect, useCallback } from 'react';

interface UrgencyData {
  type: 'interested' | 'viewed';
  value: number;
  lastUpdated: number; // Timestamp
}

const STORAGE_KEY_PREFIX = 'product_urgency_';
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const FIVE_HOURS_MS = 5 * 60 * 60 * 1000; // Changed from ONE_HOUR_MS to FIVE_HOURS_MS

// Function to generate 'X' (interested people) with specified probabilities
const generateInterestedValue = (): number => {
  const rand = Math.random();
  if (rand < 0.25) { // 25% chance for 3 or 4
    return Math.random() < 0.5 ? 3 : 4;
  } else { // 75% chance for 1 or 2
    return Math.random() < 0.5 ? 1 : 2;
  }
};

// Function to generate 'Y' (viewed by) with decreasing probability
const generateViewedValue = (): number => {
  const weights = [
    1, 1, 1, 1, 1, // 5x for 1 (highest probability)
    2, 2, 2, 2,    // 4x for 2
    3, 3, 3,       // 3x for 3
    4, 4,          // 2x for 4
    5, 5,          // 2x for 5
    6,             // 1x for 6
    7,             // 1x for 7
    8,             // 1x for 8
    9,             // 1x for 9
    10,            // 1x for 10
    11,            // 1x for 11
    12,            // 1x for 12
    13             // 1x for 13 (lowest probability)
  ];
  const randomIndex = Math.floor(Math.random() * weights.length);
  return weights[randomIndex];
};

export const useProductUrgency = (productId: string) => {
  const [urgencyText, setUrgencyText] = useState<string | null>(null);

  const getUrgencyData = useCallback((): UrgencyData | null => {
    try {
      const storedData = localStorage.getItem(`${STORAGE_KEY_PREFIX}${productId}`);
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error("Failed to parse urgency data from localStorage", error);
    }
    return null;
  }, [productId]);

  const setUrgencyData = useCallback((data: UrgencyData) => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${productId}`, JSON.stringify(data));
    } catch (error) {
      console.error("Failed to save urgency data to localStorage", error);
    }
  }, [productId]);

  const updateUrgency = useCallback(() => {
    const now = Date.now();
    let currentData = getUrgencyData();

    // Determine if an update is due for either type or if it's the first load
    let updateIsDue = false;
    if (currentData) {
      if (currentData.type === 'interested' && (now - currentData.lastUpdated > THREE_DAYS_MS)) {
        updateIsDue = true;
      } else if (currentData.type === 'viewed' && (now - currentData.lastUpdated > FIVE_HOURS_MS)) {
        updateIsDue = true;
      }
    } else {
      // If no data, it's effectively a "first update"
      updateIsDue = true;
    }

    // Apply the 1 in 6 chance to remove the text, but only if an update is due or it's the first time
    if (updateIsDue && Math.random() < 1 / 6) {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}${productId}`);
      setUrgencyText(null);
      return; // Stop here, no text will be shown
    }

    // If we reach here, either no update was due, or the 1/6 chance failed, so proceed with normal logic

    if (!currentData) {
      // First time for this product, determine type randomly
      const typeRoll = Math.random();
      const type = typeRoll < 1 / 3 ? 'interested' : 'viewed';
      currentData = {
        type,
        value: type === 'interested' ? generateInterestedValue() : generateViewedValue(),
        lastUpdated: now,
      };
      setUrgencyData(currentData);
    } else {
      // Update existing data based on type and time
      if (currentData.type === 'interested') {
        if (now - currentData.lastUpdated > THREE_DAYS_MS) {
          if (Math.random() < 0.5) { // 50% chance to update
            currentData.value = Math.min(4, currentData.value + 1); // Increment by 1, cap at 4
          } else {
            // If not updated, re-roll the value to ensure it's still within 1-4 range
            currentData.value = generateInterestedValue();
          }
          currentData.lastUpdated = now;
          setUrgencyData(currentData);
        }
      } else { // type === 'viewed'
        if (now - currentData.lastUpdated > FIVE_HOURS_MS) { // Use new constant
          currentData.value = generateViewedValue();
          currentData.lastUpdated = now;
          setUrgencyData(currentData);
        }
      }
    }

    // Set the text based on the final currentData
    if (currentData.type === 'interested') {
      setUrgencyText(`Persone interessate a questo elemento: ${currentData.value}`);
    } else {
      setUrgencyText(`Visualizzato da ${currentData.value} persone in questo momento`);
    }
  }, [productId, getUrgencyData, setUrgencyData]);

  useEffect(() => {
    updateUrgency(); // Initial update when component mounts or productId changes

    const viewedIntervalId = setInterval(() => {
      const currentData = getUrgencyData();
      // Trigger update if it's a 'viewed' type or if there's no data yet (for initial roll)
      if (!currentData || currentData.type === 'viewed') {
        updateUrgency();
      }
    }, FIVE_HOURS_MS); // Check every 5 hours for 'viewed' updates

    const interestedIntervalId = setInterval(() => {
      const currentData = getUrgencyData();
      // Trigger update if it's an 'interested' type
      if (currentData && currentData.type === 'interested') {
        updateUrgency();
      }
    }, THREE_DAYS_MS); // Check every 3 days for 'interested' updates

    return () => {
      clearInterval(viewedIntervalId);
      clearInterval(interestedIntervalId);
    };
  }, [productId, updateUrgency, getUrgencyData]);

  return urgencyText;
};