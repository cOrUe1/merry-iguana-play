import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/types/product';

// Helper per creare un ID unico per un prodotto da usare come chiave in localStorage
const getProductUniqueId = (product: Product) => {
  // Usiamo una combinazione di titolo e una parte dell'URL della cover per un ID ragionevolmente unico
  return `product_stats_${product.title.replace(/\s/g, '_').toLowerCase()}_${product.coverPhoto.substring(product.coverPhoto.lastIndexOf('/') + 1, product.coverPhoto.lastIndexOf('.'))}`;
};

// Genera il numero X (1-4, con 3 e 4 meno probabili)
function generateX(): number {
  const rand = Math.random();
  if (rand < 0.375) return 1; // 37.5%
  if (rand < 0.75) return 2;  // 37.5%
  if (rand < 0.875) return 3; // 12.5%
  return 4;                  // 12.5%
}

// Genera il numero Y (1-13, con probabilità decrescente)
function generateY(): number {
  // Pesi per la probabilità decrescente (somma a 100 per facilità)
  const weights = [20, 18, 15, 12, 10, 8, 5, 4, 3, 2, 1.5, 1, 0.5];
  const cumulativeWeights = [];
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    cumulativeWeights.push(sum);
  }

  const rand = Math.random() * sum;
  for (let i = 0; i < cumulativeWeights.length; i++) {
    if (rand < cumulativeWeights[i]) {
      return i + 1;
    }
  }
  return 1; // Fallback, non dovrebbe accadere
}

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000; // 3 giorni in millisecondi
const ONE_HOUR_IN_MS = 60 * 60 * 1000; // 1 ora in millisecondi

interface ProductStatsData {
  messageType: 'X' | 'Y';
  value: number;
  lastUpdated: number; // Timestamp dell'ultimo aggiornamento
}

export const useProductStats = (product: Product | null) => {
  const [message, setMessage] = useState<string | null>(null);

  const updateMessage = useCallback(() => {
    if (!product) {
      setMessage(null);
      return;
    }

    const productId = getProductUniqueId(product);
    const messageTypeRoll = Math.random(); // Scelta casuale tra tipo X (1/3) e tipo Y (2/3)

    let storedStats: ProductStatsData | null = null;
    try {
      const stored = localStorage.getItem(productId);
      if (stored) {
        storedStats = JSON.parse(stored);
      }
    } catch (e) {
      console.error("Errore nel parsing delle statistiche prodotto da localStorage", e);
    }

    if (messageTypeRoll < 1 / 3) { // Messaggio di tipo X
      let xValue: number;
      let lastUpdated: number;

      // Se ci sono statistiche memorizzate di tipo X e non sono scadute (3 giorni)
      if (storedStats && storedStats.messageType === 'X' && (Date.now() - storedStats.lastUpdated < THREE_DAYS_IN_MS)) {
        xValue = storedStats.value;
        lastUpdated = storedStats.lastUpdated;
      } else {
        // Altrimenti, genera un nuovo valore X e aggiorna il timestamp
        xValue = generateX();
        lastUpdated = Date.now();
      }

      const newMessage = `Persone interessate a questo elemento: ${xValue}`;
      setMessage(newMessage);

      // Salva il valore X e il timestamp in localStorage
      localStorage.setItem(productId, JSON.stringify({
        messageType: 'X',
        value: xValue,
        lastUpdated: lastUpdated,
      }));

    } else { // Messaggio di tipo Y
      const yValue = generateY();
      const newMessage = `Visualizzato da ${yValue} persone in questo momento`;
      setMessage(newMessage);

      // Salva il valore Y e il timestamp in localStorage
      // Il valore Y si aggiornerà ogni ora, quindi il 'value' qui è solo per coerenza
      localStorage.setItem(productId, JSON.stringify({
        messageType: 'Y',
        value: yValue,
        lastUpdated: Date.now(),
      }));
    }
  }, [product]); // Dipendenza dal prodotto per rigenerare quando cambia il prodotto

  useEffect(() => {
    if (!product) {
      setMessage(null);
      return;
    }

    // Generazione iniziale del messaggio
    updateMessage();

    let intervalId: NodeJS.Timeout;
    const productId = getProductUniqueId(product);

    // Controlla il tipo di messaggio memorizzato per decidere se avviare l'intervallo
    let storedStats: ProductStatsData | null = null;
    try {
      const stored = localStorage.getItem(productId);
      if (stored) {
        storedStats = JSON.parse(stored);
      }
    } catch (e) {
      console.error("Errore nel parsing delle statistiche prodotto da localStorage", e);
    }

    // Se il messaggio è di tipo Y, avvia l'intervallo per aggiornarlo ogni ora
    if (storedStats && storedStats.messageType === 'Y') {
      intervalId = setInterval(() => {
        const yValue = generateY();
        const newMessage = `Visualizzato da ${yValue} persone in questo momento`;
        setMessage(newMessage);
        // Aggiorna localStorage per il tipo Y per riflettere il nuovo valore e timestamp
        localStorage.setItem(productId, JSON.stringify({
          messageType: 'Y',
          value: yValue,
          lastUpdated: Date.now(),
        }));
      }, ONE_HOUR_IN_MS);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Pulisce l'intervallo quando il componente si smonta
      }
    };
  }, [product, updateMessage]); // Dipendenze per useEffect

  return message;
};