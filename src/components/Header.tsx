import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="relative w-full bg-white flex flex-col items-center justify-center text-gray-900 py-16"
    >
      <div className="relative z-10 text-center p-4 max-w-2xl">
        {/* logo molto più grande */}
        <img
          src="https://i.postimg.cc/sXZmsrBd/Mobili-Corazzi-Logo-nuovo2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-6 w-[300px] h-auto object-contain"
        />

        {/* titolo */}
        <h1
          className="
            text-[5.5rem]    /* ~88px */
            md:text-[7rem]  /* ~112px su schermi grandi */
            font-extrabold
            mb-4
          "
        >
          FUORI TUTTO
        </h1>

        {/* descrizione */}
        <p
          className="
            text-[1.75rem]    /* ~28px */
            md:text-[2.25rem] /* ~36px */
            font-Playfair Display
            mb-6
          "
        >
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, montato da noi, pronto per casa tua, da subito… e a un prezzo irripetibile.
        </p>

        {/* sconto */}
        <p
          className="
            text-[1.5rem]    /* ~24px */
            md:text-[2rem]  /* ~32px */
            font-bold
          "
        >
          Sconti fino al 70%
        </p>
      </div>
    </header>
  );
};

export default Header;
