import Link from "next/link";

export default function AuthShell({ title, subtitle, children, footerText, footerLink, footerLabel }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
      <div className="hidden md:block">
        <h1 className="text-4xl font-bold leading-tight">Stay one step ahead of scammers.</h1>
        <ul className="mt-6 space-y-3 text-[var(--muted)]">
          <li>• Check links and emails in seconds</li>
          <li>• See exactly why something looks risky</li>
          <li>• Keep a history of everything you scanned</li>
        </ul>
      </div>

      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-7 shadow-sm">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">{subtitle}</p>
        <div className="mt-6">{children}</div>
        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          {footerText}{" "}
          <Link href={footerLink} className="font-semibold text-[var(--brand)] hover:underline">{footerLabel}</Link>
        </p>
      </div>
    </div>
  );
}