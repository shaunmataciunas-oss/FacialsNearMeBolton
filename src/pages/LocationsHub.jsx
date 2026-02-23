import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locationsData } from '@/data/locationsData';

function LocationsHub() {
  const locationsList = Object.entries(locationsData).map(([id, data]) => ({
    id,
    ...data
  }));

  return (
    <>
      <Helmet>
        <title>All Locations | Ella's Beautique Bolton</title>
        <meta name="description" content="View all Ella's Beautique service locations in Bolton. From Horwich to Farnworth, find your nearest luxury facial specialist." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="relative py-20 bg-gradient-to-br from-[#f7e6ea] to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ella's Beautique
                <span className="block text-pink-600 mt-2">Bolton Locations</span>
              </h1>
              <p className="text-2xl text-gray-700 font-medium italic">
                Serving 29 distinct communities across the Bolton area
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locationsList.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/locations/${location.id}`}
                    className="block h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-pink-50"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-[#f7e6ea] rounded-lg text-pink-600">
                          <MapPin size={24} />
                        </div>
                        <ArrowRight className="text-gray-300 group-hover:text-[#1a1a1a] transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {location.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {location.description}
                      </p>
                    </div>
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

export default LocationsHub;