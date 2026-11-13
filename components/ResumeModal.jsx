'use client';

import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, about, skills, education, experience, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text/pdf formatted download or opens print dialog
    const element = document.createElement("a");
    const resumeText = `
=====================================================
${personal.name.toUpperCase()} - ${personal.designation.toUpperCase()}
=====================================================
Email: ${personal.email}
Phone: ${personal.phone}
WhatsApp: ${personal.phone}
Location: ${personal.location}
Portfolio: https://alexmorgan-portfolio.vercel.app

PROFESSIONAL SUMMARY
--------------------
${about.summary}
${about.journey}

WORK EXPERIENCE
---------------
${experience.map(exp => `
* ${exp.role} | ${exp.company} (${exp.period})
  Location: ${exp.location} | Type: ${exp.employmentType}
  Description: ${exp.description}
  Key Contributions:
  ${exp.contributions.map(c => `  - ${c}`).join('\n')}
  Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

TECHNICAL SKILLS
----------------
* Frontend: ${skills.frontend.map(s => s.name).join(', ')}
* Backend: ${skills.backend.map(s => s.name).join(', ')}
* Databases: ${skills.databases.map(s => s.name).join(', ')}
* Tools & DevOps: ${skills.tools.map(s => s.name).join(', ')}

EDUCATION QUALIFICATION
-----------------------
${education.map(edu => `
* ${edu.degree}
  Institution: ${edu.institution} (${edu.period})
  Result: ${edu.grade}
  ${edu.highlights.map(h => `  - ${h}`).join('\n')}
`).join('\n')}

FEATURED PROJECTS
-----------------
${projects.map(p => `
* ${p.name}
  Stack: ${p.techStack.join(', ')}
  Description: ${p.briefDescription}
  Live Demo: ${p.liveLink}
  Client GitHub: ${p.clientRepoLink}
`).join('\n')}
=====================================================
    `.trim();

    const file = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${personal.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              {personal.name} — Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-xs hover:from-emerald-400 hover:to-cyan-400 transition-colors shadow-sm"
              title="Download text resume"
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
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 text-sm leading-relaxed bg-slate-900">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-black text-white">{personal.name}</h1>
            <p className="text-emerald-400 font-mono font-bold text-base mt-1">{personal.designation}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-emerald-400" /> {personal.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-cyan-400" /> {personal.phone}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {personal.location}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">Professional Summary</h2>
            <p className="text-slate-300 text-sm">{about.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">Work Experience</h2>
            <div className="space-y-5">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-base">{exp.role} — <span className="text-cyan-400 font-normal">{exp.company}</span></span>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                    {exp.contributions.map((c, cIdx) => (
                      <li key={cIdx}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">Education</h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400">{edu.institution} | <span className="text-emerald-400 font-semibold">{edu.grade}</span></div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-slate-200">Frontend:</strong> <span className="text-slate-400">{skills.frontend.map(s => s.name).join(', ')}</span></div>
              <div><strong className="text-slate-200">Backend:</strong> <span className="text-slate-400">{skills.backend.map(s => s.name).join(', ')}</span></div>
              <div><strong className="text-slate-200">Databases:</strong> <span className="text-slate-400">{skills.databases.map(s => s.name).join(', ')}</span></div>
              <div><strong className="text-slate-200">DevOps & Tools:</strong> <span className="text-slate-400">{skills.tools.map(s => s.name).join(', ')}</span></div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
