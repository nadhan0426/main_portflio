import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Save, RotateCcw, Link2, Linkedin, Briefcase, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SocialConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLinks: {
    github: string;
    linkedIn: string;
    freelancer: string;
  };
  onSave: (links: { github: string; linkedIn: string; freelancer: string }) => void;
}

export const SocialConfigModal: React.FC<SocialConfigModalProps> = ({
  isOpen,
  onClose,
  currentLinks,
  onSave,
}) => {
  const [formData, setFormData] = useState(currentLinks);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      github: PERSONAL_INFO.github,
      linkedIn: PERSONAL_INFO.defaultLinkedIn,
      freelancer: PERSONAL_INFO.defaultFreelancer,
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#14161B] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-[#D7E2EA]"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <Link2 className="w-5 h-5 text-[#B600A8]" />
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                Configure Social Links
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            Configure your active LinkedIn, Freelancer.com profile, and GitHub URLs. Settings persist in local storage and update navigation links and contact buttons throughout the site.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5 flex items-center gap-2">
                <Github className="w-4 h-4 text-zinc-400" />
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-[#B600A8] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5 flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={formData.linkedIn}
                onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                placeholder="https://linkedin.com/in/your-profile"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-[#B600A8] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-zinc-300 mb-1.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#008ffb]" />
                Freelancer.com Profile URL
              </label>
              <input
                type="url"
                value={formData.freelancer}
                onChange={(e) => setFormData({ ...formData, freelancer: e.target.value })}
                placeholder="https://www.freelancer.com/u/your-username"
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-[#B600A8] transition-colors"
              />
            </div>

            <div className="pt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#B600A8] hover:bg-[#c91ebc] text-white text-xs font-medium uppercase tracking-wider transition-colors shadow-lg shadow-[#B600A8]/30"
                >
                  {savedNotice ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
                  <span>{savedNotice ? 'Saved!' : 'Save Links'}</span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
