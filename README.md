# SiteSprint (React + Vite)

Frontend-only marketing site voor **SiteSprint**. Geen backend: contact via [Formspree](https://formspree.io) (`@formspree/react`).

## Lokaal draaien

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

### Problemen met `npm install` op Windows?

Als je `tar ENOENT`, `TAR_ENTRY_ERROR` of “corrupted tarball” ziet: vaak komt dat door **OneDrive**, **virusscanner** of een **te lange padnaam** op `node_modules`.

1. Verwijder `node_modules` en probeer opnieuw:  
   `Remove-Item -Recurse -Force node_modules`  
   daarna `npm cache clean --force` en `npm install`
2. Clone of kopieer het project naar een **korte map** (bijv. `C:\dev\sitesprint`).
3. **GitHub Actions** bouwt op Linux; daar zou `npm install` gewoon moeten slagen (zie workflow).

## Formspree

Formulier-ID: `mqegzovw` (in `Contact.jsx`). Voeg in het Formspree-dashboard eventueel een **custom field** toe met de naam `branche`, zodat “Type bedrijf” netjes in je mail staat.

## GitHub Pages

- Workflow staat in **`docs/github-pages-deploy.yml`**: kopieer naar `.github/workflows/deploy.yml` (zie **`docs/NIEUWE_REPO_EN_ONLINE.md`**).
- **`vite.config.js` → `base`**: `"/"` voor **custom domain** (`public/CNAME` → `sitesprint.eu`).  
  Project-URL `https://<user>.github.io/<repo>/` → zet dan `base: "/<repo>/"`.

## Logo & favicon

- **`public/logo.png`** — M&N-merklogo (navbar, footer, favicon via `index.html`).
- Optioneel: `public/favicon.svg` als secundair icoon.

## Demo-routes (HashRouter)

- `/#/` — homepage  
- `/#/demos/fitness`  
- `/#/demos/restaurant`  
- `/#/demos/barber`  

## Structuur

```
src/
  App.jsx
  main.jsx
  index.css
  pages/Home.jsx
  components/     # Navbar, Hero, secties, Contact, Footer
  demos/          # Fitness, Restaurant, Barber + DemoChrome
public/
  previews/       # SVG previews voor demo-cards
  CNAME
```
