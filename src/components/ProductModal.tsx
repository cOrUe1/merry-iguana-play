import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ProductImageCarousel from './ProductImageCarousel';
import { useProductStats } from '@/hooks/useProductStats'; // Importa il nuovo hook

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
  const productStatsMessage = useProductStats(product); // Usa il nuovo hook

  if (!product) return null;

  // Combina la foto di copertina con le foto aggiuntive per il carosello
  const allPhotos = [product.coverPhoto, ...product.additionalPhotos];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto relative"> {/* Aggiunto 'relative' per posizionamento assoluto */}
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">{product.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            {product.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ProductImageCarousel photos={allPhotos} />
        </div>
        {productStatsMessage && (
          <div className="absolute bottom-4 left-4 text-red-600 text-sm font-semibold text-left max-w-[calc(100%-32px)]"> {/* Posizionamento e stile */}
            {productStatsMessage.split(':').map((part, index) => ( // Spezza il testo se troppo lungo
              <React.Fragment key={index}>
                {index > 0 && ':'}
                {part}
                {index === 0 && <br />} {/* Vai a capo dopo i due punti */}
              </React.Fragment>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;