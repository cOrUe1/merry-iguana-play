import React from 'react';

interface ImageCarouselProps {
  photos: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ photos }) => {
  // Duplicate photos to create a seamless loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="py-12 overflow-hidden bg-secondary">
      <div className="relative w-full">
        <div className="flex animate-scroll-left">
          {duplicatedPhotos.map((photo, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-56 mx-4 rounded-lg overflow-hidden shadow-lg">
              <img
                src={photo}
                alt={`Generic photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;