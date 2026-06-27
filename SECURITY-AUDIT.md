# Security Audit: Caleb Arlow (calebarlow.com)

Pillar 1 of the Website Build Standard. 11-item Pre-Launch Security Gate. Status per item: pass, fail, fixed, waived.

Last updated: 2026-06-27

| # | Item | Status | Note |
|---|------|--------|------|
| 1 | Privacy policy and known data home | pass | Privacy policy at /privacy. Data-MAP.md documents email (Kit) and Cloudflare edge logs. |
| 2 | No client-side database access | pass | Static site. No D1/KV/R2. No database at all. |
| 3 | Auth failure paths tested | waived | No auth on this site. Static public content only. |
| 4 | Security headers baseline | fixed | `public/_headers` created: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, CSP. |
| 5 | OWASP pass | pass | Static Astro site. No user input processed server-side. Email form POSTs directly to Kit's servers. No injection surface. |
| 6 | Server-side validation | waived | No server routes. Kit handles email validation on their end. |
| 7 | No leaked data in bundle, API responses, or console.log | pass | No API keys in build output. GA4 removed. Google Fonts CDN removed. |
| 8 | No API keys in frontend | pass | No API keys used. Amazon affiliate tag is public by design. |
| 9 | Rate limits on paid endpoints | waived | No paid API endpoints. Static site. |
| 10 | Turnstile on public forms, CORS locked | waived | Email form POSTs to Kit (third-party server, not our Worker). No Worker routes to CORS-lock. Turnstile would require a Worker; not warranted for this simple signup. Monitor for spam and add if needed. |
| 11 | Error messages do not leak | pass | Static site. No server-generated error responses with stack traces. |

## Open items

None — all critical items are passing or appropriately waived for a static site with no auth and no server routes.

## Notes

- Site is Cloudflare Pages, static Astro build. No Workers, no D1, no KV. The threat surface is very low.
- The email signup form (Kit/ConvertKit) submits directly to `https://app.kit.com` — Kit's infrastructure handles validation and storage. The CSP `form-action https://app.kit.com` directive locks this.
- If a Worker is added in the future (e.g. for a contact form proxy), re-run items 2, 6, 9, 10, and 11.
