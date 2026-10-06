import { motion } from 'framer-motion';
import { EASE } from './motion';

// Words rise out of a clipping mask. The in-view trigger lives on the <h2>:
// the words themselves start clipped, so an observer on them would never fire.
const heading = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const word = { hidden: { y: '110%' }, show: { y: 0, transition: { duration: 0.7, ease: EASE } } };

export default function SectionHeading({ index, eyebrow, title, accent, children, align = 'left' }) {
  const words = title.split(' ');
  const centered = align === 'center';

  return (
    <div className={`mb-14 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, x: centered ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="text-fg-dim">{index}</span>
        <span className="h-px w-6 bg-mint/50" />
        {eyebrow}
      </motion.p>

      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl"
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span variants={word} className="inline-block">
              {w}&nbsp;
            </motion.span>
          </span>
        ))}
        {accent && (
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span variants={word} className="text-gradient inline-block">
              {accent}
            </motion.span>
          </span>
        )}
      </motion.h2>

      {children && (
        <motion.p
          className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
