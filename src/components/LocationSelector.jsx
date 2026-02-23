import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, X } from 'lucide-react';
import { locationsData } from '@/data/locationsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LocationSelector = ({ currentSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const locations = Object.entries(locationsData).map(([slug, data]) => ({
    slug,
    name: data.name
  }));

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (slug) => {
    navigate(`/locations/${slug}`);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative z-20">
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="flex items-center gap-2 bg-white hover:bg-pink-50 text-gray-800 border-pink-200"
      >
        <MapPin size={16} className="text-pink-600" />
        <span>Change Location</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 z-30" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-12 right-0 w-80 bg-white rounded-xl shadow-xl border border-pink-100 p-4 z-40 max-h-[400px] flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Select Area</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={18} />
                </button>
              </div>

              <div className="relative mb-3">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <Input
                  placeholder="Search Bolton area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-pink-300"
                  autoFocus
                />
              </div>

              <div className="overflow-y-auto flex-1 space-y-1 pr-1 custom-scrollbar">
                {filteredLocations.map((loc) => (
                  <button
                    key={loc.slug}
                    onClick={() => handleSelect(loc.slug)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentSlug === loc.slug 
                        ? 'bg-pink-100 text-pink-700 font-medium' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
                {filteredLocations.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-4">No locations found</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationSelector;