import Image from "next/image";
import Link from "next/link";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { petalPaths } from "./petals";
import { buttonClass } from "./ui";

// Callers may position the slot themselves (e.g. "absolute inset-0"); otherwise it is relative.
function positioned(className: string) {
  return /\b(absolute|fixed|sticky)\b/.test(className) ? className : `relative ${className}`;
}

/**
 * Image slot. Pass `src` once real photography is available; until then it renders
 * an illustrated placeholder that names the photo it is waiting for.
 * Photos of clients need their informed consent and must never imply who has a criminal record.
 */
export function PhotoSlot({
  src,
  alt = "",
  want,
  className = "",
  tone = "dark",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src?: string;
  alt?: string;
  want: string;
  className?: string;
  tone?: "dark" | "light" | "blossom";
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`overflow-hidden ${positioned(className)}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  const palette = {
    dark: { bg: "bg-[radial-gradient(120%_90%_at_80%_10%,#4d6a46_0%,#2c3f27_55%,#1f2d1b_100%)]", petal: "#b93636", leaf: "#7d9c65", seed: "#fff2a0", tag: "bg-moss-ink/60 text-on-dark" },
    light: { bg: "bg-[radial-gradient(120%_90%_at_20%_0%,#ffffff_0%,#e6ece0_70%)]", petal: "#b93636", leaf: "#7d9c65", seed: "#fff2a0", tag: "bg-paper/80 text-ink-muted" },
    blossom: { bg: "bg-[radial-gradient(120%_90%_at_80%_0%,#fff_0%,#fbe8e9_70%)]", petal: "#b93636", leaf: "#e8a3a8", seed: "#ff9c4c", tag: "bg-paper/80 text-ink-muted" },
  }[tone];
  return (
    <div className={`overflow-hidden ${palette.bg} ${positioned(className)}`} role="img" aria-label={alt || want}>
      <svg viewBox="0 0 440 440" className="absolute -bottom-[18%] -right-[12%] h-[95%] opacity-[0.22]" aria-hidden="true">
        <path d={petalPaths.leafLeft} fill={palette.leaf} />
        <path d={petalPaths.leafRight} fill={palette.leaf} />
        <path d={petalPaths.seed} fill={palette.seed} />
        <path d={petalPaths.sprout} fill={palette.leaf} />
        <path d={petalPaths.bloom} fill={palette.petal} />
      </svg>
      <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[12px] font-medium backdrop-blur-sm ${palette.tag}`}>
        Ảnh chờ cập nhật: {want}
      </span>
    </div>
  );
}

export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-sprout-line border-y border-sprout-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[18px] font-medium text-moss-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full bg-sprout text-moss transition-transform duration-300 ease-[var(--ease-out-soft)] group-open:rotate-45"
            >
              <Plus size={18} weight="bold" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 text-ink-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="container-site mt-24" aria-labelledby="cta-title">
      <div className="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep px-6 py-14 text-on-dark sm:px-14 sm:py-20">
        <svg viewBox="0 0 440 440" className="absolute -right-16 -top-10 h-[130%] opacity-[0.12] sm:right-6" aria-hidden="true">
          <path d={petalPaths.leafLeft} fill="#7d9c65" />
          <path d={petalPaths.leafRight} fill="#7d9c65" />
          <path d={petalPaths.seed} fill="#7d9c65" />
          <path d={petalPaths.sprout} fill="#7d9c65" />
          <path d={petalPaths.bloom} fill="#b93636" />
        </svg>
        <div className="relative max-w-xl">
          <h2 id="cta-title" className="text-[32px] text-on-dark md:text-[48px]">
            {title}
          </h2>
          <p className="mt-4 text-lg text-on-dark-muted">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primary.href} className={buttonClass("blossom")}>
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className={buttonClass("outline-light")}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({
  title,
  body,
  aside,
}: {
  title: string;
  body: string;
  aside?: React.ReactNode;
}) {
  return (
    <section className="container-site pb-6 pt-14 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <h1 className="text-[40px] text-moss-ink md:text-[60px]">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted md:text-xl">{body}</p>
        </div>
        {aside}
      </div>
    </section>
  );
}

/** Two-column "Hạng mục / Nội dung" table used by every product sheet. */
export function InfoTable({
  rows,
  caption,
}: {
  rows: readonly { label: string; value: string }[];
  caption?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] bg-paper ring-1 ring-sprout-line">
      <dl className="divide-y divide-sprout-line" aria-label={caption}>
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-6 sm:px-6">
            <dt className="text-[15px] font-semibold text-moss-ink">{r.label}</dt>
            <dd className="text-[15px] text-ink-muted">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Collapsible "Lưu ý tuân thủ pháp luật" block. */
export function Compliance({ items, title = "Lưu ý tuân thủ pháp luật" }: { items: readonly string[]; title?: string }) {
  return (
    <details className="group rounded-[var(--radius-card)] bg-pollen-tint ring-1 ring-inset ring-[#ece2a8]">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-moss-ink sm:px-6 [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-paper text-moss transition-transform duration-300 group-open:rotate-45">
          <Plus size={16} weight="bold" />
        </span>
      </summary>
      <ul className="space-y-3 px-5 pb-6 text-[15px] text-ink-muted sm:px-6">
        {items.map((t) => {
          const [head, ...rest] = t.split(": ");
          return (
            <li key={t} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-moss" />
              <span>
                {rest.length ? (
                  <>
                    <strong className="font-semibold text-moss-ink">{head}:</strong> {rest.join(": ")}
                  </>
                ) : (
                  t
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

/** Bulleted list with check marks. */
export function CheckList({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <svg viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-moss" aria-hidden="true">
            <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.14" />
            <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
