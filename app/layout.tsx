import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Hidayat — AI-Assisted Full Stack Developer",
  description:
    "AI-Assisted Full Stack Developer based in Indonesia. I build modern systems, web applications, and digital products with code, AI, and open-source tools.",
  keywords: [
    "AI-Assisted Developer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Laravel",
    "React",
    "Web Developer",
    "Indonesia",
    "Muhammad Hidayat",
  ],
  authors: [{ name: "Muhammad Hidayat", url: "https://github.com/MuhHidayatt" }],
  openGraph: {
    title: "Muhammad Hidayat — AI-Assisted Full Stack Developer",
    description:
      "AI-Assisted Full Stack Developer based in Indonesia. Building modern systems, web applications, and digital products with code, AI, and open-source tools.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hidayat — AI-Assisted Full Stack Developer",
    description:
      "AI-Assisted Full Stack Developer based in Indonesia. Building modern systems, web applications, and digital products with code, AI, and open-source tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="gradient-mesh" />
        {children}
      </body>
    </html>
  );
}
