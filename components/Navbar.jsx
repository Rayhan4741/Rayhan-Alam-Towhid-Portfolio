'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Download, 
  Terminal, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isHomePage) {
        const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navLinks = [
    { name: 'About', href: isHomePage ? '#about' : '/#about', id: 'about' },
    { name: 'Skills', href: isHomePage ? '#skills' : '/#skills', id: 'skills' },
    { name: 'Education', href: isHomePage ? '#education' : '/#education', id: 'education' },
    { name: 'Experience', href: isHomePage ? '#experience' : '/#experience', id: 'experience' },
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects', id: 'projects' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-mono font-black text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {portfolioData.personal.designation}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Resume */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 rounded-xl hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200 shadow-sm hover:shadow-emerald-500/20 group"
              title="View and download professional resume"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20"
              title="Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors border border-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-slate-800 shadow-2xl animate-in fade-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:text-emerald-400 hover:bg-slate-800/70 transition-colors text-base font-medium"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              ))}
              <div className="pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenResume) onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

