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
    <Section id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10 md:mb-16 flex items-center gap-3 md:gap-4">
          <span className="w-10 md:w-12 h-1 bg-indigo-500 rounded-full" />
          Experience
        </h2>
        <div className="space-y-8 md:space-y-12 relative before:absolute before:left-[1.1rem] md:before:left-[1.25rem] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-0 top-2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-indigo-500 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 z-10">
                <Briefcase size={16} />
              </div>
                <div className="bg-white/95 md:bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-4 md:p-8 hover:border-indigo-300 hover:shadow-md transition-all duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-1 md:mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-medium text-xs md:text-base">
                      <span className="text-indigo-500">{exp.company}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] md:text-sm font-semibold whitespace-nowrap">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>
                <p className="text-slate-500 text-xs md:text-base leading-relaxed mb-4 md:mb-8">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-indigo-50 text-indigo-500 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-md border border-indigo-100"
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
