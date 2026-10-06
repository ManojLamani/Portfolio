import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCheck, FiCompass } from 'react-icons/fi';
import { achievements, education, profile } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Spotlight from './ui/Spotlight';
import { Reveal } from './ui/Reveal';
import { fadeUp, stagger } from './ui/motion';

const focus = ['Retrieval-Augmented Generation', 'Agentic workflows (LangGraph)', 'System design', 'Cloud-native Go'];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="Engineer who ships the" accent="whole stack.">
          From database schema to model evaluation to the pixel on screen.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-12">
          {/* Story */}
          <Reveal className="lg:col-span-7">
            <Spotlight className="h-full p-7 sm:p-9">
              <div className="space-y-5 text-[15px] leading-relaxed text-fg-muted sm:text-base">
                {profile.about.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <div className="mt-8 border-t border-white/[0.06] pt-6">
                <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
                  <FiCompass className="text-mint" /> Currently exploring
                </p>
                <div className="flex flex-wrap gap-2">
                  {focus.map((f) => (
                    <span key={f} className="chip">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Spotlight>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <Spotlight className="flex h-full flex-col overflow-hidden p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-iris/20 blur-3xl" />
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-ink-700">
                <FiBookOpen className="text-iris" size={20} />
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-fg-dim">Education</p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{education.school}</h3>
              <p className="mt-2 text-fg-muted">{education.degree}</p>
              <div className="mt-auto flex items-center justify-between pt-8 text-sm">
                <span className="chip !text-fg">{education.period}</span>
                <span className="text-fg-dim">{education.place}</span>
              </div>
              {/* year progress */}
              <div className="mt-5">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-mint to-iris"
                    initial={{ width: 0 }}
                    whileInView={{ width: '62%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  />
                </div>
                <p className="mt-2 text-xs text-fg-dim">3rd year · graduating 2028</p>
              </div>
            </Spotlight>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.05} className="lg:col-span-12">
            <Spotlight className="p-7 sm:p-9">
              <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-dim">
                <FiAward className="text-ember" /> Highlights
              </p>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {achievements.map((a) => (
                  <motion.li key={a} variants={fadeUp} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                      <FiCheck size={12} />
                    </span>
                    {a}
                  </motion.li>
                ))}
              </motion.ul>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
