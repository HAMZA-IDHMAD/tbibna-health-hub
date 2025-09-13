import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Award, 
  Globe,
  CheckCircle,
  Target,
  Heart
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "1000+", label: "Médecins vérifiés", icon: Users },
    { number: "50k+", label: "Patients satisfaits", icon: Heart },
    { number: "15", label: "Villes couvertes", icon: Globe },
    { number: "24/7", label: "Support médical", icon: Shield }
  ];

  const values = [
    {
      icon: Shield,
      title: "Sécurité & Confidentialité",
      description: "Vos données médicales sont protégées par un chiffrement de niveau bancaire"
    },
    {
      icon: Award,
      title: "Qualité Certifiée",
      description: "Tous nos médecins sont vérifiés et certifiés par l'Ordre National des Médecins"
    },
    {
      icon: Target,
      title: "Accessibilité",
      description: "Des soins de qualité accessibles partout au Maroc, des grandes villes aux zones rurales"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-primary-light/20 px-4 py-2 text-sm text-primary mb-4">
            <Heart className="mr-2 h-4 w-4" />
            À propos de Tbibna
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Notre mission :{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              démocratiser l'accès aux soins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tbibna connecte les patients aux meilleurs professionnels de santé du Maroc, 
            offrant des soins de qualité accessibles à tous, où qu'ils soient.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-border/40 hover:shadow-medical transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-medical">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Une plateforme née d'un besoin réel
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Au Maroc, l'accès aux soins de santé reste un défi majeur. 
                Les longues files d'attente, la concentration des médecins dans les grandes villes, 
                et les coûts élevés limitent l'accès aux soins pour de nombreux citoyens.
              </p>
              <p>
                C'est pourquoi nous avons créé Tbibna : une plateforme qui révolutionne 
                l'expérience médicale en connectant directement patients et professionnels 
                de santé via des outils numériques modernes et sécurisés.
              </p>
            </div>
            
            <div className="space-y-3">
              {[
                "Réduction des temps d'attente",
                "Accès aux spécialistes partout au Maroc",
                "Dossier médical centralisé et sécurisé",
                "Téléconsultation de qualité professionnelle"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-medical"
            >
              Rejoignez la révolution santé
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-secondary rounded-3xl transform rotate-3 opacity-20"></div>
            <Card className="relative border-border/40 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-3xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prêt à révolutionner votre expérience santé ?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de Marocains qui font déjà confiance à Tbibna 
            pour leurs besoins de santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Commencer maintenant
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;