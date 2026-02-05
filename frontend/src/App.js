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
import CaseStudySection from './components/sections/CaseStudySection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
      <StructuredData />
      <Header />

      <main role="main" aria-label="Main content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudySection />
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
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
