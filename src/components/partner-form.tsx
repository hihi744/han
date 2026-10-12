"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { submitPartnerEnquiry } from "@/lib/forms";
import { buttonClass } from "./ui";
import { describedBy, Field, inputClass } from "./form-fields";

type Errors = Partial<Record<"organisation" | "contactName" | "email" | "interest", string>>;

const interests = [
  "Nhà tài trợ Vàng (92 triệu đồng)",
  "Nhà tài trợ Bạc (6 triệu đồng / học viên)",
  "Đồng hành theo hạng mục",
  "Tài trợ hiện vật",
  "Nhận học viên vào làm việc",
  "Hợp tác khác",
];

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("organisation")) next.organisation = "Vui lòng nhập tên đơn vị hoặc tên của bạn.";
    if (!get("contactName")) next.contactName = "Vui lòng nhập tên người liên hệ.";
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Email chưa đúng, ví dụ: ten@congty.vn";
    if (!get("interest")) next.interest = "Vui lòng chọn hình thức bạn quan tâm.";
    setErrors(next);
    if (Object.keys(next).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      await submitPartnerEnquiry({
        organisation: get("organisation"),
        contactName: get("contactName"),
        email: get("email"),
        phone: get("phone") || undefined,
        interest: get("interest"),
        message: get("message") || undefined,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-card)] bg-sprout p-8 sm:p-10">
        <CheckCircle size={40} weight="fill" className="text-moss" aria-hidden="true" />
        <h3 className="mt-4 text-[26px] text-moss-ink">Đã gửi. Cảm ơn bạn đã muốn đồng hành.</h3>
        <p className="mt-2 text-ink-muted">
          Đội ngũ Đơm Hoa sẽ liên hệ qua email trong vòng 3 ngày làm việc, kèm đề án chi tiết của dự án.
        </p>
      </div>
    );
  }

  const errorList = Object.entries(errors).filter(([, v]) => v);

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-2xl bg-blossom-tint p-5 text-[15px] text-moss-ink">
          <p className="font-semibold">Còn {errorList.length} mục cần sửa:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorList.map(([k, v]) => (
              <li key={k}>
                <a href={`#p-${k}`} className="underline underline-offset-2">{v}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="p-organisation" label="Tên đơn vị" required error={errors.organisation}>
          <input id="p-organisation" name="organisation" autoComplete="organization" className={inputClass} aria-invalid={!!errors.organisation} aria-describedby={describedBy("p-organisation", false, errors.organisation)} />
        </Field>
        <Field id="p-contactName" label="Người liên hệ" required error={errors.contactName}>
          <input id="p-contactName" name="contactName" autoComplete="name" className={inputClass} aria-invalid={!!errors.contactName} aria-describedby={describedBy("p-contactName", false, errors.contactName)} />
        </Field>
        <Field id="p-email" label="Email" required error={errors.email}>
          <input id="p-email" name="email" type="email" inputMode="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={describedBy("p-email", false, errors.email)} />
        </Field>
        <Field id="p-phone" label="Số điện thoại">
          <input id="p-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
        </Field>
      </div>
      <Field id="p-interest" label="Bạn quan tâm đến" required error={errors.interest}>
        <select id="p-interest" name="interest" defaultValue="" className={`${inputClass} cursor-pointer`} aria-invalid={!!errors.interest} aria-describedby={describedBy("p-interest", false, errors.interest)}>
          <option value="" disabled>Chọn một hình thức</option>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </Field>
      <Field id="p-message" label="Lời nhắn">
        <textarea id="p-message" name="message" rows={4} className={`${inputClass} resize-y`} />
      </Field>
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-blossom-tint px-4 py-3 text-[15px] text-moss-ink">
          Chưa gửi được do lỗi kết nối. Vui lòng thử lại, hoặc gửi email trực tiếp cho chúng tôi.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full sm:w-auto")}>
        {status === "sending" ? (
          <>
            <CircleNotch size={18} className="animate-spin" aria-hidden="true" /> Đang gửi…
          </>
        ) : (
          "Gửi đề nghị hợp tác"
        )}
      </button>
    </form>
  );
}
