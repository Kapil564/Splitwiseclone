# Splitr — Splitwise clone

A small Next.js + Convex app for splitting expenses, with email invites and Inngest tasks. This repository is a student project that demonstrates a modern full‑stack app using the Next App Router, Convex for serverless functions & data, and Resend / Nodemailer for email sending.

## What this repo contains

- `app/` — Next.js App Router pages and UI (React components, layouts, route handlers).
- `components/` — Reusable UI components used across the app.
- `convex/` — Convex server functions, queries and actions (database access live here).
- `lib/` — helper libraries (Inngest client, utility scripts, etc.).
- `hooks/` — React hooks (Convex client, auth helpers).
- `public/` — static assets and images.
- `styles` / `app/global.css` — global CSS with design tokens and utilities.
- `.env.local` / `.env` — local environment variables (not committed) used for local development.

## Tech stack / libraries used

- Next.js (App Router) — React framework for the frontend
- Convex — serverless functions, queries and database
- Inngest — background jobs / function orchestration
- Resend — email API (preferred for transactional email)
- Nodemailer — optional SMTP fallback for invites
- Clerk (optional) — auth provider integration with Convex
- Tailwind CSS — utility-first styling
- Lucide React — icons

## Project structure (high level)

```
app/
  ├─ dashboard/  # protected dashboard pages and components
  ├─ expenses/   # add & manage expenses
  └─ api/        # api routes (inngest route, webhooks)
components/
convex/          # Convex query/mutation/action functions
lib/             # helper clients (inngest, resend helpers)
hooks/
public/
app/global.css
.env.local
package.json
```

## Environment variables

Create a `.env.local` file in the repository root for local development (do not commit it). The app uses both Next and Convex; some variables are server-only and should not be exposed to the browser.

Required / recommended variables

- `RESEND_API_KEY` — Resend API key (server-side only). Used by Convex actions to send emails.
- `EMAIL_USER` / `EMAIL_PASS` — SMTP user/password (optional; for Nodemailer fallback).
- `CONVEX_DEPLOY_KEY` — Convex deployment key used for `npx convex dev` and deployments.
- `NEXT_PUBLIC_CONVEX_URL` — Convex cloud URL used by the client (safe to expose).
- `CLERK_JWT_ISSUER_DOMAIN` — (If Clerk is used) issuer domain for Convex auth.
- `NODE_ENV` — `development` or `production` (optional)

Example `.env.local` (local dev only)

```
NODE_ENV=development
NEXT_PUBLIC_CONVEX_URL=https://adept-mockingbird-647.convex.cloud
CONVEX_DEPLOY_KEY=prod:your-deploy-key-here
RESEND_API_KEY=re_your_resend_key_here
EMAIL_USER=your_smtp_user@example.com
EMAIL_PASS=your_smtp_password
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-issuer.domain
```

Security note: never commit `.env.local` or private keys. Only `NEXT_PUBLIC_*` keys are safe to use in client code.

## Local development

Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or yarn / pnpm)
- Convex CLI (installed automatically when running `npx convex`)

Steps

1. Install dependencies

```bash
npm install
```

2. Ensure environment variables are set in `.env.local` (see above)

3. Start Convex local dev (in one terminal)

```bash
npx convex dev
```

This runs the Convex development server which hosts your Convex functions locally. Convex reads environment variables from the environment where the command is run — if you set `.env.local` in the repo root, make sure your shell loads it (for example, by using a tool that loads `.env` or by exporting the vars in the shell).

4. Start the Next.js dev server (in a separate terminal)

```bash
npm run dev
```

5. Open the app at http://localhost:3000 and exercise the UI. When you trigger an invite (send email), check the terminal running Convex — the Convex action logs will show success or an error (e.g., missing RESEND_API_KEY).

## Email sending (Resend vs Nodemailer)

- The repository includes Convex actions that call Resend when `RESEND_API_KEY` is available. That key must be present in the environment where Convex runs (not the browser).
- There is also an invite API that uses SMTP (Nodemailer) if configured with `EMAIL_USER` / `EMAIL_PASS`.

If you see `undefined` for `process.env.RESEND_API_KEY` inside a Convex function:

- Make sure the key exists in `.env.local` or the shell used to run `npx convex dev`.
- Restart `npx convex dev` after changing env files.
- Add `console.log("RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);` temporarily in `convex/email.js` to verify presence.

Important: Do not try to access private keys from client-side code. The browser cannot and should not read `process.env.RESEND_API_KEY`.

## Deployment notes

- For production deployments on Vercel (or similar), add the environment variables in the Vercel project settings.
- For Convex Cloud, add the same secrets via the Convex dashboard or CLI so that Convex cloud functions can access them.

## Troubleshooting

- `RESEND_API_KEY` undefined: ensure Convex runtime sees the key and restart the Convex process.
- Convex auth `Not authenticated`: ensure requests that require auth have a valid user identity; some Convex queries were hardened to return safe defaults when unauthenticated.
- Inngest auto-scan / url_not_found: make sure http://localhost:3000/api/inngest is reachable while you run the Inngest dev UI.

## Contributing

If you'd like to contribute, fork the repo and open a pull request. Keep secrets out of PRs. Add tests for any non-trivial logic you change.

## License

This project is provided for educational/demo purposes. Add a license if you plan to share publicly (MIT is common for starters).
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
