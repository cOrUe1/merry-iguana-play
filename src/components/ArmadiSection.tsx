import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types/product'; // Import Product interface

interface ArmadiSectionProps {
  products: Product[]; // Receive products as a prop
  onProductClick: (product: Product) => void; // New prop for handling clicks
}

const ArmadiSection: React.FC<ArmadiSectionProps> = ({ products, onProductClick }) => {
  if (!products || products.length === 0) {
    return null; // Or a message indicating no armadi available
  }

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Armadi e scrivanie</h2>
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
                alt={`${product.title} cover photo`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArmadiSection;