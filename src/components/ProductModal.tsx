import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ProductImageCarousel from './ProductImageCarousel';
import BookingModal from './BookingModal';
import { Product } from '@/types/product';
import { useProductUrgency } from '@/hooks/useProductUrgency';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const urgencyText = useProductUrgency(product?.id || '');

  if (!product) return null;

  const allPhotos = [product.coverPhoto, ...product.additionalPhotos];

  // Define products that are sold
  const soldProductTitles = ["Poseidone da 160", "Dionisio cover"];
  const isSold = soldProductTitles.includes(product.title);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <>
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
          {isSold ? (
            <p className="text-red-600 text-sm font-semibold mt-4">Venduto</p>
          ) : (
            urgencyText && (
              <p className="text-red-600 text-sm font-semibold mt-4">
                {urgencyText}
              </p>
            )
          )}
          <DialogFooter className="flex justify-end mt-4">
            {!isSold && (
              <Button onClick={handleOpenBookingModal}>Prenota ora!</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        productTitle={product.title}
      />
    </>
  );
};

export default ProductModal;