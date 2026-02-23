import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/c89c45409ec281dd182a13edb6d6d9ee.jpg',
      caption: 'Professional Facial Treatment',
      alt: 'Client receiving a professional facial treatment at Ell\'s Beautique'
    },
    {
      id: 2,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/cff2e41b99b882595163357efde45f51.jpg',
      caption: 'Skincare Application',
      alt: 'Expert aesthetician applying luxury skincare products'
    },
    {
      id: 3,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/64cb7bf28c6369d105a1b4377399a218.jpg',
      caption: 'Luxury Facial Mask Treatment',
      alt: 'Application of a hydrating facial mask treatment'
    },
    {
      id: 4,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/ea3995542f1cc1d95f25b742f7379630.jpg',
      caption: 'Expert Skincare Treatment',
      alt: 'Close up of professional skincare treatment in progress'
    },
    {
      id: 5,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/a4e71354a14a62303cf16c41daa3e19f.jpg',
      caption: 'Precision Brush Application',
      alt: 'Professional facial treatment with brush application of skincare product'
    },
    {
      id: 6,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/5d88321f7766893b7bd5803023918120.jpg',
      caption: 'Relaxing Mask Therapy',
      alt: 'Relaxing facial treatment with white mask and towel wrap'
    },
    {
      id: 7,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/f9a74380383e65a28a983d81145a0872.jpg',
      caption: 'Facial Massage',
      alt: 'Professional skincare treatment with hands-on facial massage'
    },
    {
      id: 8,
      image: 'https://horizons-cdn.hostinger.com/c21cadfd-efaf-46c2-b903-22793f29b03d/a543d97246e5b933aacf1c045b9ed888.jpg',
      caption: 'Advanced Treatment',
      alt: 'Client receiving advanced facial treatment with professional equipment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Ell's Beautique Bolton | Treatment Results</title>
        <meta name="description" content="View our gallery of professional facial treatments and skincare results at Ell's Beautique Bolton. See the luxury experience we provide." />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="relative py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Gallery
              </h1>
              <p className="text-2xl text-gray-700 font-light">
                Experience the art of skincare
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 pb-24 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {galleryImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  layoutId={`card-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ZoomIn size={24} className="text-[#1a1a1a]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white border-t border-pink-50 relative z-10">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.caption}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>

              <motion.div
                layoutId={`card-${selectedImage.id}`}
                className="relative max-w-5xl w-full max-h-[85vh] flex flex-col bg-transparent rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex-grow flex items-center justify-center overflow-hidden rounded-t-lg">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                  />
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-b-lg text-center"
                >
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {selectedImage.caption}
                  </h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wide">
                    Ella's Beautique Gallery
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default GalleryPage;