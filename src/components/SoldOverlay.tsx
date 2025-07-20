import React from 'react';
import { cn } from '@/lib/utils';

interface SoldOverlayProps {
  className?: string;
}

const SoldOverlay: React.FC<SoldOverlayProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
        className
      )}
    >
      <div
        className="bg-red-600 text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-2 px-12 transform -rotate-45 opacity-90 whitespace-nowrap"
        style={{ width: '150%', textAlign: 'center' }} // Ensure it covers the whole area
      >
        VENDUTO
      </div>
    </div>
  );
};

export default SoldOverlay;