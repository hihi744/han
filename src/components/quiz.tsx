import { assessment } from "@/content/site";
import { Orbs } from "./blocks";

/**
 * Self-assessment wizard. Rendered on the server; public/js/site.js turns it into a
 * one-question-at-a-time flow with a progress bar and the result screen.
 * Answers never leave the page.
 */
export function Quiz() {
  const payload = {
    results: assessment.results.map((r) => ({ ...r, body: [...r.body], actions: [...r.actions] })),
    note: assessment.resultNote,
  };
  const total = assessment.questions.length;

  return (
    <div data-quiz className="relative isolate scroll-mt-32">
      <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
      <div className="pointer-events-none absolute inset-x-0 -inset-y-10 -z-10 overflow-hidden rounded-[48px]" aria-hidden="true">
        <Orbs variant="warm" />
      </div>

      <div data-quiz-stage className="glass relative overflow-hidden rounded-[var(--radius-panel)] p-6 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p data-quiz-label className="tabular text-[15px] font-semibold text-ink-muted" aria-live="polite">
            Câu 1/{total}
          </p>
          <p className="text-[13px] text-ink-muted">Không lưu câu trả lời</p>
        </div>
        <div className="quiz-progress mt-3 h-2 overflow-hidden rounded-full bg-sprout" aria-hidden="true">
          <span className="block h-full w-0 rounded-full bg-gradient-to-r from-petal-yellow via-petal-orange to-blossom" />
        </div>

        {assessment.questions.map((q, qi) => (
          <fieldset key={q.id} data-quiz-slide hidden={qi !== 0} className="mt-8">
            <legend tabIndex={-1} className="outline-none">
              <span className="tabular block text-[13px] font-bold tracking-[0.08em] text-blossom-deep">CÂU {qi + 1}</span>
              <span className="mt-2 block text-[26px] font-bold leading-tight tracking-[-0.02em] text-moss-ink md:text-[32px]">{q.title}</span>
            </legend>
            <div className="mt-6 grid gap-3">
              {q.options.map((o) => (
                <label key={o.label} className="block cursor-pointer">
                  <input type="radio" name={q.id} value={o.points} className="peer sr-only" />
                  <span className="flex min-h-16 items-center gap-4 rounded-2xl bg-paper/80 px-5 py-4 ring-1 ring-inset ring-sprout-line transition-[box-shadow,background-color,transform] duration-300 hover:bg-paper hover:ring-moss-soft peer-checked:bg-sprout peer-checked:ring-2 peer-checked:ring-moss peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blossom-deep">
                    <span className="text-[17px] font-semibold text-moss-ink">{o.label}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <p data-quiz-notice hidden tabIndex={-1} role="alert" className="mt-6 rounded-2xl bg-pollen-tint p-4 font-medium text-moss-ink outline-none">
          {assessment.incomplete}
        </p>

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-sprout-line pt-6">
          <button type="button" data-quiz-prev hidden className="min-h-12 cursor-pointer rounded-full px-5 text-[15px] font-semibold text-moss hover:bg-sprout">
            ← Câu trước
          </button>
          <button type="button" data-quiz-next data-magnetic className="btn-sweep ml-auto inline-flex min-h-12 cursor-pointer items-center rounded-full bg-moss px-7 text-[15px] font-semibold text-on-dark shadow-[0_10px_24px_-12px_rgba(36,51,32,0.6)] hover:bg-moss-deep">
            Tiếp tục
          </button>
        </div>
      </div>

      <div data-quiz-result hidden aria-live="polite" />
    </div>
  );
}
