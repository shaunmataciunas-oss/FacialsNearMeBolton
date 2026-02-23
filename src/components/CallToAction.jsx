
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="py-16 bg-[#f7e6ea]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Ready to enhance your natural beauty?
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/booking"
            className='inline-block px-8 py-3 rounded-full font-bold text-[#f7e6ea] transition-all hover:shadow-lg'
            style={{ backgroundColor: '#1a1a1a' }}
          >
            Book Appointment
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;
