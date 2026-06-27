# Data Map: Caleb Arlow (calebarlow.com)

Pillar 2 (Privacy) of the Website Build Standard. Every piece of personal data this site touches, where it lives, who it goes to, how long it is kept, and how it gets deleted.

Last updated: 2026-06-27

## Site type

Static Astro site on Cloudflare Pages. No first-party database. No server routes. No cookies set by the site itself.

---

## Personal data collected

### 1. Newsletter email addresses

- **Collected by:** The email signup form on the homepage and any page with the EmailSignup component.
- **Where it goes:** Kit (formerly ConvertKit) — `app.kit.com`. The form POSTs directly to Kit's servers.
- **Purpose:** Sending book release announcements and related updates.
- **Retention:** Held by Kit until the subscriber unsubscribes or requests deletion.
- **Deletion path:** Subscriber clicks "Unsubscribe" in any email. Address is removed from Kit immediately. For manual deletion requests, email authorcalebarlow@gmail.com and we will remove the address from Kit within 30 days.
- **Does Kit sell this data?** No. Kit is an email platform; subscriber data is not shared or sold to third parties.
- **Data leaves the site?** Yes — to Kit.

### 2. Cloudflare edge request logs

- **Collected by:** Cloudflare (the hosting provider), automatically.
- **What is logged:** IP address, URL requested, timestamp, HTTP status, browser user-agent string. Standard web server logs.
- **Purpose:** Infrastructure operation, DDoS protection, abuse detection.
- **Retention:** Per Cloudflare's data retention policies (typically 72 hours for free/pro plans).
- **Access:** We do not have access to individual visitor records. Cloudflare may share aggregated analytics in the dashboard (page views, countries).
- **Deletion path:** Governed by Cloudflare's retention schedule. No individual deletion path available to us.
- **Data leaves the site?** Yes — to Cloudflare (our hosting provider).

---

## Third parties (data flows)

| Vendor | What they receive | Sells/shares data? | Policy |
|--------|------------------|--------------------|--------|
| Kit (ConvertKit) | Email addresses of newsletter subscribers | No | kit.com/privacy |
| Cloudflare | Edge request logs (IP, URL, timestamp, UA) | No | cloudflare.com/privacypolicy |
| Amazon (affiliate links) | Click events tracked by Amazon's own infrastructure when user navigates to Amazon.com | Amazon's own policy | amazon.com/privacy |

---

## What we do NOT collect

- Behavioral analytics (removed GA4)
- Cookies (none set by this site)
- Device fingerprints
- Location data beyond country-level from Cloudflare edge
- Contact form submissions (no contact form — the contact page links to email directly)

---

## Consent allow-list

| Vendor | Purpose | Requires consent? | Notes |
|--------|---------|-------------------|-------|
| Kit | Newsletter delivery | No — user actively opts in by submitting the form | Form submission is explicit consent |
| Cloudflare | Hosting/edge | No — necessary for the site to function | |

---

## Retention summary

| Data type | Retention | Governed by |
|-----------|-----------|-------------|
| Newsletter emails (Kit) | Until unsubscribe or deletion request | Kit + us |
| Cloudflare edge logs | ~72 hours (Cloudflare default) | Cloudflare |

---

## Deletion pipeline

1. **Newsletter email:** Subscriber unsubscribes via email link (immediate) or emails authorcalebarlow@gmail.com (we remove from Kit within 30 days).
2. **Cloudflare edge logs:** Auto-purged per Cloudflare's retention schedule. No manual action required from us.
3. **Amazon affiliate tracking:** Governed by Amazon. We have no access to or control over Amazon's tracking data.
