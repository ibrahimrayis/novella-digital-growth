
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhySection from '@/components/WhySection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import CareerSection from '@/components/CareerSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // Check if element is in viewport
        if (position.top < window.innerHeight * 0.9) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update document title
  useEffect(() => {
    document.title = "Novella - Web & System Development";
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <CareerSection />
      <Footer />
    </div>
  );
};

export default Index;
