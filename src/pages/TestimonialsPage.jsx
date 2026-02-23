import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Lisa Oakley',
      location: 'Bolton UK',
      text: "I have been going to Ella for 13 years for initially just my brows but now my lashes. I have shape, tint, lamination and lift - she always does a great job. She is kind, considerate and makes you feel really comfortable and she is truly a lovely thoughtful person. I can't recommend her enough she is just lovely!"
    },
    {
      name: 'Rebecca McKay',
      location: 'Bolton UK',
      text: "I have been to Ella a few times for different treatments, she is so lovely and welcoming. I recently had a lash lift & tint and a facial. My lashes looked so good after & skin was glowing. I was very happy with the results."
    },
    {
      name: 'Jayne Denton',
      location: 'Bolton UK',
      text: "Ella is such a lovely person—genuine, down to earth, and really skilled at what she does. I've had my nails and brows done a few times now, and I'm always so happy with the results. She's consistent, pays attention to detail, and her space is always welcoming and relaxed. It's the kind of service that makes you feel looked after without any fuss. Great value for money and someone I'd happily recommend to anyone looking for a beautician who's not only talented but really easy to be."
    },
    {
      name: 'Kimberley Merga',
      location: 'Bolton UK',
      text: "Ella is such a lovely person—genuine, down to earth, and really skilled at what she does. I've had my nails and brows done a few times now, and I'm always so happy with the results. She's consistent, pays attention to detail, and her space is always welcoming and relaxed. It's the kind of service that makes you feel looked after without any fuss. Great value for money and someone I'd happily recommend to anyone looking for a beautician who's not only talented but really easy to be."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials - Ella's Beautique Bolton</title>
        <meta name="description" content="Read authentic reviews from our lovely clients. Discover why Ella's Beautique is Bolton's choice for expert beauty treatments and skincare." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-[#f7e6ea] via-white to-[#f7e6ea]">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold tracking-wide mb-4">
                Trusted by Many
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1a1a1a] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Client Testimonials
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Discover the experiences of our valued clients at Ella's Beautique. Real results, genuine care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  {...testimonial}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center p-8 bg-white rounded-2xl shadow-xl border border-pink-50 hover:border-pink-200 transition-colors"
              >
                <div className="p-4 bg-pink-100 rounded-full mr-6">
                  <Users className="w-10 h-10 text-pink-600" />
                </div>
                <div>
                  <span className="block text-4xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>100+</span>
                  <span className="text-gray-600 font-medium">Happy Clients</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center p-8 bg-white rounded-2xl shadow-xl border border-pink-50 hover:border-pink-200 transition-colors"
              >
                <div className="p-4 bg-pink-100 rounded-full mr-6">
                  <Award className="w-10 h-10 text-pink-600" />
                </div>
                <div>
                  <span className="block text-4xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>13+</span>
                  <span className="text-gray-600 font-medium">Years of Excellence</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors cursor-pointer">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">Rated 5 Stars by Our Community</span>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default TestimonialsPage;