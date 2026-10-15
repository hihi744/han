"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { nav, type NavLink } from "@/content/site";
import { buttonClass } from "./ui";

// Hash links (e.g. "/san-pham/tai-chinh#tinh-thu") jump within a page, so they never mark the page as current.
const pathOf = (href: string) => href.split("#")[0];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const desktopNav = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Mobile menu: lock scroll, focus first link, close on Escape.
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

  // Desktop dropdowns: close on outside click or Escape (returning focus to the trigger).
  useEffect(() => {
    if (!openMenu) return;
    const onPointer = (e: PointerEvent) => {
      if (!desktopNav.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        desktopNav.current?.querySelector<HTMLElement>(`[data-menu="${openMenu}"]`)?.focus();
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const isCurrent = (href: string) =>
    !href.includes("#") && (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const groupIsCurrent = (children: NavLink[]) => children.some((c) => pathOf(c.href) === pathname);

  const pill = (active: boolean) =>
    `inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-3.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
      active ? "bg-sprout text-moss-ink" : "text-ink-muted hover:bg-sprout/60 hover:text-moss-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div
        className={`mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 rounded-full pl-5 pr-2 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open
            ? "bg-paper/90 shadow-[0_8px_30px_-12px_rgba(27,38,23,0.25)] ring-1 ring-sprout-line backdrop-blur-md"
            : "bg-paper ring-1 ring-sprout-line"
        }`}
      >
        <Link href="/" className="shrink-0 rounded-full" aria-label="Đơm Hoa, về trang chủ">
          <Image src="/brand/dom-hoa-logo.png" alt="" width={827} height={180} priority className="h-9 w-auto sm:h-11" />
        </Link>

        <nav ref={desktopNav} aria-label="Điều hướng chính" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) =>
              "children" in item ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu((m) => (m === item.label ? null : m))}
                >
                  <button
                    type="button"
                    data-menu={item.label}
                    aria-expanded={openMenu === item.label}
                    aria-controls={`menu-${item.label}`}
                    // Pointer clicks arrive after hover already opened the menu, so they only open;
                    // keyboard activation (detail === 0) toggles.
                    onClick={(e) =>
                      setOpenMenu((m) => (e.detail === 0 && m === item.label ? null : item.label))
                    }
                    className={pill(groupIsCurrent(item.children) || openMenu === item.label)}
                  >
                    {item.label}
                    <CaretDown
                      size={14}
                      weight="bold"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {/* pt-2 bridges the gap so the menu stays open while the pointer moves into it */}
                  <div id={`menu-${item.label}`} hidden={openMenu !== item.label} className="absolute left-0 top-full z-10 pt-2">
                    <ul className="w-[300px] rounded-2xl bg-paper p-2 shadow-[0_24px_60px_-20px_rgba(27,38,23,0.35)] ring-1 ring-sprout-line">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            aria-current={isCurrent(c.href) ? "page" : undefined}
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-xl px-4 py-3 hover:bg-sprout aria-[current=page]:bg-sprout"
                          >
                            <span className="block text-[15px] font-medium text-moss-ink">{c.label}</span>
                            {c.description && <span className="block text-[13px] text-ink-muted">{c.description}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={pill(isCurrent(item.href))}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/lien-he#dang-ky" className={buttonClass("primary", "max-sm:hidden min-h-11 px-5 whitespace-nowrap")}>
            Đăng ký tư vấn
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-12 cursor-pointer place-items-center rounded-full text-moss-ink hover:bg-sprout xl:hidden"
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
        className="mx-auto mt-2 max-h-[calc(100dvh-96px)] max-w-[1280px] overflow-y-auto rounded-[24px] bg-paper p-3 shadow-[0_24px_60px_-24px_rgba(27,38,23,0.35)] ring-1 ring-sprout-line xl:hidden"
      >
        <nav aria-label="Điều hướng trên di động">
          <ul className="flex flex-col">
            {nav.map((item) =>
              "children" in item ? (
                <li key={item.label} className="py-1">
                  <p className="px-4 pb-1 pt-3 text-sm font-medium text-ink-muted">{item.label}</p>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          aria-current={isCurrent(c.href) ? "page" : undefined}
                          className="block rounded-2xl px-4 py-3 text-[17px] font-medium hover:bg-sprout aria-[current=page]:bg-sprout"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-sprout aria-[current=page]:bg-sprout"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link href="/lien-he#dang-ky" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-2 w-full")}>
            Đăng ký tư vấn vay
          </Link>
        </nav>
      </div>
    </header>
  );
}
