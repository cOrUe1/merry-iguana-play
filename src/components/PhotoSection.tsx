import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product'; // Import the Product interface

interface PhotoSectionProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void; // New prop for handling clicks
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ title, products, onProductClick }) => {
  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">{title}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onProductClick(product)} // Call onProductClick with the product
          >
            <CardContent className="p-0">
              <img
                src={product.coverPhoto}
                alt={`${product.title} photo ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;