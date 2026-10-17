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
 * Gói 2 (Đồng hành tạo việc làm) is a business loan priced per hiring tier, so it is quoted, not calculated.
 */
export const calculatorPackages = [
  {
    id: "goi-1",
    label: "Gói 1: Vốn khởi sự theo nhóm",
    min: 5_000_000,
    max: 30_000_000,
    step: 500_000,
    terms: [6, 9, 12],
    defaultAmount: 10_000_000,
    defaultTerm: 12,
    // 0,8%/tháng for the first cycle (5–15 triệu), 0,75%/tháng for later cycles (15–30 triệu)
    rate: (amount: number) => (amount <= 15_000_000 ? 0.008 : 0.0075),
    rateNote: (amount: number) =>
      amount <= 15_000_000 ? "Chu kỳ đầu (5–15 triệu): 0,8%/tháng" : "Chu kỳ tiếp theo (15–30 triệu): 0,75%/tháng",
  },
  {
    id: "goi-3",
    label: "Gói 3: Học nghề",
    min: 3_000_000,
    max: 15_000_000,
    step: 500_000,
    terms: [6, 9, 12],
    defaultAmount: 8_000_000,
    defaultTerm: 12,
    rate: () => 0.005,
    rateNote: () => "0,5%/tháng trong thời gian vay. Miễn toàn bộ tiền lãi nếu hoàn thành khóa học và đạt chứng nhận nghề.",
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
    rate: () => 0.01,
    rateNote: () => "1,0%/tháng, tính trên dư nợ gốc thực tế còn lại.",
  },
] as const;
