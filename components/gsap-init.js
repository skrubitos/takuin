// Globalni smooth scroll bootstrap (GSAP ScrollSmoother + ScrollTrigger).
// Učitava se zadnji, iza React montiranja. Ne pokreće smooth na malim ekranima
// ni kada korisnik ima prefers-reduced-motion — u tim slučajevima nativni scroll
// ostaje s CSS fallbackom iz foundations.css.

(function () {
  function initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    var isMobileView = window.matchMedia('(max-width: 768px)').matches;

    // Feature columns — each card triggers individually on mobile (stacked),
    // all together with stagger on desktop (side-by-side grid).
    document.querySelectorAll('.tk-features-3').forEach(function (section) {
      var feats = section.querySelectorAll('.tk-feat');
      if (!feats.length) return;

      if (isMobileView) {
        // Mobile: each card has its own ScrollTrigger so it only animates
        // when that specific card scrolls into view.
        feats.forEach(function (feat) {
          var trigger = { trigger: feat, start: 'top 88%', once: true };

          gsap.set(feat, { opacity: 0, y: 64, scale: 0.93 });
          gsap.to(feat, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.6)', scrollTrigger: trigger });

          var check = feat.querySelector('.tk-feat-check');
          if (check) {
            gsap.set(check, { scale: 0, opacity: 0, rotate: -15 });
            gsap.to(check, { scale: 1, opacity: 1, rotate: 0, duration: 0.55, ease: 'back.out(2.2)', delay: 0.18, scrollTrigger: trigger });
          }

          var title = feat.querySelector('h3');
          if (title) {
            gsap.set(title, { opacity: 0, y: 18 });
            gsap.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: 0.28, scrollTrigger: trigger });
          }

          var items = feat.querySelectorAll('li');
          if (items.length) {
            gsap.set(items, { opacity: 0, x: -20 });
            gsap.to(items, { opacity: 1, x: 0, duration: 0.4, stagger: 0.09, ease: 'power2.out', delay: 0.38, scrollTrigger: trigger });
          }
        });
      } else {
        // Desktop: all three cards visible at once → stagger from a single trigger.
        var trigger = { trigger: section, start: 'top 80%', once: true };

        gsap.set(feats, { opacity: 0, y: 44 });
        gsap.to(feats, { opacity: 1, y: 0, duration: 0.65, stagger: 0.16, ease: 'power2.out', scrollTrigger: trigger });

        feats.forEach(function (feat, i) {
          var cardDelay = i * 0.16;

          var check = feat.querySelector('.tk-feat-check');
          if (check) {
            gsap.set(check, { scale: 0, opacity: 0, rotate: -15 });
            gsap.to(check, { scale: 1, opacity: 1, rotate: 0, duration: 0.55, ease: 'back.out(2.2)', delay: cardDelay + 0.18, scrollTrigger: trigger });
          }

          var title = feat.querySelector('h3');
          if (title) {
            gsap.set(title, { opacity: 0, y: 18 });
            gsap.to(title, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: cardDelay + 0.28, scrollTrigger: trigger });
          }

          var items = feat.querySelectorAll('li');
          if (items.length) {
            gsap.set(items, { opacity: 0, y: 14 });
            gsap.to(items, { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: cardDelay + 0.38, scrollTrigger: trigger });
          }
        });
      }
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

  // Poll until React has rendered the feature elements into the DOM,
  // then wait two rAF cycles so the browser finishes layout before
  // ScrollTrigger calculates element positions.
  function waitForContent(cb) {
    if (document.querySelector('.tk-feat') || document.querySelector('.section-head-lg')) {
      requestAnimationFrame(function () { requestAnimationFrame(cb); });
    } else {
      setTimeout(function () { waitForContent(cb); }, 50);
    }
  }

  function init() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    if (window.ScrollSmoother) gsap.registerPlugin(ScrollSmoother);

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

    if (!window.ScrollSmoother) return;

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
