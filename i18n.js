/* ── i18n — single-page language switcher ─────────────── */
var LANGS = ['en','ru','tr'];
var currentLang = localStorage.getItem('lang') || 'en';

var T = {
  en: {
    nav_amenities: 'Amenities',
    nav_presentation: 'Presentation',
    nav_contact: 'Contact',
    nav_cta: 'REQUEST A CALL',
    hero_eyebrow: 'Residential Community in Konyaaltı',
    hero_btn: 'Explore',
    amenities_title: 'Private Community at the Foot<br>of the Mountains in Konyaaltı',
    amenities_sub: 'Everything you need for comfortable everyday living — all within the residence',
    card1_title: 'Private Space',
    card1_desc: 'Landscaped spaces to relax and spend time outdoors',
    card2_title: 'Large Pool',
    card2_desc: 'A 20-meter pool for both swimming and relaxation by the water',
    card3_title: 'Covered Parking',
    card3_desc: 'Your car stays protected, cool, and always within reach',
    card4_title: 'Fitness Area',
    card4_desc: 'A fully equipped gym, ready whenever it fits your day',
    fp_line1_desktop: 'Surrounded by <strong>mountains</strong>',
    fp_line1_mobile: 'Framed by <strong>mountains</strong>',
    fp_line2: 'Steps from the <strong>sea</strong>',
    fp_line3: 'Hidden in the <strong>city</strong>',
    fp_sub: 'At SmartAge Residence, you are five minutes from the sea, with the Taurus mountains as your backdrop and the city whenever you need it.',
    fp_btn: 'Get Project Presentation',
    pres_title: '<span class="pres-line"><strong>Get</strong> the Full</span><span class="pres-line">Project <strong>Presentation</strong></span>',
    pres_sub: 'Includes current prices, layout options, and a projected price growth timeline — along with photos and key details of the residence',
    pres_form_hint: 'Fill out the short form below<br>and we\'ll send you the full<br>presentation and details',
    pres_btn: 'Get Presentation',
    pres_thanks_title: 'THANK YOU!',
    pres_thanks_text: 'We\'ll send you the full presentation and contact you shortly to go over the details',
    res_title_1: 'A NEW APPROACH TO URBAN LIVING,',
    res_title_2: 'SHAPED BY SPACE AND EVERYDAY COMFORT',
    res_sub: 'Created for comfortable living, with carefully considered layouts, premium finishes,<br class="desktop-only"> and fully equipped kitchens and bathrooms.',
    res_cap1: 'Compact Apartments',
    res_cap2: 'Family Apartments',
    res_cap3: 'Duplex Residences',
    res_btn: 'View Prices',
    dev_eyebrow: 'The Developer',
    dev_text1: 'Kirman Insaat has been operating since the early 2000s, delivering residential and large-scale projects across Antalya.',
    dev_text2: 'With more than 20 completed projects, the company follows a consistent approach to design, construction quality, and modern technologies.',
    dev_stat1: 'Years of Experience',
    dev_stat2: 'Completed Projects',
    dev_projects: 'Projects',
    dev_more: 'And more...',
    mtn_title: 'Get a Consultation with a Real Estate Expert',
    mtn_sub: 'Leave your details using the form below and we\'ll contact you to answer your questions and walk you through the residence, layouts, and current pricing.',
    mtn_btn: 'Get Consultation',
    mtn_thanks_title: 'THANK YOU!',
    mtn_thanks_text: 'We\'ll contact you shortly to answer your questions and guide you through the project, layouts, and pricing.',
    pricing_title: 'Get Full Pricing and Layout Options',
    pricing_sub: 'Fill out the short form and we\'ll contact you shortly with full details',
    pricing_btn: 'View Prices',
    pricing_thanks_title: 'Thank you!',
    pricing_thanks_text: 'We\'ll contact you shortly and send you<br>the full pricing and details.',
    modal_title: 'Private Viewing',
    modal_desc: 'Leave your number — our manager<br>will contact you within 24 hours.',
    modal_btn: 'Send Request',
    modal_privacy: 'By submitting you agree to our privacy policy.',
    modal_thanks_title: 'Thank you',
    modal_thanks_text: 'We will call you back within 24 hours.',
    consent_text: 'I have read the <a href="privacy.html" target="_blank" class="consent-link">Privacy Policy</a> and give my explicit consent',
    footer_privacy: 'Privacy Policy'
  },

  ru: {
    nav_amenities: 'Инфраструктура',
    nav_presentation: 'Презентация',
    nav_contact: 'Контакты',
    nav_cta: 'ЗАКАЗАТЬ ЗВОНОК',
    hero_eyebrow: 'Современная резиденция в Коньяалты',
    hero_btn: 'Подробнее',
    amenities_title: 'Приватное пространство для жизни<br>у подножия гор в Коньяалты',
    amenities_sub: 'Всё необходимое для комфортной повседневной жизни — внутри резиденции',
    card1_title: 'Приватное пространство',
    card1_desc: 'Благоустроенная территория для отдыха и времени на свежем воздухе',
    card2_title: 'Большой бассейн',
    card2_desc: 'Пространство для плавания и расслабления у воды',
    card3_title: 'Крытая парковка',
    card3_desc: 'Ваш автомобиль всегда защищён и находится под рукой',
    card4_title: 'Фитнес-зал',
    card4_desc: 'Всё необходимое для тренировок в удобное для вас время',
    fp_line1_desktop: 'Между <strong>горами</strong> и <strong>морем.</strong>',
    fp_line1_mobile: 'Между <strong>горами</strong> и <strong>морем.</strong>',
    fp_line2: 'Там, где <strong>город</strong>',
    fp_line3: 'остаётся <strong>рядом.</strong>',
    fp_sub: 'SmartAge Residence — это 5 минут до моря, горный пейзаж за окном и вся жизнь большого города в удобной доступности.',
    fp_btn: 'Получить презентацию проекта',
    pres_title: '<span class="pres-line"><strong>Получите</strong> полную</span><span class="pres-line">презентацию <strong>проекта</strong></span>',
    pres_sub: 'В презентации вы получите актуальные цены, варианты планировок и прогноз роста стоимости, а также фото и ключевую информацию о проекте.',
    pres_form_hint: 'Заполните простую форму ниже,<br>и мы отправим вам полную<br>презентацию и все детали проекта.',
    pres_btn: 'Получить презентацию',
    pres_thanks_title: 'СПАСИБО!',
    pres_thanks_text: 'В ближайшее время отправим вам презентацию и свяжемся с вами для уточнения деталей.',
    res_title_1: 'ФОРМАТ ЖИЗНИ, В КОТОРОМ КАЖДАЯ',
    res_title_2: 'ДЕТАЛЬ ПРОДУМАНА ДЛЯ ВАШЕГО КОМФОРТА',
    res_sub: 'Это отражается в удобных планировках, премиальной отделке<br class="desktop-only"> и полностью оборудованных кухнях и ванных комнатах.',
    res_cap1: 'Компактные квартиры',
    res_cap2: 'Просторные квартиры',
    res_cap3: 'Дуплексы',
    res_btn: 'Узнать цены',
    dev_eyebrow: 'Девелопер',
    dev_text1: 'Kirman İnşaat работает с начала 2000-х годов, реализуя жилые комплексы и крупные отельные проекты по всей Анталье.',
    dev_text2: 'За это время компания реализовала более 20 проектов, стабильно придерживаясь профессионального подхода к архитектуре, качеству строительства и современным технологиям.',
    dev_stat1: 'Лет опыта',
    dev_stat2: 'Реализованных проектов',
    dev_projects: 'Реализованные проекты',
    dev_more: 'И другие проекты',
    mtn_title: 'Получите консультацию от эксперта по недвижимости',
    mtn_sub: 'Оставьте контакты, и мы свяжемся с вами, чтобы ответить на ваши вопросы и подробно рассказать о проекте, планировках и стоимости.',
    mtn_btn: 'Получить консультацию',
    mtn_thanks_title: 'СПАСИБО!',
    mtn_thanks_text: 'Мы свяжемся с вами в ближайшее время, ответим на ваши вопросы и подробно расскажем о проекте, планировках и стоимости.',
    pricing_title: 'Узнайте цены и варианты планировок',
    pricing_sub: 'Заполните короткую форму, и мы свяжемся с вами в ближайшее время',
    pricing_btn: 'Узнать цены',
    pricing_thanks_title: 'Спасибо!',
    pricing_thanks_text: 'Мы свяжемся с вами в ближайшее время<br>и отправим цены и все детали.',
    modal_title: 'Личный просмотр',
    modal_desc: 'Оставьте номер — наш менеджер<br>свяжется с вами в течение 24 часов.',
    modal_btn: 'Отправить заявку',
    modal_privacy: 'Отправляя форму, вы соглашаетесь с политикой конфиденциальности.',
    modal_thanks_title: 'Спасибо',
    modal_thanks_text: 'Мы перезвоним вам в течение 24 часов.',
    consent_text: 'Я ознакомился с <a href="privacy.html" target="_blank" class="consent-link">Политикой обработки персональных данных</a> и даю согласие на обработку',
    footer_privacy: 'Политика конфиденциальности'
  },

  tr: {
    nav_amenities: 'Olanaklar',
    nav_presentation: 'Sunum',
    nav_contact: 'İletişim',
    nav_cta: 'SİZİ ARAYALIM',
    hero_eyebrow: 'Konyaaltı Konut Projesi',
    hero_btn: 'Detayları İncele',
    amenities_title: 'Konyaaltı\'nda, dağların eteklerinde<br>özel bir yaşam alanı',
    amenities_sub: 'Konforlu günlük yaşam için gereken her şey — rezidansın içinde',
    card1_title: 'Özel Yaşam Alanı',
    card1_desc: 'Dinlenmek ve açık havada vakit geçirmek için peyzaj düzenlemeli alanlar',
    card2_title: 'Geniş Yüzme Havuzu',
    card2_desc: 'Yüzme ve su kenarında dinlenme için geniş bir alan',
    card3_title: 'Kapalı Otopark',
    card3_desc: 'Aracınız her zaman korunaklı ve elinizin altında',
    card4_title: 'Fitness Salonu',
    card4_desc: 'Gününüze uygun zamanda spor yapmanız için tüm olanaklar',
    fp_line1_desktop: '<strong>Dağlarla</strong> deniz arasında.',
    fp_line1_mobile: '<strong>Dağlarla</strong> deniz arasında.',
    fp_line2: '<strong>Şehir</strong> ise her zaman',
    fp_line3: '<strong>yakınınızda.</strong>',
    fp_sub: 'SmartAge Residence\'ta denize 5 dakika mesafede, Toros Dağları\'nın manzarasıyla ve şehir hayatına kolay erişimle yaşarsınız.',
    fp_btn: 'Proje Sunumunu Alın',
    pres_title: '<span class="pres-line">Projenin <strong>Tüm</strong></span><span class="pres-line">Detaylarını <strong>Edinin</strong></span>',
    pres_sub: 'Sunumda güncel fiyatları, farklı plan seçeneklerini ve değer artışı öngörüsünü; ayrıca projeye ait fotoğrafları ve tüm önemli detayları bulacaksınız.',
    pres_form_hint: 'Aşağıdaki kısa formu doldurun,<br>size projenin tam sunumunu<br>ve tüm detaylarını gönderelim.',
    pres_btn: 'Sunumu Alın',
    pres_thanks_title: 'TEŞEKKÜR EDERİZ!',
    pres_thanks_text: 'Size projenin tam sunumunu gönderecek ve detayları görüşmek için en kısa sürede sizinle iletişime geçeceğiz.',
    res_title_1: 'HER DETAYI KONFORUNUZ İÇİN',
    res_title_2: 'DÜŞÜNÜLMÜş BİR YAŞAM ANLAYIŞI',
    res_sub: 'Bu yaklaşım; kullanışlı plan çözümlerinde, premium malzeme kalitesinde<br class="desktop-only"> ve tam donanımlı mutfak ile banyolarda kendini gösterir.',
    res_cap1: 'Kompakt Daireler',
    res_cap2: 'Geniş Aile Daireleri',
    res_cap3: 'Dubleks Daireler',
    res_btn: 'Fiyatları Öğrenin',
    dev_eyebrow: 'Geliştirici',
    dev_text1: 'Kirman İnşaat, 2000\'li yılların başından bu yana Antalya genelinde konut projeleri ve büyük ölçekli otel projeleri geliştirmektedir.',
    dev_text2: 'Bu süre içinde şirket, 20\'den fazla projeyi hayata geçirerek mimari yaklaşım, inşaat kalitesi ve modern teknolojilerde istikrarlı bir standart benimsemiştir.',
    dev_stat1: 'Yıl Deneyim',
    dev_stat2: 'Tamamlanan Proje',
    dev_projects: 'Seçilen Projeler',
    dev_more: 'Ve daha fazlası',
    mtn_title: 'Gayrimenkul uzmanından danışmanlık alın',
    mtn_sub: 'İletişim bilgilerinizi bırakın, sizinle iletişime geçerek sorularınızı yanıtlayalım ve proje, plan seçenekleri ve fiyatlar hakkında detaylı bilgi verelim.',
    mtn_btn: 'Danışmanlık Alın',
    mtn_thanks_title: 'TEŞEKKÜR EDERİZ!',
    mtn_thanks_text: 'En kısa sürede sizinle iletişime geçerek sorularınızı yanıtlayacak ve proje, plan seçenekleri ve fiyatlar hakkında detaylı bilgi vereceğiz.',
    pricing_title: 'Fiyatları ve plan seçeneklerini öğrenin',
    pricing_sub: 'Kısa formu doldurun, en kısa sürede sizinle iletişime geçelim',
    pricing_btn: 'Fiyatları Öğrenin',
    pricing_thanks_title: 'Teşekkür ederiz!',
    pricing_thanks_text: 'En kısa sürede sizinle iletişime geçip<br>fiyatları ve tüm detayları paylaşacağız.',
    modal_title: 'Özel Görüşme',
    modal_desc: 'Numaranızı bırakın — yöneticimiz<br>24 saat içinde sizinle iletişime geçecek.',
    modal_btn: 'Talep Gönder',
    modal_privacy: 'Formu göndererek gizlilik politikamızı kabul etmiş olursunuz.',
    modal_thanks_title: 'Teşekkür ederiz',
    modal_thanks_text: '24 saat içinde sizi arayacağız.',
    consent_text: '<a href="privacy.html" target="_blank" class="consent-link">Aydınlatma Metni</a>\'ni okudum ve kişisel verilerimin işlenmesine açık rıza veriyorum',
    footer_privacy: 'Gizlilik Politikası'
  }
};

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key] != null) el.textContent = T[lang][key];
  });
  // data-i18n-html (innerHTML — for <br>, <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (T[lang] && T[lang][key] != null) el.innerHTML = T[lang][key];
  });
  // Special: elements with same data-i18n (e.g. multiple "View Prices" buttons)
  document.querySelectorAll('[data-i18n="res_btn"]').forEach(function(el) {
    el.textContent = T[lang]['res_btn'];
  });
}

function initLangSwitcher() {
  var switcher = document.getElementById('langSwitcher');
  var toggle = document.getElementById('langToggle');
  var options = document.querySelectorAll('.lang-option');

  // Toggle dropdown open/close
  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    switcher.classList.toggle('open');
    updateActiveOption();
  });

  // Select language
  options.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      applyLang(btn.dataset.lang);
      updateActiveOption();
      switcher.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function() {
    switcher.classList.remove('open');
  });

  function updateActiveOption() {
    options.forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
  }
}

// Apply saved language on load
document.addEventListener('DOMContentLoaded', function() {
  applyLang(currentLang);
  initLangSwitcher();
});
