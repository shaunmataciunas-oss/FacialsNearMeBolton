import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#f1f1f1] rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 border border-gray-200 h-full flex flex-col"
    >
      <div className="p-6 md:p-8 flex flex-col items-center h-full">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full" style={{ backgroundColor: '#f7e6ea' }}>
            {React.cloneElement(service.icon, { className: "w-10 h-10 text-[#1a1a1a]" })}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center text-[#1a1a1a] break-words w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {service.title}
        </h3>
        <p className="text-gray-700 mb-6 text-center leading-relaxed flex-grow break-words w-full">
          {service.description}
        </p>
        <div className="text-center mb-6 w-full">
          <span className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
            {service.price}
          </span>
        </div>
        <Link
          to={service.link}
          className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold text-[#f7e6ea] transition-all hover:shadow-lg hover:scale-105 w-full mt-auto"
          style={{ backgroundColor: '#1a1a1a', fontFamily: 'Montserrat, sans-serif' }}
        >
          <span>Learn More</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;