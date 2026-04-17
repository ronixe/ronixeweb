document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // 0. PRELOADER LOGIC
  const preloader = document.getElementById('preloader');
  const progress = document.querySelector('.preloader-progress');
  document.body.classList.add('loading');

  if (preloader) {
    let width = 0;
    const interval = setInterval(() => {
      width += Math.random() * 30; // Random progress jumps
      if (width >= 100) {
        width = 100;
        clearInterval(interval);
        
        // Brief pause at 100%
        setTimeout(() => {
          preloader.classList.add('fade-out');
          document.body.classList.remove('loading');
        }, 500);
      }
      progress.style.width = width + '%';
    }, 200);
  }

  // 1. NAVBAR SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. EXPERT REVEAL ON SCROLL
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle direct reveals
        entry.target.classList.add('active');

        // Handle staggered groups
        const staggerItems = entry.target.querySelectorAll('.stagger-item');
        if (staggerItems.length > 0) {
          staggerItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('active');
            }, index * 150); // 150ms stagger
          });
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // 3. CONTACT FORM SUBMISSION (PHP Integration)
  const contactForm = document.querySelector('.simple-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button');
      const originalText = btn.textContent;
      
      // Collect data
      const formData = new FormData(contactForm);
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const message = contactForm.querySelector('textarea').value;

      // Append manually if needed for plain POST
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const response = await fetch('contact.php', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (response.ok && result.status === 'success') {
          btn.textContent = 'Message Sent!';
          btn.classList.add('btn-success');
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (error) {
        console.error('Submission error:', error);
        btn.textContent = 'Submission Failed';
        btn.classList.add('btn-error');
      } finally {
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.classList.remove('btn-success', 'btn-error');
        }, 3000);
      }
    });
  }

  // 4. SMOOTH ANCHOR LINK SCROLLING (Additional fallback)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Offset for sticky navbar
          behavior: 'smooth'
        });
      }
    });
  });
  // 5. ACTIVE NAV LINK ON SCROLL (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // 6. MULTI-LANGUAGE LOGIC
  const langToggle = document.getElementById('lang-toggle');
  const langText = langToggle.querySelector('.lang-text');
  let currentLang = localStorage.getItem('ronixe_lang') || 'en';

  const updateContent = (lang) => {
    // Update elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (translations[lang] && translations[lang][key]) {
        // Handle elements with children vs simple text
        if (el.tagName === 'TITLE') {
          document.title = translations[lang][key];
        } else if (key.includes('title') || key.includes('desc') || key.includes('marquee') || key.includes('quote')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-t-placeholder]').forEach(el => {
      const key = el.getAttribute('data-t-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update button text - show the OTHER language as option
    langText.textContent = lang === 'en' ? 'FR' : 'EN';
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save preference
    localStorage.setItem('ronixe_lang', lang);

    // Refresh Lucide icons in case any were replaced (not common but good practice)
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

  // Initial load
  if (currentLang === 'fr') {
    updateContent('fr');
  }

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    updateContent(currentLang);
    
    // Smooth transition effect
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 50);
  });
});
