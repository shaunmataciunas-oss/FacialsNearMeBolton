import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function MicroneedlingPage() {
  const benefits = [
    'Stimulates natural collagen production',
    'Reduces appearance of scars and stretch marks',
    'Minimizes fine lines and wrinkles',
    'Improves skin texture and firmness',
    'Reduces pore size',
    'Enhances product absorption',
    'Safe for all skin types'
  ];

  const aftercare = [
    'Avoid direct sunlight for 48 hours',
    'Apply SPF 30+ sunscreen daily',
    'Use only gentle, non-irritating products',
    'Avoid makeup for 24 hours',
    'Do not exercise for 24-48 hours',
    'Keep skin clean and moisturized',
    'Avoid swimming pools and saunas for one week',
    'No other facial treatments for 2-4 weeks'
  ];

  return (
    <>
      <Helmet>
        <title>Microneedling Therapy Bolton | Collagen Induction Treatment | Ell's Beautique</title>
        <meta name="description" content="Professional microneedling therapy in Bolton. Stimulate collagen, reduce scars, and improve skin texture with advanced microneedling at Ell's Beautique." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Microneedling Therapy",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ell's Beautique"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bolton"
            },
            "description": "Advanced microneedling therapy to stimulate collagen and improve skin texture"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="relative py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center space-x-2 text-gray-700 hover:text-pink-600 mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Microneedling Therapy
              </h1>
              <p className="text-2xl text-gray-700 mb-8">
                Advanced Collagen Induction for Smoother, Firmer Skin
              </p>
              <div className="text-4xl font-bold mb-8" style={{ color: '#1a1a1a' }}>
                From £120
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  What is Microneedling?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Microneedling, also known as collagen induction therapy, is a minimally invasive treatment that uses fine needles to create controlled micro-injuries in the skin. These micro-injuries trigger the body's natural wound healing process, stimulating the production of collagen and elastin.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our advanced microneedling device ensures precise, consistent treatment depth for optimal results. The procedure is safe, effective, and suitable for all skin types and tones. It can be used on the face, neck, décolletage, and other areas of concern.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experience the transformative power of microneedling at Ell's Beautique, where our certified practitioners deliver exceptional results with the latest technology and techniques.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-pink-100"
              >
                <img
                  src="https://images.unsplash.com/photo-1688497763565-7b879a3a1d14"
                  alt="Microneedling treatment before and after results"
                  className="w-full h-full object-cover"
                />
              </motion.div>
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
                Treatment Benefits
              </h2>
              <p className="text-xl text-gray-700">
                Discover the remarkable benefits of microneedling therapy
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
                  className="flex items-start space-x-3 bg-[#f1f1f1] rounded-xl p-6 border border-pink-100 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-[#1a1a1a]" />
                  <span className="text-gray-800">{benefit}</span>
                </motion.div>
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
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Aftercare Instructions
              </h2>
              <div className="bg-[#f1f1f1] rounded-2xl p-8 border border-pink-100 shadow-sm">
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

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Certified Microneedling Specialists
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Our practitioners are fully certified in advanced microneedling techniques and use state-of-the-art equipment. Each treatment follows strict sterile procedures and is tailored to your individual skin concerns and goals.
              </p>
              <div className="bg-[#f1f1f1] rounded-xl p-6 border border-pink-100 shadow-sm">
                <p className="text-gray-800">
                  ✓ Advanced Microneedling Certification<br />
                  ✓ Medical-Grade Equipment<br />
                  ✓ Strict Sterile Protocols<br />
                  ✓ Personalized Treatment Plans
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#f1f1f1] rounded-3xl p-12 text-center shadow-2xl max-w-3xl mx-auto border border-pink-100"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Transform Your Skin Today
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book your microneedling consultation and discover the difference
              </p>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-full text-lg font-bold text-[#f7e6ea] transition-all hover:shadow-2xl hover:scale-110"
                style={{ backgroundColor: '#1a1a1a', fontFamily: 'Montserrat, sans-serif' }}
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

export default MicroneedlingPage;