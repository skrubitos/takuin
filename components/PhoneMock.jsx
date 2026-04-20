// Interactive Android phone mockup showcasing a fiscal POS app.
// Multiple screens; click-through. Used on home page hero and POS page.

function PhoneMock({ app = "pos", screen: controlled }) {
  const [internal, setInternal] = React.useState(0);
  const [selItem, setSelItem] = React.useState(null);
  const isControlled = controlled !== undefined && controlled !== null;
  const screen = isControlled ? controlled : internal;

  // Auto-advance the demo every 4s unless user interacts — disabled when controlled by parent.
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (isControlled || paused) return;
    const id = setInterval(() => {
      setInternal((s) => (s + 1) % 4);
    }, 4200);
    return () => clearInterval(id);
  }, [paused, isControlled]);

  const go = (s) => {
    if (isControlled) return;
    setPaused(true);
    setInternal(s);
  };

  return (
    <div className="phone-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="phone-bezel">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <div className="phone-status">
            <span>9:41</span>
            <span className="phone-status-icons">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><rect x="0" y="6" width="2" height="4" rx="0.5" /><rect x="3" y="4" width="2" height="6" rx="0.5" /><rect x="6" y="2" width="2" height="8" rx="0.5" /><rect x="9" y="0" width="2" height="10" rx="0.5" /></svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 4 Q7 -1 13 4" /><path d="M3 6 Q7 2 11 6" /><circle cx="7" cy="8" r="1" fill="currentColor" /></svg>
              <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="1" width="19" height="8" rx="1.5" fill="none" stroke="currentColor" /><rect x="1.5" y="2.5" width="14" height="5" rx="0.5" fill="currentColor" /><rect x="20" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" /></svg>
            </span>
          </div>

          {screen === 0 && <ScreenHome onPick={() => go(1)} />}
          {screen === 1 && <ScreenCatalog onPick={(it) => { setSelItem(it); go(2); }} />}
          {screen === 2 && <ScreenReceipt item={selItem} onPay={() => go(3)} />}
          {screen === 3 && <ScreenSuccess onReset={() => go(0)} />}

          <div className="phone-nav">
            {[0, 1, 2, 3].map(i => (
              <span key={i} className={`phone-dot ${i === screen ? "on" : ""}`} onClick={() => go(i)}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenHome({ onPick }) {
  const actions = [
    { t: "Novi račun", s: "Izdajte u par klikova", color: "#242424" },
    { t: "Ponude", s: "Pretvori u račun", color: "#1E5A8A" },
    { t: "Promet", s: "Danas: €1,240.00", color: "#0A6C5F" },
    { t: "Nadglednik", s: "Praćenje uživo", color: "#7A1E1E" },
  ];
  return (
    <div className="phone-content">
      <div className="phone-topbar">
        <div>
          <div className="phone-greet">Dobar dan,</div>
          <div className="phone-greet-name">Sanja · Baška, lokacija 1</div>
        </div>
        <div className="phone-avatar">S</div>
      </div>

      <div className="phone-stat">
        <div className="phone-stat-label">Promet danas</div>
        <div className="phone-stat-val">€1.240,00</div>
        <div className="phone-stat-row">
          <span><em style={{ background: '#0A6C5F' }}></em> 18 računa</span>
          <span><em style={{ background: '#1E5A8A' }}></em> 4 ponude</span>
          <span><em style={{ background: '#898989' }}></em> 2 R1</span>
        </div>
      </div>

      <div className="phone-actions">
        {actions.map((a, i) => (
          <div key={i} className="phone-action" onClick={i === 0 ? onPick : undefined} style={{ cursor: i === 0 ? "pointer" : "default" }}>
            <span className="phone-action-dot" style={{ background: a.color }}></span>
            <div>
              <div className="phone-action-t">{a.t}</div>
              <div className="phone-action-s">{a.s}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="phone-primary" onClick={onPick}>Novi račun</button>
    </div>
  );
}

function ScreenCatalog({ onPick }) {
  const items = [
    { n: "Ležaljka", p: 8.00, c: "Plaža" },
    { n: "Suncobran", p: 6.00, c: "Plaža" },
    { n: "SUP daska", p: 15.00, c: "Oprema" },
    { n: "Kajak single", p: 12.00, c: "Oprema" },
    { n: "Bicikl muški", p: 10.00, c: "Oprema" },
    { n: "Pedalin", p: 20.00, c: "Plovila" },
  ];
  return (
    <div className="phone-content">
      <div className="phone-back">← Katalog</div>
      <div className="phone-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
        <input placeholder="Pretraži sadržaj…" readOnly />
      </div>
      <div className="phone-catalog">
        {items.map((it, i) => (
          <div key={i} className="phone-cat-item" onClick={() => onPick(it)}>
            <div>
              <div className="phone-cat-n">{it.n}</div>
              <div className="phone-cat-c">{it.c}</div>
            </div>
            <div className="phone-cat-p">€{it.p.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenReceipt({ item, onPay }) {
  const it = item || { n: "Ležaljka", p: 8.00, c: "Plaža" };
  return (
    <div className="phone-content">
      <div className="phone-back">← Novi račun</div>
      <div className="phone-receipt">
        <div className="phone-receipt-row">
          <div>
            <div className="phone-cat-n">{it.n}</div>
            <div className="phone-cat-c">{it.c} · 1×</div>
          </div>
          <div className="phone-cat-p">€{it.p.toFixed(2)}</div>
        </div>
        <div className="phone-receipt-row">
          <div>
            <div className="phone-cat-n">Najam 2h</div>
            <div className="phone-cat-c">Dodatno</div>
          </div>
          <div className="phone-cat-p">€4.00</div>
        </div>

        <div className="phone-receipt-total">
          <span>Ukupno</span>
          <span>€{(it.p + 4).toFixed(2)}</span>
        </div>

        <div className="phone-pay">
          <div className="phone-pay-opt on">
            <span className="phone-radio"></span>Gotovina
          </div>
          <div className="phone-pay-opt">
            <span className="phone-radio"></span>Kartica
          </div>
        </div>
      </div>
      <button className="phone-primary" onClick={onPay}>Fiskaliziraj i ispiši</button>
    </div>
  );
}

function ScreenSuccess({ onReset }) {
  return (
    <div className="phone-content phone-success">
      <div className="phone-check">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </div>
      <div className="phone-success-t">Račun fiskaliziran</div>
      <div className="phone-success-s">JIR: 9f2b-11e3-… · €12,00</div>
      <div className="phone-receipt-preview">
        <div className="pr-line bold">TAKUIN · Baška, lokacija 1</div>
        <div className="pr-line small">OIB 12345678901</div>
        <div className="pr-sep"></div>
        <div className="pr-line">Ležaljka · 1 × €8,00</div>
        <div className="pr-line">Najam 2h · 1 × €4,00</div>
        <div className="pr-sep"></div>
        <div className="pr-line bold pr-total">Ukupno €12,00</div>
        <div className="pr-line small">JIR: 9f2b-11e3-45d1-b0e2</div>
        <div className="pr-line small">ZKI: 4c6b1f22…</div>
      </div>
      <button className="phone-ghost" onClick={onReset}>Novi račun</button>
    </div>
  );
}

window.PhoneMock = PhoneMock;
