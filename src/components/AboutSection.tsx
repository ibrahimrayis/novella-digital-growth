
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Technologies used by Novella
  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  // Stats shown in the about section
  const stats = [
    { value: "7+", label: "about.experience", icon: "⚡" },
    { value: "150+", label: "about.projects", icon: "🚀" },
    { value: "50+", label: "about.clients", icon: "😊" },
    { value: "98%", label: "about.satisfaction", icon: "🏆" },
  ];

  return (
    <div id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="section-container relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll">{t('about.title')}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll" 
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="text-4xl font-bold text-novella-red mb-1">{stat.icon} {stat.value}</div>
              <div className="text-gray-600">{t(stat.label)}</div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 animate-on-scroll">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-gray-100 rounded-full p-3 mb-2">
                <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              </div>
              <span className="text-sm text-gray-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
