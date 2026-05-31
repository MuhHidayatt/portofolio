"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render placeholder with same dimensions to avoid layout shift
    return (
      <div className="w-9 h-9 rounded-lg" aria-hidden="true" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-lg border border-[--color-border] flex items-center justify-center text-[--color-muted] hover:text-[--color-text] hover:border-[--color-primary]/40 hover:bg-[--color-primary-dim] transition-all duration-200 cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun size={16} className="transition-transform duration-300" />
      ) : (
        <Moon size={16} className="transition-transform duration-300" />
      )}
    </button>
  );
}
