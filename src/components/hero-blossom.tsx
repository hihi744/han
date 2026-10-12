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

const example = summarize(8_000_000, 12, 0.09);

export function HeroBlossom() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
      <div className="relative mx-auto aspect-square w-[78%] lg:w-[72%]">
        <svg viewBox="0 0 440 440" className="size-full overflow-visible" role="img" aria-labelledby="hero-art-title">
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
        className="relative mx-auto -mt-4 w-full max-w-[300px] rounded-2xl bg-paper p-5 text-ink shadow-[0_24px_60px_-20px_rgba(10,20,8,0.55)] lg:mr-0"
      >
        <figcaption className="text-sm font-medium text-ink-muted">Ví dụ một khoản vay đầu tiên</figcaption>
        <p className="font-display tabular mt-1 text-[28px] font-semibold tracking-tight text-moss-ink">
          8.000.000 đ
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
          Tính với lãi suất minh họa 9%/năm, chưa phải lãi suất chính thức.
        </p>
      </motion.figure>
    </div>
  );
}
