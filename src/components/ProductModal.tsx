import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ProductImageCarousel from './ProductImageCarousel';
// import { useProductStats } from '@/hooks/useProductStats'; // Rimosso temporaneamente

interface Product {
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  // Combina la foto di copertina con le foto aggiuntive per il carosello
  const allPhotos = [product.coverPhoto, ...product.additionalPhotos];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{product.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProductImageCarousel photos={allPhotos} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;