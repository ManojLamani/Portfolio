// Single source of truth for portfolio content.
// Sources: resume (2026) + public GitHub repositories at github.com/ManojLamani.

export const profile = {
  name: 'Manoj Chandrappa Lamani',
  shortName: 'Manoj',
  initials: 'ML',
  roles: ['Full-Stack Developer', 'AI / ML Engineer', 'Open-Source Contributor', 'Agentic AI Builder'],
  location: 'Bengaluru, Karnataka, India',
  email: 'manojlamani4996@gmail.com',
  github: 'https://github.com/ManojLamani',
  linkedin: 'https://www.linkedin.com/in/manoj-lamani-4aa866325',
  summary:
    'Full-Stack Developer building scalable web applications, AI-powered products and contributing to open source. I work across React, TypeScript, Node.js, Python and PostgreSQL — and I care about shipping production-ready systems that solve real engineering problems.',
  about: [
    "I'm a B.Tech student in Artificial Intelligence & Machine Learning at Polaris School of Technology, Bengaluru. Most of my time goes into building things end-to-end: a React front end, an API with real auth, a database that holds up, and increasingly an ML or LLM layer that makes the product smarter.",
    'Lately I have been focused on retrieval-augmented generation, intent classification and agentic workflows — and on contributing fixes to open-source projects like Kyverno and FOSSASIA VoxBento.',
  ],
};

export const stats = [
  { value: 9, suffix: '', label: 'Personal projects' },
  { value: 150, suffix: '+', label: 'DSA problems solved' },
  { value: 2, suffix: '', label: 'Open-source orgs' },
  { value: 99.42, suffix: '%', label: 'Best intent accuracy', decimals: 2 },
];

export const education = {
  school: 'Polaris School of Technology',
  degree: 'B.Tech in Artificial Intelligence & Machine Learning',
  period: '2024 – 2028',
  place: 'Bengaluru, India',
};

export const achievements = [
  'Solved 150+ Data Structures & Algorithms problems across LeetCode and CodeChef.',
  'Open-source pull requests to Kyverno (CNCF) and FOSSASIA VoxBento.',
  'Built RAG and intent-classification systems reaching 99.42% accuracy across 27 intents.',
  'Actively learning System Design, Generative AI, Agentic AI and scalable backend architecture.',
];

// Icon keys map to react-icons/si components in components/ui/TechIcon.jsx
export const skillGroups = [
  {
    title: 'Languages',
    blurb: 'What I write every day',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    blurb: 'Interfaces that feel fast',
    items: ['React', 'Vite', 'Material UI', 'Tailwind CSS', 'React Query', 'Framer Motion', 'Responsive Design'],
  },
  {
    title: 'Backend',
    blurb: 'APIs, auth and real-time',
    items: ['Node.js', 'Express', 'FastAPI', 'Django', 'REST APIs', 'JWT Auth', 'Google OAuth', 'Socket.IO', 'Prisma'],
  },
  {
    title: 'Databases',
    blurb: 'Where the data lives',
    items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'FAISS'],
  },
  {
    title: 'AI & ML',
    blurb: 'Models, retrieval, agents',
    items: ['scikit-learn', 'XGBoost', 'Hugging Face', 'LangGraph', 'Sentence Transformers', 'OpenAI API', 'Google Gemini', 'RAG', 'Agentic AI', 'Pandas', 'NumPy', 'Plotly', 'Streamlit', 'Jupyter'],
  },
  {
    title: 'Cloud & Tools',
    blurb: 'Ship it and keep it running',
    items: ['Docker', 'Kubernetes', 'Vercel', 'Render', 'Git', 'GitHub', 'Postman', 'npm', 'VS Code'],
  },
  {
    title: 'Core CS',
    blurb: 'The fundamentals underneath',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'System Design'],
  },
];

// Logos for the scrolling marquee
export const marquee = [
  'React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker',
  'scikit-learn', 'Hugging Face', 'LangGraph', 'OpenAI API', 'Google Gemini', 'Express', 'Prisma',
  'Django', 'Kubernetes', 'Go', 'Supabase', 'Firebase', 'Vercel', 'Streamlit', 'Tailwind CSS', 'Git',
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'data', label: 'Data' },
];

const gh = (repo) => `https://github.com/ManojLamani/${repo}`;

