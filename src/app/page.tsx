import Link from "next/link";
import { ArrowUpRight, Brain, HandHeart, LockKey, Storefront, Student, UserCircleCheck } from "@phosphor-icons/react/dist/ssr";
import { HeroBlossom } from "@/components/hero-blossom";
import { CtaBand, Orbs, Photo } from "@/components/blocks";
import { Journey } from "@/components/journey";
import { LinkButton } from "@/components/ui";
import { about, fiveYearGoals, home, loanPackages, org, stories, storyPhotos } from "@/content/site";

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

// Each package card carries a soft wash in one of the logo colours.
const packageWash = [
  "from-petal-yellow/70 via-pollen-tint to-paper",
  "from-[#cfe0c4] via-sprout to-paper",
  "from-[#ffd2ad] via-[#fff1e4] to-paper",
  "from-blossom-tint via-[#fdf3f3] to-paper",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3" aria-labelledby="hero-title">
        <div className="on-dark relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep text-on-dark">
          <Photo n={1} tone="dark" parallax={0.08} priority sizes="100vw" className="absolute inset-0 -z-20" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(31,45,27,0.96)_0%,rgba(31,45,27,0.86)_45%,rgba(31,45,27,0.55)_100%)]" />
          <Orbs variant="dark" />
          <div className="container-site relative grid items-center gap-12 pb-14 pt-16 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-24">
            <div>
              <h1 id="hero-title" className="text-[44px] font-bold leading-[1.06] tracking-[-0.04em] text-on-dark sm:text-[60px] lg:text-[76px]">
                {home.quote}
              </h1>
              <p className="mt-7 max-w-[36rem] text-lg text-on-dark-muted md:text-xl">{home.lead}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton href="/lien-he#dang-ky" variant="blossom">
                  Đăng ký tư vấn
                </LinkButton>
                <LinkButton href="/san-pham/tai-chinh" variant="outline-light">
                  Tìm hiểu sản phẩm
                </LinkButton>
              </div>
              <ul className="mt-14 grid gap-3 text-[15px] text-on-dark sm:grid-cols-3">
                {[
                  { icon: HandHeart, text: "Không cần tài sản thế chấp" },
                  { icon: UserCircleCheck, text: "Tư vấn riêng với cán bộ nữ" },
                  { icon: LockKey, text: "Thông tin riêng tư được giữ kín" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="glass-dark flex items-center gap-2.5 rounded-2xl px-4 py-3">
                    <Icon size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <HeroBlossom treatment="aura" auraStrength={0.5} />
          </div>
        </div>
      </section>

      {/* Intro: photo + editorial statement */}
      <section className="container-site mt-28" aria-labelledby="intro-title">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div data-reveal="left" className="relative">
            <Photo n={2} parallax={0.06} className="aspect-[4/5] rounded-[var(--radius-panel)]" />
            <p className="glass absolute -bottom-6 right-4 max-w-[260px] rounded-2xl p-4 text-[15px] font-semibold text-moss-ink sm:-right-8">
              <LockKey size={20} className="mb-1 text-moss" aria-hidden="true" />
              Mọi thông tin riêng tư của chị đều được giữ kín.
            </p>
          </div>
          <div data-reveal>
            <h2 id="intro-title" className="text-[36px] font-bold leading-[1.1] tracking-[-0.035em] text-moss-ink md:text-[56px]">
              Một cơ hội để bắt đầu lại
            </h2>
            <p className="mt-8 text-[20px] font-light leading-[1.7] text-ink md:text-[22px]">{home.intro}</p>
            <Link href="/gioi-thieu" className="group mt-10 inline-flex items-center gap-2 font-semibold text-moss">
              <span className="border-b border-moss/30 pb-0.5 transition-colors group-hover:border-blossom-deep group-hover:text-blossom-deep">Về Đơm Hoa</span>
              <ArrowUpRight size={16} weight="bold" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container-site mt-32" aria-labelledby="journey-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start" data-reveal>
            <h2 id="journey-title" className="shout text-[38px] text-moss-ink md:text-[56px]">
              Bốn chặng đồng hành
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-muted">{about.valuesIntro}</p>
          </div>
          <Journey />
        </div>
      </section>

      {/* Five-year goals */}
      <section className="relative isolate mt-32 overflow-hidden bg-petal-yellow py-24" aria-labelledby="goals-title">
        <Orbs variant="warm" />
        <div className="container-site relative">
          <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="goals-title" className="shout max-w-3xl text-[38px] text-moss-ink md:text-[60px]">
              Mục tiêu 5 năm
            </h2>
            <p className="tabular text-[22px] font-bold text-moss md:text-[28px]">2027 – 2031</p>
          </div>
          <dl data-reveal-group="110" className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {fiveYearGoals.map((g) => (
              <div key={g.label} data-reveal className="flex flex-col border-t-2 border-moss-ink pt-6">
                <dt className="order-2 mt-4 text-[17px] text-moss-ink">
                  <span className="font-bold">{g.unit}</span> {g.label}
                </dt>
                <dd className="order-1 tabular text-[68px] font-extrabold leading-none tracking-[-0.04em] text-petal-red md:text-[84px]">
                  <span data-count={g.value.replace(/\./g, "")}>{g.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Financial products */}
      <section className="container-site mt-32" aria-labelledby="finance-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start" data-reveal>
            <h2 id="finance-title" className="shout text-[36px] text-moss-ink md:text-[48px]">
              Sản phẩm tài chính
            </h2>
            <p className="mt-5 text-lg text-ink-muted">
              Bốn gói vay và hai sản phẩm tiết kiệm tự nguyện. Lãi tính trên dư nợ giảm dần, lịch trả nợ được giải thích rõ trước khi ký.
            </p>
            <LinkButton href="/san-pham/tai-chinh" variant="primary" className="mt-8">
              Xem sản phẩm tài chính
            </LinkButton>
          </div>
          <ul data-reveal-group="100" className="grid gap-6 sm:grid-cols-2">
            {loanPackages.map((p, i) => (
              <li key={p.id} data-reveal>
                <Link href={`/san-pham/tai-chinh#${p.id}`} className="card-lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper shadow-soft ring-1 ring-sprout-line">
                  <div className={`relative h-28 bg-gradient-to-br ${packageWash[i]}`}>
                    <span aria-hidden="true" className="step-ghost tabular absolute -bottom-6 right-3 text-[96px] font-extrabold leading-none tracking-tighter">
                      {String(p.number).padStart(2, "0")}
                    </span>
                    <p className="absolute left-7 top-6 text-[15px] font-bold text-moss-ink">
                      Gói {p.number}
                      {p.name ? `: ${p.name}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-5">
                    <h3 className="text-[22px] font-bold tracking-[-0.02em] text-moss-ink">{p.title}</h3>
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
                      Xem chi tiết
                      <ArrowUpRight size={14} weight="bold" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community products */}
      <section className="container-site mt-28" aria-labelledby="community-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <div data-reveal>
            <h2 id="community-title" className="shout text-[36px] text-moss-ink md:text-[48px]">
              Sản phẩm cộng đồng
            </h2>
            <p className="mt-5 text-lg text-ink-muted">Vốn, kiến thức và sự hỗ trợ tinh thần luôn đi cùng nhau. Không ai đơn độc.</p>
            <LinkButton href="/san-pham/cong-dong" variant="primary" className="mt-8">
              Xem sản phẩm cộng đồng
            </LinkButton>
          </div>
          <ul data-reveal-group="100" className="grid gap-6 md:grid-cols-3">
            {community.map(({ href, icon: Icon, title, body }) => (
              <li key={href} data-reveal>
                <Link href={href} className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-sprout p-7">
                  <span className="glass grid size-14 place-items-center rounded-2xl text-moss">
                    <Icon size={28} weight="duotone" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[20px] font-bold tracking-[-0.02em] text-moss-ink">{title}</h3>
                  <p className="mt-2 text-[15px] text-ink-muted">{body}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-moss group-hover:text-blossom-deep">
                    Tìm hiểu
                    <ArrowUpRight size={14} weight="bold" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Where to start */}
      <section className="mt-32" aria-labelledby="start-title">
        <div className="on-dark slant-top relative isolate overflow-hidden bg-moss-deep text-on-dark">
          <Photo n={3} tone="dark" parallax={0.1} sizes="100vw" className="absolute inset-0 -z-20" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(31,45,27,0.95)_0%,rgba(31,45,27,0.8)_55%,rgba(31,45,27,0.6)_100%)]" />
          <div className="container-site relative grid gap-12 pb-24 pt-32 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <h2 id="start-title" data-reveal className="shout text-[44px] text-on-dark md:text-[68px]">
              Bắt đầu <span className="text-petal-yellow">từ đâu?</span>
            </h2>
            <div data-reveal-group="140" className="grid gap-6 sm:grid-cols-2">
              <div data-reveal className="glass-dark flex flex-col rounded-[var(--radius-card)] p-7">
                <h3 className="shout text-[24px] text-on-dark">Chị cần hỗ trợ</h3>
                <ul className="mt-4 space-y-2 text-on-dark-muted">
                  <li>Tư vấn riêng với cán bộ tín dụng nữ</li>
                  <li>Tự đánh giá mức độ phù hợp trong 2 phút</li>
                  <li>Học nghề có việc làm chờ sẵn</li>
                </ul>
                <div className="mt-auto pt-8">
                  <LinkButton href="/tu-danh-gia" variant="blossom">
                    Làm bài tự đánh giá
                  </LinkButton>
                </div>
              </div>
              <div data-reveal className="glass-dark flex flex-col rounded-[var(--radius-card)] p-7">
                <h3 className="shout text-[24px] text-on-dark">Bạn muốn đồng hành</h3>
                <ul className="mt-4 space-y-2 text-on-dark-muted">
                  <li>Tài trợ dự án “Hạt mầm trong tay”</li>
                  <li>Nhận học viên vào làm sau đào tạo</li>
                  <li>Doanh nghiệp xã hội: gói Chung Vườn</li>
                </ul>
                <div className="mt-auto pt-8">
                  <Link href="/du-an" data-magnetic className="btn-sweep inline-flex min-h-12 items-center justify-center rounded-full bg-petal-yellow px-6 text-[15px] font-semibold text-moss-ink hover:bg-[#fff7c4]">
                    Xem dự án
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="relative mt-28 pb-4" aria-labelledby="stories-title">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[320px] bg-petal-yellow [clip-path:polygon(0_0,62%_0,52%_100%,0_100%)]" />
        <div className="container-site relative pt-14">
          <div className="flex flex-wrap items-end justify-between gap-6" data-reveal>
            <h2 id="stories-title" className="shout max-w-md text-[38px] text-moss-ink md:text-[56px]">
              Những mùa hoa đầu tiên
            </h2>
            <Link href="/gioi-thieu/cau-chuyen" className="group inline-flex items-center gap-2 font-semibold text-moss">
              <span className="border-b border-moss/30 pb-0.5 group-hover:border-blossom-deep group-hover:text-blossom-deep">Đọc tất cả câu chuyện</span>
              <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
          <ul data-reveal-group="120" className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.slice(0, 3).map((s, i) => (
              <li key={`${s.who}-${s.role}`} data-reveal>
                <Link href="/gioi-thieu/cau-chuyen" className="card-lift group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-paper shadow-soft ring-1 ring-sprout-line">
                  <Photo n={storyPhotos[i]} className="aspect-[4/5]" sizes="(min-width: 768px) 33vw, 100vw" />
                  <figure className="flex flex-1 flex-col p-7">
                    <blockquote className="text-[19px] font-medium leading-relaxed tracking-[-0.01em] text-moss-ink">“{s.excerpt}”</blockquote>
                    <figcaption className="mt-auto flex items-center gap-3 pt-6 text-[15px]">
                      <span aria-hidden="true" className="size-2.5 rotate-45 bg-petal-red" />
                      <span className="font-bold text-moss-ink">{s.who}</span>
                      <span className="text-ink-muted">{s.role}</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`“${org.philosophy}”`}
        body="Dù chị đang cần một khởi đầu mới hay bạn muốn trao cơ hội cho người khác, Đơm Hoa luôn sẵn lòng lắng nghe."
        primary={{ href: "/lien-he", label: "Liên hệ ngay" }}
        secondary={{ href: "/tu-danh-gia", label: "Làm bài tự đánh giá" }}
      />
    </>
  );
}
