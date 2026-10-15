// Official content for the Đơm Hoa website, taken from
// "NỘI DUNG WEB TCVM ĐƠM HOA" (the organisation's content document).
// Edit copy and figures here; page layouts read from this file.

export const org = {
  name: "Đơm Hoa",
  fullName: "Tổ chức Tài chính Vi mô ĐƠM HOA",
  englishName: "BLOSSOM Microfinance Institution",
  shortName: "BLOSSOM Finance",
  tagline: "Nảy mầm hy vọng, đơm hoa cuộc đời",
  philosophy: "Mỗi hạt giống đều xứng đáng được đơm hoa, dù đã từng rơi vào bùn đất.",
  address: "207 Giải Phóng, Phường Bạch Mai, TP. Hà Nội",
  phone: "024-68 686 868",
  phoneHref: "tel:02468686868",
  email: "domhoa@gmail.com",
  hours: ["Thứ Hai – Thứ Sáu: 8:00 – 17:00", "Thứ Bảy: 8:00 – 11:30"],
} as const;

export type NavLink = { href: string; label: string; description?: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export const nav: NavItem[] = [
  { href: "/", label: "Trang chủ" },
  {
    label: "Giới thiệu",
    children: [
      { href: "/gioi-thieu", label: "Về chúng tôi", description: "Tầm nhìn, sứ mệnh, giá trị cốt lõi" },
      { href: "/gioi-thieu/cau-chuyen", label: "Câu chuyện khách hàng", description: "Những mùa hoa đầu tiên" },
    ],
  },
  {
    label: "Sản phẩm",
    children: [
      { href: "/san-pham/tai-chinh", label: "Sản phẩm tài chính", description: "Bốn gói vay và tiết kiệm tự nguyện" },
      { href: "/san-pham/cong-dong", label: "Sản phẩm cộng đồng", description: "Tham vấn, giáo dục tài chính, cửa hàng xã hội" },
    ],
  },
  { href: "/du-an", label: "Dự án" },
  { href: "/tu-danh-gia", label: "Công cụ tự đánh giá" },
  { href: "/lien-he", label: "Liên hệ" },
];

/* ---------------- Trang chủ ---------------- */

export const home = {
  quote: "Nảy mầm hy vọng, đơm hoa cuộc đời",
  lead:
    "ĐƠM HOA là tổ chức tài chính vi mô phi lợi nhuận, đồng hành cùng những người phụ nữ đã từng lầm lỡ và đang khao khát làm lại cuộc đời. Chúng tôi trao nguồn vốn nhỏ không cần tài sản thế chấp, kiến thức kinh doanh và sự đồng hành thấu hiểu để mỗi chị em có thể tự đứng vững bằng chính đôi tay của mình.",
  intro:
    "Sau những ngày nhiều biến động, điều mỗi người phụ nữ cần nhất không phải là những lời phán xét, mà là một cơ hội để bắt đầu lại. Đơm Hoa trao cơ hội ấy qua khoản vay nhỏ phù hợp với kế hoạch sinh kế của riêng chị, cùng những buổi học nghề, kiến thức tài chính, sự sẻ chia tinh thần và những cánh cửa việc làm rộng mở. Mọi thông tin riêng tư của chị đều được giữ kín.",
};

export const fiveYearGoals = [
  { value: "1.000", unit: "phụ nữ", label: "tiếp cận dịch vụ tài chính, tư vấn và đào tạo sinh kế" },
  { value: "600", unit: "khách hàng", label: "được vay vốn, tổng giải ngân dự kiến 12 tỷ đồng" },
  { value: "120", unit: "nhóm vay", label: "tự nguyện hỗ trợ đồng đẳng" },
  { value: "800", unit: "phụ nữ", label: "được đào tạo kiến thức tài chính và kỹ năng kinh doanh" },
];

/* ---------------- Giới thiệu ---------------- */

export const values = [
  {
    key: "gieo",
    stage: "Gieo",
    value: "Tin tưởng",
    promise: "Trao cơ hội, không phán xét",
    body: "Đơm Hoa là nơi đầu tiên dám tin. Chúng tôi nhìn khách hàng bằng con người hiện tại và bắt đầu từ khoản vay nhỏ, để chính họ từng bước xây lại uy tín của mình.",
  },
  {
    key: "uom",
    stage: "Ươm",
    value: "Thấu hiểu",
    promise: "Gần gũi, an toàn",
    body: "Chúng tôi lắng nghe bằng sự tôn trọng và luôn giữ kín thông tin riêng tư, để mỗi người cảm thấy an tâm khi bắt đầu lại.",
  },
  {
    key: "vun",
    stage: "Vun",
    value: "Đồng hành",
    promise: "Không ai đơn độc",
    body: "Vốn, kiến thức và sự hỗ trợ tinh thần luôn đi cùng nhau, như người làm vườn kiên nhẫn chăm từng chồi non. Mỗi bước tiến nhỏ của khách hàng đều được ghi nhận và trân trọng.",
  },
  {
    key: "no",
    stage: "Nở",
    value: "Tự chủ",
    promise: "Vững vàng bằng chính đôi tay mình",
    body: "Thành công là khi mỗi người tự đứng vững bằng sinh kế của mình, tự tin trở lại với gia đình và được cộng đồng trân trọng, kể cả khi không còn đồng hành cùng tổ chức.",
  },
] as const;

export const about = {
  direction:
    "Đơm Hoa hoạt động theo mô hình tài chính vi mô phi lợi nhuận, kết hợp dịch vụ tài chính với hỗ trợ sinh kế để thúc đẩy tái hòa nhập cộng đồng và nâng cao khả năng tự chủ kinh tế. Chúng tôi cung cấp các khoản vay quy mô nhỏ với điều kiện tiếp cận phù hợp, kết hợp đào tạo kiến thức tài chính, hướng dẫn kinh doanh và kết nối việc làm.",
  vision:
    "Trở thành tổ chức tài chính vi mô tiên phong tại Việt Nam, là điểm tựa tin cậy giúp những người phụ nữ từng lầm lỡ có cơ hội thứ hai để ổn định cuộc sống, tự chủ kinh tế và viết tiếp trang mới theo cách riêng của mình.",
  mission:
    "Đồng hành cùng những người phụ nữ đã lầm lỡ gây dựng lại cuộc sống bằng nguồn vốn nhỏ, thủ tục đơn giản, kiến thức, việc làm và sự thấu hiểu, để mỗi người tự tay vun đắp sinh kế và khẳng định giá trị bản thân trong cộng đồng.",
  valuesIntro:
    "Như một bông hoa đi từ hạt mầm đến ngày nở rộ, hành trình của mỗi người phụ nữ tại Đơm Hoa cũng trải qua bốn chặng, và cũng là bốn giá trị mà chúng tôi luôn gìn giữ.",
  whoWeServe: [
    "Phụ nữ đã chấp hành xong án phạt tù, có nhu cầu tự tạo việc làm, khởi nghiệp nhỏ hoặc phát triển kinh tế gia đình.",
    "Ưu tiên chị đang mang thai hoặc nuôi con nhỏ dưới 36 tháng tuổi, mẹ đơn thân, người chăm sóc chính trong gia đình và những chị có hoàn cảnh kinh tế khó khăn.",
    "Nữ thanh thiếu niên từng vi phạm pháp luật được hỗ trợ theo cơ chế riêng, có người bảo hộ.",
  ],
  howWeReach: [
    "Đơm Hoa phối hợp với Hội Liên hiệp Phụ nữ, chính quyền địa phương, các đơn vị hỗ trợ tái hòa nhập và cơ sở đào tạo nghề để giới thiệu chương trình, đồng thời duy trì mạng lưới nhóm vay tự nguyện và các kênh Zalo, Facebook, website. Với chị đang mang thai hoặc nuôi con nhỏ, chúng tôi ưu tiên hình thức tư vấn linh hoạt.",
    "Mọi hoạt động tiếp cận dựa trên bảo mật thông tin cá nhân, không kỳ thị, minh bạch điều kiện tín dụng và tôn trọng quyền tự nguyện tham gia.",
  ],
};

export const locations = [
  {
    place: "Hà Nội",
    role: "Văn phòng điều phối chính",
    body: "Gần Trại giam Thanh Xuân (khu vực Thanh Oai cũ), nơi có phân trại giam giữ phạm nhân nữ. Thuận lợi kết nối doanh nghiệp, nhà tài trợ, tổ chức xã hội và cơ hội việc làm đa dạng.",
  },
  {
    place: "Thanh Hóa",
    role: "Điểm hỗ trợ",
    body: "Khu vực Yên Định cũ, gần Trại giam số 5 (Bộ Công an), một trong những trại giam có số lượng phạm nhân nữ lớn ở miền Bắc. Chi phí vận hành thấp, dễ tiếp cận người mãn hạn ngay tại chỗ.",
  },
];

export const expansion = [
  { phase: "Điểm", time: "Năm 1", body: "1 văn phòng tại Hà Nội và 1 điểm hỗ trợ tại Thanh Hóa." },
  {
    phase: "Cụm",
    time: "Năm 2–3",
    body: "Kết nối vệ tinh với Hội Liên hiệp Phụ nữ cấp xã/phường tại quê quán của người mãn hạn, ưu tiên Thanh Hóa, Nghệ An, Ninh Bình.",
  },
  {
    phase: "Vùng",
    time: "Năm 4–5",
    body: "Nhân rộng mô hình ra khu vực Bắc Trung Bộ và phía Nam (TP.HCM, gần các trại giam có phân trại nữ).",
  },
];

export const goals2031 = [
  "Hỗ trợ ít nhất 1.000 phụ nữ tiếp cận dịch vụ tài chính, tư vấn và đào tạo sinh kế.",
  "Cho vay vi mô khoảng 600 khách hàng, tổng giải ngân lũy kế dự kiến 12 tỷ đồng.",
  "Thành lập khoảng 120 nhóm vay tự nguyện để tăng hỗ trợ đồng đẳng và quản lý vốn hiệu quả.",
  "Đào tạo kiến thức tài chính và kỹ năng kinh doanh cho ít nhất 800 phụ nữ.",
  "Phấn đấu ít nhất 80% khách hàng vay có việc làm hoặc hoạt động tạo thu nhập sau khi tham gia chương trình.",
  "Kiểm soát dư nợ quá hạn trên 30 ngày không vượt quá 5%.",
  "Từng bước phát triển quỹ cho vay quay vòng, nâng cao hiệu quả sử dụng vốn và khả năng tự chủ tài chính.",
];

export const partners = {
  professional: [
    {
      name: "Cục Cảnh sát quản lý trại giam (Bộ Công an)",
      role: "Cho phép tổ chức vào trại giam tư vấn hướng nghiệp trước khi mãn hạn, cung cấp danh sách người sắp mãn hạn (theo quy trình phối hợp) để chuẩn bị hỗ trợ ngay khi ra trại.",
    },
    {
      name: "Hội Liên hiệp Phụ nữ Việt Nam (cấp xã/phường)",
      role: "Giúp tìm và tiếp cận người mãn hạn khi họ về quê, hỗ trợ xác minh, giới thiệu, đồng hành tâm lý ban đầu.",
    },
    {
      name: "Sở LĐ-TB&XH",
      role: "Hỗ trợ pháp lý về chính sách tái hòa nhập, kết nối chương trình đào tạo nghề miễn phí có sẵn của tỉnh.",
    },
  ],
  training: [
    {
      name: "Trung tâm dạy nghề địa phương",
      role: "Đào tạo miễn phí hoặc giảm học phí (may mặc, nấu ăn, làm tóc, thủ công).",
    },
    {
      name: "Doanh nghiệp vừa và nhỏ",
      role: "Cam kết nhận một số lượng lao động nhất định sau đào tạo, đổi lại được giảm thuế hoặc quảng bá hình ảnh doanh nghiệp có trách nhiệm xã hội.",
    },
  ],
};

export const funding = {
  intro:
    "Đơm Hoa vận hành chủ yếu nhờ nguồn tài trợ, được dùng để phát triển quỹ cho vay quay vòng (khi được phép), đào tạo nghề, tư vấn tài chính và hỗ trợ phụ nữ phát triển sinh kế.",
  sources: [
    {
      title: "Tổ chức quốc tế (dự kiến huy động)",
      body: "UN Women, Quỹ Canada dành cho các sáng kiến địa phương (CFLI), Chương trình Viện trợ Trực tiếp của Chính phủ Úc (DAP), Global Fund for Women.",
    },
    {
      title: "Doanh nghiệp có chương trình trách nhiệm xã hội (CSR, dự kiến)",
      body: "Unilever, Vinamilk, Viettel, MB Bank, FPT.",
    },
    {
      title: "Nguồn vốn khác",
      body: "Hội Liên hiệp Phụ nữ Việt Nam; hợp tác với Ngân hàng Chính sách Xã hội (tín dụng cho người chấp hành xong án phạt tù theo Quyết định 22/2023/QĐ-TTg); các tổ chức phi lợi nhuận trong và ngoài nước về tái hòa nhập cộng đồng; tiền gửi tiết kiệm tự nguyện.",
    },
  ],
  mix: [
    { label: "Tài trợ từ tổ chức quốc tế", share: 35 },
    { label: "Tài trợ doanh nghiệp (CSR)", share: 35 },
    { label: "Thu nhập lãi cho vay", share: 25 },
    { label: "Thu nhập từ tiền gửi và đầu tư hợp pháp", share: 5 },
  ],
  outlook:
    "Về dài hạn, Đơm Hoa hướng tới tăng tỷ trọng thu nhập từ hoạt động tài chính để tự chủ và bảo đảm tính bền vững của quỹ cho vay quay vòng.",
};

export const legal = [
  "Đơm Hoa là tổ chức tài chính vi mô hoạt động theo Luật Các tổ chức tín dụng 2024 và Nghị định 162/2024/NĐ-CP, liên kết với Hội Liên hiệp Phụ nữ Việt Nam.",
  "Thông tin án tích, sức khỏe, tâm lý là dữ liệu cá nhân nhạy cảm, được bảo vệ theo Luật Bảo vệ dữ liệu cá nhân 2025 và chỉ chia sẻ khi có sự đồng ý của khách hàng.",
  "Quỹ xã hội, từ thiện cho hoạt động đào tạo và đồng hành tuân thủ Nghị định 93/2019/NĐ-CP.",
];

export const stories = [
  {
    who: "Chị P",
    role: "Chủ quán nước",
    quote:
      "Khoảng thời gian bắt đầu lại sau những ngày tháng lầm lỗi thực sự rất khó khăn, tôi gần như phải bắt đầu lại bằng hai bàn tay trắng. Trở ngại lớn nhất không chỉ nằm ở vốn liếng làm ăn, mà còn ở việc tìm lại niềm tin của mọi người và của chính mình. Nhờ sự hỗ trợ từ Đơm Hoa, tôi có cơ hội vay vốn để bắt đầu công việc kinh doanh nhỏ, tự nuôi sống bản thân và từng bước xây dựng lại cuộc đời. Tôi mong rằng, bằng sự cố gắng mỗi ngày, mình sẽ có một khởi đầu mới và một tương lai tốt đẹp hơn. Tôi đã có cơ hội biến dự định thành hiện thực, từng bước ổn định cuộc sống và tự tin hơn vào tương lai. Với tôi, đó không chỉ là một khoản vay, mà còn là niềm tin để bắt đầu một hành trình mới.",
    excerpt: "Với tôi, đó không chỉ là một khoản vay, mà còn là niềm tin để bắt đầu một hành trình mới.",
  },
  {
    who: "Chị H",
    role: "Bán hàng online",
    quote:
      "Khi ấy mới tái hòa nhập cộng đồng, tôi còn không biết dùng mạng xã hội, Đơm Hoa đã cho tôi một cuộc sống mới, cho tôi một công việc thậm chí trở thành xu hướng bây giờ. Tôi vẫn luôn dõi theo, ủng hộ tổ chức, mong tổ chức ngày một được nhiều người biết đến.",
    excerpt: "Khi ấy tôi còn không biết dùng mạng xã hội, Đơm Hoa đã cho tôi một cuộc sống mới.",
  },
  {
    who: "Chị H",
    role: "Thợ may gia công",
    quote: "Lớp may có cô kèm từng đường kim. Hết hai tháng là có chỗ làm chờ sẵn, không phải đi xin khắp nơi.",
    excerpt: "Hết hai tháng là có chỗ làm chờ sẵn, không phải đi xin khắp nơi.",
  },
  {
    who: "Chị X",
    role: "Chủ tiệm bánh",
    quote:
      "Ngày trở về, tôi từng nghĩ mình sẽ chẳng còn cơ hội làm lại cuộc đời. Nhờ khoản vay từ tổ chức Đơm Hoa, tôi đã mở một tiệm bánh nhỏ, bắt đầu từ những đơn hàng trong khu phố. Từng chút một, tôi học cách quản lý tài chính, giữ chữ tín với khách hàng và mở rộng công việc. Hôm nay, tiệm bánh của tôi đã có những khách hàng quen thuộc và mang lại thu nhập ổn định. Tôi biết ơn Đơm Hoa vì đã không nhìn tôi qua những sai lầm trong quá khứ, mà cho tôi cơ hội chứng minh rằng ai cũng xứng đáng có một khởi đầu mới.",
    excerpt: "Tôi biết ơn Đơm Hoa vì đã không nhìn tôi qua những sai lầm trong quá khứ.",
  },
  {
    who: "Chị N",
    role: "Làm đồ thủ công",
    quote:
      "Tôi rất vui vì những món đồ mình làm ra được mọi người ủng hộ và đón nhận như vậy, được đóng góp một phần nhỏ bé mang đồ thủ công mỹ nghệ đến gần hơn với mọi người.",
    excerpt: "Tôi rất vui vì những món đồ mình làm ra được mọi người ủng hộ và đón nhận.",
  },
];

/* ---------------- Sản phẩm tài chính ---------------- */

export type Row = { label: string; value: string };

export const loanPackages = [
  {
    id: "goi-1",
    number: 1,
    name: "Nảy Mầm",
    title: "Vốn khởi sự sinh kế theo nhóm",
    summary:
      "Khoản vay nhỏ cho phụ nữ có kế hoạch tạo thu nhập từ tự doanh, nghề thủ công hoặc kinh doanh tại nhà. Nhóm vay tạo không gian hỗ trợ và chia sẻ kinh nghiệm tự nguyện; không thay thế thẩm định khả năng trả nợ riêng của từng khách hàng.",
    highlight: { amount: "5–15 triệu", rate: "0,8%/tháng" },
    rows: [
      { label: "Hạn mức ban đầu", value: "5–15 triệu đồng/khách hàng, căn cứ kế hoạch vốn và dòng tiền" },
      { label: "Hạn mức chu kỳ tiếp theo", value: "15–30 triệu; tối đa 50 triệu trong trường hợp phù hợp, sau khi thẩm định lại" },
      { label: "Kỳ hạn", value: "6–12 tháng; khoản đầu tư công cụ có thể dài hơn" },
      { label: "Lịch trả nợ", value: "Hằng tuần hoặc hằng tháng; theo mùa vụ nếu có căn cứ" },
      { label: "Ân hạn gốc", value: "Có thể 2–4 tuần; nêu rõ lãi trong thời gian ân hạn và tổng nghĩa vụ phải trả" },
      {
        label: "Lãi suất",
        value: "0,8%–1,0%/tháng, tính trên dư nợ giảm dần: chu kỳ đầu (5–15 triệu) 0,8%/tháng; chu kỳ tiếp theo (15–30 triệu) 1,0%/tháng",
      },
    ] as Row[],
    why: "Tiệm cận lãi suất cho vay hộ nghèo/mới thoát nghèo của Ngân hàng Chính sách Xã hội, phù hợp với phụ nữ mới tái hòa nhập có thu nhập chưa ổn định; lãi ưu đãi nhẹ thay vì miễn lãi giúp hình thành kỷ luật tài chính mà không tạo áp lực quá hạn.",
  },
  {
    id: "goi-2",
    number: 2,
    name: "Chung Vườn",
    title: "Đồng hành cùng Doanh nghiệp xã hội",
    summary:
      "Dành cho doanh nghiệp/hộ kinh doanh tuyển dụng và duy trì việc làm an toàn, ổn định cho phụ nữ sau cải tạo.",
    highlight: { amount: "50–500 triệu", rate: "0,5–0,8%/tháng" },
    rows: [
      { label: "Mục đích", value: "Vốn lưu động hoặc đầu tư sản xuất, gắn với kế hoạch tuyển dụng/duy trì việc làm cho người tái hòa nhập" },
      { label: "Hạn mức", value: "50–500 triệu đồng, tùy quy mô xưởng/hộ kinh doanh" },
      { label: "Thời hạn", value: "Theo phương án kinh doanh và chu kỳ vốn" },
      { label: "Lãi suất", value: "0,5%–0,8%/tháng, giảm theo bậc thang tỷ lệ lao động nữ sau cải tạo" },
      {
        label: "Hình thức",
        value: "Vay doanh nghiệp/hộ kinh doanh; có thể kết hợp bảo lãnh một phần từ quỹ xã hội hoặc quỹ bảo lãnh tín dụng địa phương; báo cáo việc làm hằng quý",
      },
    ] as Row[],
    why: "Doanh nghiệp phải bỏ chi phí đào tạo và chấp nhận rủi ro thích ứng ban đầu khi nhận lao động sau cải tạo, nên ưu đãi lãi suất là khuyến khích tài chính trực tiếp giúp giảm chi phí vốn.",
  },
  {
    id: "goi-3",
    number: 3,
    name: "Gieo Nghề",
    title: "Học nghề, vững bước tương lai",
    summary:
      "Gói hỗ trợ phụ nữ sau cải tạo có kỹ năng nghề hoặc chứng chỉ cần thiết để tìm việc làm. Phù hợp khi khách hàng chưa sẵn sàng khởi nghiệp, cần học nghề, cập nhật kỹ năng hoặc có lịch chăm sóc gia đình cần cân nhắc.",
    highlight: { amount: "3–15 triệu", rate: "0–0,5%/tháng" },
    rows: [
      { label: "Đối tượng", value: "Khách hàng có nhu cầu học nghề phù hợp với cơ hội việc làm và có kế hoạch trả nợ khả thi" },
      { label: "Mục đích", value: "Học phí, lệ phí chứng chỉ, vật liệu thực hành và dụng cụ thiết yếu liên quan trực tiếp đến khóa học" },
      { label: "Hạn mức", value: "3–15 triệu đồng, điều chỉnh theo chi phí thực tế" },
      { label: "Thời hạn", value: "6–12 tháng" },
      {
        label: "Lãi suất",
        value: "0%–0,5%/tháng. Áp dụng thông thường: 0,5%/tháng trong thời gian học. Ưu đãi đặc biệt: 0%/năm (miễn toàn bộ lãi) nếu hoàn thành khóa học và đạt chứng nhận nghề",
      },
      { label: "Hình thức", value: "Vay cá nhân; ưu tiên thanh toán trực tiếp cho cơ sở đào tạo, các khoản khác cần có căn cứ chi tiêu" },
      {
        label: "Nguồn trả nợ",
        value: "Đánh giá thu nhập hiện tại, hỗ trợ gia đình nếu có, triển vọng việc làm và lịch bắt đầu trả nợ; không giả định người học chắc chắn có việc",
      },
      { label: "Dịch vụ đi kèm", value: "Tư vấn chọn nghề, chuẩn bị CV/phỏng vấn, kết nối nhà tuyển dụng, theo dõi sau đào tạo" },
    ] as Row[],
    why: "Học nghề không tạo dòng tiền ngay mà chỉ đầu tư cho năng lực lao động tương lai, nên lãi suất thông thường sẽ thành rào cản tiếp cận. Mức 0% khi tốt nghiệp là khoản trợ cấp có điều kiện, tạo động lực hoàn thành chương trình; nguồn bù đắp lãi có thể huy động từ Quỹ tài trợ xã hội.",
    note: "Kết hợp khoản vay với học bổng hoặc tài trợ không hoàn lại để giảm gánh nặng nợ cho người thu nhập thấp. Không cấp vay nếu chưa xác định được nguồn trả nợ khả thi.",
  },
  {
    id: "goi-4",
    number: 4,
    name: null,
    title: "Phát triển sinh kế, tăng trưởng bền vững",
    summary:
      "Gói tài trợ cho phụ nữ sau cải tạo đã có hoạt động tạo thu nhập và muốn mở rộng có kiểm soát, như tăng đơn hàng, mua thêm thiết bị hoặc phát triển kênh bán hàng tại nhà/online. Đây không phải khoản vay lớn tự động sau khi trả hết nợ.",
    highlight: { amount: "15–50 triệu", rate: "1,0–1,16%/tháng" },
    rows: [
      { label: "Đối tượng", value: "Khách hàng đã kinh doanh hoặc hành nghề thực tế, có dữ liệu thu chi tối thiểu" },
      { label: "Mục đích", value: "Bổ sung máy móc, tăng hàng tồn kho, nguyên liệu hoặc mở rộng quy mô có cơ sở" },
      { label: "Hạn mức", value: "15–50 triệu đồng, phụ thuộc khả năng trả nợ" },
      { label: "Thời hạn", value: "12–24 tháng" },
      { label: "Lãi suất", value: "1,0%–1,16%/tháng" },
      { label: "Hình thức", value: "Vay cá nhân; giải ngân một lần hoặc nhiều đợt tùy kế hoạch sử dụng vốn" },
      { label: "Điều kiện xét vay", value: "Dòng tiền, dư nợ hiện tại, lịch sử trả nợ, nhu cầu vốn và rủi ro ngành nghề" },
      { label: "Dịch vụ đi kèm", value: "Tư vấn giá bán, tính lợi nhuận, quản lý tồn kho, kết nối đầu ra" },
    ] as Row[],
    why: "Khách hàng ở giai đoạn này đã qua bước khởi sự, có lịch sử trả nợ tốt và doanh thu/lợi nhuận thực tế. Mức lãi suất tiệm cận thị trường tài chính vi mô giúp tổ chức bù đắp chi phí vận hành, trích lập dự phòng rủi ro và bù chi phí cho các gói ưu đãi/học nghề.",
    note: "Không tăng hạn mức chỉ vì khách hàng trả nợ đúng hạn; cần xác định khoản vay mới có tạo thêm dòng tiền đủ bù nghĩa vụ nợ hay không.",
  },
] as const;

export const groupRules = [
  "Nhóm 5–7 người, tự nguyện tham gia, cùng địa bàn hoặc có thể gặp nhau định kỳ (hai tuần/lần giai đoạn đầu). Trưởng nhóm hỗ trợ liên lạc, chia sẻ thông tin; cán bộ tín dụng chịu trách nhiệm thẩm định và theo dõi.",
  "Mỗi thành viên có hồ sơ vay, hợp đồng và nghĩa vụ trả nợ riêng. Không tự động buộc thành viên khác trả nợ thay, không dùng tiền tiết kiệm cá nhân để trả nợ cho người khác nếu không có sự đồng ý rõ ràng và tự nguyện.",
  "Khi gặp cú sốc thu nhập, cán bộ tín dụng cùng chị đánh giá nguyên nhân và tìm phương án phù hợp: điều chỉnh lịch trả nợ theo quy định, tư vấn dòng tiền hoặc kết nối hỗ trợ xã hội.",
  "Không dùng áp lực cộng đồng hoặc thông tin nhạy cảm để thu hồi nợ. Lịch sử chấp hành án và hồ sơ tài chính không được công khai trong nhóm.",
];

export const loanUses = [
  { purpose: "Mua công cụ lao động", items: "Máy may, dụng cụ làm tóc/làm móng, dụng cụ chế biến thực phẩm, thiết bị bán hàng nhỏ, dụng cụ sửa chữa", limit: "5–30 triệu; 6–18 tháng" },
  { purpose: "Vốn lưu động", items: "Nhập hàng, nguyên liệu, vật tư thủ công, bao bì, vận chuyển", limit: "5–20 triệu; 3–9 tháng" },
  { purpose: "Khởi sự kinh doanh", items: "Bán hàng tại nhà/online, chế biến thực phẩm, may vá, làm đẹp, thủ công, chăm sóc", limit: "5–15 triệu; 6–12 tháng" },
  { purpose: "Mở rộng sinh kế", items: "Tăng hàng tồn kho, bổ sung máy móc, mở rộng hoạt động đã có doanh thu", limit: "15–50 triệu; 12–24 tháng" },
  { purpose: "Học nghề/chứng chỉ", items: "Học phí và lệ phí chứng chỉ các nghề có cơ hội việc làm thực tế", limit: "3–15 triệu; 6–12 tháng" },
];

export const loanUsesNote =
  "Khoản mua thiết bị, học phí có chứng từ có thể thanh toán trực tiếp cho nhà cung cấp; khoản chi nhỏ, không chính thức được xác minh theo cách tương xứng (phiếu mua hàng, xác nhận nhà cung cấp, kiểm tra thực tế). Chúng tôi không áp dụng một thủ tục nặng nề như nhau cho mọi khoản vay.";

export const socialEnterpriseTiers = [
  { share: "10%–15%", rate: "0,8", note: "ưu đãi cơ bản" },
  { share: "15%–20%", rate: "0,7", note: "" },
  { share: "Trên 20%", rate: "0,5", note: "ưu đãi tối đa" },
];

export const socialEnterpriseTerms = {
  conditions:
    "Có hoạt động thực tế, phương án sử dụng vốn và nguồn trả nợ kiểm chứng được; có kế hoạch tuyển dụng/duy trì việc làm cho người tái hòa nhập (tỷ lệ mục tiêu 10–20% dùng làm tiêu chí thí điểm); có thỏa thuận lao động phù hợp, tuân thủ quy định lao động; cam kết không phân biệt đối xử, không tuyển dụng hình thức chỉ để nhận ưu đãi và bảo vệ thông tin cá nhân người lao động.",
  monitoring:
    "Báo cáo quý về số lao động được tuyển, thời gian làm việc, mức duy trì việc làm. Nếu chưa đạt cam kết, chúng tôi xác minh nguyên nhân, cho cơ hội khắc phục, rồi mới điều chỉnh ưu đãi hoặc dừng giải ngân theo hợp đồng. Hiệu quả được đo bằng số việc làm duy trì được và chi phí hỗ trợ trên mỗi việc làm, không chỉ bằng số tiền giải ngân.",
};

export const generalConditions = [
  "Nữ, từ 18 tuổi trở lên, có năng lực hành vi dân sự đầy đủ.",
  "Đã hoàn thành nghĩa vụ chấp hành án theo quy định, có giấy tờ xác nhận.",
  "Có nơi cư trú ổn định (thường trú hoặc tạm trú) hoặc xác nhận của chính quyền/Hội Phụ nữ cơ sở.",
  "Có ý tưởng hoặc kế hoạch sinh kế rõ ràng (không cần thu nhập cố định).",
  "Tham gia buổi tập huấn đầu vào và (với gói nhóm) cùng lập nhóm bảo lãnh tương trợ.",
  "Ưu tiên cho chị đang nuôi con nhỏ hoặc phụ dưỡng cha mẹ.",
];

export const progressiveLending =
  "Trả đúng hạn khoản vay trước → được xét hạn mức cao hơn và thời hạn dài hơn ở lần sau. Đây chính là cách bạn tự xây dựng lại lịch sử tín dụng của mình cùng Đơm Hoa.";

export const appraisal =
  "Vì khách hàng chưa có thu nhập cố định, Đơm Hoa thẩm định khác với ngân hàng: thay vì sao kê lương hay tài sản bảo đảm, chúng tôi đánh giá kế hoạch sinh kế, tinh thần cam kết, xác nhận cư trú và sự bảo lãnh tương trợ của nhóm.";

export const loanSteps = [
  { title: "Liên hệ", body: "Gọi hotline, nhắn Zalo, đến văn phòng hoặc nhờ Hội Phụ nữ giới thiệu", time: "" },
  { title: "Tư vấn riêng", body: "Gặp cán bộ tín dụng nữ trong không gian kín đáo, chọn gói phù hợp", time: "1 buổi" },
  { title: "Tập huấn đầu vào", body: "2 buổi: quản lý tài chính cá nhân, lập kế hoạch kinh doanh; lập nhóm (nếu vay nhóm)", time: "2 buổi" },
  { title: "Thẩm định", body: "Cán bộ thăm nơi ở/nơi kinh doanh, đánh giá kế hoạch và độ cam kết", time: "2–3 ngày" },
  { title: "Phê duyệt và ký hợp đồng", body: "Hội đồng xét duyệt, giải thích rõ lịch trả nợ trước khi ký", time: "2–3 ngày" },
  { title: "Giải ngân và đồng hành", body: "Nhận vốn (chuyển khoản/tiền mặt), cán bộ theo sát định kỳ, tư vấn kịp thời khi khó khăn", time: "Giải ngân trong 48 giờ sau khi ký" },
];

export const savings = {
  intro:
    "Tiết kiệm mục tiêu có thưởng và Tiết kiệm trung tâm (lãi suất 3,0%–4,5%/năm) giúp khách hàng hình thành thói quen tích lũy, có quỹ dự phòng và vốn đối ứng cho sinh kế. Tiết kiệm hoàn toàn tự nguyện, không bắt buộc phải vay để được dùng dịch vụ tiết kiệm.",
  products: [
    {
      id: "tiet-kiem-muc-tieu",
      title: "Tiết kiệm mục tiêu có thưởng",
      rows: [
        { label: "Mục tiêu", value: "Khách hàng tự chọn mục tiêu cụ thể: mua công cụ lao động, học nghề, dự phòng khẩn cấp, vốn kinh doanh hoặc chi phí học tập của con" },
        { label: "Mức tích lũy", value: "100.000–300.000 đồng/tuần là mức tham khảo; khách hàng chọn mức phù hợp và có thể thay đổi theo quy chế" },
        { label: "Thời gian", value: "6 hoặc 12 tháng" },
        { label: "Lãi suất tiền gửi", value: "3,0%–4,5%/năm, tính theo ngày, chi trả hằng kỳ" },
        { label: "Thưởng tích lũy", value: "Có thể thiết kế mức thưởng 5–10% trên phần tiền đủ điều kiện, chỉ áp dụng khi nguồn tài trợ đã được xác nhận và điều kiện tính thưởng minh bạch" },
        { label: "Nguồn thưởng", value: "Quỹ xã hội/nhà tài trợ theo thỏa thuận; công khai điều kiện và thời điểm chi trả" },
        { label: "Rút trước hạn", value: "Khách hàng được tiếp cận tiền gốc theo điều kiện sản phẩm và quy định áp dụng; có thể mất quyền nhận thưởng nếu điều khoản đã được giải thích rõ" },
        { label: "Hình thức", value: "Gửi tiết kiệm định kỳ hằng tuần (nộp tại buổi sinh hoạt trung tâm hoặc điểm giao dịch)" },
      ] as Row[],
    },
    {
      id: "tiet-kiem-trung-tam",
      title: "Tiết kiệm trung tâm",
      rows: [
        { label: "Đối tượng", value: "Thành viên các nhóm vay; có thể mở rộng cho người chưa vay" },
        { label: "Mục đích", value: "Tạo thói quen tích lũy hằng tuần và quỹ dự phòng cá nhân" },
        { label: "Mức gửi", value: "Do khách hàng tự chọn, nộp tại buổi họp trung tâm cùng kỳ trả nợ" },
        { label: "Lãi suất", value: "Đề xuất áp dụng cùng khung 3,0%–4,5%/năm" },
        { label: "Rút tiền", value: "Theo điều kiện sản phẩm, quy định rõ thời điểm và các khoản phí (nếu có)" },
        { label: "Quỹ tương trợ nhóm", value: "Nếu các thành viên lập thì tách biệt khỏi tiết kiệm cá nhân, tự nguyện, có quy chế và sổ sách riêng" },
      ] as Row[],
    },
  ],
  flexible: [
    "Cho phép hoãn kỳ đóng góp trong giới hạn được công bố, không tự động loại khách hàng khỏi chương trình.",
    "Không dùng tiền tiết kiệm của khách hàng để tự động cấn trừ khoản vay hoặc nghĩa vụ của thành viên khác nếu không có căn cứ pháp lý và sự đồng ý hợp lệ.",
    "Giải thích rõ tiền tiết kiệm được quản lý bởi đơn vị nào, cơ chế bảo vệ tiền, quyền rút tiền và các khoản phí.",
    "Khuyến khích ghi chép thu chi và lập quỹ dự phòng; không gây áp lực phải tiết kiệm nếu điều đó khiến khách hàng thiếu tiền cho nhu cầu thiết yếu.",
  ],
};

/* ---------------- Sản phẩm cộng đồng ---------------- */

export const counselling = {
  id: "tham-van",
  title: "Tham vấn và hỗ trợ tâm lý",
  rows: [
    { label: "Mục tiêu", value: "Giúp khách hàng giảm mặc cảm, tự trách, lo âu khi trở về cộng đồng; phục hồi sự tự tin để tìm việc, học nghề hoặc kinh doanh" },
    { label: "Đối tượng", value: "Phụ nữ sau cải tạo có nhu cầu, đăng ký tự nguyện; không ảnh hưởng đến việc xét vay" },
    { label: "Hình thức", value: "Tham vấn cá nhân và sinh hoạt nhóm hỗ trợ đồng đẳng, trực tiếp hoặc trực tuyến" },
    { label: "Người thực hiện", value: "Tham vấn viên/nhân viên công tác xã hội được đào tạo về tham vấn, bảo mật và chuyển tuyến; trị liệu chuyên sâu chỉ do người hành nghề có giấy phép tại cơ sở được cấp phép thực hiện" },
    { label: "Thời lượng đề xuất", value: "Tham vấn cá nhân 4–8 buổi, mỗi buổi 45–60 phút; sinh hoạt nhóm 6–8 buổi, 6–10 người, hai tuần một lần" },
    { label: "Chi phí cho khách hàng", value: "Đề xuất miễn phí; nếu có thu phí phải niêm yết công khai và thông báo trước" },
  ] as Row[],
  steps: [
    { title: "Tiếp nhận và giải thích", body: "Nói rõ dịch vụ là tự nguyện, không ảnh hưởng đến quyết định vay; nội dung, giới hạn bảo mật và quyền rút lại sự đồng ý." },
    { title: "Xin đồng ý bằng văn bản", body: "Về việc thu thập và xử lý thông tin; hồ sơ tham vấn được lưu tách biệt khỏi hồ sơ tín dụng." },
    { title: "Đánh giá nhu cầu ban đầu", body: "Tìm hiểu mong muốn của khách hàng; không chẩn đoán bệnh, không kết luận về tình trạng tâm thần." },
    { title: "Tham vấn cá nhân", body: "Lắng nghe, giúp khách hàng nhận diện cảm xúc, giảm mặc cảm tội lỗi, xây dựng kế hoạch nhỏ cho việc làm, gia đình và các mối quan hệ." },
    { title: "Sinh hoạt nhóm đồng đẳng", body: "Chia sẻ kinh nghiệm theo quy tắc chung (tự nguyện chia sẻ, không ép kể, giữ bí mật, không phán xét); người điều phối được đào tạo." },
    { title: "Chuyển tuyến khi cần", body: "Có dấu hiệu trầm cảm nặng, rối loạn tâm thần, ý nghĩ tự hại hoặc tự sát, nghiện chất, hay bị bạo lực thì giới thiệu đến cơ sở khám bệnh, chữa bệnh có giấy phép hoặc cơ quan chức năng, hội phụ nữ địa phương; tình huống nguy hiểm đến tính mạng thì gọi cấp cứu 115." },
    { title: "Theo dõi và kết thúc", body: "Lưu trữ hồ sơ theo thời hạn đã thông báo; khách hàng có thể dừng bất cứ lúc nào." },
  ],
  compliance: [
    "Phân biệt tham vấn với trị liệu y khoa: Theo Luật Khám bệnh, chữa bệnh 2023 (Luật số 15/2023/QH15), tâm lý lâm sàng là chức danh phải có giấy phép hành nghề. Vì vậy sản phẩm gọi là “tham vấn, hỗ trợ tâm lý”. Tham vấn viên không chẩn đoán, không điều trị rối loạn tâm thần, không kê thuốc. Chỉ dùng cụm từ “trị liệu tâm lý” khi do người hành nghề có giấy phép thực hiện tại cơ sở được cấp phép, theo Nghị định 96/2023/NĐ-CP.",
    "Dữ liệu cá nhân: Thông tin về sức khỏe và tình trạng tâm lý là dữ liệu cá nhân nhạy cảm. Việc xử lý phải theo Luật Bảo vệ dữ liệu cá nhân 2025 (Luật số 91/2025/QH15, hiệu lực từ 01/01/2026) và Nghị định 356/2025/NĐ-CP: thông báo rõ đây là dữ liệu nhạy cảm, có sự đồng ý rõ ràng và lưu giữ được, cho phép rút lại sự đồng ý. Thông tin về lý lịch tư pháp, việc chấp hành án cũng phải được bảo vệ ở mức tương đương và đối chiếu với danh mục dữ liệu nhạy cảm trong Nghị định 356/2025/NĐ-CP.",
    "Bảo mật nội bộ: Cán bộ tín dụng không truy cập nội dung tham vấn; không dùng nội dung này để thẩm định, đòi nợ hay chia sẻ cho nhóm vay, nhà tuyển dụng.",
    "Giới hạn bảo mật: Phải nói trước với khách hàng các trường hợp buộc phải chia sẻ (nguy cơ tính mạng, yêu cầu hợp pháp của cơ quan có thẩm quyền).",
    "Đăng ký dịch vụ: Nếu cung cấp tham vấn như một dịch vụ công tác xã hội thường xuyên, cần xác nhận với cơ quan quản lý địa phương về điều kiện đăng ký, cấp phép trước khi triển khai.",
  ],
};

export const financeEducation = {
  id: "giao-duc-tai-chinh",
  title: "Giáo dục tài chính và khởi nghiệp",
  name: "Chồi Xanh",
  rows: [
    { label: "Mục tiêu", value: "Trang bị kỹ năng quản lý chi tiêu gia đình, hiểu nghĩa vụ vay trả và lập kế hoạch kinh doanh nhỏ" },
    { label: "Đối tượng", value: "Khách hàng vay và không vay" },
    { label: "Hình thức", value: "Lớp học trực tiếp tại điểm sinh hoạt trung tâm và lớp trực tuyến theo mô hình học viện khởi nghiệp ảo" },
    { label: "Phương pháp", value: "Học hỏi đồng đẳng: nhóm 5–8 người, tình huống thực tế, bài tập lập sổ thu chi và kế hoạch kinh doanh; cựu học viên chia sẻ kinh nghiệm trên tinh thần tự nguyện" },
    { label: "Người thực hiện", value: "Giảng viên/cán bộ đào tạo của tổ chức, chuyên gia mời giảng, cựu học viên đã qua tập huấn" },
    { label: "Xác nhận kết quả", value: "Giấy xác nhận hoàn thành khóa tập huấn của tổ chức; không cấp chứng chỉ nghề" },
    { label: "Chi phí cho khách hàng", value: "Đề xuất miễn phí" },
  ] as Row[],
  modules: [
    { name: "Quản lý chi tiêu gia đình", content: "Lập ngân sách, ghi chép thu chi, phân biệt tiền kinh doanh với tiền gia đình, lập quỹ dự phòng", length: "2 buổi", mode: "Trực tiếp" },
    { name: "Vay, trả nợ và tiết kiệm", content: "Hiểu lãi suất dư nợ giảm dần, lịch trả nợ và tổng nghĩa vụ; quyền của khách hàng; nhận diện vay nặng lãi và lừa đảo tài chính", length: "2 buổi", mode: "Trực tiếp" },
    { name: "Lập kế hoạch kinh doanh nhỏ", content: "Chọn ý tưởng, tìm hiểu thị trường, tính giá bán, lợi nhuận và dòng tiền", length: "3 buổi", mode: "Trực tiếp hoặc trực tuyến" },
    { name: "Bán hàng và quản lý cửa hàng nhỏ", content: "Chăm sóc khách, quản lý tồn kho, bán hàng online cơ bản", length: "2 buổi", mode: "Trực tuyến hoặc thực hành" },
    { name: "Thủ tục kinh doanh cơ bản", content: "Giới thiệu chung về đăng ký kinh doanh, thuế, hóa đơn; hướng dẫn đến cơ quan có thẩm quyền", length: "1 buổi", mode: "Trực tiếp" },
    { name: "Kỹ năng tìm việc", content: "Hồ sơ xin việc, phỏng vấn, quyền và nghĩa vụ của người lao động", length: "2 buổi", mode: "Trực tiếp hoặc trực tuyến" },
  ],
  compliance: [
    "Chứng chỉ và đào tạo nghề: Khóa tập huấn kỹ năng không phải là chương trình giáo dục nghề nghiệp. Nếu muốn tổ chức đào tạo nghề có cấp chứng chỉ, bằng cấp thì phải do cơ sở giáo dục nghề nghiệp hợp pháp thực hiện theo Luật Giáo dục nghề nghiệp 2025 (Luật số 124/2025/QH15, hiệu lực từ 01/01/2026); cơ sở phải đăng ký thông tin chương trình vào cơ sở dữ liệu chuyên ngành trước khi tuyển sinh. Vì vậy học phí học nghề của gói Gieo Nghề chỉ nên thanh toán cho cơ sở đào tạo hợp pháp.",
    "Không đi quá phạm vi giáo dục: Không tư vấn đầu tư, môi giới chứng khoán, bảo hiểm, tiền mã hóa; không giới thiệu hay lôi kéo tham gia bán hàng đa cấp.",
    "Nội dung thuế, pháp lý: Chỉ cung cấp thông tin phổ biến kèm ngày cập nhật, hướng dẫn khách hàng đến cơ quan thuế hoặc cơ quan đăng ký kinh doanh; không thay thế tư vấn pháp lý, tư vấn thuế.",
    "Dữ liệu và hình ảnh: Chỉ ghi hình, chụp ảnh, ghi âm khi có sự đồng ý rõ ràng; lớp trực tuyến dùng nền tảng bảo mật, không công khai danh sách học viên.",
    "Quyền tác giả: Dùng tài liệu tự biên soạn hoặc được cấp phép sử dụng.",
    "Tính tự nguyện: Không bắt buộc học thêm để được vay ngoài buổi tập huấn đầu vào ngắn đã nêu trong Điều kiện chung.",
  ],
};

export const socialShop = {
  id: "cua-hang-xa-hoi",
  title: "Cửa hàng xã hội thực hành",
  rows: [
    { label: "Mục tiêu", value: "Tạo nơi thực hành bán hàng, thu ngân, quản lý kho, trưng bày và bán hàng online; tạo thu nhập ngắn hạn và chứng minh kinh nghiệm làm việc" },
    { label: "Mô hình", value: "Cửa hàng đồ cũ và hàng quyên góp, do doanh nghiệp xã hội hoặc đơn vị kinh doanh đăng ký hợp pháp vận hành" },
    { label: "Đối tượng", value: "Học viên đã hoàn thành các học phần cơ bản của Chồi Xanh hoặc có nhu cầu thực hành trước khi vay" },
    { label: "Thời gian thực tập đề xuất", value: "1–3 tháng, luân phiên các vị trí: tiếp nhận quyên góp, phân loại, định giá, trưng bày, thu ngân, bán online, kiểm kê" },
    { label: "Đầu ra", value: "Giới thiệu việc làm tại cửa hàng, tại doanh nghiệp đối tác gói Chung Vườn, hoặc tự kinh doanh với gói Nảy Mầm" },
    { label: "Doanh thu", value: "Dùng để trả thu nhập cho học viên, chi phí vận hành và tái đầu tư cho các hoạt động hỗ trợ phụ nữ sau cải tạo" },
  ] as Row[],
  compliance: [
    "Tư cách pháp lý: Cửa hàng phải đăng ký kinh doanh hợp pháp. Nếu xác định là doanh nghiệp xã hội, phải đáp ứng khoản 1 Điều 10 Luật Doanh nghiệp 2020: đăng ký theo Luật Doanh nghiệp, mục tiêu giải quyết vấn đề xã hội vì lợi ích cộng đồng, dùng ít nhất 51% lợi nhuận sau thuế hằng năm để tái đầu tư cho mục tiêu đã đăng ký, kèm cam kết thực hiện mục tiêu xã hội theo Nghị định 47/2021/NĐ-CP. Cần đối chiếu bản luật còn hiệu lực mới nhất vì đã có sửa đổi.",
    "Quan hệ lao động: Nếu học viên làm việc có trả công và chịu sự quản lý, điều hành của cửa hàng thì phải xác lập hợp đồng lao động theo Bộ luật Lao động 2019, bảo đảm tiền lương không thấp hơn mức lương tối thiểu vùng và tham gia bảo hiểm bắt buộc theo quy định. Không dùng danh nghĩa “thực tập” để thay thế lao động chính thức không lương. Nếu là thực tập hoặc học nghề thuần túy thì có thỏa thuận bằng văn bản về thời gian, nội dung, quyền lợi và an toàn lao động.",
    "Hàng hóa: Chỉ nhận và bán hàng quyên góp, ký gửi có nguồn gốc rõ ràng; có biên nhận khi nhận quyên góp; kiểm tra chất lượng và an toàn, vệ sinh; không bán hàng cấm, hàng giả, hàng nhập lậu hay hàng đã qua sử dụng nhập khẩu trái quy định; riêng mỹ phẩm, thực phẩm, thiết bị điện cần kiểm tra điều kiện bán.",
    "Thuế, hóa đơn, sổ sách: Thực hiện nghĩa vụ thuế, hóa đơn, chứng từ và sổ kế toán theo quy định; tách bạch tài khoản và sổ sách cửa hàng khỏi hoạt động tín dụng.",
    "Bảo mật danh tính: Không công khai học viên là người sau cải tạo với khách mua hàng, nhà tài trợ hay truyền thông nếu chưa được đồng ý bằng văn bản.",
    "Quyên góp, tài trợ: Có quy chế, sổ ghi nhận và báo cáo sử dụng; chỉ dùng đúng mục đích đã cam kết với bên tài trợ.",
  ],
};

/* ---------------- Dự án ---------------- */

export const project = {
  name: "Hạt mầm trong tay",
  subtitle: "Đào tạo nghề gắn với mục tiêu đầu ra",
  nature: [
    "Dự án hợp tác 3 bên: tổ chức vi mô; cơ sở dạy nghề; doanh nghiệp nhận lao động đầu ra.",
    "Triển khai theo từng lớp, không phải hoạt động thường xuyên, không đào tạo nghề chung chung mà đào tạo có việc làm chờ sẵn.",
  ],
  model:
    "Mỗi đợt đào tạo gắn với một nghề cụ thể đã có đầu ra cam kết trước. Nghề đầu tiên tổ chức chọn sẽ là may gia công cho một xưởng đã ký hợp đồng (các lớp tiếp theo có thể sẽ liên quan đến nấu ăn, cắt tóc, bán hàng online).",
  scale:
    "Ban đầu 1 lớp (tương đương 1 đợt) có khoảng 15–20 học viên, đào tạo 1 lớp trong thời gian 2 tháng, có 2 lớp/năm luân phiên theo nghề khác nhau tùy nhu cầu thị trường lao động. Quy mô sẽ tăng về số lượng học viên và số đợt trong năm nếu tổ chức đủ vững mạnh.",
  structure: [
    "Học nghề, có hỗ trợ sinh hoạt phí trong thời gian học",
    "Sát hạch tay nghề",
    "Ký hợp đồng lao động/hợp đồng bao tiêu sản phẩm nếu đủ điều kiện tốt nghiệp",
    "Được ưu tiên xét vay vốn nếu muốn tự làm thay vì đi làm thuê",
  ],
  partnersPerRound: "Doanh nghiệp nhận đầu ra và 1 cơ sở dạy nghề. Ký biên bản hợp tác trước khi mở đợt dạy.",
  outputs: "Tỷ lệ có việc làm; thu nhập ổn định sau tốt nghiệp trong vòng 1–3 tháng; số hợp đồng ký được.",
  phases: [
    {
      phase: "Giai đoạn 0: Chuẩn bị",
      time: "1 tháng trước khi bắt đầu",
      items: [
        "Ký biên bản hợp tác 3 bên. Điều kiện tiên quyết là xưởng cam kết: nhận tối thiểu 2/3 số học viên đạt sát hạch; ký hợp đồng lao động đúng luật (có bảo hiểm) hoặc hợp đồng gia công có đơn giá rõ ràng; cử thợ cả hướng dẫn và cho học viên thực hành trên dây chuyền thật.",
        "Tuyển chọn học viên qua giới thiệu của địa phương, phỏng vấn nhu cầu và nguyện vọng, thái độ, khám sức khỏe cơ bản. Ưu tiên người có con nhỏ, hoặc là trụ cột kinh tế.",
        "Chuẩn bị chương trình dạy gồm các bài học, kiến thức về tay nghề, kỹ năng mềm, kỷ luật lao động, giao tiếp nơi làm việc, quản lý tiền cơ bản.",
      ],
    },
    {
      phase: "Giai đoạn 1: Đào tạo",
      time: "2 tháng đầu",
      items: [
        "Mỗi tuần có 4 buổi đào tạo nghề.",
        "Song song có 4 buổi sinh hoạt nhóm (2 tuần 1 lần) nhằm tăng tính cộng đồng, giải quyết vấn đề về tâm lý và hòa nhập, gồm cách đối diện kỳ thị, quản lý căng thẳng và quản lý chi tiêu.",
        "Cuối tháng thứ 2 phân luồng đầu ra.",
      ],
    },
    {
      phase: "Giai đoạn 2: Đồng hành",
      time: "2 tháng tiếp theo",
      items: [
        "Cán bộ dự án thăm xưởng và họp nhóm hằng tháng, xử lý sớm mâu thuẫn, bỏ việc hoặc khó khăn cá nhân.",
        "Theo dõi thu nhập, chuyên cần và tỷ lệ lỗi.",
        "Học viên thuộc luồng A được khuyến khích gửi tiết kiệm định kỳ, tạo hồ sơ tích lũy để đủ điều kiện vay.",
      ],
    },
    {
      phase: "Giai đoạn 3: Tổng kết",
      time: "Tháng thứ 6",
      items: [
        "Đánh giá theo KPI, họp rút kinh nghiệm với xưởng, quyết định có mở đợt tiếp theo không và điều chỉnh gì (số lượng, xưởng, nghề).",
      ],
    },
  ],
  weeks: [
    { weeks: "1–2", content: "An toàn lao động, nhận biết máy và nguyên liệu, may đường cơ bản" },
    { weeks: "3–5", content: "Chi tiết từng công đoạn: ráp cổ, tay, thân, vắt sổ, hoàn thiện" },
    { weeks: "6–7", content: "Thực hành trên đơn hàng thật của xưởng, tính định mức và năng suất thật" },
    { weeks: "8", content: "Sát hạch tay nghề (năng suất, tỷ lệ lỗi), phân luồng đầu ra" },
  ],
  streams: [
    {
      name: "Luồng A: Làm thuê tại xưởng",
      body: "Ký hợp đồng lao động, thử việc, làm trên dây chuyền. Luồng này rủi ro thấp nhất, nên là mặc định cho đa số học viên ở đợt đầu.",
    },
    {
      name: "Luồng B: Tổ gia công tự chủ (3–5 người)",
      body: "Nhận đơn hàng từ xưởng qua tổ chức làm đầu mối, tổ nhóm tự tổ chức sản xuất. Nếu cần mua máy thì vay vốn. Chỉ mở cho học viên có năng suất và kỷ luật tốt, và nên thử nghiệm quy mô nhỏ trước.",
    },
  ],
  parallelNote:
    "Khi tổ chức đã đi vào hoạt động bền vững, có mạng lưới đối tác đủ rộng, các lớp học khác có thể diễn ra song song khi lớp học trước hoàn thành hết giai đoạn 1.",
  kpis: [
    { name: "Số học viên nhập học", target: "15 người" },
    { name: "Tỷ lệ tham gia và tốt nghiệp", target: "≥80%" },
    { name: "Tỷ lệ có việc làm/thu nhập sau 3 tháng", target: "≥70%" },
    { name: "Tỷ lệ còn làm việc sau 6 tháng", target: "≥60%" },
    { name: "Thu nhập bình quân so với trước dự án", target: "Theo dõi" },
    { name: "Chi phí trên mỗi học viên có việc làm", target: "Theo dõi" },
    { name: "Số học viên đủ điều kiện và đề nghị vay", target: "Theo dõi" },
  ],
  costs: [
    { item: "Thù lao thợ cả/giảng viên", calc: "2 người × 2 tháng × 6tr", amount: "24" },
    { item: "Sinh hoạt phí học viên", calc: "15 × 2 tháng × 1,5tr", amount: "45" },
    { item: "Nguyên vật liệu thực hành", calc: "15 × 0,5tr", amount: "7,5" },
    { item: "Bảo trì máy, dụng cụ", calc: "Trọn gói", amount: "10" },
    { item: "Đồng phục, bảo hộ, khám sức khỏe", calc: "15 × 0,4tr", amount: "6" },
    { item: "Cán bộ điều phối (bán thời gian)", calc: "6 tháng × 4tr", amount: "24" },
    { item: "Tư vấn tâm lý – kỹ năng mềm", calc: "6 buổi × 1,5tr", amount: "9" },
    { item: "Theo dõi sau đào tạo (đi lại, họp)", calc: "3 tháng", amount: "8" },
    { item: "Dự phòng 10%", calc: "–", amount: "13,5" },
  ],
  costTotal: { amount: "147", note: "9,8tr/học viên" },
  contributions: [
    { item: "Xưởng đồng tài trợ", calc: "Chi phí đào tạo xưởng vốn phải bỏ ra", amount: "30" },
    { item: "Phí giới thiệu lao động", calc: "12 người × 1,5tr (khi làm đủ 3 tháng)", amount: "18" },
    { item: "Chiết khấu đơn hàng qua tổ chức (luồng B)", calc: "5% × 200tr đơn hàng", amount: "10" },
  ],
  contributionTotal: "58",
  gap: { calc: "147 − 58", amount: "89", note: "khoảng 6tr/học viên" },
  appeal:
    "Khoản kinh phí còn cần vận động cho đợt 1 là khoảng 89 triệu đồng. Quý doanh nghiệp, nhà tài trợ có thể đồng hành theo một trong các hình thức:",
  packages: [
    { name: "Nhà tài trợ Vàng", value: "89 triệu đồng", meaning: "Tài trợ toàn bộ phần kinh phí còn thiếu của cả đợt học (15 học viên)" },
    { name: "Nhà tài trợ Bạc", value: "6 triệu đồng/học viên", meaning: "Tài trợ trọn gói chi phí đào tạo cho 1 học viên đến khi có việc làm" },
    { name: "Đồng hành theo hạng mục", value: "Theo thực tế", meaning: "Nguyên vật liệu, sinh hoạt phí, đồng phục, bảo hộ lao động hoặc thù lao giảng viên" },
    { name: "Hiện vật / hiện diện", value: "Không quy định", meaning: "Máy may, nguyên phụ liệu, chỗ thực hành, hoặc nhận lao động sau đào tạo" },
  ],
  sponsorBenefits:
    "Được ghi nhận là đơn vị đồng hành trong tài liệu, báo cáo và truyền thông; nhận báo cáo tiến độ và kết quả đầu ra (tỷ lệ tốt nghiệp, việc làm, thu nhập); được mời dự lễ khai giảng, tổng kết. Khoản tài trợ được dùng đúng mục đích, có chứng từ minh bạch và tuân thủ quy định pháp luật về tài trợ từ thiện.",
  risks: [
    { risk: "Xưởng giao đơn không đều hoặc bỏ cam kết", fix: "Quy định trong biên bản về số lượng nhận, đơn giá tối thiểu và điều khoản chấm dứt; đàm phán xưởng dự phòng" },
    { risk: "Học viên bỏ học hoặc bỏ việc", fix: "Sinh hoạt phí gắn chuyên cần, sinh hoạt nhóm, cán bộ đồng hành, ghép cặp hỗ trợ" },
    { risk: "Kỳ thị tại nơi làm việc", fix: "Thống nhất trước với ban giám đốc và tổ trưởng về nguyên tắc ứng xử, không tiết lộ lý lịch rộng rãi" },
    { risk: "Chất lượng sản phẩm thấp", fix: "Thợ cả kèm cặp, sát hạch theo tiêu chuẩn của xưởng" },
    { risk: "Phụ thuộc một xưởng", fix: "Từ đợt sau mở rộng thêm 1–2 đối tác" },
    { risk: "Rủi ro pháp lý về lao động", fix: "Ký hợp đồng lao động đúng luật, phí hoặc chiết khấu ghi rõ trong hợp đồng" },
  ],
};

/* ---------------- Công cụ tự đánh giá ---------------- */

export const assessment = {
  title: "Kiểm tra nhanh mức độ phù hợp với các gói hỗ trợ của Đơm Hoa",
  intro:
    "Chị mất khoảng 2 phút để trả lời 5 câu hỏi. Kết quả chỉ mang tính đánh giá sơ bộ, không thay thế buổi tư vấn và thẩm định riêng. Chúng tôi không hỏi thông tin cá nhân và không lưu câu trả lời của chị.",
  criteria: [
    { name: "Đối tượng phù hợp", body: "Phụ nữ/nữ thanh thiếu niên đã chấp hành xong án phạt tù, có nhu cầu tạo việc làm, khởi nghiệp hoặc phát triển kinh tế gia đình", level: "Bắt buộc" },
    { name: "Độ tuổi và năng lực pháp lý", body: "Có năng lực hành vi dân sự để ký hợp đồng vay; người dưới 18 tuổi được xem xét theo cơ chế hỗ trợ riêng hoặc cần người bảo hộ", level: "Bắt buộc" },
    { name: "Mục đích sử dụng vốn", body: "Có nhu cầu vay vốn hợp pháp, cụ thể và phù hợp với năng lực cá nhân", level: "Bắt buộc" },
    { name: "Khả năng hoàn trả", body: "Có nguồn thu nhập hiện tại hoặc phương án tạo thu nhập khả thi sau khi được cấp vốn", level: "Bắt buộc" },
    { name: "Hoàn cảnh gia đình", body: "Đang mang thai, nuôi con nhỏ dưới 36 tháng tuổi, mẹ đơn thân hoặc người chăm sóc chính", level: "Ưu tiên cao" },
    { name: "Điều kiện kinh tế", body: "Thu nhập thấp, thiếu vốn sản xuất, khó tiếp cận ngân hàng hoặc nguồn tín dụng chính thức", level: "Ưu tiên cao" },
    { name: "Mức độ sẵn sàng", body: "Có mong muốn làm việc, tham gia tư vấn tài chính, đào tạo nghề hoặc hướng dẫn kinh doanh", level: "Ưu tiên" },
    { name: "Khả năng tiếp cận nguồn vốn khác", body: "Chưa được tiếp cận nguồn vốn phù hợp hoặc chưa đủ điều kiện vay từ các tổ chức tài chính thông thường", level: "Ưu tiên" },
  ],
  questions: [
    {
      id: "q1",
      title: "Mức độ khó khăn và dễ bị tổn thương",
      max: 25,
      options: [
        { label: "Rất khó khăn, thuộc nhóm ưu tiên đặc biệt", points: 25 },
        { label: "Khó khăn về thu nhập hoặc điều kiện gia đình", points: 18 },
        { label: "Có một số khó khăn tài chính", points: 10 },
        { label: "Ít khó khăn", points: 3 },
      ],
    },
    {
      id: "q2",
      title: "Tính khả thi của phương án sử dụng vốn",
      max: 25,
      options: [
        { label: "Kế hoạch rõ ràng, phù hợp kỹ năng và thị trường", points: 25 },
        { label: "Khả thi nhưng cần hướng dẫn thêm", points: 18 },
        { label: "Ý tưởng sơ bộ, cần đào tạo", points: 10 },
        { label: "Chưa có phương án cụ thể", points: 3 },
      ],
    },
    {
      id: "q3",
      title: "Khả năng hoàn trả khoản vay",
      max: 25,
      options: [
        { label: "Dòng tiền dự kiến đủ trả nợ và chi phí thiết yếu", points: 25 },
        { label: "Có khả năng trả nợ nếu điều chỉnh khoản vay", points: 18 },
        { label: "Thu nhập chưa ổn định, cần hỗ trợ thêm", points: 10 },
        { label: "Chưa xác định được nguồn trả nợ", points: 3 },
      ],
    },
    {
      id: "q4",
      title: "Mức độ hạn chế tiếp cận tài chính",
      max: 15,
      options: [
        { label: "Không tiếp cận được nguồn vốn phù hợp", points: 15 },
        { label: "Tiếp cận rất hạn chế", points: 11 },
        { label: "Có một số nguồn vốn phù hợp", points: 6 },
        { label: "Đã có nguồn tài chính đáp ứng nhu cầu", points: 2 },
      ],
    },
    {
      id: "q5",
      title: "Mức độ sẵn sàng tham gia hỗ trợ",
      max: 10,
      options: [
        { label: "Sẵn sàng tham gia đào tạo và tư vấn", points: 10 },
        { label: "Có nhu cầu nhưng gặp trở ngại về thời gian", points: 7 },
        { label: "Cần tiếp cận, tư vấn thêm", points: 4 },
        { label: "Chưa có nhu cầu tham gia", points: 0 },
      ],
    },
  ],
  results: [
    {
      min: 70,
      range: "70 – 100 điểm",
      title: "Chúc mừng chị, hạt mầm đã sẵn sàng!",
      body: [
        "Dựa trên những chia sẻ của chị, hồ sơ của chị phù hợp với các gói hỗ trợ của Đơm Hoa. Kế hoạch của chị đã có hình hài, và chúng tôi rất muốn được đồng hành cùng chị ở bước tiếp theo.",
        "Chị có thể đặt lịch một buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo, để cùng chọn gói vay phù hợp nhất. Chị không cần mang theo gì cả, và có thể dừng lại bất cứ lúc nào.",
      ],
      actions: [{ label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" }],
    },
    {
      min: 50,
      range: "50 – 69 điểm",
      title: "Mầm đã nhú, mình cùng chăm thêm nhé",
      body: [
        "Chị đã có nền tảng tốt để bắt đầu. Với một chút hướng dẫn thêm về kế hoạch và cách điều chỉnh khoản vay, chị hoàn toàn có thể tự tin bước tiếp.",
        "Đơm Hoa sẽ cùng chị đi qua buổi tập huấn đầu vào, sau đó trò chuyện với cán bộ tín dụng để chọn khoản vay nhỏ hoặc khóa học nghề phù hợp. Chị không phải đi một mình.",
      ],
      actions: [
        { label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" },
        { label: "Tìm hiểu Gói học nghề", href: "/san-pham/tai-chinh#goi-3" },
      ],
    },
    {
      min: 0,
      range: "Dưới 50 điểm",
      title: "Chưa phải lúc vay, nhưng Đơm Hoa vẫn ở đây",
      body: [
        "Ở thời điểm này, chị có thể cần thêm thời gian để chuẩn bị cho kế hoạch của mình. Đây không phải lời từ chối. Mỗi hạt giống đều có nhịp nảy mầm riêng, và chúng tôi sẵn lòng chờ cùng chị.",
        "Chị có thể tham gia lớp giáo dục tài chính, trò chuyện về chọn nghề, hoặc bắt đầu bằng tiết kiệm mục tiêu. Sau khoảng 2–3 tháng, chúng ta cùng xem lại để chị bước tiếp thật vững vàng.",
      ],
      actions: [
        { label: "Tham gia lớp giáo dục tài chính", href: "/san-pham/cong-dong#giao-duc-tai-chinh" },
        { label: "Đặt lịch xem lại sau", href: "/lien-he#dang-ky" },
      ],
    },
  ],
  resultNote:
    "Kết quả chỉ mang tính tham khảo ban đầu, không thay thế buổi tư vấn và thẩm định riêng. Đơm Hoa không lưu câu trả lời của chị.",
  incomplete: "Chị còn vài câu chưa chọn. Chị cứ thong thả, hoàn thành đủ 5 tiêu chí để xem kết quả nhé.",
  decision: [
    "Kiểm tra điều kiện bắt buộc (đúng đối tượng, đủ điều kiện pháp lý, mục đích sử dụng vốn hợp pháp)",
    "Chấm điểm mức độ ưu tiên và khả năng vay vốn (thang 100 điểm, kết hợp phỏng vấn và xác minh thông tin)",
  ],
  outcomes: [
    { title: "Đủ điều kiện", body: "Thẩm định và cấp vốn phù hợp.", action: { label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" } },
    {
      title: "Chưa đủ điều kiện",
      body: "Đào tạo, tư vấn và đánh giá lại. Đây không phải là lời từ chối, Đơm Hoa sẽ cùng chị chuẩn bị để lần sau tốt hơn.",
      action: { label: "Tham gia lớp giáo dục tài chính", href: "/san-pham/cong-dong#giao-duc-tai-chinh" },
    },
  ],
};

/* ---------------- Liên hệ ---------------- */

export const contact = {
  title: "Chúng tôi luôn sẵn lòng lắng nghe",
  borrowers: {
    title: "Dành cho người muốn vay vốn hoặc học nghề",
    body: "Cuộc trò chuyện đầu tiên là buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo. Chị không cần mang theo gì cả, và có thể dừng lại bất cứ lúc nào.",
  },
  partners: {
    title: "Dành cho nhà tài trợ, doanh nghiệp, đối tác",
    body: "Gửi email để nhận hồ sơ dự án, báo cáo kết quả và phương án hợp tác.",
  },
};

export const projectEmailHref = `mailto:${"domhoa@gmail.com"}?subject=${encodeURIComponent(
  "Đề nghị nhận hồ sơ dự án Hạt mầm trong tay",
)}`;
