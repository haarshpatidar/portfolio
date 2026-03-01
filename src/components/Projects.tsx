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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-10 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
              <span className="w-10 md:w-12 h-1 bg-indigo-500 rounded-full" />
              Featured Projects
            </h2>
            <p className="text-slate-500 text-sm md:text-lg max-w-xl">
              A collection of projects that demonstrate my technical skills and problem-solving abilities.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-600 transition-colors group text-sm md:text-base"
          >
            View All Projects <Layers size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-white/95 md:bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 hover:shadow-lg transition-all duration-500"
            >
              <div className="relative h-40 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-indigo-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-700 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-slate-700 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="p-5 md:p-7">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-indigo-50 text-indigo-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
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
