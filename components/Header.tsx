"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="REAE" width={120} height={40} priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#who-its-for"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Who It&apos;s For
          </a>
          <a
            href="#about"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </a>
          <a
            href="https://apply.getreae.com/join-beta/?utm_source=website&utm_medium=cta&utm_campaign=founding_member_beta&utm_content=header"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Apply for Beta
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#how-it-works"
              className="text-base text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#who-its-for"
              className="text-base text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Who It&apos;s For
            </a>
            <a
              href="#about"
              className="text-base text-slate-600 hover:text-slate-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <a
              href="https://apply.getreae.com/join-beta/?utm_source=website&utm_medium=cta&utm_campaign=founding_member_beta&utm_content=header"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-blue-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Apply for Beta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
