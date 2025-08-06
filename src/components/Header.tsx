import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-white flex flex-col items-center justify-center text-gray-900 py-16">
      <div className="relative z-10 text-center p-4 max-w-[900px]">
        {/* Logo sostituito e ingrandito */}
        <img
          src="https://i.postimg.cc/y8qQLnNY/2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-6 w-[500px] h-auto object-contain"
        />

        {/* Titolo “FUORI TUTTO” su una sola riga, più piccolo */}
        <h1
          className="whitespace-nowrap text-[4.5rem] md:text-[6rem] font-semibold mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          FUORI TUTTO
        </h1>

        {/* Descrizione grigia in esattamente 3 righe con italic*/}
        <p
          className="text-[1.2rem] md:text-[1.6rem] text-[#64748B] mb-6 leading-snug drop-shadow-md"
        >
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design,<br />
          <em>montato da noi</em>, pronto per casa tua, <em>da subito</em>…<br />
          e a un <em>prezzo irripetibile</em>.
        </p>

        {/* “Sconti fino al 70%” */}
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
