
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function HydraFacialPage() {
  const benefits = [
    'Deep cleansing and exfoliation',
    'Removes impurities and dead skin cells',
    'Hydrates and nourishes skin',
    'Reduces fine lines and wrinkles',
    'Improves skin texture and tone',
    'Instant, visible results'
  ];

  const aftercare = [
    'Avoid direct sunlight for 24-48 hours',
    'Apply SPF 30+ sunscreen daily',
    'Stay hydrated by drinking plenty of water',
    'Avoid heavy makeup for 24 hours',
    'Use gentle, hydrating skincare products',
    'Avoid harsh exfoliants for one week'
  ];

  return (
    <>
      <Helmet>
        <title>Hydrating Facial Treatment Bolton | Ell's Beautique</title>
        <meta name="description" content="Experience the revolutionary Hydrating Facial treatment at Ell's Beautique in Bolton. Advanced hydration therapy for clearer, more radiant skin." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Hydrating Facial Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ell's Beautique"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bolton"
            },
            "description": "Advanced Hydrating Facial treatment that cleanses, extracts, and hydrates for radiant skin"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center space-x-2 text-gray-300 hover:text-[#f7e6ea] mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Hydrating Facial
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Advanced Hydration Therapy for Radiant, Glowing Skin
              </p>
              <div className="text-4xl font-bold mb-8" style={{ color: '#f7e6ea' }}>
                From £95
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Description */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  What is a Hydrating Facial?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our Hydrating Facial is a revolutionary multi-step facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection. This medical-grade treatment uses patented vortex technology to deliver instant, noticeable results with no downtime.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Perfect for all skin types, this facial addresses multiple skin concerns including fine lines, wrinkles, enlarged pores, oily or congested skin, hyperpigmentation, and more. Our expert practitioners customize each treatment to your unique skin needs.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Experience the difference with Bolton's premier Hydrating Facial specialists at Ell's Beautique.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1688497763565-7b879a3a1d14"
                  alt="Hydrating Facial treatment before and after results"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Treatment Benefits
              </h2>
              <p className="text-xl text-gray-300">
                Discover the transformative effects of a Hydrating Facial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-[#f1f1f1] rounded-xl p-6"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-[#1a1a1a]" />
                  <span className="text-gray-800">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aftercare Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Aftercare Instructions
              </h2>
              <div className="bg-[#f1f1f1] rounded-2xl p-8">
                <div className="space-y-4">
                  {aftercare.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-[#1a1a1a]" />
                      <span className="text-gray-800">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Practitioner Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Expert Practitioners
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our certified specialists have completed advanced training and possess years of experience in delivering exceptional results. Each treatment is customized to address your specific skin concerns and goals.
              </p>
              <div className="bg-[#f1f1f1] rounded-xl p-6">
                <p className="text-gray-800">
                  ✓ Fully Certified & Insured<br />
                  ✓ Advanced Facial Training<br />
                  ✓ Years of Clinical Experience<br />
                  ✓ Personalized Treatment Plans
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#f1f1f1] rounded-3xl p-12 text-center shadow-2xl max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ready for Radiant Skin?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book your Hydrating Facial treatment today and experience the difference
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-full text-lg font-bold text-[#1a1a1a] transition-all hover:shadow-2xl hover:scale-110"
                style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HydraFacialPage;
