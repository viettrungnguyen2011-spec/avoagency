// ============================================================================
// TOÀN BỘ CHỮ TRÊN WEBSITE NẰM Ở ĐÂY.
// Muốn sửa nội dung thì sửa file này, không đụng vào file .astro.
//
// Nguồn nội dung: "GIỚI THIỆU CÔNG TY AVO.docx".
// Chỗ nào cần bạn điền số liệu thật đều được đánh dấu [ ... ].
// ============================================================================

export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'vi';

/** Thông tin liên hệ dùng chung cho cả hai ngôn ngữ. */
export const contact = {
  email: 'ceo@avo.com.vn',
  hotline: '0879.679.555',
  hotlineHref: 'tel:+84879679555',
  zaloName: 'Nguyễn Việt Trung',
  zaloHref: 'https://zalo.me/0879679555',
  facebookHref: 'https://www.facebook.com/', // TODO: dán link Facebook thật
  tiktok: '@avo.agency',
  tiktokHref: 'https://www.tiktok.com/@avo.agency',
} as const;

export const ui = {
  vi: {
    meta: {
      title: 'AVO AGENCY — Đối tác chính thức TikTok Business | Làm xong mới thanh toán',
      description:
        'Chạy quảng cáo TikTok, gỡ shop bị đình chỉ/hạn chế đơn, cho thuê tài khoản ads uy tín và cung cấp tài nguyên TikTok Shop. Đối tác chính thức TikTok Business. Làm xong mới thanh toán — không làm được, không thu phí.',
      ogAlt: 'AVO AGENCY — Viral. Fast. Effective.',
    },

    nav: {
      problems: 'Vấn đề',
      services: 'Dịch vụ',
      why: 'Vì sao AVO',
      process: 'Quy trình',
      contact: 'Liên hệ',
      cta: 'Nhận tư vấn miễn phí',
      menuOpen: 'Mở menu',
      menuClose: 'Đóng menu',
      skip: 'Bỏ qua, tới nội dung chính',
    },

    hero: {
      badge: 'Đối tác chính thức TikTok Business & TikTok Shop',
      titleLead: 'Làm xong',
      titleAccent: 'mới thanh toán.',
      lede: 'Chạy quảng cáo TikTok, gỡ shop bị đình chỉ, cung cấp tài nguyên. Bạn chỉ trả tiền khi công việc hoàn thành. Không làm được thì không thu phí — đó là cách chúng tôi đặt cược vào chính mình.',
      ctaPrimary: 'Nhận tư vấn miễn phí',
      ctaSecondary: 'Xem dịch vụ',
      tagline: 'Viral. Fast. Effective.',
      trust: [
        'Đối tác chính thức TikTok Business',
        'Hàng ngàn shop đã đồng hành',
        'Hỗ trợ trực tiếp từ TikTok Việt Nam',
      ],
    },

    marquee: [
      'TIKTOK ADS',
      'GỠ SHOP BỊ KHÓA',
      'TÀI KHOẢN SIÊU TRÂU',
      'BUSINESS CENTER',
      'KẾT NỐI AM',
      'TIKTOK SHOP',
      'PRE-ORDER',
      'TƯ VẤN CHIẾN LƯỢC',
    ],

    problems: {
      eyebrow: 'Vấn đề',
      title: 'Bạn đang gặp những khó khăn này?',
      lede: 'Nếu bạn gật đầu với bất kỳ dòng nào bên dưới, bạn đã tìm đúng nơi giải quyết dứt điểm.',
      items: [
        {
          title: 'Muốn bán trên TikTok Shop nhưng không biết chạy ads',
          desc: 'Chưa có kinh nghiệm, không biết bắt đầu từ đâu, sợ đổ tiền vào rồi mất trắng.',
        },
        {
          title: 'Đã chạy ads nhưng chi phí quá cao, chuyển đổi thấp',
          desc: 'Tiền quảng cáo tăng đều mỗi tháng nhưng số đơn thì không nhúc nhích.',
        },
        {
          title: 'Shop bị đình chỉ, hạn chế đơn, đóng băng sản phẩm',
          desc: 'Khóa do vi phạm, do nghi ngờ gian lận, hoặc bị liên đới các shop đã die trước đó.',
        },
        {
          title: 'Lỗi xác thực giấy tờ, đình chỉ rút tiền',
          desc: 'Tiền nằm trong tài khoản mà không rút ra được, hồ sơ nộp mãi không qua.',
        },
        {
          title: 'Shop mới không được kết nối AM',
          desc: 'Không có quản lý tài khoản hỗ trợ, mất hết ưu đãi và quyền lợi dành cho nhà bán.',
        },
        {
          title: 'Cần đổi pháp nhân, mở Pre-order',
          desc: 'Những thao tác mà tự làm thì kẹt, gọi hỗ trợ thì không ai xử lý tới nơi.',
        },
      ],
    },

    services: {
      eyebrow: 'Dịch vụ',
      title: 'Năm mảng chúng tôi nhận làm.',
      lede: 'Không nhận mọi thứ. Năm mảng dưới đây là nơi chúng tôi có quan hệ, quy trình và kinh nghiệm thật sự.',
      items: [
        {
          num: '01',
          name: 'Chạy quảng cáo TikTok',
          desc: 'Tối ưu chi phí, gia tăng đơn hàng. Chúng tôi quản lý toàn bộ quy trình, bạn chỉ cần bán hàng.',
          points: [
            'Tối ưu chi phí quảng cáo, gia tăng đơn hàng',
            'Tăng lượt xem, follow, bình luận, chuyển đổi',
            'Chiến lược xây theo đúng ngân sách bạn có',
            'Quản lý trọn gói từ đầu đến cuối',
          ],
        },
        {
          num: '02',
          name: 'Xử lý vấn đề TikTok Shop',
          desc: 'Mảng khó nhất, và cũng là mảng nhiều agency khác không làm được. Chúng tôi biết cách.',
          points: [
            'Shop bị đình chỉ, hạn chế đơn, đóng băng sản phẩm',
            'Shop bị liên đới, lỗi xác thực giấy tờ',
            'Lỗi rút tiền hoặc đình chỉ rút tiền',
            'Đổi thông tin pháp nhân, mở Pre-order, kết nối AM',
          ],
        },
        {
          num: '03',
          name: 'Cho thuê tài khoản ads "siêu trâu"',
          desc: 'Tài khoản đã nuôi lâu, độ tin cậy cao, xác minh chính thống với nền tảng.',
          points: [
            'Chạy ads ngay, không lo hạn chế tài khoản',
            'Đã xác minh chính thống với nền tảng',
            'Kèm hỗ trợ tận tình trong suốt quá trình',
            'Phù hợp người mới bắt đầu chưa có kinh nghiệm',
          ],
        },
        {
          num: '04',
          name: 'Chia sẻ kiến thức & tư vấn',
          desc: 'Kinh nghiệm rút ra từ hàng nghìn shop đã làm việc cùng chúng tôi.',
          points: [
            'Chiến lược marketing phù hợp ngành hàng',
            'Cách tối ưu sản phẩm và chi phí quảng cáo',
            'Kinh nghiệm thực chiến, không lý thuyết suông',
          ],
        },
        {
          num: '05',
          name: 'Cung cấp tài nguyên quảng cáo',
          desc: 'Đầy đủ tài nguyên để bạn khởi động nhanh mà không vướng thủ tục.',
          points: [
            'Business Center (BC)',
            'Shop TikTok',
            'Kênh TikTok',
            'Ngân sách TikTok và nhiều tài nguyên khác',
          ],
        },
      ],
    },

    why: {
      eyebrow: 'Vì sao chọn AVO',
      title: 'Chúng tôi khác biệt ở đâu?',
      lede: 'Bốn điều dưới đây là lý do khách hàng ở lại, không phải lý do họ tìm đến.',
      items: [
        {
          num: '01',
          name: 'Chuyên gia TikTok thực thụ',
          points: [
            'Không chỉ chạy ads — chúng tôi hiểu sâu cách TikTok Shop vận hành',
            'Đối tác chính thức TikTok Business & TikTok Shop, mang về ưu đãi thật cho nhà bán',
            'Giải quyết được những vấn đề agency khác bó tay',
          ],
        },
        {
          num: '02',
          name: 'Mô hình thanh toán công bằng',
          highlight: true,
          points: [
            'Làm xong mới thanh toán — bạn chỉ trả tiền khi công việc hoàn thành',
            'Không làm được thì không thu phí',
            'Đây là cách chúng tôi thể hiện sự tự tin vào chất lượng dịch vụ',
          ],
        },
        {
          num: '03',
          name: 'Dịch vụ toàn diện',
          points: [
            'Từ cấp phát tài nguyên, chạy quảng cáo, đến chăm sóc shop',
            'Bạn chỉ cần tập trung vào sản phẩm và khách hàng',
            'Một đầu mối duy nhất, không phải chạy qua lại nhiều bên',
          ],
        },
        {
          num: '04',
          name: 'Đã chứng minh với hàng ngàn khách hàng',
          points: [
            'Shop bán hàng tăng vọt',
            'Chi phí quảng cáo giảm xuống',
            'Shop gặp vấn đề được giải quyết nhanh chóng',
          ],
        },
      ],
    },

    audience: {
      eyebrow: 'Khách hàng',
      title: 'Chúng tôi phục vụ ai?',
      items: [
        { name: 'Chủ shop TikTok Shop', desc: 'Muốn bán nhiều hơn, chi phí ít hơn' },
        { name: 'Ads thủ cá nhân', desc: 'Chạy quảng cáo để kiếm thu nhập' },
        { name: 'Chủ doanh nghiệp, chủ xưởng', desc: 'Muốn mở kênh bán hàng trực tuyến' },
        { name: 'Người mới bắt đầu', desc: 'Chưa có kinh nghiệm, cần người hướng dẫn' },
        { name: 'Chủ agency nhỏ', desc: 'Muốn hợp tác ăn chia, win-win' },
      ],
    },

    process: {
      eyebrow: 'Quy trình',
      title: 'Năm bước hợp tác.',
      lede: 'Rõ ràng từ đầu. Bạn biết chính xác mình đang ở đâu và khi nào phải trả tiền.',
      steps: [
        {
          num: '01',
          name: 'Trao đổi ban đầu',
          desc: 'Bạn liên hệ, mô tả tình hình kinh doanh và mục tiêu của mình.',
        },
        {
          num: '02',
          name: 'Phân tích tình hình',
          desc: 'Chúng tôi phân tích vấn đề và xác định giải pháp phù hợp.',
        },
        {
          num: '03',
          name: 'Kế hoạch & báo giá',
          desc: 'Đề xuất chiến lược cụ thể, chi phí rõ ràng, không phát sinh mập mờ.',
        },
        {
          num: '04',
          name: 'Thực hiện & báo cáo',
          desc: 'Chúng tôi làm việc và báo cáo tiến độ định kỳ cho bạn.',
        },
        {
          num: '05',
          name: 'Kết quả & thanh toán',
          desc: 'Công việc hoàn thành, kết quả đạt được, sau đó bạn mới thanh toán.',
          highlight: true,
        },
      ],
    },

    closing: {
      eyebrow: 'Lời kết',
      quote:
        'Chúng tôi không hứa hẹn điều phi thực tế, nhưng chúng tôi hứa sẽ làm hết sức mình để giúp bạn thành công.',
      attribution: 'AVO AGENCY',
    },

    form: {
      eyebrow: 'Liên hệ',
      title: 'Sẵn sàng phát triển kinh doanh trên TikTok?',
      lede: 'Mô tả tình hình của bạn, chúng tôi phản hồi kèm hướng xử lý cụ thể. Tư vấn miễn phí, không ràng buộc.',
      name: 'Họ và tên',
      namePlaceholder: 'Nguyễn Văn A',
      shop: 'Tên shop hoặc thương hiệu',
      shopPlaceholder: 'Shop của bạn trên TikTok',
      email: 'Email',
      emailPlaceholder: 'ban@email.com',
      phone: 'Số điện thoại / Zalo',
      phonePlaceholder: '09xx xxx xxx',
      phoneHelp: 'Có số Zalo thì chúng tôi phản hồi nhanh hơn nhiều.',
      need: 'Bạn cần hỗ trợ mảng nào?',
      needOptions: [
        'Chạy quảng cáo TikTok',
        'Gỡ shop bị đình chỉ / hạn chế',
        'Thuê tài khoản ads',
        'Mua tài nguyên (BC, Shop, Kênh)',
        'Tư vấn chiến lược',
        'Vấn đề khác',
      ],
      message: 'Mô tả tình hình hiện tại',
      messagePlaceholder:
        'Ví dụ: shop bán mỹ phẩm bị đình chỉ 2 tuần nay do nghi ngờ gian lận, đã kháng nghị 3 lần không được. Cần gỡ gấp.',
      submit: 'Gửi yêu cầu tư vấn',
      submitting: 'Đang gửi…',
      required: 'bắt buộc',
      optional: 'không bắt buộc',
      errName: 'Vui lòng nhập họ tên.',
      errEmail: 'Email chưa đúng định dạng.',
      errContact: 'Cần ít nhất email hoặc số điện thoại để chúng tôi liên hệ lại.',
      errMessage: 'Mô tả ngắn gọn giúp chúng tôi tư vấn sát hơn.',
      errSubmit: 'Gửi không thành công. Bạn thử lại, hoặc liên hệ trực tiếp qua hotline',
      successTitle: 'Đã nhận được yêu cầu.',
      successBody:
        'Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất. Nếu gấp, gọi thẳng hotline bên dưới.',
      notConfigured:
        'Form chưa được kết nối. Xem mục "Kết nối form" trong README.md để cấu hình trước khi đưa website lên mạng.',
      orDirect: 'Hoặc liên hệ trực tiếp',
    },

    footer: {
      tagline: 'Viral. Fast. Effective.',
      blurb:
        'Đối tác chính thức TikTok Business & TikTok Shop. Chạy quảng cáo, xử lý vấn đề shop và cung cấp tài nguyên cho nhà bán hàng TikTok.',
      contactTitle: 'Liên hệ',
      navTitle: 'Điều hướng',
      followTitle: 'Kênh chính thức',
      rights: 'Bảo lưu mọi quyền.',
      backToTop: 'Về đầu trang',
    },

    langSwitch: {
      label: 'Đổi ngôn ngữ',
      to: 'English',
      code: 'EN',
    },
  },

  en: {
    meta: {
      title: 'AVO AGENCY — Official TikTok Business Partner | Pay only when it works',
      description:
        'TikTok ads management, suspended-shop recovery, trusted ad account rental and TikTok Shop resources. Official TikTok Business partner. You pay after the job is done — no result, no fee.',
      ogAlt: 'AVO AGENCY — Viral. Fast. Effective.',
    },

    nav: {
      problems: 'Problems',
      services: 'Services',
      why: 'Why AVO',
      process: 'Process',
      contact: 'Contact',
      cta: 'Get free consultation',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      skip: 'Skip to main content',
    },

    hero: {
      badge: 'Official TikTok Business & TikTok Shop partner',
      titleLead: 'You pay',
      titleAccent: 'after it works.',
      lede: 'TikTok ads management, suspended-shop recovery, and seller resources. You pay once the job is done. No result, no fee — that is how we bet on ourselves.',
      ctaPrimary: 'Get free consultation',
      ctaSecondary: 'See services',
      tagline: 'Viral. Fast. Effective.',
      trust: [
        'Official TikTok Business partner',
        'Thousands of shops served',
        'Direct support line into TikTok Vietnam',
      ],
    },

    marquee: [
      'TIKTOK ADS',
      'SHOP RECOVERY',
      'HIGH-TRUST ACCOUNTS',
      'BUSINESS CENTER',
      'AM CONNECTION',
      'TIKTOK SHOP',
      'PRE-ORDER',
      'STRATEGY',
    ],

    problems: {
      eyebrow: 'Problems',
      title: 'Any of these sound familiar?',
      lede: 'If you nodded at any line below, you are in the right place.',
      items: [
        {
          title: 'Want to sell on TikTok Shop but cannot run ads',
          desc: 'No experience, no idea where to start, afraid of burning money for nothing.',
        },
        {
          title: 'Running ads, but costs are high and conversion is low',
          desc: 'Ad spend climbs every month while the order count refuses to move.',
        },
        {
          title: 'Shop suspended, orders restricted, products frozen',
          desc: 'Locked for a violation, for suspected fraud, or by association with shops that died before yours.',
        },
        {
          title: 'Document verification errors, withdrawals suspended',
          desc: 'Money sitting in the account that you cannot withdraw, paperwork that never clears.',
        },
        {
          title: 'New shop with no AM connection',
          desc: 'No account manager, so none of the seller perks or priority support reach you.',
        },
        {
          title: 'Need an entity change or Pre-order enabled',
          desc: 'The operations you get stuck on alone, and support tickets never resolve.',
        },
      ],
    },

    services: {
      eyebrow: 'Services',
      title: 'Five things we take on.',
      lede: 'We do not take everything. These five are where we have the relationships, the process, and real experience.',
      items: [
        {
          num: '01',
          name: 'TikTok ads management',
          desc: 'Cut cost per order, raise volume. We run the whole process; you just sell.',
          points: [
            'Lower ad cost, more orders',
            'More views, follows, comments, conversions',
            'Strategy built around the budget you actually have',
            'Managed end to end',
          ],
        },
        {
          num: '02',
          name: 'TikTok Shop problem resolution',
          desc: 'The hardest category, and the one most agencies cannot deliver. We can.',
          points: [
            'Suspended shops, restricted orders, frozen products',
            'Association bans and document verification failures',
            'Withdrawal errors and suspended payouts',
            'Entity changes, Pre-order enablement, AM connection',
          ],
        },
        {
          num: '03',
          name: 'High-trust ad account rental',
          desc: 'Long-warmed accounts with high platform trust, verified through official channels.',
          points: [
            'Start running immediately, no account limits',
            'Officially verified with the platform',
            'Hands-on support throughout',
            'Ideal for beginners with no track record',
          ],
        },
        {
          num: '04',
          name: 'Knowledge sharing & consulting',
          desc: 'Lessons drawn from the thousands of shops that have worked with us.',
          points: [
            'Marketing strategy matched to your category',
            'How to optimise listings and ad spend',
            'Field-tested experience, not theory',
          ],
        },
        {
          num: '05',
          name: 'Advertising resources',
          desc: 'Everything you need to start fast without getting stuck in paperwork.',
          points: [
            'Business Center (BC)',
            'TikTok Shops',
            'TikTok channels',
            'TikTok ad budget and other resources',
          ],
        },
      ],
    },

    why: {
      eyebrow: 'Why AVO',
      title: 'What makes us different?',
      lede: 'These four are why clients stay, not why they arrive.',
      items: [
        {
          num: '01',
          name: 'Genuine TikTok specialists',
          points: [
            'Not just ads — we understand how TikTok Shop actually operates',
            'Official TikTok Business & Shop partner, with real perks for sellers',
            'We solve the problems other agencies give up on',
          ],
        },
        {
          num: '02',
          name: 'A fair payment model',
          highlight: true,
          points: [
            'Pay after delivery — you are billed only when the work is done',
            'No result, no fee',
            'This is how we put our confidence on the line',
          ],
        },
        {
          num: '03',
          name: 'Full service',
          points: [
            'From resource provisioning to ad management to ongoing shop care',
            'You focus on the product and the customer',
            'One point of contact, not five vendors',
          ],
        },
        {
          num: '04',
          name: 'Proven with thousands of clients',
          points: ['Sales jump', 'Ad costs come down', 'Blocked shops get unblocked fast'],
        },
      ],
    },

    audience: {
      eyebrow: 'Who we serve',
      title: 'Our clients',
      items: [
        { name: 'TikTok Shop owners', desc: 'Want more sales at lower cost' },
        { name: 'Independent ad buyers', desc: 'Running ads as a source of income' },
        { name: 'Business and factory owners', desc: 'Opening an online sales channel' },
        { name: 'Complete beginners', desc: 'No experience, need someone to guide them' },
        { name: 'Small agency owners', desc: 'Looking for a win-win revenue share' },
      ],
    },

    process: {
      eyebrow: 'Process',
      title: 'Five steps.',
      lede: 'Clear from the start. You always know where you are and when payment is due.',
      steps: [
        {
          num: '01',
          name: 'First conversation',
          desc: 'You get in touch and describe your situation and your goals.',
        },
        {
          num: '02',
          name: 'Situation analysis',
          desc: 'We analyse the problem and identify the right solution.',
        },
        {
          num: '03',
          name: 'Plan and quote',
          desc: 'A specific strategy with clear costs. No vague extras later.',
        },
        {
          num: '04',
          name: 'Execution and reporting',
          desc: 'We do the work and report progress on a regular schedule.',
        },
        {
          num: '05',
          name: 'Result, then payment',
          desc: 'Work completed, result delivered, and only then do you pay.',
          highlight: true,
        },
      ],
    },

    closing: {
      eyebrow: 'In closing',
      quote:
        'We do not promise the unrealistic. We promise to do everything we can to help you succeed.',
      attribution: 'AVO AGENCY',
    },

    form: {
      eyebrow: 'Contact',
      title: 'Ready to grow on TikTok?',
      lede: 'Describe your situation and we reply with a concrete plan of action. Free consultation, no obligation.',
      name: 'Full name',
      namePlaceholder: 'Jane Nguyen',
      shop: 'Shop or brand name',
      shopPlaceholder: 'Your TikTok shop',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      phone: 'Phone / Zalo',
      phonePlaceholder: '+84 9xx xxx xxx',
      phoneHelp: 'A Zalo number gets you a much faster reply.',
      need: 'What do you need help with?',
      needOptions: [
        'TikTok ads management',
        'Suspended / restricted shop recovery',
        'Ad account rental',
        'Resources (BC, Shop, Channel)',
        'Strategy consulting',
        'Something else',
      ],
      message: 'Describe your current situation',
      messagePlaceholder:
        'E.g. our cosmetics shop has been suspended for two weeks over suspected fraud. Three appeals rejected. Need it recovered urgently.',
      submit: 'Send request',
      submitting: 'Sending…',
      required: 'required',
      optional: 'optional',
      errName: 'Please enter your name.',
      errEmail: "That email doesn't look right.",
      errContact: 'We need either an email or a phone number to reply.',
      errMessage: 'A short description helps us advise accurately.',
      errSubmit: 'Send failed. Please retry, or call our hotline directly',
      successTitle: 'Request received.',
      successBody:
        "We'll be in touch shortly. If it's urgent, call the hotline below.",
      notConfigured:
        'Form is not connected yet. See "Connecting the form" in README.md before going live.',
      orDirect: 'Or reach us directly',
    },

    footer: {
      tagline: 'Viral. Fast. Effective.',
      blurb:
        'Official TikTok Business & TikTok Shop partner. Ads management, shop problem resolution and seller resources for TikTok merchants.',
      contactTitle: 'Contact',
      navTitle: 'Navigate',
      followTitle: 'Official channels',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },

    langSwitch: {
      label: 'Change language',
      to: 'Tiếng Việt',
      code: 'VI',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Đường dẫn tương ứng ở ngôn ngữ còn lại. */
export function altHref(lang: Lang): string {
  return lang === 'vi' ? '/en/' : '/';
}
