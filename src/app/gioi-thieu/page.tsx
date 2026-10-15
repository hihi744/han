import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { CheckList, CtaBand, PageIntro } from "@/components/blocks";
import { StageGlyph } from "@/components/petals";
import { SectionHeading } from "@/components/ui";
import { about, expansion, funding, goals2031, legal, locations, org, partners, values } from "@/content/site";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tổ chức Tài chính Vi mô ĐƠM HOA (BLOSSOM Microfinance Institution): tầm nhìn, sứ mệnh, giá trị cốt lõi, phạm vi hoạt động, đối tác và cơ sở pháp lý.",
};

const sectionNav = [
  { href: "#tam-nhin", label: "Tầm nhìn – Sứ mệnh" },
  { href: "#gia-tri", label: "Giá trị cốt lõi" },
  { href: "#doi-tuong", label: "Đồng hành cùng ai" },
  { href: "#pham-vi", label: "Phạm vi hoạt động" },
  { href: "#muc-tieu", label: "Mục tiêu" },
  { href: "#doi-tac", label: "Đối tác" },
  { href: "#nguon-luc", label: "Nguồn lực" },
  { href: "#phap-ly", label: "Pháp lý và bảo mật" },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro title="Về chúng tôi" body={about.direction} />

      {/* Names */}
      <section className="container-site mt-10" aria-label="Tên tổ chức">
        <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sprout-line ring-1 ring-sprout-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Tên tiếng Việt", value: org.fullName },
            { label: "Tên tiếng Anh", value: org.englishName },
            { label: "Tên viết tắt", value: org.shortName },
            { label: "Tagline", value: org.tagline },
          ].map((n) => (
            <div key={n.label} className="bg-paper p-6">
              <dt className="text-sm text-ink-muted">{n.label}</dt>
              <dd className="mt-1.5 font-semibold text-moss-ink">{n.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav aria-label="Trong trang này" className="sticky top-[84px] z-30 mt-10 px-3">
        <ul className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full bg-paper/90 p-1.5 ring-1 ring-sprout-line backdrop-blur-md [scrollbar-width:none]">
          {sectionNav.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="flex min-h-10 items-center whitespace-nowrap rounded-full px-4 text-[14px] font-medium text-ink-muted hover:bg-sprout hover:text-moss-ink">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Vision & mission */}
      <section id="tam-nhin" className="container-site mt-12 scroll-mt-40" aria-label="Tầm nhìn và sứ mệnh">
        <div className="on-dark grid gap-10 rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="shout text-[26px] text-petal-yellow">Tầm nhìn</h2>
            <p className="mt-4 text-[22px] leading-snug text-on-dark sm:text-[26px]">{about.vision}</p>
          </div>
          <div>
            <h2 className="shout text-[26px] text-petal-yellow">Sứ mệnh</h2>
            <p className="mt-4 text-[22px] leading-snug text-on-dark sm:text-[26px]">{about.mission}</p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section id="gia-tri" className="container-site mt-24 scroll-mt-40" aria-labelledby="values-title">
        <SectionHeading id="values-title" title="Giá trị cốt lõi" intro={about.valuesIntro} />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.key} className="flex flex-col rounded-[var(--radius-card)] bg-paper p-8 ring-1 ring-sprout-line">
              <div className="flex items-center justify-between">
                <StageGlyph stage={v.key} className="size-14" />
                <span className="tabular text-sm font-medium text-ink-muted">Chặng {i + 1}</span>
              </div>
              <h3 className="mt-6 text-[28px] text-moss-ink">
                {v.stage} – {v.value}
              </h3>
              <p className="font-semibold text-blossom-deep">{v.promise}</p>
              <p className="mt-3 text-ink-muted">{v.body}</p>
            </li>
          ))}
        </ol>
        <figure className="mx-auto mt-16 max-w-3xl text-center">
          <blockquote className="text-[26px] font-bold leading-snug tracking-tight text-moss-ink md:text-[36px]">
            “{org.philosophy}”
          </blockquote>
          <figcaption className="mt-4 text-ink-muted">Triết lý cốt lõi</figcaption>
        </figure>
      </section>

      {/* Who we serve + how we reach */}
      <section id="doi-tuong" className="container-site mt-24 scroll-mt-40" aria-label="Đối tượng và cách tiếp cận">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-10">
            <h2 className="text-[28px] text-moss-ink md:text-[34px]">Chúng tôi đồng hành cùng ai?</h2>
            <CheckList items={about.whoWeServe} className="mt-6 text-[17px]" />
          </div>
          <div className="rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-10">
            <h2 className="text-[28px] text-moss-ink md:text-[34px]">Cách chúng tôi đến với chị</h2>
            {about.howWeReach.map((p) => (
              <p key={p} className="mt-5 text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Locations & expansion */}
      <section id="pham-vi" className="container-site mt-24 scroll-mt-40" aria-labelledby="scope-title">
        <SectionHeading id="scope-title" title="Phạm vi hoạt động" intro="Thí điểm tại 2 địa phương, mở rộng theo mô hình “điểm – cụm – vùng”." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {locations.map((l) => (
            <article key={l.place} className="rounded-[var(--radius-card)] bg-paper p-8 ring-1 ring-sprout-line">
              <p className="flex items-center gap-2 text-[15px] font-semibold text-blossom-deep">
                <MapPin size={20} weight="fill" aria-hidden="true" /> {l.role}
              </p>
              <h3 className="mt-3 text-[30px] text-moss-ink">{l.place}</h3>
              <p className="mt-3 text-ink-muted">{l.body}</p>
            </article>
          ))}
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {expansion.map((e) => (
            <li key={e.phase} className="relative border-t-2 border-moss pt-6">
              <span className="absolute -top-[9px] left-0 size-4 rounded-full bg-petal-orange ring-4 ring-mist" aria-hidden="true" />
              <p className="tabular text-sm font-semibold text-ink-muted">{e.time}</p>
              <h3 className="shout mt-1 text-[26px] text-moss-ink">{e.phase}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{e.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Goals */}
      <section id="muc-tieu" className="mt-24 scroll-mt-40 bg-petal-yellow py-16" aria-labelledby="goals-title">
        <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <h2 id="goals-title" className="shout text-[32px] text-moss-ink md:text-[44px]">
            Mục tiêu hoạt động giai đoạn 2027–2031
          </h2>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {goals2031.map((g) => (
              <li key={g} className="flex gap-4 border-t border-moss-ink/20 pt-4">
                <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rotate-45 bg-petal-red" />
                <span className="text-moss-ink">{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Partners */}
      <section id="doi-tac" className="container-site mt-24 scroll-mt-40" aria-labelledby="partners-title">
        <SectionHeading id="partners-title" title="Đối tác" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[15px] font-semibold tracking-normal text-ink-muted">Đối tác chuyên môn</h3>
            <ul className="mt-4 divide-y divide-sprout-line border-y border-sprout-line">
              {partners.professional.map((p) => (
                <li key={p.name} className="py-5">
                  <p className="text-[19px] font-bold text-moss-ink">{p.name}</p>
                  <p className="mt-1 text-ink-muted">{p.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold tracking-normal text-ink-muted">Đối tác đào tạo nghề</h3>
            <ul className="mt-4 divide-y divide-sprout-line border-y border-sprout-line">
              {partners.training.map((p) => (
                <li key={p.name} className="py-5">
                  <p className="text-[19px] font-bold text-moss-ink">{p.name}</p>
                  <p className="mt-1 text-ink-muted">{p.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section id="nguon-luc" className="container-site mt-24 scroll-mt-40" aria-labelledby="funding-title">
        <div className="grid gap-10 rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 id="funding-title" className="text-[30px] text-moss-ink md:text-[38px]">
              Nguồn lực và nhà tài trợ
            </h2>
            <p className="mt-4 text-ink-muted">{funding.intro}</p>
            <h3 className="mt-10 text-[15px] font-semibold tracking-normal text-ink-muted">Cơ cấu nguồn thu dự kiến</h3>
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {funding.mix.map((m) => (
                <div key={m.label} className="flex flex-col rounded-2xl bg-sprout p-4">
                  <dt className="order-2 mt-2 text-[14px] text-ink-muted">{m.label}</dt>
                  <dd className="order-1 tabular text-[30px] font-extrabold leading-none text-moss-ink">{m.share}%</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[15px] text-ink-muted">{funding.outlook}</p>
          </div>
          <ul className="space-y-6">
            {funding.sources.map((s) => (
              <li key={s.title} className="border-l-2 border-petal-orange pl-5">
                <h3 className="text-[19px] text-moss-ink">{s.title}</h3>
                <p className="mt-1 text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legal */}
      <section id="phap-ly" className="container-site mt-24 scroll-mt-40" aria-labelledby="legal-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h2 id="legal-title" className="text-[30px] text-moss-ink md:text-[38px]">
            Cơ sở pháp lý và bảo mật khách hàng
          </h2>
          <CheckList items={legal} className="text-[17px]" />
        </div>
      </section>

      <section className="container-site mt-16">
        <Link href="/gioi-thieu/cau-chuyen" className="group flex items-center justify-between gap-6 rounded-[var(--radius-card)] bg-sprout p-7 sm:p-9">
          <span>
            <span className="block text-[15px] font-semibold text-blossom-deep">Câu chuyện khách hàng</span>
            <span className="mt-1 block text-[24px] font-bold tracking-tight text-moss-ink">Những mùa hoa đầu tiên</span>
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-moss text-on-dark transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
          </span>
        </Link>
      </section>

      <CtaBand
        title="Cùng gieo một mùa hoa."
        body="Dù chị đang cần một khởi đầu mới hay bạn muốn trao cơ hội cho người khác, Đơm Hoa luôn sẵn lòng lắng nghe."
        primary={{ href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/du-an", label: "Đồng hành cùng dự án" }}
      />
    </>
  );
}
