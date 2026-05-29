"use client";

import { motion, type Variants } from "framer-motion";
import { HOW_I_BUILD_FLOW, HOW_I_BUILD_TOOLS } from "@/data/portfolio";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="section border-t border-[--color-border]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label & Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-[--color-primary] tracking-widest uppercase">
            02. How I Build
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2 font-sans">
            How I Build
          </h2>
          <p className="text-[--color-muted] mt-3 max-w-2xl leading-relaxed">
            My workflow for turning ideas into working products.
          </p>
        </motion.div>

        {/* Workflow Horizontal Flow Chart */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:flex md:flex-wrap md:items-center justify-between gap-4 mb-16 relative"
        >
          {HOW_I_BUILD_FLOW.map((step, index) => {
            const isLast = index === HOW_I_BUILD_FLOW.length - 1;
            return (
              <div key={step.name} className="flex items-center gap-4 flex-1 min-w-[130px] md:min-w-0">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center flex-1 border border-[--color-border] hover:border-[--color-primary]/30 hover:glow-cyan transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Glowing background hint on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[--color-primary-dim] to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />

                  <span className="text-2xl mb-2" role="img" aria-label={step.name}>
                    {step.icon}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-[--color-primary] uppercase tracking-wider mb-0.5">
                    Step 0{index + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[--color-text] font-mono whitespace-nowrap">
                    {step.name}
                  </span>
                </motion.div>

                {/* Connector Arrow on Desktop */}
                {!isLast && (
                  <div className="hidden lg:flex text-[--color-border] font-mono text-lg font-bold select-none animate-pulse">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Toolbox Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 border border-[--color-border] relative overflow-hidden"
        >
          {/* Subtle gradient corner line */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[--color-accent-dim] to-transparent pointer-events-none opacity-45" />

          <h3 className="text-sm font-bold font-mono text-[--color-primary] uppercase tracking-widest mb-6">
            🛠️ Main Builder Toolbox
          </h3>

          <div className="flex flex-wrap gap-3">
            {HOW_I_BUILD_TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-[--color-border] text-[--color-muted] bg-[--color-surface] hover:border-[--color-primary]/40 hover:text-[--color-primary] hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
