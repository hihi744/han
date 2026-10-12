// All site copy that comes from Đơm Hoa's planning documents lives here,
// so figures can be updated without touching layout code.
// Anything still to be confirmed by the organisation is marked with `tbc: true`
// or rendered through <Tbc>, which shows a visible "Cần xác nhận" tag.

export const org = {
  name: "Đơm Hoa",
  fullName: "Tổ chức tài chính vi mô Đơm Hoa",
  logoTagline: "Gieo cơ hội, ươm mầm tương lai",
  tagline: "Đợi một mùa, nở một đời.",
  philosophy: "Mỗi hạt giống đều xứng đáng được đơm hoa, dù đã từng rơi vào bùn đất.",
  // Placeholders: replace with real contact details
  phone: "[Số điện thoại]",
  email: "[Email liên hệ]",
  address: "[Địa chỉ trụ sở]",
  license: "[Số giấy phép NHNN]",
} as const;

export type NavLink = { href: string; label: string; description?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const nav: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  {
    label: "Về chúng tôi",
    children: [
      { href: "/ve-chung-toi", label: "Câu chuyện và sứ mệnh", description: "Ý nghĩa cái tên, tầm nhìn, sứ mệnh" },
      { href: "/ve-chung-toi#gia-tri", label: "Giá trị cốt lõi", description: "Gieo, Ươm, Vun, Nở" },
      { href: "/ve-chung-toi#phap-ly", label: "Pháp lý", description: "Giấy phép và khung pháp lý" },
      { href: "/bao-mat", label: "Cam kết bảo mật", description: "Cách chúng tôi giữ kín thông tin" },
    ],
  },
  {
    label: "Sản phẩm",
    children: [
      { href: "/san-pham", label: "Sản phẩm tài chính", description: "Khoản vay ReStart, tiết kiệm Bước Vững" },
      { href: "/hanh-trinh", label: "Sản phẩm phi tài chính", description: "Hệ sinh thái Gieo – Ươm – Vun – Nở" },
    ],
  },
  { href: "/san-pham#tinh-thu", label: "Công cụ tính khoản vay" },
  { href: "/du-an", label: "Dự án" },
  { href: "/lien-he", label: "Liên hệ" },
];

export const journey = [
  {
    key: "gieo",
    stage: "Gieo",
    value: "Tin tưởng",
    product: "Điểm tựa Đơm Hoa",
    promise: "Trao cơ hội, không phán xét.",
    summary:
      "Gặp gỡ, lắng nghe và cùng bạn ổn định những nhu cầu cơ bản: giấy tờ, chỗ ở, việc làm, gia đình. Từ đó vạch ra kế hoạch phù hợp với hoàn cảnh của riêng bạn.",
    items: [
      "Tiếp nhận và đánh giá nhu cầu về việc làm, tài chính, gia đình, giấy tờ",
      "Tư vấn tâm lý ban đầu, kết nối chuyên gia khi cần",
      "Nhóm đồng đẳng để chia sẻ và xây mạng lưới hỗ trợ",
      "Hỗ trợ tiếp cận dịch vụ xã hội, pháp lý, y tế",
      "Cùng xây kế hoạch phát triển cá nhân",
    ],
  },
  {
    key: "uom",
    stage: "Ươm",
    value: "Thấu hiểu",
    product: "Học viện Đơm Hoa",
    promise: "Gần gũi, an toàn.",
    summary:
      "Những lớp học nhỏ, nhiều thực hành: quản lý tiền, khởi nghiệp, kỹ năng đi làm và học nghề theo nhu cầu tuyển dụng ở địa phương.",
    items: [
      "Quản lý tài chính cá nhân: ngân sách, tiết kiệm, nhận diện tín dụng đen",
      "Khởi nghiệp và quản lý kinh doanh nhỏ: giá bán, lợi nhuận, dòng tiền",
      "Kỹ năng nghề nghiệp và hòa nhập: hồ sơ, phỏng vấn, quyền lợi lao động",
      "Đào tạo nghề theo nhu cầu: may mặc, chế biến thực phẩm, bán hàng",
      "Hỗ trợ chi phí đi lại, trông trẻ tùy nguồn lực",
    ],
  },
  {
    key: "vun",
    stage: "Vun",
    value: "Đồng hành",
    product: "Vườn Ươm Sinh Kế",
    promise: "Không ai đơn độc.",
    summary:
      "Thử sức trong môi trường làm việc thật: thực hành tại doanh nghiệp xã hội, được giới thiệu việc làm, hoặc được ươm tạo mô hình kinh doanh của riêng mình.",
    items: [
      "Thực hành có người hướng dẫn và thù lao minh bạch",
      "Kết nối với doanh nghiệp sẵn sàng tạo cơ hội bình đẳng",
      "Mentor hỗ trợ kế hoạch kinh doanh, kế toán, marketing",
      "Đủ điều kiện thì được xem xét vay vốn để phát triển",
    ],
  },
  {
    key: "no",
    stage: "Nở",
    value: "Tự chủ",
    product: "Đồng hành Nở Hoa",
    promise: "Vững vàng bằng chính đôi tay mình.",
    summary:
      "Khi đã có việc làm hoặc công việc kinh doanh, chúng tôi vẫn ở bên để bạn giữ vững thu nhập, quản lý khoản vay và từng bước tự đứng trên đôi chân mình.",
    items: [
      "Hướng dẫn theo dõi thu chi, tiết kiệm, dòng tiền",
      "Tư vấn quản lý khoản vay và kế hoạch trả nợ",
      "Kết nối mentor, nhóm đồng đẳng và cơ hội thị trường",
      "Trở thành người hướng dẫn cho những chị em đến sau",
    ],
  },
] as const;

