import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  HandHeart,
  LockKey,
  Storefront,
  Student,
  UserCircleCheck,
} from "@phosphor-icons/react/dist/ssr";
import { HeroBlossom } from "@/components/hero-blossom";
import { CtaBand, PhotoSlot } from "@/components/blocks";
import { StageGlyph } from "@/components/petals";
import { LinkButton } from "@/components/ui";
import { fiveYearGoals, home, loanPackages, org, stories, values } from "@/content/site";

const community = [
  {
    href: "/san-pham/cong-dong#tham-van",
    icon: Brain,
    title: "Tham vấn và hỗ trợ tâm lý",
    body: "Giảm mặc cảm, lo âu khi trở về cộng đồng. Tự nguyện, miễn phí, không ảnh hưởng đến việc xét vay.",
  },
  {
    href: "/san-pham/cong-dong#giao-duc-tai-chinh",
    icon: Student,
    title: "Chồi Xanh: Giáo dục tài chính và khởi nghiệp",
    body: "Quản lý chi tiêu, hiểu vay trả, lập kế hoạch kinh doanh nhỏ. Dành cho cả người vay và không vay.",
  },
  {
    href: "/san-pham/cong-dong#cua-hang-xa-hoi",
    icon: Storefront,
    title: "Cửa hàng xã hội thực hành",
    body: "1–3 tháng thực hành bán hàng, thu ngân, quản lý kho và bán online để có kinh nghiệm làm việc thật.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3" aria-labelledby="hero-title">
        <div className="on-dark relative mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-panel)] bg-[radial-gradient(90%_80%_at_85%_20%,#3f5a39_0%,#2a3c25_45%,#1f2d1b_100%)] text-on-dark">
          <div className="container-site grid items-center gap-12 pb-12 pt-14 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-20">
            <div>
              <h1 id="hero-title" className="text-[42px] font-bold text-on-dark sm:text-[56px] lg:text-[66px]">
                {home.quote}
              </h1>
              <p className="mt-6 max-w-[36rem] text-lg text-on-dark-muted md:text-xl">{home.lead}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkButton href="/lien-he#dang-ky" variant="blossom">
                  Đăng ký tư vấn
                </LinkButton>
                <LinkButton href="/san-pham/tai-chinh" variant="outline-light">
                  Tìm hiểu sản phẩm
                </LinkButton>
              </div>
              <ul className="mt-12 grid gap-4 text-[15px] text-on-dark-muted sm:grid-cols-3">
                <li className="flex items-center gap-2.5">
                  <HandHeart size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Không cần tài sản thế chấp
                </li>
                <li className="flex items-center gap-2.5">
                  <UserCircleCheck size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Tư vấn riêng với cán bộ nữ
                </li>
                <li className="flex items-center gap-2.5">
                  <LockKey size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Thông tin riêng tư được giữ kín
                </li>
              </ul>
            </div>
            <HeroBlossom treatment="aura" auraStrength={0.5} />
          </div>
        </div>
      </section>

      {/* Short introduction + the four stages */}
      <section className="container-site mt-24" aria-labelledby="intro-title">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <h2 id="intro-title" className="text-[32px] text-moss-ink md:text-[44px]">
              Một cơ hội để bắt đầu lại
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-ink-muted">{home.intro}</p>
            <Link href="/gioi-thieu" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-moss hover:text-blossom-deep">
              Về Đơm Hoa <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold tracking-normal text-ink-muted">Bốn chặng đồng hành</h3>
            <ol className="mt-4 divide-y divide-sprout-line border-y border-sprout-line">
              {values.map((v) => (
                <li key={v.key} className="flex items-center gap-5 py-5">
                  <StageGlyph stage={v.key} className="size-12 shrink-0" />
                  <p className="text-[22px] font-bold tracking-tight text-moss-ink">
                    {v.stage} <span className="font-medium text-ink-muted">– {v.value}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Five-year goals: a bold band in the logo's yellow */}
      <section className="mt-24 bg-petal-yellow py-20" aria-labelledby="goals-title">
        <div className="container-site">
          <h2 id="goals-title" className="shout max-w-3xl text-[34px] text-moss-ink md:text-[52px]">
            Mục tiêu 5 năm
            <span className="block text-[20px] font-bold normal-case tracking-normal text-moss md:text-[24px]">2027 – 2031</span>
          </h2>
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {fiveYearGoals.map((g) => (
              <div key={g.label} className="flex flex-col border-t-2 border-moss-ink pt-5">
                <dt className="order-2 mt-3 text-[17px] text-moss-ink">
                  <span className="font-bold">{g.unit}</span> {g.label}
                </dt>
                <dd className="order-1 tabular text-[64px] font-extrabold leading-none tracking-tight text-petal-red md:text-[76px]">
                  {g.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Financial products: heading left, cards right */}
      <section className="container-site mt-24" aria-labelledby="finance-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 id="finance-title" className="shout text-[34px] text-moss-ink md:text-[44px]">
              Sản phẩm tài chính
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Bốn gói vay và hai sản phẩm tiết kiệm tự nguyện. Lãi tính trên dư nợ giảm dần, lịch trả nợ được giải thích rõ trước khi ký.
            </p>
            <LinkButton href="/san-pham/tai-chinh" variant="primary" className="mt-6">
              Xem sản phẩm tài chính
            </LinkButton>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {loanPackages.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/san-pham/tai-chinh#${p.id}`}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(27,38,23,0.45)]"
                >
                  <p className="text-[15px] font-semibold text-blossom-deep">
                    Gói {p.number}
                    {p.name ? `: ${p.name}` : ""}
                  </p>
                  <h3 className="mt-2 text-[22px] text-moss-ink">{p.title}</h3>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-sprout-line pt-5">
                    <div>
                      <dt className="text-sm text-ink-muted">Hạn mức</dt>
                      <dd className="tabular mt-1 text-lg font-bold text-moss-ink">{p.highlight.amount}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-muted">Lãi suất</dt>
                      <dd className="tabular mt-1 whitespace-nowrap text-lg font-bold text-moss-ink">{p.highlight.rate}</dd>
                    </div>
                  </dl>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-moss group-hover:text-blossom-deep">
                    Xem chi tiết <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community products */}
      <section className="container-site mt-24" aria-labelledby="community-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-14">
          <div>
            <h2 id="community-title" className="shout text-[34px] text-moss-ink md:text-[44px]">
              Sản phẩm cộng đồng
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Vốn, kiến thức và sự hỗ trợ tinh thần luôn đi cùng nhau. Không ai đơn độc.
            </p>
            <LinkButton href="/san-pham/cong-dong" variant="primary" className="mt-6">
              Xem sản phẩm cộng đồng
            </LinkButton>
          </div>
          <ul className="grid gap-5 md:grid-cols-3">
            {community.map(({ href, icon: Icon, title, body }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] bg-sprout p-7 transition-colors duration-300 hover:bg-[#dde6d5]"
                >
                  <Icon size={30} className="text-moss" aria-hidden="true" />
                  <h3 className="mt-5 text-[20px] text-moss-ink">{title}</h3>
                  <p className="mt-2 text-[15px] text-ink-muted">{body}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-moss group-hover:text-blossom-deep">
                    Tìm hiểu <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where to start: the reference layout's dark "how can you help" band */}
      <section className="mt-28" aria-labelledby="start-title">
        <div className="on-dark slant-top relative overflow-hidden bg-moss-deep text-on-dark">
          <PhotoSlot want="ảnh nền: lớp học hoặc buổi tư vấn, chụp từ phía sau" tone="dark" className="absolute inset-0 opacity-60" />
          <div className="container-site relative grid gap-12 pb-20 pt-28 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="start-title" className="shout text-[40px] text-on-dark md:text-[60px]">
              Bắt đầu <span className="text-petal-yellow">từ đâu?</span>
            </h2>
            <div className="grid gap-12 sm:grid-cols-2">
              <div>
                <h3 className="shout text-[26px] text-on-dark">Chị cần hỗ trợ</h3>
                <ul className="mt-4 space-y-2 text-on-dark-muted">
                  <li>Tư vấn riêng với cán bộ tín dụng nữ</li>
                  <li>Tự đánh giá mức độ phù hợp trong 2 phút</li>
                  <li>Học nghề có việc làm chờ sẵn</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href="/tu-danh-gia" variant="blossom">
                    Làm bài tự đánh giá
                  </LinkButton>
                </div>
              </div>
              <div>
                <h3 className="shout text-[26px] text-on-dark">Bạn muốn đồng hành</h3>
                <ul className="mt-4 space-y-2 text-on-dark-muted">
                  <li>Tài trợ dự án “Hạt mầm trong tay”</li>
                  <li>Nhận học viên vào làm sau đào tạo</li>
                  <li>Doanh nghiệp xã hội: gói Chung Vườn</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/du-an" className="inline-flex min-h-12 items-center justify-center rounded-full bg-petal-yellow px-6 text-[15px] font-semibold text-moss-ink transition-colors duration-200 hover:bg-[#fff7c4]">
                    Xem dự án
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="relative mt-24 pb-4" aria-labelledby="stories-title">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[300px] bg-petal-yellow [clip-path:polygon(0_0,62%_0,52%_100%,0_100%)]" />
        <div className="container-site relative pt-12">
          <h2 id="stories-title" className="shout max-w-md text-[34px] text-moss-ink md:text-[48px]">
            Những mùa hoa đầu tiên
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {stories.slice(0, 3).map((s, i) => (
              <li key={`${s.who}-${s.role}`} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
                <PhotoSlot want={`câu chuyện ${s.who}`} tone={i % 2 ? "light" : "blossom"} className="aspect-[4/3]" />
                <figure className="flex flex-1 flex-col p-6">
                  <blockquote className="text-[18px] leading-relaxed text-moss-ink">“{s.excerpt}”</blockquote>
                  <figcaption className="mt-auto pt-5 text-[15px] font-semibold text-ink-muted">
                    {s.who}, {s.role.toLowerCase()}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <Link href="/gioi-thieu/cau-chuyen" className="mt-8 inline-flex items-center gap-1.5 font-semibold text-moss hover:text-blossom-deep">
            Đọc thêm câu chuyện <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand
        title={`“${org.philosophy}”`}
        body="Dù chị đang cần một khởi đầu mới hay bạn muốn trao cơ hội cho người khác, Đơm Hoa luôn sẵn lòng lắng nghe."
        primary={{ href: "/lien-he", label: "Liên hệ ngay" }}
      />
    </>
  );
}
