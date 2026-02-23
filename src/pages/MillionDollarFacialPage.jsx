
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, Star, ShieldCheck, Clock, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

function MillionDollarFacialPage() {
  const breadcrumbItems = [
    { label: 'Services', path: '/services' },
    { label: 'Million Dollar Facial Treatments', path: '/million-dollar-facials' }
  ];

  const millionDollarTreatments = [
    {
      title: 'Million Dollar Dermaplaning',
      price: '£35',
      description: 'A manual exfoliation technique that removes dead skin cells and vellus hair (peach fuzz), leaving your skin smoother and brighter. Includes a lymphatic drainage massage and luxury mask.',
      features: ['Instant radiance', 'Better product absorption', 'Flawless makeup application']
    },
    {
      title: 'Million Dollar Skin Peels',
      price: '£40',
      description: 'Professional chemical peels designed to target specific skin concerns. Choose from three specialized options:',
      subItems: [
        { name: 'Eliminate', detail: 'Calms inflammation and tackles acne/congestion.' },
        { name: 'Radiate', detail: 'Targets uneven skin tone and pigmentation for a glow.' },
        { name: 'Rejuvenate', detail: 'Anti-aging peel to reduce fine lines and wrinkles.' }
      ]
    },
    {
      title: 'Million Dollar Microneedling',
      price: '£45',
      description: 'Collagen induction therapy using sterile needles to create micro-channels in the skin. Stimulates natural healing to firm skin and reduce scarring.',
      features: ['Boosts collagen', 'Reduces acne scars', 'Improves skin texture']
    },
    {
      title: 'The Million Dollar Facial',
      price: '£60',
      description: 'The ultimate 10-step protocol combining Dermaplaning, Microneedling, and Lymphatic Drainage. The complete package for total skin rejuvenation.',
      features: ['10-step protocol', 'Maximum results', 'Complete transformation'],
      highlight: true
    },
    {
      title: 'Million Dollar Body',
      price: '£35 per area',
      description: 'Targeting stretch marks, scarring, and skin laxity on the body. Uses microneedling techniques adapted for body concerns. Discounts available on courses booked.',
      features: ['Treats stretch marks', 'Skin tightening', 'Scar reduction']
    },
    {
      title: 'Million Dollar Hair Rejuvenation',
      price: '£35 per area',
      description: 'Designed to stimulate hair follicles and promote growth. Ideal for thinning hair or those wanting to improve scalp health. Discounts available on courses booked.',
      features: ['Stimulates growth', 'Scalp health', 'Nutrient infusion']
    },
    {
      title: 'Million Dollar Bacial',
      price: '£35',
      description: 'A luxurious facial for your back. Deep cleanses, exfoliates, and treats congestion in this hard-to-reach area.',
      features: ['Deep cleansing', 'Relieves tension', 'Smooths skin']
    }
  ];

  const otherTreatments = [
    {
      title: 'Hydra Dermabrasion',
      price: '£60',
      description: 'Deep cleaning using water and oxygen to exfoliate and hydrate the skin simultaneously. Gentle yet effective.'
    },
    {
      title: 'Anti-Aging Radio Frequency',
      price: '£55',
      description: 'Non-surgical skin tightening using RF energy to heat the dermis and stimulate collagen production.'
    },
    {
      title: 'Express Hydra Dermabrasion',
      price: '£40',
      description: 'A quick 30-minute pick-me-up version of our hydra dermabrasion for those on the go.'
    },
    {
      title: 'Brazilian Wood Therapy',
      price: '£65',
      description: 'Holistic massage technique using wooden tools to break down fat and cellulite while contouring the body.'
    }
  ];

  const benefits = [
    { icon: <ShieldCheck className="w-8 h-8 text-[#f7e6ea]" />, title: 'Clinically Proven', desc: 'Science-backed protocols delivering real results.' },
    { icon: <Clock className="w-8 h-8 text-[#f7e6ea]" />, title: 'Minimal Downtime', desc: 'Advanced techniques designed for busy lifestyles.' },
    { icon: <Star className="w-8 h-8 text-[#f7e6ea]" />, title: 'Premium Products', desc: 'Using only official Million Dollar System products.' },
    { icon: <Zap className="w-8 h-8 text-[#f7e6ea]" />, title: 'Immediate Glow', desc: 'Visible improvements often seen after just one session.' }
  ];

  return (
    <>
      <Helmet>
        <title>Million Dollar Facial Treatments at Ella's Beautique | Bolton</title>
        <meta name="description" content="Experience the luxurious Million Dollar Facial system at Ella's Beautique in Bolton. Dermaplaning, Microneedling, Skin Peels, and the full 10-step protocol for radiant skin." />
        <meta name="keywords" content="Million Dollar Facial, Dermaplaning Bolton, Microneedling Bolton, Skin Peels, Ella's Beautique" />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a] text-white selection:bg-[#f7e6ea] selection:text-[#1a1a1a]">
        <Header />
        
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] hover:scale-100"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1542848285-0d50a56a0dfc')" 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#1a1a1a]"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 mb-6 border border-[#f7e6ea] rounded-full text-[#f7e6ea] text-sm tracking-widest uppercase">
                Premium Skincare
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7e6ea] to-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Million Dollar Facial<br />Treatments
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
                The world's fastest growing facial system. A luxurious, medical-grade skincare regime designed to exfoliate, hydrate, and rejuvenate.
              </p>
              <Link
                to="/contact-booking"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#f7e6ea] text-[#1a1a1a] rounded-full font-bold hover:shadow-[0_0_20px_rgba(247,230,234,0.4)] transition-all transform hover:-translate-y-1"
              >
                <span>Book Your Glow</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#1a1a1a] border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#f7e6ea]/30 transition-colors"
                >
                  <div className="mb-4 p-3 bg-white/5 rounded-full">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Million Dollar Treatments Grid */}
        <section className="py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#f7e6ea]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                The Million Dollar Collection
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Advanced protocols tailored to deliver the ultimate in skin health and radiance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {millionDollarTreatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    treatment.highlight 
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-[#f7e6ea] shadow-[0_0_30px_rgba(247,230,234,0.1)]' 
                      : 'bg-[#222] border border-gray-800 hover:border-[#f7e6ea]/50'
                  }`}
                >
                  {treatment.highlight && (
                    <div className="absolute top-0 right-0 bg-[#f7e6ea] text-[#1a1a1a] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#f7e6ea] transition-colors pr-4">
                      {treatment.title}
                    </h3>
                  </div>
                  
                  <div className="text-2xl font-bold text-[#f7e6ea] mb-4">{treatment.price}</div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>

                  {treatment.subItems && (
                    <div className="mb-6 space-y-3 bg-black/20 p-4 rounded-lg">
                      {treatment.subItems.map((item, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[#f7e6ea] font-semibold text-sm">• {item.name}</span>
                          <span className="text-gray-500 text-xs">{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {treatment.features && (
                    <ul className="space-y-2 mb-8">
                      {treatment.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <CheckCircle size={14} className="text-[#f7e6ea] mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link 
                    to="/contact-booking"
                    className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                      treatment.highlight
                        ? 'bg-[#f7e6ea] text-[#1a1a1a] hover:bg-white'
                        : 'bg-transparent border border-gray-600 text-white hover:border-[#f7e6ea] hover:text-[#f7e6ea]'
                    }`}
                  >
                    Book Now
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Treatments Section */}
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Other Specialized Treatments
              </h2>
              <div className="w-20 h-1 bg-[#f7e6ea] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {otherTreatments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#1f1f1f] p-6 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-[#252525] transition-colors"
                >
                  <div className="mb-4 sm:mb-0 sm:pr-6">
                    <h3 className="text-xl font-bold text-[#f7e6ea] mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="flex flex-col items-end min-w-max">
                    <span className="text-xl font-bold text-white mb-2">{item.price}</span>
                    <Link to="/contact-booking" className="text-xs text-[#f7e6ea] hover:underline flex items-center">
                      Book <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-[#1a1a1a]"></div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#f7e6ea]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7e6ea]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Sparkles className="w-12 h-12 text-[#f7e6ea] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ready to Experience the Million Dollar Glow?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Join thousands of satisfied clients who have transformed their skin with our science-led, results-driven protocols.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link
                  to="/contact-booking"
                  className="px-10 py-4 bg-[#f7e6ea] text-[#1a1a1a] rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
                >
                  Book Your Treatment
                </Link>
                <Link
                  to="/services"
                  className="px-10 py-4 bg-transparent border-2 border-[#f7e6ea] text-[#f7e6ea] rounded-full font-bold text-lg hover:bg-[#f7e6ea]/10 transition-all"
                >
                  View All Services
                </Link>
              </div>

              <div className="flex justify-center space-x-8 text-gray-400 text-sm font-medium uppercase tracking-wider">
                <span className="flex items-center"><CheckCircle size={16} className="mr-2 text-[#f7e6ea]" /> Certified Pro</span>
                <span className="flex items-center"><CheckCircle size={16} className="mr-2 text-[#f7e6ea]" /> Fully Insured</span>
                <span className="flex items-center"><CheckCircle size={16} className="mr-2 text-[#f7e6ea]" /> 5 Star Rated</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MillionDollarFacialPage;