export const loanRounds = [
  {
    name: "Vòng 1",
    amount: "5 – 10 triệu đồng",
    amountNote: "Theo dòng tiền khả dụng",
    term: "6 – 12 tháng",
    who: "Khoản vay đầu tiên, để bạn bắt đầu xây lại uy tín.",
  },
  {
    name: "Vòng 2",
    amount: "15 – 30 triệu đồng",
    amountNote: "Sau khi thẩm định lại",
    term: "12 – 18 tháng",
    who: "Khi công việc đã chạy ổn và bạn đã trả tốt vòng trước.",
  },
] as const;

export const loanTerms = [
  { label: "Cách tính lãi", value: "Theo dư nợ giảm dần" },
  { label: "Trả trước hạn", value: "Được phép, không phạt" },
  { label: "Phí hồ sơ", value: "Miễn phí", tbc: true },
  { label: "Chậm trả", value: "Lãi quá hạn theo quy định, không thu phí phạt", tbc: true },
] as const;

export const applicantGroups = [
  {
    title: "Đã có công việc kinh doanh",
    detail: "Có chỗ bán, có khách và doanh thu đều.",
    outcome: "Vay Vòng 1 từ 5 – 10 triệu theo dòng tiền.",
  },
  {
    title: "Có tay nghề, cần vốn khởi đầu",
    detail: "Có nghề, chưa có hoặc mới có ít khách.",
    outcome:
      "Vay Vòng 1 từ 5 – 7 triệu, giải ngân từng phần hoặc bằng hiện vật như máy móc, nguyên liệu.",
  },
  {
    title: "Chưa có sinh kế ổn định",
    detail: "Chưa có việc, chỗ làm hoặc kinh nghiệm quản lý vốn.",
    outcome:
      "Chưa vay ngay. Bạn vào lộ trình chuẩn bị: học nghề, giới thiệu việc làm, thử mô hình nhỏ. Sẵn sàng thì cùng xét lại.",
  },
] as const;

export const repaymentByTrade = [
  {
    trade: "Buôn bán, dịch vụ thu tiền hằng ngày",
    schedule: "Trả theo tuần",
    grace: "Không áp dụng",
  },
  {
    trade: "Nghề thủ công, làm theo đơn hàng",
    schedule: "Trả theo tháng",
    grace: "1 – 2 kỳ nếu cần mua thiết bị hoặc chờ đơn đầu tiên",
  },
  {
    trade: "Trồng trọt, chăn nuôi",
    schedule: "Theo tháng, kỳ lớn vào mùa thu hoạch",
    grace: "Theo chu kỳ sản xuất, khi dòng tiền chứng minh được",
  },
] as const;

export const privacyPromises = [
  {
    title: "Không công khai hoàn cảnh riêng",
    body: "Dư nợ, tình trạng trả nợ và câu chuyện của bạn không được nêu trước nhóm. Nhóm chỉ nhận báo cáo tổng hợp.",
  },
  {
    title: "Quá khứ không bị nhắc lại",
    body: "Thông tin án tích là dữ liệu nhạy cảm, được bảo mật và không bao giờ được nêu trong buổi họp nhóm.",
  },
  {
    title: "Tham vấn tâm lý tách khỏi hồ sơ vay",
    body: "Tham gia tư vấn tâm lý không phải điều kiện để vay, và không được dùng để chấm điểm tín dụng.",
  },
  {
    title: "Không ai phải trả nợ thay",
    body: "Mỗi người chịu trách nhiệm khoản vay của mình. Nhóm nhắc nhau, hỗ trợ tinh thần, không bắt người trả tốt gánh thay.",
  },
] as const;

