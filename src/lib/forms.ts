// Front-end only for now. Replace the bodies of these functions with a real
// request (API route, CRM, Google Sheet webhook…) when the backend is ready.
// Both return a promise so the UI already handles loading, success and error.

export type LoanEnquiry = {
  need: string;
  situation: string;
  trade?: string;
  fullName: string;
  phone: string;
  province: string;
  callTime: string;
  note?: string;
  consent: boolean;
};

export type PartnerEnquiry = {
  organisation: string;
  contactName: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
};

const ENDPOINTS = {
  loan: process.env.NEXT_PUBLIC_LOAN_ENQUIRY_ENDPOINT,
  partner: process.env.NEXT_PUBLIC_PARTNER_ENQUIRY_ENDPOINT,
};

async function post(endpoint: string | undefined, payload: unknown) {
  if (!endpoint) {
    // No backend configured yet: simulate a short network round trip.
    await new Promise((resolve) => setTimeout(resolve, 900));
    if (process.env.NODE_ENV !== "production") {
      console.info("[forms] No endpoint configured; payload not sent:", payload);
    }
    return;
  }
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Request failed with ${res.status}`);
}

export function submitLoanEnquiry(data: LoanEnquiry) {
  return post(ENDPOINTS.loan, data);
}

export function submitPartnerEnquiry(data: PartnerEnquiry) {
  return post(ENDPOINTS.partner, data);
}

// Vietnamese mobile numbers: 10 digits starting with 0, or +84 followed by 9 digits.
export function isVietnamesePhone(value: string) {
  const digits = value.replace(/[\s.-]/g, "");
  return /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(digits);
}
