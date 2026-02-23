import React from 'react';

function LocationMap({ areaName, coordinates }) {
  // Fallback if coordinates aren't provided, generic Bolton area
  const mapQuery = coordinates 
    ? `mlat=${coordinates[0]}&mlon=${coordinates[1]}` 
    : `q=${encodeURIComponent(areaName + ', Bolton, UK')}`;
    
  // Using OpenStreetMap export embed as per constraints (Google Maps requires API key usually or simple embed)
  // Constructing a bounding box for OSM is tricky without precise data, so we'll use a centered point approach with a marker
  // or fall back to a generic query if possible. 
  // Since constraints prefer OpenStreetMap:
  
  // Default center for Bolton if no coords
  const lat = coordinates ? coordinates[0] : 53.5769;
  const lon = coordinates ? coordinates[1] : -2.4282;
  const bboxDiff = 0.02; // Roughly zoom level
  
  const bbox = `${lon - bboxDiff}%2C${lat - bboxDiff}%2C${lon + bboxDiff}%2C${lat + bboxDiff}`;
  
  return (
    <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-300 relative">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`}
        title={`Map of ${areaName}`}
        className="w-full h-full"
      ></iframe>
      <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 text-xs rounded-md shadow z-10">
        <a 
          href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=15/${lat}/${lon}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-medium flex items-center gap-1"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
}

export default LocationMap;