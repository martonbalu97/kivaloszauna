# Kiváló Szauna

TanStack Start + React application prepared for deployment to Vercel.

## Requirements

- Node.js 22.x
- npm

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vercel uses the Nitro Vite plugin to build the TanStack Start server as Vercel Functions. The repository includes `vercel.json` to make framework detection explicit.

## Deploy from GitHub

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected **TanStack Start** framework preset.
4. Use the default build settings detected by Vercel.
5. Deploy. Pushes to the production branch will trigger production deployments; other branches create previews.

## Environment variables

No Supabase environment variables are required. Add future server-side secrets (for example, `RESEND_API_KEY` when email sending is implemented) in Vercel Project Settings → Environment Variables. Never commit `.env` files or put private keys in variables prefixed with `VITE_`.

## Important asset migration note

Some gallery images are currently represented by `.jpg.asset.json` files that point to Lovable-only `/__l5e/assets-v1/...` paths. The original image binaries are not included in this source archive. Those images must be downloaded from the Lovable project and copied into this repository (for example, under `public/images/`), then their references updated before the Vercel site can display every gallery image.
