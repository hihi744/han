import type { Metadata } from "next";
import { CheckList, CtaBand, InfoTable, Orbs, PageIntro } from "@/components/blocks";
import { LoanCalculator } from "@/components/loan-calculator";
import { LinkButton, SectionHeading } from "@/components/ui";
import { Stepper, Tabs } from "@/components/tabs";
import {
  appraisal,
  generalConditions,
  groupRules,
  loanPackages,
  loanSteps,
  loanUses,
  loanUsesNote,
  progressiveLending,
  savings,
  socialEnterpriseTerms,
  socialEnterpriseTiers,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Sản phẩm tài chính",
  description:
    "Bốn gói vay của Đơm Hoa (Nảy Mầm, Chung Vườn, Gieo Nghề, Phát triển sinh kế) với lãi suất tính trên dư nợ giảm dần, cùng tiết kiệm mục tiêu và tiết kiệm trung tâm.",
};

const sectionNav = [
  { href: "#goi-1", label: "Gói 1: Nảy Mầm" },
  { href: "#goi-2", label: "Gói 2: Chung Vườn" },
  { href: "#goi-3", label: "Gói 3: Gieo Nghề" },
  { href: "#goi-4", label: "Gói 4: Phát triển sinh kế" },
  { href: "#dieu-kien", label: "Điều kiện" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#tinh-thu", label: "Tính thử" },
  { href: "#tiet-kiem", label: "Tiết kiệm" },
];

function WhyRate({ text, title = "Vì sao chọn mức lãi suất này" }: { text: string; title?: string }) {
  return (
    <aside className="rounded-[var(--radius-card)] border-l-4 border-petal-orange bg-paper p-6 ring-1 ring-sprout-line">
      <h4 className="text-[16px] font-bold text-moss-ink">{title}</h4>
      <p className="mt-2 text-[15px] text-ink-muted">{text}</p>
    </aside>
  );
}

export default function FinancePage() {
  const [g1, g2] = loanPackages;
  return (
    <>
      <PageIntro
        eyebrow="Sản phẩm"
        photo={11}
        title="Sản phẩm tài chính"
        body="Khoản vay nhỏ không cần tài sản thế chấp, lãi tính trên dư nợ giảm dần, và tiết kiệm hoàn toàn tự nguyện. Mỗi khoản vay đều được giải thích rõ lịch trả nợ và tổng nghĩa vụ trước khi chị ký."
        aside={
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <LinkButton href="/lien-he#dang-ky">Đăng ký tư vấn</LinkButton>
            <LinkButton href="#tinh-thu" variant="ghost">
              Tính thử khoản vay
            </LinkButton>
          </div>
        }
      />

      <nav aria-label="Trong trang này" className="sticky top-[84px] z-30 mt-8 px-3">
        <ul className="glass mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none]">
          {sectionNav.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="flex min-h-10 items-center whitespace-nowrap rounded-full px-4 text-[14px] font-medium text-ink-muted hover:bg-sprout hover:text-moss-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="container-site mt-16" aria-labelledby="loans-title">
        <h2 id="loans-title" data-reveal className="shout text-[38px] text-moss-ink md:text-[60px]">
          Cho vay
        </h2>

        {/* Overview strip */}
        <ul data-reveal className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sprout-line shadow-soft ring-1 ring-sprout-line sm:grid-cols-2 lg:grid-cols-4">
          {loanPackages.map((p) => (
            <li key={p.id} className="bg-paper">
              <a href={`#${p.id}`} className="block h-full p-6 hover:bg-sprout/50">
                <span className="block text-[14px] font-semibold text-blossom-deep">
                  Gói {p.number}
                  {p.name ? `: ${p.name}` : ""}
                </span>
                <span className="mt-1 block font-bold text-moss-ink">{p.title}</span>
                <span className="tabular mt-3 flex flex-wrap gap-x-4 text-[15px] text-ink-muted">
                  <span>{p.highlight.amount}</span>
                  <span>{p.highlight.rate}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <Tabs
            label="Bốn gói vay"
            items={loanPackages.map((p) => ({
              id: p.id,
              tab: `Gói ${p.number}${p.name ? `: ${p.name}` : ""}`,
              panel: (
            <article aria-labelledby={`${p.id}-title`}>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
                <div>
                  <p className="text-[15px] font-semibold text-blossom-deep">
                    Gói {p.number}
                    {p.name ? `: ${p.name}` : ""}
                  </p>
                  <h3 id={`${p.id}-title`} className="mt-2 text-[30px] text-moss-ink md:text-[38px]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-ink-muted">{p.summary}</p>
                  <dl className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-sprout p-4">
                      <dt className="text-sm text-ink-muted">Hạn mức</dt>
                      <dd className="tabular mt-1 text-[22px] font-extrabold text-moss-ink">{p.highlight.amount}</dd>
                    </div>
                    <div className="rounded-2xl bg-sprout p-4">
                      <dt className="text-sm text-ink-muted">Lãi suất</dt>
                      <dd className="tabular mt-1 text-[22px] font-extrabold text-moss-ink">{p.highlight.rate}</dd>
                    </div>
                  </dl>
                </div>
                <div className="space-y-5">
                  <InfoTable rows={p.rows} caption={`Thông tin gói ${p.number}`} />
                  <WhyRate text={p.why} />
                  {"note" in p && p.note && <WhyRate title={p.number === 3 ? "Khuyến nghị" : "Lưu ý"} text={p.note} />}
                </div>
              </div>

              {p.id === g1.id && (
                <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
                  <div className="rounded-[var(--radius-card)] bg-sprout p-7">
                    <h4 className="text-[22px] text-moss-ink">Cách làm việc của nhóm vay</h4>
                    <CheckList items={groupRules} className="mt-5 text-[15px]" />
                  </div>
                  <div>
                    <h4 className="text-[22px] text-moss-ink">Vốn dùng vào việc gì</h4>
                    <div className="mt-5 overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
                      <table className="w-full min-w-[560px] text-left text-[15px]">
                        <thead>
                          <tr className="text-sm text-ink-muted">
                            <th scope="col" className="px-5 py-3 font-medium">Mục đích</th>
                            <th scope="col" className="px-5 py-3 font-medium">Có thể tài trợ</th>
                            <th scope="col" className="px-5 py-3 font-medium">Hạn mức; kỳ hạn gợi ý</th>
                          </tr>
                        </thead>
                        <tbody>
                          {loanUses.map((u) => (
                            <tr key={u.purpose} className="border-t border-sprout-line align-top">
                              <th scope="row" className="px-5 py-4 font-semibold text-moss-ink">{u.purpose}</th>
                              <td className="px-5 py-4 text-ink-muted">{u.items}</td>
                              <td className="tabular whitespace-nowrap px-5 py-4 font-medium text-moss-ink">{u.limit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 text-[15px] text-ink-muted">{loanUsesNote}</p>
                  </div>
                </div>
              )}

              {p.id === g2.id && (
                <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
                  <div>
                    <h4 className="text-[22px] text-moss-ink">Lãi suất giảm theo bậc thang</h4>
                    <table className="mt-5 w-full overflow-hidden rounded-[var(--radius-card)] bg-paper text-left ring-1 ring-sprout-line">
                      <thead>
                        <tr className="text-sm text-ink-muted">
                          <th scope="col" className="px-5 py-3 font-medium">Tỷ lệ lao động nữ sau cải tạo</th>
                          <th scope="col" className="px-5 py-3 text-right font-medium">Lãi suất (%/tháng)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {socialEnterpriseTiers.map((t) => (
                          <tr key={t.share} className="border-t border-sprout-line">
                            <th scope="row" className="tabular px-5 py-4 font-semibold text-moss-ink">{t.share}</th>
                            <td className="tabular px-5 py-4 text-right">
                              <span className="text-[20px] font-extrabold text-moss-ink">{t.rate}</span>
                              {t.note && <span className="block text-[13px] text-ink-muted">{t.note}</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-sprout-line">
                      <h4 className="text-[16px] font-bold text-moss-ink">Điều kiện</h4>
                      <p className="mt-2 text-[15px] text-ink-muted">{socialEnterpriseTerms.conditions}</p>
                    </div>
                    <div className="rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-sprout-line">
                      <h4 className="text-[16px] font-bold text-moss-ink">Giám sát</h4>
                      <p className="mt-2 text-[15px] text-ink-muted">{socialEnterpriseTerms.monitoring}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
              ),
            }))}
          />
        </div>
      </section>

      {/* General conditions */}
      <section id="dieu-kien" className="container-site mt-28 scroll-mt-40" aria-labelledby="conditions-title">
        <div data-reveal-group="120" className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div data-reveal className="rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-10">
            <h2 id="conditions-title" className="text-[30px] text-moss-ink md:text-[38px]">
              Điều kiện chung
            </h2>
            <CheckList items={generalConditions} className="mt-6 text-[17px]" />
          </div>
          <div data-reveal className="grid gap-5">
            <div className="on-dark rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark">
              <h3 className="shout text-[22px] text-petal-yellow">Nguyên tắc vay lũy tiến</h3>
              <p className="mt-3 text-lg text-on-dark">{progressiveLending}</p>
            </div>
            <div className="rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line">
              <h3 className="text-[22px] text-moss-ink">Cách thẩm định</h3>
              <p className="mt-3 text-ink-muted">{appraisal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="quy-trinh" className="relative isolate mt-28 scroll-mt-40 overflow-hidden py-4" aria-labelledby="process-title">
        <Orbs variant="cool" />
        <div className="container-site relative">
        <SectionHeading id="process-title" title="Quy trình vay vốn: 6 bước" />
        <div className="mt-14">
          <Stepper label="Quy trình vay vốn" steps={loanSteps} />
        </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="tinh-thu" className="container-site mt-28 scroll-mt-40" aria-labelledby="calc-title">
        <SectionHeading
          id="calc-title"
          title="Tính thử khoản vay"
          intro="Chọn gói, số tiền và kỳ hạn để xem số tiền trả mỗi tháng và tổng tiền lãi, tính theo lãi suất chính thức của từng gói."
        />
        <div className="mt-12">
          <LoanCalculator />
        </div>
      </section>

      {/* Savings */}
      <section id="tiet-kiem" className="mt-28 scroll-mt-40 bg-petal-yellow/60 py-20" aria-labelledby="savings-title">
        <div className="container-site">
          <h2 id="savings-title" data-reveal className="shout text-[38px] text-moss-ink md:text-[60px]">
            Tiết kiệm tự nguyện
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-moss-ink">{savings.intro}</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {savings.products.map((sp, i) => (
              <article key={sp.id} id={sp.id} data-reveal className="scroll-mt-40">
                <p className="text-[15px] font-semibold text-blossom-deep">Sản phẩm {i + 1}</p>
                <h3 className="mt-1 text-[26px] text-moss-ink">{sp.title}</h3>
                <div className="mt-5">
                  <InfoTable rows={sp.rows} caption={sp.title} />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[var(--radius-card)] bg-paper p-7 sm:p-9">
            <h3 className="text-[22px] text-moss-ink">Cơ chế linh hoạt</h3>
            <CheckList items={savings.flexible} className="mt-5 grid gap-4 text-[15px] sm:grid-cols-2 [&>li]:mt-0" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Chưa chắc gói nào hợp với mình?"
        body="Làm bài tự đánh giá trong 2 phút, hoặc để cán bộ tín dụng nữ tư vấn riêng cho chị trong không gian kín đáo."
        primary={{ href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/tu-danh-gia", label: "Làm bài tự đánh giá" }}
      />
    </>
  );
}
