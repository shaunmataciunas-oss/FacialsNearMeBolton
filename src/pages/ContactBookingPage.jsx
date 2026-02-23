
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ContactBookingPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Booking Request Received!',
      description: 'Thank you for your booking request. We\'ll contact you within 24 hours to confirm your appointment.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact & Book Appointment | Ell's Beautique Bolton</title>
        <meta name="description" content="Book your facial treatment at Ell's Beautique Bolton. Contact us for appointments, enquiries, or visit our clinic at 34 Hazelwood Road, Bolton." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-[#f7e6ea]">
        <Header />

        <section className="relative py-20 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Contact & Book
              </h1>
              <p className="text-2xl text-gray-700">
                Schedule your appointment or get in touch with our team
              </p>
              <div className="mt-8 inline-block bg-white/50 backdrop-blur-sm px-6 py-4 rounded-xl border border-pink-100">
                 <p className="text-lg font-semibold text-[#1a1a1a]">Visit Our Clinic:</p>
                 <p className="text-xl text-pink-700 font-bold">34 Hazelwood Road, Bolton, BL1 6ER</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Get in Touch
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="mt-1 flex-shrink-0 text-[#1a1a1a]" />
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1a1a1a]">Address</h3>
                      <p className="text-gray-700">
                        34 Hazelwood Road<br />
                        Bolton<br />
                        BL1 6ER
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="mt-1 flex-shrink-0 text-[#1a1a1a]" />
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1a1a1a]">Phone</h3>
                      <a href="tel:07912611390" className="text-gray-700 hover:text-pink-600 transition-colors">
                        07912611390
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="mt-1 flex-shrink-0 text-[#1a1a1a]" />
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1a1a1a]">Email</h3>
                      <a href="mailto:info@facialsnearmebolton.co.uk" className="text-gray-700 hover:text-pink-600 transition-colors">
                        info@facialsnearmebolton.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock size={24} className="mt-1 flex-shrink-0 text-[#1a1a1a]" />
                    <div>
                      <h3 className="font-semibold mb-1 text-[#1a1a1a]">Opening Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f1f1f1] rounded-xl p-6 border border-pink-100">
                  <h3 className="font-bold mb-3 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Prefer to Call?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Call us directly to book your appointment or ask any questions.
                  </p>
                  <a
                    href="tel:07912611390"
                    className="inline-block px-8 py-3 rounded-full font-semibold text-[#f7e6ea] transition-all hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#1a1a1a', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#f1f1f1] rounded-2xl p-8 border border-pink-100 shadow-md">
                  <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Book an Appointment
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-white text-[#1a1a1a] border-gray-300 focus:ring-pink-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-white text-[#1a1a1a] border-gray-300 focus:ring-pink-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Phone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="07912611390"
                        className="bg-white text-[#1a1a1a] border-gray-300 focus:ring-pink-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Preferred Service *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="million-dollar">Million Dollar Facial</option>
                        <option value="hydrating-facial">Hydrating Facial</option>
                        <option value="chemical-peel">Chemical Peel Specialist</option>
                        <option value="microneedling">Microneedling Therapy</option>
                        <option value="anti-aging">Anti-Aging Facial</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Preferred Date</label>
                        <Input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="bg-white text-[#1a1a1a] border-gray-300 focus:ring-pink-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Preferred Time</label>
                        <Input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="bg-white text-[#1a1a1a] border-gray-300 focus:ring-pink-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent resize-none"
                        placeholder="Tell us about your skin concerns or any questions you have..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-[#f7e6ea] font-bold text-lg py-6 rounded-full transition-all hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: '#1a1a1a', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Submit Booking Request
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-[#f7e6ea]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-[#1a1a1a]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Visit Our Clinic
              </h2>
              <div className="bg-[#f1f1f1] rounded-2xl overflow-hidden shadow-lg border border-pink-100">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-2.4484%2C53.5631%2C-2.4084%2C53.5831&layer=mapnik&marker=53.5731,-2.4284"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Map showing Ell's Beautique location in Bolton"
                ></iframe>
              </div>
              <p className="text-center text-gray-700 mt-6">
                Conveniently located at 34 Hazelwood Road, Bolton, BL1 6ER, easily accessible from Horwich, Farnworth, and surrounding areas.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactBookingPage;
