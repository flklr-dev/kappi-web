import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PlantingMap = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([6.9214, 126.5214], 13); // Coordinates for Tacaongaga, Manay

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent">Planting Map</h2>
      <div id="map" className="h-[calc(100vh-12rem)] w-full rounded-lg shadow-md"></div>
    </div>
  );
};

export default PlantingMap; 