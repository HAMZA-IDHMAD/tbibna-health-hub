import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Video,
  Calendar,
  Stethoscope,
  Heart,
  Brain,
  Eye
} from "lucide-react";

const FeaturedDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Amina Benali",
      specialty: "Cardiologie",
      experience: "15 ans d'expérience",
      location: "Casablanca",
      rating: 4.9,
      reviews: 127,
      price: 300,
      availability: "Aujourd'hui",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      verified: true,
      languages: ["Français", "Arabe"],
      icon: Heart,
      consultations: 850
    },
    {
      id: 2,
      name: "Dr. Omar Alaoui",
      specialty: "Neurologie", 
      experience: "12 ans d'expérience",
      location: "Rabat",
      rating: 4.8,
      reviews: 98,
      price: 350,
      availability: "Demain",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      verified: true,
      languages: ["Français", "Arabe", "Anglais"],
      icon: Brain,
      consultations: 642
    },
    {
      id: 3,
      name: "Dr. Fatima Zahra",
      specialty: "Ophtalmologie",
      experience: "10 ans d'expérience", 
      location: "Marrakech",
      rating: 4.9,
      reviews: 156,
      price: 250,
      availability: "Aujourd'hui",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db4394044?w=400&h=400&fit=crop&crop=face",
      verified: true,
      languages: ["Français", "Arabe"],
      icon: Eye,
      consultations: 923
    }
  ];

  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-secondary-light/20 px-4 py-2 text-sm text-secondary mb-4">
            <Stethoscope className="mr-2 h-4 w-4" />
            Médecins recommandés
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Consultez les{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              meilleurs médecins
            </span>
            {" "}du Maroc
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des spécialistes expérimentés et vérifiés, disponibles pour vous accompagner 
            dans votre parcours de santé.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor) => {
            const SpecialtyIcon = doctor.icon;
            return (
              <Card 
                key={doctor.id} 
                className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/40 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Verified Badge */}
                    {doctor.verified && (
                      <Badge className="absolute top-4 right-4 bg-primary text-white">
                        ✓ Vérifié CNOM
                      </Badge>
                    )}
                    
                    {/* Availability */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur rounded-full px-3 py-1">
                        <Clock className="h-3 w-3 text-primary" />
                        <span className="text-xs font-medium">{doctor.availability}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {doctor.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <SpecialtyIcon className="h-4 w-4" />
                          <span>{doctor.specialty}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{doctor.price} MAD</div>
                        <div className="text-xs text-muted-foreground">consultation</div>
                      </div>
                    </div>

                    {/* Experience & Location */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location} • {doctor.experience}</span>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-secondary text-secondary" />
                          <span className="font-medium">{doctor.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({doctor.reviews} avis) • {doctor.consultations} consultations
                        </span>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {doctor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    size="sm"
                    onClick={() => window.location.href = `/doctor/${doctor.id}`}
                  >
                        <Calendar className="h-4 w-4 mr-2" />
                        Rendez-vous
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Voir tous les médecins
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;