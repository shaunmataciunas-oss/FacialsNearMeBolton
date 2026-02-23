
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f1f1f1] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* NAP Details */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ella's Beautique
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[#f7e6ea]" />
                <span className="text-gray-300">34 Hazelwood Road, Bolton, BL1 6ER</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-[#f7e6ea]" />
                <a href="tel:07912611390" className="text-gray-300 hover:text-[#f7e6ea] transition-colors">
                  07912611390
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-[#f7e6ea]" />
                <a href="mailto:info@facialsnearmebolton.co.uk" className="text-gray-300 hover:text-[#f7e6ea] transition-colors">
                  info@facialsnearmebolton.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-[#f7e6ea] transition-colors">
                Services
              </Link>
              <Link to="/locations" className="block text-gray-300 hover:text-[#f7e6ea] transition-colors">
                Locations
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#f7e6ea] transition-colors">
                About Us
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-[#f7e6ea] transition-colors">
                Gallery
              </Link>
              <Link to="/booking" className="block text-gray-300 hover:text-[#f7e6ea] transition-colors">
                Contact & Book
              </Link>
            </div>
          </div>

          {/* Social Media & Trust Signals */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/SPMUbyElla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#f7e6ea] hover:text-[#1a1a1a] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/ellasbeautique/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#f7e6ea] hover:text-[#1a1a1a] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://share.google/diYDsVUbFMjbIKXkB"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#f7e6ea] hover:text-[#1a1a1a] transition-all duration-300 hover:scale-110"
                aria-label="Google Reviews"
              >
                <Globe size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <span className="block mb-1">✓ Fully Insured</span>
              <span className="block mb-1">✓ Certified Practitioners</span>
              <span className="block">✓ Award-Winning Service</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-1">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Ella's Beautique. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Site created by <a href="https://www.getfoundnow.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-[#f7e6ea] transition-colors underline underline-offset-2">GetFoundNow</a>
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#f7e6ea] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-[#f7e6ea] transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
