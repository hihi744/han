import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "Đơm Hoa | Tài chính vi mô cho phụ nữ bắt đầu lại",
    template: "%s | Đơm Hoa",
  },
  description:
    "Đơm Hoa cho vay vốn nhỏ, dạy nghề và đồng hành cùng phụ nữ bắt đầu lại sau thời gian chấp hành án. Thủ tục đơn giản, không phí hồ sơ, thông tin được giữ kín.",
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
        <SiteHeader />
        <main id="noi-dung" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
