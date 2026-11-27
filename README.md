# ARVA MULTIVERSE

A responsive Next.js creative studio website for ARVA MULTIVERSE.

Production URL: https://arva-multiverse.onrender.com

## Local development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

## Render deployment

This repository includes `render.yaml` for a Node web service. Connect this repository to Render and deploy using the Blueprint, or configure:

- Runtime: Node
- Build: `npm install && npm run build`
- Start: `npm run start`
- Health check: `/`

## Before launch

Update the placeholder contact email `hello@arvamultiverse.com` in `app/page.tsx` and replace the illustrative work cards with actual client work. The contact CTA currently opens the visitor's email application; no form backend is configured.
