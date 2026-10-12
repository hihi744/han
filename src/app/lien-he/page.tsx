import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, EnvelopeSimple, Handshake, MapPin, Phone, Plant } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/blocks";
import { Tbc } from "@/components/ui";
import { org } from "@/content/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Đơm Hoa: đăng ký tư vấn vay vốn, học nghề, hoặc đề nghị hợp tác và tài trợ.",
};

const paths = [
  {
    href: "/dang-ky",
    icon: Plant,
    title: "Tôi cần tư vấn vay hoặc học nghề",
    body: "Để lại tên và số điện thoại. Cán bộ Đơm Hoa sẽ gọi lại trong 2 ngày làm việc, vào giờ bạn chọn. Không hỏi về quá khứ.",
    cta: "Đăng ký tư vấn",
    dark: true,
  },
  {
    href: "/doi-tac#lien-he-doi-tac",
    icon: Handshake,
    title: "Tôi là doanh nghiệp hoặc nhà tài trợ",
    body: "Tài trợ học viên, nhận học viên vào làm, hoặc hợp tác đào tạo nghề. Chúng tôi gửi đề án chi tiết qua email.",
    cta: "Gửi đề nghị hợp tác",
    dark: false,
  },
];

export default function ContactPage() {
  const details = [
    { icon: MapPin, label: "Địa chỉ", value: org.address },
    { icon: Phone, label: "Điện thoại", value: org.phone },
    { icon: EnvelopeSimple, label: "Email", value: org.email },
    { icon: Clock, label: "Giờ làm việc", value: "[Thứ Hai – Thứ Sáu, 8:00 – 17:00]" },
  ];
  return (
    <>
      <PageIntro
        title="Liên hệ với Đơm Hoa"
        body="Dù bạn đang cần một khởi đầu mới hay muốn trao cơ hội cho người khác, hãy chọn lối phù hợp với bạn bên dưới."
      />

      <section className="container-site mt-10 grid gap-5 md:grid-cols-2" aria-label="Bạn cần gì">
        {paths.map(({ href, icon: Icon, title, body, cta, dark }) => (
          <Link
            key={href}
            href={href}
            className={`group flex flex-col rounded-[var(--radius-panel)] p-8 transition-shadow duration-300 sm:p-10 ${
              dark ? "on-dark bg-moss-deep text-on-dark" : "bg-paper ring-1 ring-sprout-line hover:shadow-[0_20px_50px_-30px_rgba(27,38,23,0.4)]"
            }`}
          >
            <span className={`grid size-12 place-items-center rounded-full ${dark ? "bg-blossom text-moss-ink" : "bg-blossom-tint text-blossom-deep"}`}>
              <Icon size={24} aria-hidden="true" />
            </span>
            <h2 className={`mt-8 text-[26px] md:text-[30px] ${dark ? "text-on-dark" : "text-moss-ink"}`}>{title}</h2>
            <p className={`mt-3 ${dark ? "text-on-dark-muted" : "text-ink-muted"}`}>{body}</p>
            <span className={`mt-auto inline-flex items-center gap-1.5 pt-8 font-semibold ${dark ? "text-blossom" : "text-moss group-hover:text-blossom-deep"}`}>
              {cta} <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </section>

      <section className="container-site mt-20" aria-labelledby="details-title">
        <div className="grid gap-10 rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="details-title" className="text-[32px] text-moss-ink md:text-[40px]">Thông tin liên hệ</h2>
            <p className="mt-4 text-lg text-ink-muted">
              Mọi cuộc gọi và email được giữ kín. Chỉ cán bộ phụ trách được xem thông tin bạn gửi.
            </p>
            <p className="mt-6"><Tbc>Thông tin liên hệ đang chờ cập nhật.</Tbc></p>
          </div>
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <dt className="flex items-center gap-2 text-sm font-medium text-ink-muted">
                  <Icon size={20} className="text-moss" aria-hidden="true" /> {label}
                </dt>
                <dd className="mt-2 text-lg font-medium text-moss-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
