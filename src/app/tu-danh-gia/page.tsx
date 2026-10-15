import type { Metadata } from "next";
import Link from "next/link";
import { LockKey } from "@phosphor-icons/react/dist/ssr";
import { SelfAssessment } from "@/components/self-assessment";
import { buttonClass } from "@/components/ui";
import { assessment } from "@/content/site";

export const metadata: Metadata = {
  title: "Công cụ tự đánh giá",
  description:
    "Kiểm tra nhanh mức độ phù hợp với các gói hỗ trợ của Đơm Hoa trong khoảng 2 phút. Không hỏi thông tin cá nhân, không lưu câu trả lời.",
};

const levelTone: Record<string, string> = {
  "Bắt buộc": "bg-moss text-on-dark",
  "Ưu tiên cao": "bg-petal-orange text-moss-ink",
  "Ưu tiên": "bg-sprout text-moss",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="container-site pt-14 md:pt-20" aria-labelledby="assessment-title">
        <p className="text-[15px] font-semibold text-blossom-deep">Công cụ tự đánh giá</p>
        <h1 id="assessment-title" className="mt-2 max-w-4xl text-[36px] text-moss-ink md:text-[52px]">
          {assessment.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-muted">{assessment.intro}</p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-sprout px-4 py-2 text-[15px] font-medium text-moss">
          <LockKey size={18} aria-hidden="true" /> Không hỏi thông tin cá nhân. Không lưu câu trả lời.
        </p>
      </section>

      {/* Step 1 */}
      <section className="container-site mt-16" aria-labelledby="buoc-1-title">
        <h2 id="buoc-1-title" className="text-[26px] text-moss-ink md:text-[32px]">
          <span className="text-blossom-deep">Bước 1.</span> Kiểm tra điều kiện bắt buộc
        </h2>
        <div className="mt-6 overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead>
              <tr className="text-sm text-ink-muted">
                <th scope="col" className="px-5 py-3 font-medium">Tiêu chí</th>
                <th scope="col" className="px-5 py-3 font-medium">Nội dung đánh giá</th>
                <th scope="col" className="px-5 py-3 font-medium">Mức độ</th>
              </tr>
            </thead>
            <tbody>
              {assessment.criteria.map((c) => (
                <tr key={c.name} className="border-t border-sprout-line align-top">
                  <th scope="row" className="px-5 py-4 font-semibold text-moss-ink">{c.name}</th>
                  <td className="px-5 py-4 text-ink-muted">{c.body}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-[13px] font-semibold ${levelTone[c.level]}`}>{c.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Step 2 */}
      <section id="buoc-2" className="container-site mt-16 scroll-mt-32" aria-labelledby="buoc-2-title">
        <h2 id="buoc-2-title" className="text-[26px] text-moss-ink md:text-[32px]">
          <span className="text-blossom-deep">Bước 2.</span> Phiếu đánh giá thử nghiệm (thang 100 điểm)
        </h2>
        <p className="mt-3 max-w-3xl text-ink-muted">
          Mỗi lựa chọn dưới đây đã được gán sẵn số điểm. Chọn xong 5 tiêu chí, hệ thống cộng tổng điểm và hiển thị kết quả.
        </p>
        <div className="mt-8">
          <SelfAssessment />
        </div>
      </section>

      {/* Step 3 */}
      <section className="container-site mt-20" aria-labelledby="buoc-3-title">
        <div className="rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-12">
          <h2 id="buoc-3-title" className="text-[26px] text-moss-ink md:text-[32px]">
            <span className="text-blossom-deep">Bước 3.</span> Kết quả và bước tiếp theo
          </h2>
          <p className="mt-4 font-semibold text-moss-ink">Quy trình ra quyết định:</p>
          <ol className="mt-3 space-y-2 text-ink-muted">
            {assessment.decision.map((d, i) => (
              <li key={d} className="flex gap-3">
                <span className="tabular font-bold text-moss">{i + 1}.</span>
                {d}
              </li>
            ))}
          </ol>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {assessment.outcomes.map((o) => (
              <div key={o.title} className="flex flex-col rounded-[var(--radius-card)] bg-paper p-6">
                <h3 className="text-[20px] text-moss-ink">{o.title}</h3>
                <p className="mt-2 text-ink-muted">{o.body}</p>
                <Link href={o.action.href} className={buttonClass("primary", "mt-6 self-start")}>
                  {o.action.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
