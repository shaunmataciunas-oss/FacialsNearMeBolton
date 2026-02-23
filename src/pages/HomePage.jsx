
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Droplet, Zap, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustSignals from '@/components/TrustSignals';
import ServiceCard from '@/components/ServiceCard';

function HomePage() {
  const services = [
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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ellasbeautique.com/#organization",
        "name": "Ella's Beautique",
        "description": "Luxury facial specialist offering professional skincare treatments in Bolton, Lancashire. Specializing in Hydrating Facial, Chemical Peels, and Microneedling.",
        "url": "https://ellasbeautique.com",
        "logo": "https://ellasbeautique.com/favicon.svg",
        "image": "https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "34 Hazelwood Road",
          "addressLocality": "Bolton",
          "postalCode": "BL1 6ER",
          "addressCountry": "UK"
        },
        "telephone": "+441234567890",
        "email": "info@facialsnearmebolton.co.uk",
        "priceRange": "££",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/SPMUbyElla",
          "https://www.instagram.com/ellasbeautique/"
        ]
      },
      {
        "@type": "Service",
        "name": "Hydrating Facial",
        "provider": { "@id": "https://ellasbeautique.com/#organization" },
        "description": "Advanced hydration therapy that cleanses, extracts, and hydrates your skin.",
        "areaServed": { "@type": "City", "name": "Bolton" }
      },
      {
        "@type": "Service",
        "name": "Chemical Peel",
        "provider": { "@id": "https://ellasbeautique.com/#organization" },
        "description": "Professional-grade peels to reveal brighter, smoother, more youthful-looking skin.",
        "areaServed": { "@type": "City", "name": "Bolton" }
      },
      {
        "@type": "Service",
        "name": "Microneedling",
        "provider": { "@id": "https://ellasbeautique.com/#organization" },
        "description": "Collagen induction therapy to improve skin texture and firmness.",
        "areaServed": { "@type": "City", "name": "Bolton" }
      },
      {
        "@type": "Service",
        "name": "Anti-Aging Facial",
        "provider": { "@id": "https://ellasbeautique.com/#organization" },
        "description": "Targeted treatment for fine lines, wrinkles, and age spots.",
        "areaServed": { "@type": "City", "name": "Bolton" }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ella's Beautique | Premium Facial Treatments in Bolton, Lancashire</title>
        <meta name="description" content="Discover expert facial treatments at Ella's Beautique in Bolton. Million Dollar Facials, advanced skincare, and personalized beauty solutions. Book your appointment today." />
        <meta name="keywords" content="facial treatments Bolton, skincare Bolton, beauty salon Bolton, Million Dollar Facials, Ella's Beautique" />
        <link rel="canonical" href="https://ellasbeautique.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ella's Beautique | Premium Facial Treatments in Bolton, Lancashire" />
        <meta property="og:description" content="Discover expert facial treatments at Ella's Beautique in Bolton. Million Dollar Facials, advanced skincare, and personalized beauty solutions." />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="https://ellasbeautique.com/" />
        <meta property="og:image" content="https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ella's Beautique | Premium Facial Treatments in Bolton" />
        <meta name="twitter:description" content="Expert skincare and luxury facials in Bolton. Book your Hydrating Facial or Chemical Peel today." />
        <meta name="twitter:image" content="https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: "url('https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png')" 
              }}
              role="img"
              aria-label="Ella's Beautique luxury salon atmosphere - facial treatment in Bolton"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-[#f7e6ea] break-words max-w-full"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ella's Beautique
              <br />
              <span className="text-pink-400 block sm:inline">Luxury Facial Specialist</span>
              <br />
              in Bolton
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-[#f7e6ea] max-w-3xl mx-auto font-medium px-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Professional Skincare Treatments by Expert Practitioners
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex justify-center"
            >
              <Link
                to="/booking"
                className="inline-block px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold text-[#1a1a1a] transition-all hover:shadow-2xl hover:scale-110"
                style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-10 md:py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <TrustSignals />
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="py-10 md:py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#1a1a1a] break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Signature Treatments
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-2 break-words">
                Experience the finest facial treatments tailored to your unique skin needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-10 md:py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#f1f1f1] rounded-3xl p-6 md:p-12 text-center shadow-2xl border border-pink-100 overflow-hidden"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-[#1a1a1a] break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ready to Transform Your Skin?
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto break-words">
                Book your consultation today and discover why Bolton trusts Ella's Beautique for luxury skincare
              </p>
              <div className="flex justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center space-x-2 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-bold text-[#f7e6ea] transition-all hover:shadow-2xl hover:scale-110 w-full sm:w-auto justify-center"
                  style={{ backgroundColor: '#1a1a1a', fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span>Book Your Treatment</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location Areas Section */}
        <section className="py-10 md:py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a] break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Serving Bolton & Surrounding Areas
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 px-2 break-words">
                Proudly providing exceptional beauty services across the region
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { name: 'Horwich', link: '/locations/horwich' },
                { name: 'Farnworth', link: '/locations/farnworth' },
                { name: 'Westhoughton', link: '/locations/westhoughton' },
                { name: 'Little Lever', link: '/locations/little-lever' }
              ].map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={area.link}
                    className="block bg-[#f1f1f1] rounded-xl p-4 md:p-6 text-center hover:bg-[#f7e6ea] transition-all hover:shadow-xl group border border-pink-100 h-full flex items-center justify-center"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-pink-600 break-words w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {area.name}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
