import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, location, rating = 5, text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/50 flex flex-col h-full relative group"
    >
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={48} className="text-pink-400" />
      </div>

      <div className="flex space-x-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-pink-400 text-pink-400" />
        ))}
      </div>

      <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        "{text}"
      </p>

      <div className="pt-6 border-t border-pink-100 mt-auto">
        <h4 className="font-bold text-lg text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</h4>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;