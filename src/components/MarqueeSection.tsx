import React, { useRef, useState, useEffect } from 'react';
import { MARQUEE_IMAGES } from '../data/portfolioData';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollPos = window.scrollY;
      const calculated = (scrollPos - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Images = MARQUEE_IMAGES.slice(0, 11);
  const row2Images = MARQUEE_IMAGES.slice(11);

  // Tripled for seamless scrolling
  const row1Triple = [...row1Images, ...row1Images, ...row1Images];
  const row2Triple = [...row2Images, ...row2Images, ...row2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll: translateX(offset - 200) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
          }}
        >
          {row1Triple.map((url, index) => (
            <div
              key={`row1-${index}`}
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-zinc-900 border border-white/5 relative group"
            >
              <img
                src={url}
                alt={`Interactive development preview ${index + 1}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback container in case network cuts off
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
          }}
        >
          {row2Triple.map((url, index) => (
            <div
              key={`row2-${index}`}
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[180px] sm:h-[230px] md:h-[270px] rounded-2xl overflow-hidden shrink-0 bg-zinc-900 border border-white/5 relative group"
            >
              <img
                src={url}
                alt={`Interactive development preview ${index + 12}`}
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
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
