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
      'about.title':'Over 20 Years of Professional Experience',
      'about.p1':'For over 20 years, I have worked personally with businesses and entrepreneurs in the region, striving for clarity, precision, and integrity in every financial step. My goal is to provide a solid foundation so that you can make confident and informed decisions for your business.',
      'about.p2':'I combine established accounting practices with modern digital tools to deliver fast and reliable service. Every client receives personalized attention and support, built on my years of professional experience and dedication.',
      'services.title':'Services',
      'why.title':'Why Choose Us',
      'testimonial.quote':'Precision. Correctness. Trust.',
      'testimonial.name':'Lilia Tabakova',
      'testimonial.role':'Chief Accountant',
      'testimonial.desc':'Dedicated to providing personalized service backed by two decades of experience.',
      'about.label':'Personal Approach & Experience',
      'about.stat1':'Proven Trust',
      'about.stat2':'Years of Experience',
      'about.stat3':'Uncompromising Precision',
      'about.imageText':'Legacy of trust in the heart of Plovdiv.',
      'footer.company':'Plovdiv Accounting',
      'footer.description':'Upholding the highest standards of ethics and professionalism in accounting services since 2004. Your trusted partner on the path to success.',
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
      'service.closing.desc':'Complete annual accounting closing with financial statement preparation, year-end analysis, and submission of required documents to tax authorities. My goal is for you to finish the financial year smoothly and without surprises.',
      'service.tax.title':'Tax Returns',
      'service.tax.desc':'Preparation and filing of annual and monthly tax returns for individuals and legal entities, ensuring accurate reporting of income and expenses while minimizing financial risks.',
      'service.ongoing.title':'Ongoing Services',
      'service.ongoing.desc':'Accounting services for self-employed individuals and small businesses. I ensure precise financial reporting and strict compliance with current legislation.',
      'service.consult.title':'Consultations',
      'service.consult.desc':'Expert advice on accounting, taxes, and labor law. I assist with social security calculations and income tax issues, offering easy document exchange via Viber and email.',
      'feature.milestone.title':'20+ years of experience',
      'feature.milestone':'20+ years of experience, over 150 satisfied clients',
      'feature.experience.title':'Decades of practice and proven trust from my clients.',
      'feature.experience':'Years of experience and many satisfied clients.',
      'feature.trust':'High standard of client data protection.',
      'feature.trust.title':'Integrity and Confidentiality',
      'feature.communication':'Quick and direct contact with your accountant.',
      'feature.communication.title':'Personal Communication',
      'feature.law':'Continuous monitoring of Bulgarian law changes.',
      'feature.knowledge.title':'Up-to-date Knowledge',
      'feature.local':'Professional accounting for clients in Plovdiv and the region.',
      'feature.local.title':'Local Service',
      'feature.practical.title':'Practical Solutions',
      'feature.practical':'Tailored approach and clear, actionable advice for your business.',
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
      'form.validation':'Please fill in all required fields.',
      'form.success':'Thank you! Your message has been sent.',
      'form.error':'Error sending message. Please try again later.',
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

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      var msgValidation = (lang === 'en') ? translations.en['form.validation'] : 'Моля попълнете всички задължителни полета.';
      var msgSuccess = (lang === 'en') ? translations.en['form.success'] : 'Благодарим! Вашето съобщение беше изпратено.';
      var msgError = (lang === 'en') ? translations.en['form.error'] : 'Грешка при изпращане. Моля опитайте по-късно.';

      if (!name || !email || !message) {
        showToast(msgValidation, '#dc3545');
        return;
      }

      submitBtn.disabled = true;
      var originalBtnText = submitBtn.textContent;
      submitBtn.textContent = (lang === 'en') ? 'Sending...' : 'Изпращане...';

      var action = contactForm.getAttribute('action');
      var formData = new FormData(contactForm);

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function(response) {
        if (response.ok) {
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'send_to': 'AW-16838803082/AW3XCPqR-pUaEPqR-pUa',
                'value': 1.0,
                'currency': 'USD'
            });
          }
          showToast(msgSuccess, '#28a745');
          contactForm.reset();
        } else {
          showToast(msgError, '#dc3545');
        }
      })
      .catch(function() {
        showToast(msgError, '#dc3545');
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      });
    });
  } 

  // --- 5. TOAST FUNCTION ---
  function showToast(text, bgColor) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = text;
    t.style.backgroundColor = bgColor || '#333';
    t.style.display = 'block';
    setTimeout(function() {
      t.style.display = 'none';
    }, 5000);
  }
});