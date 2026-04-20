// Globalni smooth scroll bootstrap (GSAP ScrollSmoother + ScrollTrigger).
// Učitava se zadnji, iza React montiranja. Ne pokreće smooth na malim ekranima
// ni kada korisnik ima prefers-reduced-motion — u tim slučajevima nativni scroll
// ostaje s CSS fallbackom iz foundations.css.

(function () {
  function init() {
    if (!window.gsap || !window.ScrollTrigger || !window.ScrollSmoother) return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isSmallScreen || reducedMotion) {
      // Fallback: ne inicijaliziraj smoother, ostavi nativni scroll.
      // ScrollTrigger i dalje radi za pinning sekcije (PhoneStory će se sam ugasiti na ≤960px).
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
