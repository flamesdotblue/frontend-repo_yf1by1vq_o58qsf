import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Palette, Layers, Globe, Database, Smartphone, GitBranch } from 'lucide-react';

const skills = [
  { name: 'React', icon: <Monitor className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
  { name: 'Tailwind', icon: <Palette className="w-5 h-5" /> },
  { name: 'Framer Motion', icon: <Layers className="w-5 h-5" /> },
  { name: 'Three.js', icon: <Globe className="w-5 h-5" /> },
  { name: 'Node', icon: <Database className="w-5 h-5" /> },
  { name: 'Responsive', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Git', icon: <GitBranch className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 rounded-2xl blur opacity-50" />
            <div className="relative rounded-2xl p-1 bg-white/10 dark:bg-white/5">
              <div className="rounded-2xl p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur border border-zinc-200/50 dark:border-zinc-800/60">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full aspect-[4/3] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">About Me</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I design and build immersive web experiences with a focus on performance, accessibility, and motion.
              My work blends clean design with interactive 3D, bringing interfaces to life in a way that feels modern and purposeful.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skills.map((s) => (
                <motion.div
                  key={s.name}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-200/70 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/40 backdrop-blur text-sm text-zinc-800 dark:text-zinc-200"
                >
                  <span className="text-violet-600 dark:text-violet-400">{s.icon}</span>
                  <span>{s.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
