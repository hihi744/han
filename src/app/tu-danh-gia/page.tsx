import type { Metadata } from "next";
import { LockKey } from "@phosphor-icons/react/dist/ssr";
import { Quiz } from "@/components/quiz";
import { CheckList, Orbs } from "@/components/blocks";
import { assessment } from "@/content/site";

export const metadata: Metadata = {
  title: "Công cụ tự đánh giá",
  description:
    "Kiểm tra nhanh mức độ phù hợp với các gói hỗ trợ của Đơm Hoa trong khoảng 2 phút. Không hỏi thông tin cá nhân, không lưu câu trả lời.",
};

const levelTone = ["bg-petal-yellow", "bg-sprout", "bg-mist"];

export default function AssessmentPage() {
  const { basics } = assessment;
  return (
    <>
      <section className="relative isolate overflow-hidden pb-4 pt-14 md:pt-20" aria-labelledby="assessment-title">
        <Orbs variant="cool" />
        <div data-reveal className="container-site relative">
          <p className="text-[15px] font-semibold text-blossom-deep">Công cụ tự đánh giá</p>
          <h1 id="assessment-title" className="mt-2 max-w-4xl text-[38px] font-bold leading-[1.1] tracking-[-0.035em] text-moss-ink md:text-[60px]">
            {assessment.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted">{assessment.intro}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-sprout px-4 py-2 text-[15px] font-medium text-moss">
            <LockKey size={18} aria-hidden="true" /> Không hỏi thông tin cá nhân. Không lưu câu trả lời.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <section className="container-site mt-16" aria-labelledby="buoc-1-title">
        <h2 id="buoc-1-title" className="text-[26px] text-moss-ink md:text-[32px]">
          <span className="text-blossom-deep">Bước 1.</span> Những điều kiện cơ bản
        </h2>
        <p className="mt-3 max-w-3xl text-ink-muted">{basics.intro}</p>
        <div data-reveal-group="120" className="mt-8 grid gap-5 lg:grid-cols-2">
          <div data-reveal className="rounded-[var(--radius-panel)] bg-paper p-7 shadow-soft ring-1 ring-sprout-line sm:p-9">
            <h3 className="text-[20px] font-bold text-moss-ink">Cần có</h3>
            <CheckList items={basics.required} className="mt-5 text-[16px]" />
          </div>
          <div data-reveal className="rounded-[var(--radius-panel)] bg-sprout p-7 sm:p-9">
            <h3 className="text-[20px] font-bold text-moss-ink">Được ưu tiên hơn nếu</h3>
            <CheckList items={basics.priority} className="mt-5 text-[16px]" />
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section id="buoc-2" className="container-site mt-16 scroll-mt-32" aria-labelledby="buoc-2-title">
        <h2 id="buoc-2-title" className="text-[26px] text-moss-ink md:text-[32px]">
          <span className="text-blossom-deep">Bước 2.</span> Phiếu đánh giá thử nghiệm
        </h2>
        <p className="mt-3 max-w-3xl text-ink-muted">{assessment.quizIntro}</p>
        <div className="mx-auto mt-10 max-w-3xl">
          <Quiz />
        </div>
      </section>

      {/* Step 3 */}
      <section className="container-site mt-20" aria-labelledby="buoc-3-title">
        <h2 id="buoc-3-title" className="text-[26px] text-moss-ink md:text-[32px]">
          <span className="text-blossom-deep">Bước 3.</span> Kết quả
        </h2>
        <p className="mt-3 max-w-3xl text-ink-muted">Kết quả theo tổng điểm của 5 câu trả lời:</p>
        <ol data-reveal-group="100" className="mt-8 grid gap-4 md:grid-cols-3">
          {assessment.results.map((r, i) => (
            <li key={r.title} data-reveal className={`rounded-[var(--radius-card)] p-6 ${levelTone[i]}`}>
              <p className="tabular text-[14px] font-bold text-moss">
                Mức {i + 1}: {r.range}
              </p>
              <h3 className="mt-2 text-[19px] font-bold text-moss-ink">{r.title}</h3>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-[15px] text-ink-muted">{assessment.resultNote}</p>
      </section>
    </>
  );
}
