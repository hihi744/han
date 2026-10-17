import type { Metadata } from "next";
import { CtaBand, Orbs, Photo } from "@/components/blocks";
import { stories, storyPhotos } from "@/content/site";

export const metadata: Metadata = {
  title: "Những mùa hoa đầu tiên",
  description: "Câu chuyện của những người phụ nữ đã bắt đầu lại cùng Đơm Hoa.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-6 pt-14 md:pt-20" aria-labelledby="stories-title">
        <Orbs variant="warm" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-full max-h-[340px] bg-petal-yellow [clip-path:polygon(0_0,70%_0,58%_100%,0_100%)]" />
        <div data-reveal className="container-site relative">
          <p className="text-[15px] font-semibold text-moss">Câu chuyện khách hàng</p>
          <h1 id="stories-title" className="shout mt-2 max-w-xl text-[42px] text-moss-ink md:text-[64px]">
            Những mùa hoa đầu tiên
          </h1>
        </div>
      </section>

      <div className="container-site mt-12 space-y-6">
        {stories.map((s, i) => {
          const long = s.quote.length > 300;
          return (
            <article
              key={`${s.who}-${s.role}`}
              data-reveal
              className={`grid overflow-hidden rounded-[var(--radius-panel)] bg-paper shadow-soft ring-1 ring-sprout-line ${
                long ? "lg:grid-cols-[1fr_1.4fr]" : "md:grid-cols-[1fr_1.6fr]"
              }`}
            >
              <Photo
                n={storyPhotos[i]}
                parallax={0.05}
                className={`min-h-[320px] ${i % 2 ? "md:order-2" : ""}`}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <figure className="flex flex-col justify-center p-8 sm:p-12">
                <blockquote>
                  <p className={long ? "text-[19px] font-light leading-[1.75] text-moss-ink" : "text-[28px] font-light leading-[1.3] tracking-[-0.03em] text-moss-ink md:text-[36px]"}>
                    “{s.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span aria-hidden="true" className="size-2.5 rotate-45 bg-petal-red" />
                  <span className="font-bold text-moss-ink">{s.who}</span>
                  <span className="text-ink-muted">{s.role}</span>
                </figcaption>
              </figure>
            </article>
          );
        })}
      </div>

      <CtaBand
        title="Câu chuyện tiếp theo có thể là của bạn."
        body="Cuộc trò chuyện đầu tiên là buổi tư vấn riêng với cán bộ tín dụng nữ, trong không gian kín đáo. Không cần mang theo gì cả."
        primary={{ href: "/lien-he#dang-ky", label: "Đăng ký tư vấn" }}
        secondary={{ href: "/tu-danh-gia", label: "Làm bài tự đánh giá" }}
      />
    </>
  );
}
