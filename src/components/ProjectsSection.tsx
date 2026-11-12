import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';
import { ProjectItem, PROJECTS } from '../data/portfolioData';
import { Github, Info, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProjectDetail: (project: ProjectItem) => void;
  activeFilter?: string | null;
  onClearFilter?: () => void;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
  onOpenDetail: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  range,
  targetScale,
  progress,
  onOpenDetail,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[92vh] sm:h-[90vh] md:h-[86vh] flex items-center justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 28}px)`,
        }}
        className="w-full max-w-6xl rounded-[32px] sm:rounded-[48px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden"
      >
        {/* Top Row: Number, Category label, Project name, Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-4xl sm:text-5xl md:text-6xl text-[#D7E2EA] tracking-tighter tabular-nums">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-400">
                <span>{project.category}</span>
                <span>/</span>
                <span className="text-[#B600A8] font-medium">{project.type}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Inspect GitHub repository"
              className="p-2.5 sm:p-3 rounded-full border border-white/20 text-[#D7E2EA] hover:text-white hover:border-white/50 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <LiveProjectButton
              onClick={() => onOpenDetail(project)}
              label="View Project"
              className="px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Short description and tech tags bar */}
        <div className="py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
          <p className="line-clamp-1 max-w-xl text-zinc-300 font-light">
            {project.shortDesc}
          </p>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-zinc-400">
            {project.tags.slice(0, 4).map((t, i) => (
              <span key={t}>
                {t}
                {i < Math.min(3, project.tags.length - 1) && (
                  <span className="ml-2 text-zinc-600">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-Column Image Grid */}
        {/* Left column (40% width) has 2 stacked images, right column (60%) has 1 tall image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mt-2 h-[48vh] sm:h-[52vh] md:h-[56vh]">
          {/* Left Column (5/12 approx 40%) */}
          <div className="md:col-span-5 flex flex-row md:flex-col gap-3 sm:gap-4 h-full">
            {/* Left Top Image */}
            <div className="flex-1 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-zinc-900 border border-white/10 relative group">
              <img
                src={project.images.col1Top}
                alt={`${project.title} overview`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add(
                      'bg-gradient-to-br',
                      'from-zinc-900',
                      'to-zinc-800',
                      'flex',
                      'items-center',
                      'justify-center'
                    );
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Left Bottom Image */}
            <div className="flex-1 rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-zinc-900 border border-white/10 relative group">
              <img
                src={project.images.col1Bottom}
                alt={`${project.title} data & model`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.classList.add(
                      'bg-gradient-to-br',
                      'from-zinc-900',
                      'to-zinc-800',
                      'flex',
                      'items-center',
                      'justify-center'
                    );
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Right Column (7/12 approx 60%) - 1 tall image */}
          <div className="md:col-span-7 h-full rounded-[28px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden bg-zinc-900 border border-white/10 relative group">
            <img
              src={project.images.col2Tall}
              alt={`${project.title} full interface`}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.classList.add(
                    'bg-gradient-to-br',
                    'from-zinc-900',
                    'to-zinc-800',
                    'flex',
                    'items-center',
                    'justify-center'
                  );
                }
              }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            <button
              onClick={() => onOpenDetail(project)}
              className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider border border-white/20 flex items-center gap-1.5 transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>Project Details</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectDetail,
  activeFilter,
  onClearFilter,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const filteredProjects = activeFilter
    ? PROJECTS.filter(
        (p) =>
          p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase())) ||
          p.category.toLowerCase().includes(activeFilter.toLowerCase())
      )
    : PROJECTS;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      {/* Heading: "Project" */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            Projects
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#BBCCD7]/60">
            Engineered Works &bull; Machine Learning &bull; Full-Stack Systems
          </p>
        </FadeIn>

        {activeFilter && (
          <div className="mt-6 inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-300">
            <span>Filtered by: <strong className="text-white">{activeFilter}</strong></span>
            <button
              onClick={onClearFilter}
              className="text-[#B600A8] hover:text-white underline ml-2 cursor-pointer"
            >
              Reset
            </button>
          </div>
        )}
      </div>

      {/* Sticky-stacking project cards */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {filteredProjects.map((project, index) => {
          const totalCards = filteredProjects.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const range: [number, number] = [index * 0.25, 1];

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              range={range}
              targetScale={targetScale}
              progress={scrollYProgress}
              onOpenDetail={onOpenProjectDetail}
            />
          );
        })}
      </div>
    </section>
  );
};
