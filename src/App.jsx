import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
