import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CorporateSection from './CorporateSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import ContactModal from './ContactModal';
import { Toaster } from './ui/toaster';

const LandingPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCorporateClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection onCorporateClick={handleCorporateClick} />
        <AboutSection />
        <FeaturesSection />
        <CorporateSection onContactClick={handleCorporateClick} />
        <FAQSection />
      </main>
      <Footer />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
      
      <Toaster />
    </div>
  );
};

export default LandingPage;