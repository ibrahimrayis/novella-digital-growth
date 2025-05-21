
export type Language = 'en' | 'tr' | 'ar';

export type Translations = {
  [key: string]: {
    [key in Language]: string;
  };
};

export const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    tr: "Ana Sayfa",
    ar: "الرئيسية"
  },
  "nav.services": {
    en: "Services",
    tr: "Hizmetler",
    ar: "الخدمات"
  },
  "nav.pricing": {
    en: "Pricing",
    tr: "Fiyatlandırma",
    ar: "الأسعار"
  },
  "nav.about": {
    en: "About Us",
    tr: "Hakkımızda",
    ar: "من نحن"
  },
  "nav.contact": {
    en: "Contact",
    tr: "İletişim",
    ar: "اتصل بنا"
  },
  "nav.careers": {
    en: "Careers",
    tr: "Kariyer",
    ar: "وظائف"
  },

  // Hero Section
  "hero.title": {
    en: "We highlight your brand in the digital world",
    tr: "Markanızı dijital dünyada öne çıkarıyoruz",
    ar: "نبرز علامتك التجارية في العالم الرقمي"
  },
  "hero.subtitle": {
    en: "With modern web technologies and creative design approach",
    tr: "Modern web teknolojileri ve yaratıcı tasarım yaklaşımı ile",
    ar: "مع تقنيات الويب الحديثة ونهج التصميم الإبداعي"
  },
  "hero.cta": {
    en: "Contact Us",
    tr: "Bize Ulaşın",
    ar: "اتصل بنا"
  },

  // Why Section
  "why.title": {
    en: "Why Do I Need It?",
    tr: "Neden İhtiyacım Var?",
    ar: "لماذا أحتاج إليه؟"
  },
  "why.subtitle": {
    en: "To be successful in the digital world, you need professional solutions",
    tr: "Dijital dünyada başarılı olmak için profesyonel çözümlere ihtiyacınız var",
    ar: "لتحقيق النجاح في العالم الرقمي ، تحتاج إلى حلول احترافية"
  },
  "why.reason1.title": {
    en: "Stand Out from Your Competition",
    tr: "Rakiplerinizden Öne Çıkın",
    ar: "تميز عن منافسيك"
  },
  "why.reason1.desc": {
    en: "A strong digital presence gives you a leg up on your competitors. A modern and impressive website reflects the professionalism of your brand.",
    tr: "Güçlü bir dijital varlık, rakiplerinize karşı size avantaj sağlar. Modern ve etkileyici bir web sitesi, markanızın profesyonelliğini yansıtır.",
    ar: "يمنحك التواجد الرقمي القوي ميزة على منافسيك. يعكس الموقع الإلكتروني الحديث والمثير للإعجاب احترافية علامتك التجارية."
  },
  "why.reason2.title": {
    en: "Increase Your Sales",
    tr: "Satışlarınızı Artırın",
    ar: "زيادة مبيعاتك"
  },
  "why.reason2.desc": {
    en: "Reach your potential customers and increase your sales with SEO optimization and effective digital marketing strategies.",
    tr: "SEO optimizasyonu ve etkili dijital pazarlama stratejileri ile potansiyel müşterilerinize ulaşın ve satışlarınızı artırın.",
    ar: "الوصول إلى العملاء المحتملين وزيادة المبيعات مع تحسين محركات البحث واستراتيجيات التسويق الرقمي الفعالة."
  },
  "why.reason3.title": {
    en: "Gain Customer Trust",
    tr: "Müşteri Güveni Kazanın",
    ar: "اكسب ثقة العملاء"
  },
  "why.reason3.desc": {
    en: "A professional digital presence helps you gain your customers' trust and build brand loyalty.",
    tr: "Profesyonel bir dijital varlık, müşterilerinizin güvenini kazanmanıza ve marka sadakatini oluşturmanıza yardımcı olur.",
    ar: "يساعدك التواجد الرقمي الاحترافي على كسب ثقة عملائك وبناء الولاء للعلامة التجارية."
  },

  // Service Sections
  "services.ads.title": {
    en: "Advertisement Management",
    tr: "Reklam Yönetimi",
    ar: "إدارة الإعلانات"
  },
  "services.ads.subtitle": {
    en: "Manage your digital ads with our professional team and reach your target audience effectively",
    tr: "Dijital reklamlarınızı profesyonel ekibimizle yönetin ve hedef kitlenize etkili bir şekilde ulaşın",
    ar: "إدارة إعلاناتك الرقمية مع فريقنا المحترف والوصول إلى جمهورك المستهدف بشكل فعال"
  },
  "services.seo.title": {
    en: "SEO Services",
    tr: "SEO Hizmetleri",
    ar: "خدمات تحسين محركات البحث"
  },
  "services.seo.subtitle": {
    en: "Rank higher in search engines, increase your organic traffic and reach your potential customers",
    tr: "Arama motorlarında daha üst sıralarda yer alın, organik trafiğinizi artırın ve potansiyel müşterilerinize ulaşın",
    ar: "احصل على مرتبة أعلى في محركات البحث ، وزيادة حركة المرور العضوية والوصول إلى العملاء المحتملين"
  },

  // Pricing Cards
  "price.starter": {
    en: "Starter",
    tr: "Başlangıç",
    ar: "المبتدئ"
  },
  "price.professional": {
    en: "Professional",
    tr: "Profesyonel",
    ar: "احترافي"
  },
  "price.custom": {
    en: "Custom",
    tr: "Özel",
    ar: "مخصص"
  },
  "price.monthly": {
    en: "Monthly",
    tr: "Aylık",
    ar: "شهريًا"
  },
  "price.oneTime": {
    en: "One-time payment",
    tr: "Tek seferlik ödeme",
    ar: "دفعة لمرة واحدة"
  },
  "price.contact": {
    en: "Contact Us",
    tr: "Bize Ulaşın",
    ar: "اتصل بنا"
  },

  // About Section
  "about.title": {
    en: "About Us",
    tr: "Hakkımızda",
    ar: "من نحن"
  },
  "about.experience": {
    en: "Years of Experience",
    tr: "Yıllık Tecrübe",
    ar: "سنوات الخبرة"
  },
  "about.projects": {
    en: "Completed Projects",
    tr: "Tamamlanan Projeler",
    ar: "المشاريع المكتملة"
  },
  "about.clients": {
    en: "Happy Clients",
    tr: "Mutlu Müşteriler",
    ar: "عملاء سعداء"
  },
  "about.satisfaction": {
    en: "Customer Satisfaction",
    tr: "Müşteri Memnuniyeti",
    ar: "رضا العملاء"
  },

  // Contact Section
  "contact.title": {
    en: "Contact Us",
    tr: "İletişim",
    ar: "اتصل بنا"
  },
  "contact.subtitle": {
    en: "Do you have a project idea or other question? Contact us and we will get back to you within 12 hours.",
    tr: "Bir proje fikriniz veya başka bir sorunuz mu var? Bizimle iletişime geçin, 12 saat içinde size geri döneceğiz.",
    ar: "هل لديك فكرة مشروع أو سؤال آخر؟ اتصل بنا وسنرد عليك في غضون 12 ساعة."
  },
  "contact.name": {
    en: "Your name",
    tr: "Adınız",
    ar: "اسمك"
  },
  "contact.email": {
    en: "Your Email Address",
    tr: "E-posta Adresiniz",
    ar: "عنوان بريدك الإلكتروني"
  },
  "contact.message": {
    en: "Your message",
    tr: "Mesajınız",
    ar: "رسالتك"
  },
  "contact.send": {
    en: "Send",
    tr: "Gönder",
    ar: "إرسال"
  },
  "contact.info": {
    en: "Contact Information",
    tr: "İletişim Bilgileri",
    ar: "معلومات الاتصال"
  },

  // Career Section
  "career.title": {
    en: "Career Opportunities",
    tr: "Kariyer Fırsatları",
    ar: "فرص وظيفية"
  },
  "career.subtitle": {
    en: "You are in the right place for a creative and fun team",
    tr: "Yaratıcı ve eğlenceli bir ekip için doğru yerdesiniz",
    ar: "أنت في المكان المناسب لفريق مبدع وممتع"
  },
  "career.apply": {
    en: "Apply",
    tr: "Başvur",
    ar: "تقدم"
  },
};
