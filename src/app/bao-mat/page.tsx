import type { Metadata } from "next";
import { PageIntro } from "@/components/blocks";
import { Tbc } from "@/components/ui";
import { privacyPromises } from "@/content/site";

export const metadata: Metadata = {
  title: "Cam kết bảo mật",
  description: "Cách Đơm Hoa thu thập, sử dụng và bảo vệ thông tin của khách hàng, học viên và đối tác.",
};

const sections = [
  {
    title: "Chúng tôi thu thập thông tin gì",
    body: "Khi bạn đăng ký tư vấn: tên thường gọi, số điện thoại, tỉnh hoặc thành phố, giờ thuận tiện và nhu cầu của bạn. Chúng tôi không hỏi về án tích trên trang web. Những thông tin cần cho hồ sơ vay chỉ được hỏi trực tiếp, khi bạn đã đồng ý.",
  },
  {
    title: "Thông tin được dùng để làm gì",
    body: "Chỉ để cán bộ phụ trách liên hệ, tư vấn và thẩm định khoản vay hoặc khóa học cho chính bạn. Không dùng cho quảng cáo, không bán hay chia sẻ cho bên thứ ba khi chưa có đồng ý của bạn, trừ khi pháp luật yêu cầu.",
  },
  {
    title: "Thông tin nhạy cảm",
    body: "Thông tin án tích là dữ liệu cá nhân nhạy cảm theo Luật Bảo vệ dữ liệu cá nhân 2025. Thông tin này được lưu tách biệt, chỉ người có thẩm quyền được xem, và không bao giờ được nêu trong họp nhóm. Hồ sơ tham vấn tâm lý được tách khỏi hồ sơ tín dụng.",
  },
  {
    title: "Với nhà tài trợ và đối tác",
    body: "Báo cáo gửi nhà tài trợ là số liệu tổng hợp. Câu chuyện hoặc hình ảnh của học viên chỉ được dùng khi chính người đó đồng ý bằng văn bản, và họ có thể rút lại đồng ý bất cứ lúc nào.",
  },
  {
    title: "Quyền của bạn",
    body: "Bạn có quyền xem, sửa hoặc yêu cầu xóa thông tin của mình, và rút lại sự đồng ý. Hãy liên hệ cán bộ phụ trách hoặc gửi yêu cầu qua thông tin ở chân trang.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        title="Cam kết bảo mật"
        body="Câu chuyện của bạn là của riêng bạn. Đây là cách Đơm Hoa giữ lời hứa đó."
      />
      <section className="container-site mt-10" aria-label="Bốn lời hứa">
        <ul className="grid gap-5 sm:grid-cols-2">
          {privacyPromises.map((p) => (
            <li key={p.title} className="rounded-[var(--radius-card)] bg-sprout p-7">
              <h2 className="text-[20px] text-moss-ink">{p.title}</h2>
              <p className="mt-2 text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container-site mt-20 max-w-3xl" aria-label="Chi tiết">
        <p className="mb-10">
          <Tbc note="Cần rà soát pháp lý">Nội dung dưới đây là bản nháp, cần được bộ phận pháp chế rà soát trước khi công bố.</Tbc>
        </p>
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-[26px] text-moss-ink">{s.title}</h2>
              <p className="mt-3 text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
