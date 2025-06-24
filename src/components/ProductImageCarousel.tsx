"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImageCarouselProps {
  photos: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onInit = () => {
      // Defer execution to ensure emblaApi is fully ready
      setTimeout(() => {
        if (emblaApi && typeof emblaApi.scrollSnaps === 'function') {
          setScrollSnaps(emblaApi.scrollSnaps());
          setSelectedIndex(emblaApi.selectedScrollSnap());
        } else {
          console.warn("Embla API not fully ready after init event, scrollSnaps method not found.");
        }
      }, 0);
    };

    emblaApi.on('select', onSelect);
    emblaApi.on('init', onInit);
    emblaApi.on('reInit', onInit);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('init', onInit);
      emblaApi.off('reInit', onInit);
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
        <>
          <Button
            className={cn(
              "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90",
              "hidden md:flex"
            )}
            onClick={scrollPrev}
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90",
              "hidden md:flex"
            )}
            onClick={scrollNext}
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
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
        </>
      )}
    </div>
  );
};

export default ProductImageCarousel;