import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, RotateCcw, Users } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  city: string;
  coords: { x: number; y: number };
  icon: any;
  rating: number;
  price: number;
}

interface MoroccoLeafletMapProps {
  doctors: Doctor[];
  onCitySelect: (city: string | null) => void;
  selectedCity: string | null;
}

// Morocco city coordinates (lat, lng)
const cityCoordinates: { [key: string]: [number, number] } = {
  "Casablanca": [33.5731, -7.5898],
  "Rabat": [34.0209, -6.8416],
  "Marrakech": [31.6295, -7.9811],
  "Fès": [34.0181, -5.0078],
  "Tangier": [35.7595, -5.8340],
  "Agadir": [30.4278, -9.5981],
  "Meknès": [33.8935, -5.5473],
  "Oujda": [34.6814, -1.9086],
  "Tétouan": [35.5889, -5.3626],
  "Salé": [34.0531, -6.7985],
  "Temara": [33.9288, -6.9067],
  "Mohammedia": [33.6863, -7.3830],
  "Kénitra": [34.2610, -6.5802],
  "El Jadida": [33.2316, -8.5007],
  "Laâyoune": [27.1536, -13.1994],
  "Dakhla": [23.6848, -15.9560],
  "Taza": [34.2133, -4.0103],
  "Settat": [33.0013, -7.6160],
  "Khémisset": [33.8244, -6.0661],
  "Béni Mellal": [32.3372, -6.3498]
};

