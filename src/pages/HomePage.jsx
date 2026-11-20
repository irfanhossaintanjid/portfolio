import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
