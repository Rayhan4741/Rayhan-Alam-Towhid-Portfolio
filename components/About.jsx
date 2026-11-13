'use client';

import { 
  Trophy, 
  Camera, 
  BookOpen, 
  Cpu, 
  Compass, 
  HeartHandshake, 
  Sparkles, 
  Terminal,
  CheckCircle2,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Camera': return <Camera className="w-5 h-5 text-cyan-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering digital experiences with passion, curiosity, and attention to detail.
          </p>
        </div>

        {/* Main Content Grid: Journey & Work Enjoyed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Programming Journey */}
          <div className="p-8 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">My Programming Journey</h3>
                <p className="text-xs text-slate-400 font-mono">From First "Hello World" to Full-Stack Systems</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {about.journey}
              </p>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-emerald-400/90 flex items-start gap-2">
                <span className="text-slate-500 select-none">&gt;</span>
                <span>Philosophy: Write readable code for humans first, optimized execution for machines second.</span>
              </div>
            </div>
          </div>

          {/* Card 2: The Work I Enjoy */}
          <div className="p-8 rounded-3xl glass-panel border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Work I Enjoy</h3>
                <p className="text-xs text-slate-400 font-mono">Architectures & Experiences I Love Crafting</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                {about.workEnjoyed}
              </p>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-cyan-400/90 flex items-start gap-2">
                <span className="text-slate-500 select-none">&gt;</span>
                <span>Focus: Sub-second latency, accessible keyboard flows, and zero unnecessary re-renders.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Personality & Work Ethic Section */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Personality & Core Work Ethic</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {about.personality.map((trait, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies & Outside Interests (Requirement 5) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Beyond The Code</span>
                <span className="text-xs font-normal text-slate-400 font-mono">Hobbies & Interests</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Life outside the terminal that fuels creative problem solving and visual inspiration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.hobbies.map((hobby, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 shadow-md hover:shadow-black/50"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getHobbyIcon(hobby.icon)}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {hobby.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

