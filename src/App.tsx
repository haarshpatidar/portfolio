import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThreeScene from './components/ThreeScene';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-emerald-400 min-h-screen font-sans antialiased">
      {/* 3D Background */}
      <ThreeScene />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xl font-bold text-slate-100">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-slate-950 text-sm">
              HP
            </div>
            Harsh Patidar
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Harsh Patidar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
