import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FilterSidebarProps {
  show: boolean;
  categories: string[];
  brands: string[];
  priceRanges: { value: string; label: string }[];
  selectedCategory: string;
  selectedBrand: string;
  priceRange: string;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: string) => void;
}

const FilterSidebar = ({
  show,
  categories,
  brands,
  priceRanges,
  selectedCategory,
  selectedBrand,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
}: FilterSidebarProps) => {
  if (!show) return null;

  const resetFilters = () => {
    onCategoryChange("all");
    onBrandChange("all");
    onPriceRangeChange("all");
  };

  return (
    <div className="w-80 space-y-6">
      <Card className="border-border/40">
        <CardHeader className="pb-4">
          <CardTitle className="flex justify-between items-center text-lg">
            Filtres
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetFilters}
              className="text-primary hover:text-primary-dark"
            >
              <X className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Category Filter */}
          <div>
            <Label className="text-base font-medium mb-3 block">Catégorie</Label>
            <RadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={`category-${category}`} />
                  <Label 
                    htmlFor={`category-${category}`} 
                    className="cursor-pointer text-sm"
                  >
                    {category === "all" ? "Toutes les catégories" : category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Brand Filter */}
          <div>
            <Label className="text-base font-medium mb-3 block">Marque</Label>
            <RadioGroup value={selectedBrand} onValueChange={onBrandChange}>
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <RadioGroupItem value={brand} id={`brand-${brand}`} />
                  <Label 
                    htmlFor={`brand-${brand}`} 
                    className="cursor-pointer text-sm"
                  >
                    {brand === "all" ? "Toutes les marques" : brand}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Price Range Filter */}
          <div>
            <Label className="text-base font-medium mb-3 block">Prix</Label>
            <RadioGroup value={priceRange} onValueChange={onPriceRangeChange}>
              {priceRanges.map((range) => (
                <div key={range.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={range.value} id={`price-${range.value}`} />
                  <Label 
                    htmlFor={`price-${range.value}`} 
                    className="cursor-pointer text-sm"
                  >
                    {range.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Prescription Info */}
      <Card className="border-border/40 bg-primary/5">
        <CardContent className="p-4">
          <div className="text-sm">
            <div className="font-medium text-primary mb-2">📋 Médicaments sur ordonnance</div>
            <p className="text-muted-foreground">
              Pour les médicaments nécessitant une ordonnance, vous devrez télécharger 
              votre prescription avant la commande.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;