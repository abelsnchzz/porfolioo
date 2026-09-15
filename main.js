/**
 * Lógica principal del Portfolio:
 * 1. Inicialización de estado (Tema e Idioma)
 * 2. Intersection Observer para animaciones y active nav
 * 3. Manejadores de menú móvil y eventos UI
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initMobileNav();
  initScrollSpy();
  initContactForm();
});

/* ================= Theme Switcher (Dark / Light) ================= */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('site-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeButton(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('site-theme', newTheme);
      updateThemeButton(newTheme);
    });
  }
}

function updateThemeButton(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('.btn-icon');
  const label = btn.querySelector('.btn-text');
  if (theme === 'dark') {
    if (icon) icon.textContent = '☀';
    if (label) label.textContent = 'LIGHT';
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    if (icon) icon.textContent = '☾';
    if (label) label.textContent = 'DARK';
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

/* ================= Internationalization (i18n) ================= */
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const storedLang = localStorage.getItem('site-lang');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
  
  const currentLang = storedLang || browserLang;
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const activeLang = document.documentElement.getAttribute('lang') || 'es';
      const newLang = activeLang === 'es' ? 'en' : 'es';
      applyLanguage(newLang);
      localStorage.setItem('site-lang', newLang);
    });
  }
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  document.documentElement.setAttribute('lang', lang);
  
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    const label = langBtn.querySelector('.btn-text');
    if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';
  }

  // Traducir todos los elementos con el atributo data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Traducir placeholders en formularios
  const placeholders = document.querySelectorAll('[data-i18n-ph]');
  placeholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

/* ================= Mobile Navigation ================= */
function initMobileNav() {
  const toggleBtn = document.querySelector('.btn-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al pulsar en un enlace
    navLinks.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ================= ScrollSpy & Intersection Observer ================= */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: "-70px 0px -40% 0px"
  });

  sections.forEach((sec) => observer.observe(sec));
}

/* ================= Contact Form (Mailto Generator) ================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const email = document.getElementById('cf-email').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    const subject = encodeURIComponent(`[Portfolio IT] Contacto de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}\n\n---\nEnviado desde el formulario del portfolio de Abel Sánchez Ramos`
    );

    window.location.href = `mailto:asannchez.2005@gmail.com?subject=${subject}&body=${body}`;
  });
}
