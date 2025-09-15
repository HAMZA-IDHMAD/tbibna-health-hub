import { Button } from "@/components/ui/button";
import { Search, Menu, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <div className="h-4 w-4 rounded-full bg-white" />
          </div>
          <span className="text-xl font-bold text-primary">Tbibna</span>
        </div>

        {/* Desktop Navigation */}
        <div className="mr-6 hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link 
            to="/" 
            className="transition-colors hover:text-primary text-foreground"
          >
            Accueil
          </Link>
          <a 
            href="#services" 
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Services
          </a>
          <Link 
            to="/doctor-landing" 
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Médecins
          </Link>
          <Link 
            to="/medicine" 
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            Pharmacie
          </Link>
          <a 
            href="#about" 
            className="transition-colors hover:text-primary text-muted-foreground"
          >
            À propos
          </a>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4 mr-6">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+212 5 22 XX XX XX</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Maroc</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Se connecter
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:opacity-90 shadow-medical"
          >
            Inscription
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;