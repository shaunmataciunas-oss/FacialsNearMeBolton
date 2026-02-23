import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AntiAgingPage() {
  const benefits = [
    'Reduces fine lines and wrinkles',
    'Improves skin elasticity and firmness',
    'Brightens and evens skin tone',
    'Reduces age spots and sun damage',
    'Deeply hydrates and nourishes',
    'Promotes collagen production',
    'Delivers immediate visible results'
  ];

  const aftercare = [
    'Apply SPF 30+ sunscreen daily',
    'Avoid direct sunlight for 24-48 hours',
    'Use gentle, hydrating skincare products',
    'Drink plenty of water to stay hydrated',
    'Avoid harsh exfoliants for one week',
    'Follow your customized home care routine',
    'Schedule follow-up treatments as recommended'
  ];

  return (
    <>
      <Helmet>
        <title>Anti-Aging Facial Bolton | Rejuvenating Face Treatments | Ell's Beautique</title>
        <meta name="description" content="Luxury anti-aging facials in Bolton. Reduce wrinkles, improve elasticity, and rejuvenate your skin with our advanced anti-aging treatments at Ell's Beautique." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Anti-Aging Facial Treatment",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ell's Beautique"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bolton"
            },
            "description": "Luxurious anti-aging facial targeting fine lines, wrinkles, and age spots for rejuvenated skin"
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
                Anti-Aging Facial
              </h1>
              <p className="text-2xl text-gray-700 mb-8">
                Luxurious Treatment for Youthful, Rejuvenated Skin
              </p>
              <div className="text-4xl font-bold mb-8" style={{ color: '#1a1a1a' }}>
                From £85
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
                  What is Our Anti-Aging Facial?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our signature anti-aging facial is a comprehensive, multi-step treatment designed to combat the visible signs of aging. Using advanced techniques and premium skincare products, this luxurious treatment targets fine lines, wrinkles, loss of elasticity, and uneven skin tone.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The treatment combines deep cleansing, gentle exfoliation, specialized serums, massage techniques, and age-defying masks to deliver immediate and long-lasting results. Each facial is customized to your unique skin type and specific aging concerns.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Indulge in this relaxing, results-driven treatment and rediscover your youthful glow at Ell's Beautique, Bolton's premier destination for anti-aging skincare.
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
                  alt="Anti-aging facial treatment before and after results"
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
                Experience the transformative effects of our anti-aging facial
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
                Expert Anti-Aging Specialists
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Our skincare specialists are expertly trained in advanced anti-aging techniques and stay current with the latest innovations in aesthetic treatments. We use only premium, clinically-proven products to ensure exceptional results.
              </p>
              <div className="bg-[#f1f1f1] rounded-xl p-6 border border-pink-100 shadow-sm">
                <p className="text-gray-800">
                  ✓ Advanced Anti-Aging Training<br />
                  ✓ Premium Skincare Products<br />
                  ✓ Years of Professional Experience<br />
                  ✓ Personalized Treatment Approach
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
                Rediscover Your Youthful Glow
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book your anti-aging facial and turn back the clock on aging skin
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

export default AntiAgingPage;