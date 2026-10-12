// Equal-principal repayment on a declining balance, as specified in
// Đơm Hoa's product document (A4). Matches its worked examples:
// 10.000.000 đ, 12 months, 9%/yr -> first month 908.333 đ, total interest 487.500 đ.

export type ScheduleRow = {
  month: number;
  principal: number;
  interest: number;
  payment: number;
  balanceAfter: number;
};

export function decliningBalanceSchedule(
  amount: number,
  months: number,
  annualRate: number,
): ScheduleRow[] {
  const monthlyRate = annualRate / 12;
  const principal = amount / months;
  const rows: ScheduleRow[] = [];
  let balance = amount;
  for (let month = 1; month <= months; month++) {
    const interest = balance * monthlyRate;
    balance -= principal;
    rows.push({
      month,
      principal,
      interest,
      payment: principal + interest,
      balanceAfter: Math.max(0, balance),
    });
  }
  return rows;
}

export function summarize(amount: number, months: number, annualRate: number) {
  const rows = decliningBalanceSchedule(amount, months, annualRate);
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

export function formatMillions(value: number) {
  const m = value / 1_000_000;
  return `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 1 }).format(m)} triệu`;
}
