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

  // Define products that are sold and should show "Esaurito"
  const soldProductTitles = ["Poseidone da 160", "Dionisio cover", "Comò e Comodini Vitality", "Armadio Golf plus"]; // Added "Armadio Golf plus" here
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
            <p className="text-red-600 text-2xl font-bold mt-4 text-center">Esaurito</p>
          ) : (
            product.oldPrice && product.newPrice && product.discountPercentage !== undefined && (
              <div className="mt-4 text-center">
                <p className="text-xl text-muted-foreground line-through">Prezzo originale: € {product.oldPrice.toFixed(2).replace('.', ',')}</p>
                <p className="text-4xl font-extrabold text-primary mt-2">Prezzo scontato: € {product.newPrice.toFixed(2).replace('.', ',')}</p>
                <p className="text-lg text-green-600 font-semibold mt-1">Risparmi il {product.discountPercentage}%!</p>
              </div>
            )
          )}
          {!isSold && urgencyText && (
            <p className="text-red-600 text-sm font-semibold mt-4 text-center">
              {urgencyText}
            </p>
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