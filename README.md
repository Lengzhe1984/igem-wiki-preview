# Project Wiki Preview

A lightweight Vite starter for building a public dry-run wiki on GitHub Pages before you move final content into an official host.

## What this starter is for

- Drafting a project story and page structure early
- Sharing a public preview link with teammates
- Testing layout for figures, PDFs, posters, and slide decks
- Keeping the final site static so migration later is easier

## Local development

```bash
cd igem-wiki-preview
nvm use
npm install
npm run dev
```

If you want to preview from another device on the same network:

```bash
npm run dev:host
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This project already includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

When this folder becomes its own GitHub repository:

1. Push it to a repo on GitHub.
2. In repo settings, open `Pages`.
3. Ensure the source is `GitHub Actions`.
4. Every push to `main` will build and deploy the site.

`vite.config.js` automatically uses the correct base path for:

- project sites like `https://username.github.io/repo-name/`
- user sites like `https://username.github.io/`

## Suggested content structure

- Home and project summary
- Methods and design notes
- Results, charts, and downloadable media
- Team, acknowledgements, and references

## Notes for future migration

- Keep assets static and well named.
- Prefer relative links.
- Do not put secrets in front-end code.
- Treat this repo as the rehearsal site, not the final submission host.
