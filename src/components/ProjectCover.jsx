import TechIcon from './ui/TechIcon';

// Generative cover art per project: hue-driven gradient mesh, grid, headline metric and stack icons.
export default function ProjectCover({ project, large = false }) {
  const { hue, metric, stack } = project;
  const icons = stack.slice(0, large ? 6 : 4);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, hsl(${hue} 85% 60% / 0.35), transparent 55%),
          radial-gradient(90% 80% at 100% 100%, hsl(${(hue + 60) % 360} 80% 60% / 0.25), transparent 60%),
          linear-gradient(160deg, hsl(${hue} 30% 12%), #0a0b11 70%)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-70 [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      {/* soft orb that drifts on hover */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl transition-transform duration-700 group-hover:-translate-x-6 group-hover:translate-y-6"
        style={{ background: `hsl(${hue} 90% 65% / 0.35)` }}
      />

      <div className={`relative flex h-full flex-col justify-between ${large ? 'p-8' : 'p-5'}`}>
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-md border border-white/10 bg-black/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
            {project.featured ? '★ featured' : project.year}
          </span>
          <div className="flex -space-x-1.5">
            {icons.map((name, i) => (
              <span
                key={name}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-ink-900/80 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
                title={name}
              >
                <TechIcon name={name} size={14} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <div
            className={`font-display font-bold leading-none tracking-tight text-white ${large ? 'text-6xl sm:text-7xl' : 'text-4xl'}`}
            style={{ textShadow: `0 0 40px hsl(${hue} 90% 60% / 0.5)` }}
          >
            {metric.value}
          </div>
          <div className="mt-2 font-mono text-xs uppercase tracking-widest text-white/60">{metric.label}</div>
        </div>
      </div>
    </div>
  );
}
