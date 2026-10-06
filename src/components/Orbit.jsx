import { motion } from 'framer-motion';
import TechIcon from './ui/TechIcon';
import { profile } from '../data/portfolio';

const inner = ['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL'];
const outer = ['FastAPI', 'Docker', 'scikit-learn', 'Hugging Face', 'MongoDB', 'Google Gemini', 'Go'];

function Ring({ items, radius, spin, counter, size }) {
  return (
    <div className={`absolute inset-0 ${spin}`}>
      {items.map((name, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
          >
            <div className={counter}>
              <div
                title={name}
                className="grid place-items-center rounded-2xl border border-white/10 bg-ink-800/90 shadow-lg shadow-black/40 backdrop-blur transition-transform duration-300 hover:scale-125"
                style={{ width: size, height: size }}
              >
                <TechIcon name={name} size={size * 0.45} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Orbit() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[460px]"
      aria-hidden="true"
    >
      {/* rings */}
      <div className="absolute inset-[20%] rounded-full border border-dashed border-white/10" />
      <div className="absolute inset-[4%] rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(110,242,196,0.15),transparent_30%)] animate-orbit" />

      {/* core */}
      <div className="absolute inset-[34%] grid place-items-center">
        <div className="absolute inset-0 animate-pulse rounded-full bg-mint/20 blur-2xl" />
        <div className="relative grid h-full w-full place-items-center rounded-full border border-white/15 bg-gradient-to-br from-ink-700 to-ink-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <span className="text-gradient font-display text-4xl font-bold sm:text-5xl">{profile.initials}</span>
        </div>
      </div>

      <Ring items={inner} radius={30} spin="animate-orbit" counter="animate-orbit-reverse" size={46} />
      <Ring items={outer} radius={46} spin="animate-orbit-reverse-slow" counter="animate-orbit-slow" size={52} />
    </motion.div>
  );
}
