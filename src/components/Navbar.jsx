import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentSection }) {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      const dark = stored === 'dark';
      document.documentElement.classList.toggle('dark', dark);
      setIsDark(dark);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/30 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 text-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">MyPortfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-sm transition-colors hover:text-violet-600 dark:hover:text-violet-400 ${
                  currentSection === link.id
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {link.label}
                {currentSection === link.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition"
            >
              <Github className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition"
            >
              <Linkedin className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition"
            >
              <Mail className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10 transition"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
