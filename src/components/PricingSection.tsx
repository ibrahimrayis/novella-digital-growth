
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const { t, language } = useLanguage();
  
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

  const websitePackages = [
    {
      title: { en: "Starter Pack", tr: "Başlangıç Paketi", ar: "حزمة المبتدئ" },
      subtitle: { en: "For Beginners", tr: "Yeni Başlayanlar İçin", ar: "للمبتدئين" },
      price: { en: "6,500 TL", tr: "6.500 TL", ar: "6,500 TL" },
      vat: { en: "+ VAT", tr: "+ KDV", ar: "+ ضريبة القيمة المضافة" },
      promo: { en: "For only 25 TL per day 🎯", tr: "Günlük sadece 25 TL 🎯", ar: "25 ليرة تركية فقط في اليوم 🎯" },
      payment: { en: "One-time payment", tr: "Tek seferlik ödeme", ar: "دفعة لمرة واحدة" },
      features: [
        { name: { en: "4-5 page corporate website", tr: "4-5 sayfalık kurumsal web sitesi", ar: "موقع ويب للشركات مكون من 4-5 صفحات" }, included: true },
        { name: { en: "Responsive (mobile friendly) design", tr: "Responsive (mobil uyumlu) tasarım", ar: "تصميم متجاوب (متوافق مع الجوال)" }, included: true },
        { name: { en: "Basic SEO compatibility", tr: "Temel SEO uyumluluğu", ar: "توافق SEO الأساسي" }, included: true },
        { name: { en: "Contact form integration", tr: "İletişim formu entegrasyonu", ar: "تكامل نموذج الاتصال" }, included: true },
        { name: { en: "Domain & Hosting (first year)", tr: "Alan Adı ve Hosting (ilk yıl)", ar: "اسم النطاق والاستضافة (السنة الأولى)" }, included: true },
        { name: { en: "SSL installation (HTTPS)", tr: "SSL kurulumu (HTTPS)", ar: "تثبيت SSL (HTTPS)" }, included: true },
        { name: { en: "Google Analytics setup", tr: "Google Analytics kurulumu", ar: "إعداد Google Analytics" }, included: true },
        { name: { en: "Fast page loading optimization", tr: "Hızlı sayfa yükleme optimizasyonu", ar: "تحسين تحميل الصفحة السريع" }, included: true },
        { name: { en: "Advanced SEO settings", tr: "Gelişmiş SEO ayarları", ar: "إعدادات SEO متقدمة" }, included: false },
        { name: { en: "Multi-language support", tr: "Çoklu dil desteği", ar: "دعم متعدد اللغات" }, included: false },
      ]
    },
    {
      title: { en: "Professional Package", tr: "Profesyonel Paket", ar: "الحزمة الاحترافية" },
      subtitle: { en: "Most Preferred", tr: "En Çok Tercih Edilen", ar: "الأكثر تفضيلاً" },
      price: { en: "12,000 TL", tr: "12.000 TL", ar: "12,000 TL" },
      vat: { en: "+ VAT", tr: "+ KDV", ar: "+ ضريبة القيمة المضافة" },
      promo: { en: "For only 46 TL per day 🚀", tr: "Günlük sadece 46 TL 🚀", ar: "46 ليرة تركية فقط في اليوم 🚀" },
      payment: { en: "One-time payment", tr: "Tek seferlik ödeme", ar: "دفعة لمرة واحدة" },
      features: [
        { name: { en: "10+ pages of custom design", tr: "10+ sayfa özel tasarım", ar: "أكثر من 10 صفحات بتصميم مخصص" }, included: true },
        { name: { en: "Responsive (mobile friendly) design", tr: "Responsive (mobil uyumlu) tasarım", ar: "تصميم متجاوب (متوافق مع الجوال)" }, included: true },
        { name: { en: "Basic SEO compatibility", tr: "Temel SEO uyumluluğu", ar: "توافق SEO الأساسي" }, included: true },
        { name: { en: "Contact form integration", tr: "İletişim formu entegrasyonu", ar: "تكامل نموذج الاتصال" }, included: true },
        { name: { en: "Domain & Hosting (first year)", tr: "Alan Adı ve Hosting (ilk yıl)", ar: "اسم النطاق والاستضافة (السنة الأولى)" }, included: true },
        { name: { en: "SSL installation (HTTPS)", tr: "SSL kurulumu (HTTPS)", ar: "تثبيت SSL (HTTPS)" }, included: true },
        { name: { en: "Google Analytics setup", tr: "Google Analytics kurulumu", ar: "إعداد Google Analytics" }, included: true },
        { name: { en: "Fast page loading optimization", tr: "Hızlı sayfa yükleme optimizasyonu", ar: "تحسين تحميل الصفحة السريع" }, included: true },
        { name: { en: "Advanced SEO settings", tr: "Gelişmiş SEO ayarları", ar: "إعدادات SEO متقدمة" }, included: true },
        { name: { en: "Multi-language support", tr: "Çoklu dil desteği", ar: "دعم متعدد اللغات" }, included: true },
      ]
    },
    {
      title: { en: "Corporate Solution", tr: "Kurumsal Çözüm", ar: "الحل المؤسسي" },
      subtitle: { en: "Institutional", tr: "Kurumsal", ar: "المؤسسي" },
      price: { en: "Special For You", tr: "Size Özel", ar: "خاص لك" },
      vat: { en: "", tr: "", ar: "" },
      promo: { en: "Let's talk about solutions specific to your needs", tr: "İhtiyaçlarınıza özel çözümler hakkında konuşalım", ar: "دعونا نتحدث عن الحلول المخصصة لاحتياجاتك" },
      payment: { en: "One-time payment", tr: "Tek seferlik ödeme", ar: "دفعة لمرة واحدة" },
      features: [
        { name: { en: "10+ pages of custom design", tr: "10+ sayfa özel tasarım", ar: "أكثر من 10 صفحات بتصميم مخصص" }, included: true },
        { name: { en: "Responsive (mobile friendly) design", tr: "Responsive (mobil uyumlu) tasarım", ar: "تصميم متجاوب (متوافق مع الجوال)" }, included: true },
        { name: { en: "Basic SEO compatibility", tr: "Temel SEO uyumluluğu", ar: "توافق SEO الأساسي" }, included: true },
        { name: { en: "Contact form integration", tr: "İletişim formu entegrasyonu", ar: "تكامل نموذج الاتصال" }, included: true },
        { name: { en: "Domain & Hosting (first year)", tr: "Alan Adı ve Hosting (ilk yıl)", ar: "اسم النطاق والاستضافة (السنة الأولى)" }, included: true },
        { name: { en: "SSL installation (HTTPS)", tr: "SSL kurulumu (HTTPS)", ar: "تثبيت SSL (HTTPS)" }, included: true },
        { name: { en: "Google Analytics setup", tr: "Google Analytics kurulumu", ar: "إعداد Google Analytics" }, included: true },
        { name: { en: "Fast page loading optimization", tr: "Hızlı sayfa yükleme optimizasyonu", ar: "تحسين تحميل الصفحة السريع" }, included: true },
        { name: { en: "Advanced SEO settings", tr: "Gelişmiş SEO ayarları", ar: "إعدادات SEO متقدمة" }, included: true },
        { name: { en: "Multi-language support", tr: "Çoklu dil desteği", ar: "دعم متعدد اللغات" }, included: true },
      ]
    }
  ];

  return (
    <div id="pricing" className="py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl font-bold text-center mb-2 animate-on-scroll">Pricing Plans</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-on-scroll">
          Choose the package that best suits your needs and start your digital journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websitePackages.map((pkg, index) => (
            <Card key={index} className={`pricing-card animate-on-scroll relative ${index === 1 ? 'border-2 border-novella-red' : ''}`} style={{animationDelay: `${index * 0.15}s`}}>
              {index === 1 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-novella-red text-white px-3 py-1 text-sm">
                    {pkg.subtitle[language]}
                  </Badge>
                </div>
              )}
              <CardHeader className={`${index === 1 ? 'bg-gradient-to-br from-novella-red to-novella-darkred text-white' : 'bg-gray-100'}`}>
                <CardTitle className={index === 1 ? 'text-white' : ''}>{pkg.title[language]}</CardTitle>
                <CardDescription className={index === 1 ? 'text-gray-100' : ''}>
                  {index !== 1 && pkg.subtitle[language]}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{pkg.price[language]}</span>
                  <span className="text-sm"> {pkg.vat[language]}</span>
                  <p className="text-sm mt-1">{pkg.promo[language]}</p>
                  <p className="text-xs mt-3 opacity-80">{pkg.payment[language]}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`flex-shrink-0 h-5 w-5 ${feature.included ? 'text-green-500' : 'text-gray-300'}`}>
                        <Check size={20} />
                      </div>
                      <span className={`ml-2 ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                        {feature.name[language]}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pt-6 pb-6">
                <Button className={`w-full ${index === 1 ? 'bg-novella-red hover:bg-novella-darkred text-white' : 'border-novella-red text-novella-red hover:bg-novella-red hover:text-white'}`}>
                  {t('price.contact')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
