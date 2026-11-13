import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles, 
  CheckCircle2, 
  Rocket, 
  Calendar, 
  FolderGit2,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';

// Generate static routes for all projects
export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = portfolioData.projects.find((p) => p.id === params.id);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.name} | Portfolio Details`,
    description: project.briefDescription,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = portfolioData.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioData.projects.filter((p) => p.id !== params.id);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-grid-dots">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Button */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800">
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {project.name}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Action Links Bar: Live Project Link & GitHub Client Repo (Requirement 9) */}
        <div className="flex flex-wrap items-center gap-4 mb-10 p-4 rounded-2xl glass-panel border border-slate-800">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all group"
          >
            <span>Live Project Demo</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={project.clientRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm border border-slate-700 hover:border-slate-600 transition-all group"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>GitHub Client Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Production Deployment</span>
          </div>
        </div>

        {/* Project Hero Image */}
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl bg-slate-950">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Main Technology Stack Used (Requirement 9) */}
        <div className="mb-12 p-8 rounded-3xl glass-panel border border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Main Technology Stack Used</h2>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Technologies and frameworks selected for optimal performance, scalability, and developer experience.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-mono font-medium bg-slate-900 text-cyan-300 border border-slate-700/80 shadow-sm flex items-center gap-2 hover:border-emerald-500/50 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Brief Description & Deep Overview (Requirement 9) */}
        <div className="mb-12 p-8 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Project Description & Architecture</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {project.briefDescription}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
            <p>{project.overview}</p>
          </div>
        </div>

        {/* Challenges Faced While Developing (Requirement 9) */}
        <div className="mb-12 p-8 rounded-3xl glass-panel border border-slate-800">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">Challenges Faced & Applied Solutions</h2>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Key architectural hurdles encountered during engineering and how they were resolved.
          </p>

          <div className="space-y-4">
            {project.challenges.map((challenge, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {cIdx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-amber-300 mb-1">
                      Challenge:
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                </div>

                {project.solutions && project.solutions[cIdx] && (
                  <div className="ml-9 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-emerald-400 font-bold block mb-0.5">Engineered Solution:</span>
                      <span className="text-slate-300">{project.solutions[cIdx]}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Potential Improvements & Future Plans (Requirement 9) */}
        <div className="mb-16 p-8 rounded-3xl glass-panel border border-slate-800">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Rocket className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">Potential Improvements & Future Plans</h2>
          </div>
          <p className="text-sm text-slate-400 mb-6">
            Planned roadmap milestones, upcoming feature expansions, and optimization targets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.futurePlans.map((plan, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                    0{pIdx + 1}
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {plan}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Roadmap Feature</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Browse Other Projects Carousel/Grid */}
        <div className="pt-12 border-t border-slate-800/80">
          <h3 className="text-xl font-bold text-white mb-6">Explore Other Featured Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-2">
                    {item.briefDescription}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
