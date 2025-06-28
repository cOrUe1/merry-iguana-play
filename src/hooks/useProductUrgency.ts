import { useState, useEffect, useCallback } from 'react';

interface UrgencyData {
  type: 'interested' | 'viewed';
  value: number;
  lastUpdated: number; // Timestamp
}

const STORAGE_KEY_PREFIX = 'product_urgency_';
const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const ONE_HOUR_MS = 1 * 60 * 60 * 1000;

// Function to generate 'X' (interested people) with specified probabilities
const generateInterestedValue = (): number => {
  const rand = Math.random();
  if (rand < 0.25) { // 25% chance for higher values (9-12)
    return Math.floor(Math.random() * 4) + 9; // Generates 9, 10, 11, or 12
  } else { // 75% chance for lower values (1-8)
    return Math.floor(Math.random() * 8) + 1; // Generates 1, 2, ..., 8
  }
};

// Function to generate 'Y' (viewed by) with decreasing probability, up to 39
const generateViewedValue = (): number => {
  const weights = [
    1, 1, 1, 1, 1, // 5x for 1
    2, 2, 2, 2,    // 4x for 2
    3, 3, 3,       // 3x for 3
    4, 4,          // 2x for 4
    5, 5,          // 2x for 5
    6, 6,          // 2x for 6
    7, 7,          // 2x for 7
    8, 8,          // 2x for 8
    9, 9,          // 2x for 9
    10, 10,        // 2x for 10
    11, 12, 13, 14, 15, // 1x for 11-15
    16, 17, 18, 19, 20, // 1x for 16-20
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, // 1x for 21-30
    31, 32, 33, 34, 35, 36, 37, 38, 39 // 1x for 31-39
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

    if (!currentData) {
      // First time for this product, determine type randomly
      const typeRoll = Math.random();
      const type = typeRoll < 1 / 3 ? 'interested' : 'viewed';

      // If it's 'viewed' type on first roll, apply 1/6 chance to remove
      if (type === 'viewed' && Math.random() < 1 / 6) {
        localStorage.removeItem(`${STORAGE_KEY_PREFIX}${productId}`);
        setUrgencyText(null);
        return; // No text will be shown
      }

      // Otherwise, initialize data
      currentData = {
        type,
        value: type === 'interested' ? generateInterestedValue() : generateViewedValue(),
        lastUpdated: now,
      };
      setUrgencyData(currentData);

    } else {
      // Data already exists, check for updates based on type
      if (currentData.type === 'interested') {
        if (now - currentData.lastUpdated > THREE_DAYS_MS) {
          if (Math.random() < 0.5) { // 50% chance to update
            currentData.value = Math.min(12, currentData.value + 1); // Increment by 1, cap at 12 (tripled from 4)
          } else {
            // If not updated, re-roll the value to ensure it's still within 1-12 range
            currentData.value = generateInterestedValue();
          }
          currentData.lastUpdated = now;
          setUrgencyData(currentData);
        }
        // No removal for 'interested' type
      } else { // currentData.type === 'viewed'
        if (now - currentData.lastUpdated > ONE_HOUR_MS) {
          // Apply 1/6 chance to remove for 'viewed' type when update is due
          if (Math.random() < 1 / 6) {
            localStorage.removeItem(`${STORAGE_KEY_PREFIX}${productId}`);
            setUrgencyText(null);
            return; // No text will be shown
          } else {
            currentData.value = generateViewedValue();
            currentData.lastUpdated = now;
            setUrgencyData(currentData);
          }
        }
      }
    }

    // Set the text based on the final currentData (if not removed)
    if (currentData) { // Check if currentData is still valid after potential removal
      if (currentData.type === 'interested') {
        setUrgencyText(`Persone interessate a questo elemento: ${currentData.value}`);
      } else {
        setUrgencyText(`Visualizzato da ${currentData.value} persone nell'ultima ora`);
      }
    } else {
      setUrgencyText(null); // Ensure text is null if data was removed
    }
  }, [productId, getUrgencyData, setUrgencyData]);

  useEffect(() => {
    updateUrgency(); // Initial update when component mounts or productId changes

    const viewedIntervalId = setInterval(() => {
      updateUrgency();
    }, ONE_HOUR_MS);

    const interestedIntervalId = setInterval(() => {
      updateUrgency();
    }, THREE_DAYS_MS);

    return () => {
      clearInterval(viewedIntervalId);
      clearInterval(interestedIntervalId);
    };
  }, [productId, updateUrgency]);

  return urgencyText;
};