export const faqs = [
  {
    q: "Tôi có cần tài sản thế chấp không?",
    a: "Không. Đơm Hoa xét khoản vay dựa trên phương án làm ăn và dòng tiền thực tế của bạn. Khoản vay đầu tiên nhỏ, để bạn từng bước xây lại uy tín.",
  },
  {
    q: "Tôi có phải kể lại quá khứ của mình không?",
    a: "Bạn chỉ chia sẻ những gì cần cho việc vay và học nghề. Mọi thông tin được giữ kín, không nêu trong họp nhóm và không chia sẻ cho bên thứ ba khi chưa có đồng ý của bạn.",
  },
  {
    q: "Tôi chưa có việc làm thì có vay được không?",
    a: "Chưa vay ngay, nhưng bạn không bị từ chối. Bạn sẽ vào lộ trình chuẩn bị: học nghề, giới thiệu việc làm và thử mô hình nhỏ. Khi sẵn sàng, chúng tôi cùng xét lại.",
  },
  {
    q: "Tôi sẽ phải trả tổng cộng bao nhiêu?",
    a: "Trước khi ký, bạn được báo tổng chi phí bằng số tiền cụ thể: tổng lãi, phí (nếu có) và khoản tiết kiệm bắt buộc. Bạn có thể tính thử ngay trên trang này.",
  },
  {
    q: "Nếu tôi gặp khó khăn, không trả kịp thì sao?",
    a: "Hãy báo sớm cho cán bộ phụ trách. Khi gặp khó khăn thật sự như bệnh nặng, thiên tai, mất chỗ làm ăn, lịch trả nợ có thể được điều chỉnh theo quy định. Đơm Hoa không thu thêm phí phạt chậm trả.",
  },
  {
    q: "Tôi có bắt buộc phải tham gia nhóm không?",
    a: "Không. Nếu không phù hợp với nhóm, bạn có thể vay cá nhân với hỗ trợ đồng đẳng. Bạn cũng có thể rút khỏi nhóm theo quy trình đã công bố.",
  },
] as const;

export const partnerPackages = [
  {
    name: "Nhà tài trợ Vàng",
    value: "92 triệu đồng",
    meaning: "Tài trợ toàn bộ phần kinh phí còn thiếu của cả đợt học cho 15 học viên.",
    featured: true,
  },
  {
    name: "Nhà tài trợ Bạc",
    value: "6 triệu đồng / học viên",
    meaning: "Tài trợ trọn gói chi phí đào tạo cho một học viên đến khi có việc làm.",
  },
  {
    name: "Đồng hành theo hạng mục",
    value: "Theo thực tế",
    meaning: "Nguyên vật liệu, sinh hoạt phí, đồng phục, bảo hộ lao động hoặc thù lao giảng viên.",
  },
  {
    name: "Hiện vật và cơ hội việc làm",
    value: "Không quy định",
    meaning: "Máy may, nguyên phụ liệu, chỗ thực hành, hoặc nhận học viên vào làm sau đào tạo.",
  },
] as const;

export const projectPhases = [
  {
    phase: "Chuẩn bị",
    time: "1 tháng trước khai giảng",
    body: "Ký biên bản hợp tác ba bên. Xưởng cam kết nhận tối thiểu 2/3 học viên đạt sát hạch, ký hợp đồng lao động đúng luật.",
  },
  {
    phase: "Đào tạo",
    time: "Tháng 1 – 2",
    body: "Bốn buổi học nghề mỗi tuần, thực hành trên đơn hàng thật của xưởng, kèm sinh hoạt nhóm hai tuần một lần.",
  },
  {
    phase: "Đồng hành",
    time: "Tháng 3 – 4",
    body: "Cán bộ dự án thăm xưởng, họp nhóm hằng tháng, theo dõi thu nhập và chuyên cần, xử lý sớm khó khăn.",
  },
  {
    phase: "Tổng kết",
    time: "Tháng 6",
    body: "Đánh giá theo chỉ số, rút kinh nghiệm cùng xưởng và quyết định quy mô đợt tiếp theo.",
  },
] as const;
