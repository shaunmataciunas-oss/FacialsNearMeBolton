import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Heart, Star, Users, GraduationCap, Clock, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AboutPage() {
  const achievements = [
    {
      icon: <Clock className="w-12 h-12 text-[#1a1a1a]" />,
      title: '20+ Years Experience',
      description: 'Over two decades of dedicated expertise in the beauty industry.'
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-[#1a1a1a]" />,
      title: 'Expertly Trained',
      description: 'Apprenticeship served at the prestigious Lilian Maund Academy.'
    },
    {
      icon: <Star className="w-12 h-12 text-[#1a1a1a]" />,
      title: 'Results Driven',
      description: 'Specializing in visible skin transformations and health.'
    },
    {
      icon: <Heart className="w-12 h-12 text-[#1a1a1a]" />,
      title: 'Personalized Care',
      description: 'Bespoke treatments tailored to your unique skin concerns.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Ella Baines | Ella's Beautique | Expert Facial Specialist Bolton</title>
        <meta name="description" content="Discover the expertise of Ella Baines at Ella's Beautique Bolton. With 20+ years experience and training from Lilian Maund Academy, Ella provides luxury facials in Bolton." />
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
                About Ella Baines
              </h1>
              <p className="text-2xl text-gray-700 font-medium italic">
                Bolton's Premium Luxury Facial Specialist
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/68df2006d950fec31a8f3257e8ff10d6.jpg"
                    alt="Ella Baines performing professional facial treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Accent element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-pink-100 z-10 hidden md:flex">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-[#1a1a1a]">20+</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-pink-500">Years Exp</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  A Legacy of Excellence in Skincare
                </h2>
                <div className="bg-[#f1f1f1] rounded-2xl p-8 space-y-6 text-gray-800 leading-relaxed border border-pink-100 shadow-sm">
                  <p className="font-semibold text-pink-600">
                    Welcome to Ella's Beautique, your trusted destination for facials in Bolton.
                  </p>
                  <p>
                    With over 20 years of experience in the beauty industry, Ella Baines has established a reputation for excellence, professionalism, and outstanding client care. Ella began her career by serving her apprenticeship at the prestigious Lilian Maund Academy, one of the most respected beauty training institutions in the UK.
                  </p>
                  <p>
                    This solid foundation allowed Ella to develop advanced skills and a deep understanding of skin health and facial treatments. As a self-employed beauty therapist for more than two decades, Ella has dedicated her career to helping clients achieve healthy, radiant skin.
                  </p>
                  <p>
                    She specialises in a wide range of facial treatments, from luxurious anti-aging facials to deep cleansing and hydrating therapies tailored to every skin type and concern. Ella's passion is delivering visible results while providing a relaxing, rejuvenating experience.
                  </p>
                  <p>
                    Whether you are looking for a classic facial, advanced skin rejuvenation, or the latest in beauty technology, you can trust that you're in expert hands. Discover why clients across Bolton choose Ella Baines for their facials in Bolton. Book your appointment today and start your journey to beautiful, glowing skin.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise/Trust Signals */}
        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Why Choose Ella Baines?
              </h2>
              <p className="text-xl text-gray-700">
                Experience the difference of two decades of professional skin care
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f1f1f1] rounded-2xl p-8 text-center hover:scale-105 transition-all shadow-lg border border-pink-100"
                >
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialisations */}
        <section className="py-16 bg-[#f1f1f1]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ella's Specialisations
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Advanced Anti-Aging Protocols',
                  'Deep Cleansing & Extractions',
                  'Hydrating & Nourishing Therapies',
                  'Acne & Congested Skin Treatments',
                  'Skin Rejuvenation Technology',
                  'Personalised Skin Consultations'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-pink-50"
                  >
                    <CheckCircle2 className="text-pink-500 flex-shrink-0" size={20} />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;