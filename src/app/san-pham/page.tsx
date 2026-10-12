import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, Faq, PageIntro } from "@/components/blocks";
import { LoanCalculator } from "@/components/loan-calculator";
import { LinkButton, SectionHeading, Tbc } from "@/components/ui";
import { applicantGroups, faqs, loanRounds, loanTerms, repaymentByTrade } from "@/content/site";

export const metadata: Metadata = {
  title: "Khoản vay ReStart",
  description:
    "Khoản vay ReStart của Đơm Hoa: vay từ 5 đến 10 triệu đồng ở vòng đầu, lãi tính theo dư nợ giảm dần, trả trước hạn không phạt, lịch trả theo nhịp làm ăn của bạn.",
};

const steps = [
  { title: "Để lại số điện thoại", body: "Điền phiếu ngắn trên trang này. Không cần giấy tờ ở bước đầu." },
  { title: "Gặp cán bộ Đơm Hoa", body: "Cán bộ gọi lại, hẹn gặp nơi bạn thấy thoải mái, lắng nghe việc bạn đang làm và muốn làm." },
  { title: "Cùng lập phương án", body: "Tính thu, chi và số tiền trả được mỗi tháng. Bạn biết tổng chi phí trước khi ký." },
  { title: "Nhận vốn và đồng hành", body: "Giải ngân bằng tiền hoặc bằng hiện vật như máy móc, nguyên liệu. Cán bộ kiểm tra lại cùng bạn sau 2 đến 3 tháng." },
];

