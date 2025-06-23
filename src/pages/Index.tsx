import React from 'react';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import PhotoSection from '@/components/PhotoSection';
import Footer from '@/components/Footer';
import ArmadiSection from '@/components/ArmadiSection';
import { Product } from '@/types/product'; // Import the Product interface

const Index: React.FC = () => {
  // Placeholder data for generic photos
  const genericPhotos = [
    "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
    "https://i.postimg.cc/pTCj8Bwy/20250617-112328.jpg",
    "https://i.postimg.cc/QCMTqTDm/20250617-112425.jpg",
    "https://i.postimg.cc/xT2K7cR0/20250617-113850-1.png",
    "https://i.postimg.cc/3NP2JwMZ/20250618-101740.jpg",
    "https://i.postimg.cc/8PxVNg7P/20250617-113217.jpg",
  ];

  // Placeholder data for categorized sections (excluding Armadi, now handled by ArmadiSection)
  const sectionsData = [
    {
      title: "Letti",
      products: [ // Changed from photos to products
        {
          coverPhoto: "https://i.postimg.cc/pTCj8Bwy/20250617-112328.jpg",
          title: "Aria da 120",
          description: "Letto contenitore con tessuto sfoderabile e lavabile. Rete con doppia alzata per rifare il letto facilmente e sfruttare al meglio il vano interno.",
          additionalPhotos: [
            "https://i.postimg.cc/B64DXzwd/20250617-112358.jpg",
            "https://i.postimg.cc/QCMTqTDm/20250617-112425.jpg",
          ],
        },
        {
          coverPhoto: "https://i.postimg.cc/G2xFKRyL/20250617-113009.jpg",
          title: "Mistral da 120 abbinato alla cameretta",
          description: "Struttura in laminato facile da pulire, testiera dinamica con colori e lunghezze alterne. Perfetto per chi cerca un letto pratico e anti-acaro, ideale per i più giovani.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/fWHXRB7r/20250617-113502.png",
          title: "Poseidone da 160",
          description: "Linee leggere e moderne, con giroletto basso e piedini alti che slanciano la struttura. Un letto che arreda con discrezione e stile.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/0jHJXy2s/20250618-101402.jpg",
          title: "Honey da 160",
          description: "Sembra sospeso grazie ai piedini in plexiglass trasparente: un effetto scenico che lo rende unico e leggerissimo alla vista.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/7YfzG0mY/Chat-GPT-Image-18-giu-2025-11-40-37.png",
          title: "Dionisio cover",
          description: "Contenitore robusto in multistrato con alzata semplice, rivestimento sfoderabile e una testiera con cover double face: tono su tono da un lato, a contrasto dall’altro.",
          additionalPhotos: [],
        },
      ],
    },
    {
      title: "Pouf e poltrone",
      products: [
        {
          coverPhoto: "https://i.postimg.cc/xT2K7cR0/20250617-113850-1.png", // Second photo as cover
          title: "Poltrona Relax",
          description: "Una poltrona avvolgente per i tuoi momenti di relax.",
          additionalPhotos: [
            "https://i.postimg.cc/vHtWdbq5/20250617-113839-1.png", // First photo as additional
          ],
        },
        {
          coverPhoto: "https://i.postimg.cc/m2fwsdbW/20250618-101309.jpg",
          title: "Pouf Design",
          description: "Un pouf dal design moderno che arreda con stile.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/FHF0r888/20250618-101442.jpg",
          title: "Poltrona Elegante",
          description: "Eleganza e comfort si fondono in questa poltrona raffinata.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/3NP2JwMZ/20250618-101740.jpg",
          title: "Pouf Multiuso",
          description: "Un pouf pratico e funzionale, perfetto per ogni esigenza.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/2jJQx0qB/20250618-101836-1.jpg",
          title: "Poltrona Accogliente",
          description: "Una poltrona che invita al relax con il suo design accogliente.",
          additionalPhotos: [
            "https://i.postimg.cc/VLT2czXs/20250619-105022-1-1.png", // New additional photo
          ],
        },
        {
          coverPhoto: "https://i.postimg.cc/N05TTTgx/20250618-102115.png",
          title: "Pouf Moderno",
          description: "Un pouf dal look contemporaneo, ideale per ambienti dinamici.",
          additionalPhotos: [],
        },
      ],
    },
    {
      title: "Comodini e comò",
      products: [
        {
          coverPhoto: "https://i.postimg.cc/4yTJfCL9/20250617-113607.jpg",
          title: "Comodino Funzionale",
          description: "Un comodino pratico e compatto, perfetto per la tua camera da letto.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/02P8hsJg/20250618-101258.jpg",
          title: "Comò Spazioso",
          description: "Un comò capiente per organizzare al meglio i tuoi effetti personali.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/nr8LX9zM/20250618-101320.jpg",
          title: "Comodino Elegante",
          description: "Un comodino dal design raffinato che aggiunge un tocco di classe.",
          additionalPhotos: [],
        },
        {
          coverPhoto: "https://i.postimg.cc/CMjhv15H/20250618-101707.jpg",
          title: "Comò Moderno",
          description: "Un comò dalle linee pulite e moderne, ideale per ogni ambiente.",
          additionalPhotos: [],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ImageCarousel photos={genericPhotos} />
        <ArmadiSection />
        {sectionsData.map((section, index) => (
          <PhotoSection key={index} title={section.title} products={section.products} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;