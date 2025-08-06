import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://i.postimg.cc/mk001111/20250617-113300.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative z-10 text-center p-4">
        <img
          src="https://i.postimg.cc/sXZmsrBd/Mobili-Corazzi-Logo-nuovo2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-4 w-[150px] h-auto object-contain"
        />
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-2 drop-shadow-lg">
          FUORI TUTTO
        </h1>
        <p className="text-2xl md:text-3xl font-serif font-semibold mb-4 drop-shadow-md">
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, montato da noi, pronto per casa tua, da subito… e a un prezzo irripetibile.
        </p>
        <p className="text-lg md:text-xl drop-shadow-sm">Sconti fino al 70%</p>
      </div>
    </header>
  );
};

export default Header;
