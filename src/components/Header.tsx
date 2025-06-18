import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 px-4 bg-background text-foreground">
      <img
        src="https://i.postimg.cc/vBzrzXwp/Mobili-Corazzi-Logo-2019-1-1-1.png"
        alt="Mobili Corazzi Logo"
        className="mx-auto mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
      />
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-primary font-serif">
        FUORI TUTTO CAMERE
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, <em>montato da noi</em>, pronto per casa tua, <em>da subito</em>… e a un <em>prezzo irripetibile</em>.
      </p>
    </header>
  );
};

export default Header;