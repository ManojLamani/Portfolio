import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiMapPin } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'manojlamani4996@gmail.com',
    href: 'mailto:manojlamani4996@gmail.com',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/ManojLamani',
    href: 'https://github.com/ManojLamani',
    gradient: 'from-gray-500 to-gray-400',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/manoj-lamani',
    href: 'https://www.linkedin.com/in/manoj-lamani-4aa866325',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India 🇮🇳',
    href: null,
    gradient: 'from-purple-500 to-pink-400',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    // Simulate form submission
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="contact" className="section-padding relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">Get in touch</p>
            <h2 className="section-title text-white">
              Contact <span className="neon-text">Me</span>
            </h2>
            <div className="section-divider" />
            <p className="text-gray-400 max-w-xl mx-auto mt-6">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left - Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Let's talk</h3>

              {contactInfo.map(({ icon: Icon, label, value, href, gradient }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`font-medium text-sm text-white hover:bg-gradient-to-r hover:${gradient} hover:bg-clip-text hover:text-transparent transition-all`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm text-white">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Availability Banner */}
              <motion.div
                className="glass-card p-5 border border-green-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-semibold text-sm">Available for Work</span>
                </div>
                <p className="text-gray-400 text-sm">
                  I'm currently open to full-time roles, internships, and freelance projects.
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="glass-card p-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <FiCheckCircle className="text-green-400 mx-auto mb-4" size={60} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent! 🎉</h3>
                    <p className="text-gray-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="glass-card p-8 space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-400 text-sm font-medium block mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`input-field ${errors.name ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <FiAlertCircle size={11} /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm font-medium block mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`input-field ${errors.email ? 'border-red-500/60 focus:border-red-500' : ''}`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <FiAlertCircle size={11} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm font-medium block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className={`input-field ${errors.subject ? 'border-red-500/60' : ''}`}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle size={11} /> {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm font-medium block mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project or opportunity..."
                        className={`input-field resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <FiAlertCircle size={11} /> {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.02, y: -1 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                      className={`btn-primary w-full justify-center text-base py-3.5 ${status === 'sending' ? 'opacity-80 cursor-wait' : ''}`}
                    >
                      {status === 'sending' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={17} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
