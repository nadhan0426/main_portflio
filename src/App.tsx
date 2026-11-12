import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SocialConfigModal } from './components/SocialConfigModal';
import { PERSONAL_INFO, ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState<string | null>(null);

  // Configurable social links with localStorage persistence
  const [socialLinks, setSocialLinks] = useState({
    github: PERSONAL_INFO.github,
    linkedIn: PERSONAL_INFO.defaultLinkedIn,
    freelancer: PERSONAL_INFO.defaultFreelancer,
  });

  useEffect(() => {
    try {
      const savedLinkedIn = localStorage.getItem('raghu_portfolio_linkedin');
      const savedFreelancer = localStorage.getItem('raghu_portfolio_freelancer');
      const savedGithub = localStorage.getItem('raghu_portfolio_github');
      if (savedLinkedIn || savedFreelancer || savedGithub) {
        setSocialLinks({
          github: savedGithub || PERSONAL_INFO.github,
          linkedIn: savedLinkedIn || PERSONAL_INFO.defaultLinkedIn,
          freelancer: savedFreelancer || PERSONAL_INFO.defaultFreelancer,
        });
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleSaveSocialLinks = (newLinks: { github: string; linkedIn: string; freelancer: string }) => {
    setSocialLinks(newLinks);
    try {
      localStorage.setItem('raghu_portfolio_github', newLinks.github);
      localStorage.setItem('raghu_portfolio_linkedin', newLinks.linkedIn);
      localStorage.setItem('raghu_portfolio_freelancer', newLinks.freelancer);
    } catch {
      // LocalStorage access fallback
    }
  };

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    // Scroll to contact with topic or projects
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] overflow-x-clip selection:bg-[#B600A8] selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenConfig={() => setIsConfigOpen(true)}
        socialLinks={socialLinks}
      />

      {/* 1. Hero Section */}
      <HeroSection
        onOpenContact={handleOpenContact}
        socialLinks={socialLinks}
      />

      {/* 2. Marquee Section with 21 GIFs */}
      <MarqueeSection />

      {/* 3. About Section with 4 3D Floating Assets & Scroll-Animated Text */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 4. Technical Skills Section */}
      <SkillsSection onSelectSkillFilter={(skill) => setSkillFilter(skill)} />

      {/* 5. Services Section (White Background, Huge Numbers) */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* 6. Projects Section (Sticky Stacking Cards, 2-Column Grids) */}
      <ProjectsSection
        onOpenProjectDetail={(p) => setSelectedProject(p)}
        activeFilter={skillFilter}
        onClearFilter={() => setSkillFilter(null)}
      />

      {/* 7. Contact Section & Real Inquiry System */}
      <ContactSection
        socialLinks={socialLinks}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* 8. Footer */}
      <Footer socialLinks={socialLinks} />

      {/* Project Detail Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Social Links Config Modal */}
      <SocialConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentLinks={socialLinks}
        onSave={handleSaveSocialLinks}
      />
    </div>
  );
}
