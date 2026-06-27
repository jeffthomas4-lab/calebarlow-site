# Data Map: Caleb Arlow (calebarlow.com)

Pillar 2 (Privacy) of the Website Build Standard. Every piece of personal data this app touches, where it lives, who it goes to, how long it is kept, and how it gets deleted. The privacy policy is written from this file. If it is not listed here, the policy must not claim it.

Last updated: 2026-06-27 (retrofit scaffold, confirm and complete with `/web:privacy`).

## Data home
Static Astro site. No first-party database noted. Email captured by a third-party provider via the contact/signup form.

## Personal data collected
- Newsletter / signup email addresses (handled by the email provider).
- Contact-form submissions (name, email, message).
- IP / request logs (Cloudflare edge, default).

## Third parties (data leaves the site)
- Email service provider (newsletter/signup form). Confirm which one and whether it sells/shares data; it should not. Add it to the consent allow-list.
- Cloudflare (hosting, edge logs).

## Retention
TO CONFIRM, set a window per data type. Run `/web:privacy`.

## Deletion path
TO CONFIRM, for each store above (live DB, backups, analytics, logs), document how a deletion request purges it. A delete that clears one table and leaves copies is not a delete. Run `/web:privacy`.
