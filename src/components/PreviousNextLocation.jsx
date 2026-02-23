import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { locationsData } from '@/data/locationsData';

const PreviousNextLocation = ({ currentSlug }) => {
  const slugs = Object.keys(locationsData);
  const currentIndex = slugs.indexOf(currentSlug);
  
  if (currentIndex === -1) return null;

  const prevIndex = (currentIndex - 1 + slugs.length) % slugs.length;
  const nextIndex = (currentIndex + 1) % slugs.length;

  const prevSlug = slugs[prevIndex];
  const nextSlug = slugs[nextIndex];
  
  const prevLoc = locationsData[prevSlug];
  const nextLoc = locationsData[nextSlug];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 py-8 border-t border-gray-200 mt-12">
      <Link 
        to={`/locations/${prevSlug}`}
        className="group flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all w-full md:w-auto"
      >
        <div className="bg-pink-50 p-2 rounded-full mr-4 group-hover:bg-pink-100 transition-colors">
          <ArrowLeft size={20} className="text-pink-600" />
        </div>
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-wide">Previous Location</span>
          <span className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">{prevLoc.name}</span>
        </div>
      </Link>

      <Link 
        to={`/locations/${nextSlug}`}
        className="group flex items-center justify-end p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all w-full md:w-auto text-right"
      >
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-wide">Next Location</span>
          <span className="font-semibold text-gray-900 group-hover:text-pink-700 transition-colors">{nextLoc.name}</span>
        </div>
        <div className="bg-pink-50 p-2 rounded-full ml-4 group-hover:bg-pink-100 transition-colors">
          <ArrowRight size={20} className="text-pink-600" />
        </div>
      </Link>
    </div>
  );
};

export default PreviousNextLocation;