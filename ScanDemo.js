"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["login", "verify", "secure", "account", "update", "free", "bank", "paypal", "otp"];

function quickScan(raw) {
  const url = raw.trim().toLowerCase();
  let score = 0;
  const reasons = [];
  if (url.startsWith("http://")) { score += 20; reasons.push("Does not use HTTPS"); }
  const hits = WORDS.filter((w) => url.includes(w));
  if (hits.length) { score += Math.min(hits.length * 15, 45); reasons.push(`Suspicious words: ${hits.join(", ")}`); }
  const host = url.replace(/^https?:\/\//, "").split("/")[0];
  if ((host.match(/-/g) || []).length >= 2) { score += 15; reasons.push("Many hyphens in the domain"); }
  if (/\d{1,3}(\.\d{1,3}){3}/.test(host)) { score += 25; reasons.push("Uses a raw IP address"); }
  score = Math.min(score, 100);
  const level = score >= 60 ? "HIGH" : score >= 30 ? "MEDIUM" : "LOW";
  if (!reasons.length) reasons.push("No obvious warning signs in this quick check");
  return { score, level, reasons };
}

const colors = { HIGH: "var(--danger)", MEDIUM: "var(--warn)", LOW: "var(--safe)" };

export default function ScanDemo() {
  const [value, setValue] = useState("http://secure-paypal-login-free.com");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) {
      setError("Enter a link to check.");
      setResult(null);
      return;
    }
    setError("");
    setResult(quickScan(value));
  }

  return (
    <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
        <label htmlFor="demo-url" className="sr-only">Link to check</label>
        <input
          id="demo-url"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Paste a link here"
          className="min-w-0 flex-1 rounded-md border border-[var(--line)] px-4 py-3 text-sm"
        />
        <button className="rounded-md bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--brand-dark)]">
          Check link
        </button>
      </form>
      {error && <p role="alert" className="mt-3 text-sm text-[var(--danger)]">{error}</p>}

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result.score + value}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 border-t border-[var(--line)] pt-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Risk level: <span style={{ color: colors[result.level] }}>{result.level}</span></p>
              <p className="text-sm text-[var(--muted)]">{result.score}% risk</p>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-[var(--paper)]" role="progressbar" aria-valuenow={result.score} aria-valuemin={0} aria-valuemax={100}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: colors[result.level] }}
              />
            </div>
            <ul className="mt-4 space-y-1 text-sm text-[var(--muted)]">
              {result.reasons.map((r) => <li key={r}>• {r}</li>)}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}