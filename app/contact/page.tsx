import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-accent-300 hover:text-accent-200">
          ← Back home
        </Link>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Let’s build something meaningful.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            I’m available for product design, frontend development, and consulting work. Reach out and let’s talk about your goals.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <a href="mailto:alex@example.com" className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-accent-400">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
              <p className="mt-3 font-semibold text-white">alex@example.com</p>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-accent-400">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">LinkedIn</p>
              <p className="mt-3 font-semibold text-white">linkedin.com/in/alex</p>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-accent-400">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">GitHub</p>
              <p className="mt-3 font-semibold text-white">github.com/alex</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
