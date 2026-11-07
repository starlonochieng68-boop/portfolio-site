export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-accent-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
    </div>
  );
}
