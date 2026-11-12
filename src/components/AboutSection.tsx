import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { ASSETS, PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40 overflow-hidden select-none bg-[#0C0C0C]"
    >
      {/* 4 Decorative 3D Images in Corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src={ASSETS.aboutMoon}
            alt="Decorative Moon 3D element"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object p59 */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src={ASSETS.aboutP59}
            alt="Decorative 3D geometric shape"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[140px] md:w-[180px] drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src={ASSETS.aboutLego}
            alt="Decorative Lego 3D icon"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src={ASSETS.aboutGroup}
            alt="Decorative 3D group composition"
            referrerPolicy="no-referrer"
            className="w-[130px] sm:w-[170px] md:w-[220px] drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Center Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <div className="max-w-[620px] px-4">
          <AnimatedText
            text={PERSONAL_INFO.aboutIntro}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(1.05rem,1.9vw,1.4rem)]"
          />
        </div>

        {/* Location & Real Highlights Strip */}
        <FadeIn delay={0.3} y={20} className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-zinc-400 font-light">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
              {PERSONAL_INFO.location}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              Available for Freelance &amp; Remote Contracts
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Python &bull; Django &bull; React &bull; AI/ML
            </span>
          </div>
        </FadeIn>

        {/* Gap between text block and button */}
        <div className="h-14 sm:h-18 md:h-22" />

        {/* Contact button */}
        <FadeIn delay={0.4} y={20}>
          <ContactButton onClick={onOpenContact} label="Contact Me" />
        </FadeIn>
      </div>
    </section>
  );
};
