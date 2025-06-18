import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PhotoSectionProps {
  title: string;
  photos: string[];
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, photos }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openLightbox = (photoUrl: string) => {
    setSelectedImage(photoUrl);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {photos.map((photo, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => openLightbox(photo)}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <DialogContent className="relative max-w-4xl w-full h-auto max-h-[90vh] p-0 border-none">
              <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
            </DialogContent>
          </DialogOverlay>
        </DialogPortal>
      </Dialog>
    </section>
  );
};

export default PhotoSection;