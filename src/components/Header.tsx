import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 px-4 bg-background text-foreground">
      <img
        src="https://i.postimg.cc/vBzrzXwp/Mobili-Corazzi-Logo-2019-1-1-1.png"
        alt="Mobili Corazzi Logo"
        className="mx-auto mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
      />
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        Benvenuti nel mondo Corazzi, dove l'eleganza incontra la funzionalità e il design prende forma.
      </p>
    </header>
  );
};

export default Header;