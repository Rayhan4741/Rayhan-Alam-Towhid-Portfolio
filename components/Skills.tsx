'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code2 },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench },
  ];

  const getFilteredSkills = (): SkillItem[] => {
    if (activeTab === 'all') {
      return [
        ...skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skills.databases.map(s => ({ ...s, category: 'Databases' })),
        ...skills.tools.map(s => ({ ...s, category: 'Tools & DevOps' })),
      ];
    }
    return skills[activeTab]?.map(s => ({ ...s, category: categories.find(c => c.id === activeTab)?.name })) || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive, graphical representation of my engineering stack and technical capabilities.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Graphical Skills Grid (Requirement 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="p-5 rounded-2xl glass-panel border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-md hover:shadow-black/60 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      {skill.experience}
                    </span>
                  </div>
                </div>
                
                {/* Percentage Badge */}
                <span className="font-mono font-bold text-sm text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30">
                  {skill.level}%
                </span>
              </div>

              {/* Graphical Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-2.5 p-0.5 border border-slate-800 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color || 'from-emerald-400 to-cyan-400'} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              {/* Category pill indicator */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-block uppercase tracking-wider text-[10px] text-slate-400 font-mono">
                  {skill.category}
                </span>
                <span className="flex items-center gap-1 text-slate-400 font-mono">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  <span>Production Ready</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Category Summary Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-emerald-400 font-mono font-bold text-2xl">5+</div>
            <div className="text-xs text-slate-400 mt-1">Web Technologies</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-cyan-400 font-mono font-bold text-2xl">5+</div>
            <div className="text-xs text-slate-400 mt-1">Backend Frameworks</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-purple-400 font-mono font-bold text-2xl">4+</div>
            <div className="text-xs text-slate-400 mt-1">Databases & Clouds</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
            <div className="text-amber-400 font-mono font-bold text-2xl">6+</div>
            <div className="text-xs text-slate-400 mt-1">DevOps & Platforms</div>
          </div>
        </div>

      </div>
    </section>
  );
}
