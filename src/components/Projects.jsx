import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'Fans & ACs with Admin + Rider App',
    description:
      'Full-stack e-commerce solution with product catalog, cart & checkout, admin dashboard (orders/inventory), and a dedicated rider delivery app with real-time order tracking.',
    image: '/ecommerce.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API', 'JWT', 'Redux'],
    github: 'https://github.com/ManojLamani',
    demo: '#',
    gradient: 'from-purple-600 to-pink-500',
    accent: 'rgba(168,85,247,0.3)',
    featured: true,
  },
  {
    id: 2,
    title: 'Learning Pathway',
    subtitle: 'Full-Stack LMS Platform',
    description:
      'A full-stack Learning Management System with role-based access (student/instructor/admin), modular courses, quizzes, assignments, grading workflows, progress tracking, and instructor dashboards.',
    image: '/learningpathway.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS', 'REST API', 'Role-Based Auth'],
    github: 'https://github.com/ManojLamani/Learning-Pathway',
    demo: '#',
    gradient: 'from-green-600 to-teal-500',
    accent: 'rgba(16,185,129,0.3)',
    featured: true,
  },
  {
    id: 3,
    title: 'Personal Management Dashboard',
    subtitle: 'Tasks · Notes · Goals',
    description:
      'A clean personal productivity dashboard to manage Tasks, Notes, and Goals. Features simple input forms, section-based navigation, and an intuitive UI designed for efficient daily planning.',
    image: '/dashboard.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Responsive UI'],
    github: 'https://github.com/ManojLamani/PERSONAL-MANAGEMENT-DASHBOARD',
    demo: '#',
    gradient: 'from-indigo-600 to-blue-500',
    accent: 'rgba(99,102,241,0.3)',
    featured: true,
  },
  {
    id: 4,
    title: 'TaskBoard Pro',
    subtitle: 'Project Collaboration Tool',
    description:
      'A multi-tenant SaaS project management platform, team collaboration, real-time updates, role-based access control, and detailed activity audit logs.',
    image: '/taskboard.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Google OAuth', 'Framer Motion'],
    github: 'https://github.com/ManojLamani/Multi-Tenant-Project-Management-SaaS',
    demo: '#',
    gradient: 'from-cyan-600 to-blue-500',
    accent: 'rgba(6,182,212,0.3)',
    featured: true,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable
        glareMaxOpacity={0.08}
        glareColor="#3b82f6"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={1500}
      >
        <div
          className="glass-card overflow-hidden group h-full flex flex-col"
          style={{
            boxShadow: isInView ? `0 0 40px ${project.accent}` : 'none',
            transition: 'box-shadow 0.5s ease'
          }}
        >
          {/* Image */}
          <div className="relative overflow-hidden h-52">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-50 group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4"
            >
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
                onClick={(e) => project.demo === '#' && e.preventDefault()}
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5 px-5"
              >
                <FiGithub size={15} />
                GitHub
              </a>
            </motion.div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <span className={`bg-gradient-to-r ${project.gradient} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300">
                {project.title}
              </h3>
              <p className={`text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-3 pt-4 border-t border-blue-500/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass border border-blue-500/20 text-gray-400 hover:text-white hover:border-blue-500/50 text-sm font-medium transition-all duration-300"
              >
                <FiGithub size={15} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-sm font-medium hover:opacity-90 transition-opacity`}
                onClick={(e) => project.demo === '#' && e.preventDefault()}
              >
                <FiExternalLink size={15} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="section-title text-white">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6">
            A showcase of my most impactful work — from collaborative platforms to full-stack e-commerce solutions.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ManojLamani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
