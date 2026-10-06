import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiPython, SiGo, SiHtml5, SiCss,
  SiPostgresql, SiMongodb, SiSupabase, SiFirebase, SiVercel, SiRender, SiGooglegemini, SiFastapi,
  SiDocker, SiPrisma, SiScikitlearn, SiStreamlit, SiDjango, SiPandas, SiNumpy, SiGit, SiGithub,
  SiPostman, SiMui, SiTailwindcss, SiOpenai, SiHuggingface, SiJupyter, SiKubernetes,
  SiJsonwebtokens, SiNpm, SiVite, SiOpenjdk, SiReactquery, SiPlotly, SiFramer, SiSocketdotio,
  SiGoogle, SiLangchain,
} from 'react-icons/si';
import { FiCpu, FiCode, FiLayers, FiDatabase, FiGitBranch, FiBox, FiSmartphone, FiZap, FiTerminal } from 'react-icons/fi';

// [icon, brand colour tuned for a dark background]
const MAP = {
  React: [SiReact, '#61dafb'],
  TypeScript: [SiTypescript, '#3178c6'],
  JavaScript: [SiJavascript, '#f7df1e'],
  'Node.js': [SiNodedotjs, '#5fa04e'],
  Express: [SiExpress, '#e5e7eb'],
  Python: [SiPython, '#4b8bbe'],
  Go: [SiGo, '#00add8'],
  Java: [SiOpenjdk, '#f89820'],
  HTML5: [SiHtml5, '#e34f26'],
  CSS3: [SiCss, '#663399'],
  PostgreSQL: [SiPostgresql, '#4169e1'],
  MongoDB: [SiMongodb, '#47a248'],
  Supabase: [SiSupabase, '#3ecf8e'],
  Firebase: [SiFirebase, '#ffca28'],
  Vercel: [SiVercel, '#e5e7eb'],
  Render: [SiRender, '#e5e7eb'],
  'Google Gemini': [SiGooglegemini, '#8e75b2'],
  FastAPI: [SiFastapi, '#009688'],
  Docker: [SiDocker, '#2496ed'],
  Prisma: [SiPrisma, '#e5e7eb'],
  'scikit-learn': [SiScikitlearn, '#f7931e'],
  Streamlit: [SiStreamlit, '#ff4b4b'],
  Django: [SiDjango, '#44b78b'],
  Pandas: [SiPandas, '#a59df5'],
  NumPy: [SiNumpy, '#4dabcf'],
  Git: [SiGit, '#f05032'],
  GitHub: [SiGithub, '#e5e7eb'],
  Postman: [SiPostman, '#ff6c37'],
  'Material UI': [SiMui, '#007fff'],
  'Tailwind CSS': [SiTailwindcss, '#06b6d4'],
  'OpenAI API': [SiOpenai, '#e5e7eb'],
  'Hugging Face': [SiHuggingface, '#ffd21e'],
  LangGraph: [SiLangchain, '#7fc8a9'],
  Jupyter: [SiJupyter, '#f37626'],
  Kubernetes: [SiKubernetes, '#326ce5'],
  'JWT Auth': [SiJsonwebtokens, '#d63aff'],
  npm: [SiNpm, '#cb3837'],
  Vite: [SiVite, '#a78bfa'],
  'React Query': [SiReactquery, '#ff4154'],
  Plotly: [SiPlotly, '#7a76ff'],
  'Framer Motion': [SiFramer, '#e5e7eb'],
  'Socket.IO': [SiSocketdotio, '#e5e7eb'],
  'Google OAuth': [SiGoogle, '#4285f4'],
  'VS Code': [FiTerminal, '#3ea6ff'],
  FAISS: [FiDatabase, '#6ef2c4'],
  'Sentence Transformers': [FiLayers, '#ffd21e'],
  XGBoost: [FiZap, '#3fa9f5'],
  RAG: [FiLayers, '#6ef2c4'],
  'Agentic AI': [FiCpu, '#9b8cff'],
  LLM: [FiCpu, '#9b8cff'],
  'REST APIs': [FiCode, '#6ef2c4'],
  'Responsive Design': [FiSmartphone, '#9b8cff'],
  'Data Structures & Algorithms': [FiGitBranch, '#6ef2c4'],
  OOP: [FiBox, '#9b8cff'],
  DBMS: [FiDatabase, '#ffb27a'],
  'Operating Systems': [FiCpu, '#6ef2c4'],
  'System Design': [FiLayers, '#9b8cff'],
};

function techMeta(name) {
  const [Icon, color] = MAP[name] ?? [FiCode, '#9a9db0'];
  return { Icon, color };
}

export default function TechIcon({ name, size = 16, className = '', colored = true }) {
  const { Icon, color } = techMeta(name);
  return <Icon size={size} className={className} style={colored ? { color } : undefined} aria-hidden="true" />;
}
