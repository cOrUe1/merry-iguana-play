import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-white flex flex-col items-center justify-center text-gray-900 py-16">
      <div className="relative z-10 text-center p-4 max-w-2xl">
        {/* Logo ulteriormente ingrandito */}
        <img
          src="https://i.postimg.cc/sXZmsrBd/Mobili-Corazzi-Logo-nuovo2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-6 w-[400px] h-auto object-contain"
        />

        {/* Titolo “FUORI TUTTO” senza accapo, leggermente più piccolo, font Playfair Display */}
        <h1
          className="text-[5rem] md:text-[6.5rem] font-semibold mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          FUORI TUTTO
        </h1>

        {/* Paragrafo colore #64748B e dimensione ridotta */}
        <p className="text-[1.5rem] md:text-[2rem] text-[#64748B] mb-6 drop-shadow-md">
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, montato da noi, pronto per casa tua, da subito… e a un prezzo irripetibile.
        </p>

        {/* “Sconti fino al 70%” ingrandito, con “70%” ancora più grande */}
        <div className="flex items-baseline justify-center">
          <span className="text-[2rem] md:text-[2.5rem] font-bold">
            Sconti fino al
          </span>
          <span className="ml-2 text-[3rem] md:text-[3.5rem] font-bold">
            70%
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
