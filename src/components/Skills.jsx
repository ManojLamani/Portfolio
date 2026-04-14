import { useEffect, useRef } from 'react';

const categories = [
  {
    id: 'frontend',
    icon: '🎨',
    title: 'Frontend',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.4)',
    border: 'rgba(59,130,246,0.5)',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    icon: '⚙️',
    title: 'Backend',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.4)',
    border: 'rgba(168,85,247,0.5)',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    id: 'programming',
    icon: '💻',
    title: 'Programming',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.4)',
    border: 'rgba(6,182,212,0.5)',
    skills: ['Java', 'Python', 'TypeScript', 'Go (Golang)'],
  },
  {
    id: 'database',
    icon: '🗄️',
    title: 'Database',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.4)',
    border: 'rgba(16,185,129,0.5)',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 'tools',
    icon: '🛠️',
    title: 'Tools & AI',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.4)',
    border: 'rgba(245,158,11,0.5)',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  // CSS-only scroll reveal using IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.skill-card');
    const header = el.querySelectorAll('.skills-header-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    header.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      {/* Background mesh */}
      <div className="skills-bg-mesh" />

      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <p className="skills-header-item skills-eyebrow">My expertise</p>

          <h2 className="skills-header-item skills-title">
            Tech <span className="skills-gradient-text">Stack</span>
          </h2>

          <div className="skills-divider skills-header-item" />

          <p className="skills-header-item skills-subtitle">
            Technologies I use to build scalable and modern applications
          </p>
        </div>

        {/* Cards Grid */}
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="skill-card"
              style={{
                '--card-color': cat.color,
                '--card-glow': cat.glow,
                '--card-border': cat.border,
                '--delay': `${i * 120}ms`,
              }}
            >
              {/* Top bar accent */}
              <div className="skill-card-bar" />

              {/* Card header */}
              <div className="skill-card-header">
                <div className="skill-card-icon">{cat.icon}</div>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>

              {/* Skill pills */}
              <div className="skill-pills">
                {cat.skills.map((skill, j) => (
                  <span
                    key={skill}
                    className="skill-pill-tag"
                    style={{ '--pill-delay': `${j * 60}ms` }}
                  >
                    <span className="skill-pill-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS — scoped to this section */}
      <style>{`
        /* ── Section wrapper ── */
        .skills-section {
          position: relative;
          padding: 100px 0;
          background-color: var(--bg-secondary, #0a0f1e);
          overflow: hidden;
        }

        /* ── Mesh background ── */
        .skills-bg-mesh {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(at 20% 30%, rgba(59,130,246,0.12) 0, transparent 55%),
            radial-gradient(at 80% 70%, rgba(168,85,247,0.10) 0, transparent 55%),
            radial-gradient(at 50% 10%, rgba(6,182,212,0.07) 0, transparent 50%);
          pointer-events: none;
        }

        /* ── Container ── */
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .skills-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .skills-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 12px;
        }

        .skills-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #f9fafb;
          line-height: 1.15;
          margin-bottom: 12px;
        }

        .skills-gradient-text {
          background: linear-gradient(135deg, #3b82f6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-divider {
          width: 56px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #a855f7);
          border-radius: 2px;
          margin: 0 auto 20px;
        }

        .skills-subtitle {
          color: #9ca3af;
          font-size: 1rem;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ── Scroll-reveal base state ── */
        .skills-header-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .skills-header-item:nth-child(2) { transition-delay: 0.1s; }
        .skills-header-item:nth-child(3) { transition-delay: 0.2s; }
        .skills-header-item:nth-child(4) { transition-delay: 0.3s; }

        .skills-header-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        @media (min-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .skills-grid > :nth-child(4),
          .skills-grid > :nth-child(5) {
            grid-column: span 1;
          }
          /* Center last row of 2 */
          .skills-grid {
            grid-template-columns: repeat(6, 1fr);
          }
          .skills-grid > :nth-child(1) { grid-column: 1 / span 2; }
          .skills-grid > :nth-child(2) { grid-column: 3 / span 2; }
          .skills-grid > :nth-child(3) { grid-column: 5 / span 2; }
          .skills-grid > :nth-child(4) { grid-column: 2 / span 2; }
          .skills-grid > :nth-child(5) { grid-column: 4 / span 2; }
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card ── */
        .skill-card {
          /* Glassmorphism */
          background: rgba(10, 15, 30, 0.55);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 24px 24px;
          position: relative;
          overflow: hidden;
          cursor: default;

          /* Scroll-reveal */
          opacity: 0;
          transform: translateY(36px);
          transition:
            opacity 0.55s ease var(--delay, 0ms),
            transform 0.55s ease var(--delay, 0ms),
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }

        .skill-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover lift + glow */
        .skill-card:hover {
          border-color: var(--card-border);
          box-shadow:
            0 0 0 1px var(--card-border),
            0 8px 32px var(--card-glow),
            0 0 60px rgba(59,130,246,0.06);
          background: rgba(15, 20, 40, 0.75);
          transform: translateY(-6px);
        }

        /* ── Top accent bar ── */
        .skill-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--card-color), transparent);
          border-radius: 18px 18px 0 0;
          opacity: 0.7;
          transition: opacity 0.35s ease;
        }
        .skill-card:hover .skill-card-bar {
          opacity: 1;
        }

        /* Corner glow blob */
        .skill-card::after {
          content: '';
          position: absolute;
          top: -30px;
          right: -30px;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--card-color);
          filter: blur(40px);
          opacity: 0.08;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .skill-card:hover::after {
          opacity: 0.18;
          transform: scale(1.4);
        }

        /* ── Card header ── */
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .skill-card-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-card:hover .skill-card-icon {
          background: rgba(255,255,255,0.1);
          transform: scale(1.1) rotate(-4deg);
          box-shadow: 0 0 16px var(--card-glow);
        }

        .skill-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: #f3f4f6;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }
        .skill-card:hover .skill-card-title {
          color: #fff;
        }

        /* ── Pills ── */
        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          color: #cbd5e1;
          padding: 5px 13px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;

          /* Pill reveal delay */
          opacity: 0;
          transform: scale(0.88);
          transition-delay: var(--pill-delay, 0ms);
        }

        /* Pills become visible once card is visible */
        .skill-card.visible .skill-pill-tag {
          opacity: 1;
          transform: scale(1);
          transition:
            opacity 0.4s ease var(--pill-delay, 0ms),
            transform 0.4s ease var(--pill-delay, 0ms),
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .skill-pill-tag:hover {
          background: rgba(var(--pill-hover-rgb, 59,130,246), 0.18);
          border-color: var(--card-border);
          color: #fff;
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 4px 14px var(--card-glow);
        }

        .skill-pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--card-color);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--card-color);
        }

        /* ── Light mode overrides ── */
        [data-theme='light'] .skills-section {
          background-color: var(--bg-secondary, #e8eeff) !important;
        }
        [data-theme='light'] .skill-card {
          background: rgba(255,255,255,0.72) !important;
          border-color: rgba(59,130,246,0.18) !important;
        }
        [data-theme='light'] .skill-card:hover {
          background: rgba(255,255,255,0.9) !important;
        }
        [data-theme='light'] .skill-card-title { color: #1e293b; }
        [data-theme='light'] .skill-card:hover .skill-card-title { color: #0f172a; }
        [data-theme='light'] .skill-pill-tag {
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.2);
          color: #334155;
        }
        [data-theme='light'] .skills-title { color: #0f172a; }
        [data-theme='light'] .skills-subtitle { color: #475569; }
        [data-theme='light'] .skills-eyebrow { color: #2563eb; }
      `}</style>
    </section>
  );
}
