import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://i.postimg.cc/mk001111/20250617-113300.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay scuro */}
      <div className="relative z-10 text-center p-4">
        <Image
          src="https://i.postimg.cc/W1011111/logo-trasparente.png"
          alt="Logo Fuori Tutto"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-2 drop-shadow-lg">FUORI TUTTO</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-md">Sconti fino al 70% su tutti i prodotti!</p>
        <p className="text-lg md:text-xl drop-shadow-sm">Arreda la tua casa con stile e risparmio.</p>
      </div>
    </header>
  );
};

export default Header;