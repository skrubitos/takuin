# TAKUIN

Statička marketinška stranica za TAKUIN — platformu za poslovanje u hodu (hrvatsko tržište).

## Struktura

- **HTML stranice** u rootu — jedna po sekciji:
  - [index.html](index.html) — početna
  - [pos.html](pos.html), [port.html](port.html), [rent.html](rent.html), [poskok.html](poskok.html) — proizvodi
  - [about.html](about.html), [kontakt.html](kontakt.html)
- [styles/](styles/) — `foundations.css` (varijable/tipografija), `site.css` (layout), `phone.css` (mockup telefona)
- [components/](components/) — `Nav.jsx`, `PhoneMock.jsx`, `Pieces.jsx`, `i18n.jsx` (JSX komponente, reference unutar HTML-a)
- [assets/](assets/) — logotipi/SVG
- [uploads/](uploads/) — screenshotovi stranica

## Tehnologija

Čisti HTML + CSS, bez build sustava. `package-lock.json` je prazan (nema npm ovisnosti). Jezik sadržaja: hrvatski (`lang="hr"`).

## Proizvodi (TAKUIN ekosustav)

- **TAKUIN POS** — blagajnički sustav
- **TAKUIN PORT** — portirski/recepcijski modul
- **TAKUIN RENT** — iznajmljivanje u turizmu
- **POSKOK** — desktop blagajna

## Konvencije

- Sve stranice dijele iste tri CSS datoteke iz [styles/](styles/)
- Stranica-specifični stilovi idu u `<style>` blok unutar pojedinog HTML-a (vidi [index.html](index.html))
- Držati tekstove i UI kopiju na hrvatskom

## Održavanje ove datoteke

Ovaj CLAUDE.md se ažurira nakon svake veće promjene u projektu (nova stranica/proizvod, promjena strukture foldera, uvođenje build alata, promjena tehnologije). Male izmjene sadržaja/stila ne zahtijevaju ažuriranje.
