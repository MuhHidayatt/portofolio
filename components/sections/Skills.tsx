"use client";

import { motion, type Variants } from "framer-motion";
import { SKILLS, type Skill } from "@/data/portfolio";

const CATEGORIES = [
  { 
    key: "frontend" as const, 
    label: "Frontend", 
    color: "text-[--color-primary]", 
    dot: "bg-[--color-primary]",
    accent: "cyan",
    icon: "💻",
    className: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  { 
    key: "backend" as const, 
    label: "Backend", 
    color: "text-[--color-accent] brightness-150", 
    dot: "bg-[--color-accent]",
    accent: "violet",
    icon: "⚙️",
    className: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  { 
    key: "ai" as const, 
    label: "AI & Automation", 
    color: "text-[--color-emerald]", 
    dot: "bg-[--color-emerald]",
    accent: "emerald",
    icon: "🤖",
    className: "col-span-1 md:col-span-1 lg:col-span-2"
  },
  { 
    key: "workflow" as const, 
    label: "Builder Workflow", 
    color: "text-amber-400", 
    dot: "bg-amber-400",
    accent: "amber",
    icon: "🔄",
    className: "col-span-1 md:col-span-1 lg:col-span-3"
  },
  { 
    key: "admin" as const, 
    label: "Data & Administration", 
    color: "text-sky-400", 
    dot: "bg-sky-400",
    accent: "sky",
    icon: "📊",
    className: "col-span-1 md:col-span-2 lg:col-span-3" // Spans full row on tablet (2 cols)
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function SkillCard({
  category,
  skills,
}: {
  category: (typeof CATEGORIES)[number];
  skills: Skill[];
}) {
  const isAI = category.key === "ai";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`glass rounded-2xl p-6 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        category.className
      } ${
        isAI 
          ? "border-[--color-emerald]/45 bg-gradient-to-b from-[--color-emerald]/5 to-transparent shadow-[0_0_25px_rgba(16,185,129,0.06)] hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]" 
          : category.accent === "cyan" ? "border-[--color-border] hover:border-[--color-primary]/40 hover:glow-cyan" :
            category.accent === "violet" ? "border-[--color-border] hover:border-[--color-accent]/40 hover:glow-violet" :
            category.accent === "sky" ? "border-[--color-border] hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]" :
            "border-[--color-border] hover:border-amber-400/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.12)]"
      }`}
    >
      {/* Top indicator bar for AI card */}
      {isAI && (
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[--color-emerald]" />
      )}

      <div>
        {/* Title & Icon */}
        <h3
          className={`text-sm font-bold font-mono uppercase tracking-wider mb-5 flex items-center gap-2 ${category.color}`}
        >
          <span className="text-sm">{category.icon}</span> 
          <span className="truncate">{category.label}</span>
        </h3>

        {/* Flex wrap skill badges */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-200 cursor-default ${
                isAI 
                  ? "border-[--color-emerald]/15 text-[--color-emerald] bg-[--color-emerald]/5 hover:border-[--color-emerald]" 
                  : category.accent === "cyan" ? "border-[--color-border] text-[--color-muted] hover:border-[--color-primary] hover:text-[--color-primary] bg-[--color-surface]" :
                    category.accent === "violet" ? "border-[--color-border] text-[--color-muted] hover:border-[--color-accent] hover:text-[--color-accent] bg-[--color-surface]" :
                    category.accent === "sky" ? "border-[--color-border] text-[--color-muted] hover:border-sky-400 hover:text-sky-400 bg-[--color-surface]" :
                    "border-[--color-border] text-[--color-muted] hover:border-amber-400 hover:text-amber-400 bg-[--color-surface]"
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-[--color-border]">
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
            03. Building Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            Building Stack
          </h2>
          <p className="text-[--color-muted] mt-3 max-w-xl leading-relaxed text-sm">
            Perangkat lunak, framework, pustaka, dan kecerdasan buatan yang saya kombinasikan secara sinergis untuk membangun aplikasi siap pakai.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <SkillCard
              key={cat.key}
              category={cat}
              skills={SKILLS.filter((s) => s.category === cat.key)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
