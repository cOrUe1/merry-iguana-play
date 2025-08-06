import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-white flex flex-col items-center justify-center text-gray-900 py-16">
      <div className="relative z-10 text-center p-4 mx-auto w-full max-w-[90%] lg:max-w-[900px]">
        {/* Logo responsivo: più piccolo su mobile, ingrandito su desktop */}
        <img
          src="https://i.postimg.cc/y8qQLnNY/2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-6 w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain"
        />

        {/* Titolo “FUORI TUTTO”: dimensioni variabili e wrap su mobile */}
        <h1
          className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-semibold mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          FUORI TUTTO
        </h1>

        {/* Descrizione grigia: dimensioni ridotte su mobile, max 3 righe */}
        <p
          className="text-[1rem] sm:text-[1.2rem] md:text-[1.6rem] text-[#64748B] mb-6 leading-snug drop-shadow-md max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[800px]"
        >
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design,<br />
          <em>montato da noi</em>, pronto per casa tua, <em>da subito</em>…<br />
          e a un <em>prezzo irripetibile</em>.
        </p>

        {/* “Sconti fino al 70%”: dimensioni variabili su mobile/desktop */}
        <div className="flex flex-col sm:flex-row items-baseline justify-center">
          <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-bold">
            Sconti fino al
          </span>
          <span className="ml-0 sm:ml-2 mt-1 sm:mt-0 text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold">
            70%
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
