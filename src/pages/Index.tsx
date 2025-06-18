import React from 'react';
import Header from '@/components/Header';
import ImageCarousel from '@/components/ImageCarousel';
import PhotoSection from '@/components/PhotoSection';
import Footer from '@/components/Footer';
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

  // Placeholder data for categorized sections
  const sectionsData = [
    {
      title: "Armadi",
      photos: [
        "https://i.postimg.cc/MK3RPvMr/20250617-111933.jpg",
        "https://i.postimg.cc/vHKg7kkJ/20250617-111945.jpg",
        "https://i.postimg.cc/LXSZYPwh/20250617-111958-1.png",
        "https://i.postimg.cc/NjhGjcWj/20250617-112106.jpg",
        "https://i.postimg.cc/KzsxSSPF/20250617-112142.jpg",
        "https://i.postimg.cc/qgHf4kzf/20250617-112503.jpg",
        "https://i.postimg.cc/RZR0sYDC/20250617-112543.jpg",
        "https://i.postimg.cc/RFCZxL21/20250617-112747.jpg",
        "https://i.postimg.cc/XNHp3tjr/20250617-112913.jpg",
        "https://i.postimg.cc/8Czzqb2R/20250617-112917-1.png",
        "https://i.postimg.cc/44DnmVcG/20250617-112932.jpg",
        "https://i.postimg.cc/8kHLvy1G/20250617-113018.jpg",
        "https://i.postimg.cc/wBCQW3Pd/20250617-113109.jpg",
        "https://i.postimg.cc/2y2vf5Hy/20250617-113138.jpg",
        "https://i.postimg.cc/PJphd3yD/20250617-113525.png",
        "https://i.postimg.cc/FsSmq675/20250617-113627.png",
      ],
    },
    {
      title: "Letti",
      photos: [
        "https://via.placeholder.com/400x300?text=Letto+1",
        "https://via.placeholder.com/400x300?text=Letto+2",
        "https://via.placeholder.com/400x300?text=Letto+3",
        "https://via.placeholder.com/400x300?text=Letto+4",
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