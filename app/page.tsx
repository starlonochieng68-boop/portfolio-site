import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-sm font-medium text-accent-300">
              Available for freelance and full-time roles
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              Building digital products that feel effortless.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              I’m Alex Morgan, a product designer and frontend developer focused on turning complex ideas into elegant, human-centered experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition hover:bg-accent-400"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Let’s talk
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-slate-400">Profile</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">
                Open to work
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 via-blue-500 to-violet-500 font-black text-2xl text-white">
                AM
              </div>
              <div>
                <h2 className="text-2xl font-bold">Alex Morgan</h2>
                <p className="text-slate-400">Designer • Developer • Strategist</p>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Focus</p>
                <p className="mt-2 text-slate-300">UX strategy, design systems, frontend engineering, product storytelling.</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Currently</p>
                <p className="mt-2 text-slate-300">Leading product experiments at a fast-growing startup in New York.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Selected work</p>
            <h2 className="mt-3 text-3xl font-bold">Featured projects</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-accent-300 hover:text-accent-200">
            See all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Why work with me</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 h-12 w-12 rounded-2xl bg-accent-500/15 text-center text-2xl leading-[3rem] text-accent-300">01</div>
              <h3 className="text-xl font-semibold">Product thinking</h3>
              <p className="mt-3 text-slate-300">I connect user needs, business goals, and technical feasibility into clear product direction.</p>
            </div>
            <div>
              <div className="mb-4 h-12 w-12 rounded-2xl bg-accent-500/15 text-center text-2xl leading-[3rem] text-accent-300">02</div>
              <h3 className="text-xl font-semibold">Design systems</h3>
              <p className="mt-3 text-slate-300">I build scalable interfaces that are consistent, accessible, and easy for teams to maintain.</p>
            </div>
            <div>
              <div className="mb-4 h-12 w-12 rounded-2xl bg-accent-500/15 text-center text-2xl leading-[3rem] text-accent-300">03</div>
              <h3 className="text-xl font-semibold">Frontend craft</h3>
              <p className="mt-3 text-slate-300">I turn polished designs into performant web experiences with clean implementation and strong UX.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
