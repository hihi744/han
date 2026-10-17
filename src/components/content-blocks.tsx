import type { Block, Row } from "@/content/site";
import { CheckList, InfoTable } from "./blocks";

/** Label-led points ("Linh hoạt: …") laid out as a two-column set of short cards. */
export function TermsGrid({ items, className = "" }: { items: readonly Row[]; className?: string }) {
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((t) => (
        <div key={t.label} className="rounded-[var(--radius-card)] bg-paper p-6 ring-1 ring-sprout-line">
          <dt className="font-bold text-moss-ink">{t.label}</dt>
          <dd className="mt-1.5 text-[15px] text-ink-muted">{t.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Plain table with a header row; the first column is the row heading. */
export function DataTable({ head, rows, minWidth = 560 }: { head: readonly string[]; rows: readonly (readonly string[])[]; minWidth?: number }) {
  return (
    <div className="overflow-x-auto rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
      <table className="w-full text-left text-[15px]" style={{ minWidth }}>
        <thead>
          <tr className="text-sm text-ink-muted">
            {head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-sprout-line align-top">
              {r.map((c, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="px-5 py-4 font-semibold text-moss-ink">
                    {c}
                  </th>
                ) : (
                  <td key={i} className="tabular px-5 py-4 text-ink-muted">
                    {c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Renders one product-sheet block (table, list, text…) with its heading. */
export function BlockView({ block, level = 3 }: { block: Block; level?: 3 | 4 }) {
  const H = level === 3 ? "h3" : "h4";
  return (
    <section data-reveal>
      <H className="text-[22px] font-bold tracking-[-0.02em] text-moss-ink md:text-[24px]">{block.title}</H>
      <div className="mt-5">
        {block.kind === "rows" && (
          <>
            <InfoTable rows={block.rows} caption={block.title} />
            {block.note && <p className="mt-4 rounded-[var(--radius-card)] border-l-4 border-petal-orange bg-paper p-5 text-[15px] text-ink-muted ring-1 ring-sprout-line">{block.note}</p>}
          </>
        )}
        {block.kind === "list" && (
          <>
            {block.intro && <p className="mb-4 text-ink-muted">{block.intro}</p>}
            <CheckList items={block.items} className="text-[16px]" />
            {block.outro && <p className="mt-4 text-ink-muted">{block.outro}</p>}
          </>
        )}
        {block.kind === "terms" && (
          <>
            {block.intro && <p className="mb-4 text-ink-muted">{block.intro}</p>}
            <TermsGrid items={block.items} />
            {block.outro && <p className="mt-4 text-ink-muted">{block.outro}</p>}
          </>
        )}
        {block.kind === "table" && (
          <>
            <DataTable head={block.head} rows={block.rows} minWidth={block.head.length > 3 ? 720 : 480} />
            {block.note && <p className="mt-4 text-[15px] text-ink-muted">{block.note}</p>}
          </>
        )}
        {block.kind === "text" && (
          <div className="space-y-3 text-ink-muted">
            {block.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/** A short pull quote that opens each product section. */
export function SectionQuote({ children, tone = "light" }: { children: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`max-w-3xl text-[26px] font-light leading-[1.3] tracking-[-0.03em] md:text-[34px] ${tone === "dark" ? "text-on-dark" : "text-moss-ink"}`}
    >
      “{children}”
    </p>
  );
}
