import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp, Star, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left py-4 px-6 flex justify-between items-center transition-colors duration-300 ${
          isOpen ? 'bg-[#F8E6EA]' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <span className="font-semibold text-[#222222] text-lg pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white text-gray-700 leading-relaxed border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingCard = ({ treatment }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col h-full border border-gray-100"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-[#222222] font-montserrat">{treatment.name}</h3>
      <span className="text-2xl font-bold text-pink-600">£{treatment.price}</span>
    </div>
    <p className="text-gray-600 mb-6 flex-grow">{treatment.description}</p>
    <div className="pt-4 border-t border-gray-100">
      <Link
        to="/contact-booking"
        className="inline-flex items-center text-sm font-bold text-[#222222] hover:text-pink-600 transition-colors"
      >
        Book This Treatment <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  </motion.div>
);

function FacialPricesPage() {
  const treatments = {
    millionDollar: [
      { name: "Million Dollar Facial", price: 125, description: "Our signature 10-step treatment combining dermaplaning, microneedling, and lymphatic drainage for the ultimate glow." },
      { name: "Mini Million Dollar Facial", price: 60, description: "A perfect introduction to the Million Dollar system, focusing on deep exfoliation and hydration." },
      { name: "Million Dollar Glow", price: 70, description: "Targeting hyperpigmentation and dull skin with powerful antioxidants and Vitamin C." },
      { name: "Million Dollar Hydrate", price: 70, description: "Deeply nourishing treatment for dry, dehydrated skin using hyaluronic acid and hydration boosters." },
    ],
    advanced: [
      { name: "Million Dollar Dermaplaning", price: 45, description: "Professional exfoliation removing dead skin cells and vellus hair for a smooth, radiant complexion." },
      { name: "Million Dollar Microneedling", price: 90, description: "Collagen induction therapy to reduce scarring, fine lines, and improve skin texture." },
      { name: "Million Dollar Chemical Peel", price: 80, description: "Advanced resurfacing peels to treat aging, acne, or pigmentation concerns." },
      { name: "Million Dollar Hair Rejuvenation", price: 100, description: "Stimulates hair follicles and improves scalp health to promote hair growth." },
      { name: "Million Dollar Body", price: 150, description: "Targeted body treatment to reduce stretch marks, scarring, and improve skin firmness." },
      { name: "Million Dollar Hand Rejuvenation", price: 60, description: "Anti-aging treatment for hands to reduce sun spots and improve texture." },
    ],
    other: [
      { name: "Luxury Deep Cleanse", price: 55, description: "Thorough double cleanse with steam and extraction to purify congested pores." },
      { name: "Express Facial", price: 35, description: "A quick 30-minute pick-me-up for busy schedules to refresh and revive skin." },
      { name: "Anti-Aging Collagen Boost", price: 75, description: "Focuses on firming and lifting using advanced peptide serums and massage techniques." },
      { name: "Acne Clarifying Facial", price: 65, description: "Targeted treatment with salicylic acid to combat breakouts and inflammation." },
      { name: "Brightening Vitamin C Facial", price: 70, description: "Illuminating treatment to even skin tone and restore natural radiance." },
      { name: "Sensitive Skin Soother", price: 60, description: "Calming therapy using gentle products to reduce redness and irritation." },
    ]
  };

  const allTreatments = [...treatments.millionDollar, ...treatments.advanced, ...treatments.other];

  const faqs = [
    {
      question: "How much does a Million Dollar Facial cost in Bolton?",
      answer: "Our signature Million Dollar Facial in Bolton is priced at £125. This luxurious 10-step treatment combines dermaplaning, microneedling, and lymphatic drainage for ultimate skin rejuvenation."
    },
    {
      question: "What is included in the Full Million Dollar Facial?",
      answer: "The Full Million Dollar Facial includes a double cleanse, tone, dermaplaning, microneedling, lymphatic drainage massage, hyaluronic acid mask, and bespoke serum application."
    },
    {
      question: "Are discounts available for courses?",
      answer: "Yes! We offer discounted rates when you book a course of 3 or 6 treatments. Please contact us directly to discuss a bespoke package tailored to your skin goals."
    },
    {
      question: "How do I book a facial at Ella's Beautique?",
      answer: "You can easily book your appointment by clicking the 'Book Now' button on this page, or by contacting us via phone or email. We require a deposit to secure your booking."
    }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "name": "Ella's Beautique",
        "image": "https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "34 Hazelwood Road",
          "addressLocality": "Bolton",
          "postalCode": "BL1 6ER",
          "addressCountry": "UK"
        },
        "telephone": "+441234567890",
        "priceRange": "£35-£150",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Facial Treatments",
          "itemListElement": allTreatments.map((t, i) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": t.name,
              "description": t.description
            },
            "price": t.price,
            "priceCurrency": "GBP"
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Facial Treatment Prices in Bolton | Ella's Beautique</title>
        <meta name="description" content="Discover Ella's Beautique's facial treatment prices in Bolton, Lancashire. Explore Million Dollar Facials, advanced treatments, and more. Book your appointment today." />
        <link rel="canonical" href="https://facialsnearmebolton.co.uk/facial-prices-bolton" />
        <meta property="og:title" content="Facial Treatment Prices in Bolton | Ella's Beautique" />
        <meta property="og:description" content="Discover Ella's Beautique's facial treatment prices in Bolton. Million Dollar Facials, Microneedling, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://facialsnearmebolton.co.uk/facial-prices-bolton" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white font-sans">
        <Header />

        {/* Hero Section */}
        <section className="relative py-24 bg-[#222222] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/b6777102befd9ad89767e36d1afef631.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 font-montserrat"
            >
              Facial Treatment Prices in Bolton
              <br />
              <span className="text-[#F8E6EA]">Ella's Beautique</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Transparent pricing for world-class skincare treatments.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/contact-booking"
                className="inline-block px-10 py-4 bg-[#F8E6EA] text-[#222222] font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg text-lg"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Million Dollar Facials */}
        <section className="py-16 bg-[#F8E6EA]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 font-montserrat">Million Dollar Facials</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The world's first and only treatment of its kind. A luxurious facial that works from the outside in.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatments.millionDollar.map((item, idx) => (
                <PricingCard key={idx} treatment={item} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/contact-booking"
                className="inline-flex items-center px-8 py-3 bg-[#222222] text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book Million Dollar Facial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced Treatments */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 font-montserrat">Advanced Million Dollar Treatments</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Targeted protocols designed to address specific skin concerns with clinical precision.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.advanced.map((item, idx) => (
                <PricingCard key={idx} treatment={item} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/contact-booking"
                className="inline-flex items-center px-8 py-3 bg-[#F8E6EA] text-[#222222] font-bold rounded-full hover:bg-pink-100 transition-colors shadow-lg"
              >
                Book Advanced Treatment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Other Facials */}
        <section className="py-16 bg-[#F8E6EA]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-4 font-montserrat">Other Facial Treatments</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Essential skincare treatments for maintenance, relaxation, and specific skin types.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.other.map((item, idx) => (
                <PricingCard key={idx} treatment={item} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/contact-booking"
                className="inline-flex items-center px-8 py-3 bg-[#222222] text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book Facial Treatment <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-10 text-center font-montserrat">Frequently Asked Questions</h2>
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Locations Links Section */}
        <section className="py-16 bg-[#222222] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 font-montserrat">Areas We Serve</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/facials-horwich"
                className="px-6 py-3 border border-[#F8E6EA] text-[#F8E6EA] rounded-lg hover:bg-[#F8E6EA] hover:text-[#222222] transition-colors"
              >
                Facials in Horwich
              </Link>
              <Link
                to="/facials-farnworth"
                className="px-6 py-3 border border-[#F8E6EA] text-[#F8E6EA] rounded-lg hover:bg-[#F8E6EA] hover:text-[#222222] transition-colors"
              >
                Facials in Farnworth
              </Link>
              <Link
                to="/locations"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#222222] transition-colors"
              >
                View All Locations
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FacialPricesPage;