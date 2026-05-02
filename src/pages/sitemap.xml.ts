import type { APIRoute } from 'astro';

const SITE = 'https://calebarlow.com';

const urls = [
  '/',
  '/books',
  '/books/thread-of-gold',
  '/books/thread-of-silver',
  '/books/thread-of-white',
  '/the-pairing',
  '/faq',
  '/press',
  '/contact',
  '/privacy',
];

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${SITE}${u}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
