import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Activity, Home } from 'lucide-react';

function LocationHeader({ area }) {
  return (
    <div className="relative bg-[#1a1a1a] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pink-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-pink-900/50 border border-pink-700 text-pink-100 text-sm font-medium mb-6">
            <MapPin size={14} className="mr-2" /> Serving {area.name} & Surrounding Areas
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Facial Treatments near {area.name}
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {area.tagline || `Discover premium skincare and luxury facials conveniently located for residents of ${area.name}, Bolton.`}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-pink-600/20 rounded-lg text-pink-400">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Population</p>
                <p className="text-lg font-semibold">{area.population || 'Unavailable'}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-pink-600/20 rounded-lg text-pink-400">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Demographics</p>
                <p className="text-lg font-semibold">{area.demographics || 'Mixed'}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-pink-600/20 rounded-lg text-pink-400">
                <Home size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Avg. Age</p>
                <p className="text-lg font-semibold">{area.avgAge || '38'} Years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LocationHeader;