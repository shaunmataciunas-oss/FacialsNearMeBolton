import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm text-gray-600 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-pink-600 flex items-center transition-colors">
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-1" />
              {index === items.length - 1 ? (
                <span className="font-semibold text-pink-600" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-pink-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;