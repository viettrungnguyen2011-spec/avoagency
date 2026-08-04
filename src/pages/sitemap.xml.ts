import type { APIRoute } from 'astro';

// Sitemap sinh lúc build. Dùng Astro.site nên tự ăn theo PUBLIC_SITE_URL,
// không cần sửa tay khi đổi domain.
export const GET: APIRoute = ({ site }) => {
  const base = site?.href.replace(/\/$/, '') ?? '';
  const today = new Date().toISOString().split('T')[0];

  // Mỗi mục là một cặp trang vi/en của cùng một nội dung.
  // Thêm trang mới thì thêm một dòng ở đây.
  const pages = [
    { vi: '/', en: '/en/', priority: '1.0', changefreq: 'monthly' },
    {
      vi: '/chinh-sach-bao-mat/',
      en: '/en/privacy-policy/',
      priority: '0.3',
      changefreq: 'yearly',
    },
  ];

  const urls = pages
    .flatMap(({ vi, en, priority, changefreq }) =>
      [vi, en].map(
        (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="vi" href="${base}${vi}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${base}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${base}${vi}"/>
  </url>`
      )
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
