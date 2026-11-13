'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Terminal, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'twitter':
      case 'twitter / x': return <Twitter className="w-4 h-4" />;
      case 'facebook': return <Facebook className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-center">
          
          {/* Brand & Designation (Col 6) */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                <Terminal className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                {personal.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Software Engineer and Backend Enthusiast specializing in high-throughput APIs, Next.js applications, and resilient cloud architectures.
            </p>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">Quick Navigation</h4>
            <div className="flex flex-col space-y-1.5 text-sm text-slate-300">
              <Link href="/#about" className="hover:text-emerald-400 transition-colors">About Me</Link>
              <Link href="/#skills" className="hover:text-emerald-400 transition-colors">Technical Skills</Link>
              <Link href="/#education" className="hover:text-emerald-400 transition-colors">Education</Link>
              <Link href="/#experience" className="hover:text-emerald-400 transition-colors">Work Experience</Link>
              <Link href="/#projects" className="hover:text-emerald-400 transition-colors">Projects Showcase</Link>
            </div>
          </div>

          {/* Social Links & Back to Top (Col 3) */}
          <div className="md:col-span-3 flex flex-col md:items-end space-y-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  title={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 text-xs font-mono transition-colors group cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using Next.js & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
