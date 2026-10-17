"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { calculatorPackages, formatRate, formatVnd, summarize } from "@/lib/loan";
import { buttonClass } from "./ui";

type PackageId = (typeof calculatorPackages)[number]["id"];

export function LoanCalculator({ initial = "goi-1" }: { initial?: PackageId }) {
  const id = useId();
  const [pkgId, setPkgId] = useState<PackageId>(initial);
  const pkg = calculatorPackages.find((p) => p.id === pkgId)!;
  const [amounts, setAmounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(calculatorPackages.map((p) => [p.id, p.defaultAmount])),
  );
  const [terms, setTerms] = useState<Record<string, number>>(() =>
    Object.fromEntries(calculatorPackages.map((p) => [p.id, p.defaultTerm])),
  );
  const [showTable, setShowTable] = useState(false);

  const amount = amounts[pkg.id];
  const term = terms[pkg.id];
  const rate = pkg.rate(amount);
  const result = useMemo(() => summarize(amount, term, rate), [amount, term, rate]);
  const pct = ((amount - pkg.min) / (pkg.max - pkg.min)) * 100;

  return (
    <div data-reveal className="overflow-hidden rounded-[var(--radius-panel)] bg-paper shadow-soft ring-1 ring-sprout-line">
      {/* Package switcher */}
      <fieldset className="border-b border-sprout-line p-4 sm:px-10 sm:py-5">
        <legend className="sr-only">Chọn gói vay</legend>
        <div className="flex flex-wrap gap-2">
          {calculatorPackages.map((p) => (
            <label key={p.id} className="cursor-pointer">
              <input
                type="radio"
                name={`${id}-pkg`}
                value={p.id}
                checked={p.id === pkg.id}
                onChange={() => setPkgId(p.id)}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-semibold ring-1 ring-inset ring-sprout-line transition-colors duration-150 hover:bg-sprout peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
                {p.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid lg:grid-cols-[1.05fr_1fr]">
        {/* Inputs */}
        <div className="p-6 sm:p-10">
          <label htmlFor={`${id}-amount`} className="text-[15px] font-medium text-ink-muted">
            Số tiền muốn vay
          </label>
          <output htmlFor={`${id}-amount`} className="tabular mt-2 block text-[40px] font-bold tracking-tight text-moss-ink sm:text-[52px]">
            {formatVnd(amount)}
          </output>
          <input
            id={`${id}-amount`}
            type="range"
            min={pkg.min}
            max={pkg.max}
            step={pkg.step}
            value={amount}
            onChange={(e) => setAmounts((a) => ({ ...a, [pkg.id]: Number(e.target.value) }))}
            aria-valuetext={formatVnd(amount)}
            className="range mt-5 w-full"
            style={{ ["--pct" as string]: `${pct}%` }}
          />
          <div className="tabular mt-2 flex justify-between text-sm text-ink-muted">
            <span>{formatVnd(pkg.min).replace(".000.000 đ", " triệu")}</span>
            <span>{formatVnd(pkg.max).replace(".000.000 đ", " triệu")}</span>
          </div>

          <fieldset className="mt-8">
            <legend className="text-[15px] font-medium text-ink-muted">Kỳ hạn</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {pkg.terms.map((m) => (
                <label key={m} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`${id}-term`}
                    value={m}
                    checked={term === m}
                    onChange={() => setTerms((t) => ({ ...t, [pkg.id]: m }))}
                    className="peer sr-only"
                  />
                  <span className="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium ring-1 ring-inset ring-sprout-line transition-colors duration-150 hover:bg-sprout peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
                    {m} tháng
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <p className="mt-8 rounded-xl bg-pollen-tint px-4 py-3 text-[15px] text-[#5c4d0e]">
            <span className="font-semibold">Lãi suất {formatRate(rate)}.</span> {pkg.rateNote(amount)}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Gốc chia đều mỗi tháng, lãi tính trên dư nợ giảm dần, nên số tiền phải trả giảm dần qua từng tháng.
          </p>
        </div>

        {/* Results */}
        <div className="on-dark flex flex-col bg-moss-deep p-6 text-on-dark sm:p-10" aria-live="polite">
          <p className="text-[15px] text-on-dark-muted">Tháng đầu tiên phải trả</p>
          <p className="tabular mt-1 text-[40px] font-bold tracking-tight sm:text-[52px]">{formatVnd(result.firstPayment)}</p>
          <p className="tabular text-[15px] text-on-dark-muted">giảm dần đến {formatVnd(result.lastPayment)} ở tháng cuối</p>

          <dl className="mt-8 divide-y divide-on-dark/12 border-y border-on-dark/12 text-[16px]">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-on-dark-muted">Tổng tiền lãi</dt>
              <dd className="tabular font-semibold">{formatVnd(result.totalInterest)}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-on-dark-muted">Tổng gốc và lãi</dt>
              <dd className="tabular font-semibold">{formatVnd(result.totalPaid)}</dd>
            </div>
            {pkg.id === "goi-3" && (
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-on-dark-muted">Nếu hoàn thành khóa học</dt>
                <dd className="tabular text-right font-semibold">
                  {formatVnd(amount)}
                  <span className="block text-[13px] font-normal text-on-dark-muted">miễn toàn bộ lãi</span>
                </dd>
              </div>
            )}
          </dl>

          <button
            type="button"
            onClick={() => setShowTable((v) => !v)}
            aria-expanded={showTable}
            aria-controls={`${id}-table`}
            className="mt-5 cursor-pointer self-start rounded-full py-2 text-[15px] font-medium text-blossom underline decoration-blossom/40 underline-offset-4 hover:decoration-blossom"
          >
            {showTable ? "Ẩn lịch trả từng tháng" : "Xem lịch trả từng tháng"}
          </button>
          <div id={`${id}-table`} hidden={!showTable} className="mt-3 max-h-72 overflow-auto rounded-xl bg-moss-ink/40">
            <table className="tabular w-full text-left text-[14px]">
              <caption className="sr-only">Lịch trả nợ từng tháng</caption>
              <thead className="sticky top-0 bg-moss-ink text-on-dark-muted">
                <tr>
                  <th scope="col" className="px-3 py-2 font-medium">Tháng</th>
                  <th scope="col" className="px-3 py-2 font-medium">Gốc</th>
                  <th scope="col" className="px-3 py-2 font-medium">Lãi</th>
                  <th scope="col" className="px-3 py-2 text-right font-medium">Phải trả</th>
                </tr>
              </thead>
              <tbody>
                {result.rows.map((r) => (
                  <tr key={r.month} className="border-t border-on-dark/8">
                    <td className="px-3 py-2">{r.month}</td>
                    <td className="px-3 py-2">{formatVnd(r.principal)}</td>
                    <td className="px-3 py-2">{formatVnd(r.interest)}</td>
                    <td className="px-3 py-2 text-right">{formatVnd(r.payment)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-auto pt-8">
            <Link
              href={`/lien-he?goi=${pkg.id}&so-tien=${amount}&ky-han=${term}#dang-ky`}
              className={buttonClass("blossom", "w-full")}
            >
              Đăng ký tư vấn khoản vay này
            </Link>
            <p className="mt-4 text-[13px] leading-snug text-on-dark-muted">
              Kết quả để tham khảo. Hạn mức và lịch trả nợ thực tế được xác định sau buổi tư vấn và thẩm định, và được giải thích rõ trước khi ký hợp đồng. Gói 2 (Đồng hành tạo việc làm) dành cho doanh nghiệp và hộ kinh doanh, lãi suất theo tỷ lệ lao động thuộc diện Đơm Hoa đồng hành, vui lòng liên hệ để được tư vấn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
