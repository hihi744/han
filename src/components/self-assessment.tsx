"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { assessment } from "@/content/site";
import { buttonClass } from "./ui";

// Answers stay in this component's state only: nothing is sent or stored.
export function SelfAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLParagraphElement>(null);

  const answered = assessment.questions.filter((q) => answers[q.id] !== undefined).length;
  const complete = answered === assessment.questions.length;
  const total = Object.values(answers).reduce((s, v) => s + v, 0);
  const result = assessment.results.find((r) => total >= r.min)!;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    requestAnimationFrame(() => (complete ? resultRef.current : noticeRef.current)?.focus());
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    document.getElementById("buoc-2")?.scrollIntoView({ block: "start" });
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="space-y-6">
        {assessment.questions.map((q, qi) => {
          const missing = submitted && answers[q.id] === undefined;
          return (
            <fieldset
              key={q.id}
              className={`rounded-[var(--radius-card)] bg-paper p-6 ring-1 sm:p-8 ${missing ? "ring-2 ring-blossom-deep" : "ring-sprout-line"}`}
              aria-describedby={missing ? `${q.id}-missing` : undefined}
            >
              <legend className="sr-only">
                Tiêu chí {qi + 1}: {q.title}
              </legend>
              <div className="flex flex-wrap items-baseline justify-between gap-2" aria-hidden="true">
                <p className="text-[20px] font-bold text-moss-ink">
                  <span className="tabular text-blossom-deep">{qi + 1}.</span> {q.title}
                </p>
                <p className="tabular text-sm text-ink-muted">tối đa {q.max} điểm</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {q.options.map((o) => (
                  <label key={o.label} className="block cursor-pointer">
                    <input
                      type="radio"
                      name={q.id}
                      value={o.points}
                      checked={answers[q.id] === o.points}
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: o.points }))}
                      className="peer sr-only"
                    />
                    <span className="flex h-full items-center justify-between gap-4 rounded-2xl bg-mist p-4 ring-1 ring-inset ring-sprout-line transition-[box-shadow,background-color] duration-150 hover:bg-sprout/60 peer-checked:bg-sprout peer-checked:ring-2 peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
                      <span className="font-medium text-moss-ink">{o.label}</span>
                      <span className="tabular shrink-0 text-sm font-semibold text-ink-muted">{o.points} điểm</span>
                    </span>
                  </label>
                ))}
              </div>
              {missing && (
                <p id={`${q.id}-missing`} className="mt-3 text-sm font-medium text-blossom-deep">
                  Chị chưa chọn tiêu chí này.
                </p>
              )}
            </fieldset>
          );
        })}
      </div>

      <div className="sticky bottom-3 z-20 mt-8 flex flex-col gap-4 rounded-[var(--radius-card)] bg-paper/95 p-5 shadow-[0_20px_50px_-24px_rgba(27,38,23,0.45)] ring-1 ring-sprout-line backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] text-ink-muted">
          Đã chọn <span className="tabular font-bold text-moss-ink">{answered}/5</span> tiêu chí
        </p>
        <button type="submit" className={buttonClass("primary", "w-full sm:w-auto")}>
          Xem kết quả
        </button>
      </div>

      {submitted && !complete && (
        <p ref={noticeRef} tabIndex={-1} role="alert" className="mt-6 rounded-[var(--radius-card)] bg-pollen-tint p-5 font-medium text-moss-ink outline-none">
          {assessment.incomplete}
        </p>
      )}

      {submitted && complete && (
        <div ref={resultRef} tabIndex={-1} role="status" className="on-dark mt-8 scroll-mt-32 rounded-[var(--radius-panel)] bg-moss-deep p-8 text-on-dark outline-none sm:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[15px] text-on-dark-muted">Tổng điểm của chị</p>
              <p className="tabular text-[64px] font-extrabold leading-none tracking-tight text-petal-yellow">
                {total}
                <span className="text-[28px] text-on-dark-muted">/100</span>
              </p>
            </div>
            <p className="rounded-full bg-on-dark/10 px-4 py-1.5 text-sm font-semibold text-on-dark">{result.range}</p>
          </div>
          <h3 className="mt-8 text-[28px] text-on-dark md:text-[34px]">{result.title}</h3>
          {result.body.map((p) => (
            <p key={p} className="mt-4 max-w-3xl text-lg text-on-dark-muted">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            {result.actions.map((a, i) => (
              <Link key={a.href + a.label} href={a.href} className={buttonClass(i === 0 ? "blossom" : "outline-light")}>
                {a.label}
              </Link>
            ))}
            <button type="button" onClick={reset} className={buttonClass("outline-light")}>
              Làm lại
            </button>
          </div>
          <p className="mt-8 border-t border-on-dark/15 pt-5 text-[14px] text-on-dark-muted">{assessment.resultNote}</p>
        </div>
      )}
    </form>
  );
}
