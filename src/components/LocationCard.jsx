import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

function LocationCard({ area }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link 
        to={`/locations/${area.slug}`}
        className="block h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 group"
      >
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          {/* Placeholder for area image - using a gradient pattern for now */}
          <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient || 'from-pink-100 to-white'}`} />
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
            <MapPin size={64} className="text-pink-900" />
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-pink-900 shadow-sm">
            {area.distance || 'Bolton Area'}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-pink-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {area.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {area.description || `Experience luxury facial treatments near ${area.name}. Professional skincare services just a short distance away.`}
          </p>
          
          <div className="flex items-center text-pink-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            View Location <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default LocationCard;