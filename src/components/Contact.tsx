import Section from './Section';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 flex items-center gap-4">
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
              Get in Touch
            </h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6 md:space-y-8 mb-12">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 transition-all duration-300 shrink-0">
                  <Mail size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</div>
                  <div className="text-slate-100 text-base md:text-lg font-medium truncate">harshpatidar@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 transition-all duration-300 shrink-0">
                  <Phone size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-slate-100 text-base md:text-lg font-medium">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500 transition-all duration-300 shrink-0">
                  <MapPin size={20} className="md:size-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-slate-100 text-base md:text-lg font-medium">Indore, India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-semibold ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-semibold ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-slate-300 text-sm font-semibold ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-slate-300 text-sm font-semibold ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
