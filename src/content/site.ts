// Official content for the Đơm Hoa website, taken from
// "NỘI DUNG WEB TCVM ĐƠM HOA" (the organisation's content document, revised edition).
// Edit copy and figures here; page layouts read from this file.

export const org = {
  name: "Đơm Hoa",
  fullName: "Tổ chức Tài chính Vi mô ĐƠM HOA",
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
      { href: "/san-pham#vay-von", label: "Vay vốn", description: "Bốn gói vay, thẩm định và quy trình" },
      { href: "/san-pham#tiet-kiem", label: "Tiết kiệm", description: "Tiết kiệm mục tiêu và tiết kiệm trung tâm" },
      { href: "/san-pham#dong-hanh", label: "Đồng hành cộng đồng", description: "Tham vấn, giáo dục tài chính, cửa hàng thực hành" },
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
    "ĐƠM HOA là tổ chức tài chính vi mô phi lợi nhuận, đồng hành cùng những người phụ nữ đang khao khát làm lại cuộc sống. Đơm Hoa trao nguồn vốn nhỏ không cần tài sản thế chấp, kiến thức kinh doanh và sự đồng hành thấu hiểu để mỗi người có thể tự đứng vững bằng chính đôi tay của mình.",
  intro:
    "Sau những ngày nhiều biến động, điều mỗi người phụ nữ cần nhất là một cơ hội để bắt đầu lại, được lắng nghe và được trao niềm tin. Đơm Hoa trao cơ hội ấy qua khoản vay nhỏ phù hợp với kế hoạch sinh kế của riêng từng người, cùng những buổi học nghề, kiến thức tài chính, sự sẻ chia tinh thần và những cánh cửa việc làm rộng mở.",
  closing: { quote: "Mỗi hạt giống đều xứng đáng được đơm hoa, dù đã từng rơi vào bùn đất.", cta: "Liên hệ ngay" },
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
    "Phụ nữ đã hoàn thành nghĩa vụ chấp hành án, có nhu cầu tự tạo việc làm, khởi nghiệp nhỏ hoặc phát triển kinh tế gia đình.",
    "Đặc biệt ưu tiên người đang mang thai hoặc nuôi con nhỏ dưới 36 tháng tuổi, mẹ đơn thân, người chăm sóc chính trong gia đình và người có hoàn cảnh kinh tế khó khăn.",
    "Nữ thanh thiếu niên được hỗ trợ theo cơ chế riêng, có người bảo hộ đi cùng.",
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
];

export const goalsNote =
  "Đơm Hoa cũng từng bước phát triển quỹ cho vay quay vòng, nâng cao hiệu quả sử dụng vốn và khả năng tự chủ tài chính.";

export const partners = {
  professional: [
    {
      name: "Cục Cảnh sát quản lý trại giam (Bộ Công an)",
      role: "Phối hợp tư vấn hướng nghiệp trước khi hoàn thành thời gian chấp hành án và chia sẻ thông tin theo quy trình phối hợp, để việc hỗ trợ bắt đầu ngay từ ngày trở về.",
    },
    {
      name: "Hội Liên hiệp Phụ nữ Việt Nam (cấp xã/phường)",
      role: "Hỗ trợ kết nối khi mỗi người trở về địa phương, giúp xác minh, giới thiệu và đồng hành tinh thần bước đầu.",
    },
    {
      name: "Sở Lao động – Thương binh và Xã hội",
      role: "Hỗ trợ về chính sách và kết nối các chương trình đào tạo nghề miễn phí của tỉnh.",
    },
  ],
  training: [
    {
      name: "Trung tâm dạy nghề địa phương",
      role: "Đào tạo miễn phí hoặc giảm học phí các nghề may mặc, nấu ăn, làm tóc, thủ công.",
    },
    {
      name: "Doanh nghiệp vừa và nhỏ",
      role: "Cam kết nhận một số lượng lao động nhất định sau đào tạo, đồng thời được ghi nhận là doanh nghiệp có trách nhiệm xã hội và có thể được hưởng ưu đãi theo quy định.",
    },
  ],
};

export const funding = {
  intro: [
    "Đơm Hoa vận hành chủ yếu nhờ nguồn tài trợ.",
    "Nguồn lực này được dùng để phát triển quỹ cho vay quay vòng (khi được phép), đào tạo nghề, tư vấn tài chính và hỗ trợ phụ nữ phát triển sinh kế.",
  ],
  sources: [
    {
      title: "Tổ chức quốc tế (dự kiến huy động)",
      body: "UN Women, Quỹ Canada dành cho các sáng kiến địa phương (CFLI), Chương trình Viện trợ Trực tiếp của Chính phủ Úc (DAP), Global Fund for Women.",
    },
    {
      title: "Doanh nghiệp có chương trình trách nhiệm xã hội (CSR)",
      body: "Unilever, Vinamilk, Viettel, MB Bank, FPT.",
    },
    {
      title: "Nguồn vốn khác",
      body: "Hội Liên hiệp Phụ nữ Việt Nam; hợp tác với Ngân hàng Chính sách Xã hội (tín dụng theo Quyết định 22/2023/QĐ-TTg); các tổ chức phi lợi nhuận trong và ngoài nước; tiền gửi tiết kiệm tự nguyện.",
    },
  ],
  mix: [
    { label: "Tài trợ từ tổ chức quốc tế", share: 35 },
    { label: "Tài trợ doanh nghiệp (CSR)", share: 35 },
    { label: "Thu nhập lãi cho vay", share: 25 },
    { label: "Tiền gửi và đầu tư hợp pháp", share: 5 },
  ],
  outlook:
    "Về dài hạn, Đơm Hoa hướng tới tăng dần tỷ trọng thu nhập từ hoạt động tài chính để tự chủ và bảo đảm tính bền vững của quỹ cho vay quay vòng.",
};

