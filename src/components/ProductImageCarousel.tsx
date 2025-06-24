"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button'; // Mantenuto per sicurezza, ma non più usato per le frecce qui
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Mantenuto per sicurezza, ma non più usato per le frecce qui
import { cn } from '@/lib/utils';

interface ProductImageCarouselProps {
  photos: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCarouselState = () => {
      if (typeof emblaApi.selectedScrollSnap === 'function' && typeof emblaApi.scrollSnaps === 'function') {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setScrollSnaps(emblaApi.scrollSnaps());
      }
    };

    emblaApi.on('init', updateCarouselState);
    emblaApi.on('select', updateCarouselState);
    emblaApi.on('reInit', updateCarouselState);

    return () => {
      emblaApi.off('init', updateCarouselState);
      emblaApi.off('select', updateCarouselState);
      emblaApi.off('reInit', updateCarouselState);
    };
  }, [emblaApi]);

  if (!photos || photos.length === 0) {
    return <div className="text-center text-muted-foreground py-8">Nessuna immagine disponibile.</div>;
  }

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {photos.map((photo, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full">
              <img
                src={photo}
                alt={`Product photo ${index + 1}`}
                className="w-full h-96 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {photos.length > 1 && (
        <div className="embla__dots absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-colors duration-200",
                index === selectedIndex ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;