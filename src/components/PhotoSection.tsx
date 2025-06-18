import React from 'react'; // Removed useState
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // cn is not used anymore, but keeping it for consistency

interface PhotoSectionProps {
  title: string;
  photos: string[];
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, photos }) => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" // Removed cursor-pointer
            // Removed onClick handler
          >
            <CardContent className="p-0">
              <img
                src={photo}
                alt={`${title} photo ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;