import type { ReactNode } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

/**
 * Hides secondary detail behind one "Xem chi tiết" button. Built on <details>, so it
 * works without JavaScript; site.js opens it when a #link points inside.
 */
export function ShowMore({ children, label = "Xem chi tiết", className = "" }: { children: ReactNode; label?: string; className?: string }) {
  return (
    <details className={`group ${className}`}>
      <summary className="inline-flex min-h-12 cursor-pointer list-none items-center gap-2 rounded-full bg-paper px-6 text-[15px] font-semibold text-moss shadow-soft ring-1 ring-sprout-line transition-colors hover:bg-sprout [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{label}</span>
        <span className="hidden group-open:inline">Thu gọn</span>
        <CaretDown size={16} weight="bold" aria-hidden="true" className="transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="mt-10">{children}</div>
    </details>
  );
}
