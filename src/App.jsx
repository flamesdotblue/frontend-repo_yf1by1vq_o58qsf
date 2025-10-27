import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioSections from './components/PortfolioSections';

export default function App() {
  const [current, setCurrent] = useState('home');

  // Observe sections to highlight active link
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar currentSection={current} />
      <main>
        <Hero />
        <About />
        <PortfolioSections />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-zinc-600 dark:text-zinc-400 flex items-center justify-between flex-wrap gap-4">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>
          Built with React, Tailwind, Framer Motion and Spline.
        </p>
      </div>
    </footer>
  );
}
