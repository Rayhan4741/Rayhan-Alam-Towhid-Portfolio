'use client';

import {
  X,
  Download,
  Printer,
  Mail,
  ExternalLink,
  FileText,
  Award,
  BookOpen,
  Briefcase,
  Wrench,
  Globe,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, experience, achievements } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Open resume.html or initiate download
    const a = document.createElement('a');
    a.href = '/resume.html';
    a.target = '_blank';
    a.download = 'Rayhan_Alam_Towhid_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {personal.name} — Curriculum Vitae
              </h3>
              <span className="text-[11px] font-mono text-emerald-400">Official Resume Document</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs hover:from-emerald-400 hover:to-cyan-400 transition-colors shadow-sm"
              title="Download Resume HTML"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800/80 text-cyan-400 font-medium text-xs hover:bg-slate-700 border border-slate-700"
              title="Open full page"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full View</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 text-slate-200 text-sm leading-relaxed bg-[#0b0f19]">

          {/* Resume Header */}
          <div className="text-center border-b border-slate-800/90 pb-6">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{personal.name}</h1>
            <p className="text-emerald-400 font-mono font-semibold text-sm sm:text-base mt-1.5">
              Software Engineer | Problem Solver | Curious Learner
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs text-slate-400 font-mono">
              <a href={`mailto:${personal.email}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                {personal.email}
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/rayhan18-cse-baiust/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com/Rayhan6244" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                GitHub (@Rayhan6244)
              </a>
              <span>•</span>
              <span className="text-slate-400">Cumilla, BD</span>
            </div>
          </div>

          {/* Section: Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 pb-1 border-b border-slate-800">
              Objective
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Driven Computer Science student and aspiring Software Engineer with a strong foundation in algorithms, C/C++, JavaScript, Node.js, and databases. Proven experience in competitive programming, high-pressure hackathons, and full-stack product development. Dedicated to solving complex challenges and building scalable, impactful applications.
            </p>
          </div>

          {/* Section: Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 pb-1 border-b border-slate-800 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><strong className="text-white">Programming Languages:</strong> <span className="text-slate-300">JavaScript, C, C++, Python, SQL</span></p>
              <p><strong className="text-white">Web Technologies:</strong> <span className="text-slate-300">React, Next.js, TailwindCSS, HTML5, CSS3</span></p>
              <p><strong className="text-white">Backend & Server:</strong> <span className="text-slate-300">Node.js, Express.js, Firebase, Docker</span></p>
              <p><strong className="text-white">Databases:</strong> <span className="text-slate-300">MongoDB, MySQL, Firebase</span></p>
              <p><strong className="text-white">Tools & Platforms:</strong> <span className="text-slate-300">Git, GitHub, Linux, Vercel, Netlify, Figma</span></p>
              <p><strong className="text-white">Soft Skills:</strong> <span className="text-slate-300">Leadership, Communication, Adaptability</span></p>
            </div>
          </div>

          {/* Section: Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 pb-1 border-b border-slate-800 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm sm:text-base">Backend Developer</h3>
                  <span className="text-xs font-mono text-cyan-400">July 2025 – September 2025</span>
                </div>
                <ul className="list-disc list-inside mt-1 text-xs sm:text-sm text-slate-300 space-y-1">
                  <li>Delivered multiple projects, collaborating with clients internationally, including a short-term engagement with an Indian company.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-bold text-white text-sm sm:text-base">Mini Internship</h3>
                  <span className="text-xs font-mono text-cyan-400">2025 (4-Month Continuing)</span>
                </div>
                <ul className="list-disc list-inside mt-1 text-xs sm:text-sm text-slate-300 space-y-1">
                  <li>Continuing a 4-month internship focused on real-world application development using modern web technologies.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Achievements & Awards */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 pb-1 border-b border-slate-800 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Achievements & Awards</span>
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Champion - 2025:</strong> BAIUST CSE Fest – Comilla, BD</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Top 10 Finalist - 2025:</strong> Technovation 2025 – National Hackathon, Dhaka, BD</span>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 pb-1 border-b border-slate-800 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Education</span>
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-white text-sm">
                  Bangladesh Army International University of Science and Technology (BAIUST)
                </span>
                <span className="text-xs font-mono text-slate-400">Cumilla, BD</span>
              </div>
              <p className="text-cyan-400 font-medium">BSc in Computer Science and Engineering (Apr 2024 – Mar 2028)</p>
              <p className="text-emerald-400 font-mono font-semibold">Current CGPA: 3.36 / 4.00</p>
            </div>
          </div>

          {/* Section: Extracurricular Activities & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>Extracurricular Activities</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Travelling, Playing football, Gaming, Running, Reading Books.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 pb-1 border-b border-slate-800 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Languages</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Bangla (Native), English (Fluent), Hindi (Comfortable)
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">Press Esc or Close to return</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
