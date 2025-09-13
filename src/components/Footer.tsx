import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <div className="h-4 w-4 rounded-full bg-white" />
              </div>
              <span className="text-xl font-bold">Tbibna</span>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              La plateforme de santé digitale leader au Maroc. 
              Connectant patients et médecins pour un accès facilité aux soins de qualité.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Consultation en ligne</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Prise de rendez-vous</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Dossier médical</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Urgences 24/7</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Médecine préventive</a></li>
            </ul>
          </div>

          {/* Spécialités */}
          <div>
            <h3 className="font-semibold mb-4">Spécialités</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Cardiologie</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Neurologie</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Pédiatrie</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Gynécologie</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Dermatologie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+212 5 22 XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">contact@tbibna.ma</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-background/80">
                  123 Avenue Mohammed V<br />
                  Casablanca, Maroc
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/60">
            © 2024 Tbibna. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;