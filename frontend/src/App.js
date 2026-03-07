import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Toaster } from './components/ui/toaster';
import { LanguageProvider } from './context/LanguageContext';
import StructuredData from './components/seo/StructuredData';

// New Component Flow
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

// SEO Pages
import SmallBusinessWebsites from './pages/services/SmallBusinessWebsites';
import RestaurantWebsites from './pages/services/RestaurantWebsites';
import HairSalonWebsites from './pages/services/HairSalonWebsites';
import WebsiteRedesign from './pages/services/WebsiteRedesign';
import NextjsDeveloper from './pages/services/NextjsDeveloper';

import WarsawDeveloper from './pages/locations/WarsawDeveloper';
import MilanDeveloper from './pages/locations/MilanDeveloper';
import ParisDeveloper from './pages/locations/ParisDeveloper';

// Blog
import BlogIndex from './pages/blog/BlogIndex';
import SmallBusinessWebsiteCost from './pages/blog/articles/SmallBusinessWebsiteCost';
import SmallBusinessMistakes from './pages/blog/articles/SmallBusinessMistakes';
import WhyRestaurantsNeedWebsites from './pages/blog/articles/WhyRestaurantsNeedWebsites';
import NextjsVsWordpress from './pages/blog/articles/NextjsVsWordpress';
import WhenToRedesignWebsite from './pages/blog/articles/WhenToRedesignWebsite';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <StructuredData />
      <Header />

      <main role="main" aria-label="Main content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* Services Routes */}
            <Route path="/services/small-business" element={<SmallBusinessWebsites />} />
            <Route path="/services/restaurant" element={<RestaurantWebsites />} />
            <Route path="/services/hair-salon" element={<HairSalonWebsites />} />
            <Route path="/services/redesign" element={<WebsiteRedesign />} />
            <Route path="/services/nextjs-developer" element={<NextjsDeveloper />} />

            {/* Locations Routes */}
            <Route path="/locations/warsaw" element={<WarsawDeveloper />} />
            <Route path="/locations/milan" element={<MilanDeveloper />} />
            <Route path="/locations/paris" element={<ParisDeveloper />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/small-business-website-cost-2026" element={<SmallBusinessWebsiteCost />} />
            <Route path="/blog/small-business-website-mistakes" element={<SmallBusinessMistakes />} />
            <Route path="/blog/why-restaurants-need-websites" element={<WhyRestaurantsNeedWebsites />} />
            <Route path="/blog/nextjs-vs-wordpress" element={<NextjsVsWordpress />} />
            <Route path="/blog/when-to-redesign-website" element={<WhenToRedesignWebsite />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
