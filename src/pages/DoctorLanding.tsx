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
  ArrowRight,
  DollarSign,
  BarChart3,
  Globe,
  Target,
  Zap,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorProfessional from "@/assets/doctor-professional.jpg";
import medicalDashboard from "@/assets/medical-dashboard.jpg";
import medicalTeam from "@/assets/medical-team.jpg";

const DoctorLanding = () => {
  const features = [
    {
      icon: Users,
      title: "Accès à Plus de Patients",
      description: "Connectez-vous avec des milliers de patients cherchant des spécialistes qualifiés dans votre région."
    },
    {
      icon: BarChart3,
      title: "Gestion Avancée",
      description: "Tableau de bord complet pour gérer vos rendez-vous, patients et revenus en temps réel."
    },
    {
      icon: Globe,
      title: "Visibilité Nationale",
      description: "Votre profil visible dans tout le Maroc, augmentez votre patientèle au-delà de votre ville."
    },
    {
      icon: Shield,
      title: "Vérification Premium",
      description: "Badge de vérification qui renforce votre crédibilité et la confiance des patients."
    }
  ];

  const stats = [
    { value: "2,500+", label: "Consultations par mois", icon: Calendar },
    { value: "85%", label: "Augmentation de revenus", icon: TrendingUp },
    { value: "50,000+", label: "Patients actifs", icon: Users },
    { value: "24/7", label: "Support technique", icon: Clock }
  ];

  const plans = [
    {
      name: "Starter",
      price: "299",
      period: "mois",
      description: "Parfait pour débuter",
      features: [
        "Profil professionnel vérifié",
        "Jusqu'à 50 patients/mois",
        "Gestion de base des RDV",
        "Support par email",
        "Statistiques de base"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "599",
      period: "mois",
      description: "Le plus populaire",
      features: [
        "Tout du plan Starter",
        "Patients illimités",
        "Tableau de bord avancé",
        "Support prioritaire 24/7",
        "Analytics détaillées",
        "Badge premium",
        "Mise en avant sur la plateforme"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "999",
      period: "mois",
      description: "Pour les cliniques",
      features: [
        "Tout du plan Professional",
        "Gestion multi-médecins",
        "API personnalisée",
        "Formation dédiée",
        "Account manager dédié",
        "Intégration système existant",
        "Rapports personnalisés"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Ahmed Benali",
      specialty: "Cardiologue",
      city: "Casablanca",
      text: "Depuis que j'ai rejoint la plateforme, ma patientèle a augmenté de 150%. Le système de gestion est remarquable.",
      rating: 5,
      image: doctorProfessional,
      revenue: "+180%"
    },
    {
      name: "Dr. Fatima Alaoui",
      specialty: "Dermatologue", 
      city: "Rabat",
      text: "Excellent retour sur investissement. Je recommande vivement aux médecins qui veulent développer leur pratique.",
      rating: 5,
      image: medicalTeam,
      revenue: "+165%"
    },
    {
      name: "Dr. Hassan Tazi",
      specialty: "Orthopédiste",
      city: "Marrakech", 
      text: "Support technique exceptionnel et interface intuitive. Mes revenus ont considérablement augmenté.",
      rating: 5,
      image: medicalDashboard,
      revenue: "+200%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary-light/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-sm text-primary mb-8 animate-fade-in">
                <Crown className="mr-2 h-4 w-4" />
                Plateforme Médicale Premium
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in">
                Développez votre{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  pratique médicale
                </span>
                {" "}en ligne
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed animate-fade-in">
                Rejoignez plus de 1200 médecins qui ont déjà multiplié leur patientèle 
                et leurs revenus grâce à notre plateforme révolutionnaire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button size="lg" className="group">
                  <Zap className="mr-2 h-5 w-5" />
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver une démo
                </Button>
              </div>

              <div className="flex items-center space-x-8 mt-12 text-sm text-muted-foreground animate-fade-in">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configuration gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Résultats garantis</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative">
                <img
                  src={doctorProfessional}
                  alt="Médecin professionnel"
                  className="rounded-2xl shadow-2xl w-full hover-scale"
                />
                <div className="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-xl shadow-lg animate-pulse">
                  <div className="text-2xl font-bold">+180%</div>
                  <div className="text-sm opacity-90">Revenus moyens</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-xl shadow-lg animate pulse">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm opacity-90">Patients/mois</div>
                </div>
              </div>
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

      {/* Pricing Plans Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Plans d'abonnement
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choisissez votre{" "}
              <span className="text-primary">plan idéal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à tous les besoins, de l'indépendant à la grande clinique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      Le plus populaire
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price} DH
                      <span className="text-lg text-muted-foreground font-normal">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.popular ? 'Commencer maintenant' : 'Choisir ce plan'}
                  </Button>
                </CardContent>         </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Questions sur nos plans ? Contactez notre équipe commerciale
            </p>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Planifier un appel
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
              <span className="text-primary">nos médecins partenaires</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des milliers de médecins ont transformé leur pratique grâce à notre plateforme
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-primary">{testimonial.specialty}</div>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.city}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{testimonial.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenus</div>
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
              Prêt à transformer votre pratique médicale ?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Rejoignez plus de 1200 médecins qui ont déjà révolutionné leur activité. 
              Commencez votre transformation dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg group"
              >
                <Zap className="mr-2 h-5 w-5" />
                Démarrer maintenant - 7 jours gratuits
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Planifier une démo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Sécurisé & Conforme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Support Premium</span>
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