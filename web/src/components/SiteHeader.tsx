"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const nav = [
  { href: "#products", label: "المنتجات" },
  { href: "#brands", label: "الماركات" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,box-shadow,border-color,color] duration-300 ${
        solid
          ? "border-b border-line bg-white/95 text-brand-deep shadow-[0_8px_30px_-18px_rgba(26,63,117,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-icon.png"
            alt="شعار مجموعة البداية"
            width={40}
            height={36}
            className={`h-8 w-auto shrink-0 sm:h-9 ${solid ? "" : "brightness-0 invert"}`}
            priority
          />
          <span className="font-display truncate text-[0.95rem] font-bold tracking-tight sm:text-lg">
            مجموعة البداية
          </span>
        </a>

        <nav
          className={`hidden items-center gap-7 text-sm font-medium md:flex ${
            solid ? "text-ink/70" : "text-white/80"
          }`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                solid
                  ? "hover:text-brand-deep after:bg-brand"
                  : "hover:text-white after:bg-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+218914497272"
            className={`hidden rounded-md px-3.5 py-2 text-sm font-semibold transition duration-300 sm:inline-flex ${
              solid
                ? "bg-brand text-white hover:bg-brand-deep"
                : "bg-white/15 text-white ring-1 ring-white/30 hover:bg-white/25"
            }`}
          >
            اتصل الآن
          </a>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition md:hidden ${
              solid
                ? "text-brand-deep ring-1 ring-brand/15 hover:bg-brand-soft"
                : "text-white ring-1 ring-white/30 hover:bg-white/10"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "إغلاق" : "القائمة"}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[6px] h-0.5 rounded-full bg-current transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-[12px] h-0.5 rounded-full bg-current transition duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-line/70 bg-white transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-base font-semibold text-ink transition hover:bg-brand-soft hover:text-brand-deep"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+218914497272"
            className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-4 py-3 text-base font-bold text-white"
            onClick={() => setOpen(false)}
          >
            اتصل الآن · 0914497272
          </a>
          <a
            href="https://wa.me/218914497272"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-brand-soft px-4 py-3 text-base font-bold text-brand-deep ring-1 ring-brand/20"
            onClick={() => setOpen(false)}
          >
            واتساب
          </a>
        </nav>
      </div>
    </header>
  );
}
