// ============================================================================
// CHÍNH SÁCH QUYỀN RIÊNG TƯ
//
// Nguồn: "Chính sách về quyền riêng tư.docx".
// Nội dung giữ nguyên văn bản gốc, chỉ sửa 2 lỗi chính tả:
//   - "AVObảo lưu"            -> "AVO bảo lưu"       (thiếu dấu cách)
//   - "điều tra tra hành chính" -> "điều tra hành chính" (lặp chữ)
// Đã bỏ câu dẫn tới "trang Chính Sách Cookie toàn cầu" vì trang đó chưa tồn tại
// — thêm lại khi nào bạn có trang này.
//
// Bản tiếng Anh là bản dịch tham khảo. Khi có tranh chấp, BẢN TIẾNG VIỆT
// là bản có giá trị pháp lý (đã ghi rõ trên trang tiếng Anh).
// ============================================================================

import type { Lang } from './ui';

const COMPANY_VI =
  'CÔNG TY CỔ PHẦN TƯ VẤN, ĐẦU TƯ, THƯƠNG MẠI VÀ DỊCH VỤ QUỐC TẾ AVO';
const COMPANY_EN =
  'AVO INTERNATIONAL CONSULTING, INVESTMENT, TRADE AND SERVICES JOINT STOCK COMPANY';

export type Block = { type: 'p'; text: string } | { type: 'list'; items: string[] };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface PrivacyDoc {
  /** Ngày cập nhật gần nhất — sửa khi nào bạn đổi nội dung chính sách. */
  updated: string;
  title: string;
  intro: Block[];
  tocTitle: string;
  sections: Section[];
  contactTitle: string;
  contactIntro: string;
  backLabel: string;
  /** Chỉ hiện trên bản tiếng Anh. */
  translationNotice?: string;
}

