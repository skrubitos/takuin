// Shared Nav + Footer — used across all pages.

function Logo({ size = 26 }) {
  return (
    <span className="tk-brand" style={{ fontSize: size }}>
      <span className="tk-brand-mark" style={{ width: size * 0.95, height: size * 0.95, fontSize: size * 0.55 }}>T</span>
      <span>takuin<span style={{ color: 'var(--link-blue)' }}>.</span></span>
    </span>
  );
}

function Nav({ current = "home" }) {
  const [lang, t] = useLang();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const items = [
    { k: "home",   href: "index.html",    label: t.nav.home },
    { k: "pos",    href: "pos.html",      label: t.nav.pos },
    { k: "rent",   href: "rent.html",     label: t.nav.rent },
    { k: "port",   href: "port.html",     label: t.nav.port },
    { k: "poskok", href: "poskok.html",   label: t.nav.poskok },
    { k: "about",  href: "about.html",    label: t.nav.about },
  ];

  // Nav mora živjeti izvan #smooth-wrapper da sticky radi sa ScrollSmootherom.
  const navRoot = typeof document !== 'undefined' ? document.getElementById('nav-root') : null;

  const navEl = (
    <nav className="tk-nav" data-screen-label="Nav">
      <div className="tk-nav-inner">
        <div className="tk-nav-left">
          <a href="index.html" style={{ textDecoration: 'none' }}>
            <Logo />
          </a>
          {items.filter(i => i.k !== "home").map(i => (
            <a key={i.k}
               href={i.href}
               className={`tk-nav-link ${current === i.k ? "active" : ""}`}>
              {i.label}
            </a>
          ))}
        </div>
        <div className="tk-nav-right">
          <div className="tk-lang">
            <button className={lang === "hr" ? "on" : ""} onClick={() => setLang("hr")}>HR</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="kontakt.html" className="btn btn-primary btn-sm">
            {t.nav.cta}
          </a>
          <button className="tk-nav-burger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      <div className={`tk-mobile-menu ${mobileOpen ? "open" : ""}`}>
        <button className="close" onClick={() => setMobileOpen(false)} aria-label="Close">×</button>
        {items.map(i => (
          <a key={i.k} href={i.href}
             className={`tk-nav-link ${current === i.k ? "active" : ""}`}
             onClick={() => setMobileOpen(false)}>
            {i.label}
          </a>
        ))}
        <div style={{ marginTop: 20 }}>
          <div className="tk-lang">
            <button className={lang === "hr" ? "on" : ""} onClick={() => setLang("hr")}>HR</button>
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
        </div>
        <a href="kontakt.html" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );

  return navRoot ? ReactDOM.createPortal(navEl, navRoot) : navEl;
}

function Footer() {
  const [, t] = useLang();
  return (
    <footer className="tk-footer">
      <div className="tk-footer-inner">
        <div className="tk-footer-brand">
          <Logo size={22} />
          <p>{t.footer.about}</p>
        </div>
        <div className="tk-footer-cols">
          <div>
            <span className="caption">{t.footer.productsCol}</span>
            <a href="pos.html">TAKUIN POS</a>
            <a href="rent.html">TAKUIN RENT</a>
            <a href="port.html">TAKUIN PORT</a>
            <a href="poskok.html">POSKOK</a>
          </div>
          <div>
            <span className="caption">{t.footer.companyCol}</span>
            <a href="about.html">{t.footer.companyAbout}</a>
            <a href="privacy.html">{t.footer.companyPrivacy}</a>
            <a href="https://adrinaut.com" target="_blank" rel="noopener">Adrinaut.com</a>
          </div>
          <div>
            <span className="caption">{t.footer.supportCol}</span>
            <a href="mailto:sanja@adrinaut.com">{t.footer.supportContact}</a>
            <a href="mailto:matija@takuin.eu">matija@takuin.eu</a>
            <a href="kontakt.html">{t.footer.supportInquiry}</a>
          </div>
        </div>
      </div>
      <div className="tk-footer-fine">
        <span>{t.footer.rights}</span>
        <span>{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

window.Logo = Logo;
window.Nav = Nav;
window.Footer = Footer;
window.Badge = Badge;
