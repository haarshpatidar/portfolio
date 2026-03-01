import Section from './Section';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "Jan 2024 - Present",
      description: "Leading the development of a high-traffic e-commerce platform using React and Node.js. Optimized database queries, reducing response times by 40%.",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Junior Web Developer",
      company: "Creative Agency",
      location: "San Francisco, CA",
      period: "Jun 2023 - Dec 2023",
      description: "Collaborated with the design team to implement pixel-perfect, responsive web interfaces. Developed custom WordPress themes and plugins.",
      skills: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
    },
  ];

  return (
    <Section id="experience" className="bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-100 mb-16 flex items-center gap-4">
          <span className="w-12 h-1 bg-emerald-500 rounded-full" />
          Experience
        </h2>
        <div className="space-y-12 relative before:absolute before:left-[1.25rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 group-hover:scale-110 transition-all duration-300 z-10">
                <Briefcase size={18} />
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 font-medium text-sm md:text-base">
                      <span className="text-emerald-400">{exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-slate-300 text-xs md:text-sm font-semibold whitespace-nowrap">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-md border border-emerald-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