export default function ProductPage() {
  return (
    <>
      <PageIntro
        title="Khoản vay ReStart"
        body="Bắt đầu từ khoản vay nhỏ, vừa sức trả. Mỗi kỳ trả đúng hạn là một bước bạn xây lại uy tín của chính mình."
        aside={
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <LinkButton href="/dang-ky" variant="primary">
              Đăng ký tư vấn
            </LinkButton>
            <LinkButton href="#tinh-thu" variant="ghost">
              Tính thử khoản vay
            </LinkButton>
          </div>
        }
      />

      {/* Two rounds */}
      <section className="container-site mt-12" aria-label="Hạn mức theo vòng vay">
        <div className="grid gap-5 md:grid-cols-2">
          {loanRounds.map((r, i) => (
            <article
              key={r.name}
              className={`relative overflow-hidden rounded-[var(--radius-panel)] p-8 sm:p-10 ${
                i === 0 ? "on-dark bg-moss-deep text-on-dark" : "bg-paper ring-1 ring-sprout-line"
              }`}
            >
              <h2 className={`text-[22px] ${i === 0 ? "text-blossom" : "text-blossom-deep"}`}>{r.name}</h2>
              <p className={`tabular mt-4 text-[40px] font-semibold tracking-tight sm:text-[48px] ${i === 0 ? "text-on-dark" : "text-moss-ink"}`}>
                {r.amount}
              </p>
              <p className={i === 0 ? "text-on-dark-muted" : "text-ink-muted"}>{r.amountNote}</p>
              <dl className={`mt-8 grid grid-cols-2 gap-4 border-t pt-6 ${i === 0 ? "border-on-dark/15" : "border-sprout-line"}`}>
                <div>
                  <dt className={`text-sm ${i === 0 ? "text-on-dark-muted" : "text-ink-muted"}`}>Kỳ hạn</dt>
                  <dd className="mt-1 text-lg font-medium">{r.term}</dd>
                </div>
                <div>
                  <dt className={`text-sm ${i === 0 ? "text-on-dark-muted" : "text-ink-muted"}`}>Phù hợp khi</dt>
                  <dd className="mt-1">{r.who}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <dl className="mt-5 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-sprout-line ring-1 ring-sprout-line sm:grid-cols-2 lg:grid-cols-4">
          {loanTerms.map((t) => (
            <div key={t.label} className="bg-paper p-6">
              <dt className="text-sm text-ink-muted">{t.label}</dt>
              <dd className="mt-1.5 font-medium text-moss-ink">
                {"tbc" in t && t.tbc ? <Tbc>{t.value}</Tbc> : t.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Who can borrow */}
      <section className="container-site mt-28" aria-labelledby="groups-title">
        <SectionHeading
          id="groups-title"
          title="Bạn đang ở đâu, chúng tôi bắt đầu từ đó"
          intro="Hạn mức được xét theo số tiền bạn thực sự trả được mỗi tháng, không theo số tiền bạn mong muốn. Không ai bị từ chối mà không có con đường tiếp theo."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {applicantGroups.map((g, i) => (
            <article key={g.title} className={`flex flex-col rounded-[var(--radius-card)] p-8 ${["bg-sprout", "bg-pollen-tint", "bg-blossom-tint"][i]}`}>
              <h3 className="text-[22px] text-moss-ink">{g.title}</h3>
              <p className="mt-2 text-ink-muted">{g.detail}</p>
              <p className="mt-8 border-t border-moss/15 pt-5 font-medium text-moss-ink">{g.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section id="tinh-thu" className="container-site mt-28 scroll-mt-28" aria-labelledby="calc-title">
        <SectionHeading
          id="calc-title"
          title="Tính thử khoản vay"
          intro="Gốc chia đều, lãi tính trên dư nợ giảm dần. Trước khi ký, bạn luôn được báo tổng chi phí bằng số tiền cụ thể."
        />
        <div className="mt-12">
          <LoanCalculator />
        </div>
      </section>

      {/* Repayment rhythm */}
      <section className="container-site mt-28" aria-labelledby="rhythm-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <h2 id="rhythm-title" className="text-[32px] text-moss-ink md:text-[44px]">
              Trả theo nhịp làm ăn của bạn
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Người bán hàng có tiền mỗi ngày, người trồng trọt có tiền theo mùa. Lịch trả được thiết kế từ dòng tiền của bạn và ghi rõ trong hợp đồng.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">Kỳ trả nợ theo loại hình kinh doanh</caption>
              <thead>
                <tr className="text-sm text-ink-muted">
                  <th scope="col" className="px-6 py-4 font-medium">Công việc</th>
                  <th scope="col" className="px-6 py-4 font-medium">Kỳ trả</th>
                  <th scope="col" className="px-6 py-4 font-medium">Ân hạn gốc</th>
                </tr>
              </thead>
              <tbody>
                {repaymentByTrade.map((r) => (
                  <tr key={r.trade} className="border-t border-sprout-line align-top">
                    <th scope="row" className="px-6 py-5 font-medium text-moss-ink">{r.trade}</th>
                    <td className="px-6 py-5">{r.schedule}</td>
                    <td className="px-6 py-5 text-ink-muted">{r.grace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-sprout-line px-6 py-4 text-sm text-ink-muted">
              <Tbc>Ân hạn đang được thử nghiệm trong giai đoạn thí điểm, không phải quyền lợi mặc định.</Tbc>
            </p>
          </div>
        </div>
      </section>

      {/* Savings + group */}
      <section className="container-site mt-28 grid gap-5 lg:grid-cols-2" aria-label="Tiết kiệm và nhóm vay">
        <article className="rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-10">
          <h2 className="text-[28px] text-moss-ink">Tiết kiệm Bước Vững</h2>
          <p className="mt-3 text-ink-muted">Nhẹ, minh bạch và là tiền của bạn.</p>
          <ul className="mt-6 space-y-4">
            {[
              "Tiết kiệm bắt buộc 2% khoản vay, chỉ trích sau khi giải ngân. Hoàn trả khi tất toán hoặc khi chuyển sang vòng sau.",
              "Đây không phải khoản phí để được vay. Mức gửi, lãi suất và điều kiện hoàn trả ghi rõ trong hợp đồng.",
              "Tiết kiệm tự nguyện từ 50.000 đến 200.000 đ mỗi tuần, tự chọn mức, được hoãn khi khó khăn.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-moss" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[var(--radius-panel)] bg-sprout p-8 sm:p-10">
          <h2 className="text-[28px] text-moss-ink">Nhóm vay, trách nhiệm có giới hạn</h2>
          <p className="mt-3 text-ink-muted">Tiểu nhóm 5 người để nhắc nhau và chia sẻ kinh nghiệm, không để gánh nợ thay nhau.</p>
          <ul className="mt-6 space-y-4">
            {[
              "Mỗi người chịu trách nhiệm khoản vay của mình. Người trả tốt không bị bắt trả thay.",
              "Vắng họp vì đi làm hay chăm người thân thì không bị phạt.",
              "Không phù hợp với nhóm thì có thể vay cá nhân, và rút khỏi nhóm theo quy trình đã công bố.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle size={22} weight="fill" className="mt-0.5 shrink-0 text-moss" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* How to apply */}
      <section className="container-site mt-28" aria-labelledby="apply-title">
        <SectionHeading id="apply-title" title="Bốn bước để nhận vốn" />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[var(--radius-card)] bg-paper p-7 ring-1 ring-sprout-line">
              <span className="tabular grid size-10 place-items-center rounded-full bg-moss text-[15px] font-semibold text-on-dark" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-6 text-[20px] text-moss-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-site mt-28" aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <h2 id="faq-title" className="text-[32px] text-moss-ink md:text-[44px]">Câu hỏi thường gặp</h2>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand
        title="Cùng tính xem bạn vay bao nhiêu là vừa."
        body="Cán bộ Đơm Hoa sẽ gọi lại và cùng bạn lập phương án. Tư vấn không mất phí và bạn không cam kết gì."
        primary={{ href: "/dang-ky", label: "Đăng ký tư vấn" }}
      />
    </>
  );
}
