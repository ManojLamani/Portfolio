import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { navLinks, profile } from '../data/portfolio';

const socials = [
  { icon: FiGithub, href: profile.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${profile.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/[0.06]">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold">{profile.name}</p>
            <p className="mt-2 max-w-sm text-sm text-fg-dim">Full-stack &amp; AI/ML engineer. Building products, models and open-source fixes from Bengaluru.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="transition-colors hover:text-mint">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-dim">© {new Date().getFullYear()} Manoj Lamani · Built with React, Tailwind &amp; Framer Motion</p>
          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-fg-muted transition-colors hover:bg-white/[0.06] hover:text-mint"
              >
                <Icon size={16} />
              </a>
            ))}
            <motion.a
              href="#home"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/10 text-fg-muted hover:text-mint"
            >
              <FiArrowUp size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="translate-y-[30%] whitespace-nowrap text-center font-display text-[22vw] font-bold leading-none tracking-tighter text-white/[0.025]">
          LAMANI
        </p>
      </div>
    </footer>
  );
}
