import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LocationHeader from '@/components/LocationHeader';
import LocationMap from '@/components/LocationMap';

// Data for the 6 specific areas requested
const locationData = {
  'horwich': {
    name: 'Horwich',
    population: '20,000+',
    demographics: 'Families & Professionals',
    avgAge: '41',
    coordinates: [53.593, -2.556],
    description: 'Horwich is a thriving town known for its strong community spirit and proximity to the beautiful West Pennine Moors.',
    amenities: [
      'Middlebrook Retail Park',
      'Horwich Parkway Station',
      'Rivington Pike proximity',
      'Traditional town centre'
    ],
    tagline: 'Premium skincare services just moments from Horwich town centre.'
  },
  'farnworth': {
    name: 'Farnworth',
    population: '26,000+',
    demographics: 'Diverse Community',
    avgAge: '37',
    coordinates: [53.548, -2.404],
    description: 'A historic town with excellent transport links, making it easy for residents to visit our luxury clinic.',
    amenities: [
      'Farnworth Park',
      'Royal Bolton Hospital nearby',
      'Direct train to Manchester/Bolton',
      'Local leisure centre'
    ],
    tagline: 'Expert facial treatments easily accessible for Farnworth residents.'
  },
  'westhoughton': {
    name: 'Westhoughton',
    population: '25,000+',
    demographics: 'Growing Families',
    avgAge: '40',
    coordinates: [53.548, -2.528],
    description: 'A popular residential area blending modern living with history, home to many of our valued clients.',
    amenities: [
      'Market Street shops',
      'Daisy Hill Station',
      'Central Park',
      'Carnegie Hall'
    ],
    tagline: 'Luxury aesthetics and skincare for the Westhoughton community.'
  },
  'little-lever': {
    name: 'Little Lever',
    population: '12,000+',
    demographics: 'Tight-knit Community',
    avgAge: '42',
    coordinates: [53.565, -2.378],
    description: 'A village with a friendly atmosphere, sitting on the edge of the countryside yet close to Bolton.',
    amenities: [
      'Moses Gate Country Park nearby',
      'Village centre shops',
      'Canal side walks',
      'Local library'
    ],
    tagline: 'Your local destination for advanced skin therapies near Little Lever.'
  },
  'tonge-moor': {
    name: 'Tonge Moor',
    population: '15,000+',
    demographics: 'Mixed Residential',
    avgAge: '36',
    coordinates: [53.585, -2.415],
    description: 'A convenient residential suburb north of Bolton, offering quick access to our professional services.',
    amenities: [
      'Seven Acres Country Park',
      'Tonge Moor Road shops',
      'Local schools',
      'Transport links to town'
    ],
    tagline: 'Professional skincare on your doorstep in Tonge Moor.'
  },
  'breightmet': {
    name: 'Breightmet',
    population: '14,000+',
    demographics: 'Families & Retirees',
    avgAge: '39',
    coordinates: [53.580, -2.390],
    description: 'An area with a rich history and strong local identity, just a short journey from our clinic.',
    amenities: [
      'Leverhulme Park',
      'Breightmet Health Centre',
      'Local golf course',
      'Shopping precincts'
    ],
    tagline: 'Rejuvenating facial treatments for Breightmet residents.'
  }
};

function LocationDetail() {
  const { areaSlug } = useParams();
  const location = locationData[areaSlug];

  // If slug doesn't match our data, redirect to hub or show 404
  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Facial Treatments {location.name} | Ella's Beautique Bolton</title>
        <meta name="description" content={`Expert facial treatments and skincare services for residents of ${location.name}. Book your appointment at Ella's Beautique Bolton today.`} />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />
        
        <LocationHeader area={location} />

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
              
              {/* Left Column: Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Skincare Services for {location.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {location.description} At Ella's Beautique, we understand that finding a trusted skincare specialist near {location.name} is important. 
                  We offer a sanctuary where you can escape the daily routine and focus on your skin health.
                </p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-pink-100 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-pink-600">Local Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {location.amenities.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Link to="/services" className="flex items-center text-[#1a1a1a] font-semibold hover:text-pink-600 transition-colors group">
                    View Our Treatment Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-500">
                    *We are located in Bolton, serving {location.name} and surrounding areas.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Map & Contact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="h-80 w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <LocationMap areaName={location.name} coordinates={location.coordinates} />
                </div>

                <div className="bg-[#1a1a1a] text-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
                  <p className="text-gray-300 mb-8">
                    Ready to transform your skin? Our expert team is ready to welcome clients from {location.name}.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-pink-600 rounded-lg">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Call Us</p>
                        <p className="font-semibold">+44 1234 567890</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="block w-full py-4 bg-white text-[#1a1a1a] text-center font-bold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default LocationDetail;