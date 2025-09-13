import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Phone, 
  Shield,
  Clock,
  MapPin 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Prise de rendez-vous",
      description: "Réservez votre consultation en quelques clics avec les meilleurs médecins du Maroc",
      color: "bg-primary"
    },
    {
      icon: Video,
      title: "Téléconsultation",
      description: "Consultez votre médecin à distance via vidéo, où que vous soyez au Maroc",
      color: "bg-secondary"
    },
    {
      icon: FileText,
      title: "Dossier médical",
      description: "Gardez un historique complet et sécurisé de toutes vos consultations",
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Urgences 24/7",
      description: "Accès à des médecins d'urgence disponibles 24h/24 et 7j/7",
      color: "bg-secondary"
    },
    {
      icon: Stethoscope,
      title: "Médecins vérifiés",
      description: "Tous nos médecins sont certifiés par l'Ordre National des Médecins",
      color: "bg-primary"
    },
    {
      icon: MapPin,
      title: "Partout au Maroc",
      description: "Des médecins disponibles dans toutes les villes du royaume",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary-light/20 px-4 py-2 text-sm text-primary mb-4">
            <Shield className="mr-2 h-4 w-4" />
            Services de qualité
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Une plateforme complète pour votre{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">santé</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tbibna révolutionne l'accès aux soins de santé au Maroc avec des services 
            modernes et sécurisés pour tous.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/40"
              >
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} text-white shadow-medical`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How it works */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Comment ça marche ?
            </h3>
            <p className="text-muted-foreground">
              Trois étapes simples pour prendre soin de votre santé
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Recherchez votre médecin",
                description: "Trouvez le bon spécialiste selon vos besoins et votre localisation"
              },
              {
                step: "02", 
                title: "Prenez rendez-vous",
                description: "Choisissez votre créneau disponible et confirmez votre consultation"
              },
              {
                step: "03",
                title: "Consultez en ligne ou en présentiel",
                description: "Rencontrez votre médecin via téléconsultation ou dans son cabinet"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-medical">
                    {step.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-primary opacity-30"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;