import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Calendar, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function LocationsPage() {
  const locations = [
    {
      id: 'horwich',
      name: 'Horwich',
      address: 'Horwich, Bolton, UK',
      phone: '+441234567890',
      description: 'Serving clients across Horwich with our premium facial treatments.',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: [53.593, -2.556], // Approx lat/lon for static map url or link
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-2.576%2C53.583%2C-2.536%2C53.603&layer=mapnik'
    },
    {
      id: 'farnworth',
      name: 'Farnworth',
      address: 'Farnworth, Bolton, UK',
      phone: '+441234567890',
      description: 'Conveniently located for clients in Farnworth seeking expert skincare.',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: [53.548, -2.404],
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-2.424%2C53.538%2C-2.384%2C53.558&layer=mapnik'
    },
    {
      id: 'westhoughton',
      name: 'Westhoughton',
      address: 'Westhoughton, Bolton, UK',
      phone: '+441234567890',
      description: 'Providing luxury facials and skincare consultations to Westhoughton residents.',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: [53.548, -2.528],
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-2.548%2C53.538%2C-2.508%2C53.558&layer=mapnik'
    },
    {
      id: 'little-lever',
      name: 'Little Lever',
      address: 'Little Lever, Bolton, UK',
      phone: '+441234567890',
      description: 'Your local specialist for chemical peels and hydrafacials in Little Lever.',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      coordinates: [53.565, -2.378],
      mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=-2.398%2C53.555%2C-2.358%2C53.575&layer=mapnik'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Locations | Ella's Beautique - Bolton & Surrounding Areas</title>
        <meta name="description" content="Find Ella's Beautique locations near you. Serving Horwich, Farnworth, Westhoughton, and Little Lever with professional facial treatments." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Locations
              </h1>
              <p className="text-2xl text-gray-700 font-medium italic">
                Serving Bolton and the surrounding communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-6xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-lg border border-pink-100 flex flex-col md:flex-row"
                >
                  {/* Map Area */}
                  <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 relative">
                     <iframe
                        title={`Map of ${location.name}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src={location.mapUrl}
                        className="w-full h-full"
                      ></iframe>
                      <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-xs rounded shadow z-10">
                        <a 
                          href={`https://www.openstreetmap.org/?mlat=${location.coordinates[0]}&mlon=${location.coordinates[1]}#map=14/${location.coordinates[0]}/${location.coordinates[1]}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          View Larger Map <ExternalLink size={12}/>
                        </a>
                      </div>
                  </div>

                  {/* Content Area */}
                  <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {location.name}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {location.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-pink-600 shrink-0 mt-1" size={20} />
                        <span className="text-gray-800">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="text-pink-600 shrink-0" size={20} />
                        <a href={`tel:${location.phone}`} className="text-gray-800 hover:text-pink-600 transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="text-pink-600 shrink-0" size={20} />
                        <span className="text-gray-800">{location.hours}</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-[#1a1a1a] text-white font-semibold hover:bg-gray-800 transition-colors gap-2"
                      >
                        <Calendar size={18} />
                        Book Appointment
                      </a>
                    </div>
                  </div>
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

export default LocationsPage;