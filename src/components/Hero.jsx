import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiArrowDown, FiTerminal } from 'react-icons/fi';

export default function Hero() {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '59,130,246' : '168,85,247';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
        // Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            this.opacity = Math.min(this.opacity + 0.05, 0.9);
          } else {
            this.opacity = Math.max(this.opacity - 0.005, 0.1);
          }
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `rgba(${this.color}, 1)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Init particles
    const N = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < N; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.save();
            ctx.globalAlpha = ((120 - dist) / 120) * 0.15;
            ctx.strokeStyle = 'rgba(59,130,246,1)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient Orbs */}
      <div className="orb w-96 h-96 top-1/4 left-1/4 bg-blue-500/20"
        style={{ animationDelay: '0s' }} />
      <div className="orb w-80 h-80 bottom-1/4 right-1/4 bg-purple-500/15"
        style={{ animationDelay: '-3s' }} />
      <div className="orb w-64 h-64 top-1/2 left-1/2 bg-cyan-500/10"
        style={{ animationDelay: '-6s' }} />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 glass border border-blue-500/30 px-5 py-2 rounded-full text-sm text-blue-400 font-medium">
              <FiTerminal size={14} />
              <span>Available for opportunities</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
            <span className="block text-white">Manoj</span>
            <span className="block neon-text mt-1">Chandrappa</span>
            <span className="block text-white mt-1">Lamani</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div variants={itemVariants} className="text-xl md:text-2xl text-gray-400 font-mono mt-4 mb-8 h-10">
            <span className="text-blue-400">{'>'} </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'AI/ML Enthusiast', 2000,
                'MERN Stack Developer', 2000,
                'Java Developer', 2000,
                'Problem Solver', 2000,
                'CS Student @ AIML', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-200"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
            Building intelligent, scalable applications at the intersection of
            <span className="text-blue-400 font-medium"> Full-Stack Engineering</span> and
            <span className="text-purple-400 font-medium"> Artificial Intelligence</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
            <Link to="projects" smooth duration={800} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base"
              >
                View Projects
                <span className="ml-1">↗</span>
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={800} offset={-80}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline text-base"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/manojlamani', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/manoj-lamani-4aa866325', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl glass border border-blue-500/25 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-blue-400" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
