"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, CircleNotch, LockKey } from "@phosphor-icons/react";
import { isVietnamesePhone, submitLoanEnquiry, type LoanEnquiry } from "@/lib/forms";
import { formatVnd } from "@/lib/loan";
import { org } from "@/content/site";
import { buttonClass } from "./ui";
import { ChoiceCard, describedBy, Field, inputClass } from "./form-fields";

const needs = [
  { value: "vay-von", title: "Vay vốn để làm ăn", body: "Mở rộng hoặc bắt đầu một công việc nhỏ." },
  { value: "hoc-nghe", title: "Học nghề, tìm việc làm", body: "Muốn có tay nghề hoặc một chỗ làm ổn định." },
  { value: "chua-ro", title: "Chưa rõ, muốn được tư vấn", body: "Cán bộ sẽ lắng nghe và gợi ý bước đầu tiên." },
];

const situations = [
  { value: "dang-kinh-doanh", title: "Tôi đang buôn bán hoặc làm dịch vụ", body: "Đã có khách và có thu nhập." },
  { value: "co-nghe", title: "Tôi có tay nghề, chưa có nhiều khách", body: "Ví dụ: may, làm bánh, cắt tóc, nấu ăn." },
  { value: "chua-co-viec", title: "Tôi chưa có việc làm ổn định", body: "Không sao, chúng tôi sẽ bắt đầu từ lớp học." },
];

const callTimes = ["Buổi sáng", "Buổi trưa", "Buổi chiều", "Buổi tối"];

type Draft = Omit<LoanEnquiry, "consent"> & { consent: boolean };
type Errors = Partial<Record<keyof Draft, string>>;

const empty: Draft = {
  need: "",
  situation: "",
  trade: "",
  fullName: "",
  phone: "",
  province: "",
  callTime: "",
  note: "",
  consent: false,
};

const stepTitles = ["Bạn cần Đơm Hoa giúp điều gì?", "Công việc hiện tại của bạn", "Để chúng tôi gọi lại cho bạn"];

