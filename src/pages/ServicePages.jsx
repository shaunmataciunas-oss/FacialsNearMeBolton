
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Droplet, Zap, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TrustSignals from '@/components/TrustSignals';

function ServicePages() {
  const services = [
    {
      icon: <Star className="w-10 h-10 text-[#1a1a1a]" />,
      title: 'Million Dollar Facial System',
      description: 'The world\'s fastest growing facial system. Includes Dermaplaning, Microneedling, and the full 10-step protocol.',
      price: 'From £45',
      link: '/million-dollar-facials'
    },
    {
      icon: <Droplet className="w-10 h-10 text-[#1a1a1a]" />,
      title: 'Hydrating Facial',
      description: 'Advanced hydration therapy that cleanses, extracts, and hydrates your skin for a radiant glow.',
      price: 'From £95',
      link: '/services/hydrating-facial'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[#1a1a1a]" />,
      title: 'Chemical Peel Specialist',
      description: 'Professional-grade peels to reveal brighter, smoother, more youthful-looking skin.',
      price: 'From £80',
      link: '/services/chemical-peel'
    },
    {
      icon: <Zap className="w-10 h-10 text-[#1a1a1a]" />,
      title: 'Microneedling Therapy',
      description: 'Stimulate collagen production and improve skin texture with advanced microneedling techniques.',
      price: 'From £120',
      link: '/services/microneedling'
    },
    {
      icon: <Heart className="w-10 h-10 text-[#1a1a1a]" />,
      title: 'Anti-Aging Facial',
      description: 'Luxurious treatment targeting fine lines, wrinkles, and age spots for rejuvenated skin.',
      price: 'From £85',
      link: '/services/anti-aging'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Luxury Facial Treatments Bolton | Ell's Beautique</title>
        <meta name="description" content="Explore our range of professional facial treatments in Bolton including Million Dollar Facial, Hydrating Facial, Chemical Peels, Microneedling, and Anti-Aging facials." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="relative py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Services
              </h1>
              <p className="text-2xl text-gray-700">
                Professional Skincare Treatments Tailored to You
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Why Choose Ell's Beautique?
              </h2>
            </motion.div>
            <TrustSignals />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicePages;
