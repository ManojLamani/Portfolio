import { motion } from 'framer-motion';
import { marquee, skillGroups } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Spotlight from './ui/Spotlight';
import TechIcon from './ui/TechIcon';
import { Reveal } from './ui/Reveal';
import { fadeUp, stagger } from './ui/motion';

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x group flex overflow-hidden">
      <div className={`flex shrink-0 gap-3 pr-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused]`}>
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/[0.07] bg-ink-850/80 px-4 py-3 text-sm text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
            aria-hidden={i >= items.length}
          >
            <TechIcon name={name} size={18} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

// Bento sizing for the seven groups
const spans = ['lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-8', 'lg:col-span-7', 'lg:col-span-5'];

export default function TechStack() {
  const half = Math.ceil(marquee.length / 2);

  return (
    <section id="stack" className="section">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="Tech stack" title="Tools I reach" accent="for.">
          Taken from my resume and the code across my GitHub repositories — languages, frameworks and the AI tooling behind my projects.
        </SectionHeading>
      </div>

      <Reveal className="space-y-3">
        <MarqueeRow items={marquee.slice(0, half)} />
        <MarqueeRow items={marquee.slice(half)} reverse />
      </Reveal>

      <div className="container-x mt-14">
        <div className="grid gap-4 lg:grid-cols-12">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 3) * 0.06} className={spans[gi]}>
              <Spotlight className="h-full p-6">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                  <span className="text-xs text-fg-dim">{group.blurb}</span>
                </div>
                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-sm text-fg-muted transition-colors hover:border-white/15 hover:text-fg"
                    >
                      <TechIcon name={item} size={15} />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
