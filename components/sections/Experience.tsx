"use client";

import { motion, type Variants } from "framer-motion";
import { EXPERIENCES, type ExperienceItem } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative pl-10 sm:pl-14 pb-9 last:pb-0 group"
    >
      {/* Timeline connector circle node */}
      <div className="absolute left-[9px] sm:left-[19px] top-1.5 w-4 h-4 rounded-full border-2 border-[--color-primary] bg-[#050810] z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_var(--color-primary)]">
        <span className="w-1 h-1 rounded-full bg-[--color-primary] animate-pulse" />
      </div>

      {/* Visually compact glass card container */}
      <div className="glass rounded-xl p-5 sm:p-6 border border-[--color-border] hover:border-[--color-primary]/30 hover:glow-cyan transition-all duration-300 relative overflow-hidden">
        {/* Decorative gradient top-border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[--color-primary] to-[--color-accent] opacity-30 group-hover:opacity-100 transition-opacity" />

        {/* Card Header details */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
          <div>
            <span className="font-mono text-[10px] text-[--color-primary] tracking-wider font-semibold block mb-0.5">
              {item.period}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[--color-text] font-mono leading-tight">
              {item.role}
            </h3>
            <span className="text-xs font-semibold text-[--color-accent] brightness-150 block mt-0.5">
              {item.organization}
            </span>
          </div>
        </div>

        {/* Bullet details list */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2 border-t border-[--color-border]/40 pt-3"
        >
          {item.points.map((point, i) => (
            <motion.li
              key={i}
              variants={bulletVariants}
              className="flex items-start gap-2.5 text-xs text-[--color-muted] hover:text-[--color-text] transition-colors duration-200"
            >
              <span className="text-[--color-primary] font-mono mt-0.5">▪</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </motion.ul>
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
            05. Experience & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            Leadership & Organization
          </h2>
          <p className="text-[--color-muted] mt-3 max-w-xl leading-relaxed text-sm">
            Rekam jejak kepemimpinan, kepengurusan administratif, dan manajemen tata kelola data dalam memimpin organisasi kepemudaan serta kemahasiswaan.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Central vertical timeline track line */}
          <div className="absolute left-[17px] sm:left-[27px] top-2 bottom-2 w-0.5 bg-[--color-border]" />

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
