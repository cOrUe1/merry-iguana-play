import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImageCarouselProps {
  photos: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ photos }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
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
                className="w-full h-96 object-contain" // Use object-contain to ensure full image visibility
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
              "hidden md:flex" // Hide on small screens if not needed
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
              "hidden md:flex" // Hide on small screens if not needed
            )}
            onClick={scrollNext}
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}
    </div>
  );
};

export default ProductImageCarousel;