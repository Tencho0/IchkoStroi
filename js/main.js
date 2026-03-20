/* ============================================
   ИчкоСтрой — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* --- Header Scroll Effect --- */
  var header = document.querySelector('.header');

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle('header--scrolled', y > 50);
    }
    // Back to top button
    var btn = document.querySelector('.back-to-top');
    if (btn) {
      btn.classList.toggle('visible', y > 400);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile Navigation --- */
  // Support multiple selector patterns across pages
  var hamburger = document.querySelector('.hamburger') ||
                  document.querySelector('.header__hamburger') ||
                  document.querySelector('.header__burger');
  var nav = document.querySelector('.nav') ||
            document.querySelector('.header__nav');
  var overlay = document.querySelector('.mobile-overlay');

  function toggleMenu() {
    if (hamburger) hamburger.classList.toggle('active');
    if (nav) nav.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = (nav && nav.classList.contains('active')) ? 'hidden' : '';
  }

  function closeMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (nav) nav.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close menu on nav link click
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  /* --- Back to Top --- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Scroll Animations (Intersection Observer) --- */
  var animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children'
  );

  if ('IntersectionObserver' in window && animatedElements.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- FAQ Accordion (supports both .faq-item and .accordion__item patterns) --- */

  // Pattern 1: .faq-item__question (faq.html)
  document.querySelectorAll('.faq-item__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var answer = item.querySelector('.faq-item__answer');
      var isOpen = item.classList.contains('active');

      // Close siblings
      var parent = item.closest('.faq-list, .faq-category, .section');
      if (parent) {
        parent.querySelectorAll('.faq-item.active').forEach(function (open) {
          if (open !== item) {
            open.classList.remove('active');
            var a = open.querySelector('.faq-item__answer');
            if (a) a.style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Pattern 2: .accordion__header (service sub-pages)
  document.querySelectorAll('.accordion__header').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.accordion__item');
      var body = item.querySelector('.accordion__body');
      var isOpen = item.classList.contains('active');

      // Close siblings
      var parent = item.closest('.accordion, .section');
      if (parent) {
        parent.querySelectorAll('.accordion__item.active').forEach(function (open) {
          if (open !== item) {
            open.classList.remove('active');
            var b = open.querySelector('.accordion__body');
            if (b) b.style.maxHeight = null;
            var h = open.querySelector('.accordion__header');
            if (h) h.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isOpen) {
        item.classList.remove('active');
        body.style.maxHeight = null;
        this.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --- Portfolio Filter --- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var portfolioCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.dataset.filter;

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      portfolioCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          requestAnimationFrame(function () {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* --- Contact Form Submission --- */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Изпращане...';
      submitBtn.disabled = true;

      // Simulate submission
      setTimeout(function () {
        submitBtn.textContent = 'Изпратено ✓';
        submitBtn.style.background = '#22c55e';
        setTimeout(function () {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          contactForm.reset();
        }, 2000);
      }, 1000);
    });
  }

  /* --- Active Navigation Highlight --- */
  (function setActiveNav() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkPath = href.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      var currentPath = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      if (currentPath === linkPath ||
          (linkPath !== '/' && linkPath !== '' && currentPath.startsWith(linkPath))) {
        link.classList.add('nav-link--active');
      }
    });
  })();

})();
