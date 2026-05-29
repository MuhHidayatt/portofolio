"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" aria-label="GitHub Icon">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ProjectPreview({ id, isCyan }: { id: string; isCyan: boolean }) {
  return (
    <div className="h-40 w-full overflow-hidden border-b border-[--color-border] relative bg-[#080c14] flex items-center justify-center select-none group-hover:bg-[#0b101c] transition-colors duration-300">
      {/* Mesh glow background hint */}
      <div className={`absolute -inset-10 opacity-15 blur-xl transition-opacity duration-300 ${
        isCyan ? "bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_60%)]" : "bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_60%)]"
      }`} />

      {id === "certificate-authority" && (
        <div className="w-[85%] h-[80%] rounded-lg border border-[--color-border] bg-[rgba(13,17,23,0.9)] p-3 relative flex flex-col justify-between font-mono text-[8px] text-[--color-muted] overflow-hidden shadow-inner">
          <div className="flex items-center justify-between border-b border-[--color-border]/50 pb-1.5 mb-1.5">
            <span className="text-[--color-accent] brightness-150 font-bold flex items-center gap-1">🔐 CA-UMC SECURE SIGN</span>
            <span className="text-[7px] text-[--color-emerald]">TAMPER-EVIDENT ✓</span>
          </div>
          <div className="space-y-1">
            <div className="h-1 w-1/3 bg-[--color-border] rounded" />
            <div className="h-1 w-2/3 bg-[--color-border] rounded" />
          </div>
          <div className="flex items-end justify-between mt-2 pt-1 border-t border-[--color-border]/30">
            <div className="space-y-0.5">
              <div className="h-1.5 w-12 bg-[--color-accent-dim] rounded" />
              <div className="h-1 w-8 bg-[--color-border] rounded" />
            </div>
            <svg width="18" height="18" className="text-[--color-accent] brightness-150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="2" width="6" height="6" />
              <rect x="16" y="2" width="6" height="6" />
              <rect x="2" y="16" width="6" height="6" />
              <rect x="10" y="10" width="4" height="4" />
            </svg>
          </div>
        </div>
      )}

      {id === "splitku" && (
        <div className="w-[85%] h-[80%] rounded-lg border border-[--color-border] bg-[rgba(13,17,23,0.9)] p-3 relative flex flex-col justify-between font-mono text-[8px] text-[--color-muted] overflow-hidden shadow-inner">
          <div className="flex items-center justify-between border-b border-[--color-border]/50 pb-1.5 mb-1.5">
            <span className="text-[--color-primary] font-bold flex items-center gap-1">💸 SPLITKU BILLS</span>
            <span className="text-[--color-primary] text-[7px] bg-[--color-primary-dim] px-1 rounded">ACTIVE</span>
          </div>
          <div className="flex gap-2 flex-1 items-center">
            <svg width="24" height="24" className="text-[--color-primary]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="8" strokeDasharray="30 20" />
            </svg>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-[7px]">
                <span>Food (50%)</span>
                <span className="text-[--color-text]">Rp 150K</span>
              </div>
              <div className="h-1 bg-[--color-border] rounded overflow-hidden">
                <div className="h-full w-1/2 bg-[--color-primary]" />
              </div>
              <div className="flex justify-between text-[7px]">
                <span>Travel (30%)</span>
                <span className="text-[--color-text]">Rp 90K</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {id === "sipakar-laptop" && (
        <div className="w-[85%] h-[80%] rounded-lg border border-[--color-border] bg-[rgba(13,17,23,0.9)] p-3 relative flex flex-col justify-between font-mono text-[8px] text-[--color-muted] overflow-hidden shadow-inner">
          <div className="flex items-center justify-between border-b border-[--color-border]/50 pb-1.5 mb-1.5">
            <span className="text-[--color-primary] font-bold flex items-center gap-1">💻 DIAGNOSE ENGINE</span>
            <span className="text-[--color-primary] text-[7px] animate-pulse">SCANNING...</span>
          </div>
          <div className="flex gap-2 flex-1 items-center justify-center">
            <svg width="36" height="24" className="text-[--color-muted] group-hover:text-[--color-primary] transition-colors" viewBox="0 0 36 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="4" y="2" width="28" height="16" rx="1" />
              <line x1="2" y1="20" x2="34" y2="20" strokeWidth="2" />
              <line x1="10" y1="2" x2="10" y2="18" strokeDasharray="2 2" />
              <circle cx="18" cy="10" r="3" className="fill-[--color-primary-dim] stroke-[--color-primary]" />
            </svg>
          </div>
          <div className="text-[6px] text-[--color-primary] text-center mt-1 uppercase font-semibold">
            Forward Chaining / Certainty Factor: 0.95
          </div>
        </div>
      )}

      {id === "photo-web" && (
        <div className="w-[85%] h-[80%] rounded-lg border border-[--color-border] bg-[rgba(13,17,23,0.9)] p-3 relative flex flex-col justify-between font-mono text-[8px] text-[--color-muted] overflow-hidden shadow-inner">
          <div className="flex items-center justify-between border-b border-[--color-border]/50 pb-1.5 mb-1.5">
            <span className="text-[--color-accent] brightness-150 font-bold flex items-center gap-1">📸 GALLERY STREAM</span>
            <span className="text-[7px]">GRID</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1 mt-1">
            <div className="border border-[--color-border] bg-[--color-surface] rounded overflow-hidden flex items-center justify-center group-hover:border-[--color-accent]/35 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[--color-accent-dim]" />
            </div>
            <div className="border border-[--color-border] bg-[--color-surface] rounded overflow-hidden flex items-center justify-center group-hover:border-[--color-accent]/35 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[--color-accent-dim]" />
            </div>
            <div className="border border-[--color-border] bg-[--color-surface] rounded overflow-hidden flex items-center justify-center group-hover:border-[--color-accent]/35 transition-colors">
              <div className="w-2 h-2 rounded-full bg-[--color-accent-dim]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isCyan = project.accent === "cyan";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group glass rounded-2xl overflow-hidden border border-[--color-border] flex flex-col transition-all duration-300 relative ${
        isCyan
          ? "hover:border-[--color-primary]/40 hover:glow-cyan"
          : "hover:border-[--color-accent]/40 hover:glow-violet"
      }`}
    >
      {/* Visual product preview dashboard */}
      <ProjectPreview id={project.id} isCyan={isCyan} />

      {/* Top accent line */}
      <div
        className={`h-[2px] w-full ${
          isCyan
            ? "bg-gradient-to-r from-[--color-primary] to-transparent"
            : "bg-gradient-to-r from-[--color-accent] to-transparent"
        }`}
      />

      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className={`font-mono text-xs font-bold uppercase ${
            isCyan ? "text-[--color-primary]" : "text-[--color-accent] brightness-150"
          }`}>
            Product Showcase
          </span>

          <div className="flex items-center gap-3">
            {project.badge && (
              <span className={`px-2.5 py-0.5 rounded-md text-[9px] font-bold font-mono tracking-wider uppercase border select-none ${
                isCyan 
                  ? "border-[--color-primary]/30 bg-[--color-primary-dim] text-[--color-primary]" 
                  : "border-[--color-accent]/30 bg-[--color-accent-dim] text-[--color-accent] brightness-150"
              }`}>
                {project.badge}
              </span>
            )}
            
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[--color-muted] hover:text-[--color-text] hover:bg-[--color-border] transition-all duration-200"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-[--color-text] mb-3 font-sans tracking-tight group-hover:text-[--color-primary] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[--color-muted] leading-relaxed flex-1 mb-6">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-xs font-mono border ${
                isCyan
                  ? "border-[--color-primary]/15 text-[--color-primary] bg-[--color-primary-dim]"
                  : "border-[--color-accent]/15 text-[--color-accent] bg-[--color-accent-dim] brightness-150"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 ${
            isCyan
              ? "text-[--color-primary]/60 hover:text-[--color-primary]"
              : "text-[--color-accent]/60 hover:text-[--color-accent] brightness-150"
          }`}
          aria-label={`View source code for ${project.title} on GitHub`}
        >
          <ExternalLink size={12} />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-[--color-border]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-[--color-primary] tracking-widest uppercase">
            04. Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            Featured Work
          </h2>
          <p className="text-[--color-muted] mt-3 max-w-xl text-sm leading-relaxed">
            Selected software products built using type-safe engineering systems, modular patterns, and AI-accelerated dev setups.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/MuhHidayatt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[--color-muted] hover:text-[--color-primary] transition-colors duration-200 group"
            aria-label="View all MuhHidayatt's repositories on GitHub in a new tab"
          >
            <GithubIcon size={15} />
            <span>View all repositories on GitHub</span>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
