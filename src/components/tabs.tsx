import type { ReactNode } from "react";

/**
 * Accessible tabs rendered on the server; public/js/site.js wires up clicks,
 * arrow keys and #hash deep links. Tabs can nest: a link to an inner panel
 * (e.g. /san-pham#goi-3) also opens the outer panel that holds it.
 */
export function Tabs({
  label,
  items,
  sticky = true,
  size = "md",
}: {
  label: string;
  items: { id: string; tab: ReactNode; panel: ReactNode }[];
  sticky?: boolean;
  size?: "md" | "lg";
}) {
  const big = size === "lg";
  return (
    <div data-tabs className="scroll-mt-40">
      <div
        role="tablist"
        aria-label={label}
        className={`glass z-20 mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1.5 [scrollbar-width:none] ${
          sticky ? "sticky top-[84px]" : "relative"
        }`}
      >
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            id={`tab-${it.id}`}
            aria-controls={it.id}
            aria-selected={i === 0}
            tabIndex={i === 0 ? 0 : -1}
            className={`shrink-0 cursor-pointer whitespace-nowrap rounded-full font-semibold text-ink-muted transition-[background-color,color,box-shadow] duration-300 hover:text-moss-ink aria-selected:bg-moss aria-selected:text-on-dark aria-selected:shadow-[0_8px_20px_-10px_rgba(36,51,32,0.7)] ${
              big ? "min-h-12 px-5 text-[15px] sm:min-h-14 sm:px-8 sm:text-[17px]" : "min-h-11 px-4 text-[14px] sm:px-5 sm:text-[15px]"
            }`}
          >
            {it.tab}
          </button>
        ))}
      </div>
      {items.map((it, i) => (
        <div key={it.id} role="tabpanel" id={it.id} aria-labelledby={`tab-${it.id}`} hidden={i !== 0} tabIndex={0} className="scroll-mt-40 pt-12 outline-none">
          {it.panel}
        </div>
      ))}
    </div>
  );
}

/** Six-step process as a numbered stepper (a real sequence, so numbers carry meaning). */
export function Stepper({
  label,
  steps,
}: {
  label: string;
  steps: readonly { title: string; body: string; time: string }[];
}) {
  return (
    <div data-tabs className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0">
        {steps.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            id={`step-tab-${i + 1}`}
            aria-controls={`buoc-${i + 1}`}
            aria-selected={i === 0}
            tabIndex={i === 0 ? 0 : -1}
            className="group flex shrink-0 cursor-pointer items-center gap-4 rounded-2xl px-4 py-3 text-left transition-[background-color,box-shadow] duration-300 hover:bg-paper aria-selected:bg-paper aria-selected:shadow-soft lg:px-5 lg:py-4"
          >
            <span className="step-num tabular text-[34px] font-extrabold leading-none tracking-tight lg:text-[44px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="hidden text-[17px] font-bold text-moss-ink sm:block">{s.title}</span>
          </button>
        ))}
      </div>
      <div className="relative">
        {steps.map((s, i) => (
          <div
            key={s.title}
            role="tabpanel"
            id={`buoc-${i + 1}`}
            aria-labelledby={`step-tab-${i + 1}`}
            hidden={i !== 0}
            tabIndex={0}
            className="glass relative overflow-hidden rounded-[var(--radius-panel)] p-8 outline-none sm:p-12"
          >
            <span aria-hidden="true" className="step-ghost tabular pointer-events-none absolute -right-4 -top-10 text-[200px] font-extrabold leading-none tracking-tighter">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="relative text-[14px] font-bold tracking-[0.08em] text-blossom-deep">
              BƯỚC {i + 1}/{steps.length}
            </p>
            <h3 className="relative mt-2 text-[30px] font-bold tracking-[-0.03em] text-moss-ink md:text-[40px]">{s.title}</h3>
            <p className="relative mt-4 max-w-lg text-lg text-ink-muted">{s.body}</p>
            {s.time && (
              <p className="relative mt-8 inline-flex rounded-full bg-pollen-tint px-4 py-2 text-[15px] font-semibold text-[#5c4d0e]">
                Thời gian: {s.time}
              </p>
            )}
            <div className="relative mt-10 h-1.5 overflow-hidden rounded-full bg-sprout" aria-hidden="true">
              <span className="block h-full rounded-full bg-gradient-to-r from-petal-yellow via-petal-orange to-petal-red" style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
