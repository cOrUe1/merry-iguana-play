import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full bg-background text-foreground py-16 px-4 text-center overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-pattern-dots opacity-10 z-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 leading-tight">
          Svuota Tutto!
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary-foreground mb-8">
          Arredo di Design in Pronta Consegna
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Abbiamo deciso di lasciare spazio al nuovo, ma chi coglie l’occasione adesso, porta a casa arredo di design, <em>montato da noi</em>, pronto per casa tua, <em>da subito</em>… e a un <em>prezzo irripetibile</em>.
        </p>
        <p className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Sconti fino al <span className="text-4xl md:text-5xl font-extrabold">70%</span>
        </p>
        <Button
          asChild
          className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 rounded-full text-xl md:text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <a href="tel:+393471234567" className="flex items-center justify-center">
            <Phone className="mr-3 h-6 w-6" />
            Contattaci Subito!
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;