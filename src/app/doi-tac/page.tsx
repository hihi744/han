import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { PageIntro, PhotoSlot } from "@/components/blocks";
import { PartnerForm } from "@/components/partner-form";
import { LinkButton, Pill, SectionHeading } from "@/components/ui";
import { partnerPackages, projectPhases } from "@/content/site";

export const metadata: Metadata = {
  title: "Đối tác và tài trợ",
  description:
    "Đồng hành cùng dự án “Trao cần câu, không trao con cá” của Đơm Hoa: đào tạo nghề gắn với việc làm cam kết trước cho phụ nữ mãn hạn tù tái hòa nhập cộng đồng.",
};

const targets = [
  { label: "Học viên mỗi lớp", value: "15", note: "phụ nữ mãn hạn tù" },
  { label: "Tốt nghiệp", value: "≥ 80%", note: "mục tiêu đợt 1" },
  { label: "Có việc làm sau 3 tháng", value: "≥ 70%", note: "mục tiêu đợt 1" },
  { label: "Còn làm việc sau 6 tháng", value: "≥ 60%", note: "mục tiêu đợt 1" },
];

const budget = [
  { item: "Tổng chi phí một lớp 15 học viên", value: "150 triệu", strong: false },
  { item: "Xưởng đối tác đóng góp (đồng tài trợ, phí giới thiệu, chiết khấu đơn hàng)", value: "58 triệu", strong: false },
  { item: "Cần vận động tài trợ", value: "92 triệu", strong: true },
];

