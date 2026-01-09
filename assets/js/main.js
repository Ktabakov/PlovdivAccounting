// Main JS for navigation, language toggle and contact form (frontend-only)
// Comments included for clarity.

document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  menuToggle && menuToggle.addEventListener('click', function(){
    if(mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });

  // Simple language toggle (BG <-> EN). Complete translations for full site.
  var lang = 'bg';
  var translations = {
    en: {
      'nav.about':'About',
      'nav.services':'Services',
      'nav.why':'Why Us',
      'nav.contact':'Contact',
      'nav.cta':'Contact Us',
      'hero.title':'Secure and reliable accounting services in Plovdiv',
      'hero.subtitle':'Professional accounting and payroll services for SMEs and entrepreneurs.',
      'hero.cta':'Contact us',
      'hero.services':'Our services',
      'about.title':'About Us',
      'about.text1':'Accounting firm with many years of experience in serving clients from various fields. We offer an individual approach, accuracy, and adherence to deadlines. Chief accountant: Lilia Tabakova.',
      'about.text2':'We work with small and medium-sized enterprises, freelancers, and entrepreneurs, ensuring confidentiality and up-to-date compliance with Bulgarian legislation.',
      'services.title':'Services',
      'why.title':'Why Choose Us',
      'contact.title':'Contact',
      'contact.send':'Send',
      'contact.reset':'Reset',
      'service.accounting.title':'Accounting',
      'service.accounting.desc':'Processing of primary and secondary documents, electronic invoice issuance, VAT declarations, electronic banking, tax filings and communication with tax authorities and insurance institutions.',
      'service.payroll.title':'Payroll & HR',
      'service.payroll.desc':'Salary and contribution statements, hiring, termination and personnel file management, payment processing, tax form submissions (forms 1 & 6), and sick leave processing.',
      'service.closing.title':'Annual Closing',
      'service.closing.desc':'Complete annual accounting closing with financial statement preparation, year-end analysis, and submission of required documents to tax authorities. We ensure no financial surprises.',
      'service.tax.title':'Tax Returns',
      'service.tax.desc':'Preparation and filing of annual and monthly tax returns for individuals and legal entities. We ensure correct reporting of income, expenses and tax obligations, minimizing risks.',
      'service.ongoing.title':'Ongoing Services',
      'service.ongoing.desc':'Continuous accounting maintenance for sole proprietors, SMEs and entrepreneurs. We ensure accurate bookkeeping, proper recording of financial transactions and legal compliance.',
      'service.consult.title':'Consultations',
      'service.consult.desc':'Expert consulting on accounting, taxes and labor law. We assist with social and health insurance calculations, income tax withholding and other obligations. Documents available via Viber and email.',
      'feature.milestone':'20+ years of experience, over 150 satisfied clients',
      'feature.experience':'Years of experience and many satisfied clients.',
      'feature.trust':'High standard of client data protection.',
      'feature.communication':'Quick and human contact with your accountant.',
      'feature.law':'Continuous monitoring of Bulgarian law changes.',
      'feature.local':'We serve clients in Plovdiv and the region.',
      'contact.city':'City:',
      'contact.phone':'Phone:',
      'contact.email':'Email:',
      'contact.hours':'Working hours:',
      'contact.info':'Contact us for a free initial consultation.',
      'form.name':'Name',
      'form.email':'Email',
      'form.phone':'Phone',
      'form.message':'Message',
      'contact.footer.copyright':'Accounting Office — Liliya Tabakova. All rights reserved.',
      'contact.footer.privacy':'Privacy Policy'
    }
  };

  document.getElementById('langToggle').addEventListener('click', function(){
    lang = (lang === 'bg') ? 'en' : 'bg';
    this.textContent = (lang === 'bg') ? 'EN' : 'BG';
    // apply translations when switching to English
    if(lang === 'en') applyTranslations(translations.en);
    else location.reload(); // quick reset to Bulgarian static text
  });

  function applyTranslations(map){
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      if(map[key]) el.textContent = map[key];
    });
    
    // Translate form input placeholders using data-placeholder
    document.querySelectorAll('[data-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-placeholder');
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
