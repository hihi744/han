"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { formatVnd, summarize } from "@/lib/loan";
import { buttonClass } from "./ui";

// Illustrative only: Đơm Hoa's documents state 9%/yr is not yet the product price.
const ILLUSTRATIVE_RATE = 0.09;
const SAVINGS_RATE = 0.02; // "Bước Vững" compulsory savings, refunded at settlement (proposed)

const MIN = 5_000_000;
const MAX = 30_000_000;
const STEP = 500_000;

function termRange(amount: number) {
  // Round 1 (≤10tr): 6–12 months. Round 2 (15–30tr): 12–18 months.
  return amount <= 10_000_000 ? { min: 6, max: 12 } : { min: 12, max: 18 };
}

export function LoanCalculator() {
  const id = useId();
  const [amount, setAmount] = useState(8_000_000);
  const [months, setMonths] = useState(12);
  const [showTable, setShowTable] = useState(false);

  const range = termRange(amount);
  const term = Math.min(Math.max(months, range.min), range.max);
  const result = useMemo(() => summarize(amount, term, ILLUSTRATIVE_RATE), [amount, term]);
  const round = amount <= 10_000_000 ? "Vòng 1" : amount >= 15_000_000 ? "Vòng 2" : "Giữa hai vòng";
  const savings = amount * SAVINGS_RATE;
  const pct = ((amount - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="grid overflow-hidden rounded-[var(--radius-panel)] bg-paper ring-1 ring-sprout-line lg:grid-cols-[1.05fr_1fr]">
      {/* Inputs */}
      <div className="p-6 sm:p-10">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor={`${id}-amount`} className="text-[15px] font-medium text-ink-muted">
            Số tiền muốn vay
          </label>
          <span className="rounded-full bg-sprout px-3 py-1 text-sm font-medium text-moss">{round}</span>
        </div>
        <output htmlFor={`${id}-amount`} className="font-display tabular mt-2 block text-[40px] font-semibold tracking-tight text-moss-ink sm:text-[52px]">
          {formatVnd(amount)}
        </output>
        <input
          id={`${id}-amount`}
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          aria-valuetext={formatVnd(amount)}
          className="range mt-5 w-full"
          style={{ ["--pct" as string]: `${pct}%` }}
        />
        <div className="mt-2 flex justify-between text-sm text-ink-muted tabular">
          <span>5 triệu</span>
          <span>30 triệu</span>
        </div>
        {amount > 10_000_000 && amount < 15_000_000 && (
          <p className="mt-3 rounded-xl bg-pollen-tint px-4 py-3 text-[15px] text-[#5c4d0e]">
            Vòng 1 tối đa 10 triệu, Vòng 2 bắt đầu từ 15 triệu sau khi thẩm định lại. Bạn vẫn có thể tính thử để tham khảo.
          </p>
        )}

        <fieldset className="mt-8">
          <legend className="text-[15px] font-medium text-ink-muted">Kỳ hạn</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from({ length: (range.max - range.min) / 3 + 1 }, (_, i) => range.min + i * 3).map((m) => (
              <label key={m} className="cursor-pointer">
                <input
                  type="radio"
                  name={`${id}-term`}
                  value={m}
                  checked={term === m}
                  onChange={() => setMonths(m)}
                  className="peer sr-only"
                />
                <span className="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium ring-1 ring-inset ring-sprout-line transition-colors duration-150 peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep hover:bg-sprout peer-checked:hover:bg-moss">
                  {m} tháng
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <p className="mt-8 text-[15px] leading-relaxed text-ink-muted">
          Gốc chia đều mỗi tháng, lãi tính trên số dư nợ còn lại, nên số tiền phải trả giảm dần. Trả trước hạn không bị phạt.
        </p>
      </div>

      {/* Results */}
      <div className="on-dark flex flex-col bg-moss-deep p-6 text-on-dark sm:p-10" aria-live="polite">
        <p className="text-[15px] text-on-dark-muted">Tháng đầu tiên bạn trả</p>
        <p className="font-display tabular mt-1 text-[40px] font-semibold tracking-tight sm:text-[52px]">
          {formatVnd(result.firstPayment)}
        </p>
        <p className="tabular text-[15px] text-on-dark-muted">
          giảm dần đến {formatVnd(result.lastPayment)} ở tháng cuối
        </p>

        <dl className="mt-8 divide-y divide-on-dark/12 border-y border-on-dark/12 text-[16px]">
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-on-dark-muted">Tổng tiền lãi</dt>
            <dd className="tabular font-medium">{formatVnd(result.totalInterest)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-on-dark-muted">Tổng gốc và lãi</dt>
            <dd className="tabular font-medium">{formatVnd(result.totalPaid)}</dd>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-on-dark-muted">Tiết kiệm Bước Vững (2%)</dt>
            <dd className="tabular text-right font-medium">
              {formatVnd(savings)}
              <span className="block text-[13px] font-normal text-on-dark-muted">hoàn lại khi tất toán</span>
            </dd>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-on-dark-muted">Phí hồ sơ</dt>
            <dd className="font-medium">0 đ</dd>
          </div>
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
          <Link href={`/dang-ky?so-tien=${amount}&ky-han=${term}`} className={buttonClass("blossom", "w-full")}>
            Đăng ký tư vấn khoản vay này
          </Link>
          <p className="mt-4 text-[13px] leading-snug text-on-dark-muted">
            Kết quả để tham khảo, tính với lãi suất minh họa 9%/năm. Lãi suất chính thức sẽ được công bố bằng tổng số tiền phải trả trước khi bạn ký hợp đồng. Hạn mức thực tế xét theo dòng tiền của bạn.
          </p>
        </div>
      </div>
    </div>
  );
}
