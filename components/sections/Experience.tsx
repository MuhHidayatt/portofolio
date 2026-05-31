"use client";

import { motion, type Variants } from "framer-motion";
import { EXPERIENCES, type ExperienceItem } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

/* â”€â”€ Technical Experience Icon (code brackets) â”€â”€ */
function TechIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/* â”€â”€ Leadership Icon (users) â”€â”€ */
function LeadershipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isTechnical = item.type === "technical";

  return (
    <motion.div
      variants={cardVariants}
      className="relative pl-10 sm:pl-14 pb-10 last:pb-0 group"
    >
      {/* Timeline connector node */}
      <div
        className={`absolute left-[9px] sm:left-[19px] top-1.5 w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
          isTechnical
            ? "border-[--color-primary] bg-[--color-bg] group-hover:shadow-[0_0_14px_var(--color-primary)]"
            : "border-[--color-accent] bg-[--color-bg] group-hover:shadow-[0_0_14px_var(--color-accent)]"
        }`}
      >
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${
            isTechnical ? "bg-[--color-primary]" : "bg-[--color-accent]"
          }`}
        />
      </div>

      {/* Glass card */}
      <div
        className={`exp-card rounded-xl p-5 sm:p-6 border transition-all duration-300 relative overflow-hidden ${
          isTechnical
            ? "exp-card--technical border-[--color-primary]/15 hover:border-[--color-primary]/40 hover:glow-cyan"
            : "exp-card--leadership border-[--color-border] hover:border-[--color-accent]/30 hover:glow-violet"
        }`}
      >
        {/* Top gradient border accent */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-300 ${
            isTechnical
              ? "bg-gradient-to-r from-[--color-primary] via-[--color-primary]/60 to-transparent"
              : "bg-gradient-to-r from-[--color-accent] to-transparent"
          }`}
        />

        {/* Type badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase ${
              isTechnical
                ? "bg-[--color-primary]/10 text-[--color-primary] border border-[--color-primary]/20"
                : "bg-[--color-accent]/10 text-[--color-accent] border border-[--color-accent]/20"
            }`}
          >
            {isTechnical ? <TechIcon /> : <LeadershipIcon />}
            {isTechnical ? "Technical Experience" : "Leadership"}
          </span>
        </div>

        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-2">
          <div>
            <span
              className={`font-mono text-[10px] tracking-wider font-semibold block mb-0.5 ${
                isTechnical ? "text-[--color-primary]" : "text-[--color-accent]"
              }`}
            >
              {item.period}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[--color-text] font-mono leading-tight">
              {item.role}
            </h3>
            <span
              className={`text-xs font-semibold block mt-0.5 ${
                isTechnical ? "text-[--color-primary]/80" : "text-[--color-accent]"
              }`}
            >
              {item.organization}
            </span>
          </div>
        </div>

        {/* Bullet points */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2 border-t border-[--color-border]/40 pt-3 list-disc pl-5"
        >
          {item.points.map((point, i) => (
            <motion.li
              key={i}
              variants={bulletVariants}
              className={`text-xs text-[--color-muted] hover:text-[--color-text] transition-colors duration-200 ${
                isTechnical ? "marker:text-[--color-primary]" : "marker:text-[--color-accent]"
              }`}
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[--color-border]/30"
          >
            {item.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={tagVariants}
                className={`exp-tag px-2.5 py-1 rounded-md text-[10px] font-mono font-medium tracking-wide ${
                  isTechnical
                    ? "bg-[--color-primary]/8 text-[--color-primary] border border-[--color-primary]/15"
                    : "bg-[--color-accent]/8 text-[--color-accent] border border-[--color-accent]/15"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-[--color-border]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Label & Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-left"
        >
          <span className="font-mono text-xs text-[--color-primary] tracking-widest uppercase">
            05. Professional Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            Professional Experience &amp; Leadership
          </h2>
          <p className="text-[--color-muted] mt-3 max-w-xl leading-relaxed text-sm">
            Rekam jejak pengembangan sistem digital, pengalaman magang profesional, kepemimpinan organisasi, dan manajemen administratif.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Central vertical timeline track line with gradient */}
          <div className="exp-timeline-track absolute left-[17px] sm:left-[27px] top-2 bottom-2 w-0.5" />

          {/* Timeline Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col"
          >
            {EXPERIENCES.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
