// Pricing card + FAQ + Testimonial + UseCase pieces

function Price({ cat, title, amount, currency = "EUR", per, features, desc, cta, ctaHref = "kontakt.html", featured = false }) {
  return (
    <div className={`tk-price ${featured ? "featured" : ""}`}>
      <div className="price-cat">{cat}</div>
      <h3 className="price-title">{title}</h3>
      <div className="price-amount">
        <span className="cur">€</span>
        <span className="val">{amount}</span>
        {per && <span className="per">/ {per}</span>}
      </div>
      {features && (
        <ul className="price-list">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      )}
      {desc && <div className="price-desc">{desc}</div>}
      {cta && (
        <div className="price-cta">
          <a href={ctaHref} className={`btn ${featured ? "btn-ghost" : "btn-primary"} btn-sm`}>{cta}</a>
        </div>
      )}
    </div>
  );
}

function Faq({ items }) {
  return (
    <div className="tk-faq">
      {items.map((it, i) => (
        <details key={i} className="tk-faq-item">
          <summary className="tk-faq-q">
            <span>{it.q}</span>
            <span className="tk-faq-icon">+</span>
          </summary>
          <div className="tk-faq-a">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

function Testimonial({ quote, name, role, initials }) {
  return (
    <div className="tk-testimonial">
      <blockquote>"{quote}"</blockquote>
      <div className="author">
        <div className="avatar">{initials}</div>
        <div>
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </div>
      </div>
    </div>
  );
}

// Abstract icon for use-case tiles — no emoji, per design system.
function UseCaseIcon({ kind }) {
  const style = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "sunbed": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <circle cx="50" cy="14" r="4"/>
        <path d="M6 48 L58 48"/>
        <path d="M14 48 L20 38 L44 38 L52 48"/>
        <path d="M22 38 L22 34 L42 34 L42 38"/>
      </svg>
    );
    case "bike": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <circle cx="16" cy="44" r="10"/>
        <circle cx="48" cy="44" r="10"/>
        <path d="M16 44 L28 24 L44 24 L48 44"/>
        <path d="M28 24 L32 16 L40 16"/>
        <circle cx="32" cy="44" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    );
    case "boat": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <path d="M10 44 L54 44 L48 52 L16 52 Z"/>
        <path d="M32 10 L32 44"/>
        <path d="M32 14 L46 34 L32 34 Z" fill="currentColor" stroke="none" opacity="0.18"/>
        <path d="M32 14 L46 34 L32 34"/>
        <path d="M6 56 Q12 52 18 56 T30 56 T42 56 T54 56"/>
      </svg>
    );
    case "jetski": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <path d="M8 42 Q18 34 32 36 L50 36 Q58 36 58 42 L58 46 L8 46 Z"/>
        <path d="M28 36 L30 26 L38 26 L40 30"/>
        <circle cx="34" cy="22" r="3"/>
        <path d="M6 52 Q12 48 18 52 T30 52 T42 52 T54 52"/>
      </svg>
    );
    case "sup": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <ellipse cx="32" cy="40" rx="20" ry="6"/>
        <path d="M44 16 L44 40"/>
        <path d="M40 16 L48 16"/>
        <path d="M42 20 L46 20"/>
      </svg>
    );
    case "park": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <path d="M8 46 L56 46"/>
        <path d="M12 46 L12 30 Q12 22 20 22 Q28 22 28 30 L28 46"/>
        <path d="M36 46 L36 26"/>
        <circle cx="36" cy="20" r="6"/>
        <path d="M48 46 L48 36 Q48 30 52 30"/>
      </svg>
    );
    case "pedal": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <path d="M10 38 L54 38 L48 48 L16 48 Z"/>
        <circle cx="22" cy="30" r="4"/>
        <circle cx="42" cy="30" r="4"/>
        <path d="M22 26 L22 20 L42 20 L42 26"/>
      </svg>
    );
    case "wind": return (
      <svg width="56" height="56" viewBox="0 0 64 64" {...style}>
        <path d="M12 50 L52 50"/>
        <path d="M32 14 L32 46"/>
        <path d="M32 14 C 42 22 46 36 32 46 Z" fill="currentColor" stroke="none" opacity="0.15"/>
        <path d="M32 14 C 42 22 46 36 32 46"/>
        <path d="M10 52 Q18 48 26 52 T42 52 T58 52"/>
      </svg>
    );
    default: return null;
  }
}

function UseCase({ kind, title, desc }) {
  return (
    <div className="tk-usecase">
      <div className="tk-usecase-img">
        <UseCaseIcon kind={kind} />
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function Feature({ title, items }) {
  return (
    <div className="tk-feat">
      <span className="tk-feat-check">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </span>
      <h3>{title}</h3>
      <ul>{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
    </div>
  );
}

function CTA({ title, sub, primary, ghost, primaryHref = "kontakt.html" }) {
  return (
    <div className="page">
      <div className="tk-cta">
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
        <div className="actions">
          <a href={primaryHref} className="btn btn-primary">{primary}</a>
          {ghost && <a href="#" className="btn btn-ghost">{ghost}</a>}
        </div>
      </div>
    </div>
  );
}

window.Price = Price;
window.Faq = Faq;
window.Testimonial = Testimonial;
window.UseCase = UseCase;
window.Feature = Feature;
window.CTA = CTA;
