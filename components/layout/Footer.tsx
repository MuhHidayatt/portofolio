import { PERSONAL } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[--color-border] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[--color-muted]">
        <span>
          © {year}{" "}
          <span className="text-[--color-text] font-medium">{PERSONAL.name}</span>
        </span>
        <span>
          Built with code, AI, and continuous learning.
        </span>
      </div>
    </footer>
  );
}
