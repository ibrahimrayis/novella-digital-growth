
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CareerSection: React.FC = () => {
  const { t, language } = useLanguage();

  const positions = [
    {
      title: { en: "Frontend Developer", tr: "Frontend Geliştirici", ar: "مطور الواجهة الأمامية" },
      type: { en: "Full Time / Remote", tr: "Tam Zamanlı / Uzaktan", ar: "دوام كامل / عن بعد" },
    },
    {
      title: { en: "UI/UX Designer", tr: "UI/UX Tasarımcı", ar: "مصمم UI/UX" },
      type: { en: "Full Time / Remote", tr: "Tam Zamanlı / Uzaktan", ar: "دوام كامل / عن بعد" },
    },
    {
      title: { en: "Digital Marketing Specialist", tr: "Dijital Pazarlama Uzmanı", ar: "أخصائي التسويق الرقمي" },
      type: { en: "Full Time / Remote", tr: "Tam Zamanlı / Uzaktan", ar: "دوام كامل / عن بعد" },
    }
  ];

  const benefits = [
    {
      title: { en: "Flexible Working", tr: "Esnek Çalışma", ar: "العمل المرن" },
      description: { en: "Remote and hybrid working options", tr: "Uzaktan ve hibrit çalışma seçenekleri", ar: "خيارات العمل عن بعد والهجين" },
      icon: (
        <svg className="h-8 w-8 text-novella-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
    },
    {
      title: { en: "Continuous Improvement", tr: "Sürekli Gelişim", ar: "التحسين المستمر" },
      description: { en: "Education budget and conference attendance", tr: "Eğitim bütçesi ve konferans katılımı", ar: "ميزانية التعليم وحضور المؤتمرات" },
      icon: (
        <svg className="h-8 w-8 text-novella-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
    },
    {
      title: { en: "Health Insurance", tr: "Sağlık Sigortası", ar: "التأمين الصحي" },
      description: { en: "Private health insurance and side benefits", tr: "Özel sağlık sigortası ve yan haklar", ar: "التأمين الصحي الخاص والمزايا الجانبية" },
      icon: (
        <svg className="h-8 w-8 text-novella-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
    },
    {
      title: { en: "Modern Technologies", tr: "Modern Teknolojiler", ar: "التقنيات الحديثة" },
      description: { en: "Opportunity to work with the latest technologies", tr: "En son teknolojilerle çalışma fırsatı", ar: "فرصة للعمل مع أحدث التقنيات" },
      icon: (
        <svg className="h-8 w-8 text-novella-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
    },
  ];
  
  return (
    <div id="careers" className="py-24 bg-white">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-2">{t('career.title')}</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          {t('career.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {positions.map((position, index) => (
            <Card key={index} className="animate-on-scroll" style={{animationDelay: `${index * 0.15}s`}}>
              <CardHeader>
                <CardTitle>{position.title[language]}</CardTitle>
                <CardDescription>{position.type[language]}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="bg-novella-red hover:bg-novella-darkred text-white">
                  {t('career.apply')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-10">Why Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-gray-50 rounded-lg animate-on-scroll"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="mr-4 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{benefit.title[language]}</h4>
                  <p className="text-gray-600">{benefit.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
