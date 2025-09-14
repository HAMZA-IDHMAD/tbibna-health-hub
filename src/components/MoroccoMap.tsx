import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

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

interface CityCoordinates {
  [city: string]: { x: number; y: number };
}

const MoroccoMap = ({ doctors, onCitySelect, selectedCity }: MoroccoMapProps) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'cities' | 'doctors'>('cities');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Accurate Morocco city coordinates including Western Sahara
  const cityCoordinates: CityCoordinates = {
    "Casablanca": { x: 42, y: 58 },
    "Rabat": { x: 40, y: 52 },
    "Marrakech": { x: 38, y: 68 },
    "Fès": { x: 47, y: 48 },
    "Tangier": { x: 35, y: 40 },
    "Agadir": { x: 32, y: 75 },
    "Meknès": { x: 45, y: 50 },
    "Oujda": { x: 62, y: 48 },
    "Tétouan": { x: 37, y: 42 },
    "Salé": { x: 39, y: 52 },
    "Temara": { x: 40, y: 53 },
    "Mohammedia": { x: 42, y: 56 },
    "Kénitra": { x: 38, y: 50 },
    "El Jadida": { x: 40, y: 60 },
    "Laâyoune": { x: 28, y: 88 },
    "Dakhla": { x: 26, y: 95 },
    "Taza": { x: 50, y: 48 },
    "Settat": { x: 43, y: 62 },
    "Khémisset": { x: 42, y: 50 },
    "Béni Mellal": { x: 44, y: 65 }
  };

  // Group doctors by city
  const doctorsByCity = doctors.reduce((acc, doctor) => {
    if (!acc[doctor.city]) {
      acc[doctor.city] = [];
    }
    acc[doctor.city].push(doctor);
    return acc;
  }, {} as { [city: string]: Doctor[] });

  const cities = Object.keys(doctorsByCity).map(city => {
    const coords = cityCoordinates[city] || { x: 50, y: 50 };
    return {
      name: city,
      coords,
      doctorCount: doctorsByCity[city]?.length || 0,
      doctors: doctorsByCity[city] || []
    };
  });

  const handleCityClick = (cityName: string) => {
    if (selectedCity === cityName) {
      setViewMode('cities');
      onCitySelect(null);
    } else {
      setViewMode('doctors');
      onCitySelect(cityName);
    }
  };

  const resetView = () => {
    setViewMode('cities');
    setZoomLevel(1);
    onCitySelect(null);
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-primary/5 via-background to-secondary-light/10 rounded-lg overflow-hidden">
      
      {/* Map Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="bg-card/90 backdrop-blur-sm"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-2 text-xs">
          <div className="font-medium">Mode: {viewMode === 'cities' ? 'Villes' : 'Médecins'}</div>
          {selectedCity && (
            <div className="text-muted-foreground">Ville: {selectedCity}</div>
          )}
        </div>
      </div>
      {/* Morocco SVG Map */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full cursor-pointer"
        style={{ 
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          transform: `scale(${zoomLevel})`,
          transformOrigin: selectedCity ? `${cityCoordinates[selectedCity]?.x || 50}% ${cityCoordinates[selectedCity]?.y || 50}%` : 'center'
        }}
      >
        {/* Morocco outline path including Western Sahara */}
        <path
          d="M20 35 L25 32 L30 30 L35 28 L40 29 L45 30 L50 31 L55 30 L60 32 L65 35 L68 40 L70 45 L72 50 L70 55 L68 60 L65 65 L62 70 L58 74 L54 76 L50 78 L45 79 L40 80 L35 82 L32 85 L30 88 L28 92 L26 96 L24 94 L22 90 L20 85 L18 80 L16 75 L15 70 L14 65 L13 60 L12 55 L11 50 L12 45 L14 40 L16 37 L18 35 Z"
          fill="hsl(var(--primary) / 0.08)"
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="0.3"
          className="transition-all duration-500"
        />
        
        {/* Regions/Provinces subtle divisions */}
        <g stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.1" fill="none">
          <path d="M20 35 L35 45 L45 50 L35 65 L25 70 L18 55 Z" />
          <path d="M35 45 L50 48 L45 60 L35 65 Z" />
          <path d="M45 50 L60 52 L58 65 L45 60 Z" />
          <path d="M25 70 L35 82 L30 88 L20 85 Z" />
        </g>
        
        {/* Markers based on view mode */}
        {viewMode === 'cities' ? (
          /* City markers */
          cities.map((city, index) => {
            const isSelected = selectedCity === city.name;
            const isHovered = hoveredCity === city.name;
            const scale = isSelected || isHovered ? 1.8 : 1.2;
            
            return (
              <g key={city.name}>
                {/* Pulsing animation ring for selected city */}
                {isSelected && (
                  <circle
                    cx={city.coords.x}
                    cy={city.coords.y}
                    r="4"
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
                  r="2.5"
                  fill={isSelected ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                  stroke="white"
                  strokeWidth="0.8"
                  className="cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{ 
                    transform: `scale(${scale})`, 
                    transformOrigin: `${city.coords.x}% ${city.coords.y}%`,
                    filter: isHovered ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" : "none"
                  }}
                  onMouseEnter={() => setHoveredCity(city.name)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => handleCityClick(city.name)}
                />
                
                {/* City label */}
                <text
                  x={city.coords.x}
                  y={city.coords.y - 5}
                  textAnchor="middle"
                  className="font-semibold fill-foreground cursor-pointer pointer-events-none select-none"
                  style={{ 
                    fontSize: isSelected || isHovered ? '0.9rem' : '0.7rem',
                    filter: "drop-shadow(0 1px 2px rgba(255,255,255,0.8))"
                  }}
                >
                  {city.name}
                </text>
                
                {/* Doctor count badge */}
                <circle
                  cx={city.coords.x + 3}
                  cy={city.coords.y - 3}
                  r="2"
                  fill="hsl(var(--primary))"
                  stroke="white"
                  strokeWidth="0.5"
                  className="cursor-pointer"
                  onClick={() => handleCityClick(city.name)}
                />
                <text
                  x={city.coords.x + 3}
                  y={city.coords.y - 2.2}
                  textAnchor="middle"
                  className="font-bold fill-white cursor-pointer pointer-events-none select-none"
                  style={{ fontSize: '0.5rem' }}
                >
                  {city.doctorCount}
                </text>
              </g>
            );
          })
        ) : (
          /* Individual doctor markers when city is selected */
          selectedCity && doctorsByCity[selectedCity]?.map((doctor, index) => {
            // Spread doctors around the selected city
            const baseCoords = cityCoordinates[selectedCity];
            const angle = (index * 360 / doctorsByCity[selectedCity].length) * (Math.PI / 180);
            const radius = 3 + (index % 3) * 1.5;
            const doctorX = baseCoords.x + Math.cos(angle) * radius;
            const doctorY = baseCoords.y + Math.sin(angle) * radius;
            const DoctorIcon = doctor.icon;
            
            return (
              <g key={doctor.id}>
                <circle
                  cx={doctorX}
                  cy={doctorY}
                  r="1.5"
                  fill="hsl(var(--secondary))"
                  stroke="white"
                  strokeWidth="0.3"
                  className="cursor-pointer transition-all duration-200 hover:scale-125"
                  onMouseEnter={() => setHoveredCity(`${doctor.name} - ${doctor.specialty}`)}
                  onMouseLeave={() => setHoveredCity(null)}
                />
                {/* Small specialty indicator */}
                <circle
                  cx={doctorX}
                  cy={doctorY}
                  r="0.8"
                  fill="hsl(var(--primary))"
                  className="pointer-events-none"
                />
              </g>
            );
          })
        )}
      </svg>

      {/* Hover tooltip */}
      {hoveredCity && (
        <div className="absolute top-20 left-4 bg-card/95 backdrop-blur-sm border border-border/40 rounded-lg p-4 shadow-xl z-20 max-w-sm">
          <div className="flex items-center space-x-2 mb-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-semibold text-base">{hoveredCity.split(' - ')[0]}</span>
          </div>
          
          {hoveredCity.includes(' - ') ? (
            /* Doctor-specific tooltip */
            <div className="space-y-2">
              <div className="text-sm font-medium text-primary">
                {hoveredCity.split(' - ')[1]}
              </div>
              <div className="text-xs text-muted-foreground">
                Cliquez pour voir le profil complet
              </div>
            </div>
          ) : (
            /* City tooltip */
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                {doctorsByCity[hoveredCity]?.length || 0} médecins disponibles
              </div>
              <div className="space-y-2">
                {doctorsByCity[hoveredCity]?.slice(0, 4).map((doctor, index) => {
                  const SpecialtyIcon = doctor.icon;
                  return (
                    <div key={doctor.id} className="flex items-center space-x-3 text-sm">
                      <SpecialtyIcon className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{doctor.name}</div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {doctor.specialty}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
                {doctorsByCity[hoveredCity]?.length > 4 && (
                  <div className="text-xs text-muted-foreground font-medium">
                    +{doctorsByCity[hoveredCity]?.length - 4} autres médecins
                  </div>
                )}
              </div>
              <div className="text-xs text-primary font-medium pt-2 border-t border-border/20">
                💡 Cliquez pour voir tous les médecins
              </div>
            </div>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm border border-border/40 rounded-lg p-4 shadow-lg">
        <div className="text-sm font-semibold mb-3 text-primary">Légende</div>
        <div className="space-y-3 text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm"></div>
            <span>Ville avec médecins</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm"></div>
            <span>Ville sélectionnée</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-secondary border-2 border-white shadow-sm"></div>
            <span>Médecin individuel</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-[0.4rem]">N</span>
            </div>
            <span>Nombre de médecins</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 max-w-sm shadow-lg">
        <div className="text-sm text-primary font-semibold mb-2">
          💡 Guide d'utilisation
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>• Survolez une ville pour voir les médecins</div>
          <div>• Cliquez pour zoomer et voir chaque médecin</div>
          <div>• Utilisez "Reset" pour revenir à la vue générale</div>
        </div>
      </div>
    </div>
  );
};

export default MoroccoMap;