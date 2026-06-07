"use client";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0f0d0b]/95 backdrop-blur-md border-b border-amber-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <circle cx="18" cy="18" r="17" stroke="#c9a84c" strokeWidth="1.5" />
                <path d="M10 26 Q14 10 18 18 Q22 26 26 10" stroke="#c9a84c" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="18" cy="18" r="2.5" fill="#c9a84c" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-white font-serif leading-none">
                StrokeWorks
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-amber-400/70 uppercase leading-none mt-0.5">
                Art &amp; Exhibition
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-stone-300 hover:text-amber-400 transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/gallery"
              className="px-5 py-2 text-sm font-medium rounded-full border border-amber-500/60 text-amber-400 hover:bg-amber-500/10 transition-colors duration-200"
            >
              View Gallery
            </Link>
            <Link
              href="/contact-us"
              className="px-5 py-2 text-sm font-medium rounded-full bg-amber-500 text-black hover:bg-amber-400 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-stone-400 hover:text-amber-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-amber-900/30 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-2.5 text-sm text-stone-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3 pt-3 border-t border-amber-900/20">
              <Link href="/contact-us" className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-full bg-amber-500 text-black hover:bg-amber-400 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};