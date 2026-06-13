import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCpu, FiDatabase, FiGlobe, FiAward, FiBookOpen } from 'react-icons/fi';

const skills = [
  { icon: FiCode, label: 'Full Stack Developer', color: 'from-blue-500 to-cyan-400' },
  { icon: FiCpu, label: 'AI/ML Engineer', color: 'from-purple-500 to-pink-400' },
  { icon: FiDatabase, label: 'Database Design', color: 'from-blue-600 to-indigo-400' },
  { icon: FiGlobe, label: 'REST APIs', color: 'from-cyan-500 to-blue-400' },
  { icon: FiAward, label: 'Java Developer', color: 'from-orange-500 to-yellow-400' },
  { icon: FiBookOpen, label: 'AIML Student', color: 'from-green-500 to-emerald-400' },
];

const stats = [
  { value: '3rd', label: 'Year Student', suffix: '' },
  { value: '4+', label: 'Projects Built', suffix: '' },
  { value: '10+', label: 'Technologies', suffix: '' },
  { value: '100%', label: 'Passion', suffix: '' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="about" className="section-padding relative bg-dark-800 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
            <h2 className="section-title text-white">
              About <span className="neon-text">Me</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block glass border border-blue-500/25 text-blue-400 text-xs font-mono px-4 py-1.5 rounded-full mb-4">
                  {'<developer />'}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Passionate about building
                  <span className="neon-text block">intelligent solutions</span>
                </h3>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-4 text-lg">
                I'm a <span className="text-blue-400 font-medium">3rd-year Computer Science (AI/ML)</span> student
                with a deep passion for building full-stack web applications and exploring machine learning.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-4">
                My journey in tech has led me to master the <span className="text-purple-400 font-medium">MERN Stack</span>,
                develop robust <span className="text-cyan-400 font-medium">REST APIs</span>, and build scalable backend systems
                with <span className="text-blue-400 font-medium">Java</span>.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-8">
                I believe in writing clean, efficient code and creating user experiences that are both
                beautiful and functional. Currently seeking opportunities to apply my skills in real-world projects
                and continue growing as a developer.
              </motion.p>

              {/* Core Skills Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                {['Java', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Express.js', 'Python', 'Git'].map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-4 gap-4">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center glass-card p-3">
                    <div className="text-2xl font-bold neon-text">{value}</div>
                    <div className="text-gray-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Skill Cards Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                    visible: {
                      opacity: 1, scale: 1, y: 0,
                      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-5 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} p-2.5 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white w-full h-full" />
                  </div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <div className={`mt-2 h-0.5 w-0 bg-gradient-to-r ${color} group-hover:w-full transition-all duration-500 rounded-full`} />
                </motion.div>
              ))}

              {/* Profile Card */}
              <motion.div
                variants={itemVariants}
                className="col-span-2 glass-card p-5 flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                  ML
                </div>
                <div>
                  <p className="font-bold text-white">Manoj Chandrappa Lamani</p>
                  <p className="text-gray-400 text-sm">CS @ AIML • Full Stack Dev • ML Enthusiast</p>
                  <div className="flex gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-mono">Open to work</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
