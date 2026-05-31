"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PERSONAL, HERO_PILLS, HERO_TECH_STACK } from "@/data/portfolio";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" aria-label="GitHub Icon">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 overflow-hidden flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4"
          >
            <span className="font-mono text-[--color-primary] text-xs sm:text-sm tracking-widest uppercase">
              {PERSONAL.greeting}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[--color-text] leading-[1.1] mb-5 font-sans"
          >
            AI-Assisted <br className="hidden sm:inline" />
            <span className="gradient-text">Full Stack Developer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-[--color-muted] leading-relaxed max-w-2xl mb-8"
          >
            {PERSONAL.tagline}
          </motion.p>

          {/* CTAs & Spacing Polish */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[--color-bg] bg-primary hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/20"
              aria-label="Scroll down to view featured engineering work"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[--color-text] border border-[--color-border] hover:border-[--color-primary] hover:text-[--color-primary] transition-all duration-200"
              aria-label="View MuhHidayatt's GitHub profile in a new tab"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Builder Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {HERO_PILLS.map((pill) => (
              <span
                key={pill}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-[--color-border] text-[--color-muted] bg-[--color-surface] hover:border-[--color-primary] hover:text-[--color-primary] transition-all duration-300 cursor-default flex items-center gap-1.5 hover:shadow-primary/10 hover:shadow-md"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 border-t border-[--color-border]/50 pt-6"
          >
            <span className="text-xs text-[--color-muted] font-mono mr-2">
              Core Tech:
            </span>
            {HERO_TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-[--color-border] text-[--color-muted] bg-[--color-surface] hover:border-[--color-primary] hover:text-[--color-primary] transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