export const privacy: Record<Lang, PrivacyDoc> = {
  vi: {
    updated: '2026-08-04',
    title: 'Chính sách về quyền riêng tư',
    tocTitle: 'Nội dung',
    backLabel: 'Về trang chủ',
    intro: [
      {
        type: 'p',
        text: `Chính sách về quyền riêng tư quy định việc ${COMPANY_VI} sử dụng và bảo vệ thông tin bạn cung cấp. Chúng tôi tôn trọng quyền riêng tư và luôn nỗ lực trong việc bảo vệ thông tin cá nhân của bạn. Chính sách về quyền riêng tư sẽ thể hiện quá trình chúng tôi thu thập, chuyển đổi, xử lý, sử dụng và công bố các dữ liệu đồng thời giải thích về chính sách bảo mật của chúng tôi.`,
      },
      {
        type: 'p',
        text: 'Bằng việc cung cấp thông tin cá nhân, bạn đã đồng ý và chấp nhận việc trao đổi, xử lý, sử dụng và công bố thông tin được đề cập tại Chính sách này.',
      },
    ],
    sections: [
      {
        id: 'thu-thap',
        title: 'Chúng tôi thu thập gì?',
        blocks: [
          {
            type: 'p',
            text: 'Chúng tôi sẽ thu thập thông tin cá nhân (PII) bạn cung cấp, các thông tin này sẽ thể hiện rằng bạn là một người dùng cá nhân. Việc thu thập trên chỉ được thực hiện nếu bạn đồng ý yêu cầu của chúng tôi. Thông tin này có thể bao gồm:',
          },
          { type: 'list', items: ['Họ tên', 'Số điện thoại', 'Địa chỉ email'] },
        ],
      },
      {
        id: 'su-dung',
        title: 'Chúng tôi sử dụng thông tin cá nhân ra sao?',
        blocks: [
          {
            type: 'p',
            text: 'Bằng việc cung cấp thông tin cá nhân, bạn đồng ý với việc nếu pháp luật tại địa phương hoặc tại nơi bạn nhận thông tin cho phép, chúng tôi sẽ dùng thông tin đó để thực hiện các công việc sau:',
          },
          {
            type: 'list',
            items: [
              'Trả lời các yêu cầu của bạn',
              'Cải thiện dịch vụ của chúng tôi',
              'Nâng cấp thông tin trên các phương tiện truyền thông',
              'Cung cấp cho bạn các thủ thuật, thông tin hữu ích, tin tức cập nhật mới về sản phẩm',
              'Thông báo về sản phẩm và dịch vụ mới',
              'Giúp khách hàng có cái nhìn về sản phẩm và dịch vụ',
              'Đánh giá các hồ sơ ứng tuyển công việc',
              'Cho các mục đích quản trị và đảm bảo chất lượng sản phẩm của chúng tôi',
              'Cho các mục đích khác được liệt kê chi tiết trên web hoặc các ứng dụng di động',
            ],
          },
        ],
      },
      {
        id: 'thong-tin-su-dung',
        title: 'Thông tin sử dụng ứng dụng điện thoại và website',
        blocks: [
          {
            type: 'p',
            text: 'Chúng tôi cũng tự động thu thập thông tin về trình duyệt máy tính và hệ điều hành, những trang web bạn đã truy cập trước và sau khi vào trang web của chúng tôi, thông tin lịch sử truy cập cơ bản, địa chỉ IP, vị trí, nhà cung cấp dịch vụ di động, và hệ điều hành di động. Chúng tôi tập hợp thông tin này để hiểu thêm về hành vi truy cập web và ứng dụng của người dùng qua đó cải thiện chất lượng dịch vụ. Dữ liệu GPS không định vị được người dùng cá nhân. Chúng tôi cũng chia sẻ thông tin thu được cho bên thứ ba. Những thông tin này bao gồm:',
          },
          {
            type: 'list',
            items: [
              'Số lượt truy cập tổng cộng trên websites và ứng dụng',
              'Số lượt truy cập từng trang và ứng dụng',
              'Tên miền nhà cung cấp dịch vụ mạng mà khách hàng sử dụng',
            ],
          },
        ],
      },
      {
        id: 'bao-mat',
        title: 'Chúng tôi bảo mật thông tin như thế nào?',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY_VI} sẽ dùng những biện pháp đo lường hợp pháp, có tổ chức và chuyên môn để bảo vệ thông tin cá nhân của khách hàng tuân theo các quy chuẩn về quyền riêng tư hiện hành và luật an toàn thông tin. Khi ${COMPANY_VI} sử dụng dịch vụ của một nhà cung cấp thứ ba, nhà cung cấp này phải được tuyển chọn kỹ càng và bắt buộc phải sử dụng các phương pháp bảo mật thông tin cá nhân thích hợp. Chúng tôi sử dụng nhiều quy trình và công nghệ bảo mật nhằm bảo mật thông tin cá nhân của bạn khỏi các truy cập trái phép, sử dụng và làm rò rỉ thông tin. Tuy vậy, việc truyền tải thông tin thông qua mạng Internet hoặc mạng di động không phải lúc nào cũng an toàn tuyệt đối.`,
          },
          {
            type: 'p',
            text: 'Dù chúng tôi luôn cố gắng hết sức để bảo mật thông tin cá nhân của bạn nhưng chúng tôi không đảm bảo sự an toàn các thông tin bạn tải lên web hoặc qua ứng dụng di động: Bạn sẽ chịu rủi ro về các thông tin được tải lên. Vì chúng tôi không thể đảm bảo tuyệt đối không có việc rò rỉ thông tin, sử dụng sai mục đích hoặc thay đổi dữ liệu, nên ngay khi nhận được thông tin của bạn, chúng tôi sẽ sử dụng các biện pháp bảo mật chuyên môn để phòng tránh các sự cố nêu trên xảy ra.',
          },
        ],
      },
      {
        id: 'ben-thu-ba',
        title: 'Chia sẻ thông tin với bên thứ ba',
        blocks: [
          {
            type: 'p',
            text: 'Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với các đơn vị liên kết, các bên ký hợp đồng và đại lý có tham gia trong việc cung cấp các hoạt động bạn đồng ý sử dụng.',
          },
          {
            type: 'p',
            text: 'Ngoại trừ những thông tin ghi rõ trên web và ứng dụng di động, chúng tôi sẽ không bán hoặc cho thuê thông tin cá nhân của bạn tới bên thứ ba, ngoại trừ thông tin cá nhân có thể được cung cấp cho bên thứ ba trong trường hợp hoạt động của trang này hoặc một phần của hoạt động đó và dữ liệu khách hàng có liên quan đến nó được bán, chuyển nhượng hoặc chuyển giao. Đôi khi chúng tôi sử dụng những đơn vị cung cấp dịch vụ được lựa chọn để cung cấp dịch vụ hỗ trợ về website hoặc ứng dụng di động của chúng tôi, hoặc trong hoạt động kinh doanh bình thường. Đôi lúc, những đơn vị này có thể truy cập thông tin của bạn để có thể cung cấp dịch vụ của họ cho chúng tôi.',
          },
          {
            type: 'p',
            text: 'Chúng tôi yêu cầu tất cả các công ty cung cấp dịch vụ hỗ trợ phải đạt cùng một tiêu chuẩn về bảo mật thông tin như của chính chúng tôi. Họ bị cấm sử dụng thông tin với mục đích khác. Đặc biệt, chúng tôi không cho phép các nhà cung cấp dịch vụ dùng thông tin cá nhân của bạn cho các hoạt động quảng cáo tiếp thị.',
          },
        ],
      },
      {
        id: 'khai-bao',
        title: 'Khi nào chúng tôi có thể khai báo thông tin cá nhân của bạn',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY_VI} bảo lưu quyền công bố thông tin cá nhân của bạn, bao gồm địa chỉ email, để báo cáo cho các cơ quan chính quyền, các tổ chức pháp quyền được quy định bởi tòa án và theo luật hiện hành. Tùy vào mỗi trường hợp nhất định khi pháp luật nước sở tại cho phép, chúng tôi có thể khai báo thông tin cá nhân của bạn:`,
          },
          {
            type: 'list',
            items: [
              `Khi chúng tôi có lý do để tin rằng việc cung cấp thông tin trên là cần thiết để xác định, liên hệ hoặc sử dụng các hành động có tính chất pháp lý đối với các cá nhân có thể gây tổn hại cho bạn, làm ảnh hưởng tới quyền lợi, tài sản và hoạt động của ${COMPANY_VI}, các người dùng khác trên website hoặc các ứng dụng di động và gây hại tới bất cứ ai liên quan đến các hoạt động trên.`,
              'Khi pháp luật yêu cầu, hoặc theo yêu cầu của cơ quan hành pháp liên quan tới điều tra hình sự, dân sự, các cơ quan hành chính nhà nước đang xử lý các vụ án dân sự hoặc điều tra hành chính.',
              'Khi liên quan tới các giao dịch thiết yếu của công ty, như bán một dòng hoặc phân khúc sản phẩm hàng hóa, liên kết, sáp nhập, chuyển nhượng tài sản hoặc các trường hợp phá sản không may xảy ra.',
            ],
          },
        ],
      },
      {
        id: 'dia-chi-ip',
        title: 'Sử dụng địa chỉ IP',
        blocks: [
          {
            type: 'p',
            text: 'Địa chỉ IP là dãy số được chỉ định tự động cho máy tính khi bạn truy nhập dịch vụ internet hoặc qua mạng nội bộ (LAN) hoặc mạng diện rộng (WAN). Máy chủ sẽ tự động xác định máy tính của bạn bằng địa chỉ IP nó cung cấp trong quá trình bạn truy cập mạng.',
          },
          {
            type: 'p',
            text: `${COMPANY_VI}, hay các bên thứ ba hành động nhân danh ${COMPANY_VI} có thể thu thập địa chỉ IP của bạn cho các mục đích quản trị hệ thống hoặc kiểm tra phương thức sử dụng website. Chúng tôi cũng có thể sử dụng địa chỉ IP để xác định người dùng khi chúng tôi cảm thấy cần thiết bắt buộc việc tuân thủ các điều khoản sử dụng của website hoặc để bảo vệ dịch vụ, trang web, các người dùng khác.`,
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          {
            type: 'p',
            text: 'Website và các ứng dụng di động của chúng tôi có thể sử dụng công nghệ gọi là “cookies”. Cookie là tập tin nhỏ lưu trong ổ cứng bởi máy chủ. Nó cho phép website và ứng dụng của chúng tôi phản hồi lại người dùng.',
          },
          {
            type: 'p',
            text: 'Trang web và ứng dụng có thể xử lý tập tin cookie cho các nhu cầu, sự hài lòng và không hài lòng của bạn bằng cách tập hợp và ghi nhớ thông tin các hoạt động. Ví dụ, máy chủ có thể tạo ra tập tin cookie giúp bạn chỉ cần điền mật khẩu một lần trong lúc truy cập trang web.',
          },
          {
            type: 'p',
            text: 'Bạn có thể chọn đồng ý hoặc từ chối cookies. Hầu hết các trang web tự động nhận cookies, tuy nhiên nếu muốn bạn có thể điều chỉnh trong phần cài đặt trình duyệt để từ chối cookies hoặc nhận cảnh báo trước khi lưu trữ cookie. Hãy tham khảo chỉ dẫn của trình duyệt Internet hoặc màn hình giúp đỡ để hiểu thêm về nguyên tắc hoạt động giúp thiết lập ứng dụng cookies phù hợp.',
          },
          {
            type: 'p',
            text: 'Nếu bạn chọn từ chối cookies, bạn có thể không trải nghiệm được toàn bộ tính năng website của chúng tôi hay các trang web khác.',
          },
        ],
      },
      {
        id: 'nguon-ben-ngoai',
        title: 'Thông tin từ các nguồn bên ngoài',
        blocks: [
          {
            type: 'p',
            text: 'Tại những nơi được pháp luật cho phép, chúng tôi có thể thu thập thông tin thứ ba một cách hợp pháp để bổ sung cho dữ liệu người dùng có sẵn. Một trong số đó có thể là thông tin cá nhân. Chúng tôi làm điều này để giúp cho việc cung cấp thông tin và các chiến dịch quảng bá mà có thể bạn quan tâm được hoàn thiện hơn. Những thông tin cá nhân này chỉ được chúng tôi tổng hợp và sử dụng trên cơ sở cung cấp ban đầu, và theo sự cho phép của pháp luật tại địa phương.',
          },
        ],
      },
      {
        id: 'truy-cap',
        title: 'Truy cập',
        blocks: [
          {
            type: 'p',
            text: 'Chúng tôi chỉ lưu giữ thông tin của bạn trong thời gian cần thiết để đáp ứng các mục đích nêu rõ tại Chính sách Quyền Riêng Tư trừ những trường hợp gia hạn do pháp luật yêu cầu hoặc cho phép. Bạn có thể liên hệ với chúng tôi bằng email để yêu cầu cập nhật, chỉnh sửa hoặc gỡ bỏ thông tin cá nhân của bạn bất cứ lúc nào với thông tin liên hệ được cung cấp tại phần cuối của mục Chính sách Quyền Riêng Tư. Luật pháp tại địa phương cũng có thể cho phép bạn truy cập thông tin bạn cung cấp cho chúng tôi. Tại một số quốc gia, bạn có thể phải trả một khoản phí tương ứng với chi phí của chúng tôi khi cung cấp thông tin cho bạn.',
          },
        ],
      },
      {
        id: 'duong-dan',
        title: 'Đường dẫn tới các website khác',
        blocks: [
          {
            type: 'p',
            text: 'Đôi lúc, trang web và các ứng dụng di động của chúng tôi có thể liên tục cung cấp đường dẫn hoặc chèn các web của bên thứ ba vào. Chính sách Quyền Riêng tư của chúng tôi không áp dụng trên các trang web này. Nếu bạn chọn truy cập các đường dẫn trên, bạn đồng ý với việc chúng tôi không có trách nhiệm cho tính khả dụng của các trang liên kết và không xem xét hay xác nhận, và không có trách nhiệm trực tiếp hay gián tiếp cho việc:',
          },
          {
            type: 'list',
            items: [
              'Việc trang liên kết sử dụng thông tin cá nhân của bạn',
              'Nội dung trên các trang liên kết',
              'Nguyên tắc sử dụng trên các trang liên kết',
            ],
          },
          {
            type: 'p',
            text: 'Bạn cần đảm bảo việc xem xét tính hợp pháp và quyền riêng tư trên mỗi trang hay ứng dụng bạn truy cập trước khi điền bất cứ thông tin cá nhân nào.',
          },
        ],
      },
      {
        id: 'tre-em',
        title: 'Việc trẻ em sử dụng trang web và ứng dụng di động',
        blocks: [
          {
            type: 'p',
            text: 'Ngoại trừ các thông tin được ghi rõ, các trang web và ứng dụng di động liên quan đến Chính sách Quyền Riêng tư này không chủ đích hoặc thiết kế để thu hút sự quan tâm của trẻ em dưới 13 tuổi. Chúng tôi không có mục đích thu thập thông tin từ người dùng trong độ tuổi đó. Tại các website và ứng dụng có đối tượng sử dụng và trẻ em dưới 13 tuổi, chúng tôi chỉ thu thập thông tin cá nhân khi có sự chấp thuận rõ ràng của phụ huynh hoặc người bảo hộ.',
          },
        ],
      },
      {
        id: 'thay-doi',
        title: 'Thay đổi chính sách',
        blocks: [
          {
            type: 'p',
            text: 'Chính sách quyền Riêng tư này đôi khi được cập nhật. Nếu sự thay đổi có tính chất quan trọng, chúng tôi sẽ đăng thông báo trên trang web hoặc các ứng dụng và các thỏa thuận cấp phép liên quan. Chúng tôi khuyến khích bạn nên thường xuyên tham khảo Chính sách Quyền Riêng Tư để cập nhật thông tin mới nhất về việc chúng tôi bảo mật thông tin cá nhân thu thập được. Việc bạn tiếp tục sử dụng website đồng nghĩa với việc chấp thuận điều khoản quyền Riêng tư và các cập nhật của Chính sách này. Những thay đổi trong chính sách không áp dụng với các dữ liệu được thu thập trước đó.',
          },
        ],
      },
    ],
    contactTitle: 'Liên hệ về quyền riêng tư',
    contactIntro:
      'Để yêu cầu cập nhật, chỉnh sửa hoặc gỡ bỏ thông tin cá nhân của bạn, vui lòng liên hệ:',
  },

  en: {
    updated: '2026-08-04',
    title: 'Privacy Policy',
    tocTitle: 'Contents',
    backLabel: 'Back to home',
    translationNotice:
      'This is a courtesy translation. The Vietnamese version is the legally binding text; in the event of any discrepancy, the Vietnamese version prevails.',
    intro: [
      {
        type: 'p',
        text: `This Privacy Policy governs how ${COMPANY_EN} uses and protects the information you provide. We respect your privacy and work continuously to protect your personal information. This Privacy Policy describes how we collect, transfer, process, use and disclose data, and explains our security practices.`,
      },
      {
        type: 'p',
        text: 'By providing personal information, you agree to and accept the exchange, processing, use and disclosure of information described in this Policy.',
      },
    ],
    sections: [
      {
        id: 'what-we-collect',
        title: 'What do we collect?',
        blocks: [
          {
            type: 'p',
            text: 'We collect the personally identifiable information (PII) you provide, which identifies you as an individual user. This collection only takes place if you consent to our request. This information may include:',
          },
          { type: 'list', items: ['Full name', 'Phone number', 'Email address'] },
        ],
      },
      {
        id: 'how-we-use',
        title: 'How do we use personal information?',
        blocks: [
          {
            type: 'p',
            text: 'By providing personal information, you agree that, where permitted by the law of your locality or the place where you receive the information, we may use that information to:',
          },
          {
            type: 'list',
            items: [
              'Respond to your requests',
              'Improve our services',
              'Improve information across our media channels',
              'Provide you with tips, useful information and product news',
              'Notify you about new products and services',
              'Help customers understand our products and services',
              'Evaluate job applications',
              'Serve our administrative and product quality assurance purposes',
              'Serve other purposes detailed on our website or mobile applications',
            ],
          },
        ],
      },
      {
        id: 'usage-data',
        title: 'Website and mobile application usage information',
        blocks: [
          {
            type: 'p',
            text: 'We also automatically collect information about your browser and operating system, the websites you visited before and after ours, basic browsing history, IP address, location, mobile carrier and mobile operating system. We aggregate this to better understand how users browse our site and applications, and to improve service quality. GPS data does not identify individual users. We also share aggregated information with third parties. This information includes:',
          },
          {
            type: 'list',
            items: [
              'Total visits across our websites and applications',
              'Visits to individual pages and applications',
              'The domain name of the internet service provider used by the customer',
            ],
          },
        ],
      },
      {
        id: 'security',
        title: 'How do we secure your information?',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY_EN} applies lawful, organisational and technical measures to protect customers' personal information in accordance with applicable privacy standards and information security law. Where ${COMPANY_EN} engages a third-party provider, that provider must be carefully selected and is required to apply appropriate personal data protection methods. We use a range of security processes and technologies to protect your personal information from unauthorised access, misuse and disclosure. That said, transmission over the internet or mobile networks is never absolutely secure.`,
          },
          {
            type: 'p',
            text: 'Although we make every effort to protect your personal information, we cannot guarantee the security of information you upload through our website or mobile application: you bear the risk of information you upload. Because we cannot absolutely guarantee against leaks, misuse or alteration of data, we apply professional security measures as soon as we receive your information in order to prevent such incidents.',
          },
        ],
      },
      {
        id: 'third-parties',
        title: 'Sharing information with third parties',
        blocks: [
          {
            type: 'p',
            text: 'We may share your personal information with affiliates, contracting parties and agents involved in delivering the services you have agreed to use.',
          },
          {
            type: 'p',
            text: 'Except as expressly stated on our website and mobile applications, we will not sell or rent your personal information to third parties, except that personal information may be provided to a third party where this site or part of its operations, together with the related customer data, is sold, assigned or transferred. We sometimes use selected service providers to support our website or mobile applications, or in the ordinary course of business. At times these providers may access your information in order to deliver their services to us.',
          },
          {
            type: 'p',
            text: 'We require all supporting service companies to meet the same information security standards as our own. They are prohibited from using the information for any other purpose. In particular, we do not permit service providers to use your personal information for marketing or advertising activity.',
          },
        ],
      },
      {
        id: 'disclosure',
        title: 'When we may disclose your personal information',
        blocks: [
          {
            type: 'p',
            text: `${COMPANY_EN} reserves the right to disclose your personal information, including your email address, in reports to government authorities and legal bodies as required by a court and under applicable law. In specific circumstances, where permitted by local law, we may disclose your personal information:`,
          },
          {
            type: 'list',
            items: [
              `Where we have reason to believe disclosure is necessary to identify, contact or take legal action against individuals who may cause harm to you, or who may affect the rights, property and operations of ${COMPANY_EN}, other users of the website or mobile applications, or anyone else involved in those activities.`,
              'Where required by law, or at the request of law enforcement in connection with a criminal or civil investigation, or by state administrative agencies handling civil cases or administrative investigations.',
              'In connection with essential corporate transactions, such as the sale of a product line or segment, an affiliation, merger, transfer of assets, or in the unfortunate event of bankruptcy.',
            ],
          },
        ],
      },
      {
        id: 'ip-address',
        title: 'Use of IP addresses',
        blocks: [
          {
            type: 'p',
            text: 'An IP address is a number automatically assigned to your computer when you access an internet service, a local area network (LAN) or a wide area network (WAN). The server automatically identifies your computer by the IP address it is assigned during your session.',
          },
          {
            type: 'p',
            text: `${COMPANY_EN}, or third parties acting on behalf of ${COMPANY_EN}, may collect your IP address for system administration purposes or to review how the website is used. We may also use IP addresses to identify users where we consider it necessary to enforce the website's terms of use, or to protect our service, our site and other users.`,
          },
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies',
        blocks: [
          {
            type: 'p',
            text: 'Our website and mobile applications may use a technology called “cookies”. A cookie is a small file stored on your hard drive by a server. It allows our website and applications to respond to you as a user.',
          },
          {
            type: 'p',
            text: 'The website and applications may process cookies to reflect your needs and preferences by collecting and remembering information about your activity. For example, the server may create a cookie so that you only need to enter your password once during a visit.',
          },
          {
            type: 'p',
            text: 'You may accept or refuse cookies. Most websites accept cookies automatically, but you can adjust your browser settings to refuse cookies or to warn you before a cookie is stored. Consult your browser instructions or help screen to learn how to configure cookies to your preference.',
          },
          {
            type: 'p',
            text: 'If you choose to refuse cookies, you may not be able to use the full functionality of our website or of other websites.',
          },
        ],
      },
      {
        id: 'external-sources',
        title: 'Information from external sources',
        blocks: [
          {
            type: 'p',
            text: 'Where permitted by law, we may lawfully collect third-party information to supplement our existing user data. Some of this may be personal information. We do this to improve the information and promotional campaigns that may be of interest to you. Such personal information is only aggregated and used by us on the basis on which it was originally provided, and as permitted by local law.',
          },
        ],
      },
      {
        id: 'access',
        title: 'Access',
        blocks: [
          {
            type: 'p',
            text: 'We retain your information only for as long as necessary to fulfil the purposes set out in this Privacy Policy, except where a longer period is required or permitted by law. You may contact us by email at any time to request an update, correction or removal of your personal information, using the contact details provided at the end of this Privacy Policy. Local law may also give you a right of access to the information you provided to us. In some countries you may be charged a fee corresponding to our cost of providing that information.',
          },
        ],
      },
      {
        id: 'external-links',
        title: 'Links to other websites',
        blocks: [
          {
            type: 'p',
            text: 'From time to time our website and mobile applications may provide links to, or embed, third-party websites. Our Privacy Policy does not apply to those websites. If you choose to follow those links, you accept that we are not responsible for the availability of the linked sites, do not review or endorse them, and are not directly or indirectly responsible for:',
          },
          {
            type: 'list',
            items: [
              "The linked site's use of your personal information",
              'The content on the linked sites',
              'The terms of use of the linked sites',
            ],
          },
          {
            type: 'p',
            text: 'You should review the legal terms and privacy practices of every site or application you visit before entering any personal information.',
          },
        ],
      },
      {
        id: 'children',
        title: "Children's use of the website and mobile applications",
        blocks: [
          {
            type: 'p',
            text: 'Except where expressly stated, the websites and mobile applications covered by this Privacy Policy are not intended or designed to appeal to children under 13. We do not intend to collect information from users of that age. On websites and applications whose audience includes children under 13, we collect personal information only with the explicit consent of a parent or guardian.',
          },
        ],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        blocks: [
          {
            type: 'p',
            text: 'This Privacy Policy is updated from time to time. Where a change is material, we will post a notice on the website or applications and in the relevant licence agreements. We encourage you to review this Privacy Policy regularly for the latest information on how we protect the personal information we collect. Your continued use of the website constitutes acceptance of the Privacy Policy terms and any updates to it. Changes to the policy do not apply to data collected previously.',
          },
        ],
      },
    ],
    contactTitle: 'Privacy contact',
    contactIntro:
      'To request an update, correction or removal of your personal information, please contact:',
  },
};

export const privacyPath: Record<Lang, string> = {
  vi: '/chinh-sach-bao-mat/',
  en: '/en/privacy-policy/',
};
