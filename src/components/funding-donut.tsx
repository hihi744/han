/**
 * Expected revenue mix as a donut. Colours come from the logo, adjusted so every
 * neighbouring pair stays distinct for colour-blind readers (checked with the
 * palette validator); the legend repeats each share, so colour is never the only cue.
 */
const colours = ["#0C6A3B", "#D9792B", "#B93636", "#6E9A4A"];

export function FundingDonut({ mix }: { mix: readonly { label: string; share: number }[] }) {
  const r = 80;
  const c = 2 * Math.PI * r;
  const gap = 2.5; // surface gap between segments, in px along the ring
  let offset = 0;

  return (
    <figure className="grid items-center gap-6 sm:grid-cols-[150px_1fr]">
      <svg viewBox="0 0 200 200" className="mx-auto w-[170px] max-w-full -rotate-90 sm:w-[150px]" role="img" aria-label="Biểu đồ tròn cơ cấu nguồn thu dự kiến">
        {mix.map((m, i) => {
          const len = (m.share / 100) * c;
          const seg = (
            <circle
              key={m.label}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke={colours[i]}
              strokeWidth="30"
              strokeDasharray={`${Math.max(len - gap, 0)} ${c}`}
              strokeDashoffset={-offset}
              className="transition-opacity duration-200 hover:opacity-80"
            >
              <title>{`${m.label}: ${m.share}%`}</title>
            </circle>
          );
          offset += len;
          return seg;
        })}
      </svg>
      <figcaption>
        <ul className="space-y-3">
          {mix.map((m, i) => (
            <li key={m.label} className="flex items-center gap-3">
              <span aria-hidden="true" className="size-3.5 shrink-0 rounded-[4px]" style={{ background: colours[i] }} />
              <span className="min-w-0 flex-1 text-[14px] leading-snug text-ink-muted">{m.label}</span>
              <span className="tabular text-[20px] font-extrabold text-moss-ink">{m.share}%</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
