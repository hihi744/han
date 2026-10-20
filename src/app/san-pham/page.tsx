import type { Metadata } from "next";
import { Brain, Calculator, Storefront, Student } from "@phosphor-icons/react/dist/ssr";
import { CheckList, CtaBand, InfoTable, Orbs, PageIntro, Photo } from "@/components/blocks";
import { BlockView, DataTable, SectionQuote, TermsGrid } from "@/components/content-blocks";
import { LoanCalculator } from "@/components/loan-calculator";
import { ShowMore } from "@/components/show-more";
import { Stepper, Tabs } from "@/components/tabs";
import { LinkButton, SectionHeading } from "@/components/ui";
import {
  appraisal,
  community,
  counselling,
  financeEducation,
  loanActions,
  loanPackages,
  loanSteps,
  productsPage,
  progressivePolicy,
  savings,
  socialShop,
  type Action,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Ba gói vay, hai hình thức tiết kiệm và ba chương trình đồng hành của Đơm Hoa. Lãi suất tính trên dư nợ giảm dần, tiết kiệm và các chương trình đồng hành hoàn toàn tự nguyện.",
};

function Actions({ items, className = "" }: { items: readonly Action[]; className?: string }) {
  if (!items.length) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((a, i) => (
        <LinkButton key={a.label} href={a.href} variant={i === items.length - 1 ? "primary" : "ghost"}>
          {a.label}
        </LinkButton>
      ))}
    </div>
  );
}

/* ---------------- Vay vốn ---------------- */

function PackagePanel({ p }: { p: (typeof loanPackages)[number] }) {
  return (
    <article aria-labelledby={`${p.id}-title`} className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
      <div className="lg:sticky lg:top-44 lg:self-start">
        <p className="text-[15px] font-semibold text-blossom-deep">Gói {p.number}</p>
        <h2 id={`${p.id}-title`} className="mt-2 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-moss-ink md:text-[40px]">
          {p.title}
        </h2>
        <p className="mt-4 text-ink-muted">{p.audience}</p>
        <dl className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-sprout p-4">
            <dt className="text-sm text-ink-muted">Hạn mức</dt>
            <dd className="tabular mt-1 text-[21px] font-extrabold text-moss-ink">{p.highlight.amount}</dd>
          </div>
          <div className="rounded-2xl bg-sprout p-4">
            <dt className="text-sm text-ink-muted">Lãi suất</dt>
            <dd className="tabular mt-1 text-[21px] font-extrabold text-moss-ink">{p.highlight.rate}</dd>
          </div>
        </dl>
        <Actions items={p.actions} className="mt-8" />
        {p.calculator && (
          <a href="#tinh-thu" className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-moss underline decoration-moss/30 underline-offset-4 hover:decoration-moss">
            <Calculator size={18} aria-hidden="true" /> Tính thử khoản vay gói {p.number}
          </a>
        )}
      </div>
      <div>
        {/* The package sheet stays visible; everything else waits behind one button. */}
        {p.blocks
          .filter((b) => b.title === "Thông tin gói vay")
          .map((b) => (
            <BlockView key={b.title} block={b} />
          ))}
        <ShowMore className="mt-10">
          <div className="space-y-14">
            {p.blocks
              .filter((b) => b.title !== "Thông tin gói vay")
              .map((b) => (
                <BlockView key={b.title} block={b} />
              ))}
          </div>
        </ShowMore>
      </div>
    </article>
  );
}

function AppraisalPanel() {
  return (
    <article aria-labelledby="tham-dinh-title">
      <div className="max-w-3xl">
        <h2 id="tham-dinh-title" className="text-[32px] font-bold tracking-[-0.03em] text-moss-ink md:text-[40px]">
          {appraisal.title}
        </h2>
        <p className="mt-4 text-lg text-ink-muted">{appraisal.intro}</p>
      </div>
      <TermsGrid items={appraisal.items} className="mt-10 lg:grid-cols-3" />
      <p className="mt-8 max-w-3xl rounded-[var(--radius-card)] border-l-4 border-petal-orange bg-paper p-6 text-ink-muted ring-1 ring-sprout-line">
        {appraisal.outro}
      </p>
    </article>
  );
}

