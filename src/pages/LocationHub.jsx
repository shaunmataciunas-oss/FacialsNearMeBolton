import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationCard from '@/components/LocationCard';

function LocationHub() {
  // Data for all 29 Bolton areas (subset for display, user can expand later)
  const locations = [
    {
      slug: 'horwich',
      name: 'Horwich',
      description: 'A historic railway town with a vibrant community, nestled at the foot of the West Pennine Moors.',
      distance: '4.5 miles',
      gradient: 'from-pink-100 to-rose-50'
    },
    {
      slug: 'farnworth',
      name: 'Farnworth',
      description: 'A busy town with strong industrial heritage, offering easy access to our luxury clinic.',
      distance: '2.3 miles',
      gradient: 'from-purple-100 to-pink-50'
    },
    {
      slug: 'westhoughton',
      name: 'Westhoughton',
      description: 'Formerly a centre for coal mining, now a popular residential area with a strong community feel.',
      distance: '5.1 miles',
      gradient: 'from-orange-100 to-amber-50'
    },
    {
      slug: 'little-lever',
      name: 'Little Lever',
      description: 'A friendly village sitting on the edge of the countryside, just a short drive away.',
      distance: '1.8 miles',
      gradient: 'from-blue-100 to-indigo-50'
    },
    {
      slug: 'tonge-moor',
      name: 'Tonge Moor',
      description: 'A residential area conveniently located north of Bolton town centre.',
      distance: '1.2 miles',
      gradient: 'from-green-100 to-emerald-50'
    },
    {
      slug: 'breightmet',
      name: 'Breightmet',
      description: 'An area with rich history and excellent transport links to our Bolton clinic.',
      distance: '2.0 miles',
      gradient: 'from-yellow-100 to-orange-50'
    },
    // Adding placeholders for other areas to reach the "29 areas" feel visually, 
    // though we only implement specific pages for the requested ones.
    { slug: 'astley-bridge', name: 'Astley Bridge', distance: '2.5 miles' },
    { slug: 'bromley-cross', name: 'Bromley Cross', distance: '3.1 miles' },
    { slug: 'bradshaw', name: 'Bradshaw', distance: '2.8 miles' },
    { slug: 'harwood', name: 'Harwood', distance: '3.0 miles' },
    { slug: 'edgworth', name: 'Edgworth', distance: '5.5 miles' },
    { slug: 'blackrod', name: 'Blackrod', distance: '6.0 miles' },
    { slug: 'kearsley', name: 'Kearsley', distance: '3.5 miles' },
    { slug: 'over-hulton', name: 'Over Hulton', distance: '4.0 miles' },
    { slug: 'deane', name: 'Deane', distance: '1.5 miles' },
    { slug: 'daubhill', name: 'Daubhill', distance: '1.2 miles' },
    { slug: 'heaton', name: 'Heaton', distance: '2.2 miles' },
    { slug: 'lostock', name: 'Lostock', distance: '3.8 miles' },
    { slug: 'smithills', name: 'Smithills', distance: '2.9 miles' },
    { slug: 'halliwell', name: 'Halliwell', distance: '1.0 miles' },
    { slug: 'great-lever', name: 'Great Lever', distance: '1.6 miles' },
    { slug: 'darcy-lever', name: 'Darcy Lever', distance: '1.9 miles' },
    { slug: 'sharples', name: 'Sharples', distance: '3.2 miles' },
    { slug: 'eagley', name: 'Eagley', distance: '3.3 miles' },
    { slug: 'dunscar', name: 'Dunscar', distance: '3.6 miles' },
    { slug: 'toppings', name: 'Toppings', distance: '3.9 miles' },
    { slug: 'cox-green', name: 'Cox Green', distance: '4.1 miles' },
    { slug: 'chapeltown', name: 'Chapeltown', distance: '4.8 miles' },
    { slug: 'turton', name: 'Turton', distance: '5.2 miles' },
  ];

  return (
    <>
      <Helmet>
        <title>Areas We Serve | Ella's Beautique Bolton</title>
        <meta name="description" content="Ella's Beautique provides luxury facial treatments to clients across Bolton. Find your local area and book an appointment today." />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        {/* Hero Section */}
        <section className="relative py-24 bg-[#1a1a1a] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center p-3 mb-6 bg-white/10 rounded-full backdrop-blur-sm">
                <MapPin className="text-pink-400 mr-2" size={24} />
                <span className="text-pink-100 font-medium">Serving All of Bolton</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ella's Beautique <span className="text-pink-500">Locations</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Bringing premium skincare and expert facial treatments to every corner of Bolton. 
                Find your nearest location below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <LocationCard area={area} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-[#1a1a1a] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Don't See Your Area?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  We welcome clients from all over the North West. Our Bolton clinic is centrally located with excellent transport links.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                >
                  Book Your Appointment
                </a>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default LocationHub;