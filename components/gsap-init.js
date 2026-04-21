// Globalni smooth scroll bootstrap (GSAP ScrollSmoother + ScrollTrigger).
// Učitava se zadnji, iza React montiranja. Ne pokreće smooth na malim ekranima
// ni kada korisnik ima prefers-reduced-motion — u tim slučajevima nativni scroll
// ostaje s CSS fallbackom iz foundations.css.

(function () {
  function initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    // Fade-in up for feature columns (.tk-feat inside .tk-features-3)
    document.querySelectorAll('.tk-features-3').forEach(function (section) {
      var feats = section.querySelectorAll('.tk-feat');
      if (!feats.length) return;
      gsap.set(feats, { opacity: 0, y: 40 });
      gsap.to(feats, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          once: true,
        },
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

  function init() {
    if (!window.gsap || !window.ScrollTrigger || !window.ScrollSmoother) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      initScrollAnimations();
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
