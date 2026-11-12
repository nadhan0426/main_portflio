import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ExternalLink, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenConfig: () => void;
  socialLinks: {
    github: string;
    linkedIn: string;
    freelancer: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenConfig,
  socialLinks,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onOpenContact();
      }
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30 relative select-none">
      {/* Desktop / Tablet Bar */}
      <nav className="flex items-center justify-between w-full">
        <a
          href="#home"
          className="text-[#D7E2EA] font-semibold tracking-wider uppercase text-base sm:text-lg md:text-xl lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
        >
          {PERSONAL_INFO.name.split(' ')[0]}
          <span className="text-[#B600A8] font-black">.</span>
        </a>

        {/* Links: spaced cleanly */}
        <div className="hidden md:flex items-center gap-8 lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action icons / Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hidden sm:inline-flex items-center justify-center p-2 rounded-full border border-white/10 hover:border-white/30 text-[#D7E2EA] hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={onOpenConfig}
            title="Configure Social Links"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
          >
            <span>Links</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#D7E2EA] hover:opacity-70 transition-opacity"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pt-4 pb-6 border-t border-white/10 bg-[#0C0C0C]/95 backdrop-blur-md rounded-2xl px-6 flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-lg py-2 hover:text-[#B600A8] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="hover:text-white underline"
              >
                Config Links
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
