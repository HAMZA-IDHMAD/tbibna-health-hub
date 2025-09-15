import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stethoscope,
  Users,
  Clock,
  Shield,
  Heart,
  Star,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorLanding = () => {
  const features = [
    {
      icon: Users,
      title: "Réseau de Professionnels",
      description: "Accédez à un réseau de plus de 1000 médecins vérifiés et spécialisés dans tout le Maroc."
    },
    {
      icon: Shield,
      title: "Vérification Complète",
      description: "Tous nos médecins sont vérifiés et certifiés par les ordres professionnels compétents."
    },
    {
      icon: Clock,
      title: "Consultation Rapide",
      description: "Obtenez un rendez-vous rapidement avec le spécialiste de votre choix près de chez vous."
    },
    {
      icon: MapPin,
      title: "Couverture Nationale",
      description: "Disponible dans plus de 20 villes du Maroc, des grandes métropoles aux villes moyennes."
    }
  ];

  const stats = [
    { value: "1200+", label: "Médecins Vérifiés", icon: Users },
    { value: "50,000+", label: "Patients Satisfaits", icon: Heart },
    { value: "25+", label: "Spécialités Médicales", icon: Stethoscope },
    { value: "20", label: "Villes Couvertes", icon: MapPin }
  ];

  const specialties = [
    { name: "Cardiologie", count: 156, icon: Heart, color: "bg-red-500" },
    { name: "Neurologie", count: 89, icon: Users, color: "bg-purple-500" },
    { name: "Orthopédie", count: 134, icon: Users, color: "bg-blue-500" },
    { name: "Ophtalmologie", count: 98, icon: Users, color: "bg-green-500" },
    { name: "Dermatologie", count: 76, icon: Users, color: "bg-yellow-500" },
    { name: "Pneumologie", count: 67, icon: Users, color: "bg-teal-500" }
  ];

  const testimonials = [
    {
      name: "Mme. Aicha Benali",
      city: "Casablanca",
      text: "Service excellent, j'ai trouvé un cardiologue expérimenté près de chez moi en quelques clics.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b2ab?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "M. Hassan Tazi",
      city: "Rabat",
      text: "La plateforme est très intuitive, et les médecins sont vraiment professionnels et qualifiés.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mme. Fatima Alaoui",
      city: "Marrakech",
      text: "J'ai pu consulter un dermatologue rapidement. Le processus de réservation est très simple.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-sm text-primary mb-8">
              <Stethoscope className="mr-2 h-4 w-4" />
              Plateforme Médicale Nationale
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Trouvez le{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                meilleur médecin
              </span>
              {" "}près de chez vous
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez et consultez les meilleurs spécialistes de santé dans toutes les régions du Maroc. 
              Des médecins vérifiés, des consultations de qualité, une plateforme de confiance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group">
                <Link to="/doctors">
                  <Users className="mr-2 h-5 w-5" />
                  Voir tous les médecins
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/medicine">
                  Pharmacie en ligne
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <StatIcon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Pourquoi nous choisir
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une plateforme conçue pour{" "}
              <span className="text-primary">votre santé</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nous connectons les patients aux meilleurs professionnels de santé du Maroc 
              avec une approche centrée sur la qualité et la confiance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                      <FeatureIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Spécialités médicales
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Toutes les{" "}
              <span className="text-primary">spécialités</span>
              {" "}en un seul endroit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des cardiologues aux dermatologues, trouvez le spécialiste qu'il vous faut
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => {
              const SpecialtyIcon = specialty.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${specialty.color} rounded-lg flex items-center justify-center`}>
                        <SpecialtyIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {specialty.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {specialty.count} médecins disponibles
                        </p>
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/doctors">
                Voir toutes les spécialités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Témoignages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ce que disent{" "}
              <span className="text-primary">nos patients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des milliers de patients nous font confiance chaque jour
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.city}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-variant to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Prêt à prendre soin de votre santé ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Rejoignez des milliers de patients qui ont déjà trouvé leur médecin idéal. 
              Commencez dès maintenant votre recherche.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg group"
                asChild
              >
                <Link to="/doctors">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre rendez-vous maintenant
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/about">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-12 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Médecins Certifiés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Données Protégées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorLanding;