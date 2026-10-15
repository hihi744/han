import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Camera, Plus } from "@phosphor-icons/react/dist/ssr";
import { petalPaths } from "./petals";
import { buttonClass } from "./ui";
import { photos } from "@/content/site";

// Callers may position the frame themselves (e.g. "absolute inset-0"); otherwise it is relative.
function positioned(className: string) {
  return /\b(absolute|fixed|sticky)\b/.test(className) ? className : `relative ${className}`;
}

/**
 * Numbered photo frame. Shows the photo once `photos[n].file` is set in src/content/site.ts;
 * until then it shows a gallery-style placeholder naming the photo number and size needed.
 */
export function Photo({
  n,
  className = "",
  tone = "light",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  parallax,
}: {
  n: number;
  className?: string;
  tone?: "light" | "dark";
  priority?: boolean;
  sizes?: string;
  parallax?: number;
}) {
  const photo = photos[n];
  const frame = `zoom-frame ${positioned(className)}`;
  // Parallax moves an oversized inner layer so the frame edges never show.
  const inner = parallax ? "absolute -inset-y-[12%] inset-x-0" : "absolute inset-0";

  if (photo?.file) {
    return (
      <div className={frame}>
        <div className={inner} data-parallax={parallax}>
          <Image src={photo.file} alt={photo.alt} fill sizes={sizes} priority={priority} className="zoom-target object-cover" />
        </div>
      </div>
    );
  }

  const dark = tone === "dark";
  return (
    <div className={`${frame} ${dark ? "bg-moss-deep" : "bg-sprout"}`} role="img" aria-label={`Ảnh minh họa: ${photo?.alt ?? ""}`}>
      <div className={`zoom-target ${inner}`} data-parallax={parallax}>
        <div
          className={`absolute inset-0 ${
            dark
              ? "bg-[radial-gradient(120%_90%_at_80%_10%,#4d6a46_0%,#2c3f27_55%,#1f2d1b_100%)]"
              : "bg-[radial-gradient(120%_100%_at_15%_0%,#ffffff_0%,#eef2e8_45%,#dfe7d6_100%)]"
          }`}
        />
        <svg viewBox="0 0 440 440" className="absolute -bottom-[14%] -right-[10%] h-[85%] opacity-[0.16]" aria-hidden="true">
          <path d={petalPaths.leafLeft} fill="#7d9c65" />
          <path d={petalPaths.leafRight} fill="#ff9c4c" />
          <path d={petalPaths.seed} fill="#fff2a0" />
          <path d={petalPaths.sprout} fill="#7d9c65" />
          <path d={petalPaths.bloom} fill="#b93636" />
        </svg>
      </div>
      <div
        className={`pointer-events-none absolute inset-3 rounded-[calc(var(--radius-card)-6px)] border-[1.5px] border-dashed sm:inset-4 ${
          dark ? "border-on-dark/30" : "border-moss/25"
        }`}
        aria-hidden="true"
      />
      <div className={`absolute inset-0 grid place-items-center p-6 text-center ${dark ? "text-on-dark" : "text-moss-ink"}`}>
        <div className="max-w-[240px]">
          <span className={`mx-auto grid size-12 place-items-center rounded-full ${dark ? "glass-dark" : "glass"}`}>
            <Camera size={22} weight="duotone" aria-hidden="true" />
          </span>
          <p className="mt-3 text-[13px] font-bold tracking-[0.08em]">ẢNH {String(n).padStart(2, "0")}</p>
          <p className={`mt-1 text-[14px] leading-snug ${dark ? "text-on-dark-muted" : "text-ink-muted"}`}>{photo?.want}</p>
          <p className={`tabular mt-1 text-[12px] ${dark ? "text-on-dark-muted/80" : "text-ink-muted/80"}`}>{photo?.size}</p>
        </div>
      </div>
    </div>
  );
}

/** Soft ambient glow orbs, placed inside a `relative overflow-hidden` section. */
export function Orbs({ variant = "warm" }: { variant?: "warm" | "cool" | "dark" }) {
  const sets = {
    warm: [
      { c: "#fff2a0", o: 0.7, w: 520, s: { left: "-160px", top: "-120px" }, x: "60px", y: "40px", sp: "26s" },
      { c: "#e88b92", o: 0.28, w: 460, s: { right: "-120px", top: "30%" }, x: "-50px", y: "-40px", sp: "30s" },
    ],
    cool: [
      { c: "#c9d9bf", o: 0.7, w: 560, s: { right: "-180px", top: "-160px" }, x: "-60px", y: "50px", sp: "28s" },
      { c: "#fff2a0", o: 0.5, w: 420, s: { left: "-140px", bottom: "-160px" }, x: "50px", y: "-40px", sp: "24s" },
    ],
    dark: [
      { c: "#ff9c4c", o: 0.22, w: 520, s: { right: "-160px", top: "-200px" }, x: "-40px", y: "40px", sp: "26s" },
      { c: "#7d9c65", o: 0.3, w: 480, s: { left: "-180px", bottom: "-220px" }, x: "60px", y: "-30px", sp: "30s" },
    ],
  }[variant];
  return (
    <>
      {sets.map((o, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="orb"
          style={
            {
              ...o.s,
              width: o.w,
              height: o.w,
              "--orb-color": o.c,
              "--orb-opacity": o.o,
              "--orb-x": o.x,
              "--orb-y": o.y,
              "--orb-speed": o.sp,
            } as unknown as CSSProperties
          }
        />
      ))}
    </>
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
    <section className="container-site mt-28" aria-labelledby="cta-title">
      <div data-reveal="scale" className="on-dark relative overflow-hidden rounded-[var(--radius-panel)] bg-moss-deep px-6 py-16 text-on-dark sm:px-14 sm:py-24">
        <Orbs variant="dark" />
        <svg viewBox="0 0 440 440" className="absolute -right-16 -top-10 h-[130%] opacity-[0.1] sm:right-6" aria-hidden="true" data-parallax="0.06">
          <path d={petalPaths.leafLeft} fill="#7d9c65" />
          <path d={petalPaths.leafRight} fill="#7d9c65" />
          <path d={petalPaths.seed} fill="#7d9c65" />
          <path d={petalPaths.sprout} fill="#7d9c65" />
          <path d={petalPaths.bloom} fill="#b93636" />
        </svg>
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="text-[34px] font-light leading-[1.15] tracking-[-0.03em] text-on-dark md:text-[54px]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-on-dark-muted">{body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={primary.href} data-magnetic className={buttonClass("blossom")}>
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} data-magnetic className={buttonClass("outline-light")}>
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
  eyebrow,
  photo,
}: {
  title: string;
  body: string;
  aside?: ReactNode;
  eyebrow?: string;
  /** Optional banner photo number shown under the intro. */
  photo?: number;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-14 md:pt-20">
      <Orbs variant="cool" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div data-reveal>
            {eyebrow && <p className="text-[15px] font-semibold text-blossom-deep">{eyebrow}</p>}
            <h1 className="mt-2 text-[44px] font-bold leading-[1.08] tracking-[-0.035em] text-moss-ink md:text-[72px]">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-muted md:text-xl">{body}</p>
          </div>
          {aside && <div data-reveal>{aside}</div>}
        </div>
        {photo && (
          <div data-reveal="scale" className="mt-12">
            <Photo n={photo} parallax={0.08} className="aspect-[12/5] min-h-[240px] w-full rounded-[var(--radius-panel)]" priority sizes="100vw" />
          </div>
        )}
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
