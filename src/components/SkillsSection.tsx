import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Server, BrainCircuit, Check, Terminal } from 'lucide-react';

interface SkillsSectionProps {
  onSelectSkillFilter?: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectSkillFilter }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const icons = [Code2, Server, BrainCircuit];

  const handleSkillClick = (skillName: string) => {
    const next = selectedSkill === skillName ? null : skillName;
    setSelectedSkill(next);
    if (onSelectSkillFilter && next) {
      onSelectSkillFilter(next);
      const projEl = document.getElementById('projects');
      if (projEl) {
        projEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="skills" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10 gap-6">
          <FadeIn delay={0}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#BBCCD7]/60 block mb-2">
              Capabilities &amp; Stack
            </span>
            <h2 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none">
              Technical Skills
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-zinc-400 font-light text-sm sm:text-base max-w-md leading-relaxed">
              Real, verified toolchain across frontend UI, Python backend engineering, and applied machine learning models.
            </p>
          </FadeIn>
        </div>

        {/* 3 Main Skill Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, colIdx) => {
            const IconComponent = icons[colIdx % icons.length];
            return (
              <FadeIn
                key={category.title}
                delay={colIdx * 0.1}
                className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#B600A8]">
                      0{colIdx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onClick={() => handleSkillClick(skill.name)}
                          className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                            isSelected
                              ? 'bg-[#B600A8]/20 border-[#B600A8] text-white'
                              : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm sm:text-base text-zinc-200">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300">
                                Core
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 font-light leading-snug">
                            {skill.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>Click to filter projects</span>
                  <Terminal className="w-3.5 h-3.5" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
