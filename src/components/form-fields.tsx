import type { ReactNode } from "react";

export const inputClass =
  "block w-full min-h-12 rounded-xl bg-paper px-4 py-3 text-[16px] text-ink ring-1 ring-inset ring-sprout-line placeholder:text-ink-muted/70 transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-moss aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-blossom-deep";

export function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] font-medium text-moss-ink">
        {label}
        {required ? (
          <span className="text-blossom-deep" aria-hidden="true"> *</span>
        ) : (
          <span className="font-normal text-ink-muted"> (không bắt buộc)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-blossom-deep">
          {error}
        </p>
      )}
    </div>
  );
}

export function describedBy(id: string, hint?: boolean, error?: string) {
  return [hint ? `${id}-hint` : "", error ? `${id}-error` : ""].filter(Boolean).join(" ") || undefined;
}

export function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  title,
  body,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (v: string) => void;
  title: string;
  body?: string;
}) {
  return (
    <label className="block cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <span className="block h-full rounded-2xl bg-paper p-5 ring-1 ring-inset ring-sprout-line transition-[box-shadow,background-color] duration-150 hover:bg-sprout/50 peer-checked:bg-sprout peer-checked:ring-2 peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
        <span className="block font-medium text-moss-ink">{title}</span>
        {body && <span className="mt-1 block text-[15px] text-ink-muted">{body}</span>}
      </span>
    </label>
  );
}
