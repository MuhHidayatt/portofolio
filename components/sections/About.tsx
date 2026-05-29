"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PERSONAL, ABOUT, STATS } from "@/data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-[--color-primary] tracking-widest uppercase">
            01. About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Left — Avatar + Info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center md:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-[--color-border] glow-cyan">
                <Image
                  src={PERSONAL.avatar}
                  alt={PERSONAL.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 glass px-3 py-1.5 rounded-full border border-[--color-border] text-xs text-[--color-emerald]">
                <span className="w-2 h-2 rounded-full bg-[--color-emerald] animate-pulse" />
                Available
              </div>
            </div>

            {/* Name + role + location */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-[--color-text]">
                {PERSONAL.name}
              </h3>
              <p className="text-sm text-[--color-primary] font-mono mt-0.5 mb-2.5">
                {PERSONAL.role}
              </p>
              
              {/* Small educational status badge */}
              <span className="inline-block px-2.5 py-1 rounded bg-[--color-primary-dim] border border-[--color-primary]/20 text-[9px] font-bold font-mono text-[--color-primary] uppercase tracking-wider mb-3 select-none">
                🎓 Final Year Informatics Engineering Student
              </span>
              
              <div className="flex items-center justify-center md:justify-start gap-1.5 mt-1 text-xs text-[--color-muted]">
                <MapPin size={12} />
                <span>{PERSONAL.location}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 w-full">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-3.5 text-center md:text-left border border-[--color-border] hover:border-[--color-primary]/20 transition-colors"
                >
                  <div className="text-xl font-bold text-[--color-primary]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[--color-muted] mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {/* Who I am */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[--color-primary] font-mono uppercase tracking-widest mb-2">
                Who I am
              </h4>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {ABOUT.whoIAm}
              </p>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {ABOUT.educationText}
              </p>
            </div>

            {/* What I love */}
            <div>
              <h4 className="text-xs font-bold text-[--color-primary] font-mono uppercase tracking-widest mb-2">
                What I love in development
              </h4>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {ABOUT.whatILove}
              </p>
            </div>

            {/* Why I build */}
            <div>
              <h4 className="text-xs font-bold text-[--color-primary] font-mono uppercase tracking-widest mb-2">
                Why I build software
              </h4>
              <p className="text-sm text-[--color-muted] leading-relaxed">
                {ABOUT.whyIBuild}
              </p>
            </div>

            {/* Rigor & Structured Development Callout */}
            {ABOUT.adminApproach && (
              <div className="glass rounded-2xl p-5 border-l-4 border-l-sky-400 border-y-[--color-border] border-r-[--color-border] relative overflow-hidden bg-gradient-to-r from-sky-400/5 to-transparent hover:shadow-[0_0_20px_rgba(56,189,248,0.05)] transition-all duration-300">
                <h4 className="text-xs font-bold text-sky-400 font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span>📋</span> Rigor & Structured Development
                </h4>
                <p className="text-sm text-[--color-muted] leading-relaxed italic">
                  &ldquo;{ABOUT.adminApproach}&rdquo;
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
