import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-xl' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-slate-100 flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-950 group-hover:rotate-12 transition-transform duration-300">
            HP
          </div>
          <span className="hidden sm:inline">Harsh Patidar</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-slate-400 hover:text-emerald-400 font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="h-6 w-px bg-slate-800" />
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-100 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-10 flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-semibold text-slate-100 hover:text-emerald-400 transition-colors tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="w-full h-px bg-white/5 my-4" />
              <div className="flex gap-8">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors p-2">
                  <Github size={28} />
                </a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors p-2">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
