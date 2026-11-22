import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata = {
  title: 'Manoj Lamani — Full-Stack & AI/ML Engineer',
  description:
    'Manoj Chandrappa Lamani — Full-Stack Developer and AI/ML engineer from Bengaluru. React, Next.js, TypeScript, Node.js, Python, FastAPI, RAG and open-source contributions to Kyverno and FOSSASIA.',
  keywords: ['Manoj Lamani', 'Full Stack Developer', 'AI ML Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'RAG', 'Open Source', 'Portfolio'],
  authors: [{ name: 'Manoj Chandrappa Lamani' }],
  openGraph: {
    title: 'Manoj Lamani — Full-Stack & AI/ML Engineer',
    description: 'Full-stack products, AI systems and open-source work by Manoj Chandrappa Lamani.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#05060a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
