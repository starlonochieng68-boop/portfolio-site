import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-accent-300 hover:text-accent-200">
          ← Back home
        </Link>

        <section className="space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent-300">About</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">I design products that are clear, useful, and memorable.</h1>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                I’m a multidisciplinary designer and developer with a passion for simplifying complex problems into polished experiences.
              </p>
              <p>
                My work sits at the intersection of product strategy, visual design, and frontend implementation. I enjoy leading early-stage thinking, collaborating closely with teams, and creating interfaces people can use without friction.
              </p>
              <p>
                Over the years, I’ve helped launch tools, digital platforms, and internal products across SaaS, media, and startup environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Quick facts</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li><span className="font-semibold text-white">Based in:</span> New York, NY</li>
                <li><span className="font-semibold text-white">Experience:</span> 6+ years</li>
                <li><span className="font-semibold text-white">Specialties:</span> UX/UI, product design, frontend</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