const benefits = [
  "Được ghi nhận là đơn vị đồng hành trong tài liệu, báo cáo và truyền thông của dự án.",
  "Nhận báo cáo tiến độ và kết quả đầu ra: tỷ lệ tốt nghiệp, có việc làm, thu nhập của học viên.",
  "Được mời dự lễ khai giảng, tổng kết đợt học và các hoạt động liên quan.",
  "Khoản tài trợ dùng đúng mục đích, có chứng từ minh bạch, tuân thủ quy định về tài trợ hiện hành.",
];

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        title="Trao cần câu, không trao con cá."
        body="Phụ nữ mãn hạn tù thường bị từ chối vì lý lịch, thiếu tay nghề và không có thu nhập ngay khi ra trại. Dự án của Đơm Hoa đào tạo nghề gắn với việc làm đã cam kết trước, để học viên có thu nhập ngay khi tốt nghiệp."
        aside={
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <LinkButton href="#lien-he-doi-tac" variant="primary">
              Liên hệ hợp tác
            </LinkButton>
            <LinkButton href="#goi-tai-tro" variant="ghost">
              Xem gói tài trợ
            </LinkButton>
          </div>
        }
      />

      {/* Model */}
      <section className="container-site mt-12" aria-label="Mô hình ba bên">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-paper ring-1 ring-sprout-line lg:grid-cols-[1fr_1.2fr]">
          <PhotoSlot want="lớp may gia công" tone="dark" className="min-h-[300px]" />
          <div className="p-8 sm:p-12">
            <Pill tone="blossom">Đợt 1: may công nghiệp, may gia công</Pill>
            <h2 className="mt-5 text-[30px] text-moss-ink md:text-[40px]">Học nghề có việc làm chờ sẵn</h2>
            <p className="mt-4 text-ink-muted">
              Hợp tác ba bên giữa Đơm Hoa, một cơ sở dạy nghề và một xưởng may nhận học viên. Xưởng cam kết nhận tối thiểu 2/3 học viên đạt sát hạch, ký hợp đồng lao động đúng luật, có bảo hiểm.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-sprout-line pt-6">
              <div>
                <dt className="text-sm text-ink-muted">Thời gian</dt>
                <dd className="mt-1 font-medium">2 tháng học, 4 tháng đồng hành</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-muted">Sau tốt nghiệp</dt>
                <dd className="mt-1 font-medium">Làm tại xưởng, hoặc lập tổ gia công tự chủ có vay vốn</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="container-site mt-28" aria-labelledby="targets-title">
        <SectionHeading id="targets-title" title="Đo bằng việc làm, không đo bằng số buổi học" />
        <dl className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((t) => (
            <div key={t.label} className="flex flex-col rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line">
              <dt className="order-2 mt-3 font-medium text-moss-ink">{t.label}</dt>
              <dd className="tabular order-1 text-[48px] font-medium leading-none tracking-tight text-moss-ink">{t.value}</dd>
              <dd className="order-3 mt-1 text-sm text-ink-muted">{t.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Timeline */}
      <section className="container-site mt-28" aria-labelledby="timeline-title">
        <div className="on-dark rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
          <h2 id="timeline-title" className="text-[32px] text-on-dark md:text-[44px]">Một đợt học kéo dài sáu tháng</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {projectPhases.map((p, i) => (
              <li key={p.phase} className="relative border-t border-on-dark/20 pt-6">
                <span className="absolute -top-[7px] left-0 size-3 rounded-full bg-blossom" aria-hidden="true" />
                <p className="tabular text-sm text-on-dark-muted">
                  Giai đoạn {i}: {p.time}
                </p>
                <h3 className="mt-2 text-[22px] text-on-dark">{p.phase}</h3>
                <p className="mt-2 text-[15px] text-on-dark-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Budget + packages */}
      <section id="goi-tai-tro" className="container-site mt-28 scroll-mt-28" aria-labelledby="packages-title">
        <SectionHeading
          id="packages-title"
          title="Chọn cách bạn muốn đồng hành"
          intro="Một lớp 15 học viên cần 150 triệu đồng. Sau phần xưởng đối tác đóng góp, còn khoảng 92 triệu cần vận động, tương đương 6 triệu đồng cho mỗi học viên hoàn thành khóa học và có việc làm."
        />
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
          <table className="w-full text-left">
            <caption className="sr-only">Dự toán một lớp</caption>
            <tbody>
              {budget.map((b) => (
                <tr key={b.item} className={`border-t border-sprout-line first:border-t-0 ${b.strong ? "bg-blossom-tint" : ""}`}>
                  <th scope="row" className={`px-6 py-4 ${b.strong ? "font-semibold text-moss-ink" : "font-normal text-ink-muted"}`}>{b.item}</th>
                  <td className={`tabular whitespace-nowrap px-6 py-4 text-right ${b.strong ? "font-semibold text-moss-ink" : "font-medium"}`}>{b.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {partnerPackages.map((p) => (
            <li
              key={p.name}
              className={`flex flex-col rounded-[var(--radius-card)] p-7 ${
                "featured" in p && p.featured ? "on-dark bg-moss text-on-dark" : "bg-paper ring-1 ring-sprout-line"
              }`}
            >
              <h3 className={`text-[19px] ${"featured" in p && p.featured ? "text-on-dark" : "text-moss-ink"}`}>{p.name}</h3>
              <p className={`tabular mt-4 text-[26px] font-semibold tracking-tight ${"featured" in p && p.featured ? "text-blossom" : "text-moss-ink"}`}>{p.value}</p>
              <p className={`mt-3 text-[15px] ${"featured" in p && p.featured ? "text-on-dark-muted" : "text-ink-muted"}`}>{p.meaning}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <p key={b} className="flex gap-3">
              <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-moss" aria-hidden="true" />
              <span className="text-ink-muted">{b}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="lien-he-doi-tac" className="container-site mt-28 scroll-mt-28" aria-labelledby="partner-contact-title">
        <div className="grid gap-10 rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 id="partner-contact-title" className="text-[32px] text-moss-ink md:text-[40px]">
              Gửi đề nghị hợp tác
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Cho chúng tôi biết bạn muốn đồng hành theo cách nào. Đơm Hoa sẽ gửi đề án chi tiết và hẹn một buổi trao đổi.
            </p>
            <p className="mt-6 text-[15px] text-ink-muted">
              Để bảo vệ học viên, chúng tôi không chia sẻ danh tính hay lý lịch của từng người. Báo cáo gửi nhà tài trợ là số liệu tổng hợp.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
