import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ProductImageCarousel from './ProductImageCarousel';
import { Product } from '@/types/product'; // Import the Product interface
import { useProductUrgency } from '@/hooks/useProductUrgency'; // Import the new hook

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  // Use the new hook to get the urgency text for the current product
  const urgencyText = useProductUrgency(product?.id || '');

  if (!product) return null;

  // Combine cover photo with additional photos for the carousel
  const allPhotos = [product.coverPhoto, ...product.additionalPhotos];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto relative"> {/* Added relative for absolute positioning */}
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{product.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProductImageCarousel photos={allPhotos} />
        </div>
        {urgencyText && (
          <div className="absolute bottom-4 left-4 text-red-600 text-sm font-semibold leading-tight"> {/* Positioned at bottom-left */}
            {urgencyText.split(' ').map((word, index) => (
              <React.Fragment key={index}>
                {word}{' '}
                {/* Add a line break after every 3 words, or if it's the last word */}
                {(index + 1) % 3 === 0 && index + 1 < urgencyText.split(' ').length && <br />}
              </React.Fragment>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;