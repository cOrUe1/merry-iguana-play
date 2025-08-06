import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://i.postimg.cc/mk001111/20250617-113300.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 text-center p-4 max-w-2xl">
        {/* logo con proporzioni salvate */}
        <img
          src="https://i.postimg.cc/sXZmsrBd/Mobili-Corazzi-Logo-nuovo2019.png"
          alt="Logo Fuori Tutto"
          className="mx-auto mb-6 w-[180px] h-auto object-contain"
        />

        {/* titolo perfettamente in scala */}
        <h1
          className="
            text-[5.5rem]    /* ~88px */
            md:text-[7rem]  /* ~112px su schermi grandi */
            font-extrabold
            mb-4
            drop-shadow-lg
          "
        >
          FUORI TUTTO
        </h1>

        {/* descrizione */}
        <p
          className="
            text-[1.75rem]    /* ~28px */
            md:text-[2.25rem] /* ~36px */
            font-normal
            mb-6
            drop-shadow-md
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
            drop-shadow-sm
          "
        >
          Sconti fino al 70%
        </p>
      </div>
    </header>
  );
};

export default Header;