const MoroccoLeafletMap = ({ doctors, onCitySelect, selectedCity }: MoroccoLeafletMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const [viewMode, setViewMode] = useState<'cities' | 'doctors'>('cities');

  // Group doctors by city
  const doctorsByCity = doctors.reduce((acc, doctor) => {
    if (!acc[doctor.city]) {
      acc[doctor.city] = [];
    }
    acc[doctor.city].push(doctor);
    return acc;
  }, {} as { [city: string]: Doctor[] });

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map centered on Morocco
    const map = L.map(mapRef.current, {
      center: [31.7917, -7.0926],
      zoom: 6,
      scrollWheelZoom: true,
      zoomControl: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(map);

    // Custom marker icons
    const cityIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="
        background: hsl(var(--primary));
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
      "></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    const selectedCityIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="
        background: hsl(var(--accent));
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 14px;
        animation: pulse 2s infinite;
      "></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const doctorIcon = L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="
        background: hsl(var(--secondary));
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 1px 4px rgba(0,0,0,0.3);
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    mapInstanceRef.current = map;
    markersRef.current = L.layerGroup().addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when data changes
  useEffect(() => {
    if (!mapInstanceRef.current || !markersRef.current) return;

    // Clear existing markers
    markersRef.current.clearLayers();

    if (viewMode === 'cities') {
      // Show city markers
      Object.entries(doctorsByCity).forEach(([cityName, cityDoctors]) => {
        const coords = cityCoordinates[cityName];
        if (!coords) return;

        const isSelected = selectedCity === cityName;
        const doctorCount = cityDoctors.length;

        const cityIcon = L.divIcon({
          className: 'custom-div-icon',
          html: `<div style="
            background: ${isSelected ? 'hsl(var(--accent))' : 'hsl(var(--primary))'};
            width: ${isSelected ? '32px' : '26px'};
            height: ${isSelected ? '32px' : '26px'};
            border-radius: 50%;
            border: ${isSelected ? '4px' : '3px'} solid white;
            box-shadow: 0 ${isSelected ? '4px 12px' : '2px 8px'} rgba(0,0,0,${isSelected ? '0.4' : '0.3'});
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: ${isSelected ? '14px' : '12px'};
            cursor: pointer;
            transition: all 0.3s ease;
            ${isSelected ? 'animation: pulse 2s infinite;' : ''}
          ">${doctorCount}</div>`,
          iconSize: [isSelected ? 32 : 26, isSelected ? 32 : 26],
          iconAnchor: [isSelected ? 16 : 13, isSelected ? 16 : 13]
        });

        const marker = L.marker([coords[0], coords[1]], { icon: cityIcon })
          .addTo(markersRef.current!)
          .bindPopup(`
            <div style="min-width: 200px; font-family: system-ui;">
              <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: hsl(var(--foreground));">
                📍 ${cityName}
              </h4>
              <p style="margin: 0 0 12px 0; color: hsl(var(--muted-foreground)); font-size: 14px;">
                ${doctorCount} médecins disponibles
              </p>
              <div style="max-height: 120px; overflow-y: auto;">
                ${cityDoctors.slice(0, 3).map(doctor => `
                  <div style="margin-bottom: 8px; padding: 6px; background: hsl(var(--muted)); border-radius: 6px;">
                    <div style="font-weight: 600; font-size: 13px; color: hsl(var(--foreground));">${doctor.name}</div>
                    <div style="font-size: 12px; color: hsl(var(--muted-foreground));">${doctor.specialty}</div>
                  </div>
                `).join('')}
                ${doctorCount > 3 ? `<div style="text-align: center; font-size: 12px; color: hsl(var(--muted-foreground));">+${doctorCount - 3} autres...</div>` : ''}
              </div>
              <div style="text-align: center; margin-top: 12px;">
                <button onclick="window.selectCity('${cityName}')" style="
                  background: hsl(var(--primary));
                  color: white;
                  border: none;
                  padding: 6px 12px;
                  border-radius: 6px;
                  cursor: pointer;
                  font-size: 12px;
                  font-weight: 600;
                ">
                  Voir tous les médecins
                </button>
              </div>
            </div>
          `, {
            maxWidth: 300,
            closeButton: true,
            autoClose: false
          });

        marker.on('click', () => {
          if (selectedCity === cityName) {
            setViewMode('cities');
            onCitySelect(null);
          } else {
            setViewMode('doctors');
            onCitySelect(cityName);
            // Zoom to city
            mapInstanceRef.current?.setView([coords[0], coords[1]], 10);
          }
        });
      });
    } else if (selectedCity && doctorsByCity[selectedCity]) {
      // Show individual doctor markers for selected city
      const cityCoords = cityCoordinates[selectedCity];
      if (cityCoords) {
        doctorsByCity[selectedCity].forEach((doctor, index) => {
          // Spread doctors around the city center
          const angle = (index * 360 / doctorsByCity[selectedCity].length) * (Math.PI / 180);
          const radius = 0.01 + (index % 3) * 0.005; // Small radius in degrees
          const doctorLat = cityCoords[0] + Math.cos(angle) * radius;
          const doctorLng = cityCoords[1] + Math.sin(angle) * radius;

          const doctorIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="
              background: hsl(var(--secondary));
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: 2px solid white;
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              cursor: pointer;
              transition: all 0.3s ease;
            "></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          });

          L.marker([doctorLat, doctorLng], { icon: doctorIcon })
            .addTo(markersRef.current!)
            .bindPopup(`
              <div style="min-width: 180px; font-family: system-ui;">
                <h4 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: hsl(var(--foreground));">
                  👨‍⚕️ ${doctor.name}
                </h4>
                <div style="margin-bottom: 8px;">
                  <span style="background: hsl(var(--primary)); color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">
                    ${doctor.specialty}
                  </span>
                </div>
                <div style="font-size: 13px; color: hsl(var(--muted-foreground)); margin-bottom: 8px;">
                  ⭐ ${doctor.rating}/5 • ${doctor.price} DH
                </div>
                <div style="text-align: center;">
                  <button style="
                    background: hsl(var(--primary));
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 12px;
                    font-weight: 600;
                  ">
                    Voir profil
                  </button>
                </div>
              </div>
            `, {
              maxWidth: 250,
              closeButton: true
            });
        });
      }
    }
  }, [doctors, selectedCity, viewMode, doctorsByCity, onCitySelect]);

  // Global function for popup buttons
  useEffect(() => {
    (window as any).selectCity = (cityName: string) => {
      setViewMode('doctors');
      onCitySelect(cityName);
      const coords = cityCoordinates[cityName];
      if (coords && mapInstanceRef.current) {
        mapInstanceRef.current.setView([coords[0], coords[1]], 10);
      }
    };

    return () => {
      delete (window as any).selectCity;
    };
  }, [onCitySelect]);

  const resetView = () => {
    setViewMode('cities');
    onCitySelect(null);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([31.7917, -7.0926], 6);
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-background rounded-lg overflow-hidden border border-border/40">
      {/* Map Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-[1000]">
        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="bg-card/95 backdrop-blur-sm shadow-lg"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 text-xs shadow-lg border border-border/40">
          <div className="font-medium text-primary mb-1">
            Mode: {viewMode === 'cities' ? 'Villes' : 'Médecins'}
          </div>
          {selectedCity && (
            <div className="text-muted-foreground">
              📍 {selectedCity}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-card/95 backdrop-blur-sm border border-border/40 rounded-lg p-4 shadow-lg z-[1000]">
        <div className="text-sm font-semibold mb-3 text-primary">Légende</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-primary border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-white font-bold text-[0.5rem]">N</span>
            </div>
            <span>Ville (nombre de médecins)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm"></div>
            <span>Ville sélectionnée</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-secondary border border-white shadow-sm"></div>
            <span>Médecin individuel</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4 max-w-xs shadow-lg z-[1000]">
        <div className="text-sm text-primary font-semibold mb-2">
          💡 Guide d'utilisation
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>• Cliquez sur les points pour voir les détails</div>
          <div>• Sélectionnez une ville pour voir les médecins</div>
          <div>• Utilisez "Reset" pour revenir à la vue générale</div>
        </div>
      </div>

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full" />

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .leaflet-popup-content-wrapper {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
        }
        
        .leaflet-popup-tip {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
        }
      `}</style>
    </div>
  );
};

export default MoroccoLeafletMap;