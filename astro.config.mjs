// @ts-check
import { defineConfig } from 'astro/config';

// Đổi thành domain thật của bạn trước khi build production.
// Dùng cho sitemap, canonical URL và thẻ Open Graph.
const SITE = process.env.PUBLIC_SITE_URL || 'https://avo.com.vn';

export default defineConfig({
  site: SITE,

  // 'static' = xuất ra HTML/CSS/JS thuần trong dist/.
  // Đây là thứ upload lên Hostinger shared hosting.
  output: 'static',

  // 'directory' tạo /en/index.html thay vì /en.html
  // -> URL sạch (/en/) và Apache phục vụ được ngay, không cần rewrite.
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },

  // Nén HTML khi build. Shared hosting thường không bật Brotli,
  // nên cắt được byte nào tốt byte đó.
  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  devToolbar: {
    enabled: false,
  },
});
