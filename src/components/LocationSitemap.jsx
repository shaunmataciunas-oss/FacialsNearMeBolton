import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { locationsData } from '@/data/locationsData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Map, ArrowRight } from 'lucide-react';

const LocationSitemap = () => {
  const locations = Object.entries(locationsData).map(([slug, data]) => ({
    slug,
    name: data.name
  })).sort((a, b) => a.name.localeCompare(b.name));

  const groupedLocations = locations.reduce((acc, loc) => {
    const letter = loc.name.charAt(0).toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(loc);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Areas We Cover | Location Sitemap | Ella's Beautique</title>
        <meta name="description" content="Complete list of all areas served by Ella's Beautique in Bolton. Find your nearest location for luxury facials and skincare." />
      </Helmet>

      <div className="min-h-screen bg-[#f9f9f9]">
        <Header />
        
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4 text-center">Areas We Cover</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Ella's Beautique provides premium facial treatments across the entire Bolton region. 
              Browse our full list of service locations below.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
              <Map className="text-pink-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Location Directory</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.keys(groupedLocations).sort().map(letter => (
                <div key={letter} className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 flex items-center justify-center bg-pink-100 text-pink-700 font-bold rounded-lg text-sm">
                      {letter}
                    </span>
                    <div className="h-px bg-pink-100 flex-1"></div>
                  </div>
                  <ul className="space-y-3">
                    {groupedLocations[letter].map(loc => (
                      <li key={loc.slug}>
                        <Link 
                          to={`/locations/${loc.slug}`}
                          className="flex items-center justify-between group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-600 group-hover:text-pink-600 group-hover:font-medium transition-colors">
                            {loc.name}
                          </span>
                          <ArrowRight size={14} className="text-gray-300 group-hover:text-pink-400 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default LocationSitemap;