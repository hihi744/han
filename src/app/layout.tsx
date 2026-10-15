import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Enhance } from "@/components/enhance";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Đơm Hoa | Nảy mầm hy vọng, đơm hoa cuộc đời",
    template: "%s | Đơm Hoa",
  },
  description:
    "Tổ chức Tài chính Vi mô Đơm Hoa trao nguồn vốn nhỏ không cần tài sản thế chấp, kiến thức kinh doanh và sự đồng hành thấu hiểu cho phụ nữ đã từng lầm lỡ và đang khao khát làm lại cuộc đời.",
  openGraph: {
    locale: "vi_VN",
    siteName: "Đơm Hoa",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <a
          href="#noi-dung"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-moss focus:px-5 focus:py-3 focus:text-on-dark"
        >
          Bỏ qua, đến nội dung chính
        </a>
        <p className="on-dark bg-moss-ink px-4 py-2 text-center text-[14px] text-on-dark-muted">
          Dự án “Hạt mầm trong tay” đang kêu gọi tài trợ đợt 1.{" "}
          <Link href="/du-an#tai-tro" className="font-semibold text-petal-yellow underline underline-offset-4">
            Tìm hiểu thêm
          </Link>
        </p>
        <SiteHeader />
        <main id="noi-dung" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <Enhance />
      </body>
    </html>
  );
}
