import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Stethoscope, Video } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-primary-light/10 to-secondary-light/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-primary-light/20 px-4 py-2 text-sm text-primary">
                <Stethoscope className="mr-2 h-4 w-4" />
                Plateforme de santé #1 au Maroc
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                Votre{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  santé
                </span>{" "}
                entre de bonnes mains
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Trouvez et consultez les meilleurs médecins du Maroc. 
                Prenez rendez-vous en ligne ou en téléconsultation, 
                où que vous soyez.
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border/40">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder="Rechercher un médecin, spécialité..."
                      className="pl-10 h-12 border-0 bg-muted/50"
                    />
                  </div>
                </div>
                <div className="sm:w-48">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder="Ville"
                      className="pl-10 h-12 border-0 bg-muted/50"
                    />
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-medical h-12 px-8"
                >
                  Rechercher
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Médecins vérifiés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Patients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Médecin professionnel Tbibna"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 left-8 bg-white/95 backdrop-blur rounded-xl p-4 shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Video className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Téléconsultation</div>
                    <div className="text-xs text-muted-foreground">Disponible maintenant</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur rounded-xl p-4 shadow-card">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">4.8/5</div>
                  <div className="text-xs text-muted-foreground">Note moyenne</div>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;