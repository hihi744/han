"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// Sample stories. Replace only with real stories told with the person's informed
// consent; use a first name or alias, never details that reveal a criminal record.
const stories = [
  {
    quote:
      "Lần đầu tiên có người ngồi tính cùng tôi xem mỗi tháng bán được bao nhiêu, trả được bao nhiêu. Tôi vay ít thôi, nhưng tôi biết mình trả được.",
    who: "Chị H., bán đồ ăn sáng",
    tone: "bg-pollen-tint",
    big: true,
  },
  {
    quote: "Lớp may có cô kèm từng đường kim. Hết hai tháng là có chỗ làm chờ sẵn, không phải đi xin khắp nơi.",
    who: "Chị T., thợ may gia công",
    tone: "bg-sprout",
  },
  {
    quote: "Ở nhóm không ai hỏi chuyện cũ. Mọi người chỉ hỏi tuần này hàng bán có chạy không.",
    who: "Chị L., bán hàng online",
    tone: "bg-blossom-tint",
  },
  {
    quote: "Tôi tưởng mình phải có tài sản mới vay được. Hóa ra chỉ cần một kế hoạch làm ăn rõ ràng.",
    who: "Chị N., làm bánh theo đơn",
    tone: "bg-sprout",
  },
];

export function StoryRail() {
  const rail = useRef<HTMLUListElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 20), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div>
      <div className="container-site flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 id="stories-title" className="text-[32px] text-moss-ink md:text-[44px]">
            Những mùa hoa đầu tiên
          </h2>
          <p className="mt-3 text-lg text-ink-muted">
            Câu chuyện thật sẽ được kể ở đây, khi chính người trong cuộc đồng ý chia sẻ.
          </p>
          <p className="mt-3 inline-block rounded-md bg-pollen-tint px-2 py-1 text-[13px] font-medium text-[#6b5a10] ring-1 ring-inset ring-[#e8d98a]">
            Nội dung mẫu, sẽ thay bằng câu chuyện thật đã được đồng ý
          </p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button type="button" onClick={() => scroll(-1)} className="grid size-12 cursor-pointer place-items-center rounded-full ring-1 ring-sprout-line hover:bg-sprout" aria-label="Câu chuyện trước">
            <CaretLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scroll(1)} className="grid size-12 cursor-pointer place-items-center rounded-full bg-moss text-on-dark hover:bg-moss-deep" aria-label="Câu chuyện tiếp theo">
            <CaretRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={rail}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] md:scroll-px-[max(32px,calc((100vw-1136px)/2))] md:px-[max(32px,calc((100vw-1136px)/2))]"
        aria-labelledby="stories-title"
      >
        {stories.map((s) => (
          <li
            key={s.who}
            className={`flex shrink-0 snap-start flex-col justify-between rounded-[var(--radius-card)] p-7 sm:p-9 ${s.tone} ${
              s.big ? "w-[88%] sm:w-[560px]" : "w-[78%] sm:w-[360px]"
            }`}
          >
            <blockquote>
              <p className={s.big ? "text-[22px] leading-snug text-moss-ink sm:text-[30px]" : "text-[18px] leading-relaxed text-moss-ink"}>
                “{s.quote}”
              </p>
            </blockquote>
            <p className="mt-10 text-[15px] font-medium text-ink-muted">{s.who}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