export const projects = [
  {
    id: 'devmate',
    title: 'DevMate AI',
    tagline: 'AI-powered GitHub repository analyzer SaaS',
    description:
      'A full-stack SaaS that analyzes GitHub repositories and turns them into actionable developer insights — issue difficulty, repository clustering, PR merge prediction and personalized recommendations.',
    highlights: [
      'ML models for issue classification, repository clustering and pull-request merge prediction.',
      'Google Gemini integration generates repository explanations and personalized recommendations.',
      'Analytics dashboard for repo metrics, commit history and language distribution.',
      'Three-service architecture (React · Express · FastAPI) shipped with Docker Compose.',
    ],
    stack: ['React', 'TypeScript', 'Material UI', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'FastAPI', 'scikit-learn', 'XGBoost', 'Google Gemini', 'Docker'],
    categories: ['ai', 'fullstack'],
    metric: { value: '3', label: 'ML models' },
    github: gh('DEVMATE_AI'),
    live: 'https://devmate-frontend.vercel.app',
    featured: true,
    year: 2026,
    hue: 258,
  },
  {
    id: 'supportiq',
    title: 'SupportIQ',
    tagline: 'AI customer-support intelligence platform',
    description:
      'Classifies customer queries across 27 intents, retrieves verified support documentation with dense vector search, and generates grounded, policy-compliant responses with an LLM.',
    highlights: [
      'TF-IDF + Logistic Regression intent classifier reaching 99.42% accuracy across 27 intents.',
      'RAG pipeline with Sentence Transformers + FAISS grounds every answer in real support data.',
      'Production-style FastAPI backend with a Streamlit front end in one unified workflow.',
    ],
    stack: ['Python', 'FastAPI', 'Streamlit', 'FAISS', 'Sentence Transformers', 'scikit-learn', 'OpenAI API'],
    categories: ['ai'],
    metric: { value: '99.42%', label: 'accuracy' },
    github: gh('SUPPORTIQ'),
    featured: true,
    year: 2026,
    hue: 168,
  },
  {
    id: 'ai-support-agent',
    title: 'AI Support Agent',
    tagline: 'Grounded replies with escalation guardrails',
    description:
      'An end-to-end support agent trained on real Twitter customer-support conversations: it classifies intent, retrieves historical resolutions, drafts brand-aligned replies and decides when to escalate to a human.',
    highlights: [
      'Intent classification with TF-IDF + LinearSVC across data-driven product categories.',
      'Historical retrieval and grounded reply generation for brand-specific responses.',
      'Auto-handle vs. human escalation driven by confidence and safety guardrails.',
      '90.9% accuracy and 86.4% Macro-F1 against a baseline evaluation, reproducible in under 2 minutes on CPU.',
    ],
    stack: ['Python', 'scikit-learn', 'FAISS', 'LLM', 'Pandas'],
    categories: ['ai'],
    metric: { value: '90.9%', label: 'accuracy' },
    github: gh('AI-Support-Agent'),
    featured: true,
    year: 2026,
    hue: 200,
  },
  {
    id: 'orbitdesk',
    title: 'OrbitDesk Agent Network',
    tagline: 'Local-first multi-node support agent',
    description:
      'A LangGraph agent network that answers support questions strictly from local knowledge-base docs and resolved cases, using local Hugging Face models for retrieval and generation.',
    highlights: [
      'Stateful graph with triage, retrieval, generation and validation nodes.',
      'Triage routes to out-of-scope, clarification, escalation or answerable paths with structured JSON.',
      'Fully local: sentence-transformers retrieval plus an instruction-tuned LLM — no external API.',
    ],
    stack: ['Python', 'LangGraph', 'Hugging Face', 'Sentence Transformers', 'RAG'],
    categories: ['ai'],
    metric: { value: '4', label: 'graph nodes' },
    github: gh('orbitdesk-support-agent'),
    year: 2026,
    hue: 285,
  },
  {
    id: 'churn',
    title: 'Auto-Tuned Churn API',
    tagline: 'Statistically validated churn prediction',
    description:
      'A decision-support system for customer churn: random-search hyperparameter optimization with nested cross-validation, FastAPI inference and an analyst React dashboard.',
    highlights: [
      'Random search HPO following Bergstra & Bengio (2012).',
      'Nested cross-validation to avoid selection bias and leaked evaluation data.',
      'Risk tiering with transparent confidence scores and operating thresholds.',
    ],
    stack: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Jupyter'],
    categories: ['ai', 'data'],
    metric: { value: 'Nested', label: 'CV' },
    github: gh('Auto-Tuned-Churn-API'),
    year: 2026,
    hue: 22,
  },
  {
    id: 'fleetiq',
    title: 'FleetIQ',
    tagline: 'Fleet telemetry analytics & wear detection',
    description:
      'Telemetry pipeline and dashboards for two-wheeler delivery fleets: driver-behaviour risk scoring and ML-based vehicle-health anomaly detection from IMU and GPS data.',
    highlights: [
      'Processes a week of IMU + GPS telemetry across 30 drivers and 450 trips.',
      'Butterworth low-pass filtering to separate phone vibration from real riding manoeuvres.',
      'Isolation Forest engine detects suspension wear and sensor calibration drift.',
      'Interactive Streamlit + Plotly dashboards for driver risk and vehicle health.',
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit', 'Plotly'],
    categories: ['ai', 'data'],
    metric: { value: '450', label: 'trips analysed' },
    github: gh('FleetIQ'),
    year: 2026,
    hue: 45,
  },
  {
    id: 'taskforge',
    title: 'TaskForge',
    tagline: 'Multi-tenant project management SaaS',
    description:
      'A project management platform where many organizations share one backend with strict tenant isolation and role-based access for owners, managers and members.',
    highlights: [
      'Tenant-scoped data isolation on every project and task query.',
      'JWT authentication with bcrypt and role middleware (Owner / Manager / Member).',
      'Project and task CRUD with status tracking and a team dashboard.',
    ],
    stack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    categories: ['fullstack'],
    metric: { value: 'RBAC', label: '3 roles' },
    github: gh('Multi-Tenant-Project-Management-SaaS'),
    live: 'https://multi-tenant-project-management-saa.vercel.app',
    year: 2026,
    hue: 220,
  },
  {
    id: 'learning-pathway',
    title: 'Learning Pathway',
    tagline: 'Learning management system',
    description:
      'A Django + PostgreSQL LMS with role-based dashboards: instructors build courses, assignments and quizzes; students enroll, submit work, earn badges and track progress.',
    highlights: [
      'Courses, modules, lessons, assignments with file uploads, and auto-graded quizzes.',
      'Grading with feedback, badges and progress analytics.',
      'Role-based access control for instructors and students.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
    categories: ['fullstack'],
    metric: { value: '2', label: 'role dashboards' },
    github: gh('Learning-Pathway'),
    year: 2025,
    hue: 145,
  },
  {
    id: 'ecommerce-eda',
    title: 'E-Commerce Sales Analysis',
    tagline: 'Exploratory analysis of £8.9M in transactions',
    description:
      'Cleaned and analysed a real e-commerce transaction dataset to surface revenue drivers, top products and VIP customers.',
    highlights: [
      'Removed 5,268 duplicates and filtered invalid returns and prices.',
      '25,900 orders · 4,070 products · 4,372 customers analysed.',
      'Visualised top revenue products, volume leaders and customer contribution.',
    ],
    stack: ['Python', 'Pandas', 'NumPy', 'Jupyter'],
    categories: ['data'],
    metric: { value: '£8.9M', label: 'revenue analysed' },
    github: gh('E-Commerce-Sales-Analysis'),
    year: 2026,
    hue: 190,
  },
];

// Pull requests authored on upstream projects (from GitHub search, Oct 2026).
export const openSource = [
  {
    org: 'FOSSASIA',
    repo: 'fossasia/voxbento',
    about: 'Open-source AI-powered interpretation platform',
    lang: 'Python',
    prs: [
      { title: 'fix(websockets): skip disconnected sockets in booth broadcast', url: 'https://github.com/fossasia/voxbento/pull/670', status: 'merged' },
      { title: 'fix(booth_state): clear ingest_status when the publishing interpreter leaves', url: 'https://github.com/fossasia/voxbento/pull/688', status: 'open' },
    ],
  },
  {
    org: 'Kyverno',
    repo: 'kyverno/kyverno',
    about: 'Unified policy as code for Kubernetes (CNCF)',
    lang: 'Go',
    prs: [
      { title: 'fix(jmespath): leave day-of-week as wildcard in time_to_cron', url: 'https://github.com/kyverno/kyverno/pull/17854', status: 'open' },
      { title: 'docs: update time_to_cron example output to use a wildcard weekday', url: 'https://github.com/kyverno/website/pull/2186', status: 'open' },
    ],
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'contact', label: 'Contact' },
];
