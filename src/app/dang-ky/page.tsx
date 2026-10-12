import type { Metadata } from "next";
import { Suspense } from "react";
import { EyeSlash, Phone, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Đăng ký tư vấn vay",
  description: "Để lại tên và số điện thoại, cán bộ Đơm Hoa sẽ gọi lại vào giờ bạn chọn. Không hỏi về quá khứ, không cần giấy tờ ở bước đầu.",
};

const reassurance = [
  { icon: Phone, title: "Cán bộ gọi lại trong 2 ngày", body: "Vào đúng khung giờ bạn chọn." },
  { icon: EyeSlash, title: "Không hỏi về quá khứ", body: "Chỉ hỏi những gì cần để giúp bạn vay và học nghề." },
  { icon: UserCircle, title: "Không cam kết gì", body: "Tư vấn miễn phí. Bạn quyết định có vay hay không." },
];

export default function EnquiryPage() {
  return (
    <section className="container-site pt-14 md:pt-20" aria-labelledby="enquiry-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div>
          <h1 id="enquiry-title" className="text-[40px] text-moss-ink md:text-[56px]">
            Bắt đầu từ một cuộc gọi
          </h1>
          <p className="mt-5 text-lg text-ink-muted">
            Ba bước ngắn, mất khoảng hai phút. Sau đó cán bộ Đơm Hoa sẽ gọi lại, lắng nghe và cùng bạn tìm bước đầu tiên phù hợp.
          </p>
          <ul className="mt-10 space-y-6">
            {reassurance.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sprout text-moss">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-moss-ink">{title}</p>
                  <p className="text-[15px] text-ink-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Suspense fallback={<div className="min-h-[520px] rounded-[var(--radius-panel)] bg-paper ring-1 ring-sprout-line" />}>
          <EnquiryForm />
        </Suspense>
      </div>
    </section>
  );
}
