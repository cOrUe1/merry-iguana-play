import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PhotoSectionProps {
  title: string;
  photos: string[];
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, photos }) => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <img
                src={photo}
                alt={`${title} photo ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-center">{title} - {index + 1}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;