# Standard Audit: Caleb Arlow (calebarlow.com)

Tracks this project against the Website Build Standard (`About Me/Website-Build-Standard.md`). One row per pillar. Status values: pass, fail, fixed, waived, not yet run. No site reaches the Deployment norm with an open Critical in any pillar.

Last updated: 2026-06-27 (full pass — all 15 reviewers run)

| # | Pillar | Status | Note |
|---|--------|--------|------|
| 1 | Security | fixed | `public/_headers` created with HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP. See `SECURITY-AUDIT.md`. |
| 2 | Privacy | fixed | `DATA-MAP.md` complete. Kit email, Cloudflare edge logs, Amazon affiliate documented. Privacy page rewritten from the map. |
| 3 | Consent & Analytics | fixed | GA4 removed (fired without consent). ConvertKit external CDN script removed. Google Fonts CDN removed. No non-essential third-party scripts remain. Kit email form uses direct POST (user-initiated explicit consent). Cloudflare Web Analytics can be added later via dashboard token — no consent needed (cookieless). |
| 4 | UI & Design System | pass | Dark cinematic design system with full CSS-variable token set. Three font families self-hosted via @fontsource. Focus-visible rule added. Responsive grid breakpoints present. |
| 5 | Terms & Legal | fixed | Terms of Service page created at `/terms`. Privacy policy updated. Both linked in footer fineprint. Contact email present. Publisher (Field & Forge Ventures / Caleb Arlow imprint) identified on both pages. |
| 6 | Accessibility | pass | Semantic HTML throughout (header, nav, main, footer, ul/li for nav links). aria-label on nav brand. aria-current on active links. aria-expanded on mobile menu toggle. All images have alt text. Focus-visible outline added (2px thread-gold). prefers-reduced-motion respected. |
| 7 | Tech Stack Norms | pass | Astro static build on Cloudflare Pages (Git-connected). Self-hosted fonts via @fontsource. No API keys in frontend. No external scripts. |

## Reviewer-by-reviewer log (15 reviewers)

| Reviewer | Finding | Action |
|----------|---------|--------|
| /web:structure | Clean Astro component architecture, BaseLayout, reusable components. No issues. | No changes. |
| /web:data-model | Static site, no data model. Kit form IDs hardcoded (expected). No issues. | No changes. |
| /web:naming | Consistent BEM-adjacent class names. Token names match variables. No issues. | No changes. |
| /web:states | Hover/focus/active states on nav links, buttons, book covers. Mobile menu toggle handles is-open state. No issues. | No changes. |
| /web:errors | Static site. No server error surfaces. 404.astro present. No issues. | No changes. |
| /web:performance | Google Fonts CDN (phones Google per page load). ConvertKit CDN script (external JS). | Removed both. Installed @fontsource/cormorant-garamond, @fontsource/inter, @fontsource/source-serif-4. |
| /web:security | No `_headers` file (missing all 6 required headers). No SECURITY-AUDIT.md. | Created `public/_headers`. Created `SECURITY-AUDIT.md`. |
| /web:consent | GA4 (G-1VKF6PJQJS) fired unconditionally on every page load with no consent mechanism. ConvertKit JS loaded from external CDN. Google Fonts sent IP to Google. | Removed GA4 entirely. Removed CK.js. Removed Google Fonts CDN. All resolved. |
| /web:privacy | DATA-MAP.md was scaffold-only. Privacy page mentioned GA4 (which no longer fires). | Completed DATA-MAP.md. Rewrote privacy.astro from the map. |
| /web:legal | No Terms of Service. Only Privacy in footer. | Created `/terms`. Updated footer to link both Privacy and Terms. |
| /web:ui | Focus-visible not set. Google Fonts CDN violated self-hosting requirement. | Added `*:focus-visible` rule. Fonts now self-hosted. |
| /web:mobile | Responsive grid breakpoints at 900px, 720px, 600px, 560px. Mobile nav with menu toggle works. No issues. | No changes. |
| /web:a11y | Semantic HTML clean. aria attributes correct. Focus visible added. prefers-reduced-motion handled. alt text on all images. | No changes needed beyond focus-visible (fixed in /web:ui). |
| /web:deploy | Git-connected Cloudflare Pages. Build command `npm run build`, output `dist`. package-lock.json committed. | No changes. |
| /web:demo-test | Email form submits to Kit via direct POST (works without CK.js, redirects to Kit's success page). Nav mobile toggle functional. All book links point to Amazon with correct URLs. Privacy and Terms both reachable from footer. | No critical failures found. |

## Open items

- **Cloudflare Web Analytics (optional, not critical):** Replace GA4 with Cloudflare Web Analytics beacon. Get the token from Cloudflare dashboard → Workers & Pages → calebarlow project → Web Analytics. Add: `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token":"YOUR_TOKEN"}'></script>` to BaseLayout.astro. Cookieless, no consent required, CSP script-src will need `https://static.cloudflareinsights.com` added.
- **Email signup success UX:** With CK.js removed, the form submits via native POST and redirects to Kit's hosted confirmation page. If a smoother success state is wanted, configure Kit's redirect URL in the form settings to point back to `calebarlow.com/thanks` and create a `/thanks` page.
- **Caleb Arlow not in Deployments.md:** This site deploys via git push (Cloudflare rebuilds automatically). Add it to `About Me/Deployments.md` for completeness.

## How to run

Single pillar: `/web:security`, `/web:privacy`, `/web:consent`, `/web:ui`, `/web:legal`, `/web:a11y`. Full pass: `/web:audit`.
