"use client";

import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          <CarouselItem className="h-full">
            <div className="relative w-full h-full">
              <img
                src="https://i.postimg.cc/sXZmsrBd/Mobili-Corazzi-Logo-nuovo2019.png" // Nuova immagine
                alt="Mobili Corazzi Logo"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  FUORI TUTTO
                </h1>
                <p className="text-lg md:text-2xl text-white max-w-3xl mb-6 drop-shadow-md">
                  Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, montato da noi, pronto per casa tua, da subito… e a un prezzo irripetibile.
                </p>
                <p className="text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">
                  Sconti fino al 70%
                </p>
              </div>
            </div>
          </CarouselItem>
          {/* Puoi aggiungere altre CarouselItem qui se ci fossero altre immagini/testi per il carousel */}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;