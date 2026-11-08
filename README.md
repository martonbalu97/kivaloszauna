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

No Supabase environment variables are required.

### Resend contact form

The contact form sends submissions server-side through the Resend HTTP API:

- From: `Kiváló Szauna <noreply@kivaloszauna.hu>`
- To: `info@kivaloszauna.hu`
- Reply-To: the email address entered by the visitor

Before enabling delivery:

1. Add and verify `kivaloszauna.hu` in the Resend dashboard.
2. Publish the DNS records Resend provides (typically SPF and DKIM; follow the exact records shown in your Resend account).
3. Create a Resend API key with permission to send email.
4. In Vercel → Project → Settings → Environment Variables, add `RESEND_API_KEY` for Production (and Preview if desired).
5. Redeploy the project after adding or changing the variable.

For local testing, copy `.env.example` to `.env` and put the real key in `RESEND_API_KEY`. Never commit `.env` files or expose the key through a `VITE_` variable. The key is read only by the server-side contact function.

## Local image assets

All images are imported directly from `src/assets` using Vite asset imports. The former `.asset.json` sidecar files and Lovable `/__l5e/assets-v1/` URLs are no longer used. The `finn-sauna-retouched` image is stored as a PNG (`finn-sauna-retouched.png`).
