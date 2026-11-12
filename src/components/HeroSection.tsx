import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import { ASSETS, PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Briefcase, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  socialLinks: {
    github: string;
    linkedIn: string;
    freelancer: string;
  };
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  socialLinks,
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen h-[100dvh] flex flex-col justify-between overflow-x-clip px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 select-none"
    >
      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full text-center"
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[17vw] scale-y-[1.05]">
            Hi, i&apos;m sethu
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-[#BBCCD7]/60 -mt-2 sm:-mt-4">
            <span>Raghunaatha Sethupathi</span>
            <span>·</span>
            <span>Coimbatore, India</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Portrait with Magnet physics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="flex justify-center items-end"
        >
          <img
            src={ASSETS.heroPortrait}
            alt="Raghunaatha Sethupathi Developer Avatar"
            referrerPolicy="no-referrer"
            className="w-[260px] sm:w-[360px] md:w-[440px] lg:w-[520px] max-h-[62vh] sm:max-h-[68vh] md:max-h-[75vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-105 select-none"
            loading="eager"
          />
        </Magnet>
      </motion.div>

      {/* Bottom Bar: Left description, Center quick actions, Right Contact Button */}
      <div className="w-full flex justify-between items-end relative z-20 gap-4">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
        >
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.3vw,1.35rem)]">
            a python full-stack &amp; ai/ml developer driven by crafting striking and unforgettable projects
          </p>
          <div className="mt-3 hidden sm:flex items-center gap-2">
            <button
              onClick={scrollToProjects}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white underline underline-offset-4 flex items-center gap-1 transition-colors"
            >
              <span>View Projects</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Center: Social handles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="hidden lg:flex items-center gap-4 bg-white/[0.03] backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-600">/</span>
          <a
            href={socialLinks.freelancer}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider text-[#D7E2EA]/80 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span>Freelancer</span>
          </a>
        </motion.div>

        {/* Right column: Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-end gap-2"
        >
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </motion.div>
      </div>
    </section>
  );
};
