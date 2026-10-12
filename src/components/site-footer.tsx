import Image from "next/image";
import Link from "next/link";
import { org } from "@/content/site";

const columns = [
  {
    title: "Dành cho bạn",
    links: [
      { href: "/san-pham", label: "Sản phẩm tài chính" },
      { href: "/san-pham#tinh-thu", label: "Tính thử khoản vay" },
      { href: "/hanh-trinh", label: "Sản phẩm phi tài chính" },
      { href: "/dang-ky", label: "Đăng ký tư vấn" },
    ],
  },
  {
    title: "Hành trình",
    links: [
      { href: "/hanh-trinh#gieo", label: "Gieo: Điểm tựa" },
      { href: "/hanh-trinh#uom", label: "Ươm: Học viện" },
      { href: "/hanh-trinh#vun", label: "Vun: Vườn Ươm Sinh Kế" },
      { href: "/hanh-trinh#no", label: "Nở: Đồng hành" },
    ],
  },
  {
    title: "Đối tác",
    links: [
      { href: "/doi-tac", label: "Dự án Trao cần câu" },
      { href: "/doi-tac#goi-tai-tro", label: "Gói tài trợ" },
      { href: "/doi-tac#lien-he-doi-tac", label: "Liên hệ hợp tác" },
    ],
  },
  {
    title: "Đơm Hoa",
    links: [
      { href: "/ve-chung-toi", label: "Về chúng tôi" },
      { href: "/ve-chung-toi#phap-ly", label: "Pháp lý" },
      { href: "/bao-mat", label: "Cam kết bảo mật" },
      { href: "/lien-he", label: "Liên hệ" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-sprout-line bg-paper">
      <div className="container-site py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image src="/brand/dom-hoa-logo.png" alt="Đơm Hoa" width={406} height={90} className="h-10 w-auto" />
            <p className="mt-5 text-ink-muted">{org.philosophy}</p>
          </div>
          <address className="not-italic text-[15px] leading-7 text-ink-muted md:text-right">
            <span className="block font-medium text-moss-ink">{org.fullName}</span>
            <span className="block">{org.address}</span>
            <span className="block">Điện thoại: {org.phone}</span>
            <span className="block">Email: {org.email}</span>
          </address>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-sprout-line pt-12 md:grid-cols-4">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[15px] font-medium tracking-normal text-ink-muted">{col.title}</h2>
              <ul className="mt-4 space-y-1">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1.5 text-[15px] text-moss-ink hover:text-blossom-deep">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-sprout-line pt-6 text-sm text-ink-muted md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {org.fullName}. Giấy phép: {org.license}.</p>
          <p>Hoạt động dưới sự giám sát của Ngân hàng Nhà nước Việt Nam.</p>
        </div>
      </div>
    </footer>
  );
}
