'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Eye,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world web applications built with modern engineering standards, robust security, and sleek design.
          </p>
        </div>

        {/* Projects Cards Grid (Requirement 9: Card format with Name, Image, View More / Details button) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden group shadow-xl hover:shadow-black/70 hover:-translate-y-1.5"
            >
              
              {/* Project Image Container */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/90 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick Link Pills on Image */}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors border border-slate-700/80 backdrop-blur-md"
                    title="Live Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.clientRepoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/80 backdrop-blur-md"
                    title="Client GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors drop-shadow-md">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  {/* Brief Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {project.briefDescription}
                  </p>

                  {/* Tech Stack Tags (Requirement 9) */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-cyan-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-xs font-mono text-slate-400 bg-slate-900/50">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions: View More / Details Button & Quick Live (Requirement 9) */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  
                  {/* Primary Requirement: View More / Details Button */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-emerald-500/20 transition-all duration-200 group/btn"
                  >
                    <span>View More / Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  {/* Secondary direct live link */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
                    title="Open Live Website"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

