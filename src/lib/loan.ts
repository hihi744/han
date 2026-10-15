// Equal principal each month, interest on the declining balance
// ("tính trên dư nợ giảm dần"), as described for every Đơm Hoa loan package.

export type ScheduleRow = {
  month: number;
  principal: number;
  interest: number;
  payment: number;
  balanceAfter: number;
};

export function decliningBalanceSchedule(amount: number, months: number, monthlyRate: number): ScheduleRow[] {
  const principal = amount / months;
  const rows: ScheduleRow[] = [];
  let balance = amount;
  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    balance -= principal;
    rows.push({ month, principal, interest, payment: principal + interest, balanceAfter: Math.max(0, balance) });
  }
  return rows;
}

export function summarize(amount: number, months: number, monthlyRate: number) {
  const rows = decliningBalanceSchedule(amount, months, monthlyRate);
  const totalInterest = rows.reduce((sum, r) => sum + r.interest, 0);
  return {
    rows,
    firstPayment: rows[0]?.payment ?? 0,
    lastPayment: rows[rows.length - 1]?.payment ?? 0,
    totalInterest,
    totalPaid: amount + totalInterest,
  };
}

const vnd = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });

export function formatVnd(value: number) {
  return `${vnd.format(Math.round(value))} đ`;
}

export function formatRate(monthlyRate: number) {
  return `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 }).format(monthlyRate * 100)}%/tháng`;
}

/**
 * Calculator settings per individual loan package, from the official product sheet.
 * Gói 2 (Chung Vườn) is a business loan priced per hiring tier, so it is quoted, not calculated.
 */
export const calculatorPackages = [
  {
    id: "goi-1",
    label: "Gói 1: Nảy Mầm",
    min: 5_000_000,
    max: 30_000_000,
    step: 500_000,
    terms: [6, 9, 12],
    defaultAmount: 10_000_000,
    defaultTerm: 12,
    // 0,8%/tháng for the first cycle (5–15 triệu), 1,0%/tháng for later cycles (15–30 triệu)
    rate: (amount: number) => (amount <= 15_000_000 ? 0.008 : 0.01),
    rateNote: (amount: number) =>
      amount <= 15_000_000 ? "Chu kỳ đầu (5–15 triệu): 0,8%/tháng" : "Chu kỳ tiếp theo (15–30 triệu): 1,0%/tháng",
  },
  {
    id: "goi-3",
    label: "Gói 3: Gieo Nghề",
    min: 3_000_000,
    max: 15_000_000,
    step: 500_000,
    terms: [6, 9, 12],
    defaultAmount: 8_000_000,
    defaultTerm: 12,
    rate: () => 0.005,
    rateNote: () => "0,5%/tháng trong thời gian học. Miễn toàn bộ lãi nếu hoàn thành khóa học và đạt chứng nhận nghề.",
  },
  {
    id: "goi-4",
    label: "Gói 4: Phát triển sinh kế",
    min: 15_000_000,
    max: 50_000_000,
    step: 1_000_000,
    terms: [12, 18, 24],
    defaultAmount: 30_000_000,
    defaultTerm: 18,
    // The sheet gives a 1,0%–1,16% band; show the top of the band so the estimate never understates the cost.
    rate: () => 0.0116,
    rateNote: () => "Khung 1,0%–1,16%/tháng. Kết quả tính theo mức cao nhất của khung.",
  },
] as const;
