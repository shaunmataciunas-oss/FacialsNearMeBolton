
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';

// Core Pages
import HomePage from '@/pages/HomePage';
import HydraFacialPage from '@/pages/HydraFacialPage';
import ChemicalPeelPage from '@/pages/ChemicalPeelPage';
import MicroneedlingPage from '@/pages/MicroneedlingPage';
import AntiAgingPage from '@/pages/AntiAgingPage';
import MillionDollarFacialPage from '@/pages/MillionDollarFacialPage';
import ServicePages from '@/pages/ServicePages';
import AboutPage from '@/pages/AboutPage';
import GalleryPage from '@/pages/GalleryPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import FAQPage from '@/pages/FAQPage';
import BlogPage from '@/pages/BlogPage';
import BlogPost7 from '@/pages/BlogPost7';
import ContactBookingPage from '@/pages/ContactBookingPage';
import FacialPricesPage from '@/pages/FacialPricesPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsConditionsPage from '@/pages/TermsConditionsPage';

// Location Hub & Sitemap
import LocationsHub from '@/pages/LocationsHub';
import LocationSitemap from '@/components/LocationSitemap';

// Individual Location Pages
import BoltonTownCentrePage from '@/pages/BoltonTownCentrePage';
import HorwichPage from '@/pages/HorwichPage';
import FarnworthPage from '@/pages/FarnworthPage';
import WesthoughtonPage from '@/pages/WesthoughtonPage';
import LittleLeverPage from '@/pages/LittleLeverPage';
import BreightmetPage from '@/pages/BreightmetPage';
import CromptonPage from '@/pages/CromptonPage';
import DeanePage from '@/pages/DeanePage';
import HalliwellPage from '@/pages/HalliwellPage';
import HeatonPage from '@/pages/HeatonPage';
import KearsleyPage from '@/pages/KearsleyPage';
import TongeMoorPage from '@/pages/TongeMoorPage';
import TurtonPage from '@/pages/TurtonPage';
import AstleyBridgePage from '@/pages/AstleyBridgePage';
import BlackrodPage from '@/pages/BlackrodPage';
import BradshawPage from '@/pages/BradshawPage';
import EagleyPage from '@/pages/EagleyPage';
import EdgworthPage from '@/pages/EdgworthPage';
import GreatLeverPage from '@/pages/GreatLeverPage';
import HarwoodPage from '@/pages/HarwoodPage';
import HeapeyPage from '@/pages/HeapeyPage';
import LostockPage from '@/pages/LostockPage';
import PrestwichPage from '@/pages/PrestwichPage';
import RumworthPage from '@/pages/RumworthPage';
import SharplesPage from '@/pages/SharplesPage';
import SmithillsPage from '@/pages/SmithillsPage';
import TongPage from '@/pages/TongPage';
import WalkdenPage from '@/pages/WalkdenPage';
import WhitefieldPage from '@/pages/WhitefieldPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePages />} />
        <Route path="/million-dollar-facials" element={<MillionDollarFacialPage />} />
        <Route path="/services/hydrafacial" element={<HydraFacialPage />} />
        <Route path="/services/chemical-peel" element={<ChemicalPeelPage />} />
        <Route path="/services/microneedling" element={<MicroneedlingPage />} />
        <Route path="/services/anti-aging" element={<AntiAgingPage />} />
        <Route path="/facial-prices-bolton" element={<FacialPricesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/peptides-skin-regeneration" element={<BlogPost7 />} />
        <Route path="/contact" element={<ContactBookingPage />} />
        <Route path="/booking" element={<ContactBookingPage />} />
        <Route path="/contact-booking" element={<ContactBookingPage />} />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        
        {/* Locations System */}
        <Route path="/locations" element={<LocationsHub />} />
        <Route path="/locations-sitemap" element={<LocationSitemap />} />
        
        <Route path="/locations/bolton-town-centre" element={<BoltonTownCentrePage />} />
        <Route path="/locations/horwich" element={<HorwichPage />} />
        <Route path="/locations/farnworth" element={<FarnworthPage />} />
        <Route path="/locations/westhoughton" element={<WesthoughtonPage />} />
        <Route path="/locations/little-lever" element={<LittleLeverPage />} />
        <Route path="/locations/breightmet" element={<BreightmetPage />} />
        <Route path="/locations/crompton" element={<CromptonPage />} />
        <Route path="/locations/deane" element={<DeanePage />} />
        <Route path="/locations/halliwell" element={<HalliwellPage />} />
        <Route path="/locations/heaton" element={<HeatonPage />} />
        <Route path="/locations/kearsley" element={<KearsleyPage />} />
        <Route path="/locations/tonge-moor" element={<TongeMoorPage />} />
        <Route path="/locations/turton" element={<TurtonPage />} />
        <Route path="/locations/astley-bridge" element={<AstleyBridgePage />} />
        <Route path="/locations/blackrod" element={<BlackrodPage />} />
        <Route path="/locations/bradshaw" element={<BradshawPage />} />
        <Route path="/locations/eagley" element={<EagleyPage />} />
        <Route path="/locations/edgworth" element={<EdgworthPage />} />
        <Route path="/locations/great-lever" element={<GreatLeverPage />} />
        <Route path="/locations/harwood" element={<HarwoodPage />} />
        <Route path="/locations/heapey" element={<HeapeyPage />} />
        <Route path="/locations/lostock" element={<LostockPage />} />
        <Route path="/locations/prestwich" element={<PrestwichPage />} />
        <Route path="/locations/rumworth" element={<RumworthPage />} />
        <Route path="/locations/sharples" element={<SharplesPage />} />
        <Route path="/locations/smithills" element={<SmithillsPage />} />
        <Route path="/locations/tong" element={<TongPage />} />
        <Route path="/locations/walkden" element={<WalkdenPage />} />
        <Route path="/locations/whitefield" element={<WhitefieldPage />} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
