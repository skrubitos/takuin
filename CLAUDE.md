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

## CTA i slanje upita

- Svi CTA gumbovi („Zatraži ponudu" i sl.) na svim stranicama vode na [kontakt.html](kontakt.html). Direktni `mailto:` linkovi više se ne koriste u CTA-ima (ostaje samo kao fallback u footeru kontakt stranice).
- Podstranice proizvoda prosljeđuju `?p=pos|rent|port|poskok` → obrazac u [kontakt.html](kontakt.html) unaprijed označi taj proizvod.
- `submit()` u [kontakt.html](kontakt.html) (5-koračni obrazac) sastavlja strukturirani `mailto:sanja@adrinaut.com` sa svim poljima i otvara korisnikov mail klijent. Nema backenda.

## Responzivnost (mobilni)

- Globalni smooth scroll + `scroll-padding-top: 72px` u [foundations.css](styles/foundations.css) (poštuje `prefers-reduced-motion`).
- Na ≤960px nav prikazuje samo hamburger (logo + burger). Jezik i CTA „Zatraži ponudu" sakriveni iz trake i dostupni unutar `.tk-mobile-menu`.
- `.tk-products` ostaje **2×2** i ispod 560px (kompaktniji padding/font).
- `.tk-pricing` na ≤640px postaje **horizontalni scroll carousel** sa scroll-snapom (kartice ~82% širine).
- `.tk-features-3` (sekcija „Zašto TAKUIN") na ≤860px je centriran: check ikona, naslov i bullet-stavke u sredini, točke uklonjene.

## Održavanje ove datoteke

Ovaj CLAUDE.md se ažurira nakon svake veće promjene u projektu (nova stranica/proizvod, promjena strukture foldera, uvođenje build alata, promjena tehnologije). Male izmjene sadržaja/stila ne zahtijevaju ažuriranje.
