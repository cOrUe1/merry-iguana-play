import { useState, useEffect, useRef, useCallback } from 'react';
import { Product } from '@/types/product';

const ANIMATION_INTERVAL = 3000; // 3 secondi

export const useProductCardAnimation = (products: Product[]) => {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const shuffledProductIds = useRef<string[]>([]);
  const currentIndex = useRef(0);

  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array]; // Create a shallow copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      setActiveProductId(null);
      return;
    }

    // Initialize or re-shuffle if all products have been shown or if products change
    if (shuffledProductIds.current.length === 0 || currentIndex.current >= shuffledProductIds.current.length ||
        JSON.stringify(shuffledProductIds.current.sort()) !== JSON.stringify(products.map(p => p.id).sort())) {
      shuffledProductIds.current = shuffleArray(products.map(p => p.id));
      currentIndex.current = 0;
    }

    const intervalId = setInterval(() => {
      if (shuffledProductIds.current.length === 0) {
        setActiveProductId(null);
        return;
      }

      setActiveProductId(shuffledProductIds.current[currentIndex.current]);
      currentIndex.current++;

      // If we've gone through all shuffled products, reset for the next cycle
      if (currentIndex.current >= shuffledProductIds.current.length) {
        shuffledProductIds.current = shuffleArray(products.map(p => p.id));
        currentIndex.current = 0;
      }
    }, ANIMATION_INTERVAL);

    return () => clearInterval(intervalId);
  }, [products, shuffleArray]);

  return activeProductId;
};