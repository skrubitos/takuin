// Globalni smooth scroll bootstrap (GSAP ScrollSmoother + ScrollTrigger).
// Učitava se zadnji, iza React montiranja. Ne pokreće smooth na malim ekranima
// ni kada korisnik ima prefers-reduced-motion — u tim slučajevima nativni scroll
// ostaje s CSS fallbackom iz foundations.css.

(function () {
  function initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    var isMobileView = window.matchMedia('(max-width: 768px)').matches;

    // Feature columns — checkmark pop, title + bullets stagger
    document.querySelectorAll('.tk-features-3').forEach(function (section) {
      var feats = section.querySelectorAll('.tk-feat');
      if (!feats.length) return;

      var triggerStart = isMobileView ? 'top 88%' : 'top 80%';

      // Card entrance
      gsap.set(feats, { opacity: 0, y: isMobileView ? 64 : 44, scale: isMobileView ? 0.93 : 1 });
      gsap.to(feats, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobileView ? 0.7 : 0.65,
        stagger: isMobileView ? 0.22 : 0.16,
        ease: isMobileView ? 'back.out(1.6)' : 'power2.out',
        scrollTrigger: { trigger: section, start: triggerStart, once: true },
      });

      // Checkmark icon: scale-pop after card lands
      feats.forEach(function (feat, i) {
        var check = feat.querySelector('.tk-feat-check');
        if (!check) return;
        var cardDelay = i * (isMobileView ? 0.22 : 0.16);
        gsap.set(check, { scale: 0, opacity: 0, rotate: -15 });
        gsap.to(check, {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.55,
          ease: 'back.out(2.2)',
          delay: cardDelay + 0.18,
          scrollTrigger: { trigger: section, start: triggerStart, once: true },
        });
      });

      // h3 title: slide in slightly after card
      feats.forEach(function (feat, i) {
        var title = feat.querySelector('h3');
        if (!title) return;
        var cardDelay = i * (isMobileView ? 0.22 : 0.16);
        gsap.set(title, { opacity: 0, y: 18 });
        gsap.to(title, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: 'power2.out',
          delay: cardDelay + 0.28,
          scrollTrigger: { trigger: section, start: triggerStart, once: true },
        });
      });

      // List items: stagger in from the side
      feats.forEach(function (feat, i) {
        var items = feat.querySelectorAll('li');
        if (!items.length) return;
        var cardDelay = i * (isMobileView ? 0.22 : 0.16);
        gsap.set(items, { opacity: 0, x: isMobileView ? -20 : 0, y: isMobileView ? 0 : 14 });
        gsap.to(items, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.4,
          stagger: 0.09,
          ease: 'power2.out',
          delay: cardDelay + 0.38,
          scrollTrigger: { trigger: section, start: triggerStart, once: true },
        });
      });
    });

    // Testimonial cards — fade-up on mobile only
    document.querySelectorAll('.tk-testimonials').forEach(function (section) {
      var cards = section.querySelectorAll('.tk-testimonial');
      if (!cards.length || !isMobileView) return;
      gsap.set(cards, { opacity: 0, y: 40 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 92%', once: true },
      });
    });

    // Fade-in up for section/page headings
    document.querySelectorAll('.tk-section-head, .section-head-lg').forEach(function (head) {
      gsap.set(head, { opacity: 0, y: 28 });
      gsap.to(head, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: head,
          start: 'top 88%',
          once: true,
        },
      });
    });
  }

  // Poll until React has rendered the feature elements into the DOM.
  function waitForContent(cb) {
    if (document.querySelector('.tk-feat') || document.querySelector('.section-head-lg')) {
      cb();
    } else {
      setTimeout(function () { waitForContent(cb); }, 50);
    }
  }

  function init() {
    if (!window.gsap || !window.ScrollTrigger || !window.ScrollSmoother) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      waitForContent(initScrollAnimations);
    }

    if (isSmallScreen || reducedMotion) {
      // Fallback: ne inicijaliziraj smoother, ostavi nativni scroll.
      // ScrollTrigger i dalje radi za animacije sekcija.
      return;
    }

    const wrapper = document.getElementById('smooth-wrapper');
    const content = document.getElementById('smooth-content');
    if (!wrapper || !content) return;

    const smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: content,
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      smoothTouch: false,
      ignoreMobileResize: true,
    });

    window.__takuinSmoother = smoother;

    // Refresh ScrollTriggera nakon promjene jezika / async sadržaja.
    window.addEventListener('takuin:relayout', () => {
      ScrollTrigger.refresh();
    });
  }

  // React komponente se montiraju nakon učitavanja Babel + skripti.
  // Pričekaj mikrotask nakon DOMContentLoaded da #root bude populiran.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));
  } else {
    setTimeout(init, 0);
  }
})();
