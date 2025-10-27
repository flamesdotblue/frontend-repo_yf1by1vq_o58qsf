import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold mb-4">
            Frontend • UI/UX • 3D
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-zinc-900 dark:text-zinc-50">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">Your Name</span>
          </h1>
          <p className="mt-5 text-lg text-zinc-700 dark:text-zinc-300">
            Frontend Developer & UI/UX Designer crafting futuristic, performant interfaces with delightful motion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-300/70 dark:border-zinc-800/80 bg-white/40 dark:bg-zinc-900/40 backdrop-blur hover:border-violet-400 hover:bg-white/60 dark:hover:bg-zinc-900/60 transition text-zinc-900 dark:text-zinc-100"
            >
              <ExternalLink className="w-4 h-4" /> View Projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute w-72 h-72 -top-16 -left-10 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse" />
        <span className="absolute w-96 h-96 -bottom-16 -right-10 bg-cyan-400/20 blur-3xl rounded-full animate-pulse [animation-delay:800ms]" />
      </div>
    </section>
  );
}
