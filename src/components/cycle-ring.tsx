/**
 * Steps of a vicious circle laid out on a ring: arrows run clockwise between the
 * steps and the last one leads back to the first.
 */
export function CycleRing({ steps, center }: { steps: readonly string[]; center: string }) {
  const n = steps.length;
  const r = 38; // ring radius in viewBox units (0–100)
  const gap = 19; // degrees left clear around each step for its label
  const at = (deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
  };
  const angle = (i: number) => -90 + (360 / n) * i;

  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <marker id="cycle-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" fill="#fff2a0" />
          </marker>
        </defs>
        <circle cx="50" cy="50" r={r} fill="none" stroke="#fff2a0" strokeOpacity="0.12" strokeWidth="0.6" />
        {steps.map((_, i) => {
          const a = at(angle(i) + gap);
          const b = at(angle(i + 1) - gap);
          return (
            <path
              key={i}
              d={`M ${a.x} ${a.y} A ${r} ${r} 0 0 1 ${b.x} ${b.y}`}
              fill="none"
              stroke="#fff2a0"
              strokeWidth="0.7"
              strokeLinecap="round"
              markerEnd="url(#cycle-arrow)"
            />
          );
        })}
      </svg>
      <figcaption className="absolute left-1/2 top-1/2 w-[36%] -translate-x-1/2 -translate-y-1/2 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-petal-yellow sm:text-[15px]">
        {center}
      </figcaption>
      <ol>
        {steps.map((s, i) => {
          const p = at(angle(i));
          return (
            <li
              key={s}
              className="absolute w-[36%] -translate-x-1/2 [text-wrap:balance] -translate-y-1/2 rounded-2xl bg-on-dark/12 px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-on-dark ring-1 ring-on-dark/15 backdrop-blur-sm sm:text-[15px]"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span className="tabular mb-0.5 block text-[11px] font-bold text-petal-yellow sm:text-[12px]">{i + 1}</span>
              {s}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
