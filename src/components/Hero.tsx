import { motion } from 'motion/react';
import Section from './Section';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <Section id="hero" className="items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-emerald-400 font-mono text-lg mb-4 tracking-widest uppercase"
        >
          Full Stack Developer
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-slate-100 mb-6 tracking-tight"
        >
          Harsh Patidar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-400 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed px-4"
        >
          Crafting high-performance web applications with a focus on interactive user experiences and robust backend architecture.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-6"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-slate-700 hover:border-emerald-400 text-slate-200 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={32} />
      </motion.div>
    </Section>
  );
}
