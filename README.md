# WePushX - site vitrine (refonte 2026)

Next.js 16 (App Router) · Tailwind v4 · Motion 13 · Lenis. Français, dark editorial, logo vectorisé.

## Lancer

```bash
npm install
cp .env.example .env.local   # renseigner les variables
npm run dev                  # http://localhost:3000
npm run build && npm start   # prod locale
```

## Structure

| Chemin | Rôle |
|---|---|
| `src/lib/content.ts` | **Tous les textes** (services, tarifs, témoignages, FAQ...). Modifier ici, pas dans les composants |
| `src/lib/legal.json` | Mentions légales + confidentialité migrées de l'ancien site |
| `public/cgv.pdf` | CGV (PDF de l'ancien site) |
| `src/components/brand/` | Logo SVG (tracé depuis le logo officiel), animation de balayage |
| `src/components/sections/` | Sections de la home + pages |
| `src/components/layout/` | Header, footer, preloader, curseur, Lenis, bouton WhatsApp |
| `src/app/api/lead/route.ts` | Réception du formulaire, relais vers `LEAD_WEBHOOK_URL` |

## Tracking

- GTM chargé si `NEXT_PUBLIC_GTM_ID` est défini.
- Événements `dataLayer` :
  - `generate_lead` (formulaire envoyé) : `event_id` (UUID, pour dédup Pixel / CAPI), `service`, `budget`, `plan`
  - `whatsapp_click` (bouton flottant)
  - `cta_click` : `cta` = `hero_audit`, `header_audit`, `pricing_growth`, `final_audit`...
- Le formulaire transmet aussi les `utm_*`, `gclid` et `fbclid` présents dans l'URL au webhook.

## Animations

Preloader (1 fois par session), titres révélés ligne par ligne, logo en balayage diagonal, parallaxe du hero,
manifeste révélé mot à mot au scroll, bandeaux dont la vitesse suit le scroll, aperçus services qui suivent
le curseur, méthode en scroll horizontal épinglé, compteurs, prix animés, badge garantie rotatif, curseur custom.
Tout est désactivé avec `prefers-reduced-motion`.
