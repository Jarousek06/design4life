# Design 4 Life — web

Web pro **Design 4 Life** (interiérový design, čalounictví a bytové dekorace).
Next.js (App Router) + Tailwind. Doména v metadatech: `design-4life.cz`.

> **Stav: nezačato.** `web/app/page.tsx` je zatím výchozí šablona z `create-next-app`,
> reálný obsah webu ještě není napsaný. Rozpracovaná je jen komponenta
> `components/ui/Navbar.tsx`.

## Struktura

```
design4life/
├── web/               Next.js aplikace
│   ├── app/           stránky, layout, fonty (Playfair Display, DM Sans, Cormorant Garamond)
│   └── package.json
└── components/        sdílené komponenty mimo web/ (Navbar)
```

## Lokální vývoj

```bash
cd design4life/web
npm install
npm run dev
```

## TODO

- [ ] Skutečný obsah stránek (teď je tam jen výchozí Next.js šablona)
- [ ] Propojit/přesunout `components/` do `web/`
- [ ] Reálné fotky a texty od klienta
