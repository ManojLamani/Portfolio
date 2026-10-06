import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import SectionHeading from './ui/SectionHeading';
import Spotlight from './ui/Spotlight';
import Magnetic from './ui/Magnetic';
import { Reveal } from './ui/Reveal';

const links = [
  { icon: FiGithub, label: 'GitHub', value: 'github.com/ManojLamani', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/manoj-lamani', href: profile.linkedin },
  { icon: FiMapPin, label: 'Based in', value: profile.location, href: null },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', subject: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // No backend: compose the message in the visitor's own mail client.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name || 'your portfolio'}`;
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Contact" title="Let's build something" accent="together.">
          Internships, collaborations, open-source or just a good engineering conversation — my inbox is open.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-5">
          <Reveal className="space-y-5 lg:col-span-2">
            <Spotlight className="overflow-hidden p-7">
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-mint/15 blur-3xl" />
              <p className="font-mono text-xs uppercase tracking-widest text-fg-dim">Email</p>
              <a href={`mailto:${profile.email}`} className="mt-3 block break-all font-display text-xl font-semibold transition-colors hover:text-mint sm:text-2xl">
                {profile.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-2">
                <Magnetic>
                  <a href={`mailto:${profile.email}`} className="btn-primary !py-2.5">
                    <FiMail /> Write to me
                  </a>
                </Magnetic>
                <button type="button" onClick={copyEmail} className="btn-ghost !py-2.5" aria-live="polite">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'done' : 'copy'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2"
                    >
                      {copied ? <FiCheck className="text-mint" /> : <FiCopy />}
                      {copied ? 'Copied' : 'Copy'}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </Spotlight>

            <div className="grid gap-3">
              {links.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-700 text-fg-muted transition-colors group-hover:text-mint">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-fg-dim">{label}</span>
                      <span className="block truncate text-sm text-fg">{value}</span>
                    </span>
                    {href && <FiArrowUpRight className="text-fg-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-mint" />}
                  </>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="card group flex items-center gap-4 p-4 transition-colors hover:border-white/15">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="card group flex items-center gap-4 p-4">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <Spotlight as="form" onSubmit={onSubmit} className="h-full p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-fg-dim">Your name</span>
                  <input required value={form.name} onChange={update('name')} className="input" placeholder="Ada Lovelace" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs text-fg-dim">Subject</span>
                  <input value={form.subject} onChange={update('subject')} className="input" placeholder="Internship opportunity" />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-xs text-fg-dim">Message</span>
                <textarea
                  required
                  minLength={10}
                  rows={7}
                  value={form.message}
                  onChange={update('message')}
                  className="input resize-none"
                  placeholder="Tell me a bit about what you're working on…"
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-fg-dim">Opens your email app with the message ready to send.</p>
                <Magnetic>
                  <button type="submit" className="btn-primary group">
                    Send message
                    <FiSend className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                  </button>
                </Magnetic>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
