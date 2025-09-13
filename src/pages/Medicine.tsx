import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter,
  Star,
  MapPin,
  Clock,
  Pill,
  Heart,
  Shield,
  AlertCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FilterSidebar from "@/components/FilterSidebar";
import MedicineCard from "@/components/MedicineCard";

const Medicine = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const medicines = [
    {
      id: 1,
      name: "Paracétamol 500mg",
      brand: "Sanofi",
      category: "Analgésique",
      price: 15,
      originalPrice: 20,
      discount: 25,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 128,
      availability: "En stock",
      prescription: false,
      description: "Soulage efficacement la douleur et réduit la fièvre",
      activeIngredient: "Paracétamol",
      dosage: "500mg",
      form: "Comprimés"
    },
    {
      id: 2,
      name: "Amoxicilline 250mg",
      brand: "GSK",
      category: "Antibiotique",
      price: 45,
      originalPrice: 50,
      discount: 10,
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 89,
      availability: "En stock",
      prescription: true,
      description: "Antibiotique à large spectre pour infections bactériennes",
      activeIngredient: "Amoxicilline",
      dosage: "250mg",
      form: "Gélules"
    },
    {
      id: 3,
      name: "Doliprane 1000mg",
      brand: "Sanofi",
      category: "Analgésique",
      price: 12,
      originalPrice: 15,
      discount: 20,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 95,
      availability: "Stock limité",
      prescription: false,
      description: "Anti-douleur et antipyrétique de référence",
      activeIngredient: "Paracétamol",
      dosage: "1000mg",
      form: "Comprimés effervescents"
    },
    {
      id: 4,
      name: "Aspirine 100mg",
      brand: "Bayer",
      category: "Antiagrégant",
      price: 25,
      originalPrice: 25,
      discount: 0,
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d24d?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 156,
      availability: "En stock",
      prescription: false,
      description: "Protection cardiovasculaire et anti-inflammatoire",
      activeIngredient: "Acide acétylsalicylique",
      dosage: "100mg",
      form: "Comprimés gastro-résistants"
    },
    {
      id: 5,
      name: "Oméprazole 20mg",
      brand: "Pfizer",
      category: "Gastro-entéro",
      price: 35,
      originalPrice: 40,
      discount: 12,
      image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 73,
      availability: "En stock",
      prescription: true,
      description: "Traitement de l'acidité gastrique et des ulcères",
      activeIngredient: "Oméprazole",
      dosage: "20mg",
      form: "Gélules gastro-résistantes"
    },
    {
      id: 6,
      name: "Vitamine D3 1000UI",
      brand: "Pharmavit",
      category: "Complément",
      price: 55,
      originalPrice: 55,
      discount: 0,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 67,
      availability: "En stock",
      prescription: false,
      description: "Renforce le système immunitaire et la santé osseuse",
      activeIngredient: "Cholécalciférol",
      dosage: "1000UI",
      form: "Comprimés à croquer"
    }
  ];

  const categories = ["all", "Analgésique", "Antibiotique", "Antiagrégant", "Gastro-entéro", "Complément"];
  const brands = ["all", "Sanofi", "GSK", "Bayer", "Pfizer", "Pharmavit"];
  const priceRanges = [
    { value: "all", label: "Tous les prix" },
    { value: "0-20", label: "0 - 20 MAD" },
    { value: "20-40", label: "20 - 40 MAD" },
    { value: "40-60", label: "40 - 60 MAD" },
    { value: "60+", label: "60+ MAD" }
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || medicine.category === selectedCategory;
    const matchesBrand = selectedBrand === "all" || medicine.brand === selectedBrand;
    
    let matchesPrice = true;
    if (priceRange === "0-20") matchesPrice = medicine.price <= 20;
    else if (priceRange === "20-40") matchesPrice = medicine.price > 20 && medicine.price <= 40;
    else if (priceRange === "40-60") matchesPrice = medicine.price > 40 && medicine.price <= 60;
    else if (priceRange === "60+") matchesPrice = medicine.price > 60;

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-primary-light/20 px-4 py-2 text-sm text-primary mb-4">
              <Pill className="mr-2 h-4 w-4" />
              Pharmacie en ligne
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Votre{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                pharmacie
              </span>{" "}
              de confiance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Commandez vos médicaments en toute sécurité et recevez-les chez vous
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-4 shadow-card border border-border/40 max-w-2xl mx-auto">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher un médicament, marque, molécule..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-0 bg-muted/50"
                  />
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-12 px-6"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filtres
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <FilterSidebar
            show={showFilters}
            categories={categories}
            brands={brands}
            priceRanges={priceRanges}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategory}
            onBrandChange={setSelectedBrand}
            onPriceRangeChange={setPriceRange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {filteredMedicines.length} médicament{filteredMedicines.length > 1 ? 's' : ''} trouvé{filteredMedicines.length > 1 ? 's' : ''}
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                Pharmacie agréée par le Ministère de la Santé
              </div>
            </div>

            {/* Medicine Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedicines.map((medicine) => (
                <MedicineCard key={medicine.id} medicine={medicine} />
              ))}
            </div>

            {/* No Results */}
            {filteredMedicines.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Aucun médicament trouvé</h3>
                <p className="text-muted-foreground mb-4">
                  Essayez de modifier vos critères de recherche
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedBrand("all");
                    setPriceRange("all");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-primary/5 border-y py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-primary" />
              <div>
                <div className="font-semibold">Médicaments authentiques</div>
                <div className="text-sm text-muted-foreground">Directement du laboratoire</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="h-6 w-6 text-secondary" />
              <div>
                <div className="font-semibold">Livraison rapide</div>
                <div className="text-sm text-muted-foreground">24h dans les grandes villes</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <AlertCircle className="h-6 w-6 text-primary" />
              <div>
                <div className="font-semibold">Conseil pharmaceutique</div>
                <div className="text-sm text-muted-foreground">Pharmacien disponible 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;