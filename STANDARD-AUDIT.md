# Standard Audit: Caleb Arlow (calebarlow.com)

Tracks this project against the Website Build Standard (`About Me/Website-Build-Standard.md`). One row per pillar. Status values: pass, fail, fixed, waived, not yet run. No site reaches the Deployment norm with an open Critical in any pillar.

Last updated: 2026-06-27 (retrofit scaffold, this site has no SECURITY-AUDIT.md yet; run `/web:security` first, then the rest).

| # | Pillar | Status | Note |
|---|--------|--------|------|
| 1 | Security | not yet run | No SECURITY-AUDIT.md yet. Run `/web:security` and create one. |
| 2 | Privacy | not yet run | Contact form (and likely signup) collect email. Complete DATA-MAP with `/web:privacy`. See `DATA-MAP.md`. |
| 3 | Consent & Analytics | not yet run | Run `/web:consent`. |
| 4 | UI & Design System | not yet run | Run `/web:ui`. |
| 5 | Terms & Legal | not yet run | Run `/web:legal` (privacy + ToS, footer links). |
| 6 | Accessibility | not yet run | Run `/web:a11y`. |
| 7 | Tech Stack Norms | pass | Astro on Cloudflare. Deploy per Deployments.md. |

## Open items
- Run `/web:security` and create SECURITY-AUDIT.md (Pillar 1).
- Add privacy policy naming the email provider; complete DATA-MAP (Pillar 2/5).

## How to run
Full pass: `/web:audit`. Single pillar: `/web:security`, `/web:privacy`, `/web:consent`, `/web:ui`, `/web:legal`, `/web:a11y`. Update this table as each is run.
