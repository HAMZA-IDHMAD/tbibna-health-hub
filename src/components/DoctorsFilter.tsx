import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  X
} from "lucide-react";

interface DoctorsFilterProps {
  cities: string[];
  specialties: string[];
  selectedCity: string | null;
  selectedSpecialty: string;
  onCityChange: (city: string | null) => void;
  onSpecialtyChange: (specialty: string) => void;
}

const specialtyIcons: { [key: string]: any } = {
  "Cardiologie": Heart,
  "Neurologie": Brain,
  "Ophtalmologie": Eye,
  "Orthopédie": Bone,
  "Pneumologie": Wind,
  "Dermatologie": Zap,
};

const DoctorsFilter = ({
  cities,
  specialties,
  selectedCity,
  selectedSpecialty,
  onCityChange,
  onSpecialtyChange
}: DoctorsFilterProps) => {
  const clearFilters = () => {
    onCityChange(null);
    onSpecialtyChange("");
  };

  const hasActiveFilters = selectedCity || selectedSpecialty;

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <Card className="border-border/40">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center">
              <Filter className="h-5 w-5 mr-2 text-primary" />
              Filtres
            </CardTitle>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Effacer
              </Button>
            )}
          </div>
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedCity && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {selectedCity}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => onCityChange(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
              {selectedSpecialty && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Stethoscope className="h-3 w-3" />
                  {selectedSpecialty}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-4 w-4 p-0 hover:bg-transparent"
                    onClick={() => onSpecialtyChange("")}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              )}
            </div>
          )}
        </CardHeader>
      </Card>

      {/* Cities Filter */}
      <Card className="border-border/40">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Ville
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          {cities.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "ghost"}
              size="sm"
              className={`w-full justify-start ${
                selectedCity === city 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted"
              }`}
              onClick={() => onCityChange(selectedCity === city ? null : city)}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {city}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Specialties Filter */}
      <Card className="border-border/40">
        <CardHeader className="pb-3">
          <CardTitle className="text-base flex items-center">
            <Stethoscope className="h-4 w-4 mr-2 text-primary" />
            Spécialité
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          {specialties.map((specialty) => {
            const SpecialtyIcon = specialtyIcons[specialty] || Stethoscope;
            return (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${
                  selectedSpecialty === specialty 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                onClick={() => onSpecialtyChange(selectedSpecialty === specialty ? "" : specialty)}
              >
                <SpecialtyIcon className="h-4 w-4 mr-2" />
                {specialty}
              </Button>
            );
          })}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-border/40 bg-gradient-to-br from-primary/5 to-secondary-light/10">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">À propos</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary mr-2" />
            Tous nos médecins sont vérifiés par le CNOM
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-secondary mr-2" />
            Consultation en ligne et en cabinet
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-accent mr-2" />
            Paiement sécurisé et facile
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorsFilter;