import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const armadiPhotos = [
  "https://i.postimg.cc/MK3RPvMr/20250617-111933.jpg",
  "https://i.postimg.cc/vHKg7kkJ/20250617-111945.jpg",
  "https://i.postimg.cc/LXSZYPwh/20250617-111958-1.png",
  "https://i.postimg.cc/NjhGjcWj/20250617-112106.jpg",
  "https://i.postimg.cc/KzsxSSPF/20250617-112142.jpg",
  "https://i.postimg.cc/qgHf4kzf/20250617-112503.jpg",
  "https://i.postimg.cc/RZR0sYDC/20250617-112543.jpg",
  "https://i.postimg.cc/RFCZxL21/20250617-112747.jpg",
  "https://i.postimg.cc/XNHp3tjr/20250617-112913.jpg",
  "https://i.postimg.cc/8Czzqb2R/20250617-112917-1.png",
  "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg",
  "https://i.postimg.cc/8kHLvy1G/20250617-113018.jpg",
  "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
  "https://i.postimg.cc/2y2vf5Hy/20250617-113138.jpg",
  "https://i.postimg.cc/PJphd3yD/20250617-113525.png",
  "https://i.postimg.cc/FsSmq675/20250617-113627.png",
];

const ArmadiSection: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % armadiPhotos.length);
    }, 3000); // Cambia immagine ogni 3 secondi
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (photoUrl: string) => {
    setSelectedImage(photoUrl);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Armadi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {armadiPhotos.map((photo, index) => (
          <Card
            key={index}
            className={cn(
              "overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer",
              {
                "ring-4 ring-primary scale-105": index === highlightedIndex,
              }
            )}
            onClick={() => openLightbox(photo)}
          >
            <CardContent className="p-0">
              <img
                src={photo}
                alt={`Armadio photo ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" {/* Changed h-64 to h-48 */}
              />
            </CardContent>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-center">Armadio - {index + 1}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <DialogContent className="relative max-w-4xl w-full h-auto max-h-[90vh] p-0 border-none bg-transparent">
              <img src={selectedImage} alt="Selected Armadio" className="w-full h-full object-contain" />
            </DialogContent>
          </DialogOverlay>
        </DialogPortal>
      </Dialog>
    </section>
  );
};

export default ArmadiSection;