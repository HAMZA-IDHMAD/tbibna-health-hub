import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DoctorsFilter from "@/components/DoctorsFilter";
import DoctorCard from "@/components/DoctorCard";
import MoroccoMap from "@/components/MoroccoMap";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  MapPin, 
  Filter,
  Heart,
  Brain,
  Eye,
  Bone,
  Wind,
  Zap,
  Users
} from "lucide-react";
import { useState } from "react";

const Doctors = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [showMap, setShowMap] = useState(true);

  const doctors = [
    {
      id: 1,
      name: "Dr. Amina Benali",
      specialty: "Cardiologie",
      experience: "15 ans",
      city: "Casablanca",
      rating: 4.9,
      reviews: 127,
      price: 300,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Heart,
      consultations: 850,
      languages: ["Français", "Arabe"],
      coords: { x: 45, y: 65 }
    },
    {
      id: 2,
      name: "Dr. Omar Alaoui",
      specialty: "Neurologie", 
      experience: "12 ans",
      city: "Rabat",
      rating: 4.8,
      reviews: 98,
      price: 350,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Brain,
      consultations: 642,
      languages: ["Français", "Arabe", "Anglais"],
      coords: { x: 40, y: 55 }
    },
    {
      id: 3,
      name: "Dr. Fatima Zahra",
      specialty: "Ophtalmologie",
      experience: "10 ans", 
      city: "Marrakech",
      rating: 4.9,
      reviews: 156,
      price: 250,
      image: "https://images.unsplash.com/photo-1594824804732-ca8db4394044?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Eye,
      consultations: 923,
      languages: ["Français", "Arabe"],
      coords: { x: 35, y: 75 }
    },
    {
      id: 4,
      name: "Dr. Youssef Tazi",
      specialty: "Orthopédie",
      experience: "18 ans",
      city: "Fès",
      rating: 4.7,
      reviews: 89,
      price: 320,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Bone,
      consultations: 567,
      languages: ["Français", "Arabe"],
      coords: { x: 45, y: 50 }
    },
    {
      id: 5,
      name: "Dr. Aicha Bennani",
      specialty: "Pneumologie",
      experience: "14 ans",
      city: "Tangier",
      rating: 4.8,
      reviews: 112,
      price: 280,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Wind,
      consultations: 734,
      languages: ["Français", "Arabe", "Espagnol"],
      coords: { x: 30, y: 25 }
    },
    {
      id: 6,
      name: "Dr. Karim El Fassi",
      specialty: "Dermatologie",
      experience: "11 ans",
      city: "Agadir",
      rating: 4.6,
      reviews: 76,
      price: 260,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      verified: true,
      icon: Zap,
      consultations: 423,
      languages: ["Français", "Arabe"],
      coords: { x: 20, y: 85 }
    }
  ];

  const cities = [...new Set(doctors.map(d => d.city))];
  const specialties = [...new Set(doctors.map(d => d.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    if (selectedCity && doctor.city !== selectedCity) return false;
    if (selectedSpecialty && doctor.specialty !== selectedSpecialty) return false;
    return true;
  });

  const stats = [
    { label: "Médecins vérifiés", value: "500+", icon: Users },
    { label: "Villes couvertes", value: "12", icon: MapPin },
    { label: "Spécialités", value: "25+", icon: Stethoscope },
    { label: "Consultations", value: "10K+", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary-light/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-4">
              <Stethoscope className="mr-2 h-4 w-4" />
              Trouvez votre médecin
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              Nos{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                médecins experts
              </span>
              {" "}au Maroc
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez et consultez les meilleurs spécialistes de santé dans toutes les régions du Maroc.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <Card key={index} className="border-border/40">
                  <CardContent className="p-4 text-center">
                    <StatIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-muted p-1">
              <Button
                variant={showMap ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowMap(true)}
                className={showMap ? "bg-primary text-primary-foreground" : ""}
              >
                <MapPin className="h-4 w-4 mr-2" />
                Vue Carte
              </Button>
              <Button
                variant={!showMap ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowMap(false)}
                className={!showMap ? "bg-primary text-primary-foreground" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                Vue Liste
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <DoctorsFilter
                cities={cities}
                specialties={specialties}
                selectedCity={selectedCity}
                selectedSpecialty={selectedSpecialty}
                onCityChange={setSelectedCity}
                onSpecialtyChange={setSelectedSpecialty}
              />
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              {showMap ? (
                /* Map View */
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border border-border/40 overflow-hidden">
                    <div className="p-4 border-b border-border/40">
                      <h3 className="text-lg font-semibold flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        Médecins par région
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Survolez une ville pour voir les médecins disponibles
                      </p>
                    </div>
                    <MoroccoMap
                      doctors={filteredDoctors}
                      onCitySelect={setSelectedCity}
                      selectedCity={selectedCity}
                    />
                  </div>

                  {/* Selected City Doctors */}
                  {selectedCity && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold">
                          Médecins à {selectedCity}
                        </h3>
                        <Badge variant="secondary">
                          {filteredDoctors.filter(d => d.city === selectedCity).length} médecins
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        {filteredDoctors
                          .filter(d => d.city === selectedCity)
                          .map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* List View */
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">
                      Tous les médecins
                      {(selectedCity || selectedSpecialty) && (
                        <span className="text-muted-foreground"> • Filtré</span>
                      )}
                    </h3>
                    <Badge variant="secondary">
                      {filteredDoctors.length} médecins trouvés
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor) => (
                      <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;