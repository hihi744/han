import type { Metadata } from "next";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { CheckList, PhotoSlot } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";
import { org, project, projectEmailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Dự án Hạt mầm trong tay",
  description:
    "Dự án “Hạt mầm trong tay” của Đơm Hoa: đào tạo nghề gắn với việc làm chờ sẵn cho phụ nữ sau cải tạo. Đợt 1 cần vận động khoảng 89 triệu đồng.",
};

function MoneyTable({
  caption,
  head,
  rows,
  total,
}: {
  caption: string;
  head: [string, string, string];
  rows: readonly { item: string; calc: string; amount: string }[];
  total: { label: string; amount: string; note?: string; emphasis?: boolean }[];
}) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
      <table className="w-full min-w-[520px] text-left text-[15px]">
        <caption className="px-5 pb-1 pt-5 text-left text-[18px] font-bold text-moss-ink">{caption}</caption>
        <thead>
          <tr className="text-sm text-ink-muted">
            <th scope="col" className="px-5 py-3 font-medium">{head[0]}</th>
            <th scope="col" className="px-5 py-3 font-medium">{head[1]}</th>
            <th scope="col" className="px-5 py-3 text-right font-medium">{head[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.item} className="border-t border-sprout-line">
              <th scope="row" className="px-5 py-3 font-medium text-moss-ink">{r.item}</th>
              <td className="px-5 py-3 text-ink-muted">{r.calc}</td>
              <td className="tabular px-5 py-3 text-right font-medium">{r.amount}</td>
            </tr>
          ))}
          {total.map((t) => (
            <tr key={t.label} className={`border-t-2 border-moss-ink/15 ${t.emphasis ? "bg-petal-yellow" : "bg-sprout/60"}`}>
              <th scope="row" colSpan={2} className="px-5 py-3 font-bold text-moss-ink">
                {t.label}
              </th>
              <td className="tabular px-5 py-3 text-right font-extrabold text-moss-ink">
                {t.amount}
                {t.note && <span className="block text-[13px] font-medium text-ink-muted">{t.note}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <>
      {/* Hero: photo slot with a bold title block, after the reference layout */}
      <section className="px-3 pt-3" aria-labelledby="project-title">
        <div className="on-dark relative mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep text-on-dark">
          <PhotoSlot want="lớp may gia công, chụp tay và máy may" tone="dark" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-moss-ink/85 via-moss-ink/50 to-transparent" aria-hidden="true" />
          <div className="container-site relative py-20 md:py-28">
            <p className="text-[15px] font-semibold text-petal-yellow">Dự án</p>
            <h1 id="project-title" className="shout mt-3 max-w-3xl text-[44px] text-on-dark md:text-[72px]">
              Hạt mầm trong tay
            </h1>
            <p className="mt-4 max-w-xl text-xl text-on-dark-muted">{project.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#tai-tro" className="inline-flex min-h-12 items-center rounded-full bg-petal-yellow px-6 text-[15px] font-semibold text-moss-ink hover:bg-[#fff7c4]">
                Kêu gọi tài trợ
              </a>
              <a href={projectEmailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold text-on-dark ring-1 ring-inset ring-on-dark/35 hover:bg-on-dark/10">
                <EnvelopeSimple size={18} aria-hidden="true" /> Nhận hồ sơ dự án qua email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nature + model */}
      <section className="container-site mt-20" aria-labelledby="nature-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 id="nature-title" className="text-[30px] text-moss-ink md:text-[40px]">
              Đào tạo có việc làm chờ sẵn
            </h2>
            <CheckList items={project.nature} className="mt-6 text-[17px]" />
          </div>
          <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sprout-line ring-1 ring-sprout-line">
            {[
              { label: "Mô hình chung", value: project.model },
              { label: "Quy mô", value: project.scale },
              { label: "Đối tác theo từng đợt", value: project.partnersPerRound },
              { label: "Đầu ra từng đợt", value: project.outputs },
            ].map((r) => (
              <div key={r.label} className="bg-paper p-6">
                <dt className="font-bold text-moss-ink">{r.label}</dt>
                <dd className="mt-1.5 text-[15px] text-ink-muted">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Structure: a real sequence */}
      <section className="container-site mt-20" aria-labelledby="structure-title">
        <h2 id="structure-title" className="text-[24px] text-moss-ink">
          Cấu trúc
        </h2>
        <ol className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {project.structure.map((s, i) => (
            <li key={s} className="flex flex-1 items-center gap-3">
              <span className="flex h-full flex-1 items-center gap-4 rounded-[var(--radius-card)] bg-sprout p-5">
                <span className="tabular grid size-9 shrink-0 place-items-center rounded-full bg-moss text-[15px] font-bold text-on-dark" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="font-semibold text-moss-ink">{s}</span>
              </span>
              {i < project.structure.length - 1 && (
                <ArrowRight size={22} className="hidden shrink-0 text-moss lg:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Timeline */}
      <section className="container-site mt-24" aria-labelledby="timeline-title">
        <div className="on-dark rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
          <h2 id="timeline-title" className="shout text-[32px] text-on-dark md:text-[44px]">
            Quy trình triển khai
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {project.phases.map((p) => (
              <li key={p.phase} className="relative border-t border-on-dark/25 pt-6">
                <span className="absolute -top-[7px] left-0 size-3 rounded-full bg-petal-yellow" aria-hidden="true" />
                <p className="tabular text-sm text-on-dark-muted">{p.time}</p>
                <h3 className="mt-1 text-[20px] text-on-dark">{p.phase}</h3>
                <ul className="mt-3 space-y-2 text-[15px] text-on-dark-muted">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_1fr] [&>*]:min-w-0">
          <div className="overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
            <table className="w-full text-left text-[15px]">
              <caption className="px-5 pb-1 pt-5 text-left text-[18px] font-bold text-moss-ink">Nội dung đào tạo (đợt may gia công)</caption>
              <thead>
                <tr className="text-sm text-ink-muted">
                  <th scope="col" className="px-5 py-3 font-medium">Tuần</th>
                  <th scope="col" className="px-5 py-3 font-medium">Nội dung phổ biến</th>
                </tr>
              </thead>
              <tbody>
                {project.weeks.map((w) => (
                  <tr key={w.weeks} className="border-t border-sprout-line">
                    <th scope="row" className="tabular whitespace-nowrap px-5 py-3 font-bold text-moss-ink">{w.weeks}</th>
                    <td className="px-5 py-3 text-ink-muted">{w.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-5">
            {project.streams.map((s) => (
              <div key={s.name} className="rounded-[var(--radius-card)] bg-sprout p-6">
                <h3 className="text-[18px] text-moss-ink">{s.name}</h3>
                <p className="mt-2 text-[15px] text-ink-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[15px] text-ink-muted">{project.parallelNote}</p>
      </section>

      {/* KPIs */}
      <section className="container-site mt-24" aria-labelledby="kpi-title">
        <SectionHeading id="kpi-title" title="Các chỉ số đánh giá" />
        <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.kpis.map((k) => (
            <div key={k.name} className="flex flex-col rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-sprout-line">
              <dt className="order-2 mt-3 font-medium text-moss-ink">{k.name}</dt>
              <dd className={`order-1 tabular font-extrabold leading-none tracking-tight ${k.target === "Theo dõi" ? "text-[26px] text-ink-muted" : "text-[44px] text-petal-red"}`}>
                {k.target}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Budget */}
      <section className="container-site mt-24" aria-labelledby="budget-title">
        <SectionHeading id="budget-title" title="Kinh phí đợt 1 (15 học viên)" intro="Đơn vị: triệu đồng." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 [&>*]:min-w-0">
          <MoneyTable
            caption="Chi phí"
            head={["Khoản", "Tính toán", "Thành tiền"]}
            rows={project.costs}
            total={[{ label: "Tổng chi phí", amount: project.costTotal.amount, note: project.costTotal.note }]}
          />
          <MoneyTable
            caption="Nguồn đối ứng từ đối tác"
            head={["Khoản", "Tính toán", "Thành tiền"]}
            rows={project.contributions}
            total={[
              { label: "Tổng thu từ đối tác", amount: project.contributionTotal },
              { label: `Cần tài trợ/ngân sách xã hội (${project.gap.calc})`, amount: project.gap.amount, note: project.gap.note, emphasis: true },
            ]}
          />
        </div>
      </section>

      {/* Sponsorship */}
      <section id="tai-tro" className="mt-24 scroll-mt-32 bg-petal-yellow py-20" aria-labelledby="appeal-title">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 id="appeal-title" className="shout text-[36px] text-moss-ink md:text-[52px]">
              Kêu gọi tài trợ dự án
            </h2>
            <p className="text-lg text-moss-ink">{project.appeal}</p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {project.packages.map((p, i) => (
              <li key={p.name} className={`flex flex-col rounded-[var(--radius-card)] p-7 ${i === 0 ? "on-dark bg-moss-deep text-on-dark" : "bg-paper"}`}>
                <h3 className={`text-[19px] ${i === 0 ? "text-on-dark" : "text-moss-ink"}`}>{p.name}</h3>
                <p className={`tabular mt-4 text-[26px] font-extrabold tracking-tight ${i === 0 ? "text-petal-yellow" : "text-petal-red"}`}>{p.value}</p>
                <p className={`mt-3 text-[15px] ${i === 0 ? "text-on-dark-muted" : "text-ink-muted"}`}>{p.meaning}</p>
              </li>
            ))}
          </ul>
          <div id="ho-so" className="mt-10 grid scroll-mt-32 gap-6 rounded-[var(--radius-card)] bg-paper p-7 sm:p-9 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 className="text-[20px] text-moss-ink">Quyền lợi nhà tài trợ</h3>
              <p className="mt-2 text-ink-muted">{project.sponsorBenefits}</p>
            </div>
            <div className="lg:text-right">
              <a href={projectEmailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-moss px-6 text-[15px] font-semibold text-on-dark hover:bg-moss-deep">
                <EnvelopeSimple size={18} aria-hidden="true" /> Nhận hồ sơ dự án qua email
              </a>
              <p className="mt-2 text-[14px] text-ink-muted">
                Hoặc gửi trực tiếp tới <span className="font-semibold text-moss-ink select-all">{org.email}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="container-site mt-24" aria-labelledby="risk-title">
        <SectionHeading id="risk-title" title="Quản trị rủi ro của dự án" />
        <div className="mt-12 overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
          <table className="w-full min-w-[600px] text-left text-[15px]">
            <thead>
              <tr className="text-sm text-ink-muted">
                <th scope="col" className="px-6 py-3 font-medium">Rủi ro</th>
                <th scope="col" className="px-6 py-3 font-medium">Giải pháp</th>
              </tr>
            </thead>
            <tbody>
              {project.risks.map((r) => (
                <tr key={r.risk} className="border-t border-sprout-line align-top">
                  <th scope="row" className="px-6 py-4 font-semibold text-moss-ink">{r.risk}</th>
                  <td className="px-6 py-4 text-ink-muted">{r.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
