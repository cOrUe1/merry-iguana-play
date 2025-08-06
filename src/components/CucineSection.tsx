"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductModal from './ProductModal';
import { Product } from '@/types/product';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { useProductCardAnimation } from '@/hooks/useProductCardAnimation';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const cucineProducts: Product[] = [
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/FFGY1bNx/20250721-093023.jpg",
    title: "Cucina FUTURA – COLOMBINI",
    description: "Elegante cucina lineare con portale, isola centrale e piano snack integrato. Ante con telaio in legno massello laccate bianco opaco, abbinato al moderno Fenix rosso velluto su isola e portale. Lavello sottotop in resina, miscelatore coordinato e illuminazione LED sotto le mensole, per un effetto contemporaneo e raffinato.",
    additionalPhotos: [
      "https://i.postimg.cc/LXK1BmbB/20250721-092230.jpg",
      "https://i.postimg.cc/NGxHmq7m/20250703-174632-3.jpg",
      "https://i.postimg.cc/d3JZp4vh/20250703-174616-1-2.jpg",
    ],
    oldPrice: 12545.00,
    newPrice: 6899.00,
    discountPercentage: 45,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/KcwpCHHK/20250703-170853-0.jpg",
    title: "Cucina ASTRA SP.22",
    description: "Cucina angolare dal carattere deciso e moderno. Colonna dispensa spaziosa, frigo e forno maxi da 75 cm. Design distintivo grazie al mix di finiture: laminato effetto legno, colonne cannettate e pensili laccati metallizzati. Top in gres effetto marmo calacatta gold, lavello in acciaio inox multi-accessoriato con miscelatore coordinato. Schienale in vetro magnetico retroilluminato con sensore touch e accessori magnetici spostabili",
    additionalPhotos: [
      "https://i.postimg.cc/JnLsHPsp/20250703-171213-2.jpg",
      "https://i.postimg.cc/RhCqXhQf/20250703-171029-2.jpg",
      "https://i.postimg.cc/4xj7sJsk/20250703-171047-2.jpg",
      "https://i.postimg.cc/W4JZkdX1/20250721-092833.jpg",
      "https://i.postimg.cc/wx5h2sHt/20250721-092844.jpg",
    ],
    oldPrice: 12807.00,
    newPrice: 7299.00,
    discountPercentage: 43,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/7YmS885w/20250721-092934.jpg",
    title: "Cucina ASTRA HC08",
    description: "Composizione a portale con pensili di doppia profondità e isola multifunzionale. Include una pratica dispensa estraibile e frigo maggiorato da 75 cm. Materiali di qualità con ante impiallacciate, top, schienale, zoccolo e fianchi isola, in HPL. Lavello integrato con fondo inox e tagliere coordinato, miscelatore con doccetta estraibile e illuminazione LED.",
    additionalPhotos: [
      "https://i.postimg.cc/zBFVCKW8/20250703-170958-2.jpg",
      "https://i.postimg.cc/dDchK68M/20250703-171009.jpg",
      "https://i.postimg.cc/8kjnKStQ/20250703-171020.jpg",
    ],
    oldPrice: 15083.00,
    newPrice: 8899.00,
    discountPercentage: 41,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/JzW6zBmM/20250703-173729-2.jpg",
    title: "Cucina ASTRA TWENTY",
    description: "Cucina angolare giovane e dinamica con pratico piano snack. Design pulito con maniglia esterna per la colonna frigo e gole per le altre ante. Finitura in laminato effetto cemento per il top e cannettato per lo schienale. Lavello grande in acciaio inox e LED sottopensili per completare con stile questa composizione contemporanea.",
    additionalPhotos: [
      "https://i.postimg.cc/BQF73Brm/20250703-174050-2.jpg",
      "https://i.postimg.cc/fT2SqcPb/20250703-174107-3.jpg",
      "https://i.postimg.cc/mgPzvcxy/20250703-174113-3.jpg",
    ],
    oldPrice: 6705.00,
    newPrice: 3899.00,
    discountPercentage: 42,
  },
];

const CucineSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeProductId = useProductCardAnimation(cucineProducts);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Nessun prodotto esaurito per le cucine al momento
  const soldProductTitles: string[] = []; 

  return (
    <section className="py-16 px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Cucine</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cucineProducts.map((product) => {
          const isSold = soldProductTitles.includes(product.title);
          return (
            <Card
              key={product.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(product)}
            >
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 3} className="w-full relative">
                  <img
                    src={product.coverPhoto}
                    alt={`${product.title} cover photo`}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-300",
                      activeProductId === product.id && "scale-105",
                      isSold && "grayscale"
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

export default CucineSection;