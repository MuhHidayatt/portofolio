"use client";

import { motion, type Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { PERSONAL } from "@/data/portfolio";

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    accent: "cyan",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "MuhHidayatt",
    href: PERSONAL.github,
    accent: "violet",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "mhidayattt",
    href: PERSONAL.linkedin,
    accent: "cyan",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-[--color-border]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-xs text-[--color-primary] tracking-widest uppercase">
            06. Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--color-text] mt-2">
            Let&apos;s Connect
          </h2>
          <p className="text-[--color-muted] mt-4 max-w-md mx-auto leading-relaxed">
            Saya terbuka untuk peluang baru, kolaborasi, atau sekadar ngobrol tentang teknologi.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto"
        >
          {CONTACTS.map(({ icon: Icon, label, value, href, accent }) => {
            const isCyan = accent === "cyan";
            return (
              <motion.a
                key={label}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className={`flex-1 glass rounded-2xl p-6 border border-[--color-border] flex flex-col items-center gap-4 text-center transition-all duration-300 group ${
                  isCyan
                    ? "hover:border-[--color-primary]/40 hover:glow-cyan"
                    : "hover:border-[--color-accent]/40 hover:glow-violet"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    isCyan
                      ? "bg-[--color-primary-dim] text-[--color-primary]"
                      : "bg-[--color-accent-dim] text-[--color-accent] brightness-150"
                  }`}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[--color-muted] uppercase tracking-widest mb-1">
                    {label}
                  </div>
                  <div
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isCyan
                        ? "text-[--color-text] group-hover:text-[--color-primary]"
                        : "text-[--color-text] group-hover:text-[--color-accent] brightness-150"
                    }`}
                  >
                    {value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
