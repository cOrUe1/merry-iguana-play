import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductModal from './ProductModal';
import { Product } from '@/types/product'; // Import the Product interface

interface PhotoSectionProps {
  title: string;
  products: Product[]; // Changed from photos: string[] to products: Product[]
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(product)}
          >
            <CardContent className="p-0">
              <img
                src={product.coverPhoto}
                alt={`${product.title} photo ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              {product.oldPrice && product.newPrice && product.discountPercentage !== undefined && (
                <div className="p-4 text-center">
                  <p className="text-lg text-muted-foreground line-through">€ {product.oldPrice.toFixed(2).replace('.', ',')}</p>
                  <p className="text-2xl font-bold text-primary">€ {product.newPrice.toFixed(2).replace('.', ',')}</p>
                  <p className="text-sm text-green-600 font-semibold">Sconto del {product.discountPercentage}%</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default PhotoSection;