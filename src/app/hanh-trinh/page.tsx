import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageIntro, PhotoSlot } from "@/components/blocks";
import { StageGlyph } from "@/components/petals";
import { journey } from "@/content/site";

export const metadata: Metadata = {
  title: "Hành trình Gieo, Ươm, Vun, Nở",
  description:
    "Bốn chặng đồng hành của Đơm Hoa: Điểm tựa, Học viện Đơm Hoa, Vườn Ươm Sinh Kế và Đồng hành Nở Hoa. Vốn, kiến thức và việc làm đi cùng nhau.",
};

const modules = [
  { code: "A", title: "Quản lý tài chính cá nhân", body: "Ngân sách, tiết kiệm, hiểu lãi suất và nhận diện tín dụng đen." },
  { code: "B", title: "Khởi nghiệp và kinh doanh nhỏ", body: "Giá bán, lợi nhuận, điểm hòa vốn và dòng tiền để trả nợ." },
  { code: "C", title: "Kỹ năng nghề nghiệp", body: "Hồ sơ, phỏng vấn, quyền lợi lao động và bảo hiểm xã hội." },
  { code: "D", title: "Đào tạo nghề theo nhu cầu", body: "May mặc, chế biến thực phẩm, bán hàng, kinh doanh trực tuyến." },
];

const photoWants: Record<string, string> = {
  gieo: "buổi trò chuyện, chụp từ phía sau",
  uom: "lớp học nhỏ, chụp tay",
  vun: "xưởng thực hành",
  no: "quầy hàng của học viên",
};

export default function JourneyPage() {
  return (
    <>
      <PageIntro
        title="Từ hạt mầm đến ngày nở rộ"
        body="Như một bông hoa, hành trình của mỗi người ở Đơm Hoa đi qua bốn chặng. Bạn bắt đầu ở chặng phù hợp với mình, và tham gia tư vấn tâm lý không bao giờ là điều kiện để được vay."
      />

      <nav aria-label="Các chặng" className="sticky top-[84px] z-30 mt-10 px-3">
        <ol className="mx-auto flex max-w-fit gap-1 overflow-x-auto rounded-full bg-paper/90 p-1.5 ring-1 ring-sprout-line backdrop-blur-md">
          {journey.map((s, i) => (
            <li key={s.key}>
              <a href={`#${s.key}`} className="flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full px-4 text-[15px] font-medium text-ink-muted hover:bg-sprout hover:text-moss-ink">
                <StageGlyph stage={s.key} className="size-5" />
                <span className="tabular text-ink-muted">{i + 1}.</span> {s.stage}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="container-site mt-12 space-y-5">
        {journey.map((s, i) => (
          <section
            key={s.key}
            id={s.key}
            aria-labelledby={`${s.key}-title`}
            className="scroll-mt-40 grid overflow-hidden rounded-[var(--radius-panel)] bg-paper ring-1 ring-sprout-line lg:grid-cols-2"
          >
            <div className={`p-8 sm:p-12 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-4">
                <StageGlyph stage={s.key} className="size-16" />
                <div>
                  <p className="tabular text-sm font-medium text-ink-muted">Chặng {i + 1}</p>
                  <p className="font-medium text-blossom-deep">{s.value}</p>
                </div>
              </div>
              <h2 id={`${s.key}-title`} className="mt-8 text-[40px] text-moss-ink md:text-[52px]">
                {s.stage}
              </h2>
              <p className="mt-1 text-xl font-medium text-moss">{s.product}</p>
              <p className="mt-5 text-lg text-ink-muted">{s.summary}</p>
              <ul className="mt-8 space-y-3">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check size={20} weight="bold" className="mt-1 shrink-0 text-moss" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-l-2 border-blossom pl-4 text-lg font-medium text-moss-ink">{s.promise}</p>
            </div>
            <PhotoSlot want={photoWants[s.key]} tone={i % 2 ? "light" : "dark"} className="min-h-[300px]" />
          </section>
        ))}
      </div>

      <section className="container-site mt-28" aria-labelledby="academy-title">
        <div className="on-dark rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark sm:p-12">
          <h2 id="academy-title" className="max-w-2xl text-[32px] text-on-dark md:text-[44px]">
            Học viện Đơm Hoa: bốn mô-đun, học bằng tay
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-on-dark-muted">
            Nhóm nhỏ, nhiều thực hành, tài liệu dễ hiểu. Đánh giá bằng bài tập thật như lập ngân sách, tính giá thành và lên kế hoạch kinh doanh.
          </p>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-on-dark/12 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <li key={m.code} className="bg-moss-deep p-7">
                <span className="grid size-10 place-items-center rounded-full bg-blossom text-[15px] font-semibold text-moss-ink" aria-hidden="true">
                  {m.code}
                </span>
                <h3 className="mt-6 text-[20px] text-on-dark">
                  <span className="sr-only">Mô-đun {m.code}: </span>
                  {m.title}
                </h3>
                <p className="mt-2 text-[15px] text-on-dark-muted">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Chưa sẵn sàng vay? Hãy bắt đầu bằng một lớp học."
        body="Bạn chưa có việc làm hay chưa có kinh nghiệm quản lý vốn cũng không sao. Hãy để lại số điện thoại, chúng tôi sẽ tìm cùng bạn chặng phù hợp để bắt đầu."
        primary={{ href: "/dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/san-pham", label: "Xem khoản vay" }}
      />
    </>
  );
}
