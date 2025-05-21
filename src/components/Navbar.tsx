
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                className="h-10 w-auto"
                src="/lovable-uploads/aaffe065-597f-4ae8-81c6-a12b2213d745.png"
                alt="Novella"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.home')}
              </a>
              <a href="#services" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.services')}
              </a>
              <a href="#pricing" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.pricing')}
              </a>
              <a href="#about" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.contact')}
              </a>
              <a href="#careers" className="text-novella-dark hover:text-novella-red px-3 py-2 rounded-md text-sm font-medium">
                {t('nav.careers')}
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded ${language === 'en' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('tr')}
              className={`px-2 py-1 rounded ${language === 'tr' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
            >
              TR
            </button>
            <button 
              onClick={() => setLanguage('ar')}
              className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
            >
              AR
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-novella-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.home')}
            </a>
            <a href="#services" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.services')}
            </a>
            <a href="#pricing" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.pricing')}
            </a>
            <a href="#about" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.contact')}
            </a>
            <a href="#careers" className="text-novella-dark hover:text-novella-red block px-3 py-2 rounded-md text-base font-medium">
              {t('nav.careers')}
            </a>
            <div className="flex space-x-2 mt-3">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('tr')}
                className={`px-2 py-1 rounded ${language === 'tr' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLanguage('ar')}
                className={`px-2 py-1 rounded ${language === 'ar' ? 'bg-novella-red text-white' : 'bg-gray-200'}`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
