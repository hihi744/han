import { StageGlyph } from "./petals";
import { values } from "@/content/site";

/**
 * Gieo – Ươm – Vun – Nở as a scroll-driven timeline. public/js/site.js fills the
 * line and lights each node as it reaches the reading line; without JS (or with
 * reduced motion) every stage is shown fully lit.
 */
export function Journey({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div data-journey className="relative">
      <div className="journey-line" aria-hidden="true">
        <span />
      </div>
      <ol className="space-y-12 sm:space-y-16">
        {values.map((v, i) => (
          <li key={v.key} data-stage className="relative grid grid-cols-[56px_1fr] gap-5 sm:gap-8">
            <span
              className={`journey-node relative z-10 grid size-14 place-items-center rounded-full ring-1 ${
                dark ? "bg-moss-ink ring-on-dark/20" : "bg-mist ring-sprout-line"
              }`}
            >
              <StageGlyph stage={v.key} className="size-8" />
            </span>
            <div className="journey-body pt-1">
              <p className={`tabular text-[13px] font-bold tracking-[0.08em] ${dark ? "text-petal-yellow" : "text-blossom-deep"}`}>
                CHẶNG {i + 1}
              </p>
              <h3 className={`mt-1 text-[30px] font-bold tracking-[-0.03em] md:text-[38px] ${dark ? "text-on-dark" : "text-moss-ink"}`}>
                {v.stage} <span className={dark ? "font-light text-on-dark-muted" : "font-light text-ink-muted"}>– {v.value}</span>
              </h3>
              <p className={`mt-1 font-semibold ${dark ? "text-blossom" : "text-moss"}`}>{v.promise}</p>
              <p className={`mt-3 max-w-xl ${dark ? "text-on-dark-muted" : "text-ink-muted"}`}>{v.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
