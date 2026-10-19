import type { Metadata } from "next";
import type { ReactNode } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { CheckList, InfoTable, Orbs, Photo } from "@/components/blocks";
import { DataTable } from "@/components/content-blocks";
import { ShowMore } from "@/components/show-more";
import { Tabs } from "@/components/tabs";
import { CycleRing } from "@/components/cycle-ring";
import { org, project, projectEmailHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Dự án Hạt mầm trong tay",
  description:
    "Dự án “Hạt mầm trong tay” của Đơm Hoa: đào tạo nghề gắn với việc làm chờ sẵn tại Hà Nội. Đợt đầu còn cần khoảng 89 triệu đồng.",
};

function VerticalFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="relative">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s} className="relative flex gap-4 pb-6 last:pb-0">
            {!last && (
              <span aria-hidden="true" className="absolute left-[19px] top-10 bottom-1 w-0.5 bg-gradient-to-b from-moss/40 to-moss/15">
                <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-moss/40" />
              </span>
            )}
            <span
              className={`tabular relative grid size-10 shrink-0 place-items-center rounded-full text-[15px] font-bold ${
                last ? "bg-petal-red text-on-dark" : i === 0 ? "bg-moss text-on-dark" : "bg-paper text-moss ring-2 ring-moss/30"
              }`}
            >
              {i + 1}
            </span>
            <span className="flex min-h-10 items-center rounded-2xl bg-paper px-5 py-2.5 font-semibold text-moss-ink shadow-soft ring-1 ring-sprout-line">{s}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Block({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} data-reveal className="scroll-mt-40">
      <h2 className="text-[26px] font-bold tracking-[-0.03em] text-moss-ink md:text-[34px]">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function OverviewPanel() {
  return (
    <div className="space-y-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 [&>*]:min-w-0">
        <div>
          <p className="text-[24px] font-light leading-[1.35] tracking-[-0.02em] text-moss-ink md:text-[30px]">{project.promise}</p>
          <div className="mt-8 space-y-4 text-ink-muted">
            {project.summary.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <InfoTable rows={project.facts} caption="Tóm tắt dự án" />
      </div>

      <Block title="Vì sao cần dự án này?">
        <p className="max-w-3xl text-ink-muted">{project.why.body}</p>
        <div className="on-dark relative mt-8 overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-6 text-on-dark sm:p-10">
          <Orbs variant="dark" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h3 className="text-[24px] font-bold text-petal-yellow md:text-[30px]">Vòng luẩn quẩn cần được tháo gỡ</h3>
            </div>
            <CycleRing steps={project.why.cycle} center="Vòng luẩn quẩn" />
          </div>
        </div>
        <h3 className="mt-10 text-[20px] font-bold text-moss-ink">Ba hạn chế của các khóa học nghề thông thường</h3>
        <div className="mt-5">
          <DataTable head={["Hạn chế", "Cách “Hạt mầm trong tay” giải quyết"]} rows={project.why.limits.map((l) => [l.problem, l.fix])} />
        </div>
      </Block>

      <ShowMore>
      <div className="space-y-24">
      <div className="grid gap-5 lg:grid-cols-2">
        <div data-reveal className="rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-10">
          <h2 className="text-[24px] font-bold text-moss-ink">Vì sao chọn Hà Nội?</h2>
          <p className="mt-4 text-ink-muted">{project.whyHanoi}</p>
        </div>
        <div data-reveal className="rounded-[var(--radius-panel)] bg-petal-yellow/70 p-8 sm:p-10">
          <h2 className="text-[24px] font-bold text-moss-ink">Mục tiêu dự án</h2>
          <p className="mt-4 text-moss-ink">
            <strong className="font-semibold">Mục tiêu tổng quát:</strong> {project.goal}
          </p>
          <CheckList items={project.objectives} className="mt-5 text-[15px] text-moss-ink" />
        </div>
      </div>

      <Block title="Mô hình hợp tác ba bên">
        <p className="max-w-3xl text-ink-muted">{project.partnersIntro}</p>
        <div className="mt-6">
          <DataTable head={["Bên tham gia", "Vai trò chính"]} rows={project.partners.map((p) => [p.name, p.role])} />
        </div>
      </Block>

      <div className="grid gap-10 lg:grid-cols-2">
        <Block title="Đối tượng và địa bàn">
          <CheckList items={project.audience} className="text-[16px]" />
        </Block>
        <Block title="Tiêu chí tuyển chọn học viên">
          <CheckList items={project.selection} className="text-[16px]" />
        </Block>
      </div>

      <Block title="Mô hình chung">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[var(--radius-panel)] bg-sprout p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-moss-ink">Lộ trình của học viên</h3>
            <div className="mt-6">
              <VerticalFlow steps={project.structure} />
            </div>
          </div>
          <div className="rounded-[var(--radius-panel)] bg-petal-yellow/60 p-6 sm:p-8">
            <h3 className="text-[18px] font-bold text-moss-ink">Chu trình một đợt</h3>
            <div className="mt-6">
              <VerticalFlow steps={project.cycle} />
            </div>
          </div>
        </div>
        <CheckList items={project.model} className="mt-10 max-w-4xl text-[16px]" />
      </Block>
      </div>
      </ShowMore>
    </div>
  );
}

function ProcessPanel() {
  return (
    <div className="space-y-20">
      <div className="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
        <Orbs variant="dark" />
        <h2 className="shout relative text-[30px] text-on-dark md:text-[40px]">Quy trình triển khai</h2>
        <ol data-reveal-group="140" className="relative mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {project.phases.map((p) => (
            <li key={p.phase} data-reveal className="relative border-t border-on-dark/25 pt-6">
              <span className="absolute -top-[7px] left-0 size-3 rounded-full bg-petal-yellow shadow-[0_0_0_6px_rgba(255,242,160,0.15),0_0_24px_4px_rgba(255,242,160,0.4)]" aria-hidden="true" />
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

      <ShowMore>
      <div className="space-y-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] [&>*]:min-w-0">
        <Block title="Giai đoạn đào tạo: nội dung theo tuần">
          <p className="mb-5 text-ink-muted">Mỗi tuần có 4 buổi đào tạo nghề.</p>
          <DataTable head={["Tuần", "Nội dung chính"]} rows={project.weeks.map((w) => [w.weeks, w.content])} minWidth={360} />
        </Block>
        <Block title="Phân luồng đầu ra (cuối tháng thứ 2)">
          <DataTable head={["Luồng", "Nội dung", "Lưu ý"]} rows={project.streams.map((s) => [s.name, s.body, s.note])} />
        </Block>
      </div>

      <Block title="Lộ trình tổng thể của một đợt">
        <DataTable head={["Thời điểm", "Giai đoạn", "Hoạt động chính", "Kết quả mong đợi"]} rows={project.roadmap.map((r) => [r.time, r.phase, r.work, r.result])} minWidth={720} />
        <p className="mt-5 text-[15px] text-ink-muted">{project.parallelNote}</p>
      </Block>
      </div>
      </ShowMore>
    </div>
  );
}

function SponsorPanel() {
  return (
    <div>
      <div className="relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-petal-yellow p-8 sm:p-12">
        <Orbs variant="warm" />
        <div className="relative">
          <h2 className="shout text-[32px] text-moss-ink md:text-[48px]">Cùng đồng hành với “Hạt mầm trong tay”</h2>
          <p className="mt-4 max-w-2xl text-lg text-moss-ink">{project.appeal}</p>
          <ul data-reveal-group="110" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {project.packages.map((p, i) => (
              <li key={p.name} data-reveal className={`card-lift flex flex-col rounded-[var(--radius-card)] p-7 shadow-soft ${i === 0 ? "on-dark bg-moss-deep text-on-dark" : "bg-paper"}`}>
                <h3 className={`text-[19px] ${i === 0 ? "text-on-dark" : "text-moss-ink"}`}>{p.name}</h3>
                <p className={`tabular mt-4 text-[24px] font-extrabold tracking-tight ${i === 0 ? "text-petal-yellow" : "text-petal-red"}`}>{p.value}</p>
                <p className={`mt-3 text-[15px] ${i === 0 ? "text-on-dark-muted" : "text-ink-muted"}`}>{p.meaning}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="ho-so" className="mt-8 grid scroll-mt-40 gap-6 rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line sm:p-9 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h3 className="text-[20px] text-moss-ink">Quyền lợi của nhà tài trợ</h3>
          <p className="mt-2 text-ink-muted">{project.sponsorBenefits}</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <a href={projectEmailHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-moss px-6 text-[15px] font-semibold text-on-dark hover:bg-moss-deep">
            <EnvelopeSimple size={18} aria-hidden="true" /> Nhận hồ sơ dự án qua email
          </a>
          <a href="/lien-he#doi-tac" className="inline-flex min-h-12 items-center rounded-full px-6 text-[15px] font-semibold text-moss ring-1 ring-inset ring-moss/30 hover:bg-sprout">
            Liên hệ hợp tác
          </a>
          <p className="text-[14px] text-ink-muted">
            Email: <span className="select-all font-semibold text-moss-ink">{org.email}</span>
          </p>
        </div>
      </div>

      <figure data-reveal className="mx-auto mt-20 max-w-3xl text-center">
        <p className="text-lg text-ink-muted">{project.closing}</p>
        <blockquote className="mt-6 text-[28px] font-light leading-[1.3] tracking-[-0.03em] text-moss-ink md:text-[40px]">“{project.closingLine}”</blockquote>
      </figure>
    </div>
  );
}

export default function ProjectPage() {
  return (
    <>
      <section className="px-3 pt-3" aria-labelledby="project-title">
        <div className="on-dark relative mx-auto max-w-[1400px] overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep text-on-dark">
          <Photo n={13} tone="dark" parallax={0.08} priority sizes="100vw" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-moss-ink/90 via-moss-ink/65 to-moss-ink/20" aria-hidden="true" />
          <Orbs variant="dark" />
          <div data-reveal className="container-site relative py-24 md:py-32">
            <p className="text-[15px] font-semibold text-petal-yellow">Dự án</p>
            <h1 id="project-title" className="shout mt-3 max-w-3xl text-[44px] text-on-dark md:text-[72px]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-on-dark-muted">{project.subtitle}</p>
            <p className="mt-3 text-[15px] text-on-dark-muted">
              Đơn vị đề xuất: {project.proposer} · Địa bàn: {project.area}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={projectEmailHref} data-magnetic className="btn-sweep inline-flex min-h-12 items-center gap-2 rounded-full bg-petal-yellow px-6 text-[15px] font-semibold text-moss-ink hover:bg-[#fff7c4]">
                <EnvelopeSimple size={18} aria-hidden="true" /> Nhận hồ sơ dự án qua email
              </a>
              <a href="#dong-hanh" className="inline-flex min-h-12 items-center rounded-full px-6 text-[15px] font-semibold text-on-dark ring-1 ring-inset ring-on-dark/35 hover:bg-on-dark/10">
                Đồng hành cùng dự án
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-site mt-12" aria-label="Nội dung dự án">
        <Tabs
          label="Nội dung dự án"
          size="lg"
          items={[
            { id: "tong-quan", tab: "Tổng quan", panel: <OverviewPanel /> },
            { id: "quy-trinh", tab: "Quy trình", panel: <ProcessPanel /> },
            { id: "dong-hanh", tab: "Đồng hành cùng dự án", panel: <SponsorPanel /> },
          ]}
        />
      </section>
    </>
  );
}
