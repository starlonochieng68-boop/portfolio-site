import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-accent-300 hover:text-accent-200">
          ← Back home
        </Link>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Projects</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Selected work</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
