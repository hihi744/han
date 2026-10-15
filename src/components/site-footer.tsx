import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/site";
import { buttonClass } from "./ui";

// Footer columns as listed in the official content document.
const columns = [
  {
    title: "Về Đơm Hoa",
    links: [
      { href: "/gioi-thieu", label: "Giới thiệu" },
      { href: "/gioi-thieu#tam-nhin", label: "Tầm nhìn – Sứ mệnh" },
      { href: "/gioi-thieu#gia-tri", label: "Giá trị cốt lõi" },
      { href: "/gioi-thieu/cau-chuyen", label: "Câu chuyện khách hàng" },
    ],
  },
  {
    title: "Dịch vụ",
    links: [
      { href: "/san-pham/tai-chinh", label: "Sản phẩm vay vốn" },
      { href: "/san-pham/tai-chinh#tiet-kiem", label: "Tiết kiệm tự nguyện" },
      { href: "/tu-danh-gia", label: "Công cụ tự đánh giá" },
      { href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" },
    ],
  },
  {
    title: "Dành cho đối tác",
    links: [
      { href: "/du-an", label: "Dự án “Hạt mầm trong tay”" },
      { href: "/du-an#tai-tro", label: "Kêu gọi tài trợ" },
      { href: "/du-an#ho-so", label: "Hồ sơ dự án" },
      { href: "/lien-he#doi-tac", label: "Liên hệ hợp tác" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-paper">
      <div className="container-site">
        {/* Two clear ways in, echoing the reference footer's "support us" block */}
        <div className="grid gap-8 border-t border-sprout-line py-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <Image src="/brand/dom-hoa-logo.png" alt="Đơm Hoa" width={827} height={180} className="h-12 w-auto sm:h-14" />
            <p className="mt-5 max-w-md text-ink-muted">{org.philosophy}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
            <p className="text-[22px] font-bold tracking-tight text-moss-ink sm:mr-4">Bắt đầu cùng Đơm Hoa</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/lien-he#dang-ky" className={buttonClass("primary")}>
                Đăng ký tư vấn
              </Link>
              <Link href="/du-an#tai-tro" className={buttonClass("blossom")}>
                Đồng hành tài trợ
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-t border-sprout-line py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <address className="not-italic text-[15px] leading-7 text-ink-muted">
            <span className="block font-semibold text-moss-ink">{org.fullName}</span>
            <span className="block">Địa chỉ: {org.address}</span>
            <span className="block">
              Hotline:{" "}
              <a href={org.phoneHref} className="font-medium text-moss-ink hover:text-blossom-deep">
                {org.phone}
              </a>
            </span>
            <span className="block">
              Email:{" "}
              <a href={`mailto:${org.email}`} className="font-medium text-moss-ink hover:text-blossom-deep">
                {org.email}
              </a>
            </span>
            <span className="mt-2 block">Giờ làm việc:</span>
            {org.hours.map((h) => (
              <span key={h} className="block">
                {h}
              </span>
            ))}
          </address>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[15px] font-semibold tracking-normal text-moss-ink">{col.title}</h2>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 text-[15px] text-ink-muted hover:text-blossom-deep">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-sprout-line py-6 text-sm text-ink-muted md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {org.fullName} ({org.shortName})
          </p>
          <p>Hoạt động theo Luật Các tổ chức tín dụng 2024, liên kết với Hội Liên hiệp Phụ nữ Việt Nam.</p>
        </div>
      </div>
    </footer>
  );
}
