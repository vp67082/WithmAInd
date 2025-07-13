import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('leistungen')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('automatisierung')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Automatisierung
            </button>
            <button
              onClick={() => scrollToSection('kundenstimmen')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kundenstimmen
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground"
            >
              Kostenlose Beratung
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <button
              onClick={() => scrollToSection('leistungen')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('automatisierung')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Automatisierung
            </button>
            <button
              onClick={() => scrollToSection('kundenstimmen')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Kundenstimmen
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground mt-4"
            >
              Kostenlose Beratung
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};