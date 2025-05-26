import { useEffect, useState, useCallback, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';

const PlantingMap = () => {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef(null);
  const markersLayerRef = useRef(null);

  // Constants for Tacaongaga, Manay, Davao Oriental coordinates
  const TACAONGAGA_CENTER = {
    lat: 7.2079,
    lng: 126.5324,
    zoom: 14
  };

  // Create plant icon
  const createPlantIcon = useCallback((status) => {
    const color = status === 'alive' ? '#22c55e' : 
                  status === 'dead' ? '#ef4444' : '#eab308';
    return L.divIcon({
      html: `<div style="background-color: ${color}; width: 8px; height: 8px; border-radius: 50%;"></div>`,
      className: 'plant-marker',
      iconSize: [8, 8]
    });
  }, []);

  // Generate beneficiary data
  const generateBeneficiaryData = useCallback(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Beneficiary ${index + 1}`,
      plotSize: Math.floor(Math.random() * (2000 - 1000) + 1000),
      coordinates: [
        TACAONGAGA_CENTER.lat + (Math.random() - 0.5) * 0.02,
        TACAONGAGA_CENTER.lng + (Math.random() - 0.5) * 0.02
      ],
      plants: Array.from({ length: 20 }, (_, plantIndex) => ({
        id: `plant-${index}-${plantIndex}`,
        status: ['alive', 'dead', 'observation'][Math.floor(Math.random() * 3)],
        coordinates: []
      }))
    }));
  }, []);

  // Update markers
  const updateMarkers = useCallback(() => {
    if (!mapRef.current || !markersLayerRef.current) return;

    setIsLoading(true);
    const beneficiaries = generateBeneficiaryData();
    markersLayerRef.current.clearLayers();

    beneficiaries.forEach(beneficiary => {
      const radius = Math.sqrt(beneficiary.plotSize / Math.PI);
      const plot = L.circle(beneficiary.coordinates, {
        radius: radius,
        color: '#3b82f6',
        fillColor: '#3b82f680',
        fillOpacity: 0.2,
        weight: 2
      });

      plot.on('click', () => {
        setSelectedBeneficiary(beneficiary);
      });

      markersLayerRef.current.addLayer(plot);

      // Only show individual plant markers when zoomed in
      if (mapRef.current.getZoom() > 15) {
        beneficiary.plants.forEach(plant => {
          const angle = Math.random() * 2 * Math.PI;
          const r = Math.sqrt(Math.random()) * radius;
          const x = beneficiary.coordinates[0] + (r * Math.cos(angle)) / 111111;
          const y = beneficiary.coordinates[1] + (r * Math.sin(angle)) / (111111 * Math.cos(beneficiary.coordinates[0] * Math.PI/180));
          
          plant.coordinates = [x, y];
          
          const marker = L.marker([x, y], {
            icon: createPlantIcon(plant.status)
          });

          marker.on('click', () => {
            setSelectedBeneficiary(beneficiary);
          });

          markersLayerRef.current.addLayer(marker);
        });
      }
    });

    setIsLoading(false);
  }, [createPlantIcon, generateBeneficiaryData]);

  // Initialize map
  useEffect(() => {
    if (mapRef.current) return; // Prevent multiple initializations

    mapRef.current = L.map('map').setView(
      [TACAONGAGA_CENTER.lat, TACAONGAGA_CENTER.lng],
      TACAONGAGA_CENTER.zoom
    );

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);

    // Add location label
    L.marker([TACAONGAGA_CENTER.lat, TACAONGAGA_CENTER.lng])
      .bindPopup('<b>Tacaongaga, Manay<br>Davao Oriental</b>')
      .addTo(mapRef.current)
      .openPopup();

    // Create marker cluster group
    markersLayerRef.current = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false
    });

    mapRef.current.addLayer(markersLayerRef.current);

    // Initial marker update
    updateMarkers();

    // Add event listeners for map movement
    const debouncedUpdate = debounce(updateMarkers, 300);
    mapRef.current.on('moveend', debouncedUpdate);
    mapRef.current.on('zoomend', debouncedUpdate);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markersLayerRef.current = null;
      }
    };
  }, [updateMarkers]);

  // Debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent">Planting Map - Tacaongaga, Manay</h2>
      <div className="flex gap-4">
        <div className="relative w-3/4">
          <div id="map" className="h-[calc(100vh-12rem)] w-full rounded-lg shadow-md"></div>
          {isLoading && (
            <div className="absolute top-2 right-2 bg-white px-4 py-2 rounded-md shadow">
              Loading markers...
            </div>
          )}
        </div>
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Plot Information</h3>
          {selectedBeneficiary ? (
            <div className="space-y-4">
              <p><span className="font-semibold">Beneficiary:</span> {selectedBeneficiary.name}</p>
              <p><span className="font-semibold">Plot Size:</span> {selectedBeneficiary.plotSize} sq.m</p>
              <p><span className="font-semibold">Plants Status:</span></p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Alive: {selectedBeneficiary.plants.filter(p => p.status === 'alive').length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Dead: {selectedBeneficiary.plants.filter(p => p.status === 'dead').length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Under Observation: {selectedBeneficiary.plants.filter(p => p.status === 'observation').length}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a plot or plant to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantingMap; 