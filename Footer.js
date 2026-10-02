import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--ink)] text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">PhishGuard</p>
          <p className="mt-2 max-w-xs text-sm text-slate-400">
            Check a link or an email before you click, reply or enter a password.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Product</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#how-it-works" className="hover:text-white">How it works</Link></li>
            <li><Link href="/#checks" className="hover:text-white">What we check</Link></li>
            <li><Link href="/register" className="hover:text-white">Create account</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Stay safe</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://owasp.org" target="_blank" rel="noreferrer" className="hover:text-white">OWASP</a></li>
            <li><a href="https://safebrowsing.google.com" target="_blank" rel="noreferrer" className="hover:text-white">Google Safe Browsing</a></li>
            <li><a href="https://www.virustotal.com" target="_blank" rel="noreferrer" className="hover:text-white">VirusTotal</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} PhishGuard. Built as a college project.
      </div>
    </footer>
  );
}