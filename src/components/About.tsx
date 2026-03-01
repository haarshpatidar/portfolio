import Section from './Section';
import { motion } from 'motion/react';
import { User, Code, Database, Layout } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <User size={24} />, label: "Experience", value: "1 Year" },
    { icon: <Code size={24} />, label: "Projects", value: "15+" },
    { icon: <Database size={24} />, label: "Backend", value: "Node/Python" },
    { icon: <Layout size={24} />, label: "Frontend", value: "React/Next" },
  ];

  return (
    <Section id="about" className="bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-emerald-500/20 rounded-2xl blur-xl group-hover:bg-emerald-500/30 transition-all duration-500" />
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-12 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
              About Me
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
              I'm a passionate full-stack developer with a year of professional experience building modern web applications. My journey started with a fascination for how things work on the web, leading me to master both frontend and backend technologies.
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12">
              I specialize in creating interactive, high-performance user interfaces using React and Three.js, while ensuring robust and scalable backend systems with Node.js and SQL/NoSQL databases.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-emerald-500/50 transition-colors duration-300"
                >
                  <div className="text-emerald-400 mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-100 mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-slate-100">My Philosophy</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            I believe that great software is the perfect intersection of aesthetics and functionality. My goal is to build applications that not only look stunning but also provide a seamless, intuitive experience for every user.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Code size={20} />
              </div>
              <div>
                <h4 className="text-slate-100 font-semibold mb-1">Clean Code</h4>
                <p className="text-slate-500">Writing maintainable, scalable, and well-documented code is my top priority.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Layout size={20} />
              </div>
              <div>
                <h4 className="text-slate-100 font-semibold mb-1">User-Centric Design</h4>
                <p className="text-slate-500">Every pixel matters. I focus on creating interfaces that feel natural and responsive.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
