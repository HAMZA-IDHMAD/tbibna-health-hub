import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  MapPin, 
  Clock, 
  Video,
  Calendar,
  Phone,
  Mail,
  Award,
  Users,
  BookOpen,
  Heart,
  MessageCircle,
  Share2,
  CheckCircle,
  Globe,
  Stethoscope
} from "lucide-react";

const DoctorProfile = () => {
  const { id } = useParams();

  // Mock doctor data - in real app this would come from API
  const doctor = {
    id: 1,
    name: "Dr. Amina Benali",
    specialty: "Cardiologie",
    subSpecialties: ["Cardiologie interventionnelle", "Insuffisance cardiaque", "Rythmologie"],
    experienceYears: "15 ans d'expérience",
    location: "Casablanca, Maroc",
    clinicAddress: "123 Boulevard Mohammed V, Casablanca 20000",
    rating: 4.9,
    reviewCount: 127,
    consultations: 850,
    languages: ["Français", "Arabe", "Anglais"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face",
    verified: true,
    availability: {
      nextAvailable: "Aujourd'hui 14:30",
      consultationTypes: ["Cabinet", "Téléconsultation", "Appel téléphonique"],
      workingHours: "Lun-Ven: 9h00-18h00, Sam: 9h00-13h00"
    },
    pricing: {
      cabinet: 300,
      video: 250,
      phone: 200
    },
    about: "Dr. Amina Benali est une cardiologue expérimentée avec plus de 15 ans de pratique. Spécialisée dans la cardiologie interventionnelle, elle a traité plus de 2000 patients et effectué plus de 500 interventions. Elle est reconnue pour son approche humaine et sa capacité à expliquer les pathologies complexes de manière accessible.",
    education: [
      {
        degree: "Doctorat en Médecine",
        institution: "Université Mohammed V - Faculté de Médecine de Rabat",
        year: "2008"
      },
      {
        degree: "Spécialisation en Cardiologie",
        institution: "CHU Ibn Rochd, Casablanca",
        year: "2013"
      },
      {
        degree: "Fellowship Cardiologie Interventionnelle",
        institution: "Institut de Cardiologie de Montréal, Canada",
        year: "2015"
      }
    ],
    professionalExperience: [
      {
        position: "Chef de Service Cardiologie",
        institution: "Clinique Al Madina, Casablanca",
        period: "2018 - Présent"
      },
      {
        position: "Cardiologue Senior",
        institution: "CHU Ibn Rochd, Casablanca",
        period: "2015 - 2018"
      },
      {
        position: "Cardiologue",
        institution: "Clinique des Spécialités, Rabat",
        period: "2013 - 2015"
      }
    ],
    awards: [
      "Prix d'Excellence en Cardiologie 2022 - Ordre des Médecins du Maroc",
      "Meilleur Article de Recherche - Congrès Maghrébin de Cardiologie 2021",
      "Certification ISO 9001 - Qualité des Soins 2020"
    ],
    patientReviews: [
      {
        id: 1,
        patientName: "Fatima M.",
        rating: 5,
        comment: "Excellente prise en charge. Dr. Benali est très professionnelle et rassurante. Je recommande vivement.",
        date: "Il y a 2 jours",
        verified: true
      },
      {
        id: 2,
        patientName: "Ahmed K.",
        rating: 5,
        comment: "Consultation très complète. Le diagnostic était précis et le traitement efficace. Merci docteur!",
        date: "Il y a 1 semaine",
        verified: true
      },
      {
        id: 3,
        patientName: "Samira L.",
        rating: 4,
        comment: "Bonne écoute et explications claires. Délai d'attente un peu long mais ça vaut le coup.",
        date: "Il y a 2 semaines",
        verified: true
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-48 h-48 rounded-2xl object-cover shadow-hover"
                  />
                  {doctor.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-3xl font-bold">{doctor.name}</h1>
                    {doctor.verified && (
                      <Badge className="bg-primary text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Vérifié CNOM
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-lg text-primary mb-2">
                    <Stethoscope className="h-5 w-5" />
                    <span className="font-medium">{doctor.specialty}</span>
                  </div>
                  <p className="text-muted-foreground">{doctor.experienceYears}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-secondary text-secondary" />
                    <span className="font-bold text-lg">{doctor.rating}</span>
                    <span className="text-muted-foreground">({doctor.reviewCount} avis)</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{doctor.consultations} consultations</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang) => (
                    <Badge key={lang} variant="outline">
                      {lang}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-green-600 font-medium">
                    Disponible {doctor.availability.nextAvailable}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 lg:w-64">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-medical"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Prendre rendez-vous
                </Button>
                
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-1" />
                    Vidéo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Appel
                  </Button>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about" className="space-y-6">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="about">À propos</TabsTrigger>
                  <TabsTrigger value="experience">Expérience</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                  <TabsTrigger value="availability">Disponibilités</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>À propos du Dr. {doctor.name.split(' ')[1]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {doctor.about}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Spécialités</h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.subSpecialties.map((specialty) => (
                            <Badge key={specialty} variant="secondary">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Reconnaissances</h4>
                        <ul className="space-y-2">
                          {doctor.awards.map((award, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                              <span className="text-sm">{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Formation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {doctor.education.map((edu, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <BookOpen className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{edu.degree}</h4>
                              <p className="text-muted-foreground">{edu.institution}</p>
                              <p className="text-sm text-muted-foreground">{edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Expérience Professionnelle</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {doctor.professionalExperience.map((exp, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                              <Heart className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{exp.position}</h4>
                              <p className="text-muted-foreground">{exp.institution}</p>
                              <p className="text-sm text-muted-foreground">{exp.period}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        Avis patients
                        <Badge variant="secondary">{doctor.patientReviews.length} avis</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {doctor.patientReviews.map((review) => (
                          <div key={review.id} className="border-b border-border last:border-0 pb-6 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{review.patientName}</span>
                                {review.verified && (
                                  <Badge variant="outline" className="text-xs">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Vérifié
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'fill-secondary text-secondary'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-2">{review.comment}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="availability" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Horaires & Disponibilités</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Horaires de consultation</h4>
                          <p className="text-muted-foreground">{doctor.availability.workingHours}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Types de consultation</h4>
                          <div className="grid gap-3">
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Consultation au cabinet</span>
                              </div>
                              <span className="font-semibold">{doctor.pricing.cabinet} MAD</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <Video className="h-4 w-4 text-primary" />
                                <span>Téléconsultation</span>
                              </div>
                              <span className="font-semibold">{doctor.pricing.video} MAD</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>Consultation téléphonique</span>
                              </div>
                              <span className="font-semibold">{doctor.pricing.phone} MAD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">Adresse</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {doctor.clinicAddress}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="font-medium">Langues</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {doctor.languages.join(', ')}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">Prochaine disponibilité</span>
                    </div>
                    <p className="text-sm text-green-600 font-medium pl-6">
                      {doctor.availability.nextAvailable}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Envoyer un message
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Appeler le cabinet
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;