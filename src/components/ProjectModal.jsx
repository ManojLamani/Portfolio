import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGithub, FiX } from 'react-icons/fi';
import ProjectCover from './ProjectCover';
import TechIcon from './ui/TechIcon';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/40 text-fg backdrop-blur transition-colors hover:bg-black/70"
        >
          <FiX />
        </button>

        <div className="group h-56 sm:h-64">
          <ProjectCover project={project} large />
        </div>

        <div className="p-6 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-widest text-fg-dim">
            {project.year} · {project.tagline}
          </p>
          <h3 id="project-modal-title" className="mt-2 font-display text-3xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-4 leading-relaxed text-fg-muted">{project.description}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-fg-dim">What I built</h4>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
                className="flex gap-3 text-[15px] leading-relaxed text-fg-muted"
              >
                <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                  <FiCheck size={10} />
                </span>
                {h}
              </motion.li>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-widest text-fg-dim">Stack</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip !text-fg">
                <TechIcon name={s} size={13} />
                {s}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FiGithub /> View source
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live demo <FiArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
