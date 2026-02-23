import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ChemicalPeelPage() {
  const benefits = [
    'Reduces fine lines and wrinkles',
    'Improves skin texture and tone',
    'Treats hyperpigmentation and sun damage',
    'Minimizes acne scars',
    'Reveals brighter, smoother skin',
    'Stimulates collagen production'
  ];

  const aftercare = [
    'Avoid direct sun exposure for at least one week',
    'Apply SPF 50+ sunscreen daily',
    'Do not pick or peel flaking skin',
    'Use gentle, non-irritating cleansers',
    'Apply prescribed moisturizers regularly',
    'Avoid strenuous exercise for 24-48 hours',
    'No other facial treatments for 2 weeks'
  ];

  return (
    <>
      <Helmet>
        <title>Chemical Peel Specialist Bolton | Professional Skin Peels | Ell's Beautique</title>
        <meta name="description" content="Expert chemical peel treatments in Bolton. Reduce wrinkles, improve skin tone, and reveal brighter skin with our professional-grade peels at Ell's Beautique." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Chemical Peel Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ell's Beautique"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bolton"
            },
            "description": "Professional chemical peel treatments to reveal brighter, smoother, more youthful skin"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />

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
                Chemical Peel Specialist
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Professional-Grade Peels for Brighter, Smoother Skin
              </p>
              <div className="text-4xl font-bold mb-8" style={{ color: '#f7e6ea' }}>
                From £80
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  What is a Chemical Peel?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Chemical peels are advanced skincare treatments that use carefully selected acids to exfoliate the outer layers of skin, revealing fresher, younger-looking skin beneath. Our professional-grade peels are customized to your skin type and concerns.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  At Ell's Beautique, we offer various peel strengths - from gentle superficial peels for first-time clients to deeper peels for more significant skin concerns. Each treatment is performed by our certified specialists who will assess your skin and recommend the most appropriate peel for optimal results.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're targeting acne scars, sun damage, fine lines, or uneven skin tone, our chemical peel treatments deliver remarkable, visible improvements.
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
                  alt="Chemical peel treatment before and after results"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

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
                Transform your skin with professional chemical peels
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

        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Certified Peel Specialists
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team consists of highly trained and certified chemical peel specialists with extensive experience in treating diverse skin types and conditions. We use only medical-grade products and follow strict safety protocols.
              </p>
              <div className="bg-[#f1f1f1] rounded-xl p-6">
                <p className="text-gray-800">
                  ✓ Advanced Chemical Peel Certification<br />
                  ✓ Fully Insured Practitioners<br />
                  ✓ Medical-Grade Products<br />
                  ✓ Customized Treatment Plans
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#f1f1f1] rounded-3xl p-12 text-center shadow-2xl max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ready to Reveal Your Best Skin?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book your chemical peel consultation today
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

export default ChemicalPeelPage;