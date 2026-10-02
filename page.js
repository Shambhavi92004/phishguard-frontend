import Link from "next/link";
import ScanDemo from "@/components/ScanDemo";

const steps = [
  { title: "Paste", text: "Copy the link or the email text you are unsure about." },
  { title: "Scan", text: "We check the address, the wording and known threat lists." },
  { title: "Decide", text: "You get a risk score and a clear recommendation." },
];

const checks = [
  { title: "Link safety", text: "HTTPS use, domain structure, lookalike names and reputation lists." },
  { title: "Email wording", text: "Urgent threats, fake security alerts and requests for passwords or OTPs." },
  { title: "Scan history", text: "Every result is saved to your dashboard so you can review it later." },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Is that link safe? Find out before you click.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-[var(--muted)]">
            PhishGuard checks links and email text for the tricks scammers use to steal passwords, bank details and OTPs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="rounded-md bg-[var(--brand)] px-6 py-3 font-semibold text-white hover:bg-[var(--brand-dark)]">
              Create free account
            </Link>
            <Link href="#how-it-works" className="rounded-md border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-semibold hover:bg-white">
              See how it works
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm text-[var(--muted)]">Try it now. This quick demo runs in your browser only.</p>
          <ScanDemo />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-y border-[var(--line)] bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-bold">How it works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-l-4 border-[var(--brand)] pl-5">
                <p className="text-sm font-semibold text-[var(--brand)]">Step {i + 1}</p>
                <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-[var(--muted)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="checks" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
        <h2 className="text-3xl font-bold">What we check</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {checks.map((c) => (
            <div key={c.title} className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <div className="rounded-2xl bg-[var(--brand)] px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">Keep a record of every link you check</h2>
          <p className="mx-auto mt-3 max-w-md text-white/80">Create an account to save your scan history and see your stats.</p>
          <Link href="/register" className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-[var(--brand-dark)] hover:bg-slate-100">
            Create free account
          </Link>
        </div>
      </section>
    </>
  );
}