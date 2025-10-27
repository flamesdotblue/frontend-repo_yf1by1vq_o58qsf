import React, { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Download } from 'lucide-react';
import projectsData from '../data/projects.json';

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl p-5 border border-zinc-200/70 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 pointer-events-none" />
      <div className="flex flex-col h-full">
        <img src={project.image} alt="" className="rounded-lg aspect-video object-cover" />
        <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md border border-zinc-200/70 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-violet-400"
          >
            <Github className="w-4 h-4" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSections() {
  const featured = useMemo(() => projectsData.slice(0, 4), []);
  const carouselItems = useMemo(() => projectsData.slice(4), []);
  const [index, setIndex] = useState(0);
  const max = carouselItems.length;

  const next = () => setIndex((i) => (i + 1) % max);
  const prev = () => setIndex((i) => (i - 1 + max) % max);

  return (
    <>
      {/* Projects */}
      <section id="projects" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Featured Projects</h2>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">A selection of recent work blending craft and interactivity.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="mt-14">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">More Projects</h3>
              <div className="flex gap-2">
                <button onClick={prev} className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-violet-400">Prev</button>
                <button onClick={next} className="px-3 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-violet-400">Next</button>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform" style={{ transform: `translateX(-${(index % 3) * 0}%)` }}>
                {carouselItems.slice(index, index + 3).concat(carouselItems.slice(0, Math.max(0, index + 3 - max))).map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Resume</h2>
            <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="mt-6 rounded-xl overflow-hidden border border-zinc-200/70 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur">
            <iframe
              title="Resume"
              src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              className="w-full h-[70vh]"
            />
          </div>

          {/* Timeline */}
          <div className="mt-10 space-y-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="relative pl-8"
              >
                <span className="absolute left-2 top-3 w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400" />
                <div className="rounded-lg p-4 border border-zinc-200/70 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Role Title {i}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Company • 20{i}–20{i + 1}</p>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300">Highlights of accomplishments and responsibilities that showcase impact and growth.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Contact</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">Have a project or want to say hi? Let's talk.</p>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    const errs = {};
    if (!name) errs.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email is required';
    if (!message) errs.message = 'Message is required';

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const mailto = `mailto:your.email@example.com?subject=${encodeURIComponent(
      'Portfolio Contact from ' + name
    )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
    window.location.href = mailto;
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
        <input name="name" className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100" />
        {errors.name && <p className="mt-1 text-sm text-fuchsia-500">{errors.name}</p>}
      </div>
      <div className="md:col-span-1">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
        <input name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100" />
        {errors.email && <p className="mt-1 text-sm text-fuchsia-500">{errors.email}</p>}
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
        <textarea name="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/50 text-zinc-900 dark:text-zinc-100" />
        {errors.message && <p className="mt-1 text-sm text-fuchsia-500">{errors.message}</p>}
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30">
          Send Message
        </button>
      </div>
    </form>
  );
}
