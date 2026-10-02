"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#checks", label: "What we check" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-display)] text-xl font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--brand)] text-white" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          PhishGuard
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium hover:text-[var(--brand)] ${pathname === l.href ? "text-[var(--brand)]" : "text-[var(--muted)]"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--paper)]">Log in</Link>
          <Link href="/register" className="rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--brand-dark)]">
            Create account
          </Link>
        </div>

        <button
          className="rounded-md border border-[var(--line)] p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] px-5 pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link href="/login" onClick={() => setOpen(false)} className="flex-1 rounded-md border border-[var(--line)] py-2 text-center text-sm font-medium">Log in</Link>
            <Link href="/register" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-[var(--brand)] py-2 text-center text-sm font-semibold text-white">Create account</Link>
          </div>
        </div>
      )}
    </header>
  );
}