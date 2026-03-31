<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3125ea99-753c-492f-80ea-f6db71f4f25e

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the app: `npm run dev` (opens on port 3000)

## Deploy to Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket) and import the project in [Vercel](https://vercel.com).
2. Use the default settings: **Install** `npm install`, **Build** `next build`, **Output** managed by Next.js.
3. **Environment variables:** Add secrets only in the Vercel project dashboard when your app reads them on the **server** (for example in a [Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)). Do **not** use the `NEXT_PUBLIC_` prefix for API keys you must keep private—those are exposed in the browser bundle.
