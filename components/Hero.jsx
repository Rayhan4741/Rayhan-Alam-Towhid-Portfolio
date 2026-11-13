'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Download, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  MessageSquare,
  ArrowRight,
  Code2,
  Sparkles,
  MapPin,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, socialLinks } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personal.secondaryTitles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [personal.secondaryTitles.length]);

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': 
      case 'twitter / x': return <Twitter className="w-5 h-5" />;
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'whatsapp': return <MessageSquare className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center bg-grid-dots overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-slate-400 text-base sm:text-lg font-mono tracking-wide">
                Hi there, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
                {personal.name}
              </h1>
            </div>

            {/* Professional Designation with Animated Switcher */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-xl sm:text-2xl font-bold">
              <span className="text-slate-300">A Passionate</span>
              <span className="text-gradient px-3 py-1 rounded-xl bg-slate-800/50 border border-slate-700/60 font-mono transition-all duration-300">
                {personal.secondaryTitles[titleIndex]}
              </span>
            </div>

            {/* Professional Tagline & Short Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personal.tagline}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personal.shortBio}
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{personal.location}</span>
            </div>

            {/* Primary Action Buttons: Resume Download & Projects (Requirement 3) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              {/* Resume Download Button (Clearly visible) */}
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                id="resume-download-btn"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* View Projects Link */}
              <Link
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium text-sm sm:text-base border border-slate-700 hover:border-slate-600 transition-all duration-200 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Media Links (Requirement 4) */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Connect With Me:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/20 transform hover:-translate-y-1 transition-all duration-200 shadow-sm"
                    title={`${social.name} (${social.username})`}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Professional Photo & Decorative Tech Card (5 cols) (Requirement 2) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-600 p-1 shadow-2xl shadow-emerald-500/20 pulse-glow">
                
                {/* Inner Image Container */}
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                  <Image
                    src={personal.avatarUrl}
                    alt={`${personal.name} - ${personal.designation}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-center filter saturate-105 hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>

              </div>

              {/* Floating Badge: Tech Stack */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 px-4 py-2.5 rounded-2xl glass-panel border border-slate-700/80 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-slate-400">Primary Stack</div>
                  <div className="text-sm font-bold text-white">Next.js & MERN</div>
                </div>
              </div>

              {/* Floating Badge: Experience */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 px-4 py-2.5 rounded-2xl glass-panel border border-slate-700/80 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-mono text-slate-400">Experience</div>
                  <div className="text-sm font-bold text-white">2+ Years Active</div>
                </div>
              </div>

            </div>

            {/* Quick stats below photo */}
            <div className="grid grid-cols-3 gap-4 mt-10 w-full max-w-md text-center">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400 font-mono">15+</div>
                <div className="text-xs text-slate-400 mt-0.5">Projects Built</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-cyan-400 font-mono">2+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years Coding</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Satisfaction</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
