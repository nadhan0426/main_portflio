import React from 'react';
import { FadeIn } from './FadeIn';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Services" */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            Services
          </h2>
          <p className="mt-4 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-zinc-500">
            Tailored Engineering &bull; Clean Architecture &bull; Client Delivery
          </p>
        </FadeIn>

        {/* Vertical List of Services */}
        <div className="divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.08}
              y={30}
              className="py-8 sm:py-10 md:py-12 group cursor-pointer hover:bg-black/[0.02] transition-colors rounded-2xl px-2 sm:px-4"
            >
              <div
                onClick={() => onSelectService && onSelectService(item.name)}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 md:gap-14"
              >
                {/* Number on the left */}
                <span className="font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none shrink-0 tracking-tighter tabular-nums group-hover:text-[#B600A8] transition-colors">
                  {item.number}
                </span>

                {/* Name + description stacked vertically on the right */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-medium uppercase text-[clamp(1.2rem,2.2vw,2.1rem)] text-[#0C0C0C] tracking-tight leading-tight group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </h3>
                  </div>

                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.4vw,1.2rem)] text-[#0C0C0C] opacity-75">
                    {item.description}
                  </p>

                  {/* Clean unboxed tags */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                    {item.skills.map((s, idx) => (
                      <React.Fragment key={s}>
                        <span>{s}</span>
                        {idx < item.skills.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
