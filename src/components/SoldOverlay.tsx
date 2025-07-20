import React from 'react';
import { cn } from '@/lib/utils';

interface SoldOverlayProps {
  className?: string;
}

const SoldOverlay: React.FC<SoldOverlayProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-20 pointer-events-none", // Questo div copre l'intera area dell'immagine
        className
      )}
    >
      <div
        className="absolute top-0 left-0 right-0 bg-red-600 text-white font-bold text-xl sm:text-2xl md:text-3xl py-1 text-center opacity-70"
      >
        VENDUTO
      </div>
    </div>
  );
};

export default SoldOverlay;