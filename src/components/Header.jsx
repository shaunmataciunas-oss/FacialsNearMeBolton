
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Facial Prices', path: '/facial-prices-bolton' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/booking' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] shadow-md border-b border-gray-800">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center group mr-4">
             <Logo dark={true} className="h-14 w-auto md:h-16 transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation - Hidden on smaller screens, visible on XL */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#f7e6ea] ${
                  isActive(link.path) ? 'text-[#f7e6ea] font-bold' : 'text-white'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden xl:flex items-center space-x-3 ml-auto">
             {/* WhatsApp Button - Compact on Desktop */}
             <a
               href="https://wa.me/447912611390"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-white text-xs font-semibold transition-all hover:shadow-lg hover:scale-105 hover:bg-[#1db954]"
               style={{ backgroundColor: '#25D366', fontFamily: 'Montserrat, sans-serif' }}
             >
               <MessageCircle size={14} />
               <span>Message Us</span>
             </a>

             {/* Book Now Button */}
            <Link
              to="/booking"
              className="px-5 py-2 rounded-full text-sm font-semibold text-[#1a1a1a] transition-all hover:shadow-lg hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Right Side Actions (WhatsApp + Menu) */}
          <div className="flex xl:hidden items-center ml-auto gap-3">
            {/* Mobile Visible WhatsApp Button */}
            <a
              href="https://wa.me/447912611390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full text-white transition-all hover:bg-[#1db954]"
              style={{ backgroundColor: '#25D366' }}
              aria-label="Message on WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

            {/* Mobile Menu Button - Visible until XL */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden mt-4 pb-4 border-t border-gray-800 bg-[#1a1a1a] overflow-hidden"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${
                      isActive(link.path) ? 'bg-gray-800 text-[#f7e6ea]' : 'text-white hover:bg-gray-800'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <hr className="border-gray-800 my-2" />
                
                {/* Mobile Contact Actions - Inside Menu */}
                <div className="flex flex-col space-y-3 px-4 pb-4">
                  <a
                    href="https://wa.me/447912611390"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-white font-semibold transition-all hover:bg-[#1db954]"
                    style={{ backgroundColor: '#25D366', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <MessageCircle size={18} />
                    <span>Message Us on WhatsApp</span>
                  </a>

                  <Link
                    to="/booking"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-sm font-semibold text-[#1a1a1a] transition-all hover:shadow-lg"
                    style={{ backgroundColor: '#f7e6ea', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
