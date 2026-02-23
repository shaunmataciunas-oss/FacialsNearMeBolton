import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-sm text-[#1a1a1a] leading-5 w-full bg-[#f7e6ea] p-4 rounded-lg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <span style={{ color: '#1a1a1a', fontWeight: 'bold' }}>Welcome!</span> Write in the chat what you want to create.
    </motion.p>
  );
};

export default WelcomeMessage;