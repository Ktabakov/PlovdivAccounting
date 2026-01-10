// Main JS for navigation, language toggle and contact form (frontend-only)
// Comments included for clarity.

document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer (guard if element missing on some pages)
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle with proper class handling
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if(menuToggle){
    menuToggle.addEventListener('click', function(){
      mainNav.classList.toggle('active');
      this.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
    });
    // Close menu when clicking on a nav link
    mainNav.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        mainNav.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Simple language toggle (BG <-> EN). Complete translations for full site.
  var lang = 'bg';
  var translations = {
    en: {
      'nav.title':'Plovdiv Accounting',
      'nav.subtitle':'Expert Financial Advice',
      'nav.about':'About',
      'nav.services':'Services',
      'nav.why':'Why Us',
      'nav.contact':'Contact',
      'nav.cta':'Contact Us',
      'hero.title.line1':'Excellence in',
      'hero.title.line2':'financial management',
      'hero.description':'Bespoke accounting solutions for Plovdiv businesses. Precision, integrity, and clarity at every step.',
      'hero.approach':'Our approach',
      'hero.subtitle':'Professional accounting and payroll services for SMEs and entrepreneurs.',
      'hero.cta':'Contact us',
      'hero.services':'Our services',
      'about.title':'About Us',
      'about.p1':'Plovdiv Accounting has been a cornerstone of the regional business ecosystem for over two decades. We are proud to be a trusted partner for companies that want distinction and absolute precision in their financial management.',
      'about.p2':'Our firm combines traditional values with modern financial technologies, ensuring that every client receives personalized service backed by twenty years of leading experience in the industry.',
      'services.title':'Services',
      'why.title':'Why Choose Us',
      'testimonial.quote':'Precision. Correctness. Trust.',
      'testimonial.name':'Lilia Tabakova',
      'testimonial.role':'Chief Accountant',
      'testimonial.desc':'Dedicated to providing personalized service backed by two decades of experience.',
      'about.label':'Our Legacy',
      'about.stat1':'Clients',
      'about.stat2':'Years',
      'about.stat3':'Accuracy',
      'about.imageText':'Legacy of trust in the heart of Plovdiv.',
      'footer.company':'Plovdiv Accounting',
      'footer.description':'We provide the highest standards of financial integrity and professional advice in Plovdiv since 2004. Your partner for prosperity.',
      'footer.quickLinks':'Quick Links',
      'footer.about':'About Us',
      'footer.services':'Services',
      'footer.news':'Latest News',
      'footer.contact':'Contact Us',
      'footer.contactInfo':'Contact Information',
      'footer.hours':'Mon - Fri: 09:00 - 18:00',
      'footer.terms':'Terms and Conditions',
      'cta.title':'Have questions about your accounting?',
      'cta.button':'Book a Consultation',
      'contact.phone.label':'Phone',
      'contact.email.label':'Email',
      'contact.address.label':'Address',
      'contact.hours.label':'Working Hours',
      'contact.hours.value':'Mon - Fri: 09:00 - 18:00',
      'form.name':'Name',
      'form.email':'Email',
      'form.subject':'Subject',
      'form.message':'Message',
      'form.submit':'Send',
      'form.reset':'Clear',
      'form.note':'Upon submission, you will receive an on-screen confirmation.',
      'form.placeholder.name':'Enter your name',
      'form.placeholder.email':'Enter your email',
      'form.placeholder.subject':'Enter subject',
      'form.placeholder.message':'Enter your message',
      'contact.title':'Contact',
      'contact.send':'Send',
      'contact.reset':'Reset',
      'service.accounting.title':'Accounting',
      'service.accounting.desc':'Processing of primary and secondary documents, electronic invoice issuance, VAT declarations, electronic banking, tax filings and communication with tax authorities and insurance institutions.',
      'service.payroll.title':'Payroll & HR',
      'service.payroll.desc':'Salary and contribution statements, hiring, termination and personnel file management, payment processing, tax form submissions (forms 1 & 6), and sick leave processing.',
      'service.closing.title':'Annual Financial Closing',
      'service.closing.desc':'Complete annual accounting closing with financial statement preparation, year-end analysis, and submission of required documents to tax authorities. We ensure no financial surprises.',
      'service.tax.title':'Tax Returns',
      'service.tax.desc':'Preparation and filing of annual and monthly tax returns for individuals and legal entities. We ensure correct reporting of income, expenses and tax obligations, minimizing risks.',
      'service.ongoing.title':'Ongoing Services',
      'service.ongoing.desc':'Continuous accounting maintenance for sole proprietors, SMEs and entrepreneurs. We ensure accurate bookkeeping, proper recording of financial transactions and legal compliance.',
      'service.consult.title':'Consultations',
      'service.consult.desc':'Expert consulting on accounting, taxes and labor law. We assist with social and health insurance calculations, income tax withholding and other obligations. Documents available via Viber and email.',
      'feature.milestone.title':'20+ years of experience',
      'feature.milestone':'20+ years of experience, over 150 satisfied clients',
      'feature.experience.title':'Experience and Reliability',
      'feature.experience':'Years of experience and many satisfied clients.',
      'feature.trust':'High standard of client data protection.',
      'feature.trust.title':'Integrity and Confidentiality',
      'feature.communication':'Quick and human contact with your accountant.',
      'feature.communication.title':'Personal Communication',
      'feature.law':'Continuous monitoring of Bulgarian law changes.',
      'feature.knowledge.title':'Up-to-date Knowledge',
      'feature.local':'We serve clients in Plovdiv and the region.',
      'feature.local.title':'Local Service',
      'feature.practical.title':'Practical Solutions',
      'feature.practical':'Individual approach and clear, applicable advice for your business.',
      // Privacy page translations
      'privacy.title':'Privacy Policy',
      'privacy.what.title':'What We Collect',
      'privacy.what.text':'We start with basic contact details to get in touch. Throughout our partnership, we handle your financial records, contracts, and banking data. We only collect what is legally required for your accounting',
      'privacy.use.title':'How Data is Used',
      'privacy.use.text':'Your documents are used exclusively for financial reporting and filings with authorities. We do not share your data with third parties or use it for marketing purposes.',
      'privacy.protection.title':'Data Protection',
      'privacy.protection.text':'Access to your data is restricted to your accountant. Once records are no longer legally required, they are securely destroyed.',
      'privacy.contact.title':'Contact Us',
      'privacy.contact.text':'If you have questions about our privacy policy or how we process your data, please contact us:',
      'privacy.contact.email':'liliatabakova34@gmail.com',
      'privacy.contact.phone':'+359 89 8505 664',
      'contact.city':'City:',
      'contact.cityname':'Plovdiv',
      'contact.phone':'Phone:',
      'contact.email':'Email:',
      'contact.hours':'Working hours:',
      'contact.hours.times':'Mon–Fri 09:00–17:00',
      'contact.info':'Contact us for a free initial consultation.',
      'form.name':'Name',
      'form.email':'Email',
      'form.phone':'Phone',
      'form.message':'Message',
      'contact.submit':'Upon submission, you will receive an on-screen confirmation.',
      'contact.footer.copyright':'© <span id="year">2024</span> Accounting Office — Liliya Tabakova. All rights reserved.',
      'contact.footer.privacy':'Privacy Policy'
    }
  };

  // Language toggle - only attach if button exists on the page
  var langToggleBtn = document.getElementById('langToggle');
  if(langToggleBtn){
    langToggleBtn.addEventListener('click', function(){
      lang = (lang === 'bg') ? 'en' : 'bg';
      this.textContent = (lang === 'bg') ? 'EN' : 'BG';
      // apply translations when switching to English
      if(lang === 'en') applyTranslations(translations.en);
      else location.reload(); // quick reset to Bulgarian static text
    });
  }

  function applyTranslations(map){
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(map[key]) el.innerHTML = map[key];
    });
    
    // Translate form input placeholders using data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      if(map[key]) el.placeholder = map[key];
    });
  }

  // Contact form behavior (frontend: supports Formspree/FormSubmit)
  var contactForm = document.getElementById('contactForm');
  contactForm && contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic validation
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      showToast('Моля попълнете всички задължителни полета.');
      return;
    }

    var action = contactForm.getAttribute('action') || '';
    if(!action || action.indexOf('your-form-id') !== -1){
      showToast('Формулярът не е конфигуриран. Заменете action в кода с Formspree или FormSubmit endpoint.');
      return;
    }

    // Prepare form data
    var formData = new FormData(contactForm);

    // Use fetch to POST to the configured action. Works on GitHub Pages with Formspree/FormSubmit.
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(function(response){
      if(response.ok){
        showToast('Благодарим! Вашето съобщение беше изпратено.');
        contactForm.reset();
      } else {
        response.json().then(function(data){
          showToast(data && data.error ? data.error : 'Грешка при изпращане. Моля опитайте по-късно.');
        }).catch(function(){
          showToast('Неуспешно изпращане. Моля опитайте по-късно.');
        });
      }
    }).catch(function(){
      showToast('Възникна мрежова грешка. Моля проверете връзката си.');
    });
  });

  function showToast(text){
    var t = document.getElementById('toast');
    t.textContent = text;
    t.style.display = 'block';
    setTimeout(function(){ t.style.display = 'none'; }, 5000);
  }
});

/* End of file */
