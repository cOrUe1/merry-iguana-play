import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  photos: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedIndex());
      };
      emblaApi.on('select', onSelect);
      // Initialize selectedIndex
      setSelectedIndex(emblaApi.selectedIndex());
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <section className="py-12 overflow-hidden bg-secondary relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {photos.map((photo, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-80 h-56 mx-4 rounded-lg overflow-hidden shadow-lg">
              <img
                src={photo}
                alt={`Generic photo ${index + 1}`}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-300",
                  { "scale-105": index === selectedIndex } // Apply scale if it's the selected index
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={scrollPrev}
        variant="ghost"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={scrollNext}
        variant="ghost"
        size="icon"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default ImageCarousel;