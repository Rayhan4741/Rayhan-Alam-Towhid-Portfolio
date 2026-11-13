'use client';

import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-900/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven track record of building production web apps, collaborating in agile teams, and delivering impact.
          </p>
        </div>

        {/* Experience Timeline (Requirement 8) */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-md shadow-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-lg shadow-black/40 group-hover:-translate-y-1">
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {job.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950/70 border border-emerald-500/30 text-emerald-400">
                        {job.employmentType}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-base">
                      <Building2 className="w-4 h-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono shrink-0">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs uppercase tracking-wider font-mono text-slate-400">
                    Key Achievements:
                  </div>
                  {job.contributions.map((contribution, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{contribution}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Technologies:</span>
                  {job.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

