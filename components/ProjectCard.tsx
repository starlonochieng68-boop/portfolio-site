type Project = {
  title: string;
  summary: string;
  tags: string[];
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-accent-500/50 hover:bg-slate-900/95">
      <div className="mb-8 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500/20 via-sky-500/10 to-violet-500/20 text-3xl font-black text-accent-200">
        {project.title.slice(0, 2).toUpperCase()}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-3 text-slate-300">{project.summary}</p>

      <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-semibold text-accent-300 transition group-hover:text-accent-200">
        View project →
      </a>
    </article>
  );
}
