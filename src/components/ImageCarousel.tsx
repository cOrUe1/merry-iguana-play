import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '@/types/product'; // Import Product interface

interface ImageCarouselProps {
  products: Product[]; // Changed from photos: string[] to products: Product[]
  onProductClick: (product: Product) => void; // New prop for handling clicks
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ products, onProductClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add event listeners for custom behavior if needed
    }
  }, [emblaApi]);

  if (!products || products.length === 0) {
    return <div className="text-center text-muted-foreground py-8">Nessuna immagine disponibile nel carosello.</div>;
  }

  return (
    <section className="py-12 overflow-hidden bg-secondary relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {products.map((product, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-80 h-56 mx-4 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => onProductClick(product)} // Call onProductClick with the product
            >
              <img
                src={product.coverPhoto}
                alt={`${product.title} photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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