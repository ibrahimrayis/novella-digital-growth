
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern" 
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24H0v-1.41zM0 3.07l2.83-2.83 1.41 1.41L1.41 4.48H0V3.07zm15.66 18.1l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41zm12.02 12.02l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41zm0-17.73l2.83-2.83 1.41 1.41-2.83 2.83-1.41-1.41zM20 26.66l2.83-2.83 1.41 1.41L21.41 28 20 26.59zm0-17.73l2.83-2.83 1.41 1.41L21.41 10.3 20 8.89z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundPosition: "center",
          backgroundRepeat: "repeat"
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-96 h-96 bg-novella-red opacity-30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-novella-red hover:bg-novella-darkred md:py-4 md:text-lg md:px-10"
              >
                {t('hero.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