export const legal = [
  "Đơm Hoa là tổ chức tài chính vi mô hoạt động theo Luật Các tổ chức tín dụng 2024 và Nghị định 162/2024/NĐ-CP, liên kết với Hội Liên hiệp Phụ nữ Việt Nam.",
  "Thông tin về án tích, sức khỏe và tâm lý là dữ liệu cá nhân nhạy cảm. Đơm Hoa bảo vệ theo Luật Bảo vệ dữ liệu cá nhân 2025 và chỉ chia sẻ khi có sự đồng ý của khách hàng.",
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

/* ---------------- Sản phẩm ---------------- */

export type Row = { label: string; value: string };
export type Action = { label: string; href: string };

/** A content block inside a product section, rendered in document order. */
export type Block =
  | { kind: "rows"; title: string; rows: Row[]; note?: string }
  | { kind: "list"; title: string; intro?: string; items: string[]; outro?: string }
  | { kind: "terms"; title: string; intro?: string; items: Row[]; outro?: string }
  | { kind: "table"; title: string; head: string[]; rows: string[][]; note?: string }
  | { kind: "text"; title: string; body: string[] };

export const productsPage = {
  title: "Mỗi hạt mầm cần một loại đất riêng",
  intro:
    "Đơm Hoa có bốn gói vay, hai hình thức tiết kiệm và ba chương trình đồng hành. Mỗi cá nhân, mỗi nhóm chọn gói phù hợp với kế hoạch và hoàn cảnh của mình, rồi cùng bắt đầu từ những bước nhỏ.",
  sections: [
    { id: "vay-von", label: "Vay vốn" },
    { id: "tiet-kiem", label: "Tiết kiệm" },
    { id: "dong-hanh", label: "Đồng hành cộng đồng" },
  ],
};

const consult: Action = { label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" };
const selfCheck: Action = { label: "Kiểm tra mức độ phù hợp", href: "/tu-danh-gia" };

export const loanPackages = [
  {
    id: "goi-1",
    number: 1,
    title: "Vốn khởi sự sinh kế theo nhóm",
    audience:
      "Dành cho cá nhân có kế hoạch tạo thu nhập từ tự doanh, nghề thủ công hoặc kinh doanh tại nhà. Nhóm vay là không gian chia sẻ kinh nghiệm và hỗ trợ lẫn nhau, hoàn toàn tự nguyện. Mỗi thành viên vẫn được xem xét khả năng trả nợ riêng.",
    highlight: { amount: "5–15 triệu", rate: "0,8%/tháng" },
    calculator: true,
    actions: [] as Action[],
    blocks: [
      {
        kind: "rows",
        title: "Nhóm vay vận hành thế nào?",
        rows: [
          { label: "Nhóm vay", value: "5 thành viên là nữ, tự chọn nhau, cùng địa bàn, hoàn cảnh kinh tế tương đồng; không là họ hàng ruột thịt hay cùng một hộ gia đình" },
          { label: "Nhóm trưởng, thư ký", value: "Do các thành viên bầu, có thể luân phiên theo chu kỳ. Nhóm trưởng là đầu mối liên lạc và nhắc lịch, không có quyền kiểm soát tiền của thành viên khác" },
          { label: "Trung tâm", value: "5–8 nhóm (khoảng 25–40 người) hợp thành một trung tâm, có trưởng trung tâm do các nhóm bầu" },
          { label: "Sinh hoạt trung tâm", value: "Họp hằng tuần, cùng giờ, cùng địa điểm. Cán bộ tín dụng tham dự để thu nợ, nhận tiết kiệm, giải đáp thắc mắc và ghi nhận khó khăn" },
          { label: "Giải ngân tuần tự (2–2–1)", value: "Hai thành viên đầu nhận vốn trước. Sau khoảng 4–6 tuần, nếu hai người này trả nợ đúng hạn thì hai thành viên tiếp theo nhận vốn; nhóm trưởng nhận sau cùng" },
          { label: "Trả nợ", value: "Gốc và lãi chia đều hằng tuần trong 6–12 tháng (hằng tháng hoặc theo mùa vụ nếu có căn cứ); lãi tính trên dư nợ giảm dần" },
          { label: "Tiết kiệm và quỹ nhóm", value: "Mỗi thành viên gửi tiết kiệm hằng tuần theo mức tự chọn. Quỹ tương trợ của nhóm (nếu lập) tách biệt, tự nguyện, có quy chế và sổ sách riêng" },
          { label: "Bảo mật", value: "Thông tin cá nhân, hồ sơ tài chính và khó khăn riêng của mỗi thành viên không được công khai ngoài phạm vi người đó đồng ý" },
        ],
      },
      {
        kind: "rows",
        title: "Thông tin gói vay",
        rows: [
          { label: "Hạn mức lần đầu", value: "5–15 triệu đồng/khách hàng, theo kế hoạch vốn và dòng tiền" },
          { label: "Hạn mức chu kỳ tiếp theo", value: "15–30 triệu đồng; tối đa 50 triệu đồng trong trường hợp phù hợp, sau khi xem xét lại thu nhập, dư nợ và lịch sử trả nợ" },
          { label: "Kỳ hạn", value: "6–12 tháng; khoản đầu tư công cụ có thể dài hơn" },
          { label: "Lịch trả nợ", value: "Hằng tuần hoặc hằng tháng, theo mùa vụ nếu có căn cứ. Lịch trả luôn phù hợp với khả năng thu tiền thực tế" },
          { label: "Ân hạn gốc", value: "Có thể 2–4 tuần đầu. Lãi trong thời gian ân hạn và tổng nghĩa vụ phải trả được nêu rõ từ đầu" },
          { label: "Lãi suất", value: "0,8%/tháng (chu kỳ đầu, 5–15 triệu); 0,75%/tháng (chu kỳ tiếp theo, 15–30 triệu); tính trên dư nợ giảm dần" },
        ],
      },
      {
        kind: "list",
        title: "Tương trợ trong nhóm",
        items: [
          "Các thành viên cùng nhắc lịch, góp ý, chia sẻ kinh nghiệm và tìm cách giúp nhau khi ai đó gặp khó khăn tạm thời, trước hết bằng quỹ tương trợ tự nguyện của nhóm.",
          "Tương trợ là cam kết tinh thần giữa các thành viên. Mỗi người chỉ có nghĩa vụ trả nợ theo hợp đồng của chính mình, không ai phải trả nợ thay người khác.",
          "Khi một thành viên chậm trả, Đơm Hoa đánh giá từng trường hợp, không dừng giải ngân cả nhóm một cách máy móc.",
          "Tiền tiết kiệm cá nhân chỉ được dùng cho người khác khi chủ sở hữu đồng ý rõ ràng, tự nguyện.",
          "Khi thu nhập gặp biến động, cán bộ tín dụng cùng thành viên tìm nguyên nhân và cân nhắc điều chỉnh lịch trả nợ theo quy định, tư vấn dòng tiền hoặc kết nối hỗ trợ xã hội.",
          "Đơm Hoa không dùng áp lực cộng đồng, không công khai tên người chậm trả, không dùng thông tin nhạy cảm để thu hồi nợ.",
        ],
      },
      {
        kind: "list",
        title: "Cam kết nhóm",
        intro: "Khi thành lập, các thành viên cùng thống nhất một bộ cam kết ngắn:",
        items: [
          "Trả nợ đúng hạn và dùng vốn đúng mục đích",
          "Tiết kiệm đều đặn",
          "Giúp đỡ nhau khi khó khăn",
          "Tham gia sinh hoạt trung tâm đầy đủ",
          "Tôn trọng và giữ bí mật cho nhau",
          "Không ép buộc, không bạo lực, không chiếm dụng vốn của nhau",
        ],
      },
      {
        kind: "table",
        title: "Vốn dùng vào việc gì?",
        head: ["Mục đích", "Nội dung", "Hạn mức; kỳ hạn gợi ý", "Cách xác nhận"],
        rows: [
          ["Mua công cụ lao động", "Máy may, dụng cụ làm tóc/làm móng, đồ chế biến thực phẩm, thiết bị bán hàng nhỏ, dụng cụ sửa chữa hoặc thiết bị nghề phù hợp", "5–30 triệu; 6–18 tháng", "Báo giá, xác nhận mua/bàn giao hoặc kiểm tra thực tế"],
          ["Vốn lưu động", "Nhập hàng, nguyên liệu, thực phẩm, vật tư thủ công, bao bì, vận chuyển", "5–20 triệu; 3–9 tháng", "Kế hoạch nhập hàng, chu kỳ bán và thu tiền"],
          ["Khởi sự kinh doanh", "Bán hàng tại nhà/online, chế biến thực phẩm, may vá, làm đẹp, thủ công, dịch vụ chăm sóc", "5–15 triệu; 6–12 tháng", "Kế hoạch kinh doanh đơn giản, khách hàng mục tiêu, chi phí và doanh thu dự kiến"],
          ["Mở rộng sinh kế", "Thêm hàng tồn kho, thêm máy móc, mở rộng hoạt động đã có doanh thu", "15–50 triệu; 12–24 tháng", "Theo dõi doanh thu, dòng tiền và nghĩa vụ nợ hiện tại"],
          ["Học nghề, chứng chỉ", "Học phí, lệ phí chứng chỉ các nghề có việc làm thực tế: may, chế biến thực phẩm, kế toán cơ bản, kỹ năng số, làm đẹp, sửa chữa", "3–15 triệu; 6–12 tháng", "Xác minh khóa học, chi phí và kế hoạch việc làm sau học"],
        ],
        note: "Nguyên tắc giải ngân: thiết bị và học phí có chứng từ có thể thanh toán trực tiếp cho nơi cung cấp. Khoản chi nhỏ, không chính thức được xác nhận bằng cách tương xứng (phiếu mua hàng, xác nhận nhà cung cấp, kiểm tra thực tế). Đơm Hoa không áp dụng một thủ tục nặng nề như nhau cho mọi khoản vay.",
      },
      {
        kind: "list",
        title: "Đơm Hoa theo dõi và đồng hành thế nào?",
        items: [
          "Theo dõi tỷ lệ trả nợ đúng hạn, nợ quá hạn, mức duy trì sinh kế sau 6 và 12 tháng, và mức độ phù hợp giữa số tiền vay với nhu cầu vốn.",
          "Kiểm tra việc sử dụng vốn theo mức độ rủi ro, ưu tiên khoản vay lớn hoặc có dấu hiệu bất thường.",
          "Có quy trình tiếp nhận khiếu nại và giải thích rõ số tiền phải trả.",
          "Khi có khó khăn tài chính, Đơm Hoa cùng khách hàng tìm giải pháp trước khi nợ quá hạn kéo dài.",
          "Quyết định cho vay dựa trên khả năng trả nợ. Việc tham gia nhóm hay số tiền tiết kiệm không phải tiêu chí duy nhất.",
        ],
      },
    ] as Block[],
  },
  {
    id: "goi-2",
    number: 2,
    title: "Đồng hành tạo việc làm",
    audience:
      "Dành cho doanh nghiệp siêu nhỏ, hộ kinh doanh và cơ sở sản xuất cần bổ sung vốn, cam kết tuyển dụng và duy trì việc làm an toàn, ổn định cho phụ nữ thuộc diện được Đơm Hoa đồng hành.",
    highlight: { amount: "50–200 triệu", rate: "0,5–0,8%/tháng" },
    calculator: true,
    actions: [{ label: "Đăng ký tư vấn cho doanh nghiệp", href: "/lien-he#dang-ky" }] as Action[],
    blocks: [
      {
        kind: "rows",
        title: "Thông tin gói vay",
        rows: [
          { label: "Mục đích vay", value: "Bổ sung vốn lưu động hoặc đầu tư sản xuất, kinh doanh, gắn với phương án tuyển dụng và duy trì việc làm cho người lao động thuộc diện hỗ trợ" },
          { label: "Hạn mức", value: "50–200 triệu đồng, tùy nhu cầu vốn, quy mô hoạt động và khả năng trả nợ" },
          { label: "Thời hạn vay", value: "Theo phương án kinh doanh, chu kỳ vốn và dòng tiền trả nợ" },
          { label: "Lãi suất", value: "0,5%–0,8%/tháng, áp dụng theo bậc ưu đãi gắn với kết quả tạo việc làm thực tế" },
          { label: "Cách tính lãi", value: "Tính trên dư nợ gốc thực tế còn lại (dư nợ giảm dần)" },
          { label: "Hình thức vay", value: "Doanh nghiệp hoặc hộ kinh doanh đứng tên vay, chịu trách nhiệm sử dụng vốn và hoàn trả" },
          { label: "Hỗ trợ bổ sung", value: "Có thể kết nối với quỹ bảo lãnh tín dụng, ngân hàng hoặc đơn vị tài trợ phù hợp để hỗ trợ đáp ứng điều kiện tiếp cận vốn" },
        ],
      },
      {
        kind: "table",
        title: "Chính sách lãi suất ưu đãi",
        head: ["Tỷ lệ lao động thuộc diện Đơm Hoa đồng hành", "Lãi suất/tháng", "Mức ưu đãi"],
        rows: [
          ["Từ 10% đến dưới 15%", "0,8%", "Ưu đãi cơ bản"],
          ["Từ 15% đến dưới 20%", "0,7%", "Ưu đãi nâng cao"],
          ["Từ 20% trở lên", "0,5%", "Ưu đãi tối đa"],
        ],
        note: "Tạo càng nhiều việc làm thực chất và duy trì càng bền vững, lãi suất càng nhẹ. Cách xác định tỷ lệ: số lao động thuộc diện đồng hành đang làm việc thực tế tại cơ sở, chia cho tổng số lao động của cơ sở tại kỳ đánh giá, nhân 100%. Bậc lãi suất được xét dựa trên hồ sơ tuyển dụng, thời gian làm việc thực tế và kết quả duy trì việc làm. Đơm Hoa xem xét quy mô cơ sở để tránh việc tuyển dụng mang tính hình thức nhằm đạt ngưỡng ưu đãi. Trường hợp chưa đạt ngưỡng tối thiểu sẽ được xem xét theo chính sách tín dụng và tiêu chí thí điểm của Đơm Hoa.",
      },
      {
        kind: "list",
        title: "Điều kiện đối với khách hàng vay",
        items: [
          "Là doanh nghiệp siêu nhỏ, hộ kinh doanh hoặc cơ sở sản xuất có hoạt động thực tế, hồ sơ pháp lý phù hợp và phương án sử dụng vốn khả thi.",
          "Chứng minh được nguồn thu và khả năng trả nợ; đáp ứng các điều kiện cấp tín dụng áp dụng.",
          "Có kế hoạch tuyển dụng, đào tạo và duy trì việc làm cho phụ nữ thuộc diện đồng hành.",
          "Có thỏa thuận lao động phù hợp, bảo đảm điều kiện làm việc an toàn, thu nhập và quyền lợi người lao động theo quy định.",
          "Cam kết không phân biệt đối xử, không tuyển dụng hình thức để hưởng ưu đãi và không tiết lộ thông tin cá nhân của người lao động trái quy định.",
          "Đồng ý để Đơm Hoa kiểm tra, đánh giá định kỳ việc sử dụng vốn và kết quả tạo việc làm.",
        ],
      },
      {
        kind: "terms",
        title: "Cách Đơm Hoa theo dõi và đồng hành",
        items: [
          { label: "Báo cáo định kỳ", value: "Mỗi quý, khách hàng báo cáo số lao động được tuyển, tình trạng việc làm, thời gian làm việc, thu nhập và mức duy trì việc làm." },
          {
            label: "Đánh giá kết quả",
            value: "Đơm Hoa theo dõi sau 6 tháng và 12 tháng, tập trung vào: số phụ nữ thuộc diện hỗ trợ được tuyển dụng và duy trì việc làm; mức ổn định thu nhập và điều kiện làm việc; tỷ lệ duy trì việc làm sau 6 tháng và 12 tháng; chi phí hỗ trợ trên mỗi việc làm được duy trì.",
          },
          {
            label: "Khi chưa đạt cam kết",
            value: "Đơm Hoa xác minh nguyên nhân, trao đổi và tạo cơ hội khắc phục trong thời hạn đã thỏa thuận. Việc điều chỉnh ưu đãi hoặc dừng giải ngân các khoản chưa giải ngân được thực hiện theo hợp đồng và quy định áp dụng. Khoản vay không bị tự động thu hồi toàn bộ chỉ vì tỷ lệ lao động thay đổi.",
          },
        ],
      },
      {
        kind: "text",
        title: "Ý nghĩa của gói vay",
        body: [
          "Gói Đồng hành tạo việc làm giúp Đơm Hoa mở rộng hỗ trợ từ cho vay trực tiếp sang kết nối cơ hội việc làm. Doanh nghiệp được tiếp cận nguồn vốn ưu đãi để phát triển sản xuất, kinh doanh; đổi lại, doanh nghiệp cam kết tạo ra những công việc thực chất, an toàn và duy trì lâu dài.",
          "Ưu đãi lãi suất là cơ chế khuyến khích doanh nghiệp chia sẻ cơ hội kinh tế với những người lao động còn gặp rào cản khi bắt đầu lại. Hiệu quả của chương trình được đánh giá dựa trên chất lượng và tính bền vững của việc làm, không chỉ dựa trên số vốn giải ngân.",
        ],
      },
    ] as Block[],
  },
  {
    id: "goi-3",
    number: 3,
    title: "Học nghề, vững bước tương lai",
    audience:
      "Dành cho phụ nữ thuộc diện được Đơm Hoa đồng hành, có nhu cầu học nghề, nâng cao kỹ năng để tìm việc nhưng gặp khó khăn về tài chính.",
    highlight: { amount: "3–15 triệu", rate: "0,5%/tháng" },
    calculator: true,
    actions: [consult] as Action[],
    blocks: [
      {
        kind: "rows",
        title: "Thông tin gói vay",
        rows: [
          { label: "Mục đích", value: "Học phí, lệ phí chứng chỉ, vật liệu thực hành và dụng cụ thiết yếu phục vụ khóa học nghề" },
          { label: "Hạn mức", value: "3–15 triệu đồng, căn cứ chi phí đào tạo thực tế, nhu cầu vay và khả năng trả nợ" },
          { label: "Thời hạn", value: "6–12 tháng, phù hợp với thời gian học và kế hoạch hoàn trả" },
          { label: "Lãi suất", value: "0,5%/tháng, tính trên dư nợ gốc thực tế còn lại" },
          { label: "Ưu đãi khi hoàn thành khóa học", value: "Miễn toàn bộ tiền lãi nếu hoàn thành khóa học và đạt chứng nhận nghề theo điều kiện chương trình" },
          { label: "Giải ngân", value: "Ưu tiên chuyển học phí trực tiếp cho cơ sở đào tạo; các khoản chi khác cần có căn cứ hợp lệ" },
          { label: "Kế hoạch trả nợ", value: "Xây dựng theo nguồn thu hiện tại, thời gian đào tạo và khả năng tạo thu nhập sau khóa học. Có thể xem xét ân hạn trả gốc nếu phù hợp" },
          { label: "Hỗ trợ đi kèm", value: "Tư vấn chọn nghề, chuẩn bị hồ sơ xin việc, luyện phỏng vấn, kết nối nhà tuyển dụng, theo dõi sau đào tạo" },
        ],
      },
      {
        kind: "list",
        title: "Điều kiện vay vốn",
        items: [
          "Thuộc diện được Đơm Hoa đồng hành và có nhu cầu học nghề phù hợp.",
          "Có kế hoạch học tại cơ sở đào tạo hoặc chương trình dạy nghề đã được xác minh.",
          "Có phương án trả nợ khả thi, dựa trên thu nhập hiện tại, nguồn hỗ trợ tự nguyện từ gia đình (nếu có) và triển vọng việc làm sau đào tạo.",
          "Đồng ý cung cấp chứng từ học phí và thông tin cần thiết để xác nhận mục đích sử dụng vốn.",
          "Được tư vấn đầy đủ về nghĩa vụ trả nợ, điều kiện miễn lãi và các quyền lợi liên quan trước khi ký thỏa thuận.",
        ],
      },
      {
        kind: "list",
        title: "Chính sách miễn lãi",
        items: [
          "Lãi suất ưu đãi 0,5%/tháng trong thời gian vay. Khách hàng hoàn thành khóa học và đạt chứng nhận nghề được miễn toàn bộ tiền lãi.",
          "Khoản vay gốc vẫn được hoàn trả theo thỏa thuận.",
          "Nếu không thể hoàn thành khóa học vì lý do chính đáng, Đơm Hoa xem xét từng trường hợp để có phương án hỗ trợ phù hợp.",
          "Phần lãi được miễn do Quỹ tài trợ xã hội hoặc nguồn tài trợ hợp pháp khác đã bố trí chi trả.",
          "Điều kiện hưởng ưu đãi, cách xác định tiền lãi được miễn và thời điểm áp dụng được ghi rõ trong hợp đồng hoặc thỏa thuận liên quan.",
        ],
      },
      {
        kind: "text",
        title: "Trả nợ và hỗ trợ sau đào tạo",
        body: [
          "Đơm Hoa không mặc định khách hàng sẽ có việc làm ngay sau khi tốt nghiệp. Trước khi cấp vốn, Đơm Hoa cùng khách hàng đánh giá khả năng trả nợ và xây dựng lịch thanh toán phù hợp với hoàn cảnh của từng người.",
          "Trong thời gian học và sau khóa học, khách hàng được hỗ trợ kết nối nhà tuyển dụng, chuẩn bị hồ sơ ứng tuyển và tiếp cận cơ hội việc làm phù hợp. Khi phát sinh khó khăn, Đơm Hoa xem xét phương án hỗ trợ trong phạm vi chính sách và thỏa thuận đã ký.",
        ],
      },
      {
        kind: "text",
        title: "Ý nghĩa xã hội",
        body: [
          "Gói “Học nghề, vững bước tương lai” giúp mỗi người tiếp cận cơ hội học nghề, nâng cao năng lực tự chủ tài chính và từng bước xây dựng cuộc sống ổn định. Việc kết hợp vốn vay ưu đãi với đào tạo và kết nối việc làm giúp giảm rào cản khi bắt đầu lại, đồng thời tránh để người học gánh khoản nợ vượt quá khả năng chi trả.",
          "Hiệu quả được đánh giá qua tỷ lệ hoàn thành khóa học, tỷ lệ tìm được việc làm, mức ổn định thu nhập sau đào tạo và khả năng hoàn trả khoản vay.",
        ],
      },
    ] as Block[],
  },
  {
    id: "goi-4",
    number: 4,
    title: "Phát triển sinh kế, tăng trưởng bền vững",
    audience:
      "Dành cho phụ nữ thuộc diện được Đơm Hoa đồng hành, đã có hoạt động kinh doanh hoặc hành nghề tạo thu nhập thực tế và có nhu cầu mở rộng sinh kế.",
    highlight: { amount: "15–50 triệu", rate: "1,0%/tháng" },
    calculator: true,
    actions: [selfCheck, consult] as Action[],
    blocks: [
      {
        kind: "rows",
        title: "Thông tin gói vay",
        rows: [
          { label: "Mục đích vay", value: "Bổ sung vốn nhập hàng, mua nguyên liệu, trang thiết bị, mở rộng kênh bán hàng trực tiếp hoặc trực tuyến, phát triển hoạt động kinh doanh có cơ sở" },
          { label: "Hạn mức", value: "15–50 triệu đồng, căn cứ nhu cầu vốn, quy mô hoạt động và khả năng trả nợ" },
          { label: "Thời hạn", value: "12–24 tháng, phù hợp chu kỳ kinh doanh và dòng tiền dự kiến" },
          { label: "Lãi suất", value: "1,0%/tháng, tính trên dư nợ gốc thực tế còn lại" },
          { label: "Giải ngân", value: "Vay cá nhân; giải ngân một lần hoặc nhiều đợt tùy phương án sử dụng vốn và tiến độ triển khai" },
          { label: "Cách trả nợ", value: "Trả gốc và lãi theo lịch đã thỏa thuận, phù hợp với dòng tiền kinh doanh thực tế" },
          { label: "Hỗ trợ đi kèm", value: "Tư vấn định giá sản phẩm, tính lợi nhuận, quản lý hàng tồn kho, quản lý thu chi và kết nối đầu ra" },
        ],
      },
      {
        kind: "list",
        title: "Điều kiện xét duyệt",
        items: [
          "Đã có hoạt động kinh doanh hoặc hành nghề tạo thu nhập thực tế.",
          "Có thông tin thu chi, đơn hàng, doanh thu hoặc bằng chứng phù hợp khác để đánh giá tình hình kinh doanh.",
          "Có phương án sử dụng vốn cụ thể, xác định được nhu cầu vốn và khả năng tạo thêm dòng tiền.",
          "Được xem xét tổng thể về dư nợ hiện tại, lịch sử trả nợ, chi phí sinh hoạt và khả năng trả nợ.",
          "Cam kết sử dụng vốn đúng mục đích và phối hợp cung cấp thông tin để theo dõi hiệu quả khoản vay.",
        ],
      },
      {
        kind: "text",
        title: "Nguyên tắc cấp vốn",
        body: [
          "Hạn mức vay không tự động tăng khi khách hàng hoàn thành khoản vay trước đó. Đơm Hoa đánh giá lại từng đề nghị vay dựa trên tình hình kinh doanh, khả năng trả nợ và mức độ cần thiết của khoản vốn mới.",
          "Với khoản vay phục vụ mở rộng kinh doanh, Đơm Hoa xem xét dòng tiền tăng thêm dự kiến có đủ bù đắp nghĩa vụ nợ mới hay không. Nếu hoạt động kinh doanh chưa ổn định hoặc khoản vay có nguy cơ vượt quá khả năng chi trả, Đơm Hoa có thể điều chỉnh hạn mức hoặc chưa cấp thêm vốn.",
        ],
      },
      {
        kind: "text",
        title: "Hỗ trợ phát triển sinh kế",
        body: [
          "Bên cạnh nguồn vốn, khách hàng được hướng dẫn lập kế hoạch kinh doanh, xác định giá bán, kiểm soát chi phí, quản lý hàng tồn kho và tìm kênh tiêu thụ phù hợp. Đơm Hoa có thể kết nối khách hàng với các chương trình đào tạo, hội chợ, mạng lưới bán hàng và đối tác tiêu thụ sản phẩm.",
        ],
      },
      {
        kind: "text",
        title: "Ý nghĩa xã hội",
        body: [
          "Gói “Phát triển sinh kế, tăng trưởng bền vững” giúp mỗi người củng cố hoạt động tạo thu nhập đã hình thành, mở rộng kinh doanh có kiểm soát và từng bước nâng cao khả năng tự chủ tài chính.",
          "Hiệu quả được đánh giá qua sự thay đổi về doanh thu, lợi nhuận, tính ổn định của dòng tiền, khả năng trả nợ và mức độ duy trì sinh kế sau khi nhận vốn.",
        ],
      },
    ] as Block[],
  },
];

export const appraisal = {
  title: "Nguyên tắc thẩm định khoản vay",
  intro:
    "Đơm Hoa áp dụng phương pháp thẩm định phù hợp với hoàn cảnh của từng khách hàng, hạn chế các rào cản không cần thiết đối với phụ nữ đang tái hòa nhập cộng đồng.",
  items: [
    { label: "Không bắt buộc có thu nhập cố định", value: "Có thể xem xét thu nhập từ kinh doanh nhỏ, lao động thời vụ, việc làm dự kiến hoặc nguồn hỗ trợ hợp pháp và ổn định khác." },
    { label: "Không mặc định yêu cầu tài sản bảo đảm", value: "Hình thức bảo đảm được xác định theo sản phẩm, mức độ rủi ro và quy định áp dụng." },
    { label: "Đánh giá phương án sử dụng vốn", value: "Xem xét mục đích vay, chi phí dự kiến, khả năng tạo thu nhập và các rủi ro có thể phát sinh." },
    { label: "Đánh giá khả năng trả nợ", value: "Cân đối thu nhập, chi phí sinh hoạt thiết yếu, các nghĩa vụ nợ hiện có và lịch trả nợ dự kiến." },
    { label: "Xác minh thông tin phù hợp", value: "Sử dụng giấy tờ và thông tin cần thiết để xác minh danh tính, nơi cư trú và mục đích vay; bảo mật thông tin cá nhân của khách hàng." },
    { label: "Tư vấn trước khi giải ngân", value: "Giải thích rõ số tiền vay, lãi suất, cách tính lãi, lịch trả nợ, các khoản phí nếu có và hậu quả của việc chậm trả." },
  ] as Row[],
  outro:
    "Việc thẩm định dựa trên kế hoạch sinh kế, thông tin thu nhập và chi phí thực tế, mức độ cam kết cùng các hình thức xác minh phù hợp. Sự tương trợ của nhóm có thể là yếu tố bổ sung, nhưng không thay thế việc đánh giá khả năng trả nợ của từng thành viên.",
};

export const progressivePolicy = {
  title: "Chính sách vay lũy tiến",
  intro:
    "Đơm Hoa áp dụng cơ chế vay lũy tiến nhằm khuyến khích khách hàng xây dựng lịch sử tín dụng tích cực thông qua quá trình vay và hoàn trả vốn.",
  items: [
    "Khách hàng thực hiện đầy đủ nghĩa vụ trả nợ đúng hạn được ưu tiên xem xét cho khoản vay tiếp theo.",
    "Hạn mức và thời hạn vay có thể tăng tùy theo nhu cầu vốn, kết quả kinh doanh, khả năng trả nợ và quy định của từng sản phẩm.",
    "Việc hoàn thành khoản vay trước không đồng nghĩa với việc tự động được tăng hạn mức.",
    "Khách hàng gặp khó khăn khách quan được xem xét từng trường hợp để tìm phương án xử lý phù hợp, tránh tạo áp lực khiến họ phải vay mới để trả khoản vay cũ.",
  ],
  message:
    "Mỗi khoản vay được thực hiện có trách nhiệm là một bước giúp khách hàng xây dựng lại uy tín tài chính, củng cố sinh kế và chủ động hơn trong cuộc sống.",
};

export const loanSteps = [
  { title: "Liên hệ", body: "Gọi hotline, nhắn Zalo, đến văn phòng hoặc nhờ Hội Phụ nữ giới thiệu", time: "" },
  { title: "Tư vấn riêng", body: "Gặp cán bộ tín dụng nữ trong không gian kín đáo, chọn gói phù hợp", time: "1 buổi" },
  { title: "Tập huấn đầu vào", body: "Quản lý tài chính cá nhân, lập kế hoạch kinh doanh; lập nhóm (nếu vay nhóm)", time: "2 buổi" },
  { title: "Thẩm định", body: "Cán bộ đến nơi ở hoặc nơi kinh doanh, cùng xem lại kế hoạch và mức độ sẵn sàng", time: "2–3 ngày" },
  { title: "Phê duyệt, ký hợp đồng", body: "Hội đồng xét duyệt; lịch trả nợ được giải thích rõ trước khi ký", time: "2–3 ngày" },
  { title: "Giải ngân, đồng hành", body: "Nhận vốn (chuyển khoản hoặc tiền mặt); cán bộ theo sát định kỳ, hỗ trợ kịp thời khi khó khăn", time: "Trong 48 giờ sau khi ký" },
];

export const loanActions: Action[] = [selfCheck, consult];

export const savings = {
  quote: "Mỗi tuần để dành một chút, một ngày nào đó thành chỗ dựa.",
  intro:
    "Đơm Hoa khuyến khích phụ nữ từng chấp hành án phạt tù hình thành thói quen tích lũy, xây dựng quỹ dự phòng và chủ động chuẩn bị nguồn vốn cho sinh kế. Việc tham gia tiết kiệm hoàn toàn tự nguyện, không phải điều kiện bắt buộc để được vay vốn hoặc sử dụng các dịch vụ khác của Đơm Hoa.",
  rateNote:
    "Lãi suất tham khảo từ 3,0%–4,5%/năm, tùy sản phẩm và điều kiện áp dụng. Lãi suất thực tế, cách tính lãi, thời điểm chi trả và điều kiện rút tiền phải được công khai trước khi khách hàng tham gia.",
  products: [
    {
      id: "tiet-kiem-muc-tieu",
      title: "Tiết kiệm mục tiêu có thưởng",
      intro:
        "Sản phẩm giúp khách hàng tích lũy cho một mục tiêu cụ thể, đồng thời tạo động lực duy trì thói quen tiết kiệm thông qua khoản thưởng bổ sung khi đáp ứng đầy đủ điều kiện của chương trình.",
      rows: [
        { label: "Mục tiêu", value: "Khách hàng tự lựa chọn mục tiêu: mua công cụ lao động, học nghề, dự phòng khẩn cấp, bổ sung vốn kinh doanh hoặc chi phí học tập của con." },
        { label: "Mức tích lũy", value: "Tham khảo 100.000–300.000 đồng/tuần. Khách hàng tự lựa chọn mức phù hợp với thu nhập và có thể điều chỉnh theo quy chế sản phẩm." },
        { label: "Thời gian", value: "6 tháng hoặc 12 tháng." },
        { label: "Lãi suất", value: "3,0%–4,5%/năm, tính theo số dư thực tế và số ngày gửi theo quy định công bố." },
        { label: "Thưởng tích lũy", value: "Dự kiến 5–10% trên phần tiền đủ điều kiện nhận thưởng. Chỉ triển khai khi đã có nguồn tài trợ được xác nhận và quy chế thưởng cụ thể." },
        { label: "Nguồn thưởng", value: "Quỹ xã hội hoặc nhà tài trợ theo thỏa thuận. Mức thưởng, tiêu chí xét thưởng và thời điểm chi trả được công khai trước khi khách hàng tham gia." },
        { label: "Rút tiền trước hạn", value: "Khách hàng được rút tiền gốc theo điều kiện sản phẩm đã công bố. Lãi và tiền thưởng được xử lý theo quy chế tương ứng; điều kiện rút trước hạn phải được giải thích rõ từ đầu." },
        { label: "Cách gửi", value: "Gửi định kỳ hằng tuần tại buổi sinh hoạt trung tâm hoặc điểm giao dịch được tổ chức theo mô hình hoạt động hợp pháp của Đơm Hoa." },
      ] as Row[],
      commitments: {
        title: "Cam kết của Đơm Hoa",
        items: [
          { label: "Linh hoạt", value: "Khách hàng được đề nghị hoãn một kỳ đóng góp trong giới hạn đã công bố mà không tự động bị loại khỏi chương trình." },
          { label: "Tự nguyện", value: "Không bắt buộc khách hàng vay vốn phải tham gia tiết kiệm; không gây áp lực gửi tiền vượt quá khả năng tài chính." },
          { label: "Minh bạch", value: "Công khai cách tính lãi, điều kiện nhận thưởng, thời hạn xử lý yêu cầu rút tiền, các khoản phí và cơ chế quản lý tiền." },
          { label: "Bảo vệ quyền lợi", value: "Tiền tiết kiệm cá nhân được theo dõi riêng, không tự động dùng để bù trừ khoản vay hoặc nghĩa vụ của thành viên khác nếu không có căn cứ pháp lý và sự đồng ý hợp lệ." },
          { label: "Đồng hành", value: "Hướng dẫn khách hàng ghi chép thu chi, xây dựng quỹ dự phòng và lựa chọn mục tiêu tích lũy phù hợp với hoàn cảnh." },
        ] as Row[],
      },
    },
    {
      id: "tiet-kiem-trung-tam",
      title: "Tiết kiệm trung tâm",
      intro:
        "Sản phẩm hướng đến việc duy trì thói quen tích lũy đều đặn trong cộng đồng thành viên Đơm Hoa, giúp mỗi người chủ động chuẩn bị nguồn tiền cho những nhu cầu thiết yếu hoặc tình huống phát sinh.",
      rows: [
        { label: "Đối tượng", value: "Thành viên các nhóm vay vốn và những khách hàng đủ điều kiện sử dụng dịch vụ tiết kiệm của Đơm Hoa, kể cả người chưa vay vốn." },
        { label: "Mục đích", value: "Hình thành thói quen tích lũy định kỳ, xây dựng quỹ dự phòng cá nhân và tăng khả năng chủ động về tài chính." },
        { label: "Mức gửi", value: "Khách hàng tự lựa chọn số tiền và tần suất gửi phù hợp với khả năng tài chính. Có thể gửi tại các buổi sinh hoạt trung tâm nếu hình thức này phù hợp với quy định áp dụng." },
        { label: "Lãi suất", value: "Áp dụng khung tham khảo 3,0%–4,5%/năm; mức cụ thể và cách tính lãi được công bố trước khi tham gia." },
        { label: "Rút tiền", value: "Thực hiện theo điều kiện sản phẩm được công bố rõ ràng, bao gồm thời gian xử lý yêu cầu, điều kiện rút trước hạn và phí phát sinh nếu có." },
        { label: "Quỹ tương trợ nhóm", value: "Nếu các thành viên có nhu cầu thành lập quỹ tương trợ, quỹ phải hoàn toàn tự nguyện, tách biệt với tiền tiết kiệm cá nhân, có quy chế hoạt động, sổ sách thu chi và cơ chế giám sát riêng. Quỹ tương trợ không được mặc nhiên sử dụng tiền tiết kiệm cá nhân của thành viên." },
      ] as Row[],
      principle:
        "Đơm Hoa khuyến khích mỗi thành viên tiết kiệm theo khả năng, không đặt mức đóng góp cứng nhắc và không xem việc gửi tiết kiệm là tiêu chí bắt buộc để được vay vốn. Mục tiêu là giúp khách hàng từng bước xây dựng nền tảng tài chính an toàn, chứ không làm tăng áp lực chi tiêu hoặc khiến họ thiếu hụt tiền cho các nhu cầu thiết yếu.",
    },
  ] as const,
};

/* ---------------- Đồng hành cộng đồng ---------------- */

export const community = {
  quote: "Không chỉ trao cơ hội, mà còn đồng hành trên hành trình làm lại cuộc đời.",
  intro: [
    "Bên cạnh các sản phẩm tài chính, Đơm Hoa triển khai ba chương trình hỗ trợ cộng đồng nhằm giúp phụ nữ sau khi chấp hành án phạt tù phục hồi sự tự tin, nâng cao năng lực quản lý tài chính và từng bước tiếp cận cơ hội việc làm bền vững.",
    "Các chương trình được cung cấp miễn phí, dựa trên nhu cầu và sự tự nguyện của khách hàng; không phải điều kiện bắt buộc để được vay vốn, ngoại trừ buổi tập huấn đầu vào ngắn nhằm giúp khách hàng hiểu rõ quyền, nghĩa vụ và cách sử dụng vốn an toàn.",
  ],
};

export const counselling = {
  id: "tham-van",
  title: "Tham vấn và hỗ trợ tâm lý",
  quote: "Một nơi để được lắng nghe, một bước để tự tin bắt đầu lại.",
  intro:
    "Chương trình tạo không gian an toàn để khách hàng chia sẻ khó khăn trong quá trình tái hòa nhập, từng bước giảm mặc cảm, lo âu, củng cố sự tự tin và xây dựng kế hoạch cho công việc, gia đình và cuộc sống.",
  rows: [
    { label: "Đối tượng", value: "Khách hàng có nhu cầu, đăng ký hoàn toàn tự nguyện; việc tham gia không ảnh hưởng đến quyết định xét duyệt vay vốn." },
    { label: "Hình thức", value: "Tham vấn cá nhân và sinh hoạt nhóm đồng đẳng, trực tiếp hoặc trực tuyến." },
    { label: "Thời lượng", value: "Tham vấn cá nhân dự kiến 4–8 buổi, mỗi buổi 45–60 phút; sinh hoạt nhóm 6–8 buổi, mỗi nhóm 6–10 người, định kỳ hai tuần/lần." },
    { label: "Người thực hiện", value: "Tham vấn viên, nhân viên công tác xã hội được đào tạo phù hợp; trường hợp cần chuyên môn y tế sẽ được giới thiệu đến cơ sở có thẩm quyền." },
    { label: "Chi phí", value: "Miễn phí đối với khách hàng tham gia chương trình." },
  ] as Row[],
  steps: [
    { title: "Tiếp nhận và giới thiệu", body: "Giải thích mục tiêu, tính tự nguyện, quyền dừng tham gia và các giới hạn của bảo mật thông tin." },
    { title: "Xác nhận đồng ý", body: "Thu thập sự đồng ý phù hợp đối với việc xử lý thông tin cá nhân; hồ sơ tham vấn được quản lý tách biệt với hồ sơ tín dụng." },
    { title: "Trao đổi ban đầu", body: "Tìm hiểu nhu cầu, khó khăn và mong muốn của khách hàng, không tự ý chẩn đoán bệnh lý." },
    { title: "Tham vấn cá nhân", body: "Lắng nghe, hỗ trợ nhận diện cảm xúc và xây dựng các mục tiêu nhỏ, phù hợp với hoàn cảnh thực tế." },
    { title: "Sinh hoạt nhóm đồng đẳng", body: "Tạo cơ hội chia sẻ kinh nghiệm theo nguyên tắc tự nguyện, không phán xét, không ép buộc kể chuyện cá nhân và tôn trọng quyền riêng tư." },
    { title: "Giới thiệu hỗ trợ chuyên sâu", body: "Khi phát hiện dấu hiệu cần chăm sóc chuyên môn, Đơm Hoa hỗ trợ kết nối với cơ sở khám chữa bệnh phù hợp hoặc cơ quan hỗ trợ liên quan. Trường hợp có nguy cơ nguy hiểm tức thời, ưu tiên liên hệ dịch vụ cấp cứu và cơ quan chức năng phù hợp." },
    { title: "Theo dõi và kết thúc", body: "Đánh giá mức độ đáp ứng nhu cầu, lưu trữ hồ sơ theo quy định và thời hạn đã thông báo. Khách hàng có thể dừng tham gia bất cứ lúc nào." },
  ],
  commitments: [
    "Nội dung tham vấn không được sử dụng để thẩm định khoản vay, thu hồi nợ, đánh giá tín dụng hoặc chia sẻ cho nhóm vay và nhà tuyển dụng.",
    "Tham vấn và hỗ trợ xã hội không thay thế hoạt động khám, chẩn đoán hoặc điều trị y khoa.",
    "Thông tin cá nhân, đặc biệt là thông tin sức khỏe và tâm lý, được bảo vệ theo quy định pháp luật áp dụng.",
    "Khách hàng được thông báo trước về giới hạn bảo mật và các trường hợp thông tin có thể phải cung cấp theo yêu cầu pháp luật hoặc để xử lý nguy cơ nghiêm trọng đến tính mạng, an toàn.",
  ],
};

export const financeEducation = {
  id: "giao-duc-tai-chinh",
  title: "Giáo dục tài chính và khởi nghiệp",
  quote: "Học cách quản lý đồng tiền, tự tin làm chủ tương lai.",
  intro:
    "Chương trình trang bị kiến thức và kỹ năng thực tế giúp khách hàng quản lý chi tiêu gia đình, hiểu rõ nghĩa vụ tài chính, xây dựng kế hoạch kinh doanh nhỏ hoặc chuẩn bị hồ sơ tìm việc.",
  rows: [
    { label: "Mục tiêu", value: "Nâng cao năng lực quản lý tài chính cá nhân, sử dụng vốn có trách nhiệm và phát triển sinh kế." },
    { label: "Đối tượng", value: "Khách hàng đã vay vốn, chưa vay vốn hoặc đang chuẩn bị học nghề, tìm việc và khởi nghiệp." },
    { label: "Hình thức", value: "Lớp trực tiếp tại điểm sinh hoạt và lớp trực tuyến thông qua mô hình “Học viện khởi nghiệp ảo” của Đơm Hoa." },
    { label: "Phương pháp", value: "Học theo tình huống thực tế, thực hành ghi chép thu chi, lập kế hoạch kinh doanh và chia sẻ kinh nghiệm đồng đẳng." },
    { label: "Người thực hiện", value: "Cán bộ đào tạo, giảng viên, chuyên gia khách mời và cựu học viên đã được hướng dẫn phù hợp." },
    { label: "Kết quả", value: "Giấy xác nhận hoàn thành chương trình của Đơm Hoa; không thay thế chứng chỉ nghề hoặc văn bằng được pháp luật công nhận." },
    { label: "Chi phí", value: "Miễn phí." },
  ] as Row[],
  modules: [
    { name: "Quản lý chi tiêu gia đình", content: "Lập ngân sách, ghi chép thu chi, tách biệt tiền kinh doanh và tiền gia đình, xây dựng quỹ dự phòng.", length: "2 buổi", mode: "Trực tiếp" },
    { name: "Vay, trả nợ và tiết kiệm", content: "Hiểu lãi suất, dư nợ giảm dần, lịch trả nợ, tổng nghĩa vụ tài chính; nhận diện tín dụng đen và lừa đảo.", length: "2 buổi", mode: "Trực tiếp" },
    { name: "Lập kế hoạch kinh doanh nhỏ", content: "Lựa chọn ý tưởng, tìm hiểu thị trường, định giá, tính lợi nhuận và dòng tiền.", length: "3 buổi", mode: "Trực tiếp hoặc trực tuyến" },
    { name: "Bán hàng và quản lý cửa hàng nhỏ", content: "Chăm sóc khách hàng, quản lý hàng tồn kho và kỹ năng bán hàng trực tuyến cơ bản.", length: "2 buổi", mode: "Trực tuyến hoặc thực hành" },
    { name: "Thủ tục kinh doanh cơ bản", content: "Giới thiệu về đăng ký kinh doanh, thuế, hóa đơn và cơ quan hỗ trợ liên quan.", length: "1 buổi", mode: "Trực tiếp" },
    { name: "Kỹ năng tìm việc", content: "Chuẩn bị hồ sơ xin việc, phỏng vấn, quyền và nghĩa vụ của người lao động.", length: "2 buổi", mode: "Trực tiếp hoặc trực tuyến" },
  ],
  modulesNote:
    "Tổng thời lượng chương trình đầy đủ: 12 buổi. Khách hàng được tư vấn lựa chọn học phần phù hợp với nhu cầu; chương trình này không phải điều kiện bắt buộc để được vay vốn.",
  commitments: [
    "Chương trình không thay thế hoạt động giáo dục nghề nghiệp. Các khóa học cấp văn bằng hoặc chứng chỉ nghề được thực hiện thông qua cơ sở có đủ điều kiện theo quy định.",
    "Không tư vấn đầu tư, môi giới chứng khoán, bảo hiểm, tiền mã hóa hoặc lôi kéo khách hàng tham gia bán hàng đa cấp.",
    "Nội dung pháp lý và thuế được ghi rõ thời điểm cập nhật; trường hợp cần tư vấn chuyên sâu, khách hàng được hướng dẫn đến đơn vị phù hợp.",
    "Chỉ ghi hình, chụp ảnh hoặc ghi âm khi có sự đồng ý phù hợp; danh sách học viên không được công khai tùy tiện.",
    "Chỉ yêu cầu khách hàng tham gia buổi tập huấn đầu vào ngắn liên quan đến khoản vay; các khóa học bổ sung hoàn toàn tự nguyện.",
  ],
};

export const socialShop = {
  id: "cua-hang-xa-hoi",
  title: "Cửa hàng xã hội thực hành",
  quote: "Thực hành công việc thật, tích lũy kinh nghiệm thật, mở rộng cơ hội việc làm.",
  intro:
    "Cửa hàng xã hội thực hành tạo môi trường để khách hàng rèn luyện kỹ năng nghề nghiệp thông qua các công việc thực tế, đồng thời có cơ hội tạo thu nhập và xây dựng hồ sơ kinh nghiệm làm việc.",
  rows: [
    { label: "Mục tiêu", value: "Phát triển kỹ năng bán hàng, thu ngân, quản lý kho, trưng bày sản phẩm và bán hàng trực tuyến; tạo cơ hội tích lũy kinh nghiệm thực tế." },
    { label: "Mô hình", value: "Cửa hàng bán đồ đã qua sử dụng và hàng quyên góp, do đơn vị đủ điều kiện vận hành hợp pháp hoặc thông qua đối tác phù hợp." },
    { label: "Đối tượng", value: "Khách hàng đã hoàn thành các học phần cơ bản hoặc có nhu cầu thực hành trước khi tìm việc, khởi nghiệp hay vay vốn phát triển sinh kế." },
    { label: "Thời gian", value: "Dự kiến 1–3 tháng, tùy vị trí, kế hoạch đào tạo và thỏa thuận tham gia." },
    { label: "Hoạt động thực hành", value: "Tiếp nhận và phân loại hàng, kiểm tra chất lượng, trưng bày, định giá, thu ngân, bán hàng trực tuyến và kiểm kê." },
    { label: "Đầu ra", value: "Được đánh giá kỹ năng, xác nhận kinh nghiệm phù hợp và giới thiệu cơ hội việc làm tại cửa hàng hoặc doanh nghiệp đối tác; khách hàng có nhu cầu tự kinh doanh có thể được tư vấn tiếp cận Gói vay 1." },
    { label: "Nguồn thu", value: "Doanh thu bán hàng được sử dụng cho chi phí hàng hóa hợp lệ, tiền lương và các chi phí vận hành; phần thặng dư, nếu có, được tái đầu tư cho hoạt động xã hội theo quy chế công khai." },
  ] as Row[],
  commitments: [
    "Người làm việc theo quan hệ lao động được ký hợp đồng và hưởng quyền lợi về tiền lương, bảo hiểm bắt buộc, thời giờ làm việc và an toàn lao động theo quy định áp dụng.",
    "Không sử dụng danh nghĩa “thực tập” để thay thế công việc có trả lương hoặc né tránh nghĩa vụ đối với người lao động.",
    "Hoạt động thực hành nghề được thỏa thuận rõ về nội dung, thời gian, quyền lợi, trách nhiệm và an toàn.",
    "Hàng quyên góp hoặc ký gửi phải có nguồn gốc rõ ràng, được ghi nhận, kiểm tra chất lượng và bảo đảm an toàn trước khi bán.",
    "Thực hiện nghĩa vụ thuế, hóa đơn, kế toán và quản lý doanh thu theo mô hình vận hành thực tế.",
    "Tách biệt sổ sách và tài khoản vận hành cửa hàng với hoạt động tín dụng, đồng thời công khai việc sử dụng nguồn tài trợ.",
    "Không công khai danh tính, hình ảnh hoặc hoàn cảnh cá nhân của học viên cho khách hàng, nhà tài trợ hay truyền thông khi chưa có sự đồng ý phù hợp.",
    "Các khoản quyên góp, tài trợ được ghi nhận, quản lý và sử dụng đúng mục đích đã cam kết.",
  ],
  direction: [
    "Trong giai đoạn đầu, Đơm Hoa có thể hợp tác với doanh nghiệp xã hội, cửa hàng đồ cũ và đơn vị tuyển dụng hiện có để tổ chức thực hành, thay vì tự đầu tư một cửa hàng ngay lập tức. Khi chương trình có đủ nguồn lực và nhu cầu ổn định, Đơm Hoa mới xem xét xây dựng cửa hàng riêng.",
    "Cách triển khai này giúp giảm chi phí ban đầu, tận dụng mạng lưới đối tác và tập trung vào mục tiêu cốt lõi: tạo cơ hội để phụ nữ sau khi chấp hành án phạt tù phục hồi sự tự tin, nâng cao năng lực và từng bước xây dựng sinh kế bền vững.",
  ],
};

/* ---------------- Dự án ---------------- */

export const project = {
  name: "Hạt mầm trong tay",
  subtitle: "Đào tạo nghề gắn với mục tiêu đầu ra: Chương trình tạo việc làm và sinh kế ổn định tại Hà Nội",
  sections: [
    { id: "tong-quan", label: "Tổng quan" },
    { id: "quy-trinh", label: "Quy trình" },
    { id: "kinh-phi", label: "Kinh phí" },
    { id: "ket-qua", label: "Kết quả và quản trị" },
    { id: "dong-hanh", label: "Đồng hành cùng dự án" },
  ],
  proposer: "Tổ chức Tài chính Vi mô Đơm Hoa",
  area: "Thành phố Hà Nội",
  promise: "Đơm Hoa không dạy nghề chung chung. Mỗi lớp học chỉ được mở khi doanh nghiệp đầu ra đã ký cam kết nhận lao động.",
  summary: [
    "“Hạt mầm trong tay” là dự án đào tạo nghề gắn với việc làm đầu ra, do Đơm Hoa phối hợp với cơ sở dạy nghề và doanh nghiệp/xưởng sản xuất cùng triển khai tại Hà Nội. Dự án hướng tới phụ nữ và thanh thiếu niên đã hoàn thành nghĩa vụ chấp hành án phạt tù, đang cần một công việc ổn định để gắn bó trở lại với cộng đồng.",
    "Điểm khác biệt của dự án là đào tạo khi đã có việc làm chờ sẵn. Học viên được hỗ trợ sinh hoạt phí trong thời gian học, được sát hạch tay nghề, ký hợp đồng lao động hoặc hợp đồng bao tiêu sản phẩm nếu đạt, và được ưu tiên xét vay vốn nếu muốn tự làm thay vì đi làm thuê.",
    "Dự án cũng là cầu nối giữa hai hoạt động của Đơm Hoa: đào tạo và việc làm (giai đoạn đầu của chu trình Gieo – Ươm – Vun – Nở) và tín dụng vi mô (giai đoạn học viên đủ điều kiện tự chủ kinh doanh).",
  ],
  facts: [
    { label: "Tên dự án", value: "Hạt mầm trong tay: Đào tạo nghề gắn với mục tiêu đầu ra" },
    { label: "Đơn vị chủ trì", value: "Tổ chức Tài chính Vi mô Đơm Hoa" },
    { label: "Địa bàn", value: "Thành phố Hà Nội" },
    { label: "Đối tượng", value: "Phụ nữ và thanh thiếu niên đã hoàn thành nghĩa vụ chấp hành án phạt tù, có nhu cầu học nghề và làm việc" },
    { label: "Mô hình", value: "Hợp tác 3 bên: tổ chức vi mô, cơ sở dạy nghề, doanh nghiệp nhận lao động" },
    { label: "Quy mô ban đầu", value: "15–20 học viên/lớp; mỗi lớp học 2 tháng; 2 lớp/năm" },
    { label: "Nghề đầu tiên", value: "May gia công cho xưởng đã ký hợp đồng" },
    { label: "Chi phí 1 lớp 15 người", value: "147 triệu đồng (9,8 triệu đồng/học viên)" },
    { label: "Nhu cầu tài trợ", value: "89 triệu đồng/lớp (khoảng 6 triệu đồng/học viên)" },
  ] as Row[],
  why: {
    body: "Sau khi trở về, nhiều phụ nữ và thanh thiếu niên rơi vào một vòng luẩn quẩn: thiếu tay nghề, thiếu vốn, gặp kỳ thị khi xin việc, không có thu nhập ổn định, và vì thế dễ quay lại các nguồn sinh kế rủi ro hoặc vay nặng lãi. Nhiều người là trụ cột kinh tế hoặc đang nuôi con nhỏ, nên áp lực kiếm sống càng lớn.",
    cycle: ["Thiếu tay nghề, bị kỳ thị", "Khó có việc làm", "Thu nhập không ổn định", "Nợ, vay nặng lãi", "Nguy cơ tái nghèo và tái phạm"],
    limits: [
      { problem: "Học xong không có việc làm", fix: "Chỉ mở lớp khi doanh nghiệp đầu ra đã cam kết nhận lao động" },
      { problem: "Học viên không có thu nhập trong thời gian học nên khó theo hết khóa", fix: "Hỗ trợ sinh hoạt phí gắn với chuyên cần" },
      { problem: "Thiếu hỗ trợ tâm lý và hòa nhập sau khi đi làm", fix: "Sinh hoạt nhóm, cán bộ đồng hành và theo dõi sau đào tạo" },
    ],
  },
  whyHanoi:
    "Hà Nội có nhu cầu lớn về lao động phổ thông và lao động có tay nghề, có mạng lưới cơ sở dạy nghề, doanh nghiệp, tổ chức đoàn thể (Hội Phụ nữ, Đoàn Thanh niên) và chính quyền cơ sở có thể phối hợp giới thiệu học viên. Đây là điều kiện thuận lợi để thử nghiệm mô hình trước khi nhân rộng.",
  goal: "Giúp học viên có tay nghề, có việc làm hoặc sinh kế ổn định, từng bước tự chủ tài chính và gắn bó bền vững với cộng đồng.",
  objectives: [
    "Đào tạo nghề cho 15–20 học viên mỗi lớp, tỷ lệ tham gia và tốt nghiệp từ 80% trở lên.",
    "Ít nhất 70% học viên có việc làm hoặc thu nhập trong vòng 3 tháng sau đào tạo, và 60% còn làm việc sau 6 tháng.",
    "Trang bị kỹ năng mềm, kỷ luật lao động và kiến thức quản lý tiền cơ bản cho 100% học viên.",
    "Tạo hồ sơ tích lũy và đủ điều kiện vay vốn cho học viên muốn tự làm.",
    "Xây dựng mạng lưới đối tác (cơ sở dạy nghề, doanh nghiệp) đủ rộng để mở thêm lớp và nghề mới.",
  ],
  partnersIntro:
    "Dự án triển khai theo từng lớp, không phải hoạt động thường xuyên. Mỗi đợt đào tạo gắn với một nghề cụ thể, có đầu ra được cam kết từ trước.",
  partners: [
    { name: "Đơm Hoa", role: "Điều phối, tuyển chọn và đồng hành học viên; hỗ trợ sinh hoạt phí; tư vấn tâm lý, kỹ năng mềm; làm đầu mối đơn hàng (luồng B); xét vay vốn" },
    { name: "Cơ sở dạy nghề", role: "Xây dựng và giảng dạy chương trình; cung cấp địa điểm, máy móc, dụng cụ; tham gia sát hạch" },
    { name: "Doanh nghiệp, xưởng đầu ra", role: "Cam kết nhận lao động, ký hợp đồng đúng luật; cử thợ cả hướng dẫn; cho học viên thực hành trên dây chuyền thật; đồng tài trợ" },
    { name: "Chính quyền, đoàn thể địa phương", role: "Giới thiệu học viên; hỗ trợ thủ tục; giảm kỳ thị; kết nối chính sách hỗ trợ" },
  ],
  audience: [
    "Địa bàn: Thành phố Hà Nội, ưu tiên các phường, xã có xưởng may đối tác và có học viên cư trú gần nơi làm việc để giảm chi phí đi lại.",
    "Đối tượng thụ hưởng: phụ nữ và thanh thiếu niên đã hoàn thành nghĩa vụ chấp hành án phạt tù, có nguyện vọng học nghề và đi làm.",
  ],
  selection: [
    "Được địa phương giới thiệu; có nhu cầu, nguyện vọng và thái độ học tập nghiêm túc qua phỏng vấn.",
    "Sức khỏe phù hợp với nghề, qua khám sức khỏe cơ bản.",
    "Ưu tiên người có con nhỏ hoặc là trụ cột kinh tế của gia đình.",
    "Cam kết tham gia đủ số buổi học và sinh hoạt nhóm. Học viên chưa đủ 18 tuổi cần có sự đồng ý của người giám hộ hợp pháp.",
  ],
  structure: ["Học nghề có sinh hoạt phí", "Sát hạch tay nghề", "Ký hợp đồng lao động hoặc hợp đồng bao tiêu sản phẩm", "Ưu tiên xét vay nếu muốn tự làm"],
  model: [
    "Nghề đầu tiên: may gia công cho một xưởng đã ký hợp đồng. Các lớp sau có thể là nấu ăn, cắt tóc, bán hàng online.",
    "Quy mô: ban đầu 1 lớp (tương đương 1 đợt) khoảng 15–20 học viên, đào tạo 2 tháng, mỗi năm 2 lớp luân phiên theo nghề tùy nhu cầu thị trường lao động. Quy mô sẽ tăng khi Đơm Hoa đủ vững.",
    "Đối tác từng đợt: một doanh nghiệp nhận đầu ra và một cơ sở dạy nghề, ký biên bản hợp tác trước khi mở lớp.",
    "Đầu ra từng đợt: tỷ lệ có việc làm; thu nhập ổn định sau tốt nghiệp trong vòng 1–3 tháng; số hợp đồng ký được.",
  ],
  cycle: ["Tuyển chọn", "Đào tạo (2 tháng)", "Sát hạch", "Phân luồng A hoặc B", "Đồng hành (2 tháng)", "Tổng kết (tháng 6)", "Vay vốn hoặc tự chủ"],
  phases: [
    {
      phase: "Giai đoạn 0. Chuẩn bị",
      time: "1 tháng trước khi bắt đầu",
      items: [
        "Ký biên bản hợp tác ba bên. Điều kiện tiên quyết là xưởng cam kết: nhận tối thiểu 2/3 số học viên đạt sát hạch; ký hợp đồng lao động đúng luật (có bảo hiểm) hoặc hợp đồng gia công có đơn giá rõ ràng; cử thợ cả hướng dẫn và cho học viên thực hành trên dây chuyền thật.",
        "Tuyển chọn học viên: qua giới thiệu của địa phương, phỏng vấn nhu cầu, nguyện vọng và thái độ, khám sức khỏe cơ bản; ưu tiên người có con nhỏ hoặc là trụ cột kinh tế.",
        "Chuẩn bị chương trình: tay nghề, kỹ năng mềm, kỷ luật lao động, giao tiếp nơi làm việc, quản lý tiền cơ bản.",
      ],
    },
    {
      phase: "Giai đoạn 1. Đào tạo",
      time: "2 tháng đầu",
      items: [
        "Mỗi tuần có 4 buổi đào tạo nghề.",
        "Song song với các buổi học nghề, có 4 buổi sinh hoạt nhóm (2 tuần một lần) nhằm tăng gắn kết cộng đồng, hỗ trợ tinh thần và giúp học viên hòa nhập, gồm cách đối diện kỳ thị, quản lý căng thẳng và quản lý chi tiêu.",
        "Phân luồng đầu ra vào cuối tháng thứ 2.",
      ],
    },
    {
      phase: "Giai đoạn 2. Đồng hành",
      time: "2 tháng tiếp theo",
      items: [
        "Cán bộ dự án thăm xưởng và họp nhóm hằng tháng, xử lý sớm mâu thuẫn, nghỉ việc hoặc khó khăn cá nhân.",
        "Theo dõi thu nhập, chuyên cần và tỷ lệ lỗi.",
        "Học viên luồng A được khuyến khích gửi tiết kiệm định kỳ để tạo hồ sơ tích lũy, đủ điều kiện vay sau này.",
      ],
    },
    {
      phase: "Giai đoạn 3. Tổng kết",
      time: "Tháng thứ 6",
      items: ["Đánh giá theo bộ chỉ số, họp rút kinh nghiệm với xưởng, quyết định có mở đợt tiếp theo không và điều chỉnh gì (số lượng, xưởng, nghề)."],
    },
  ],
  weeks: [
    { weeks: "1–2", content: "An toàn lao động, nhận biết máy và nguyên liệu, may đường cơ bản" },
    { weeks: "3–5", content: "Từng công đoạn: ráp cổ, tay, thân, vắt sổ, hoàn thiện" },
    { weeks: "6–7", content: "Thực hành trên đơn hàng thật của xưởng, tính định mức và năng suất thật" },
    { weeks: "8", content: "Sát hạch tay nghề (năng suất, tỷ lệ lỗi), phân luồng đầu ra" },
  ],
  streams: [
    { name: "Luồng A: Làm thuê tại xưởng", body: "Ký hợp đồng lao động, thử việc, làm trên dây chuyền", note: "Rủi ro thấp nhất, là lựa chọn mặc định cho đa số học viên ở đợt đầu" },
    { name: "Luồng B: Tổ gia công tự chủ (3–5 người)", body: "Nhận đơn hàng từ xưởng qua Đơm Hoa làm đầu mối, tự tổ chức sản xuất; cần mua máy thì vay vốn", note: "Chỉ mở cho học viên có năng suất và kỷ luật tốt; thử nghiệm quy mô nhỏ trước" },
  ],
  roadmap: [
    { time: "Trước tháng 1 (1 tháng)", phase: "0. Chuẩn bị", work: "Ký biên bản hợp tác; tuyển chọn học viên; chuẩn bị chương trình", result: "Đủ đối tác và danh sách học viên" },
    { time: "Tháng 1–2", phase: "1. Đào tạo", work: "4 buổi/tuần; 4 buổi sinh hoạt nhóm; sát hạch tuần 8", result: "Học viên đạt chuẩn tay nghề; phân luồng A, B" },
    { time: "Tháng 3–4", phase: "2. Đồng hành", work: "Thăm xưởng, họp nhóm hằng tháng; theo dõi chỉ số", result: "Học viên ổn định việc làm, bắt đầu tích lũy" },
    { time: "Tháng 6", phase: "3. Tổng kết", work: "Đánh giá chỉ số, họp rút kinh nghiệm", result: "Quyết định mở đợt tiếp theo" },
  ],
  parallelNote:
    "Khi Đơm Hoa hoạt động bền vững và có mạng lưới đối tác đủ rộng, các lớp khác có thể mở song song sau khi lớp trước hoàn thành giai đoạn 1.",
  costs: [
    { item: "Thù lao thợ cả/giảng viên", calc: "2 người × 2 tháng × 6 triệu", amount: "24" },
    { item: "Sinh hoạt phí học viên", calc: "15 × 2 tháng × 1,5 triệu", amount: "45" },
    { item: "Nguyên vật liệu thực hành", calc: "15 × 0,5 triệu", amount: "7,5" },
    { item: "Bảo trì máy, dụng cụ", calc: "Trọn gói", amount: "10" },
    { item: "Đồng phục, bảo hộ, khám sức khỏe", calc: "15 × 0,4 triệu", amount: "6" },
    { item: "Cán bộ điều phối (bán thời gian)", calc: "6 tháng × 4 triệu", amount: "24" },
    { item: "Tư vấn tâm lý, kỹ năng mềm", calc: "6 buổi × 1,5 triệu", amount: "9" },
    { item: "Theo dõi sau đào tạo (đi lại, họp)", calc: "3 tháng", amount: "8" },
    { item: "Dự phòng 10%", calc: "", amount: "13,5" },
  ],
  costTotal: { amount: "147", note: "khoảng 9,8 triệu/học viên" },
  contributions: [
    { item: "Xưởng đồng tài trợ", calc: "Chi phí đào tạo mà xưởng vốn phải bỏ ra", amount: "30" },
    { item: "Phí giới thiệu lao động", calc: "12 người × 1,5 triệu (khi làm đủ 3 tháng)", amount: "18" },
    { item: "Chiết khấu đơn hàng qua Đơm Hoa (luồng B)", calc: "5% × 200 triệu đồng đơn hàng", amount: "10" },
  ],
  contributionTotal: "58",
  gap: { calc: "147 − 58", amount: "89", note: "khoảng 6 triệu/học viên" },
  costNotes: [
    "Nếu xưởng đồng ý trả phí cao hơn hoặc dùng thợ cả của xưởng miễn phí, phần cần tài trợ sẽ giảm đáng kể.",
    "Nguồn tài trợ dự kiến cho phần còn thiếu: quỹ xã hội và tổ chức phi chính phủ quan tâm đến hỗ trợ sinh kế, chương trình trách nhiệm xã hội của doanh nghiệp, và các nguồn hỗ trợ dạy nghề, việc làm từ ngân sách địa phương (nếu đáp ứng điều kiện của từng chương trình).",
  ],
  kpis: [
    { name: "Số học viên nhập học", target: "15 người" },
    { name: "Tỷ lệ tham gia và tốt nghiệp", target: "từ 80%" },
    { name: "Tỷ lệ có việc làm hoặc thu nhập sau 3 tháng", target: "từ 70%" },
    { name: "Tỷ lệ còn làm việc sau 6 tháng", target: "từ 60%" },
    { name: "Thu nhập bình quân so với trước dự án", target: "Theo dõi" },
    { name: "Chi phí trên mỗi học viên có việc làm", target: "Theo dõi" },
    { name: "Số học viên đủ điều kiện và đề nghị vay", target: "Theo dõi" },
  ],
  governance: [
    { label: "Trách nhiệm", value: "Cán bộ điều phối của Đơm Hoa chịu trách nhiệm chung, báo cáo kết quả cho ban lãnh đạo theo từng giai đoạn." },
    { label: "Dữ liệu", value: "Thu thập số liệu về chuyên cần, điểm sát hạch, tỷ lệ lỗi, thu nhập và tình trạng việc làm theo tháng, lưu trong hồ sơ từng học viên." },
    { label: "Bảo mật", value: "Hồ sơ và thông tin cá nhân học viên chỉ được chia sẻ trong phạm vi cần thiết, không tiết lộ rộng rãi tại nơi làm việc và cộng đồng." },
    { label: "Đánh giá cuối đợt (tháng thứ 6)", value: "So với các chỉ số mục tiêu, kèm họp rút kinh nghiệm với xưởng và cơ sở dạy nghề. Kết quả là căn cứ quyết định mở đợt tiếp theo." },
  ] as Row[],
  risks: [
    { risk: "Xưởng giao đơn không đều hoặc thay đổi cam kết", fix: "Quy định trong biên bản hợp tác về số lượng nhận, đơn giá tối thiểu, điều khoản chấm dứt; đàm phán thêm xưởng dự phòng" },
    { risk: "Học viên bỏ học hoặc nghỉ việc (do gánh nặng gia đình, mặc cảm)", fix: "Sinh hoạt phí gắn với chuyên cần, sinh hoạt nhóm, cán bộ đồng hành, ghép cặp hỗ trợ lẫn nhau" },
    { risk: "Kỳ thị tại nơi làm việc", fix: "Thống nhất trước với ban giám đốc và tổ trưởng về nguyên tắc ứng xử, không tiết lộ lý lịch rộng rãi" },
    { risk: "Chất lượng sản phẩm chưa đạt", fix: "Thợ cả kèm cặp, sát hạch theo tiêu chuẩn của xưởng" },
    { risk: "Phụ thuộc vào một xưởng", fix: "Mở rộng thêm 1–2 đối tác từ các đợt sau" },
    { risk: "Rủi ro pháp lý về lao động", fix: "Ký hợp đồng lao động đúng luật, phí hoặc chiết khấu ghi rõ trong hợp đồng" },
  ],
  sustainability: [
    { label: "Bền vững về tài chính", value: "Chi phí được chia sẻ giữa xưởng (đồng tài trợ, phí giới thiệu, chiết khấu) và nguồn tài trợ xã hội. Tỷ trọng đóng góp của đối tác có thể tăng dần theo từng đợt." },
    { label: "Bền vững về việc làm", value: "Học viên được tuyển vào các vị trí có hợp đồng, có bảo hiểm, thay vì việc làm tạm thời." },
    { label: "Nhân rộng", value: "Sau đợt thử nghiệm đầu tiên, dự án mở thêm nghề (nấu ăn, cắt tóc, bán hàng online), thêm xưởng và cơ sở dạy nghề đối tác, tăng số đợt trong năm và có thể mở rộng sang các quận, huyện khác của Hà Nội." },
    { label: "Gắn với tín dụng vi mô", value: "Học viên có hồ sơ tích lũy tốt được ưu tiên xét vay vốn, tạo đầu vào chất lượng cho các sản phẩm tín dụng của Đơm Hoa." },
  ] as Row[],
  appeal: "Đợt đầu còn cần khoảng 89 triệu đồng. Quý doanh nghiệp, nhà tài trợ có thể đồng hành theo cách phù hợp:",
  packages: [
    { name: "Nhà tài trợ Vàng", value: "89 triệu đồng", meaning: "Tài trợ toàn bộ phần kinh phí còn thiếu của cả lớp (15 học viên)" },
    { name: "Nhà tài trợ Bạc", value: "6 triệu đồng/học viên", meaning: "Trọn gói chi phí đào tạo cho một học viên, cho đến khi có việc làm" },
    { name: "Đồng hành theo hạng mục", value: "Theo thực tế", meaning: "Nguyên vật liệu, sinh hoạt phí, đồng phục, bảo hộ lao động hoặc thù lao giảng viên" },
    { name: "Hiện vật, hiện diện", value: "Không quy định", meaning: "Máy may, nguyên phụ liệu, chỗ thực hành hoặc nhận lao động sau đào tạo" },
  ],
  sponsorBenefits:
    "Được ghi nhận là đơn vị đồng hành trong tài liệu, báo cáo và truyền thông; nhận báo cáo tiến độ và kết quả đầu ra (tốt nghiệp, việc làm, thu nhập); được mời dự lễ khai giảng và tổng kết. Mọi khoản tài trợ được dùng đúng mục đích, có chứng từ minh bạch và theo quy định pháp luật.",
  closing:
    "“Hạt mầm trong tay” trao cho học viên một nghề có việc làm chờ sẵn, một cộng đồng đồng hành và một lộ trình tài chính rõ ràng: từ học nghề, đi làm, tích lũy đến vay vốn tự chủ. Triển khai tại Hà Nội theo từng lớp nhỏ, có chỉ số mục tiêu và đánh giá sau mỗi đợt, dự án cho phép Đơm Hoa thử nghiệm, điều chỉnh và nhân rộng một cách thận trọng, đúng với triết lý:",
  closingLine: "Mỗi hạt giống đều xứng đáng được đơm hoa.",
};

/* ---------------- Công cụ tự đánh giá ---------------- */

export const assessment = {
  title: "Kiểm tra nhanh mức độ phù hợp với các gói hỗ trợ của Đơm Hoa",
  intro:
    "Chỉ mất khoảng 2 phút để trả lời 5 câu hỏi. Kết quả mang tính tham khảo ban đầu và không thay thế buổi tư vấn riêng. Đơm Hoa không hỏi thông tin cá nhân và không lưu câu trả lời của bạn.",
  basics: {
    intro: "Cá nhân xem qua để biết mình đã phù hợp với chương trình chưa nhé.",
    required: [
      "Đã hoàn thành nghĩa vụ chấp hành án theo quy định, và có nhu cầu tạo việc làm, khởi nghiệp hoặc phát triển kinh tế gia đình. Nữ thanh thiếu niên được xem xét theo cơ chế hỗ trợ riêng, có người bảo hộ.",
      "Đủ 18 tuổi và có thể tự ký hợp đồng vay.",
      "Có nhu cầu vay vốn cụ thể, hợp pháp, phù hợp với khả năng của bản thân.",
      "Có nguồn thu nhập hiện tại, hoặc một phương án tạo thu nhập khả thi sau khi nhận vốn.",
    ],
    priority: [
      "Đang mang thai, nuôi con nhỏ dưới 36 tháng tuổi, là mẹ đơn thân hoặc người chăm sóc chính trong gia đình.",
      "Thu nhập thấp, thiếu vốn sản xuất, khó vay ở ngân hàng hay các nguồn tín dụng chính thức.",
      "Mong muốn đi làm, sẵn lòng tham gia tư vấn tài chính, học nghề hoặc hướng dẫn kinh doanh.",
      "Chưa có nguồn vốn phù hợp từ các tổ chức tài chính thông thường.",
    ],
  },
  quizIntro: "Mỗi câu chọn một đáp án gần nhất với hoàn cảnh hiện tại. Không có đáp án đúng hay sai.",
  // Points are internal: the page never shows them next to the answers.
  questions: [
    {
      id: "q1",
      title: "Hoàn cảnh hiện tại của bạn khó khăn đến mức nào?",
      options: [
        { label: "Rất khó khăn, thuộc nhóm ưu tiên đặc biệt", points: 25 },
        { label: "Khó khăn về thu nhập hoặc điều kiện gia đình", points: 18 },
        { label: "Có một số khó khăn tài chính", points: 10 },
        { label: "Ít khó khăn", points: 3 },
      ],
    },
    {
      id: "q2",
      title: "Bạn đã nghĩ đến cách dùng đồng vốn như thế nào?",
      options: [
        { label: "Kế hoạch rõ ràng, phù hợp kỹ năng và thị trường", points: 25 },
        { label: "Khả thi nhưng cần hướng dẫn thêm", points: 18 },
        { label: "Ý tưởng sơ bộ, cần đào tạo", points: 10 },
        { label: "Chưa có phương án cụ thể", points: 3 },
      ],
    },
    {
      id: "q3",
      title: "Khoản vay dự định được trả từ nguồn nào?",
      options: [
        { label: "Dòng tiền dự kiến đủ trả nợ và chi phí thiết yếu", points: 25 },
        { label: "Có khả năng trả nợ nếu điều chỉnh khoản vay", points: 18 },
        { label: "Thu nhập chưa ổn định, cần hỗ trợ thêm", points: 10 },
        { label: "Chưa xác định được nguồn trả nợ", points: 3 },
      ],
    },
    {
      id: "q4",
      title: "Việc vay vốn ở những nơi khác có thuận lợi không?",
      options: [
        { label: "Không tiếp cận được nguồn vốn phù hợp", points: 15 },
        { label: "Tiếp cận rất hạn chế", points: 11 },
        { label: "Có một số nguồn vốn phù hợp", points: 6 },
        { label: "Đã có nguồn tài chính đáp ứng nhu cầu", points: 2 },
      ],
    },
    {
      id: "q5",
      title: "Bạn có muốn tham gia chương trình đào tạo và tư vấn đi kèm không?",
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
      title: "Chúc mừng, hạt mầm đã sẵn sàng!",
      body: [
        "Dựa trên những chia sẻ vừa rồi, hồ sơ của bạn phù hợp với các gói hỗ trợ của Đơm Hoa. Kế hoạch đã có hình hài, và Đơm Hoa rất muốn đồng hành ở bước tiếp theo.",
        "Bạn có thể đặt lịch một buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo, để cùng chọn gói vay phù hợp nhất. Không cần mang theo gì cả, và có thể dừng lại bất cứ lúc nào.",
      ],
      actions: [{ label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" }],
    },
    {
      min: 50,
      range: "50 – 69 điểm",
      title: "Mầm đã nhú, mình cùng chăm thêm nhé",
      body: [
        "Bạn đã có nền tảng tốt để bắt đầu. Chỉ cần thêm một chút hướng dẫn về kế hoạch và cách điều chỉnh khoản vay, bước tiếp theo sẽ vững vàng hơn nhiều.",
        "Đơm Hoa sẽ cùng bạn đi qua buổi tập huấn đầu vào, sau đó trò chuyện với cán bộ tín dụng để chọn khoản vay nhỏ hoặc khóa học nghề phù hợp. Bạn không phải đi một mình.",
      ],
      actions: [
        { label: "Đăng ký tư vấn riêng", href: "/lien-he#dang-ky" },
        { label: "Tìm hiểu Gói học nghề", href: "/san-pham#goi-3" },
      ],
    },
    {
      min: 0,
      range: "Dưới 50 điểm",
      title: "Chưa phải lúc vay, nhưng Đơm Hoa vẫn ở đây",
      body: [
        "Ở thời điểm này, bạn có thể cần thêm thời gian để chuẩn bị cho kế hoạch của mình. Đây không phải lời từ chối. Mỗi hạt giống đều có nhịp nảy mầm riêng, và Đơm Hoa sẵn lòng chờ cùng bạn.",
        "Có thể bắt đầu bằng lớp giáo dục tài chính, buổi trò chuyện về chọn nghề, hoặc tiết kiệm mục tiêu. Sau khoảng 2–3 tháng, hai bên cùng xem lại để bước tiếp thật vững vàng.",
      ],
      actions: [
        { label: "Tham gia lớp giáo dục tài chính", href: "/san-pham#giao-duc-tai-chinh" },
        { label: "Đặt lịch xem lại sau", href: "/lien-he#dang-ky" },
      ],
    },
  ],
  resultNote:
    "Kết quả chỉ mang tính tham khảo ban đầu, không thay thế buổi tư vấn và thẩm định riêng. Đơm Hoa không lưu câu trả lời của bạn.",
  incomplete: "Bạn còn vài câu chưa được chọn. Cứ thong thả, trả lời đủ 5 câu để xem kết quả nhé.",
};

/* ---------------- Liên hệ ---------------- */

export const contact = {
  title: "Đơm Hoa luôn sẵn lòng lắng nghe",
  borrowers: {
    title: "Dành cho người muốn vay vốn hoặc học nghề",
    body: "Cuộc trò chuyện đầu tiên là buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo. Không cần mang theo gì cả, và có thể dừng lại bất cứ lúc nào.",
    cta: "Đăng ký tư vấn riêng",
  },
  partners: {
    title: "Dành cho nhà tài trợ, doanh nghiệp, đối tác",
    body: "Gửi email để nhận hồ sơ dự án, báo cáo kết quả và phương án hợp tác.",
    cta: "Gửi email cho Đơm Hoa",
  },
};

const mapQuery = encodeURIComponent("207 Giải Phóng, Bạch Mai, Hà Nội");
/** Google Maps for the office: an embeddable map and a link that opens the app or site. */
export const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`;
export const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export const projectEmailHref = `mailto:${"domhoa@gmail.com"}?subject=${encodeURIComponent(
  "Đề nghị nhận hồ sơ dự án Hạt mầm trong tay",
)}`;

/* ---------------- Chân trang ---------------- */

export const footer = {
  columns: [
    {
      title: "Về Đơm Hoa",
      links: [
        { href: "/gioi-thieu", label: "Giới thiệu" },
        { href: "/gioi-thieu#tam-nhin", label: "Tầm nhìn – Sứ mệnh" },
        { href: "/gioi-thieu#gia-tri", label: "Giá trị cốt lõi" },
        { href: "/gioi-thieu/cau-chuyen", label: "Câu chuyện khách hàng" },
      ],
    },
    {
      title: "Dịch vụ",
      links: [
        { href: "/san-pham#vay-von", label: "Sản phẩm vay vốn" },
        { href: "/san-pham#tiet-kiem", label: "Tiết kiệm tự nguyện" },
        { href: "/tu-danh-gia", label: "Công cụ tự đánh giá" },
        { href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" },
      ],
    },
    {
      title: "Dành cho đối tác",
      links: [
        { href: "/du-an", label: "Dự án “Hạt mầm trong tay”" },
        { href: "/du-an#dong-hanh", label: "Kêu gọi tài trợ" },
        { href: "/du-an#ho-so", label: "Hồ sơ dự án" },
        { href: "/lien-he#doi-tac", label: "Liên hệ hợp tác" },
      ],
    },
  ],
  commitments: [
    { title: "Kín đáo và an toàn.", body: "Thông tin cá nhân được bảo vệ theo quy định pháp luật và chỉ chia sẻ khi có sự đồng ý của người cung cấp." },
    { title: "Minh bạch.", body: "Lãi suất, lịch trả nợ và tổng nghĩa vụ luôn được giải thích rõ trước khi ký hợp đồng." },
  ],
};

/* ---------------- Ảnh (13 vị trí) ----------------
 * Khi có ảnh: đặt file vào public/photos/ rồi điền `file`, ví dụ file: "/photos/01-hero.jpg".
 * Ô nào chưa có file sẽ hiện khung chờ ghi rõ số ảnh và kích thước cần.
 * Không dùng ảnh lộ mặt học viên nếu chưa có đồng ý bằng văn bản.
 */
export type Photo = { file?: string; alt: string; want: string; size: string };

export const photos: Record<number, Photo> = {
  1: { file: "/photos/anh-01.jpg", alt: "Một người phụ nữ đứng ở ngưỡng cửa, nhìn ra thành phố trong nắng sớm", want: "Ảnh nền hero: đôi tay chăm mầm cây, nắng sớm (sẽ phủ lớp màu xanh)", size: "2400×1350 (16:9)" },
  2: { file: "/photos/anh-02.jpg", alt: "Buổi tư vấn riêng với cán bộ tín dụng Đơm Hoa", want: "Buổi tư vấn, chụp từ sau lưng", size: "1200×1500 (4:5)" },
  3: { file: "/photos/anh-03.jpg", alt: "Lớp quản lý tài chính cá nhân của Đơm Hoa", want: "Lớp học hoặc xưởng, toàn cảnh", size: "2400×1200 (2:1)" },
  4: { file: "/photos/anh-04.jpg", alt: "Quầy nước nhỏ trên vỉa hè", want: "Câu chuyện chị P: quán nước", size: "1200×1500 (4:5)" },
  5: { file: "/photos/anh-05.jpg", alt: "Đóng gói đơn hàng bán online", want: "Câu chuyện chị H: bán hàng online", size: "1200×1500 (4:5)" },
  6: { file: "/photos/anh-06.jpg", alt: "Xưởng may gia công", want: "Câu chuyện chị H: may gia công", size: "1200×1500 (4:5)" },
  7: { file: "/photos/anh-07.jpg", alt: "Tủ bánh trên phố buổi tối", want: "Câu chuyện chị X: tiệm bánh", size: "1200×1500 (4:5)" },
  8: { file: "/photos/anh-08.jpg", alt: "Đan macramé thủ công", want: "Câu chuyện chị N: đồ thủ công", size: "1200×1500 (4:5)" },
  9: { file: "/photos/anh-09.jpg", alt: "Buổi sinh hoạt nhóm quanh bàn trà", want: "Văn phòng hoặc sinh hoạt nhóm", size: "2400×1000 (12:5)" },
  10: { file: "/photos/anh-10.jpg", alt: "Đội ngũ Đơm Hoa trong buổi họp", want: "Ảnh tập thể đội ngũ", size: "1600×1000 (16:10)" },
  11: { file: "/photos/anh-11.jpg", alt: "Ghi chép thu chi bên hũ tiết kiệm và mầm cây", want: "Sổ thu chi, tiết kiệm", size: "2400×1000 (12:5)" },
  12: { file: "/photos/anh-12.jpg", alt: "Lớp giáo dục tài chính và khởi nghiệp của Đơm Hoa", want: "Lớp giáo dục tài chính", size: "1600×1200 (4:3)" },
  13: { file: "/photos/anh-13.jpg", alt: "Khóa đào tạo may gia công của dự án Hạt mầm trong tay", want: "Lớp may gia công", size: "2400×1200 (2:1)" },
};

/** Photo number used by each customer story, in the order of `stories`. */
export const storyPhotos = [4, 5, 6, 7, 8];
