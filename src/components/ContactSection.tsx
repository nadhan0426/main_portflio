import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Briefcase, Copy, Check, Send, AlertCircle, MapPin, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  socialLinks: {
    github: string;
    linkedIn: string;
    freelancer: string;
  };
  onOpenConfig: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  socialLinks,
  onOpenConfig,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    // Honest handling per requirement:
    // Clearly explain that direct backend or third-party email service (EmailJS/Formspree/SMTP)
    // is required for serverless submission; provide direct mailto dispatch with pre-filled contents!
    setFormSubmitted(true);
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mailto client
    window.location.href = mailtoUrl;

    setStatusMessage(
      'Your default email client has been prepared with your message! If you prefer a server-side delivery gateway, configure your SMTP/EmailJS credentials.'
    );
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={40}>
            <span className="text-xs uppercase tracking-[0.3em] text-[#BBCCD7]/60 block mb-3 font-mono">
              Get In Touch
            </span>
            <h2 className="hero-heading font-black uppercase text-[clamp(2.75rem,8vw,110px)] tracking-tight leading-none">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
              Open for Python development, Django backend projects, React frontends, and applied AI/ML freelance contracts.
            </p>
          </FadeIn>
        </div>

        {/* 2-Column Split: Direct details on left, Form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Hub (5 cols) */}
          <FadeIn delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Contact Details
              </h3>

              {/* Email item with copy */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono text-[#D7E2EA] hover:text-[#B600A8] truncate transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-500">
                  Location
                </span>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-sm text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#B600A8] shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Profiles */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-mono text-zinc-500 block">
                  Professional Profiles
                </span>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-zinc-300" />
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-white flex items-center gap-1">
                    Nathansethu <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#0077b5]" />
                    <span className="text-sm font-medium text-white">LinkedIn</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-white flex items-center gap-1">
                    Profile <ExternalLink className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href={socialLinks.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-[#008ffb]" />
                    <span className="text-sm font-medium text-white">Freelancer.com</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-white flex items-center gap-1">
                    Hire Me <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/5">
                <button
                  type="button"
                  onClick={onOpenConfig}
                  className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  Configure Social &amp; Profile URLs
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Contact Message Form (7 cols) */}
          <FadeIn delay={0.2} className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mb-6">
                Have a project or opportunity? Send details below. Submissions launch your email client with your pre-filled inquiry.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5">
                    Subject / Project Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Python Full-Stack / ML Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your requirements, timeline, and tech stack..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-zinc-500">
                    Direct dispatch to {PERSONAL_INFO.email}
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto contact-btn-glow px-8 py-3 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
