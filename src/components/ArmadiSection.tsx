import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ProductModal from './ProductModal';
import { Product } from '@/types/product'; // Import the Product interface
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs

const armadiProducts: Product[] = [
  {
    id: uuidv4(), // Unique ID
    coverPhoto: "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg",
    title: "Armadio Golf plus",
    description: "Design moderno ed essenziale con ante effetto cemento e profili senza maniglie. Include una zona toeletta/studio con LED integrati e una cabina armadio terminale molto capiente. Il pratico sistema sali-scendi rende comodo l’accesso ai vestiti.",
    additionalPhotos: [
      "https://i.postimg.cc/8Czzqb2R/20250617-112917-1.png",
      "https://i.postimg.cc/qgHf4kzf/20250617-112503.jpg",
      "https://i.postimg.cc/RFCZxL21/20250617-112747.jpg",
      "https://i.postimg.cc/XNHp3tjr/20250617-112913.jpg",
      "https://i.postimg.cc/RZR0sYDC/20250617-112543.jpg",
      "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg",
      "https://i.postimg.cc/66L5nW4b/20250619-163026.jpg",
    ],
    oldPrice: 5100.00,
    newPrice: 2799.00,
    discountPercentage: 45,
  },
  {
    id: uuidv4(), // Unique ID
    coverPhoto: "https://i.postimg.cc/Gp82ZZ1R/20250617-111945.jpg",
    title: "Armadio Artigianmobili",
    description: "Due ante scorrevoli con pannello centrale porta TV apribile che nasconde un vano utile. Cassetti con apertura push-pull, struttura solida con spessori rinforzati da 3,5 cm. Eleganza e funzionalità in un unico armadio.",
    additionalPhotos: [
      "https://i.postimg.cc/SQZrrMVM/20250617-111933.jpg",
      "https://i.postimg.cc/WzMqxxgz/20250617-111958-1.png",
      "https://i.postimg.cc/V6J6P2Q1/20250617-112106.jpg",
      "https://i.postimg.cc/nLRz5pW0/20250617-112142.jpg",
      "https://i.postimg.cc/Gp82ZZ1R/20250617-111945.jpg",
    ],
    oldPrice: 4406.00,
    newPrice: 2499.00,
    discountPercentage: 43,
  },
  {
    id: uuidv4(), // Unique ID
    coverPhoto: "https://i.postimg.cc/wxXsPvyq/20250619-092826.jpg",
    title: "Armadio Vitality",
    description: "Un mix di stile e tecnologia: ante battenti, cabina armadio con metallo satinato e vetro, modulo finale completamente in vetro riflettente. Illuminazione LED interna per un tocco scenografico e pratico.",
    additionalPhotos: [
      "https://i.postimg.cc/WbtTZYPB/20250619-092534.jpg",
      "https://i.postimg.cc/nhJxWFmJ/20250619-092551.jpg",
      "https://i.postimg.cc/43RgrJhG/20250619-092643.jpg",
      "https://i.postimg.cc/R0CBMgGp/20250619-092804-1.png",
      "https://i.postimg.cc/yxP1HjzC/20250619-163750.jpg",
    ],
    oldPrice: 4758.00,
    newPrice: 2139.00,
    discountPercentage: 55,
  },
  {
    id: uuidv4(), // Unique ID
    coverPhoto: "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
    title: "Cameretta Mistral",
    description: "Soluzione intelligente per ragazzi: scrivania integrata, libreria scorrevole che rivela un ampio vano armadio, nicchia appendiabiti a portata di mano e una seconda libreria laterale. Tutto ottimizzato in poco spazio.",
    additionalPhotos: [
      "https://i.postimg.cc/YS0V90LY/20250617-113018.jpg",
      "https://i.postimg.cc/tC0HM3Zf/20250617-113127.jpg",
      "https://i.postimg.cc/WbcQnsxc/20250617-113138.jpg",
      "https://i.postimg.cc/Rh5bXTsL/20250617-113217.jpg",
      "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
      "https://i.postimg.cc/KYk8Mttt/20250619-163332.jpg",
      "https://i.postimg.cc/mkRLJqJS/20250619-163341.jpg",
    ],
    oldPrice: 4826.32,
    newPrice: 2589.00,
    discountPercentage: 46,
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
        {armadiProducts.map((product) => ( // Removed index as key, using product.id
          <Card
            key={product.id}
            className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleCardClick(product)}
          >
            <CardContent className="p-0">
              <img
                src={product.coverPhoto}
                alt={`${product.title} cover photo`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
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

export default ArmadiSection;