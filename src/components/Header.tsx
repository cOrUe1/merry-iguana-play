import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 px-4 bg-background text-foreground">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-primary">
        CORAZZI
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
        Benvenuti nel mondo Corazzi, dove l'eleganza incontra la funzionalità e il design prende forma.
      </p>
    </header>
  );
};

export default Header;