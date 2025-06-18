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
      title: "Pouf e poltrone",
      photos: [
        "https://i.postimg.cc/vHtWdbq5/20250617-113839-1.png",
        "https://i.postimg.cc/xT2K7cR0/20250617-113850-1.png",
        "https://i.postimg.cc/m2fwsdbW/20250618-101309.jpg",
        "https://i.postimg.cc/FHF0r888/20250618-101442.jpg",
        "https://i.postimg.cc/3NP2JwMZ/20250618-101740.jpg",
        "https://i.postimg.cc/2jJQx0qB/20250618-101836-1.jpg",
        "https://i.postimg.cc/N05TTTgx/20250618-102115.png",
      ],
    },
    {
      title: "Comodini e comò",
      photos: [
        "https://i.postimg.cc/4yTJfCL9/20250617-113607.jpg",
        "https://i.postimg.cc/02P8hsJg/20250618-101258.jpg",
        "https://i.postimg.cc/nr8LX9zM/20250618-101320.jpg",
        "https://i.postimg.cc/CMjhv15H/20250618-101707.jpg",
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