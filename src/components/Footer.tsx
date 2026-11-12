import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Briefcase, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  socialLinks: {
    github: string;
    linkedIn: string;
    freelancer: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/10 px-6 md:px-10 py-12 text-[#D7E2EA] select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Name */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono mt-1">
            {PERSONAL_INFO.title}
          </span>
          <span className="text-xs text-zinc-600 mt-2">
            &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </span>
        </div>

        {/* Selected Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm uppercase tracking-wider text-zinc-400 font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={socialLinks.freelancer}
            target="_blank"
            rel="noopener noreferrer"
            title="Freelancer Profile"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
          >
            <Briefcase className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            title="Send Email"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-2.5 rounded-full border border-white/20 hover:border-white/50 text-zinc-300 hover:text-white transition-colors ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
