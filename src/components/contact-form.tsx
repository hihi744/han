"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle, CircleNotch, LockKey } from "@phosphor-icons/react";
import { isVietnamesePhone, submitConsultation } from "@/lib/forms";
import { formatVnd } from "@/lib/loan";
import { loanPackages, org } from "@/content/site";
import { buttonClass } from "./ui";
import { describedBy, Field, inputClass } from "./form-fields";

const needs = ["Vay vốn", "Học nghề", "Tiết kiệm", "Tham vấn, hỗ trợ tâm lý", "Chưa rõ, muốn được tư vấn"];
const areas = ["Hà Nội", "Thanh Hóa", "Tỉnh khác"];
const callTimes = ["Buổi sáng", "Buổi trưa", "Buổi chiều", "Buổi tối"];

type Errors = Partial<Record<"fullName" | "phone" | "need" | "area" | "callTime" | "consent", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [prefill, setPrefill] = useState<{ need?: string; pkg?: string; note?: string }>({});
  const [name, setName] = useState("");
  const [callTime, setCallTime] = useState("");
  const doneRef = useRef<HTMLHeadingElement>(null);

  // Prefill from the loan calculator link (?goi=…&so-tien=…&ky-han=…). Read on the client so the
  // form itself is part of the static HTML.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const pkg = p.get("goi") ?? undefined;
    const amount = Number(p.get("so-tien")) || 0;
    const term = Number(p.get("ky-han")) || 0;
    if (pkg || (amount && term)) {
      setPrefill({
        need: "Vay vốn",
        pkg,
        note: amount && term ? `Tôi đã tính thử khoản vay ${formatVnd(amount)} trong ${term} tháng.` : undefined,
      });
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("fullName")) next.fullName = "Vui lòng cho biết tên để cán bộ xưng hô.";
    if (!isVietnamesePhone(get("phone"))) next.phone = "Số điện thoại chưa đúng. Ví dụ: 0912 345 678";
    if (!get("need")) next.need = "Vui lòng chọn nhu cầu của chị.";
    if (!get("area")) next.area = "Vui lòng chọn khu vực chị đang sống.";
    if (!get("callTime")) next.callTime = "Vui lòng chọn giờ thuận tiện để nghe máy.";
    if (!form.get("consent")) next.consent = "Vui lòng đồng ý để Đơm Hoa liên hệ với chị.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(`c-${first}`)?.focus();
      return;
    }
    setName(get("fullName"));
    setCallTime(get("callTime"));
    setStatus("sending");
    try {
      await submitConsultation({
        fullName: get("fullName"),
        phone: get("phone"),
        need: get("need"),
        packageId: get("packageId") || undefined,
        area: get("area"),
        callTime: get("callTime"),
        note: get("note") || undefined,
        consent: true,
      });
      setStatus("sent");
      requestAnimationFrame(() => doneRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  const clear = (k: keyof Errors) => errors[k] && setErrors((e) => ({ ...e, [k]: undefined }));

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-10">
        <CheckCircle size={48} weight="fill" className="text-moss" aria-hidden="true" />
        <h3 ref={doneRef} tabIndex={-1} className="mt-5 text-[28px] text-moss-ink outline-none">
          Đã nhận. Cảm ơn {name}.
        </h3>
        <p className="mt-3 text-lg text-ink-muted">
          Cán bộ tín dụng nữ của Đơm Hoa sẽ gọi cho chị vào {callTime.toLowerCase()} trong giờ làm việc. Nếu cần gấp, chị có thể gọi hotline {org.phone}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/tu-danh-gia" className={buttonClass("primary")}>
            Làm bài tự đánh giá
          </Link>
          <Link href="/" className={buttonClass("ghost")}>
            Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const radioPill =
    "inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium ring-1 ring-inset ring-sprout-line hover:bg-sprout peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep";

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6 rounded-[var(--radius-panel)] bg-paper p-6 ring-1 ring-sprout-line sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="c-fullName" label="Tên của chị" required hint="Tên thường gọi là đủ." error={errors.fullName}>
          <input id="c-fullName" name="fullName" autoComplete="given-name" onChange={() => clear("fullName")} className={inputClass} aria-invalid={!!errors.fullName} aria-describedby={describedBy("c-fullName", true, errors.fullName)} />
        </Field>
        <Field id="c-phone" label="Số điện thoại" required hint="Chỉ cán bộ phụ trách được xem." error={errors.phone}>
          <input id="c-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" onChange={() => clear("phone")} className={inputClass} aria-invalid={!!errors.phone} aria-describedby={describedBy("c-phone", true, errors.phone)} />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="c-need" label="Chị cần hỗ trợ gì?" required error={errors.need}>
          <select
            id="c-need"
            name="need"
            key={prefill.need ?? "none"}
            defaultValue={prefill.need ?? ""}
            onChange={() => clear("need")}
            className={`${inputClass} cursor-pointer`}
            aria-invalid={!!errors.need}
            aria-describedby={describedBy("c-need", false, errors.need)}
          >
            <option value="" disabled>
              Chọn một nhu cầu
            </option>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </Field>
        <Field id="c-packageId" label="Gói chị quan tâm">
          <select id="c-packageId" name="packageId" key={prefill.pkg ?? "none"} defaultValue={prefill.pkg ?? ""} className={`${inputClass} cursor-pointer`}>
            <option value="">Chưa biết, nhờ cán bộ tư vấn</option>
            {loanPackages.map((p) => (
              <option key={p.id} value={p.id}>
                Gói {p.number}
                {p.name ? `: ${p.name}` : `: ${p.title}`}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset aria-describedby={describedBy("c-area", false, errors.area)}>
        <legend className="text-[15px] font-medium text-moss-ink">
          Khu vực chị đang sống<span className="text-blossom-deep" aria-hidden="true"> *</span>
        </legend>
        <div id="c-area" tabIndex={-1} className="mt-2 flex flex-wrap gap-2 outline-none">
          {areas.map((a) => (
            <label key={a} className="cursor-pointer">
              <input type="radio" name="area" value={a} onChange={() => clear("area")} className="peer sr-only" />
              <span className={radioPill}>{a}</span>
            </label>
          ))}
        </div>
        {errors.area && <p id="c-area-error" className="mt-2 text-sm font-medium text-blossom-deep">{errors.area}</p>}
      </fieldset>

      <fieldset aria-describedby={describedBy("c-callTime", false, errors.callTime)}>
        <legend className="text-[15px] font-medium text-moss-ink">
          Giờ thuận tiện để nghe máy<span className="text-blossom-deep" aria-hidden="true"> *</span>
        </legend>
        <div id="c-callTime" tabIndex={-1} className="mt-2 flex flex-wrap gap-2 outline-none">
          {callTimes.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="callTime" value={t} onChange={() => clear("callTime")} className="peer sr-only" />
              <span className={radioPill}>{t}</span>
            </label>
          ))}
        </div>
        {errors.callTime && <p id="c-callTime-error" className="mt-2 text-sm font-medium text-blossom-deep">{errors.callTime}</p>}
      </fieldset>

      <Field id="c-note" label="Chị muốn nhắn gì thêm?">
        <textarea id="c-note" name="note" rows={3} key={prefill.note ?? "none"} defaultValue={prefill.note ?? ""} className={`${inputClass} resize-y`} />
      </Field>

      <div>
        <label className="flex cursor-pointer gap-3">
          <input id="c-consent" name="consent" type="checkbox" onChange={() => clear("consent")} className="mt-1 size-5 shrink-0 cursor-pointer accent-moss" aria-invalid={!!errors.consent} aria-describedby={describedBy("c-consent", false, errors.consent)} />
          <span className="text-[15px] text-ink-muted">
            Tôi đồng ý để Đơm Hoa dùng thông tin này để liên hệ tư vấn cho tôi. Thông tin chỉ chia sẻ khi có sự đồng ý của tôi.{" "}
            <Link href="/gioi-thieu#phap-ly" className="font-medium text-moss underline underline-offset-2">
              Cơ sở pháp lý và bảo mật
            </Link>
          </span>
        </label>
        {errors.consent && <p id="c-consent-error" className="mt-2 text-sm font-medium text-blossom-deep">{errors.consent}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-blossom-tint px-4 py-3 text-[15px] text-moss-ink">
          Chưa gửi được do lỗi kết nối. Thông tin của chị vẫn còn đây, vui lòng bấm gửi lại hoặc gọi hotline {org.phone}.
        </p>
      )}

      <div className="flex flex-col-reverse gap-4 border-t border-sprout-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <LockKey size={18} className="shrink-0 text-moss" aria-hidden="true" />
          Không hỏi về quá khứ. Không cần giấy tờ ở bước này.
        </p>
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full sm:w-auto")}>
          {status === "sending" ? (
            <>
              <CircleNotch size={18} className="animate-spin" aria-hidden="true" /> Đang gửi…
            </>
          ) : (
            "Gửi đăng ký tư vấn"
          )}
        </button>
      </div>
    </form>
  );
}
