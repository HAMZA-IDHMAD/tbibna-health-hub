import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  city: string;
  coords: { x: number; y: number };
  icon: any;
}

interface MoroccoMapProps {
  doctors: Doctor[];
  onCitySelect: (city: string | null) => void;
  selectedCity: string | null;
}

const MoroccoMap = ({ doctors, onCitySelect, selectedCity }: MoroccoMapProps) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Group doctors by city
  const doctorsByCity = doctors.reduce((acc, doctor) => {
    if (!acc[doctor.city]) {
      acc[doctor.city] = [];
    }
    acc[doctor.city].push(doctor);
    return acc;
  }, {} as { [city: string]: Doctor[] });

  const cities = Object.keys(doctorsByCity).map(city => {
    const cityDoctors = doctorsByCity[city];
    // Use the first doctor's coordinates for the city
    const coords = cityDoctors[0]?.coords || { x: 50, y: 50 };
    return {
      name: city,
      coords,
      doctorCount: cityDoctors.length,
      doctors: cityDoctors
    };
  });

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-primary/5 via-background to-secondary-light/10 rounded-lg overflow-hidden">
      {/* Morocco SVG Map */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
      >
        {/* Morocco outline path */}
        <path
          d="M15 20 L25 15 L35 18 L45 20 L55 18 L65 25 L70 35 L75 45 L70 55 L65 65 L60 75 L50 80 L40 85 L30 80 L25 70 L20 60 L15 50 L10 40 L12 30 Z"
          fill="hsl(var(--primary) / 0.1)"
          stroke="hsl(var(--primary) / 0.3)"
          strokeWidth="0.5"
          className="transition-all duration-300"
        />
        
        {/* City markers */}
        {cities.map((city, index) => {
          const isSelected = selectedCity === city.name;
          const isHovered = hoveredCity === city.name;
          const scale = isSelected || isHovered ? 1.5 : 1;
          
          return (
            <g key={city.name}>
              {/* Pulsing animation ring for selected city */}
              {isSelected && (
                <circle
                  cx={city.coords.x}
                  cy={city.coords.y}
                  r="3"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  className="animate-ping opacity-75"
                />
              )}
              
              {/* City marker */}
              <circle
                cx={city.coords.x}
                cy={city.coords.y}
                r="2"
                fill={isSelected ? "hsl(var(--primary))" : "hsl(var(--secondary))"}
                stroke="white"
                strokeWidth="0.5"
                className="cursor-pointer transition-all duration-300 hover:fill-primary"
                style={{ transform: `scale(${scale})`, transformOrigin: `${city.coords.x}% ${city.coords.y}%` }}
                onMouseEnter={() => setHoveredCity(city.name)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => onCitySelect(isSelected ? null : city.name)}
              />
              
              {/* City label */}
              <text
                x={city.coords.x}
                y={city.coords.y - 4}
                textAnchor="middle"
                className="text-xs font-medium fill-foreground cursor-pointer"
                style={{ fontSize: isSelected || isHovered ? '0.75rem' : '0.6rem' }}
                onMouseEnter={() => setHoveredCity(city.name)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => onCitySelect(isSelected ? null : city.name)}
              >
                {city.name}
              </text>
              
              {/* Doctor count badge */}
              <circle
                cx={city.coords.x + 2}
                cy={city.coords.y - 2}
                r="1.5"
                fill="hsl(var(--accent))"
                stroke="white"
                strokeWidth="0.3"
                className="cursor-pointer"
                onClick={() => onCitySelect(isSelected ? null : city.name)}
              />
              <text
                x={city.coords.x + 2}
                y={city.coords.y - 1.5}
                textAnchor="middle"
                className="text-xs font-bold fill-white cursor-pointer"
                style={{ fontSize: '0.4rem' }}
                onClick={() => onCitySelect(isSelected ? null : city.name)}
              >
                {city.doctorCount}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredCity && (
        <div className="absolute top-4 left-4 bg-card border border-border/40 rounded-lg p-3 shadow-lg z-10">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">{hoveredCity}</span>
          </div>
          <div className="text-sm text-muted-foreground mb-2">
            {doctorsByCity[hoveredCity]?.length} médecins disponibles
          </div>
          <div className="space-y-1">
            {doctorsByCity[hoveredCity]?.slice(0, 3).map((doctor, index) => {
              const SpecialtyIcon = doctor.icon;
              return (
                <div key={doctor.id} className="flex items-center space-x-2 text-xs">
                  <SpecialtyIcon className="h-3 w-3 text-primary" />
                  <span className="font-medium">{doctor.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {doctor.specialty}
                  </Badge>
                </div>
              );
            })}
            {doctorsByCity[hoveredCity]?.length > 3 && (
              <div className="text-xs text-muted-foreground">
                +{doctorsByCity[hoveredCity]?.length - 3} autres...
              </div>
            )}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-card border border-border/40 rounded-lg p-3">
        <div className="text-sm font-medium mb-2">Légende</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-secondary border-2 border-white"></div>
            <span>Ville avec médecins</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary border-2 border-white"></div>
            <span>Ville sélectionnée</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent border-2 border-white flex items-center justify-center">
              <span className="text-white font-bold" style={{ fontSize: '0.5rem' }}>N</span>
            </div>
            <span>Nombre de médecins</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-primary/10 border border-primary/20 rounded-lg p-3 max-w-xs">
        <div className="text-sm text-primary font-medium">
          💡 Astuce
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          Cliquez sur une ville pour voir les médecins disponibles dans cette région
        </div>
      </div>
    </div>
  );
};

export default MoroccoMap;