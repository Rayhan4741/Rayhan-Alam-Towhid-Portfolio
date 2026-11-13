'use client';

import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Educational <span className="text-gradient">Qualification</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Solid theoretical foundations in Computer Science, Software Engineering, and Mathematics.
          </p>
        </div>

        {/* Education Timeline Cards (Requirement 7) */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden shadow-lg shadow-black/40"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-2">
                    <Award className="w-3 h-3" />
                    <span>{edu.grade}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-base font-semibold text-cyan-400">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono shrink-0">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Highlights & Coursework List */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="text-xs uppercase tracking-wider font-mono text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Coursework & Distinctions:</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
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
