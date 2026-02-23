import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'What should I expect during my first visit?',
          a: 'Your first visit begins with a comprehensive skin consultation where we assess your skin type, concerns, and goals. We\'ll discuss recommended treatments, answer all your questions, and create a personalized treatment plan tailored to your needs.'
        },
        {
          q: 'How long do treatments typically take?',
          a: 'Treatment times vary: HydraFacial takes approximately 30-60 minutes, Chemical Peels 30-45 minutes, Microneedling 60-90 minutes, and Anti-Aging Facials 60-75 minutes. We always allow extra time for consultation and aftercare advice.'
        },
        {
          q: 'Are your treatments suitable for all skin types?',
          a: 'Yes! Our treatments are customized for all skin types and tones. During your consultation, we assess your specific skin needs and adjust the treatment accordingly to ensure safety and optimal results.'
        }
      ]
    },
    {
      category: 'Treatment Preparation',
      questions: [
        {
          q: 'How should I prepare for my facial treatment?',
          a: 'Arrive with clean skin (no makeup). Avoid sun exposure, tanning beds, and harsh exfoliants for 3-7 days before your appointment. Stay well-hydrated and inform us of any medications or skin products you\'re currently using.'
        },
        {
          q: 'Can I wear makeup after my treatment?',
          a: 'For HydraFacial and Anti-Aging Facials, you can apply makeup immediately. For Chemical Peels and Microneedling, we recommend waiting 24-48 hours to allow your skin to heal properly.'
        },
        {
          q: 'Should I avoid any activities before my appointment?',
          a: 'Avoid waxing, laser treatments, or other aggressive skin procedures for at least one week before your appointment. Also avoid retinol products 3-5 days prior to chemical peels or microneedling.'
        }
      ]
    },
    {
      category: 'Aftercare & Results',
      questions: [
        {
          q: 'When will I see results?',
          a: 'HydraFacial and Anti-Aging Facials show immediate results. Chemical Peels reveal brighter skin after peeling completes (3-7 days). Microneedling results become visible after 4-6 weeks as collagen production increases. Multiple sessions enhance results.'
        },
        {
          q: 'What aftercare is required?',
          a: 'All treatments require SPF 30+ sunscreen daily, gentle skincare products, and adequate hydration. Specific treatments have additional requirements - we provide detailed aftercare instructions tailored to your treatment.'
        },
        {
          q: 'How often should I get treatments?',
          a: 'HydraFacial: monthly; Chemical Peels: every 4-6 weeks; Microneedling: every 4-6 weeks for 3-6 sessions; Anti-Aging Facials: every 4-6 weeks. We\'ll create a personalized treatment schedule during your consultation.'
        }
      ]
    },
    {
      category: 'Booking & Policies',
      questions: [
        {
          q: 'How do I book an appointment?',
          a: 'Book online through our contact form, call us at +44 1234 567890, or email hello@ellsbeautique.co.uk. We typically respond within 24 hours to confirm your appointment.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'We require 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a 50% fee. No-shows are charged the full treatment cost.'
        },
        {
          q: 'Do you offer gift vouchers?',
          a: 'Yes! Gift vouchers are available for specific treatments or monetary amounts. They make perfect gifts and are valid for 12 months from purchase date. Contact us to purchase.'
        }
      ]
    },
    {
      category: 'Skincare Tips',
      questions: [
        {
          q: 'What daily skincare routine do you recommend?',
          a: 'Morning: gentle cleanser, vitamin C serum, moisturizer, SPF 30+. Evening: cleanser, retinol or treatment serum, moisturizer. Always remove makeup before bed and stay hydrated!'
        },
        {
          q: 'How important is SPF?',
          a: 'Extremely important! SPF protects against premature aging, hyperpigmentation, and skin damage. Apply SPF 30+ daily, even on cloudy days, and reapply every 2 hours when outdoors.'
        },
        {
          q: 'Can I combine different treatments?',
          a: 'Yes, but timing matters. Some treatments work well together while others need spacing. During your consultation, we\'ll recommend the best treatment combination and schedule for your goals.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQs | Frequently Asked Questions | Ell's Beautique Bolton</title>
        <meta name="description" content="Find answers to common questions about facial treatments, preparation, aftercare, booking, and more at Ell's Beautique Bolton." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#1a1a1a]">
        <Header />

        <section className="relative py-20 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Frequently Asked Questions
              </h1>
              <p className="text-2xl text-gray-300">
                Everything you need to know about our treatments
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4 max-w-4xl">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#f7e6ea' }}>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="bg-[#f1f1f1] rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className={`w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors ${isOpen ? 'bg-[#f7e6ea]' : ''}`}
                        >
                          <span className="text-lg font-semibold pr-4 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {faq.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={24} className="flex-shrink-0 text-[#1a1a1a]" />
                          ) : (
                            <ChevronDown size={24} className="flex-shrink-0 text-[#1a1a1a]" />
                          )}
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-6 bg-[#f1f1f1]"
                          >
                            <p className="text-gray-800 leading-relaxed pt-4">{faq.a}</p>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#f1f1f1]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find the answer you're looking for? Get in touch with our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+441234567890"
                  className="px-8 py-4 rounded-full font-semibold text-[#1a1a1a] transition-all hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Call Us
                </a>
                <a
                  href="mailto:hello@ellsbeautique.co.uk"
                  className="px-8 py-4 rounded-full font-semibold bg-[#f1f1f1] text-[#1a1a1a] transition-all hover:bg-gray-200 hover:shadow-lg"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FAQPage;