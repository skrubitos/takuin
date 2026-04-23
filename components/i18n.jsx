// Shared i18n dictionary + Nav + Footer + Tweaks — used across all pages.

const DICT = {
  hr: {
    nav: {
      home: "Naslovna",
      pos: "TAKUIN POS",
      rent: "TAKUIN RENT",
      port: "TAKUIN PORT",
      poskok: "POSKOK",
      about: "O nama",
      signin: "Moj profil",
      cta: "Zatražite ponudu",
    },
    tagline: "Poslovanje u hodu",
    home: {
      heroEyebrow: "Poslovni sustavi od 1999.",
      heroTitle: ["Poslovanje", "u hodu."],
      heroSub: "TAKUIN aplikacije spajaju blagajnu, iznajmljivanje, lučko poslovanje i desktop blagajnu u jedan sustav — za sve koji posao vode na terenu.",
      heroCtaPrimary: "Zatražite ponudu",
      heroCtaGhost: "Pogledajte proizvode",
      heroMeta: "Od €20/mj · Bez ugovora · Plaćate onoliko koliko radite",
      trustUsers: "korisnika",
      trustYears: "godina na tržištu",
      trustDev: "godina razvoja poslovnih sustava",
      productsEyebrow: "Četiri rješenja",
      productsTitle: "Jedan sustav za sve što vodite.",
      productsSub: "Od brze mobilne blagajne do potpune administracije lučke uprave — odaberite aplikaciju koja prati vašu dinamiku rada.",
      productPosTag: "Mobilna blagajna",
      productPosTitle: "TAKUIN POS",
      productPosDesc: "Brzo, jednostavno i sigurno izdavanje računa u hodu. Fiskalna blagajna za Android uređaj i Bluetooth štampač.",
      productRentTag: "Iznajmljivanje",
      productRentTitle: "TAKUIN RENT",
      productRentDesc: "Organizacija rada na terenu i online praćenje najma — od ležaljki i bicikala do jet skija i pedalina.",
      productPortTag: "Lučko poslovanje",
      productPortTitle: "TAKUIN PORT",
      productPortDesc: "Web i Android aplikacija za lučke uprave i sidrišta — pristojbe, plovila, praćenje zauzetosti.",
      productPoskokTag: "Desktop blagajna",
      productPoskokTitle: "POSKOK",
      productPoskokDesc: "Moderna desktop blagajna za ugostiteljstvo i trgovinu — u primjeni diljem Hrvatske već 20+ godina.",
      productCta: "Istražite više",
      whyTitle: "Zašto TAKUIN?",
      whySub: "Sve aplikacije rade po istoj logici — jedan sustav, više proizvoda, jedna podrška.",
      why1Title: "Organiziranost na terenu",
      why1: [
        "Brzo izdavanje i fiskaliziranje računa",
        "Bez papira, bilježnica i zaguba",
        "RFID čitač za brza očitanja",
        "Izdavanje ponuda i računa iz ponude",
      ],
      why2Title: "Sigurnost",
      why2: [
        "Svi podaci se pohranjuju u Cloud",
        "Dostupno online bilo kada, bilo gdje",
        "U slučaju gubitka uređaja — bez gubitka podataka",
        "Tehnički support povezuje se na daljinu",
      ],
      why3Title: "Nadgledanje",
      why3: [
        "Praćenje prometa po lokacijama, djelatnicima, sadržajima",
        "Online stanje prometa po različitim kriterijima",
        "Kontrola rada djelatnika",
        "Promptno reagiranje na pad prodaje",
      ],
      testimonialsTitle: "Naši partneri o nama",
      ctaTitle: "Dogovorite sve na vrijeme.",
      ctaSub: "Pravovremena priprema ništa ne košta — samo vas oslobađa stresa. Javite nam što iznajmljujete, koliko lokacija imate, i dobit ćete neobvezujuću ponudu u najkraćem roku.",
      ctaButton: "Pošaljite upit",
      ctaGhost: "Ispuni obrazac",
      phoneStory: {
        eyebrow: "Aplikacija u akciji",
        title: "Od prvog klika do fiskalnog računa — u par sekundi.",
        steps: [
          { title: "Sve na jednom ekranu", body: "Promet, ponude i nadglednik — pregled cijelog dana čim otvorite aplikaciju." },
          { title: "Brz izbor iz kataloga", body: "Pretraga, kategorije i česti artikli — odaberite stavku u sekundi." },
          { title: "Fiskalizirajte u dva klika", body: "Gotovina ili kartica, popusti i napojnica — potpis i slanje na Poreznu." },
          { title: "Gotovo — račun poslan", body: "JIR, ZKI i kopija računa odmah. Cijeli ciklus bez čekanja." },
        ],
      },
    },
    pos: {
      eyebrow: "TAKUIN POS · Mobilna blagajna",
      title: "Brzo, jednostavno i sigurno izdavanje računa u hodu.",
      sub: "Fiskalna blagajna koja stane u ruku — Android uređaj i bluetooth štampač je sve što trebate za rad na terenu.",
      ctaPrimary: "Zatražite ponudu",
      ctaGhost: "Pogledajte cjenik",
      features: [
        {
          t: "Jednostavnost", b: [
            "Jednostavno korištenje i editiranje",
            "Brzo izdavanje i fiskaliziranje računa",
            "Izdavanje R1 i R2 računa",
            "Samo Android uređaj i Bluetooth štampač",
          ]
        },
        {
          t: "Sigurnost", b: [
            "Svi podaci u oblaku, dostupni online",
            "Tehnička podrška na daljinu",
            "U slučaju gubitka uređaja poslovanje sačuvano",
            "Offline rad: automatska fiskalizacija po povratku mreže",
          ]
        },
        {
          t: "Povjerenje", b: [
            "Razvijeno s partnerima s terena",
            "U primjeni od uvođenja fiskalizacije u RH",
            "Nabavka hardwarea — kompletno rješenje",
            "25+ godina razvoja poslovnih sustava",
          ]
        },
      ],
    },
    rent: {
      eyebrow: "TAKUIN RENT MANAGER · Park",
      title: "Jednostavan rad na terenu i praćenje od bilo kuda.",
      sub: "Sustav od dvije Android aplikacije za izdavanje računa i organizaciju rada + web i mob aplikacija za administraciju i online monitoring najma.",
      ctaPrimary: "Zatražite ponudu",
      ctaGhost: "Pogledajte cjenik",
    },
    port: {
      eyebrow: "TAKUIN PORT · Lučko poslovanje",
      title: "Web i Android aplikacija za lučko poslovanje.",
      sub: "Apps za luke i sidrišta — pristojbe, plovila, komercijalno praćenje zauzetosti mjesta. Izdavanje i fiskaliziranje računa, online monitoring.",
      ctaPrimary: "Zatražite ponudu",
      ctaGhost: "Pogledajte cjenik",
    },
    poskok: {
      eyebrow: "POSKOK · Desktop blagajna",
      title: "Moderna desktop blagajna za ugostiteljstvo i trgovinu.",
      sub: "Provjereno rješenje u primjeni diljem Hrvatske. 20+ godina na tržištu, 400+ korisnika, kompletna administracija poslovanja.",
      ctaPrimary: "Zatražite ponudu",
      ctaGhost: "Pogledajte cjenik",
    },
    about: {
      eyebrow: "O nama",
      title: "TAKUIN razvijaju Mali Mol i ADRINAUT.",
      sub: "Dva tima, jedna misija — praktična poslovna rješenja razvijena zajedno s partnerima na terenu.",
      maliMolRole: "Software development",
      maliMolDesc: "Tvrtka Mali Mol bavi se programiranjem i razvojem softverskih rješenja. Direktor tvrtke Mali Mol d.o.o., Bernard Čupić, dipl. ing. brodogradnje i software developer, više od 30 godina radi na projektiranju i razvoju softverskih rješenja koji su u širokoj primjeni na tržištima brodogradnje, izolaterske industrije, te usluga u turizmu i ugostiteljstvu. Softverska rješenja koja razvija mijenjaju i unapređuju način rada te tvrtkama donose tržišnu prednost.",
      adrinautRole: "Business development & consulting",
      adrinautDesc: "Adrinaut se bavi unapređenjem poslovanja tvrtki, razvojem brandova, projekata i poslovnom digitalnom oblikovanju tvrtki. Vlasnica tvrtke Adrinaut Sanja Vale Čupić, dipl. oec i brand manager, broji više od 20g. poslovne aktivnosti u području savjetovanja, organizacije poslovanja, razvoja inovacija, proizvoda i usluga te kreiranja i razvoja brendova. Kroz izradu planova i strategija razvoja pomaže tvrtkama u jačanju digitalne vidljivosti, postizanju konkurentske prednosti i ostvarivanju profitabilnijeg poslovanja.",
    },
    pricing: {
      monthly: "mjesečno",
      yearly: "godišnje",
      onetime: "jednokratno",
      order: "Naruči",
      inquire: "Pošalji upit",
      note: "Sve istaknute cijene su krajnje prodajne. Nismo u sustavu PDV-a pa isti ne obračunavamo. Uređaji su vaši, a aplikacije koristite onoliko mjeseci koliko vam trebaju.",
    },
    faq: {
      title: "Često postavljana pitanja",
    },
    footer: {
      about: "Adrinaut business development & software solutions — razvijamo poslovne i informacijske sustave od 1999. godine.",
      productsCol: "Proizvodi",
      companyCol: "Tvrtka",
      supportCol: "Podrška",
      companyAbout: "O nama",
      companyPrivacy: "Politika privatnosti",
      supportContact: "Kontakt",
      supportDocs: "Upute za rad",
      supportInquiry: "Pošalji upit",
      rights: "© 2026 Adrinaut. Sva prava pridržana.",
      builtWith: "Poslovanje u hodu od 1999.",
    },
  },
  en: {
    nav: {
      home: "Home",
      pos: "TAKUIN POS",
      rent: "TAKUIN RENT",
      port: "TAKUIN PORT",
      poskok: "POSKOK",
      about: "About us",
      signin: "My profile",
      cta: "Request a quote",
    },
    tagline: "Business on the go",
    home: {
      heroEyebrow: "Business systems since 1999",
      heroTitle: ["Business", "on the go."],
      heroSub: "TAKUIN apps bring POS, rentals, port authority and desktop cashiering into one system — for the businesses that run in the field.",
      heroCtaPrimary: "Request a quote",
      heroCtaGhost: "See the products",
      heroMeta: "From €20/mo · No contract · Pay only for months you work",
      trustUsers: "users",
      trustYears: "years in market",
      trustDev: "years developing business systems",
      productsEyebrow: "Four products",
      productsTitle: "One system for everything you run.",
      productsSub: "From a fast mobile POS to a complete port-authority back office — pick the app that matches your workflow.",
      productPosTag: "Mobile POS",
      productPosTitle: "TAKUIN POS",
      productPosDesc: "Fast, simple, secure receipts on the move. A fiscal register that runs on an Android device with a Bluetooth printer.",
      productRentTag: "Rentals",
      productRentTitle: "TAKUIN RENT",
      productRentDesc: "Field operations and online rental monitoring — from sunbeds and bikes to jet skis and pedal boats.",
      productPortTag: "Port operations",
      productPortTitle: "TAKUIN PORT",
      productPortDesc: "Web + Android apps for port authorities and anchorages — fees, vessels, berth occupancy at a glance.",
      productPoskokTag: "Desktop POS",
      productPoskokTitle: "POSKOK",
      productPoskokDesc: "A modern desktop POS for hospitality and retail — in use across Croatia for 20+ years.",
      productCta: "Explore",
      whyTitle: "Why TAKUIN?",
      whySub: "All apps share the same logic — one system, several products, one support line.",
      why1Title: "Organized on the field",
      why1: [
        "Fast issuing and fiscalizing of receipts",
        "No papers, notebooks or lost records",
        "RFID reader for quick reads",
        "Issue offers and turn them into invoices",
      ],
      why2Title: "Security",
      why2: [
        "All data stored in the cloud",
        "Online access anytime, anywhere",
        "Device loss — no data loss",
        "Remote technical support",
      ],
      why3Title: "Monitoring",
      why3: [
        "Track revenue by location, staff, inventory",
        "Online status by any criteria",
        "Staff performance oversight",
        "React quickly to sales dips",
      ],
      testimonialsTitle: "Our partners, in their words",
      ctaTitle: "Plan ahead. Stay calm.",
      ctaSub: "Preparing on time costs nothing — and spares you the stress. Tell us what you rent and how many locations you have; we'll send a no-obligation quote.",
      ctaButton: "Send inquiry",
      ctaGhost: "Fill the form",
      phoneStory: {
        eyebrow: "The app in action",
        title: "From the first tap to a fiscal receipt — in seconds.",
        steps: [
          { title: "Everything on one screen", body: "Revenue, offers and oversight — your whole day at a glance the moment you open the app." },
          { title: "Fast pick from the catalog", body: "Search, categories and frequent items — select a product in a second." },
          { title: "Fiscalize in two taps", body: "Cash or card, discounts and tips — signed and sent to the tax authority." },
          { title: "Done — receipt delivered", body: "JIR, ZKI and a receipt copy instantly. The whole cycle, no waiting." },
        ],
      },
    },
    pos: {
      eyebrow: "TAKUIN POS · Mobile POS",
      title: "Fast, simple, secure receipts on the move.",
      sub: "A fiscal register that fits in your hand — Android device and bluetooth printer is all you need to work in the field.",
      ctaPrimary: "Request a quote",
      ctaGhost: "See pricing",
      features: [
        {
          t: "Simplicity", b: [
            "Easy to use and edit",
            "Fast issuing and fiscalizing of receipts",
            "R1 and R2 invoices",
            "Just an Android device and a Bluetooth printer",
          ]
        },
        {
          t: "Security", b: [
            "All data in the cloud, available online",
            "Remote technical support",
            "Device lost — business saved",
            "Offline mode: auto-fiscalization when back online",
          ]
        },
        {
          t: "Trust", b: [
            "Developed with field partners",
            "In market since fiscalization launched in Croatia",
            "We source hardware too — turnkey solution",
            "25+ years of business system development",
          ]
        },
      ],
    },
    rent: {
      eyebrow: "TAKUIN RENT MANAGER · Park",
      title: "Simple field work, monitored from anywhere.",
      sub: "A system of two Android apps for billing and field organization + web & mobile apps for admin and live rental monitoring.",
      ctaPrimary: "Request a quote",
      ctaGhost: "See pricing",
    },
    port: {
      eyebrow: "TAKUIN PORT · Port operations",
      title: "Web and Android apps for port authorities.",
      sub: "Apps for ports and anchorages — mooring fees, vessels, commercial berth monitoring. Fiscal receipts, online oversight.",
      ctaPrimary: "Request a quote",
      ctaGhost: "See pricing",
    },
    poskok: {
      eyebrow: "POSKOK · Desktop POS",
      title: "A modern desktop POS for hospitality and retail.",
      sub: "A proven solution used across Croatia. 20+ years on market, 400+ customers, complete business administration.",
      ctaPrimary: "Request a quote",
      ctaGhost: "See pricing",
    },
    about: {
      eyebrow: "About us",
      title: "TAKUIN is built by Mali Mol and ADRINAUT.",
      sub: "Two teams, one mission — practical business software built with partners in the field.",
      maliMolRole: "Software development",
      maliMolDesc: "Mali Mol is a software development company. CEO Bernard Čupić, naval architect and software developer, has over 30 years of experience in designing and developing software solutions widely used in shipbuilding, insulation, and tourism. The software solutions he develops transform business processes and provide companies with a competitive edge.",
      adrinautRole: "Business development & consulting",
      adrinautDesc: "Adrinaut focuses on business development, brand creation, and digital transformation. Owner Sanja Vale Čupić, economist and brand manager, has over 20 years of experience in consulting, business organization, and innovation. Through strategic planning, she helps companies strengthen their digital presence and achieve more profitable operations.",
    },
    pricing: {
      monthly: "monthly",
      yearly: "yearly",
      onetime: "one-time",
      order: "Order",
      inquire: "Inquire",
      note: "All listed prices are final retail prices. We are not VAT registered so no VAT is applied. Devices are yours; apps are billed per month of actual use.",
    },
    faq: {
      title: "Frequently asked questions",
    },
    footer: {
      about: "Adrinaut business development & software solutions — building business and information systems since 1999.",
      productsCol: "Products",
      companyCol: "Company",
      supportCol: "Support",
      companyAbout: "About us",
      companyPrivacy: "Privacy policy",
      supportContact: "Contact",
      supportDocs: "Documentation",
      supportInquiry: "Send inquiry",
      rights: "© 2026 Adrinaut. All rights reserved.",
      builtWith: "Business on the go since 1999.",
    },
  },
};

// Current language — persisted
const getLang = () => (localStorage.getItem("takuin_lang") || "hr");
const setLang = (l) => {
  localStorage.setItem("takuin_lang", l);
  window.dispatchEvent(new CustomEvent("takuin:lang", { detail: l }));
  // ScrollTrigger/ScrollSmoother moraju refreshati sve trigger pozicije nakon
  // promjene jezika jer se visina sadržaja mijenja.
  setTimeout(() => window.dispatchEvent(new CustomEvent("takuin:relayout")), 50);
};

function useLang() {
  const [lang, setL] = React.useState(getLang());
  React.useEffect(() => {
    const h = (e) => setL(e.detail);
    window.addEventListener("takuin:lang", h);
    return () => window.removeEventListener("takuin:lang", h);
  }, []);
  return [lang, DICT[lang]];
}

window.DICT = DICT;
window.useLang = useLang;
window.getLang = getLang;
window.setLang = setLang;
