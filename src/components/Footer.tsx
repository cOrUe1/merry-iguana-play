import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Contatti Corazzi</h3>
        <p className="mb-2">Indirizzo: Via Roma, 123, 00100 Roma RM</p>
        <p className="mb-2">Telefono: +39 06 1234567</p>
        <p className="mb-4">Email: info@corazzi.it</p>
        <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Corazzi. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;