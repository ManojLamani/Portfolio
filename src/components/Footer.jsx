import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/manojlamani', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/manoj-lamani-4aa866325', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:manojlamani4996@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-800 border-t border-blue-500/10 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <span className="font-bold text-xl neon-text">Manoj</span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                className="text-gray-500 hover:text-white text-sm cursor-pointer transition-colors duration-200 hover:neon-text"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-9 h-9 rounded-lg glass border border-blue-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 mb-6" />

        {/* Bottom Row */}
        <div className="flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            © {year} Manoj Chandrappa Lamani. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="hero" smooth duration={800}>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full btn-primary p-0 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </Link>
      </motion.div>
    </footer>
  );
}