function PolicyPanel() {
  return (
    <article aria-labelledby="luy-tien-title" className="space-y-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14 [&>*]:min-w-0">
        <div>
          <h2 id="luy-tien-title" className="text-[32px] font-bold tracking-[-0.03em] text-moss-ink md:text-[40px]">
            {progressivePolicy.title}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{progressivePolicy.intro}</p>
        </div>
        <CheckList items={progressivePolicy.items} className="text-[16px]" />
      </div>
      <div className="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
        <Orbs variant="dark" />
        <p className="relative text-[15px] font-semibold text-petal-yellow">Thông điệp của Đơm Hoa</p>
        <p className="relative mt-3 max-w-3xl text-[24px] font-light leading-[1.35] tracking-[-0.02em] text-on-dark md:text-[30px]">
          {progressivePolicy.message}
        </p>
      </div>
      <div>
        <SectionHeading id="quy-trinh-title" title="Quy trình vay vốn (6 bước)" />
        <div className="mt-12">
          <Stepper label="Quy trình vay vốn" steps={loanSteps} />
        </div>
        <Actions items={loanActions} className="mt-10" />
      </div>
    </article>
  );
}

function LoansSection() {
  return (
    <div>
      {/* Overview of the four packages; each card opens its tab below */}
      <ul data-reveal-group="90" className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sprout-line shadow-soft ring-1 ring-sprout-line sm:grid-cols-3">
        {loanPackages.map((p) => (
          <li key={p.id} data-reveal className="bg-paper">
            <a href={`#${p.id}`} className="block h-full p-6 hover:bg-sprout/50">
              <span className="block text-[14px] font-semibold text-blossom-deep">Gói {p.number}</span>
              <span className="mt-1 block font-bold text-moss-ink">{p.title}</span>
              <span className="tabular mt-3 flex flex-wrap gap-x-4 text-[15px] text-ink-muted">
                <span>{p.highlight.amount}</span>
                <span>{p.highlight.rate}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Tabs
          label="Vay vốn"
          items={[
            ...loanPackages.map((p) => ({ id: p.id, tab: `Gói ${p.number}`, panel: <PackagePanel p={p} /> })),
            { id: "tham-dinh", tab: "Nguyên tắc thẩm định khoản vay", panel: <AppraisalPanel /> },
            { id: "quy-trinh", tab: "Chính sách và quy trình vay vốn", panel: <PolicyPanel /> },
          ]}
        />
      </div>

      <section id="tinh-thu" className="mt-28 scroll-mt-40" aria-labelledby="calc-title">
        <SectionHeading
          id="calc-title"
          title="Tính thử khoản vay"
          intro="Chọn gói, số tiền và kỳ hạn để xem số tiền trả mỗi tháng và tổng tiền lãi, tính theo lãi suất của từng gói trên dư nợ giảm dần."
        />
        <div className="mt-12">
          <LoanCalculator />
        </div>
      </section>
    </div>
  );
}

/* ---------------- Tiết kiệm ---------------- */

function SavingsSection() {
  const [goal, center] = savings.products;
  return (
    <div>
      <div className="relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-petal-yellow/70 p-8 sm:p-12">
        <Orbs variant="warm" />
        <div className="relative">
          <SectionQuote>{savings.quote}</SectionQuote>
          <p className="mt-6 max-w-3xl text-lg text-moss-ink">{savings.intro}</p>
          <p className="mt-6 inline-flex max-w-3xl rounded-2xl bg-paper/80 px-5 py-3 text-[15px] text-moss-ink">{savings.rateNote}</p>
        </div>
      </div>

      <article id={goal.id} className="mt-20 scroll-mt-40" aria-labelledby={`${goal.id}-title`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm 1</p>
            <h2 id={`${goal.id}-title`} className="mt-2 text-[30px] font-bold tracking-[-0.03em] text-moss-ink md:text-[38px]">
              {goal.title}
            </h2>
            <p className="mt-4 text-ink-muted">{goal.intro}</p>
          </div>
          <div>
            <InfoTable rows={goal.rows} caption={goal.title} />
            <ShowMore className="mt-8">
              <h3 className="text-[22px] font-bold text-moss-ink">{goal.commitments.title}</h3>
              <TermsGrid items={goal.commitments.items} className="mt-5" />
            </ShowMore>
          </div>
        </div>
      </article>

      <article id={center.id} className="mt-24 scroll-mt-40" aria-labelledby={`${center.id}-title`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm 2</p>
            <h2 id={`${center.id}-title`} className="mt-2 text-[30px] font-bold tracking-[-0.03em] text-moss-ink md:text-[38px]">
              {center.title}
            </h2>
            <p className="mt-4 text-ink-muted">{center.intro}</p>
          </div>
          <div className="space-y-6">
            <InfoTable rows={center.rows} caption={center.title} />
            <p className="rounded-[var(--radius-card)] border-l-4 border-petal-orange bg-paper p-6 text-ink-muted ring-1 ring-sprout-line">
              <strong className="font-semibold text-moss-ink">Nguyên tắc thực hiện: </strong>
              {center.principle}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ---------------- Đồng hành cộng đồng ---------------- */

const programmes = [
  { id: counselling.id, icon: Brain, title: counselling.title },
  { id: financeEducation.id, icon: Student, title: financeEducation.title },
  { id: socialShop.id, icon: Storefront, title: socialShop.title },
];

function ProgrammeHead({ n, id, title, quote, intro }: { n: number; id: string; title: string; quote: string; intro: string }) {
  return (
    <div className="lg:sticky lg:top-32 lg:self-start">
      <p className="text-[15px] font-semibold text-blossom-deep">Chương trình {n}</p>
      <h2 id={`${id}-title`} className="mt-2 text-[30px] font-bold tracking-[-0.03em] text-moss-ink md:text-[38px]">
        {title}
      </h2>
      <p className="mt-5 border-l-2 border-petal-red pl-4 text-[19px] font-light italic leading-snug text-moss-ink">“{quote}”</p>
      <p className="mt-5 text-ink-muted">{intro}</p>
    </div>
  );
}

function Commitments({ items }: { items: readonly string[] }) {
  return (
    <div className="rounded-[var(--radius-card)] bg-sprout p-6 sm:p-8">
      <h3 className="text-[20px] font-bold text-moss-ink">Cam kết của Đơm Hoa</h3>
      <CheckList items={items} className="mt-5 text-[15px]" />
    </div>
  );
}

function CommunitySection() {
  return (
    <div>
      <div className="on-dark relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
        <Orbs variant="dark" />
        <div className="relative">
          <SectionQuote tone="dark">{community.quote}</SectionQuote>
          <div className="mt-6 max-w-3xl space-y-3 text-lg text-on-dark-muted">
            {community.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <nav aria-label="Ba chương trình đồng hành" className="mt-10">
        <ul data-reveal-group="100" className="grid gap-4 md:grid-cols-3">
          {programmes.map(({ id, icon: Icon, title }, i) => (
            <li key={id} data-reveal>
              <a href={`#${id}`} className="card-lift flex h-full items-start gap-4 rounded-[var(--radius-card)] bg-sprout p-6">
                <span className="glass grid size-12 shrink-0 place-items-center rounded-2xl text-moss">
                  <Icon size={26} weight="duotone" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-blossom-deep">Chương trình {i + 1}</span>
                  <span className="mt-1 block font-bold text-moss-ink">{title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 1. Counselling */}
      <article id={counselling.id} className="mt-24 scroll-mt-40" aria-labelledby={`${counselling.id}-title`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
          <ProgrammeHead n={1} id={counselling.id} title={counselling.title} quote={counselling.quote} intro={counselling.intro} />
          <div>
            <InfoTable rows={counselling.rows} caption={counselling.title} />
            <ShowMore className="mt-8">
              <div className="space-y-12">
            <div>
              <h3 className="text-[22px] font-bold text-moss-ink">Quy trình hỗ trợ gồm 7 bước</h3>
              <ol data-reveal-group="70" className="mt-6 grid gap-4 sm:grid-cols-2">
                {counselling.steps.map((s, i) => (
                  <li key={s.title} data-reveal className="rounded-[var(--radius-card)] bg-paper p-6 shadow-soft ring-1 ring-sprout-line">
                    <span className="tabular grid size-9 place-items-center rounded-full bg-moss text-[15px] font-bold text-on-dark" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h4 className="mt-4 text-[17px] font-bold text-moss-ink">{s.title}</h4>
                    <p className="mt-1.5 text-[15px] text-ink-muted">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <Commitments items={counselling.commitments} />
              </div>
            </ShowMore>
          </div>
        </div>
      </article>

      {/* 2. Financial education */}
      <article id={financeEducation.id} className="mt-24 scroll-mt-40" aria-labelledby={`${financeEducation.id}-title`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
          <ProgrammeHead n={2} id={financeEducation.id} title={financeEducation.title} quote={financeEducation.quote} intro={financeEducation.intro} />
          <div className="space-y-12">
            <div data-reveal="scale">
              <Photo n={12} parallax={0.05} className="aspect-[4/3] rounded-[var(--radius-panel)]" sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
            <InfoTable rows={financeEducation.rows} caption={financeEducation.title} />
            <ShowMore>
              <div className="space-y-12">
            <div>
              <h3 className="text-[22px] font-bold text-moss-ink">Nội dung đào tạo</h3>
              <div className="mt-5">
                <DataTable
                  head={["Học phần", "Nội dung chính", "Thời lượng", "Hình thức"]}
                  rows={financeEducation.modules.map((m) => [m.name, m.content, m.length, m.mode])}
                  minWidth={720}
                />
              </div>
              <p className="mt-4 text-[15px] text-ink-muted">{financeEducation.modulesNote}</p>
            </div>
            <Commitments items={financeEducation.commitments} />
              </div>
            </ShowMore>
          </div>
        </div>
      </article>

      {/* 3. Social shop */}
      <article id={socialShop.id} className="mt-24 scroll-mt-40" aria-labelledby={`${socialShop.id}-title`}>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-14 [&>*]:min-w-0">
          <ProgrammeHead n={3} id={socialShop.id} title={socialShop.title} quote={socialShop.quote} intro={socialShop.intro} />
          <div>
            <InfoTable rows={socialShop.rows} caption={socialShop.title} />
            <ShowMore className="mt-8">
              <div className="space-y-12">
            <Commitments items={socialShop.commitments} />
            <div>
              <h3 className="text-[22px] font-bold text-moss-ink">Định hướng triển khai</h3>
              <div className="mt-4 space-y-3 text-ink-muted">
                {socialShop.direction.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
              </div>
            </ShowMore>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <PageIntro eyebrow="Sản phẩm" photo={11} title={productsPage.title} body={productsPage.intro} />

      <section className="container-site mt-12" aria-label="Sản phẩm của Đơm Hoa">
        <Tabs
          label="Nhóm sản phẩm"
          size="lg"
          sticky={false}
          items={[
            { id: "vay-von", tab: "Vay vốn", panel: <LoansSection /> },
            { id: "tiet-kiem", tab: "Tiết kiệm", panel: <SavingsSection /> },
            { id: "dong-hanh", tab: "Đồng hành cộng đồng", panel: <CommunitySection /> },
          ]}
        />
      </section>

      <CtaBand
        title="Chưa chắc gói nào phù hợp?"
        body="Làm bài tự đánh giá trong 2 phút, hoặc đăng ký buổi tư vấn riêng với cán bộ tín dụng nữ trong không gian kín đáo."
        primary={{ href: "/lien-he#dang-ky", label: "Đăng ký tư vấn riêng" }}
        secondary={{ href: "/tu-danh-gia", label: "Kiểm tra mức độ phù hợp" }}
      />
    </>
  );
}
