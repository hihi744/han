import type { Metadata } from "next";
import { CtaBand, PageIntro, PhotoSlot } from "@/components/blocks";
import { StageGlyph } from "@/components/petals";
import { SectionHeading, Tbc } from "@/components/ui";
import { journey, org } from "@/content/site";

export const metadata: Metadata = {
  title: "Về Đơm Hoa",
  description:
    "Đơm Hoa là tổ chức tài chính vi mô đồng hành cùng phụ nữ đã chấp hành xong án phạt tù, giúp họ ổn định cuộc sống và tự chủ kinh tế.",
};

const legal = [
  {
    name: "Luật Các tổ chức tín dụng số 32/2024/QH15",
    note: "Tổ chức tài chính vi mô là tổ chức tín dụng, có giấy phép của Ngân hàng Nhà nước, được cho vay bằng đồng Việt Nam và nhận tiết kiệm bắt buộc.",
  },
  {
    name: "Nghị định 162/2024/NĐ-CP",
    note: "Điều kiện cấp phép và chủ sở hữu. Đơm Hoa liên kết với Hội Liên hiệp Phụ nữ Việt Nam.",
  },
  {
    name: "Thông tư 54/2025/TT-NHNN",
    note: "Quy định hoạt động của tổ chức tài chính vi mô, bao gồm điều kiện về tiết kiệm bắt buộc.",
  },
  {
    name: "Luật Bảo vệ dữ liệu cá nhân 2025",
    note: "Thông tin án tích là dữ liệu nhạy cảm, được bảo mật và chỉ dùng cho mục đích đã thông báo.",
  },
  {
    name: "Quyết định 22/2023/QĐ-TTg",
    note: "Tín dụng chính sách cho người chấp hành xong án phạt tù. Đơm Hoa dùng làm căn cứ để phối hợp và giới thiệu, không phải nguồn vốn của Đơm Hoa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Đợi một mùa, nở một đời."
        body="Đơm Hoa gợi khoảnh khắc một cái cây, sau bao ngày âm thầm tích nhựa sống, cuối cùng bung nở những bông hoa đầu tiên. Cái tên không nhìn về những gì đã qua, mà hướng về khoảnh khắc nở rộ đang chờ mỗi người phụ nữ."
      />

      <section className="container-site mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]" aria-label="Tầm nhìn và sứ mệnh">
        <div className="on-dark rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
          <h2 className="text-[22px] text-blossom">Tầm nhìn</h2>
          <p className="mt-4 text-[22px] leading-snug text-on-dark sm:text-[28px]">
            Trở thành tổ chức tài chính vi mô tiên phong tại Việt Nam, là điểm tựa tin cậy giúp những người phụ nữ từng lầm lỡ có cơ hội thứ hai để ổn định cuộc sống, tự chủ kinh tế và viết tiếp trang mới theo cách riêng của mình.
          </p>
          <h2 className="mt-12 text-[22px] text-blossom">Sứ mệnh</h2>
          <p className="mt-4 text-lg text-on-dark-muted">
            Đồng hành cùng những người phụ nữ đã lầm lỡ gây dựng lại cuộc sống bằng nguồn vốn nhỏ, thủ tục đơn giản, kiến thức, việc làm và sự thấu hiểu, để mỗi người tự tay vun đắp sinh kế và khẳng định giá trị bản thân trong cộng đồng.
          </p>
        </div>
        <PhotoSlot want="đội ngũ Đơm Hoa" tone="light" className="min-h-[320px] rounded-[var(--radius-panel)]" />
      </section>

      <section className="container-site mt-28" aria-labelledby="values-title">
        <SectionHeading
          id="values-title"
          title="Bốn giá trị chúng tôi gìn giữ"
          intro="Như một bông hoa đi từ hạt mầm đến ngày nở rộ, mỗi chặng đường của khách hàng cũng là một giá trị của Đơm Hoa."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {journey.map((s) => (
            <li key={s.key} className="flex gap-6 rounded-[var(--radius-card)] bg-paper p-8 ring-1 ring-sprout-line">
              <StageGlyph stage={s.key} className="size-14 shrink-0" />
              <div>
                <h3 className="text-[24px] text-moss-ink">
                  {s.stage}: {s.value}
                </h3>
                <p className="mt-1 font-medium text-blossom-deep">{s.promise}</p>
              </div>
            </li>
          ))}
        </ul>
        <figure className="mx-auto mt-20 max-w-3xl text-center">
          <blockquote className="text-[28px] font-medium leading-snug tracking-tight text-moss-ink md:text-[38px]">
            “{org.philosophy}”
          </blockquote>
          <figcaption className="mt-5 text-ink-muted">Triết lý cốt lõi của Đơm Hoa</figcaption>
        </figure>
      </section>

      <section className="container-site mt-28" aria-labelledby="who-title">
        <div className="grid gap-10 rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 id="who-title" className="text-[32px] text-moss-ink md:text-[40px]">
            Chúng tôi đồng hành cùng ai
          </h2>
          <div className="space-y-5 text-lg text-ink-muted">
            <p>
              Phụ nữ đã chấp hành xong án phạt tù, có nhu cầu tự tạo việc làm, khởi nghiệp nhỏ hoặc phát triển kinh tế gia đình. Chúng tôi ưu tiên người đang mang thai, nuôi con nhỏ dưới 36 tháng tuổi, mẹ đơn thân và người chăm sóc chính trong gia đình.
            </p>
            <p>
              Các em gái tuổi vị thành niên từng vi phạm pháp luật cũng được hỗ trợ theo cơ chế riêng, có người bảo hộ đi cùng.
            </p>
          </div>
        </div>
      </section>

      <section id="phap-ly" className="container-site mt-28 scroll-mt-28" aria-labelledby="legal-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <div>
            <h2 id="legal-title" className="text-[32px] text-moss-ink md:text-[40px]">
              Hoạt động minh bạch, đúng luật
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Đơm Hoa là tổ chức tài chính vi mô, chịu sự giám sát của Ngân hàng Nhà nước Việt Nam.
            </p>
            <dl className="mt-8 space-y-4 text-[15px]">
              <div>
                <dt className="text-ink-muted">Giấy phép hoạt động</dt>
                <dd className="mt-1 font-medium text-moss-ink"><Tbc>{org.license}</Tbc></dd>
              </div>
              <div>
                <dt className="text-ink-muted">Đơn vị liên kết</dt>
                <dd className="mt-1 font-medium text-moss-ink"><Tbc>Hội Liên hiệp Phụ nữ Việt Nam</Tbc></dd>
              </div>
            </dl>
          </div>
          <ul className="divide-y divide-sprout-line border-y border-sprout-line">
            {legal.map((l) => (
              <li key={l.name} className="py-5">
                <h3 className="text-[18px] text-moss-ink">{l.name}</h3>
                <p className="mt-1 text-ink-muted">{l.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Cùng gieo một mùa hoa."
        body="Dù bạn đang cần một khởi đầu mới hay muốn trao cơ hội cho người khác, Đơm Hoa đều có chỗ cho bạn."
        primary={{ href: "/dang-ky", label: "Tôi cần tư vấn vay" }}
        secondary={{ href: "/doi-tac", label: "Tôi muốn đồng hành" }}
      />
    </>
  );
}
