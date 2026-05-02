# calebarlow.com

Astro static site for Caleb Arlow, author of The Pairing series.

Same stack as coachjeffthomas: Astro 4, hand-rolled CSS, deploys to Cloudflare Pages from `dist/`.

---

## Run it locally

You need Node.js 20 or newer. If you don't have it: https://nodejs.org (LTS).

Open Terminal and paste:

```
cd "$HOME/Desktop/Claude Cowork/OUTPUTS/Caleb Arlow/site"
npm install
npm run dev
```

`npm install` takes about a minute the first time. Then `npm run dev` starts a local server at http://localhost:4321 — open that in your browser. Edits to anything under `src/` reload automatically.

Stop the server with `Ctrl+C`.

## Build for deploy

```
npm run build
```

Static output goes to `dist/`. That's the folder Cloudflare Pages serves.

---

## Things to do before going live

There are five small swaps. Each is a single change. None require any code knowledge.

### 1. Set the live Amazon URL for Thread of White

Search the project for `REPLACE_WITH_THREAD_OF_WHITE_AMAZON_URL` and paste the real URL in its place. It appears in two files:

- `src/pages/index.astro`
- `src/pages/books/thread-of-white.astro`

### 2. Wire the ConvertKit (Kit) form

Open `src/components/EmailSignup.astro`. Find these two lines near the top:

```js
const KIT_FORM_ACTION = 'https://app.kit.com/forms/REPLACE_FORM_ID/subscriptions';
const KIT_DATA_UID    = 'REPLACE_DATA_UID';
```

In your Kit dashboard, create the form, click Embed, choose the HTML option. The form action URL contains a number; that goes in `KIT_FORM_ACTION`. The `data-uid` attribute goes in `KIT_DATA_UID`. Also replace `data-sv-form="REPLACE_FORM_ID"` in the same file with the same number.

That's it. The form will start collecting subscribers.

### 3. Set the Google Analytics ID (optional)

Open `src/layouts/BaseLayout.astro`. Find:

```js
const GA_MEASUREMENT_ID = '';
```

Paste your GA4 Measurement ID (looks like `G-XXXXXXXXXX`) inside the quotes. The script only loads in production, so dev traffic stays out of your analytics.

### 4. Set the contact email

Two files have `hello@calebarlow.com` as a placeholder. Search and replace if you want a different address.

- `src/pages/contact.astro`
- `src/pages/privacy.astro`

### 5. Buy a domain

We talked about this. Three options worth buying:

- **calebarlow.com** — clean, author-name-as-domain, works long-term
- **thepairingseries.com** — series-as-domain, more searchable for the books
- **readthepairing.com** — call-to-action domain, leans into the marketing angle

Recommendation: register all three, point them all at the site, set calebarlow.com as the primary. Use Cloudflare Registrar (cheapest, no upsell) or Namecheap. About $10/year each.

Once registered, point the domain's nameservers at Cloudflare and add it as a custom domain in Cloudflare Pages. That's a 5-minute task.

---

## Deploy to Cloudflare Pages

Same flow as your other Astro sites:

1. Push this folder to a new GitHub repo (`calebarlow-site` or similar).
2. Go to Cloudflare Pages → Create project → Connect to Git → pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click Deploy. First build takes about 90 seconds.

Cloudflare gives you a free `*.pages.dev` URL right away. Once a real domain is registered, add it under Custom domains.

---

## What's where

```
src/
  layouts/
    BaseLayout.astro          page shell (head, fonts, nav, footer, slot)
  components/
    Nav.astro                 top nav with active-page state and mobile menu
    Footer.astro              site footer
    PageHero.astro            inner-page hero (eyebrow, h1, lead, optional actions)
    BookCard.astro            cover + title + blurb + Amazon CTA, used on home and /books
    ComingNext.astro          faceless cover-tease block for Book 4
    EmailSignup.astro         ConvertKit/Kit embed (form ID swap-ready)
  pages/
    index.astro               homepage
    books/
      index.astro             books grid
      thread-of-gold.astro    Book 1 detail
      thread-of-silver.astro  Book 2 detail
      thread-of-white.astro   Book 3 detail
    the-pairing.astro         series world overview, four-arc structure, reading order
    contact.astro             email + newsletter, faceless author note
    privacy.astro             privacy policy
    404.astro
    sitemap.xml.ts            hand-rolled sitemap
  styles/
    global.css                design tokens (gold/silver/white thread accents) + base styles
public/
  covers/
    thread-of-gold.png
    thread-of-silver.png
    thread-of-white.png
  favicon.svg                 thread-cross brand mark
  robots.txt
```

---

## Updating the site as books release

When Book 4 launches:

1. Drop the cover PNG into `public/covers/` (e.g. `pairing-underground.png`).
2. Add a new page at `src/pages/books/the-pairing-underground.astro`. Copy `thread-of-white.astro` as a template and rewrite the copy.
3. In `src/pages/index.astro` and `src/pages/books/index.astro`, replace the `<ComingNext>` block with a `<BookCard>` for Book 4 and add a new `<ComingNext>` for Book 5.
4. In `src/pages/the-pairing.astro`, update the reading-list rows.
5. Update the sitemap: add the new URL to `src/pages/sitemap.xml.ts`.
6. Push to main. Cloudflare deploys automatically.

That's it. Same pattern for every release.
