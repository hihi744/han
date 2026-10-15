import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "blossom" | "ghost" | "light" | "outline-light";

const variants: Record<Variant, string> = {
  primary: "btn-sweep bg-moss text-on-dark shadow-[0_10px_24px_-12px_rgba(36,51,32,0.6)] hover:bg-moss-deep",
  blossom: "btn-sweep bg-blossom text-moss-ink shadow-[0_10px_28px_-12px_rgba(232,139,146,0.9)] hover:bg-[#ef9da3]",
  ghost: "text-moss hover:bg-sprout",
  light: "bg-mist text-moss-ink hover:bg-white",
  "outline-light": "text-on-dark ring-1 ring-inset ring-on-dark/35 hover:bg-on-dark/10",
};

export function buttonClass(variant: Variant = "primary", extra = "") {
  return [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold",
    "transition-[background-color,box-shadow] duration-300 active:scale-[0.98] cursor-pointer",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    extra,
  ].join(" ");
}

export function LinkButton({
  variant = "primary",
  className = "",
  withIcon = false,
  magnetic = true,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; withIcon?: boolean; magnetic?: boolean }) {
  return (
    <Link className={buttonClass(variant, className)} data-magnetic={magnetic ? "" : undefined} {...props}>
      {children}
      {withIcon && (
        <span
          aria-hidden="true"
          className="-mr-3 grid size-8 place-items-center rounded-full bg-current/10"
        >
          <ArrowUpRight size={16} weight="bold" />
        </span>
      )}
    </Link>
  );
}

export function SectionHeading({
  title,
  intro,
  align = "center",
  tone = "light",
  id,
}: {
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  id?: string;
}) {
  const centered = align === "center";
  return (
    <div data-reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2
        id={id}
        className={`text-[34px] font-bold tracking-[-0.035em] md:text-[50px] ${tone === "dark" ? "text-on-dark" : "text-moss-ink"}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg ${tone === "dark" ? "text-on-dark-muted" : "text-ink-muted"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Visible marker for content Đơm Hoa still has to confirm. Search the code for <Tbc to find them all. */
export function Tbc({ children, note = "Cần xác nhận" }: { children?: ReactNode; note?: string }) {
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-1.5">
      {children}
      <span
        title="Nội dung tạm thời, cần Đơm Hoa xác nhận trước khi công bố"
        className="rounded-md bg-pollen-tint px-1.5 py-0.5 text-[12px] font-medium leading-none text-[#6b5a10] ring-1 ring-inset ring-[#e8d98a]"
      >
        {note}
      </span>
    </span>
  );
}

export function Pill({ children, tone = "sprout" }: { children: ReactNode; tone?: "sprout" | "blossom" | "pollen" | "dark" }) {
  const tones = {
    sprout: "bg-sprout text-moss",
    blossom: "bg-blossom-tint text-blossom-deep",
    pollen: "bg-pollen-tint text-[#6b5a10]",
    dark: "bg-on-dark/10 text-on-dark",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
