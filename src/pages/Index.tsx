import React from 'react';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import PhotoSection from '@/components/PhotoSection';
import Footer from '@/components/Footer';
import ArmadiSection from '@/components/ArmadiSection';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  // Placeholder data for generic photos
  const genericPhotos = [
    "https://via.placeholder.com/300x200?text=Generic+1",
    "https://via.placeholder.com/300x200?text=Generic+2",
    "https://via.placeholder.com/300x200?text=Generic+3",
    "https://via.placeholder.com/300x200?text=Generic+4",
    "https://via.placeholder.com/300x200?text=Generic+5",
    "https://via.placeholder.com/300x200?text=Generic+6",
    "https://via.placeholder.com/300x200?text=Generic+7",
    "https://via.placeholder.com/300x200?text=Generic+8",
  ];

  // Placeholder data for categorized sections (excluding Armadi, now handled by ArmadiSection)
  const sectionsData = [
    {
      title: "Comodini e comò", // Changed from "Letti"
      photos: [
        "https://i.postimg.cc/pTCj8Bwy/20250617-112328.jpg",
        "https://i.postimg.cc/B64DXzwd/20250617-112358.jpg",
        "https://i.postimg.cc/QCMTqTDm/20250617-112425.jpg",
        "https://i.postimg.cc/G2xFKRyL/20250617-113009.jpg",
        "https://i.postimg.cc/fWHXRB7r/20250617-113502.png",
        "https://i.postimg.cc/0jHJXy2s/20250618-101402.jpg",
        "https://i.postimg.cc/7YfzG0mY/Chat-GPT-Image-18-giu-2025-11-40-37.png",
      ],
    },
    {
      title: "Cucine",
      photos: [
        "https://via.placeholder.com/400x300?text=Cucina+1",
        "https://via.placeholder.com/400x300?text=Cucina+2",
        "https://via.placeholder.com/400x300?text=Cucina+3",
        "https://via.placeholder.com/400x300?text=Cucina+4",
      ],
    },
    {
      title: "Tavoli",
      photos: [
        "https://via.placeholder.com/400x300?text=Tavolo+1",
        "https://via.placeholder.com/400x300?text=Tavolo+2",
        "https://via.placeholder.com/400x300?text=Tavolo+3",
        "https://via.placeholder.com/400x300?text=Tavolo+4",
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
          <PhotoSection key={index} title={section.title} photos={section.photos} />
        ))}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;