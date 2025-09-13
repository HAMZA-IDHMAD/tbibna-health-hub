import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ShoppingCart, 
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

interface Medicine {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
  availability: string;
  prescription: boolean;
  description: string;
  activeIngredient: string;
  dosage: string;
  form: string;
}

interface MedicineCardProps {
  medicine: Medicine;
}

const MedicineCard = ({ medicine }: MedicineCardProps) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "En stock":
        return "text-green-600 bg-green-50";
      case "Stock limité":
        return "text-orange-600 bg-orange-50";
      case "Rupture":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case "En stock":
        return <CheckCircle className="h-3 w-3" />;
      case "Stock limité":
        return <Clock className="h-3 w-3" />;
      case "Rupture":
        return <AlertTriangle className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/40 overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-muted/30">
          <img
            src={medicine.image}
            alt={medicine.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {medicine.discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-secondary text-white">
              -{medicine.discount}%
            </Badge>
          )}
          
          {/* Prescription Badge */}
          {medicine.prescription && (
            <Badge className="absolute top-3 right-3 bg-primary text-white">
              <FileText className="h-3 w-3 mr-1" />
              Ordonnance
            </Badge>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Brand & Category */}
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="text-xs">
              {medicine.brand}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {medicine.category}
            </Badge>
          </div>

          {/* Medicine Name */}
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
            {medicine.name}
          </h3>

          {/* Active Ingredient & Form */}
          <div className="text-sm text-muted-foreground mb-2">
            <div>{medicine.activeIngredient}</div>
            <div>{medicine.form} • {medicine.dosage}</div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {medicine.description}
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="font-medium text-sm">{medicine.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              ({medicine.reviews} avis)
            </span>
          </div>

          {/* Availability */}
          <div className="mb-4">
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(medicine.availability)}`}>
              {getAvailabilityIcon(medicine.availability)}
              {medicine.availability}
            </div>
          </div>

          {/* Price & Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-primary">{medicine.price} MAD</span>
              {medicine.discount > 0 && (
                <span className="text-sm text-muted-foreground line-through">
                  {medicine.originalPrice} MAD
                </span>
              )}
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 shadow-medical"
              disabled={medicine.availability === "Rupture"}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Ajouter
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicineCard;