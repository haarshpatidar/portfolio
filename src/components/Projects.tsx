import Section from './Section';
import { motion } from 'motion/react';
import { ExternalLink, Github, Layers } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A full-stack application that uses DALL-E API to generate unique images based on user prompts. Features a community showcase and user profiles.",
      image: "https://picsum.photos/seed/ai-image/800/600",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with live price updates, historical charts, and portfolio management tools.",
      image: "https://picsum.photos/seed/crypto/800/600",
      tags: ["Next.js", "Tailwind", "Chart.js", "CoinGecko API"],
      github: "#",
      demo: "#",
    },
    {
      title: "3D Portfolio",
      description: "An interactive 3D portfolio website built with React Three Fiber and Framer Motion, showcasing advanced web animations.",
      image: "https://picsum.photos/seed/portfolio/800/600",
      tags: ["React", "Three.js", "R3F", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-4">
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl">
              A collection of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group"
          >
            View All Projects <Layers size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-slate-900 text-slate-100 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.demo}
                    className="w-12 h-12 rounded-full bg-slate-900 text-slate-100 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
