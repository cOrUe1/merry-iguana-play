import React from 'react';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import PhotoSection from '@/components/PhotoSection';
import Footer from '@/components/Footer';
import ArmadiSection from '@/components/ArmadiSection';
import { Product } from '@/types/product';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for unique IDs

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
      products: [
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/pTCj8Bwy/20250617-112328.jpg",
          title: "Aria da 120",
          description: "Letto contenitore con tessuto sfoderabile e lavabile. Rete con doppia alzata per rifare il letto facilmente e sfruttare al meglio il vano interno.",
          additionalPhotos: [
            "https://i.postimg.cc/B64DXzwd/20250617-112358.jpg",
            "https://i.postimg.cc/QCMTqTDm/20250617-112425.jpg",
          ],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/G2xFKRyL/20250617-113009.jpg",
          title: "Mistral da 120 abbinato alla cameretta",
          description: "Struttura in laminato facile da pulire, testiera dinamica con colori e lunghezze alterne. Perfetto per chi cerca un letto pratico e anti-acaro, ideale per i più giovani.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/fWHXRB7r/20250617-113502.png",
          title: "Poseidone da 160",
          description: "Linee leggere e moderne, con giroletto basso e piedini alti che slanciano la struttura. Un letto che arreda con discrezione e stile.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/0jHJXy2s/20250618-101402.jpg",
          title: "Honey da 160",
          description: "Sembra sospeso grazie ai piedini in plexiglass trasparente: un effetto scenico che lo rende unico e leggerissimo alla vista.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
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
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/xT2K7cR0/20250617-113850-1.png",
          title: "Rosini",
          description: "Poltrona in tecnofibra antimacchia, resistente e ideale anche per chi ha animali. Comfort e praticità senza rinunciare allo stile.",
          additionalPhotos: [
            "https://i.postimg.cc/vHtWdbq5/20250617-113839-1.png",
          ],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/m2fwsdbW/20250618-101309.jpg",
          title: "Sedia a pois Domus",
          description: "Design allegro e originale con fantasia a pois. Un tocco di personalità per ogni camera.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/FHF0r888/20250618-101442.jpg",
          title: "Pouf grigio",
          description: "Minimalista e versatile, perfetto come seduta extra o poggiapiedi discreto e moderno.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/3NP2JwMZ/20250618-101740.jpg",
          title: "Pouf sacco blu",
          description: "Comodo, giovane e informale. Si adatta perfettamente agli spazi relax e alle camere dei ragazzi.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/2jJQx0qB/20250618-101836-1.jpg",
          title: "Poltrona relax Trilly",
          description: "Tre meccanismi indipendenti per massimo comfort: alza piedi, schienale reclinabile e alzata assistita. Dotata di ruote per spostarla anche da seduti.",
          additionalPhotos: [
            "https://i.postimg.cc/VLT2czXs/20250619-105022-1-1.png",
          ],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/N05TTTgx/20250618-102115.png",
          title: "Poltrona sacco rossa",
          description: "Vivace e informale, ideale per ambienti giovani o angoli lettura rilassati. Un tocco di colore e comodità.",
          additionalPhotos: [],
        },
      ],
    },
    {
      title: "Comodini e comò",
      products: [
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/4yTJfCL9/20250617-113607.jpg",
          title: "Comò Vitality",
          description: "Linee moderne e pulite con presa a gola tra i cassetti. Eleganza contemporanea e funzionalità quotidiana.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/02P8hsJg/20250618-101258.jpg",
          title: "Comodino a pois Domus",
          description: "Giocoso ma raffinato, con il suo motivo a pois si abbina perfettamente a camere vivaci e creative.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/nr8LX9zM/20250618-101320.jpg",
          title: "Comò bombato Domus",
          description: "L’ultimo tocco retrò per la tua camera: forme morbide e sinuose per un’eleganza senza tempo.",
          additionalPhotos: [],
        },
        {
          id: uuidv4(), // Unique ID
          coverPhoto: "https://i.postimg.cc/CMjhv15H/20250618-101707.jpg",
          title: "Comodini Vitality",
          description: "In coordinato col comò, completano con coerenza e stile il gruppo letto. Design moderno e finiture curate",
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
        {sectionsData.map((section) => ( // Removed index as key, using section.title
          <PhotoSection key={section.title} title={section.title} products={section.products} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;