export function EnquiryForm() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Draft>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);

  const amount = Number(params.get("so-tien")) || 0;
  const term = Number(params.get("ky-han")) || 0;

  useEffect(() => {
    if (amount && term) {
      setData((d) => ({
        ...d,
        need: d.need || "vay-von",
        note: d.note || `Tôi đã tính thử khoản vay ${formatVnd(amount)} trong ${term} tháng.`,
      }));
    }
  }, [amount, term]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus();
  }, [step, status]);

  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function validate(s: number): Errors {
    const e: Errors = {};
    if (s === 0 && !data.need) e.need = "Vui lòng chọn một nhu cầu.";
    if (s === 1 && !data.situation) e.situation = "Vui lòng chọn tình huống gần nhất với bạn.";
    if (s === 2) {
      if (!data.fullName.trim()) e.fullName = "Vui lòng cho biết tên để cán bộ xưng hô.";
      if (!isVietnamesePhone(data.phone)) e.phone = "Số điện thoại chưa đúng. Ví dụ: 0912 345 678";
      if (!data.province.trim()) e.province = "Vui lòng cho biết tỉnh hoặc thành phố bạn đang sống.";
      if (!data.callTime) e.callTime = "Vui lòng chọn giờ thuận tiện để nghe máy.";
      if (!data.consent) e.consent = "Vui lòng đồng ý để Đơm Hoa liên hệ với bạn.";
    }
    return e;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      requestAnimationFrame(() => document.getElementById(`f-${first}`)?.focus());
      return;
    }
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    setStatus("sending");
    try {
      await submitLoanEnquiry({ ...data, consent: true });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-panel)] bg-paper p-8 ring-1 ring-sprout-line sm:p-12">
        <CheckCircle size={48} weight="fill" className="text-moss" aria-hidden="true" />
        <h2 ref={heading} tabIndex={-1} className="mt-5 text-[32px] text-moss-ink outline-none">
          Đã nhận. Cảm ơn {data.fullName.trim()}.
        </h2>
        <p className="mt-3 text-lg text-ink-muted">
          Cán bộ Đơm Hoa sẽ gọi cho bạn vào {data.callTime.toLowerCase()} trong vòng 2 ngày làm việc, từ số {org.phone}. Nếu lỡ cuộc gọi, chúng tôi sẽ gọi lại.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/hanh-trinh" className={buttonClass("primary")}>Tìm hiểu hành trình</Link>
          <Link href="/" className={buttonClass("ghost")}>Về trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[var(--radius-panel)] bg-paper p-6 ring-1 ring-sprout-line sm:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between gap-4">
        <p className="tabular text-[15px] font-medium text-ink-muted">Bước {step + 1} / 3</p>
        {step > 0 && (
          <button type="button" onClick={() => setStep(step - 1)} className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-3 text-[15px] font-medium text-moss hover:bg-sprout">
            <ArrowLeft size={16} aria-hidden="true" /> Quay lại
          </button>
        )}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`h-1.5 rounded-full transition-colors duration-300 ${i <= step ? "bg-moss" : "bg-sprout"}`} />
        ))}
      </div>

      <h2 ref={heading} tabIndex={-1} className="mt-8 text-[26px] text-moss-ink outline-none sm:text-[32px]">
        {stepTitles[step]}
      </h2>

      {step === 0 && (
        <fieldset className="mt-6" aria-describedby={describedBy("f-need", false, errors.need)}>
          <legend className="sr-only">{stepTitles[0]}</legend>
          <div id="f-need" tabIndex={-1} className="grid gap-3 outline-none">
            {needs.map((n) => (
              <ChoiceCard key={n.value} name="need" value={n.value} checked={data.need === n.value} onChange={(v) => set("need", v)} title={n.title} body={n.body} />
            ))}
          </div>
          {errors.need && <p id="f-need-error" className="mt-3 text-sm font-medium text-blossom-deep">{errors.need}</p>}
        </fieldset>
      )}

      {step === 1 && (
        <div className="mt-6 space-y-8">
          <fieldset aria-describedby={describedBy("f-situation", false, errors.situation)}>
            <legend className="sr-only">{stepTitles[1]}</legend>
            <div id="f-situation" tabIndex={-1} className="grid gap-3 outline-none">
              {situations.map((s) => (
                <ChoiceCard key={s.value} name="situation" value={s.value} checked={data.situation === s.value} onChange={(v) => set("situation", v)} title={s.title} body={s.body} />
              ))}
            </div>
            {errors.situation && <p id="f-situation-error" className="mt-3 text-sm font-medium text-blossom-deep">{errors.situation}</p>}
          </fieldset>
          <Field id="f-trade" label="Bạn đang làm hoặc muốn làm nghề gì?">
            <input id="f-trade" value={data.trade} onChange={(e) => set("trade", e.target.value)} placeholder="Ví dụ: bán xôi buổi sáng" className={inputClass} />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="mt-6 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="f-fullName" label="Tên của bạn" required hint="Tên thường gọi là đủ." error={errors.fullName}>
              <input id="f-fullName" autoComplete="given-name" value={data.fullName} onChange={(e) => set("fullName", e.target.value)} className={inputClass} aria-invalid={!!errors.fullName} aria-describedby={describedBy("f-fullName", true, errors.fullName)} />
            </Field>
            <Field id="f-phone" label="Số điện thoại" required hint="Chỉ cán bộ phụ trách được xem." error={errors.phone}>
              <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} aria-invalid={!!errors.phone} aria-describedby={describedBy("f-phone", true, errors.phone)} />
            </Field>
          </div>
          <Field id="f-province" label="Tỉnh hoặc thành phố bạn đang sống" required error={errors.province}>
            <input id="f-province" autoComplete="address-level1" value={data.province} onChange={(e) => set("province", e.target.value)} className={inputClass} aria-invalid={!!errors.province} aria-describedby={describedBy("f-province", false, errors.province)} />
          </Field>
          <fieldset aria-describedby={describedBy("f-callTime", false, errors.callTime)}>
            <legend className="text-[15px] font-medium text-moss-ink">
              Giờ thuận tiện để nghe máy<span className="text-blossom-deep" aria-hidden="true"> *</span>
            </legend>
            <div id="f-callTime" tabIndex={-1} className="mt-2 flex flex-wrap gap-2 outline-none">
              {callTimes.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input type="radio" name="callTime" value={t} checked={data.callTime === t} onChange={() => set("callTime", t)} className="peer sr-only" />
                  <span className="inline-flex min-h-11 items-center rounded-full px-5 text-[15px] font-medium ring-1 ring-inset ring-sprout-line hover:bg-sprout peer-checked:bg-moss peer-checked:text-on-dark peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
                    {t}
                  </span>
                </label>
              ))}
            </div>
            {errors.callTime && <p id="f-callTime-error" className="mt-2 text-sm font-medium text-blossom-deep">{errors.callTime}</p>}
          </fieldset>
          <Field id="f-note" label="Bạn muốn nhắn gì thêm?">
            <textarea id="f-note" rows={3} value={data.note} onChange={(e) => set("note", e.target.value)} className={`${inputClass} resize-y`} />
          </Field>
          <div>
            <label className="flex cursor-pointer gap-3">
              <input id="f-consent" type="checkbox" checked={data.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 size-5 shrink-0 cursor-pointer accent-moss" aria-invalid={!!errors.consent} aria-describedby={describedBy("f-consent", false, errors.consent)} />
              <span className="text-[15px] text-ink-muted">
                Tôi đồng ý để Đơm Hoa dùng thông tin này để gọi tư vấn cho tôi. Thông tin không được chia sẻ cho bên thứ ba. <Link href="/bao-mat" className="font-medium text-moss underline underline-offset-2">Cam kết bảo mật</Link>
              </span>
            </label>
            {errors.consent && <p id="f-consent-error" className="mt-2 text-sm font-medium text-blossom-deep">{errors.consent}</p>}
          </div>
        </div>
      )}

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-xl bg-blossom-tint px-4 py-3 text-[15px] text-moss-ink">
          Chưa gửi được do lỗi kết nối. Thông tin của bạn vẫn còn đây, vui lòng bấm gửi lại.
        </p>
      )}

      <div className="mt-10 flex flex-col-reverse gap-4 border-t border-sprout-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-ink-muted">
          <LockKey size={18} className="shrink-0 text-moss" aria-hidden="true" />
          Không hỏi về quá khứ. Không cần giấy tờ ở bước này.
        </p>
        <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full sm:w-auto")}>
          {status === "sending" ? (
            <>
              <CircleNotch size={18} className="animate-spin" aria-hidden="true" /> Đang gửi…
            </>
          ) : step < 2 ? (
            "Tiếp tục"
          ) : (
            "Gửi đăng ký"
          )}
        </button>
      </div>
    </form>
  );
}
