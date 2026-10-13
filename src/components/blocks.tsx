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
