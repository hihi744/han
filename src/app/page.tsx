import Link from "next/link";
import {
  ArrowUpRight,
  EyeSlash,
  GraduationCap,
  HandCoins,
  Handshake,
  LockKey,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { HeroBlossom } from "@/components/hero-blossom";
import { LoanCalculator } from "@/components/loan-calculator";
import { StoryRail } from "@/components/story-rail";
import { CtaBand, Faq, PhotoSlot } from "@/components/blocks";
import { StageGlyph } from "@/components/petals";
import { LinkButton, Pill, SectionHeading, Tbc } from "@/components/ui";
import { faqs, journey, privacyPromises } from "@/content/site";

const promiseIcons = [EyeSlash, LockKey, ShieldCheck, UsersThree];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-3 pt-3" aria-labelledby="hero-title">
        <div className="on-dark relative mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-panel)] bg-[radial-gradient(90%_80%_at_85%_20%,#3f5a39_0%,#2a3c25_45%,#1f2d1b_100%)] text-on-dark">
          <div className="container-site grid items-center gap-12 pb-12 pt-14 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-20">
            <div>
              <h1 id="hero-title" className="text-[42px] font-semibold text-on-dark sm:text-[56px] lg:text-[66px]">
                Mỗi hạt giống đều xứng đáng được đơm hoa.
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg text-on-dark-muted md:text-xl">
                Đơm Hoa cho vay vốn nhỏ, dạy nghề và đồng hành cùng phụ nữ đang bắt đầu lại sau thời gian chấp hành án. Thủ tục đơn giản, không cần thế chấp, thông tin của bạn được giữ kín.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkButton href="/dang-ky" variant="blossom">
                  Đăng ký tư vấn vay
                </LinkButton>
                <LinkButton href="#tinh-thu" variant="outline-light">
                  Tính thử khoản vay
                </LinkButton>
              </div>
              <ul className="mt-12 grid gap-4 text-[15px] text-on-dark-muted sm:grid-cols-3">
                <li className="flex items-center gap-2.5">
                  <HandCoins size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Vay từ 5 triệu đồng
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Trả trước hạn không phạt
                </li>
                <li className="flex items-center gap-2.5">
                  <LockKey size={22} className="shrink-0 text-blossom" aria-hidden="true" />
                  Không công khai quá khứ
                </li>
              </ul>
            </div>
            <HeroBlossom treatment="aura" />
          </div>
        </div>
      </section>

      {/* Three ways we help */}
      <section className="container-site mt-28" aria-labelledby="pillars-title">
        <SectionHeading
          id="pillars-title"
          title="Vốn, kiến thức và người đồng hành, đi cùng nhau."
          intro="Chỉ cho vay thôi là chưa đủ. Mỗi khoản vay ở Đơm Hoa đi kèm lớp học, cơ hội việc làm và một người theo sát bạn."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.45fr]">
          <Link href="/hanh-trinh#uom" className="group on-dark relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] text-on-dark">
            <PhotoSlot want="lớp học nhỏ, chụp tay đang làm" className="absolute inset-0" tone="dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/90 via-moss-ink/30 to-transparent" aria-hidden="true" />
            <div className="relative p-7 sm:p-9">
              <GraduationCap size={28} className="text-blossom" aria-hidden="true" />
              <h3 className="mt-4 text-[28px] text-on-dark">Học viện Đơm Hoa</h3>
              <p className="mt-2 max-w-sm text-on-dark-muted">
                Quản lý tiền, khởi nghiệp nhỏ, kỹ năng đi làm và học nghề theo nhu cầu tuyển dụng.
              </p>
            </div>
            <span aria-hidden="true" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-blossom text-moss-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={18} weight="bold" />
            </span>
          </Link>

          <Link href="/san-pham" className="group on-dark relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] text-on-dark">
            <PhotoSlot want="quầy hàng nhỏ, không lộ mặt" className="absolute inset-0" tone="dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-moss-ink/90 via-moss-ink/25 to-transparent" aria-hidden="true" />
            <div className="absolute left-6 top-14 w-[230px] rounded-2xl bg-paper p-4 text-ink shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:left-9 sm:top-9 sm:w-[260px]" aria-hidden="true">
              <p className="flex items-center gap-2 text-[14px] font-medium text-moss">
                <ShieldCheck size={18} weight="fill" /> Hồ sơ đã duyệt
              </p>
              <p className="font-display tabular mt-2 text-[24px] font-semibold tracking-tight">8.000.000 đ</p>
              <div className="mt-3 flex justify-between border-t border-sprout-line pt-2 text-[13px] text-ink-muted">
                <span>Vòng 1</span>
                <span>12 tháng</span>
              </div>
            </div>
            <div className="relative p-7 sm:p-9">
              <h3 className="text-[28px] text-on-dark md:text-[34px]">Khoản vay ReStart</h3>
              <p className="mt-2 max-w-md text-on-dark-muted">
                Khoản vay đầu tiên từ 5 đến 10 triệu đồng, xét theo khả năng trả thực tế. Trả tốt thì vòng sau được vay đến 30 triệu.
              </p>
            </div>
            <span aria-hidden="true" className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-blossom text-moss-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={18} weight="bold" />
            </span>
          </Link>
        </div>

        <Link href="/doi-tac" className="group mt-5 flex flex-col gap-6 rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(27,38,23,0.4)] sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-start gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-blossom-tint text-blossom-deep">
              <Handshake size={24} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-[22px] text-moss-ink">Học nghề có việc làm chờ sẵn</h3>
              <p className="mt-1 max-w-2xl text-ink-muted">
                Lớp may gia công hai tháng, xưởng đối tác cam kết nhận tối thiểu 2/3 học viên đạt sát hạch vào làm, có hợp đồng và bảo hiểm.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-semibold text-moss group-hover:text-blossom-deep">
            Tìm hiểu dự án <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </span>
        </Link>
      </section>

      {/* Journey */}
      <section className="container-site mt-28" aria-labelledby="journey-title">
        <SectionHeading
          id="journey-title"
          title="Từ hạt mầm đến ngày nở rộ"
          intro="Hành trình ở Đơm Hoa đi qua bốn chặng. Bạn bắt đầu ở chặng phù hợp với mình, không ai bị bỏ lại."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, i) => (
            <li key={step.key} className="flex flex-col rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line">
              <div className="flex items-center justify-between">
                <StageGlyph stage={step.key} className="size-14" />
                <span className="tabular text-sm font-medium text-ink-muted">Chặng {i + 1}</span>
              </div>
              <h3 className="mt-8 text-[30px] text-moss-ink">{step.stage}</h3>
              <p className="font-medium text-blossom-deep">{step.value}</p>
              <p className="mt-4 text-[15px] text-ink-muted">{step.summary}</p>
              <Link href={`/hanh-trinh#${step.key}`} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[15px] font-semibold text-moss hover:text-blossom-deep">
                {step.product}
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Calculator */}
      <section id="tinh-thu" className="container-site mt-28 scroll-mt-28" aria-labelledby="calc-title">
        <SectionHeading
          id="calc-title"
          title="Biết trước mình sẽ trả bao nhiêu"
          intro="Kéo để chọn số tiền. Bạn sẽ thấy ngay số tiền trả mỗi tháng và tổng chi phí, bằng con số cụ thể."
        />
        <div className="mt-12">
          <LoanCalculator />
        </div>
      </section>

      {/* Numbers we commit to */}
      <section className="container-site mt-28" aria-labelledby="numbers-title">
        <SectionHeading id="numbers-title" title="Những con số chúng tôi cam kết" />
        <dl className="mt-14 grid gap-12 text-center md:grid-cols-3 md:gap-8">
          <div className="flex flex-col items-center">
            <dt className="order-1"><Pill tone="pollen">Phí hồ sơ</Pill></dt>
            <dd className="order-2 font-display tabular mt-6 text-[64px] font-medium leading-none tracking-tight text-moss-ink md:text-[80px]">0 đ</dd>
            <dd className="order-3 mt-5 max-w-[17rem] text-ink-muted">
              <Tbc>Không thu phí để được vay.</Tbc>
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <dt className="order-1"><Pill tone="sprout">Mức trả nợ an toàn</Pill></dt>
            <dd className="order-2 font-display tabular mt-6 text-[64px] font-medium leading-none tracking-tight text-moss-ink md:text-[80px]">≤ 50%</dd>
            <dd className="order-3 mt-5 max-w-[17rem] text-ink-muted">
              Khoản trả mỗi tháng không vượt quá một nửa số tiền bạn còn lại sau chi tiêu gia đình.
            </dd>
          </div>
          <div className="flex flex-col items-center">
            <dt className="order-1"><Pill tone="blossom">Việc làm sau học nghề</Pill></dt>
            <dd className="order-2 font-display tabular mt-6 text-[64px] font-medium leading-none tracking-tight text-moss-ink md:text-[80px]">2/3</dd>
            <dd className="order-3 mt-5 max-w-[17rem] text-ink-muted">
              Số học viên đạt sát hạch tối thiểu được xưởng đối tác nhận vào làm.
            </dd>
          </div>
        </dl>
      </section>

      {/* Privacy */}
      <section className="container-site mt-28" aria-labelledby="privacy-title">
        <div className="grid gap-10 rounded-[var(--radius-panel)] bg-sprout p-7 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 id="privacy-title" className="text-[32px] text-moss-ink md:text-[44px]">
              Câu chuyện của bạn là của riêng bạn
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Chúng tôi nhìn bạn bằng con người hiện tại. Những gì bạn chia sẻ chỉ dùng để giúp bạn, và được giữ kín.
            </p>
            <Link href="/bao-mat" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-moss hover:text-blossom-deep">
              Đọc cam kết bảo mật <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {privacyPromises.map((p, i) => {
              const Icon = promiseIcons[i];
              return (
                <li key={p.title}>
                  <Icon size={26} className="text-moss" aria-hidden="true" />
                  <h3 className="mt-3 text-[19px] text-moss-ink">{p.title}</h3>
                  <p className="mt-1.5 text-[15px] text-ink-muted">{p.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Stories */}
      <section className="mt-28" aria-labelledby="stories-title">
        <StoryRail />
      </section>

      {/* For partners */}
      <section className="container-site mt-24" aria-labelledby="partner-title">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-paper ring-1 ring-sprout-line md:grid-cols-2">
          <PhotoSlot want="xưởng may đối tác" tone="blossom" className="min-h-[260px]" />
          <div className="p-7 sm:p-12">
            <p className="text-[15px] font-medium text-blossom-deep">Dành cho doanh nghiệp và nhà tài trợ</p>
            <h2 id="partner-title" className="mt-3 text-[30px] text-moss-ink md:text-[40px]">
              6 triệu đồng giúp một người học nghề đến khi có việc làm.
            </h2>
            <p className="mt-4 text-ink-muted">
              Dự án “Trao cần câu, không trao con cá” đào tạo nghề gắn với đầu ra cam kết trước. Bạn có thể tài trợ một học viên, cả một lớp, hoặc nhận học viên vào làm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/doi-tac" variant="primary">
                Xem gói tài trợ
              </LinkButton>
              <LinkButton href="/doi-tac#lien-he-doi-tac" variant="ghost">
                Liên hệ hợp tác
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-site mt-28" aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <h2 id="faq-title" className="text-[32px] text-moss-ink md:text-[44px]">
              Bạn đang băn khoăn?
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Những câu hỏi chị em hay hỏi nhất. Nếu chưa thấy câu trả lời, cứ để lại số điện thoại, cán bộ sẽ gọi lại.
            </p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Bắt đầu từ một cuộc gọi."
        body="Để lại tên và số điện thoại. Cán bộ Đơm Hoa sẽ gọi lại vào giờ bạn chọn, lắng nghe và cùng bạn tính xem bước đầu tiên nên là gì."
        primary={{ href: "/dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/san-pham", label: "Xem chi tiết khoản vay" }}
      />
    </>
  );
}
