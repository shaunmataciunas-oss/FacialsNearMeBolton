import React from 'react';
import { Award, ShieldCheck, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

function TrustSignals() {
  const signals = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1a1a1a]" />,
      title: 'Fully Certified',
      description: 'All our practitioners are fully qualified and insured'
    },
    {
      icon: <Award className="w-8 h-8 text-[#1a1a1a]" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in beauty services'
    },
    {
      icon: <Star className="w-8 h-8 text-[#1a1a1a]" />,
      title: '5-Star Reviews',
      description: 'Rated excellent by our valued clients'
    },
    {
      icon: <Users className="w-8 h-8 text-[#1a1a1a]" />,
      title: '1000+ Clients',
      description: 'Trusted by the Bolton community'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {signals.map((signal, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#f1f1f1] rounded-xl p-6 md:p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-pink-100 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex justify-center mb-4">{signal.icon}</div>
          <h3 className="text-lg font-bold mb-2 text-[#1a1a1a] break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {signal.title}
          </h3>
          <p className="text-sm text-gray-700 break-words max-w-full">{signal.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default TrustSignals;