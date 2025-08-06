import Header from '@/components/Header';
import HeroCarousel from '../components/HeroCarousel.tsx'; // Aggiunta esplicita dell'estensione .tsx
import PhotoSection from '@/components/PhotoSection';
import ArmadiSection from '@/components/ArmadiSection';
import Footer from '@/components/Footer';
import CucineSection from '@/components/CucineSection';

import { Product } from '@/types/product';
import { v4 as uuidv4 } from 'uuid';

const lettiProducts: Product[] = [
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/j2111111/20250617-110900.jpg",
    title: "Letto Poseidone da 160",
    description: "Letto matrimoniale con testiera imbottita e rivestimento in tessuto sfoderabile. Design moderno e confortevole, ideale per ogni camera da letto.",
    additionalPhotos: [
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
    ],
    oldPrice: 1200.00,
    newPrice: 599.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/Pq111111/20250617-110940.jpg",
    title: "Letto Dionisio cover",
    description: "Letto singolo con struttura in legno massello e rivestimento in ecopelle. Perfetto per camerette o stanze degli ospiti, offre stile e praticità.",
    additionalPhotos: [
      "https://i.postimg.cc/Pq111111/20250617-110940.jpg",
      "https://i.postimg.cc/Pq111111/20250617-110940.jpg",
      "https://i.postimg.cc/Pq111111/20250617-110940.jpg",
    ],
    oldPrice: 800.00,
    newPrice: 399.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/W1111111/20250617-111010.jpg",
    title: "Letto Apollo",
    description: "Letto matrimoniale con contenitore, ideale per ottimizzare lo spazio. Rivestimento in tessuto antimacchia e design moderno.",
    additionalPhotos: [
      "https://i.postimg.cc/W1111111/20250617-111010.jpg",
      "https://i.postimg.cc/W1111111/20250617-111010.jpg",
      "https://i.postimg.cc/W1111111/20250617-111010.jpg",
    ],
    oldPrice: 1500.00,
    newPrice: 749.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/j2111111/20250617-110900.jpg",
    title: "Letto Poseidone da 160",
    description: "Letto matrimoniale con testiera imbottita e rivestimento in tessuto sfoderabile. Design moderno e confortevole, ideale per ogni camera da letto.",
    additionalPhotos: [
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
      "https://i.postimg.cc/j2111111/20250617-110900.jpg",
    ],
    oldPrice: 1200.00,
    newPrice: 599.00,
    discountPercentage: 50,
  },
];

const soggiorniProducts: Product[] = [
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/44111111/20250617-111100.jpg",
    title: "Divano Zeus",
    description: "Divano angolare con penisola reversibile, rivestimento in tessuto tecnico antimacchia. Ampio e comodo, perfetto per il relax in famiglia.",
    additionalPhotos: [
      "https://i.postimg.cc/44111111/20250617-111100.jpg",
      "https://i.postimg.cc/44111111/20250617-111100.jpg",
      "https://i.postimg.cc/44111111/20250617-111100.jpg",
    ],
    oldPrice: 2500.00,
    newPrice: 1249.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/Pq111111/20250617-111130.jpg",
    title: "Parete attrezzata Atena",
    description: "Parete attrezzata moderna con finitura laccata lucida e inserti in legno. Ampio spazio per TV, libri e oggetti decorativi.",
    additionalPhotos: [
      "https://i.postimg.cc/Pq111111/20250617-111130.jpg",
      "https://i.postimg.cc/Pq111111/20250617-111130.jpg",
      "https://i.postimg.cc/Pq111111/20250617-111130.jpg",
    ],
    oldPrice: 1800.00,
    newPrice: 899.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/W1111111/20250617-111200.jpg",
    title: "Tavolino Hermes",
    description: "Tavolino da salotto con struttura in metallo e piano in vetro temperato. Design minimalista ed elegante, perfetto per completare il soggiorno.",
    additionalPhotos: [
      "https://i.postimg.cc/W1111111/20250617-111200.jpg",
      "https://i.postimg.cc/W1111111/20250617-111200.jpg",
      "https://i.postimg.cc/W1111111/20250617-111200.jpg",
    ],
    oldPrice: 400.00,
    newPrice: 199.00,
    discountPercentage: 50,
  },
];

const comodiniProducts: Product[] = [
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/W1111111/20250619-163750.jpg",
    title: "Comò e Comodini Vitality",
    description: "Set comò e comodini Vitality: design moderno con finitura laccata opaca e maniglie a gola. Cassetti spaziosi con chiusura ammortizzata, ideali per organizzare al meglio la tua camera da letto. Il comò offre un ampio piano d'appoggio, mentre i comodini completano l'arredo con funzionalità e stile.",
    additionalPhotos: [
      "https://i.postimg.cc/W1111111/20250619-163750.jpg",
      "https://i.postimg.cc/W1111111/20250619-163750.jpg",
      "https://i.postimg.cc/W1111111/20250619-163750.jpg",
    ],
    oldPrice: 900.00,
    newPrice: 449.00,
    discountPercentage: 50,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/Pq111111/20250617-111300.jpg",
    title: "Comodino a pois Domus",
    description: "Comodino singolo con design giocoso a pois, perfetto per camerette. Un cassetto e un vano a giorno per riporre piccoli oggetti.",
    additionalPhotos: [
      "https://i.postimg.cc/Pq111111/20250617-111300.jpg",
      "https://i.postimg.cc/Pq111111/20250617-111300.jpg",
      "https://i.postimg.cc/Pq111111/20250617-111300.jpg",
    ],
    oldPrice: 250.00,
    newPrice: 149.00,
    discountPercentage: 40,
  },
  {
    id: uuidv4(),
    coverPhoto: "https://i.postimg.cc/W1111111/20250617-111330.jpg",
    title: "Comodino Eos",
    description: "Comodino moderno con due cassetti, finitura opaca e maniglie integrate. Ideale per un tocco di eleganza nella tua camera da letto.",
    additionalPhotos: [
      "https://i.postimg.cc/W1111111/20250617-111330.jpg",
      "https://i.postimg.cc/W1111111/20250617-111330.jpg",
      "https://i.postimg.cc/W1111111/20250617-111330.jpg",
    ],
    oldPrice: 300.00,
    newPrice: 179.00,
    discountPercentage: 40,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroCarousel />
        <CucineSection />
        <PhotoSection title="Letti" products={lettiProducts} />
        <PhotoSection title="Soggiorni" products={soggiorniProducts} />
        <ArmadiSection />
        <PhotoSection title="Comodini e Comò" products={comodiniProducts} />
      </main>
      <Footer />
    </div>
  );
}