import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, TrendingUp, Calendar, ArrowLeft, CheckCircle2, Clock, Map as MapIcon, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locationsData } from '@/data/locationsData';
import Breadcrumb from '@/components/Breadcrumb';
import LocationSelector from '@/components/LocationSelector';
import PreviousNextLocation from '@/components/PreviousNextLocation';

const LocationPageLayout = ({ locationId }) => {
  const location = locationsData[locationId];

  if (!location) return <div className="min-h-screen flex items-center justify-center">Location not found</div>;

  const breadcrumbItems = [
    { label: 'Locations', path: '/locations' },
    { label: location.name, path: `/locations/${locationId}` }
  ];

  // Process description to avoid duplicates between Hero and Main Content
  // We split by double newline to get paragraphs. 
  // The first paragraph goes to Hero, the rest to Main Content.
  const descriptionParagraphs = location.description ? location.description.split('\n\n') : [];
  const heroDescription = descriptionParagraphs[0] || "";
  const mainContentParagraphs = descriptionParagraphs.slice(1);

  // Schema Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": `Ella's Beautique - ${location.name}`,
    "image": "https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png",
    "description": location.description.substring(0, 160),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": "Bolton",
      "postalCode": location.postcode,
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coords[0],
      "longitude": location.coords[1]
    },
    "url": `https://ellsbeautique.co.uk/locations/${locationId}`,
    "telephone": location.phone,
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "££"
  };

  return (
    <>
      <Helmet>
        <title>{`Facials in ${location.name} | Top Rated Skincare ${location.name} | Ella's Beautique`}</title>
        <meta name="description" content={`Looking for expert facials in ${location.name}? Ella's Beautique offers luxury skincare, chemical peels, and anti-aging treatments serving the ${location.name} community. Book now.`} />
        <meta name="keywords" content={`${location.localKeywords.join(', ')}, Ella's Beautique locations, beautician Bolton`} />
        <link rel="canonical" href={`https://ellsbeautique.co.uk/locations/${locationId}`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f9f9f9] flex flex-col font-sans">
        <Header />
        
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="relative bg-white py-12 lg:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f7e6ea] opacity-30 z-0"></div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-pink-50 skew-x-12 opacity-50 z-0 hidden lg:block"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-2/3"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Serving {location.name}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Premium Skincare & <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    Facials in {location.name}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  {heroDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-3 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Book Appointment
                  </Link>
                  <a href="#services" className="px-8 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-full font-semibold hover:bg-gray-50 transition-colors">
                    View Services
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:w-1/3 w-full"
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-pink-100">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-gray-800">Change Location</h3>
                    <LocationSelector currentSlug={locationId} />
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="text-pink-500 shrink-0" size={20} />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase">Service Area</p>
                          <p className="text-sm font-medium text-gray-900">{location.name}, Bolton</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="text-pink-500 shrink-0" size={20} />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase">Availability</p>
                          <p className="text-sm font-medium text-gray-900">{location.hours}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Users className="text-pink-500 shrink-0" size={20} />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase">Active Clients</p>
                          <p className="text-sm font-medium text-gray-900">{location.stats.clients} of Locals</p>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Main Content Column */}
              <div className="lg:w-2/3">
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-p:text-gray-600 prose-a:text-pink-600 hover:prose-a:text-pink-700"
                >
                  <h2 className="text-3xl mb-6">Expert Facial Treatments for {location.name} Residents</h2>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
                     {mainContentParagraphs.map((para, i) => (
                        <p key={i} className="mb-4 text-gray-600 leading-relaxed">{para}</p>
                     ))}
                  </div>

                  <h3 className="text-2xl mb-6 flex items-center gap-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                    Why {location.name} Chooses Ella's Beautique
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {location.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-xl border border-pink-100">
                        <CheckCircle2 className="text-pink-600 shrink-0 mt-1" size={18} />
                        <span className="font-medium text-gray-800">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl mb-6" id="services">Our Services Available Near {location.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-12">
                     {location.services.map((service, idx) => (
                       <Link to="/services" key={idx} className="block group">
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:border-pink-300 group-hover:shadow-md transition-all">
                           <h4 className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">{service}</h4>
                           <p className="text-sm text-gray-500">Professional {service.toLowerCase()} treatments tailored for you.</p>
                         </div>
                       </Link>
                     ))}
                  </div>

                  <div className="bg-[#1a1a1a] text-white p-8 rounded-2xl text-center mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Skin?</h3>
                      <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Join our community of satisfied clients from {location.name}. Book your consultation today and take the first step towards radiant skin.
                      </p>
                      <p className="text-sm text-gray-400 mb-6">
                        Visit us at: {location.fullAddress}
                      </p>
                      <Link 
                        to="/contact" 
                        className="inline-block bg-white text-[#1a1a1a] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                      >
                        Book Your Visit Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
                
                <PreviousNextLocation currentSlug={locationId} />
              </div>

              {/* Sidebar Column */}
              <div className="lg:w-1/3 space-y-8">
                {/* Stats Widget */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                  <h3 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-2">
                    <MapIcon size={20} className="text-pink-500" />
                    Local Insights
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Area Demographics</p>
                      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{location.demographics}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Landmarks</p>
                      <ul className="space-y-2">
                        {location.landmarks.map((landmark, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            {landmark}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-48 rounded-xl overflow-hidden relative border border-gray-200">
                       <iframe
                          title={`Map of ${location.name}`}
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.coords[1]-0.01}%2C${location.coords[0]-0.01}%2C${location.coords[1]+0.01}%2C${location.coords[0]+0.01}&layer=mapnik&marker=${location.coords[0]}%2C${location.coords[1]}`}
                          className="w-full h-full"
                        ></iframe>
                        <div className="absolute bottom-2 right-2 bg-white/90 text-xs px-2 py-1 rounded shadow">
                          <a href={`https://www.openstreetmap.org/?mlat=${location.coords[0]}&mlon=${location.coords[1]}#map=15/${location.coords[0]}/${location.coords[1]}`} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                            View Larger
                          </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LocationPageLayout;