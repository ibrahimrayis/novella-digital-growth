
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Advertisement Management Plans
  const adPlans = [
    {
      title: { en: "Standard", tr: "Standart", ar: "القياسي" },
      subtitle: { en: "Google Ads Standard", tr: "Google Ads Standart", ar: "Google Ads القياسي" },
      price: { en: "5,000₺", tr: "5.000₺", ar: "5,000₺" },
      period: { en: "Monthly Management Fee", tr: "Aylık Yönetim Ücreti", ar: "رسوم الإدارة الشهرية" },
      features: [
        { en: "Google Search Network Ads", tr: "Google Arama Ağı Reklamları", ar: "إعلانات شبكة بحث Google" },
        { en: "Keyword Analysis", tr: "Anahtar Kelime Analizi", ar: "تحليل الكلمات الرئيسية" },
        { en: "Competitor Analysis", tr: "Rakip Analizi", ar: "تحليل المنافسين" },
        { en: "Ad Copy Optimization", tr: "Reklam Metni Optimizasyonu", ar: "تحسين نسخة الإعلان" },
        { en: "Cost Per Click Optimization", tr: "Tıklama Başı Maliyet Optimizasyonu", ar: "تحسين التكلفة لكل نقرة" },
        { en: "Monthly Performance Reports", tr: "Aylık Performans Raporları", ar: "تقارير الأداء الشهرية" },
      ]
    },
    {
      title: { en: "Advanced Level", tr: "Gelişmiş Seviye", ar: "المستوى المتقدم" },
      subtitle: { en: "Google Ads Advanced", tr: "Google Ads Gelişmiş", ar: "Google Ads المتقدم" },
      price: { en: "7,500₺", tr: "7.500₺", ar: "7,500₺" },
      period: { en: "Monthly Management Fee", tr: "Aylık Yönetim Ücreti", ar: "رسوم الإدارة الشهرية" },
      features: [
        { en: "All Features of the Standard Package", tr: "Standard Paketin Tüm Özellikleri", ar: "جميع ميزات الحزمة القياسية" },
        { en: "Display Ads", tr: "Görüntülü Reklamlar", ar: "إعلانات العرض" },
        { en: "YouTube Ads", tr: "YouTube Reklamları", ar: "إعلانات YouTube" },
        { en: "Remarketing Campaigns", tr: "Yeniden Pazarlama Kampanyaları", ar: "حملات إعادة التسويق" },
        { en: "Advanced Targeting", tr: "Gelişmiş Hedefleme", ar: "استهداف متقدم" },
        { en: "Weekly Performance Reports", tr: "Haftalık Performans Raporları", ar: "تقارير الأداء الأسبوعية" },
      ]
    },
    {
      title: { en: "Meta Ads", tr: "Meta Reklamları", ar: "إعلانات ميتا" },
      subtitle: { en: "Facebook & Instagram Ads", tr: "Facebook ve Instagram Reklamları", ar: "إعلانات Facebook و Instagram" },
      price: { en: "7,500₺", tr: "7.500₺", ar: "7,500₺" },
      period: { en: "Monthly Management Fee", tr: "Aylık Yönetim Ücreti", ar: "رسوم الإدارة الشهرية" },
      features: [
        { en: "Facebook & Instagram Ads", tr: "Facebook ve Instagram Reklamları", ar: "إعلانات Facebook و Instagram" },
        { en: "Instagram Story Ads", tr: "Instagram Hikaye Reklamları", ar: "إعلانات قصص Instagram" },
        { en: "Carousel Ads", tr: "Carousel Reklamlar", ar: "إعلانات دائرية" },
        { en: "Target Audience Analysis", tr: "Hedef Kitle Analizi", ar: "تحليل الجمهور المستهدف" },
        { en: "Detailed Targeting", tr: "Detaylı Hedefleme", ar: "استهداف مفصل" },
        { en: "Weekly Performance Reports", tr: "Haftalık Performans Raporları", ar: "تقارير الأداء الأسبوعية" },
      ]
    }
  ];

  // SEO Service Plans
  const seoPlans = [
    {
      title: { en: "Beginning", tr: "Başlangıç", ar: "البداية" },
      subtitle: { en: "SEO Starter Package", tr: "SEO Başlangıç Paketi", ar: "حزمة SEO للمبتدئين" },
      price: { en: "3,500₺", tr: "3.500₺", ar: "3,500₺" },
      period: { en: "Monthly Service Fee", tr: "Aylık Hizmet Bedeli", ar: "رسوم الخدمة الشهرية" },
      features: [
        { en: "Technical SEO Analysis", tr: "Teknik SEO Analizi", ar: "تحليل SEO التقني" },
        { en: "On-Site SEO Optimization", tr: "Site İçi SEO Optimizasyonu", ar: "تحسين SEO على الموقع" },
        { en: "Keyword Analysis", tr: "Anahtar Kelime Analizi", ar: "تحليل الكلمات الرئيسية" },
        { en: "Meta Tags Optimization", tr: "Meta Etiketleri Optimizasyonu", ar: "تحسين العلامات الوصفية" },
        { en: "Google Search Console Setup", tr: "Google Search Console Kurulumu", ar: "إعداد Google Search Console" },
        { en: "Monthly SEO Report", tr: "Aylık SEO Raporu", ar: "تقرير SEO الشهري" },
      ]
    },
    {
      title: { en: "Pro", tr: "Pro", ar: "برو" },
      subtitle: { en: "SEO Pro Package", tr: "SEO Pro Paketi", ar: "حزمة SEO Pro" },
      price: { en: "6,000₺", tr: "6.000₺", ar: "6,000₺" },
      period: { en: "Monthly Service Fee", tr: "Aylık Hizmet Bedeli", ar: "رسوم الخدمة الشهرية" },
      features: [
        { en: "All Features of the Starter Package", tr: "Başlangıç Paketinin Tüm Özellikleri", ar: "جميع ميزات الحزمة الأساسية" },
        { en: "Creating a Content Strategy", tr: "İçerik Stratejisi Oluşturma", ar: "إنشاء استراتيجية محتوى" },
        { en: "Competitor Analysis", tr: "Rakip Analizi", ar: "تحليل المنافسين" },
        { en: "Backlink Study", tr: "Backlink Çalışması", ar: "دراسة الروابط الخلفية" },
        { en: "Blog Content Management", tr: "Blog İçerik Yönetimi", ar: "إدارة محتوى المدونة" },
        { en: "Local SEO Optimization", tr: "Yerel SEO Optimizasyonu", ar: "تحسين SEO المحلي" },
      ]
    }
  ];
  
  const renderPricingCards = (plans: any[], language: string) => {
    return plans.map((plan, index) => (
      <Card key={index} className="pricing-card animate-on-scroll" style={{animationDelay: `${index * 0.15}s`}}>
        <CardHeader className="bg-gradient-to-br from-novella-red to-novella-darkred text-white">
          <div className="flex justify-between items-center">
            <CardTitle>{plan.title[language]}</CardTitle>
            <Badge className="bg-white text-novella-red">NO Setup Fees!</Badge>
          </div>
          <CardDescription className="text-gray-100 font-medium text-lg">
            {plan.subtitle[language]}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 text-center">
            <span className="text-4xl font-bold text-novella-dark">{plan.price[language]}</span>
            <p className="text-gray-600 text-sm">{plan.period[language]}</p>
          </div>
          <ul className="space-y-3">
            {plan.features.map((feature: any, i: number) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature[language]}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center pt-6 pb-6">
          <Button className="bg-novella-red hover:bg-novella-darkred text-white w-full">
            {t('price.contact')}
          </Button>
        </CardFooter>
      </Card>
    ));
  };

  return (
    <div id="services" ref={servicesRef} className="py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-2 animate-on-scroll">{t('services.ads.title')}</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-on-scroll">
          {t('services.ads.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderPricingCards(adPlans, useLanguage().language)}
        </div>
        
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-2 animate-on-scroll">{t('services.seo.title')}</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-on-scroll">
            {t('services.seo.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renderPricingCards(seoPlans, useLanguage().language)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-gray-300 rounded-lg p-8 bg-white shadow-sm animate-on-scroll">
            <h3 className="text-xl font-semibold mb-4">Do You Need a Professional Website?</h3>
            <p className="text-gray-600 mb-6">Highlight your brand in the digital world with modern design and powerful technologies.</p>
            <Button variant="outline" className="border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
              Check Out Our Web Design Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
