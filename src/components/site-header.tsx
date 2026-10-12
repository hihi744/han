"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { nav } from "@/content/site";
import { buttonClass } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div
        className={`mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 rounded-full pl-5 pr-2 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open
            ? "bg-paper/90 shadow-[0_8px_30px_-12px_rgba(27,38,23,0.25)] ring-1 ring-sprout-line backdrop-blur-md"
            : "bg-paper ring-1 ring-sprout-line"
        }`}
      >
        <Link href="/" className="shrink-0 rounded-full" aria-label="Đơm Hoa, về trang chủ">
          <Image
            src="/brand/dom-hoa-logo.png"
            alt=""
            width={406}
            height={90}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                    isActive(item.href) ? "bg-sprout text-moss-ink" : "text-ink-muted hover:text-moss-ink hover:bg-sprout/60"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/dang-ky" className={buttonClass("primary", "max-sm:hidden min-h-11 px-5")}>
            Đăng ký tư vấn
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-12 cursor-pointer place-items-center rounded-full text-moss-ink hover:bg-sprout lg:hidden"
          >
            <span className="sr-only">{open ? "Đóng menu" : "Mở menu"}</span>
            {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="mx-auto mt-2 max-w-[1200px] rounded-[24px] bg-paper p-3 shadow-[0_24px_60px_-24px_rgba(27,38,23,0.35)] ring-1 ring-sprout-line lg:hidden"
      >
        <nav aria-label="Điều hướng trên di động">
          <ul className="flex flex-col">
            <li>
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-sprout aria-[current=page]:bg-sprout">
                Trang chủ
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-sprout aria-[current=page]:bg-sprout"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/dang-ky" className={buttonClass("primary", "mt-2 w-full")}>
            Đăng ký tư vấn vay
          </Link>
        </nav>
      </div>
    </header>
  );
}
