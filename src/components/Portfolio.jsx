'use client';

// Client boundary for the whole page: every section uses framer-motion or browser APIs.
import { MotionConfig } from 'framer-motion';
import Background from './Background';
import ScrollProgress from './ScrollProgress';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import OpenSource from './OpenSource';
import Contact from './Contact';
import Footer from './Footer';

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
