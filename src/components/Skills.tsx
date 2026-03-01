import Section from './Section';
import { motion } from 'motion/react';
import { Code2, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="text-emerald-400" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Redux"],
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-400" />,
      skills: ["Node.js", "Express", "Python", "Django", "Go", "GraphQL"],
    },
    {
      title: "Database",
      icon: <Database className="text-emerald-400" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma", "SQL"],
    },
    {
      title: "DevOps",
      icon: <Terminal className="text-emerald-400" />,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Nginx"],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="text-emerald-400" />,
      skills: ["React Native", "Expo", "Flutter", "PWA"],
    },
    {
      title: "Languages",
      icon: <Code2 className="text-emerald-400" />,
      skills: ["JavaScript", "Python", "C++", "Rust", "Java"],
    },
  ];

  return (
    <Section id="skills" className="bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-emerald-500 rounded-full" />
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-emerald-500/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
