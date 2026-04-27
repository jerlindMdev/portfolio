# Jerlind Medina — Portfolio

Built with React + Vite. No external UI libraries — pure React with inline styles.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Build for production
npm run build
```

## Project structure

```
portfolio/
├── index.html          ← HTML entry point
├── vite.config.js      ← Vite config
├── package.json
└── src/
    ├── main.jsx        ← React root
    └── App.jsx         ← Entire portfolio (single file)
```

## How to customize

All your content is in the `data` object at the top of `App.jsx`.
Update your name, projects, experience, and contact info there.
No need to touch the component code — just edit the data.

## Sections

1. **Hero** — Name, role, summary, stats
2. **Work** — Project cards (add screenshots to replace placeholders)
3. **Stack** — Tech skills grouped by category
4. **Experience** — Job history timeline
5. **Contact** — Dark box with all contact links

## Deployment options

- **Vercel** (recommended): `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist/` folder after `npm run build`
- **GitHub Pages**: Push to repo, enable Pages in settings

## Adding project screenshots

Replace the placeholder boxes in the Work section by adding:
```jsx
<img src="/screenshots/maxwell.png" alt="Maxwell Leadership website" style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 6 }} />
```

Put your screenshot images in the `public/screenshots/` folder.

## Fonts used

- DM Serif Display — headings (Google Fonts, free)
- DM Mono — labels, tags, nav (Google Fonts, free)
- DM Sans — body text (Google Fonts, free)
