import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile, stats } from '../data/portfolio';
import Orbit from './Orbit';
import Magnetic from './ui/Magnetic';
import CountUp from './ui/CountUp';
import { EASE } from './ui/motion';

const firstLine = 'Manoj';
const secondLine = 'Lamani';

function Letters({ text, delay, className }) {
  return (
    <span className={`inline-block overflow-hidden pb-2 align-bottom ${className ?? ''}`}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '115%', rotate: 8 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: delay + i * 0.045, ease: EASE }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const roleSequence = profile.roles.flatMap((r) => [r, 2200]);

const socials = [
  { icon: FiGithub, href: profile.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-48 pt-28 sm:pb-36 sm:pt-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-mint/20 bg-mint/[0.06] py-1.5 pl-2 pr-4 text-xs text-fg-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Open to internships &amp; collaborations
          </motion.div>

          <h1 className="font-display text-[clamp(3.2rem,11vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            <Letters text={firstLine} delay={0.15} />
            <br />
            <Letters text={secondLine} delay={0.4} className="text-gradient" />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 flex h-8 items-center gap-2 font-mono text-base text-fg sm:text-lg"
          >
            <span className="text-mint">~/</span>
            <TypeAnimation sequence={roleSequence} speed={45} deletionSpeed={65} repeat={Infinity} cursor={false} />
            <span className="h-5 w-[2px] animate-blink bg-mint" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            I build scalable web apps and AI products end-to-end — from{' '}
            <span className="text-fg">React &amp; TypeScript</span> front ends to{' '}
            <span className="text-fg">Node / FastAPI</span> services and{' '}
            <span className="text-fg">RAG &amp; ML</span> pipelines — and contribute to cloud-native open source.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="#projects" className="btn-primary group">
                Explore my work
                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full text-fg-muted transition-all hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-mint"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-6 flex items-center gap-2 text-sm text-fg-dim"
          >
            <FiMapPin size={14} /> {profile.location}
          </motion.p>
        </div>

        <div className="relative hidden sm:block">
          <Orbit />
        </div>
      </div>

      {/* stats ribbon */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x">
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: EASE }}
            className="grid grid-cols-2 border-t border-white/[0.06] sm:grid-cols-4 sm:divide-x sm:divide-white/[0.06]"
          >
            {stats.map((s) => (
              <div key={s.label} className="py-5 sm:px-6 sm:first:pl-0">
                <dt className="text-xs uppercase tracking-wider text-fg-dim">{s.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
