import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Check, Copy, Code, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyDetails = () => {
    const text = `${project.title}\n${project.shortDesc}\nTech: ${project.tags.join(', ')}\nGitHub: ${project.githubUrl}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#121418] border border-white/20 rounded-[32px] sm:rounded-[44px] shadow-2xl overflow-y-auto text-[#D7E2EA] p-6 sm:p-8 md:p-10 z-10"
        >
          {/* Top Bar with Number and Close */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl sm:text-2xl font-bold text-[#B600A8]">
                {project.number}
              </span>
              <span className="text-zinc-500">/</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-1">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Educational / Architectural Notice for Health App */}
          {project.id === 'health-monitoring' && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
              <strong>Educational &amp; Predictive Software Scope:</strong> This project illustrates predictive machine learning workflows, risk factor correlation, and statistical analysis for educational software demonstration. It is not a clinically validated diagnostic device.
            </div>
          )}

          {/* Image Showcase Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src={project.images.col1Top}
                alt="Architecture view 1"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src={project.images.col1Bottom}
                alt="Architecture view 2"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-44 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10">
              <img
                src={project.images.col2Tall}
                alt="Interface view"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Detailed Content */}
          <div className="space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B600A8]" />
                Project Overview
              </h4>
              <p>{project.fullDesc}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B600A8]" />
                Key Capabilities &amp; Highlights
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold mb-2 flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                Technical Architecture
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                {project.architecture}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <button
                type="button"
                onClick={handleCopyDetails}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/40 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Summary'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
