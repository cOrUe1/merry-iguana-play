"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductModal from './ProductModal';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { useProductCardAnimation } from '@/hooks/useProductCardAnimation';
import { AspectRatio } from '@/components/ui/aspect-ratio'; // Import AspectRatio

interface PhotoSectionProps {
  title: string;
  products: Product[];
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeProductId = useProductCardAnimation(products);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const soldProductTitles = ["Poseidone da 160", "Dionisio cover", "Comò e Comodini Vitality", "Armadio Golf plus"]; 

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const isSold = soldProductTitles.includes(product.title);
          return (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(product)}
            >
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 3} className="w-full"> {/* Added AspectRatio */}
                  <img
                    src={product.coverPhoto}
                    alt={`${product.title} photo ${index + 1}`}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-300", // Changed h-64 to h-full
                      activeProductId === product.id && "scale-105",
                      isSold && "grayscale" // Apply grayscale if sold
                    )}
                  />
                </AspectRatio>
                <div className="p-4 text-center">
                  {isSold ? (
                    <p className="text-red-600 text-xl font-bold">Esaurito</p>
                  ) : (
                    product.oldPrice && product.newPrice && product.discountPercentage !== undefined && (
                      <>
                        <p className="text-lg text-muted-foreground line-through">€ {product.oldPrice.toFixed(2).replace('.', ',')}</p>
                        <p className="text-2xl font-bold text-primary">€ {product.newPrice.toFixed(2).replace('.', ',')}</p>
                        <p className="text-sm text-green-600 font-semibold">Sconto del {product.discountPercentage}%</p>
                      </>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
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