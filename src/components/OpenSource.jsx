import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGitMerge, FiGitPullRequest } from 'react-icons/fi';
import { openSource } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Spotlight from './ui/Spotlight';
import TechIcon from './ui/TechIcon';
import { Reveal } from './ui/Reveal';
import { fadeUp, stagger } from './ui/motion';

const statusStyle = {
  merged: { label: 'Merged', className: 'bg-iris/15 text-iris-400', Icon: FiGitMerge },
  open: { label: 'Open', className: 'bg-mint/10 text-mint', Icon: FiGitPullRequest },
};

const totalPRs = openSource.reduce((n, o) => n + o.prs.length, 0);
const merged = openSource.reduce((n, o) => n + o.prs.filter((p) => p.status === 'merged').length, 0);

export default function OpenSource() {
  return (
    <section id="opensource" className="section">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Open source" title="Fixing things" accent="upstream.">
          {totalPRs} pull requests across {openSource.length} open-source organizations — a CNCF policy engine in Go and an AI interpretation platform in Python, with {merged} merged so far.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {openSource.map((org, i) => (
            <Reveal key={org.repo} delay={(i % 2) * 0.08}>
              <Spotlight className="h-full p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{org.org}</h3>
                    <p className="mt-1 text-sm text-fg-dim">{org.about}</p>
                  </div>
                  <span className="chip shrink-0">
                    <TechIcon name={org.lang} size={12} />
                    {org.lang}
                  </span>
                </div>

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="mt-6 space-y-2"
                >
                  {org.prs.map((pr) => {
                    const { label, className, Icon } = statusStyle[pr.status];
                    const number = pr.url.split('/').pop();
                    return (
                      <motion.li key={pr.url} variants={fadeUp}>
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/pr flex items-start gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-white/[0.08] hover:bg-white/[0.03]"
                        >
                          <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ${className}`}>
                            <Icon size={14} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm leading-snug text-fg-muted transition-colors group-hover/pr:text-fg">{pr.title}</span>
                            <span className="mt-1 flex items-center gap-2 font-mono text-[11px] text-fg-dim">
                              {pr.url.split('/')[3]}/{pr.url.split('/')[4]} #{number}
                              <span className={`rounded px-1.5 py-px ${className}`}>{label}</span>
                            </span>
                          </span>
                          <FiArrowUpRight className="mt-1 shrink-0 text-fg-dim opacity-0 transition-all group-hover/pr:-translate-y-0.5 group-hover/pr:opacity-100" />
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
