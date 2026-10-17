"use client";

import { motion, useReducedMotion } from "motion/react";
import { petalPaths, stageColors } from "./petals";
import { formatVnd, summarize } from "@/lib/loan";

const c = stageColors.onDark;

// Growth order: seed -> sprout -> both leaves -> bloom. One orchestrated moment on load.
const pieces = [
  { d: petalPaths.seed, fill: c.seed, delay: 0.15 },
  { d: petalPaths.sprout, fill: c.sprout, delay: 0.45 },
  { d: petalPaths.leafLeft, fill: c.leafLeft, delay: 0.8 },
  { d: petalPaths.leafRight, fill: c.leafRight, delay: 0.95 },
  { d: petalPaths.bloom, fill: c.bloom, delay: 1.35 },
];

const labels = [
  { text: "Gieo", sub: "Tin tưởng", className: "left-[-4%] bottom-[2%]", delay: 0.35 },
  { text: "Ươm", sub: "Thấu hiểu", className: "right-[-12%] bottom-[8%]", delay: 0.65 },
  { text: "Vun", sub: "Đồng hành", className: "left-[-8%] top-[30%]", delay: 1.1 },
  { text: "Nở", sub: "Tự chủ", className: "right-[6%] top-[-2%]", delay: 1.55 },
];

// Gói 1 (group start-up loan), first cycle: 0,8%/tháng on the declining balance.
const example = summarize(10_000_000, 12, 0.008);

export type HeroTreatment = "none" | "glow" | "shadow" | "glass" | "aura" | "soft-white";

// Backdrops behind the flower. Purely decorative, sized relative to the art box.
function Backdrop({ treatment, auraStrength = 1 }: { treatment: HeroTreatment; auraStrength?: number }) {
  switch (treatment) {
    case "glow":
      return <div aria-hidden="true" className="absolute inset-[-10%] rounded-full bg-[#f6f7f2]/35 blur-[70px]" />;
    case "glass":
      return (
        <div
          aria-hidden="true"
          className="absolute inset-[-8%] rounded-full bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/20 backdrop-blur-xl"
        />
      );
    case "aura": {
      // Logo colours as blurred light: red behind the bloom, orange right, yellow below.
      const a = (base: number) => Math.min(1, base * auraStrength);
      const blob = "absolute rounded-full blur-[60px]";
      const size = `${45 + (auraStrength - 1) * 12}%`;
      return (
        <div aria-hidden="true" className="absolute inset-[-12%]">
          <div className={blob} style={{ left: "30%", top: "2%", width: size, height: size, background: `rgba(185,54,54,${a(0.6)})` }} />
          <div className={blob} style={{ right: "2%", top: "30%", width: size, height: size, background: `rgba(255,156,76,${a(0.5)})` }} />
          <div className={blob} style={{ left: "8%", bottom: "4%", width: size, height: size, background: `rgba(255,242,160,${a(0.45)})` }} />
        </div>
      );
    }
    case "soft-white":
      return <div aria-hidden="true" className="absolute inset-[-6%] rounded-full bg-[#f6f7f2]/90 blur-[28px]" />;
    default:
      return null;
  }
}

const shadowed: HeroTreatment[] = ["shadow", "soft-white", "glass"];

export function HeroBlossom({
  treatment = "aura",
  auraStrength = 1,
}: {
  treatment?: HeroTreatment;
  /** 1 = default; below 1 is softer, above 1 is stronger and wider. */
  auraStrength?: number;
}) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
      <div className="relative mx-auto aspect-square w-[78%] lg:w-[72%]">
        <Backdrop treatment={treatment} auraStrength={auraStrength} />
        <svg
          viewBox="0 0 440 440"
          className="relative size-full overflow-visible"
          style={
            shadowed.includes(treatment)
              ? { filter: "drop-shadow(0 22px 28px rgba(10,20,8,0.45)) drop-shadow(0 4px 6px rgba(10,20,8,0.25))" }
              : undefined
          }
          role="img"
          aria-labelledby="hero-art-title"
        >
          <title id="hero-art-title">
            Bông hoa Đơm Hoa lớn dần qua bốn chặng: Gieo, Ươm, Vun, Nở
          </title>
          {pieces.map((p, i) => (
            <motion.path
              key={i}
              d={p.d}
              fill={p.fill}
              initial={reduce ? false : { opacity: 0, y: 28, scale: 0.86 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: p.delay, ease }}
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            />
          ))}
        </svg>

        {labels.map((l) => (
          <motion.div
            key={l.text}
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: l.delay, ease }}
            className={`absolute hidden rounded-full bg-moss-ink/70 px-3 py-1.5 text-sm text-on-dark ring-1 ring-on-dark/15 backdrop-blur-sm sm:block ${l.className}`}
          >
            <span className="font-semibold">{l.text}</span>
            <span className="text-on-dark-muted"> / {l.sub}</span>
          </motion.div>
        ))}
      </div>

      <motion.figure
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.8, ease }}
        className="glass relative mx-auto -mt-4 w-full max-w-[300px] rounded-2xl p-5 text-ink shadow-[0_24px_60px_-20px_rgba(10,20,8,0.55)] lg:mr-0"
      >
        <figcaption className="text-sm font-medium text-ink-muted">Ví dụ Gói 1, chu kỳ đầu</figcaption>
        <p className="font-display tabular mt-1 text-[28px] font-semibold tracking-tight text-moss-ink">
          10.000.000 đ
        </p>
        <dl className="mt-3 space-y-1.5 text-[15px]">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Kỳ hạn</dt>
            <dd className="font-medium">12 tháng</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Trả tháng đầu</dt>
            <dd className="tabular font-medium">{formatVnd(example.firstPayment)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-muted">Tổng tiền lãi</dt>
            <dd className="tabular font-medium">{formatVnd(example.totalInterest)}</dd>
          </div>
        </dl>
        <p className="mt-3 border-t border-sprout-line pt-3 text-[13px] leading-snug text-ink-muted">
          Lãi suất 0,8%/tháng, tính trên dư nợ giảm dần. Không cần tài sản thế chấp.
        </p>
      </motion.figure>
    </div>
  );
}
