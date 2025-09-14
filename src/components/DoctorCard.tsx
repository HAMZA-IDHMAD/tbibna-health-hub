import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Video,
  Calendar,
  Phone
} from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  city: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  verified: boolean;
  icon: any;
  consultations: number;
  languages: string[];
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const SpecialtyIcon = doctor.icon;

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/40 overflow-hidden">
      <CardContent className="p-0">
        {/* Doctor Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Verified Badge */}
          {doctor.verified && (
            <Badge className="absolute top-3 right-3 bg-primary text-white text-xs">
              ✓ CNOM
            </Badge>
          )}
          
          {/* City */}
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur rounded-full px-2 py-1">
              <MapPin className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-foreground">{doctor.city}</span>
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-1">
                {doctor.name}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-1">
                <SpecialtyIcon className="h-4 w-4 text-primary" />
                <span>{doctor.specialty}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {doctor.experience} d'expérience
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">{doctor.price} MAD</div>
              <div className="text-xs text-muted-foreground">consultation</div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium text-sm">{doctor.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              ({doctor.reviews} avis)
            </span>
            <span className="text-xs text-muted-foreground">
              • {doctor.consultations} consultations
            </span>
          </div>

          {/* Languages */}
          <div className="flex flex-wrap gap-1 mb-4">
            {doctor.languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs border-primary/20">
                {lang}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-2">
            <Button 
              size="sm"
              className="bg-gradient-primary hover:opacity-90 col-span-2"
              onClick={() => window.location.href = `/doctor/${doctor.id}`}
            >
              <Calendar className="h-4 w-4 mr-1" />
              RDV
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-primary/20 text-primary hover:bg-primary hover:text-white"
            >
              <Video className="h-4 w-4" />
            </Button>
          </div>

          {/* Availability indicator */}
          <div className="flex items-center justify-center mt-3 pt-3 border-t border-border/20">
            <div className="flex items-center space-x-1 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">Disponible aujourd'hui</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;