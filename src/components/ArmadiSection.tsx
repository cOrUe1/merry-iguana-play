import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductModal from './ProductModal';

interface Product {
  coverPhoto: string;
  title: string;
  description: string;
  additionalPhotos: string[];
}

const armadiProducts: Product[] = [
  {
    coverPhoto: "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg",
    title: "Armadio Spazioso", // Titolo placeholder
    description: "Un armadio moderno e funzionale, ideale per ottimizzare lo spazio nella tua camera da letto. Dotato di ampi scomparti e finiture di alta qualità.", // Descrizione placeholder
    additionalPhotos: [
      "https://i.postimg.cc/8Czzqb2R/20250617-112917-1.png",
      "https://i.postimg.cc/qgHf4kzf/20250617-112503.jpg",
      "https://i.postimg.cc/RFCZxL21/20250617-112747.jpg",
      "https://i.postimg.cc/XNHp3tjr/20250617-112913.jpg",
      "https://i.postimg.cc/RZR0sYDC/20250617-112543.jpg",
      "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg", // Includo anche la cover tra le foto aggiuntive
    ],
  },
  {
    coverPhoto: "https://i.postimg.cc/MK3RPvMr/20250617-111933.jpg",
    title: "Armadio Elegante",
    description: "Design raffinato e linee pulite per un armadio che si adatta a ogni stile. Perfetto per chi cerca eleganza e praticità.",
    additionalPhotos: ["https://i.postimg.cc/MK3RPvMr/20250617-111933.jpg"],
  },
  {
    coverPhoto: "https://i.postimg.cc/NjhGjcWj/20250617-112106.jpg",
    title: "Scrivania Funzionale",
    description: "Scrivania compatta e robusta, ideale per lo studio o l'ufficio domestico. Offre ampio spazio di lavoro e un design ergonomico.",
    additionalPhotos: ["https://i.postimg.cc/NjhGjcWj/20250617-112106.jpg"],
  },
  {
    coverPhoto: "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
    title: "Armadio con Ante Scorrevoli",
    description: "Soluzione salvaspazio con ante scorrevoli, perfetta per ambienti moderni. Massima capienza e facilità d'uso.",
    additionalPhotos: ["https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg"],
  },
];

const ArmadiSection: React.FC = () => {
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
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Armadi e scrivanie</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {armadiProducts.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(product)}
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
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default ArmadiSection;