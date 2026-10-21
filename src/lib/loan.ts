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
 * Calculator settings per loan package, from the official product sheet.
 * Gói 2 (Đồng hành tạo việc làm) is priced by the share of supported workers the business employs,
 * so it carries tiers; the other packages ignore the tier argument.
 */
export type RateTier = { label: string; rate: number; note: string };

export const goi2Tiers: RateTier[] = [
  { label: "Từ 10% đến dưới 15%", rate: 0.008, note: "Ưu đãi cơ bản" },
  { label: "Từ 15% đến dưới 20%", rate: 0.007, note: "Ưu đãi nâng cao" },
  { label: "Từ 20% trở lên", rate: 0.005, note: "Ưu đãi tối đa" },
];

export const calculatorPackages = [
  {
    id: "goi-1",
    label: "Gói 1: Vốn khởi sự theo nhóm",
    min: 5_000_000,
    max: 50_000_000,
    step: 500_000,
    terms: [6, 9, 12],
    defaultAmount: 10_000_000,
    defaultTerm: 12,
    // 0,55%/tháng for the first cycle (5–15 triệu), 0,52%/tháng for later cycles (15–50 triệu)
    tiers: null,
    rate: (amount: number, _tier = 0) => (amount <= 15_000_000 ? 0.0055 : 0.0052),
    rateNote: (amount: number) =>
      amount <= 15_000_000 ? "Chu kỳ đầu (5–15 triệu): 0,55%/tháng" : "Chu kỳ tiếp theo (15–50 triệu): 0,52%/tháng",
  },
  {
    id: "goi-2",
    label: "Gói 2: Đồng hành tạo việc làm",
    min: 50_000_000,
    max: 200_000_000,
    step: 5_000_000,
    terms: [12, 18, 24, 36],
    defaultAmount: 100_000_000,
    defaultTerm: 24,
    tiers: goi2Tiers,
    rate: (_amount: number, tier = 0) => goi2Tiers[tier].rate,
    rateNote: () =>
      "Lãi suất áp dụng theo tỷ lệ lao động thuộc diện Đơm Hoa đồng hành được xác minh; kỳ hạn thực tế căn cứ phương án kinh doanh và khả năng trả nợ.",
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
    tiers: null,
    rate: (_amount: number, _tier = 0) => 0.005,
    rateNote: () => "0,5%/tháng trong thời gian vay. Miễn toàn bộ tiền lãi nếu hoàn thành khóa học và đạt chứng nhận nghề.",
  },
] as const;
