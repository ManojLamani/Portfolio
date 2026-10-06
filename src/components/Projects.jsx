import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiMaximize2 } from 'react-icons/fi';
import { profile, projectFilters, projects } from '../data/portfolio';
import ProjectCover from './ProjectCover';
import ProjectModal from './ProjectModal';
import SectionHeading from './ui/SectionHeading';
import TechIcon from './ui/TechIcon';
import Magnetic from './ui/Magnetic';
import { EASE } from './ui/motion';

function ProjectCard({ project, variant, onOpen }) {
  const wide = variant === 'wide';
  const featured = variant !== 'normal';

  // subtle 3D tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 });

  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    if (e.pointerType !== 'mouse') return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const onPointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const extra = project.stack.length - 5;

  return (
    <motion.article
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={() => onOpen(project)}
      className={`card spotlight group flex cursor-pointer flex-col overflow-hidden ${wide ? 'lg:flex-row' : ''}`}
    >
      <div className={`relative shrink-0 overflow-hidden ${wide ? 'h-60 lg:h-auto lg:w-[46%]' : featured ? 'h-56' : 'h-44'}`}>
        <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectCover project={project} large={wide} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${wide ? 'p-7 sm:p-9' : 'p-6'}`}>
        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 truncate font-mono text-[11px] uppercase tracking-widest text-fg-dim">{project.tagline}</p>
          {project.live && (
            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-mint/10 px-2 py-0.5 text-[11px] text-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Live
            </span>
          )}
        </div>

        <h3 className={`mt-3 font-display font-semibold tracking-tight ${wide ? 'text-3xl' : 'text-xl'}`}>
          <span className="bg-gradient-to-r from-mint to-iris bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
            {project.title}
          </span>
        </h3>

        <p className={`mt-3 text-sm leading-relaxed text-fg-muted ${featured ? '' : 'line-clamp-3'}`}>{project.description}</p>

        {wide && (
          <ul className="mt-5 space-y-2">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-fg-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <span key={s} className="chip !py-0.5">
              <TechIcon name={s} size={11} />
              {s}
            </span>
          ))}
          {extra > 0 && <span className="chip !py-0.5">+{extra}</span>}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-xs text-fg-muted transition-colors hover:border-white/25 hover:text-fg"
          >
            <FiGithub size={13} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-mint/10 px-3.5 py-2 text-xs text-mint transition-colors hover:bg-mint/20"
            >
              Live <FiArrowUpRight size={13} />
            </a>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
            className="ml-auto inline-flex items-center gap-1.5 text-xs text-fg-dim transition-colors hover:text-fg"
            aria-label={`Details for ${project.title}`}
          >
            Details <FiMaximize2 size={12} className="transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectFilters.map((f) => [f.id, f.id === 'all' ? projects.length : projects.filter((p) => p.categories.includes(f.id)).length]),
      ),
    [],
  );

  const visible = useMemo(() => {
    const list = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));
    const featured = list.filter((p) => p.featured);
    const rest = list.filter((p) => !p.featured);
    return [
      ...featured.map((p, i) => ({ p, variant: featured.length % 2 === 1 && i === 0 ? 'wide' : 'featured' })),
      ...rest.map((p) => ({ p, variant: 'normal' })),
    ];
  }, [filter]);

  const spans = {
    wide: 'sm:col-span-12',
    featured: 'sm:col-span-12 lg:col-span-6',
    normal: 'sm:col-span-6 lg:col-span-4',
  };

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Projects" title="Things I've" accent="built.">
          {projects.length} personal projects from GitHub — AI systems, full-stack SaaS and data analysis.
        </SectionHeading>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors ${filter === f.id ? 'text-ink-950' : 'text-fg-muted hover:text-fg'}`}
            >
              {filter === f.id && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-mint" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              {filter !== f.id && <span className="absolute inset-0 rounded-full border border-white/10" />}
              <span className="relative flex items-center gap-2">
                {f.label}
                <span className={`font-mono text-[11px] ${filter === f.id ? 'text-ink-950/70' : 'text-fg-dim'}`}>{counts[f.id]}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {visible.map(({ p, variant }) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, ease: EASE }}
                className={`flex min-w-0 ${spans[variant]} [&>*]:w-full [&>*]:min-w-0`}
              >
                <ProjectCard project={p} variant={variant} onOpen={setSelected} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 flex justify-center">
          <Magnetic>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <FiGithub /> All repositories on GitHub
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
