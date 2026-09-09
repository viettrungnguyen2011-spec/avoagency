# AVO AGENCY — Website

Website song ngữ Việt–Anh cho AVO AGENCY, xây bằng **Astro** (Node.js), xuất ra
file tĩnh để chạy trên **Hostinger shared hosting**.

| Trang | Tiếng Việt | Tiếng Anh |
| --- | --- | --- |
| Trang chủ | `/` | `/en/` |
| Chính sách quyền riêng tư | `/chinh-sach-bao-mat/` | `/en/privacy-policy/` |

---

## Mục lục

1. [Yêu cầu](#1-yêu-cầu)
2. [Chạy thử trên máy](#2-chạy-thử-trên-máy)
3. [Sửa nội dung chữ](#3-sửa-nội-dung-chữ)
4. [Đổi màu thương hiệu](#4-đổi-màu-thương-hiệu)
5. [Kết nối form](#5-kết-nối-form-bắt-buộc-trước-khi-lên-sóng)
6. [Build ra file tĩnh](#6-build-ra-file-tĩnh)
7. [Đưa lên Hostinger](#7-đưa-lên-hostinger)
8. [Đưa lên GitHub](#8-đưa-lên-github)
9. [Cấu trúc thư mục](#9-cấu-trúc-thư-mục)
10. [Checklist trước khi lên sóng](#10-checklist-trước-khi-lên-sóng)

---

## 1. Yêu cầu

- **Node.js 18.20.8 trở lên** — tải tại [nodejs.org](https://nodejs.org/)
- Một tài khoản Hostinger có gói hosting bất kỳ (Premium/Business/Cloud đều được)

Kiểm tra Node đã cài chưa:

```bash
node --version
```

---

## 2. Chạy thử trên máy

Lần đầu, cài thư viện:

```bash
npm install
```

Sau đó chạy máy chủ phát triển:

```bash
npm run dev
```

Mở trình duyệt vào `http://localhost:4321`. Sửa file nào lưu lại là trang tự
cập nhật ngay, không cần tải lại.

---

## 3. Sửa nội dung chữ

**Toàn bộ chữ trên website nằm trong đúng một file:**

```
src/i18n/ui.ts
```

File này chia làm hai khối lớn: `vi` (tiếng Việt) và `en` (tiếng Anh). Sửa chữ
trong dấu nháy là xong, **không cần đụng vào file `.astro` nào cả**.

Thông tin liên hệ nằm ở đầu file, trong biến `contact`:

```ts
export const contact = {
  email: 'ceo@avo.com.vn',
  hotline: '0879.679.555',
  ...
};
```

Những chỗ đặt trong ngoặc vuông như `[Tên khách hàng]` là nội dung mẫu cần bạn
thay bằng thông tin thật.

### Chính sách quyền riêng tư

Nội dung chính sách nằm riêng ở `src/i18n/privacy.ts` (dài nên tách ra cho đỡ
rối). Cấu trúc mỗi mục:

```ts
{
  id: 'ma-muc',        // dùng cho link neo #ma-muc, đừng đổi nếu đã chia sẻ link
  title: 'Tên mục',
  blocks: [
    { type: 'p', text: 'Một đoạn văn.' },
    { type: 'list', items: ['Gạch đầu dòng 1', 'Gạch đầu dòng 2'] },
  ],
}
```

Sửa nội dung xong nhớ đổi luôn `updated: '2026-08-04'` ở đầu mỗi bản ngôn ngữ —
ngày này hiện trên trang.

> **Bản tiếng Anh là bản dịch tham khảo.** Trang tiếng Anh có sẵn dòng ghi chú
> nói rõ bản tiếng Việt mới là bản có giá trị pháp lý. Đừng xoá dòng đó trừ khi
> bạn đã có bản tiếng Anh được luật sư duyệt.

---

## 4. Đổi màu thương hiệu

Màu hiện tại **đã lấy trực tiếp từ file logo gốc** bằng cách đếm tần suất pixel,
nên không cần chỉnh gì. Nếu sau này đổi nhận diện, chỉ sửa khối này:

```
src/styles/tokens.css   →   phần ":root" đầu file
```

```css
--brand-gold: #e0c080; /* vàng champagne — chữ "AV" */
--brand-gold-deep: #c0a050; /* đáy gradient vàng */
--brand-blue: #0090e0; /* xanh vòng xoáy + nút play */
--brand-navy: #0040b0; /* cung navy bên phải chữ O */
--brand-cyan: #00c8f0; /* điểm sáng nhất vòng xoáy */
```

Đổi 5 dòng này, toàn bộ website đổi màu theo.

> **Lưu ý về độ tương phản:** vàng `#E0C080` rất đẹp trên nền tối nhưng đặt trên
> nền sáng thì gần như không đọc được (tỉ lệ ~1.7:1, chuẩn tối thiểu là 4.5:1).
> Vì vậy trong `tokens.css` có khối `.invert` tự hạ vàng xuống tông đậm hơn khi
> dùng trên nền sáng. Đừng xoá khối đó.

---

## 5. Kết nối form (bắt buộc trước khi lên sóng)

Website này là **file tĩnh**, không có máy chủ chạy phía sau, nên form không tự
gửi email được. Phải nối vào một dịch vụ trung gian. Cả hai dịch vụ dưới đây
đều **miễn phí** ở mức dùng cơ bản.

### Đang dùng: Web3Forms — **đã cấu hình xong**

Form hiện đã nối vào Web3Forms. Email gửi về địa chỉ đã đăng ký Access Key.

Cấu hình nằm trong file `.env` ở thư mục gốc (file này **không** được đẩy lên
GitHub):

```
PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
PUBLIC_WEB3FORMS_KEY=<access key của bạn>
```

> **Vì sao để key trong `.env` mà không dán thẳng vào code?** Access Key của
> Web3Forms bắt buộc phải nằm trong HTML thì form mới chạy, nên nó không phải bí
> mật tuyệt đối. Nhưng để trong `.env` thì nó không bị đẩy lên repo GitHub công
> khai, tránh bị máy quét tự động nhặt và spam.

Nếu cần đổi key: sửa `.env` rồi chạy lại `npm run build`.

**Chống spam có hai lớp:** một ô ẩn được kiểm ở phía trình duyệt trước khi gửi,
và một ô `botcheck` do Web3Forms tự lọc ở phía máy chủ.

### Lead về hộp thư nào?

**`cmo.avo@gmail.com`** — không phải `ceo@avo.com.vn`.

Web3Forms gói miễn phí gửi thư về **email đã dùng để tạo Access Key**, chứ không
gửi tới địa chỉ khách điền trong ô "Email" của form. Ô đó chỉ là địa chỉ người
gửi, dùng để bạn bấm Reply trả lời khách.

Muốn đổi hộp thư nhận: tạo Access Key mới ở web3forms.com bằng email khác, rồi
thay `PUBLIC_WEB3FORMS_KEY` trong `.env` và chạy lại `npm run build`.

### Vì sao không dùng email @avo.com.vn?

Đã thử và thất bại. Access Key đầu tiên đăng ký bằng `ceo@avo.com.vn` (hộp thư
đặt tại Mắt Bão). Web3Forms xác nhận gửi thành công (`success: true`) nhưng thư
**không tới Inbox lẫn Spam** — bị chặn ngay ở tầng máy chủ.

Đây là chuyện thường gặp: các nhà cung cấp mail Việt Nam lọc rất gắt thư giao
dịch gửi từ dịch vụ nước ngoài. Đổi sang Gmail là xong.

> **Nên làm ngay trong Gmail:** tạo một bộ lọc cho thư có tiêu đề
> "Yêu cầu tư vấn mới từ website AVO AGENCY", đặt nhãn riêng và tick
> **"Never send it to Spam"**. Không làm bước này thì vài tháng nữa Gmail có thể
> tự động đẩy lead vào Spam mà bạn không biết.

### Nếu sau này muốn lead về thẳng @avo.com.vn

Phải chuyển sang dịch vụ gửi thư bằng chính domain của mình — Resend hoặc
SendGrid — và cấu hình bản ghi SPF, DKIM cho `avo.com.vn`. Khi thư đi từ chính
domain của bạn thì Mắt Bão không có lý do gì chặn. Cách này tốn công thiết lập
DNS nhưng đúng đắn về lâu dài.

Đừng xin Mắt Bão whitelist IP của Web3Forms: dịch vụ này gửi từ nhiều IP và có
thể đổi bất cứ lúc nào, whitelist hôm nay mai lại hỏng.

### Phương án thay thế — Formspree

1. Vào [formspree.io](https://formspree.io/), đăng ký và tạo một form mới
2. Copy URL dạng `https://formspree.io/f/xxxxxxx`
3. Tạo file `.env` ở thư mục gốc dự án:

   ```
   PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```

### Kiểm tra

Chạy `npm run dev`, điền thử form và bấm gửi. Nếu chưa cấu hình, form sẽ hiện
dòng cảnh báo màu vàng thay vì gửi đi — đó là hành vi cố ý để bạn không vô tình
đưa website lên mạng với form chết.

> Nếu dùng dịch vụ khác Formspree/Web3Forms, nhớ thêm domain của dịch vụ đó vào
> dòng `Content-Security-Policy` trong `public/.htaccess`, mục `connect-src` và
> `form-action`. Không thêm thì trình duyệt sẽ chặn.

---

## 6. Build ra file tĩnh

Trước khi build, tạo file `.env` (nếu chưa có) và đặt domain thật:

```
PUBLIC_SITE_URL=https://avo.com.vn
PUBLIC_FORM_ENDPOINT=...
```

Domain này dùng cho canonical URL, sitemap và ảnh chia sẻ mạng xã hội. Để sai
thì Google và Facebook sẽ trỏ nhầm.

Sau đó:

```bash
npm run build
```

Kết quả nằm trong thư mục **`dist/`**. Xem thử bản build:

```bash
npm run preview
```

---

## 7. Đưa lên Hostinger

### Bước 1 — Trỏ domain và bật SSL

1. Đăng nhập hPanel của Hostinger
2. Vào **Domains** → trỏ tên miền về hosting
3. Vào **Security → SSL** → bật SSL miễn phí (chờ vài phút cho chứng chỉ cấp xong)

Phải bật SSL **trước**, vì file `.htaccess` có lệnh ép chuyển sang HTTPS. Bật
sau thì trang sẽ lỗi vòng lặp chuyển hướng.

### Bước 2 — Upload

Vào **Files → File Manager**, mở thư mục `public_html`.

1. Xoá hết file mẫu Hostinger tạo sẵn (thường có `default.php` hoặc `index.html`)
2. Ở máy bạn, vào thư mục `dist/`, chọn **toàn bộ nội dung bên trong** rồi nén
   thành một file `.zip`

   > Nén **nội dung bên trong** `dist/`, không nén cả thư mục `dist`. Nén sai thì
   > website sẽ nằm ở `avo.com.vn/dist/` thay vì ở gốc.

3. Upload file zip vào `public_html`
4. Chuột phải file zip → **Extract**
5. Xoá file zip đi

### Bước 3 — Kiểm tra file .htaccess

File Manager mặc định **ẩn file bắt đầu bằng dấu chấm**. Bấm vào biểu tượng
**Settings** (góc trên bên phải) → bật **Show hidden files**.

Xác nhận có file `.htaccess` trong `public_html`. Không có thì upload thủ công
từ `dist/.htaccess`.

### Bước 4 — Kiểm tra kết quả

Mở `https://avo.com.vn`. Kiểm tra:

- Trang chủ tiếng Việt hiện đúng, chữ có dấu đầy đủ
- `https://avo.com.vn/en/` ra bản tiếng Anh
- `https://avo.com.vn/khong-ton-tai` ra trang 404 của AVO
- Gửi thử form và kiểm tra email

> **Nếu gặp lỗi 500 Internal Server Error:** gói hosting của bạn tắt một module
> Apache nào đó. Đổi tên `.htaccess` thành `.htaccess.bak`, tải lại trang. Nếu
> hết lỗi thì mở file ra, xoá dần từng khối `<IfModule>` để tìm khối gây lỗi.

### Cập nhật website sau này

Chạy lại `npm run build`, rồi upload lại nội dung `dist/` đè lên `public_html`.

---

## 8. Đưa lên GitHub

Dự án đã có sẵn `.gitignore` loại trừ `node_modules/`, `dist/` và `.env`.

```bash
git init
git add .
git commit -m "AVO AGENCY website"
git branch -M main
git remote add origin https://github.com/TEN_CUA_BAN/avo-agency.git
git push -u origin main
```

> **File `.env` không bao giờ được push lên GitHub.** Nó chứa endpoint form của
> bạn. `.gitignore` đã chặn sẵn, nhưng đừng tự ý thêm nó vào.

---

## 9. Cấu trúc thư mục

```
avo-agency/
├── public/                  # copy nguyên vẹn vào dist/ khi build
│   ├── .htaccess            # cấu hình Apache cho Hostinger
│   ├── brand/               # logo, favicon, ảnh chia sẻ mạng xã hội
│   └── fonts/               # font tự host (.woff2)
├── src/
│   ├── components/          # từng khối giao diện
│   │   ├── Header.astro     # thanh điều hướng + menu mobile
│   │   ├── Hero.astro       # khối đầu trang
│   │   ├── Marquee.astro    # dải chữ chạy ngang
│   │   ├── Problems.astro   # "Bạn đang gặp khó khăn này?"
│   │   ├── Services.astro   # 5 dịch vụ
│   │   ├── Why.astro        # 4 điểm khác biệt
│   │   ├── Process.astro    # 5 bước hợp tác
│   │   ├── Audience.astro   # khách hàng + lời kết
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── LegalDoc.astro   # khung hiển thị văn bản pháp lý + mục lục
│   │   └── Icon.astro       # bộ icon SVG dùng chung
│   ├── i18n/
│   │   ├── ui.ts            # >>> TOÀN BỘ CHỮ TRANG CHỦ NẰM Ở ĐÂY <<<
│   │   └── privacy.ts       # nội dung chính sách quyền riêng tư
│   ├── layouts/Base.astro   # khung HTML, thẻ meta, SEO
│   ├── pages/
│   │   ├── index.astro                 # trang chủ tiếng Việt (/)
│   │   ├── chinh-sach-bao-mat.astro    # chính sách, tiếng Việt
│   │   ├── en/index.astro              # trang chủ tiếng Anh (/en/)
│   │   ├── en/privacy-policy.astro     # chính sách, tiếng Anh
│   │   ├── 404.astro
│   │   ├── robots.txt.ts
│   │   └── sitemap.xml.ts
│   └── styles/
│       ├── tokens.css       # >>> MÀU, FONT, KHOẢNG CÁCH <<<
│       ├── global.css       # reset + thành phần dùng chung
│       └── fonts.css        # sinh tự động, đừng sửa tay
├── astro.config.mjs
└── package.json
```

---

## 10. Checklist trước khi lên sóng

- [x] ~~Đổi `PUBLIC_SITE_URL` trong `.env` thành domain thật~~ → `https://avo.com.vn`
- [x] ~~Kết nối form~~ → Web3Forms
- [x] ~~Gửi thử form~~ → Web3Forms xác nhận gửi thành công, lead về `cmo.avo@gmail.com`
- [ ] Tạo bộ lọc Gmail cho thư lead, tick "Never send it to Spam"
- [x] ~~Thay `facebookHref` trong `src/i18n/ui.ts` bằng link Facebook thật~~
- [ ] Rà lại toàn bộ nội dung trong `src/i18n/ui.ts` — đặc biệt các chỗ trong `[ ]`
- [ ] Bật SSL trên Hostinger **trước khi** upload
- [x] ~~Chọn dùng `www` hay không~~ → đã bật chuyển hướng về bản **không có www**
- [ ] Kiểm tra trên điện thoại thật, không chỉ thu nhỏ cửa sổ trình duyệt
- [ ] Gửi link vào Zalo/Facebook xem ảnh chia sẻ hiện đúng
- [ ] Khai báo website với [Google Search Console](https://search.google.com/search-console)
      và nộp `sitemap.xml`

---

## Ghi chú kỹ thuật

**Vì sao là Astro mà không phải Next.js?** Hostinger shared hosting không chạy
được Node.js server. Astro xuất ra HTML thuần, gần như không kèm JavaScript, nên
chạy được trên mọi gói hosting và tải rất nhanh. Dự án vẫn là dự án Node.js đầy
đủ để phát triển và đẩy lên GitHub.

**Vì sao font để trong `public/fonts` mà không gọi Google Fonts?** Tự host thì
không phải chờ kết nối tới máy chủ Google (thường chậm ở Việt Nam), không lộ IP
người truy cập sang bên thứ ba, và không bị ảnh hưởng nếu Google Fonts bị chặn.
Ba font đang dùng — Bricolage Grotesque, Inter, JetBrains Mono — đều đã được
kiểm tra là **có đầy đủ bộ dấu tiếng Việt** trước khi chọn.

**Muốn thêm trang mới?** Tạo file trong `src/pages/`. Ví dụ `src/pages/bang-gia.astro`
sẽ thành `avo.com.vn/bang-gia/`. Nhớ tạo bản tiếng Anh tương ứng trong
`src/pages/en/` và thêm vào `src/pages/sitemap.xml.ts`.
