import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <img
          src="https://i.postimg.cc/RFfzWP2x/Mobili-Corazzi-Logo-2019-1-1.png"
          alt="Mobili Corazzi Logo"
          className="mx-auto mb-6 h-16 w-auto"
        />
        <p className="mb-2">Via San Martino, 52</p>
        <p className="mb-2">53025 – Piancastagnaio (SI)</p>
        <p className="mb-2">Whatsapp: +39 393 307 3173</p>
        <p className="mb-4">Tel fisso: +39 0577 786697</p>
        <p className="mb-4">Email: info@mobilicorazzi.it</p>
        <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Corazzi Mobili & Arredo. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;