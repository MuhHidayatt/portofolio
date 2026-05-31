export const PERSONAL = {
  name: "Muhammad Hidayat",
  role: "AI-Assisted Full Stack Developer",
  greeting: "Hi, I'm Muhammad Hidayat 👋",
  tagline: "Building modern systems, web applications, and digital products with code, AI, and open-source tools.",
  location: "Indonesia",
  github: "https://github.com/MuhHidayatt",
  linkedin: "https://www.linkedin.com/in/mhidayattt",
  email: "muhidayat467@gmail.com",
  instagram: "https://www.instagram.com/mhidayat._?igsh=cGFla3Z0YTVyZTdp",
  avatar: "/profile.png",
};

export const HERO_PILLS = [
  "⚡ AI-Assisted Development",
  "⚡ Open Source Builder",
  "⚡ Full Stack Engineering",
];

export const HERO_TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Laravel",
  "PostgreSQL",
];

export const STATS = [
  { value: "13+", label: "Repositories" },
  { value: "4", label: "Featured Projects" },
  { value: "Full Stack", label: "Development" },
];

export const ABOUT = {
  whoIAm:
    "Saya Muhammad Hidayat, seorang AI-Assisted Full Stack Developer berbasis di Indonesia. Saya berspesialisasi dalam membangun sistem dan aplikasi web modular secara cepat dan andal dengan memanfaatkan integrasi teknologi AI, framework modern, dan peralatan open-source.",
  whatILove:
    "Saya sangat menyukai akselerasi pengembangan menggunakan AI. Mampu memangkas pengerjaan boilerplate secara signifikan memungkinkan saya mencurahkan energi penuh untuk mendesain arsitektur yang kokoh, memecahkan masalah algoritma tingkat lanjut, dan meningkatkan performa sistem.",
  whyIBuild:
    "Bagi saya, software bukan sekadar baris kode, melainkan sebuah solusi nyata. Dengan kolaborasi antara kecerdasan buatan dan rekayasa perangkat lunak tradisional, saya dapat membangun sistem berkualitas tinggi, type-safe, dan siap pakai dalam hitungan hari, bukan minggu.",
  adminApproach:
    "Selain membangun aplikasi dan sistem digital, saya juga memiliki pengalaman dalam administrasi organisasi, dokumentasi, dan pengolahan data. Pengalaman tersebut membantu saya bekerja lebih terstruktur, memperhatikan detail, dan memahami pentingnya proses dalam pengembangan software maupun pengelolaan organisasi.",
  educationText:
    "Saya merupakan mahasiswa semester akhir Program Studi Teknik Informatika yang memiliki minat pada pengembangan aplikasi web, sistem digital, dan pemanfaatan AI dalam proses pengembangan perangkat lunak. Selain aktif membangun berbagai project, saya juga memiliki pengalaman dalam organisasi, administrasi, dan pengelolaan data yang membantu saya bekerja secara lebih terstruktur dan kolaboratif.",
};

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "workflow" | "admin";
}

export const SKILLS: Skill[] = [
  // Frontend
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  
  // Backend
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "REST API", category: "backend" },
  
  // AI & Automation
  { name: "Antigravity", category: "ai" },
  { name: "Claude", category: "ai" },
  { name: "Gemini", category: "ai" },
  
  // Builder Workflow
  { name: "GitHub", category: "workflow" },
  { name: "Vercel", category: "workflow" },
  { name: "Lovable", category: "workflow" },
  { name: "Stitch", category: "workflow" },
  { name: "Figma", category: "workflow" },

  // Data & Administration
  { name: "Microsoft Word", category: "admin" },
  { name: "Microsoft Excel", category: "admin" },
  { name: "Data Processing", category: "admin" },
  { name: "Documentation", category: "admin" },
  { name: "Meeting Minutes", category: "admin" },
  { name: "Administrative Management", category: "admin" },
  { name: "Report Writing", category: "admin" },
];

export const HOW_I_BUILD_FLOW = [
  { name: "Idea", icon: "💡" },
  { name: "Research", icon: "🔍" },
  { name: "AI-Assisted Prototyping", icon: "🧠" },
  { name: "Development", icon: "💻" },
  { name: "Testing", icon: "🧪" },
  { name: "Deployment", icon: "🚀" }
];

export const HOW_I_BUILD_TOOLS = [
  "Antigravity",
  "Claude",
  "Gemini",
  "GitHub",
  "Next.js",
  "Vercel",
  "Lovable",
  "Stitch",
  "Figma"
];

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  accent: "cyan" | "violet";
  badge?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "certificate-authority",
    title: "Certificate Authority",
    description:
      "A web-based digital certificate authority system for issuing, signing, and verifying academic documents with QR verification and tamper-evident validation.",
    tech: ["Next.js", "TypeScript", "Digital Signature", "QR Verification"],
    github: "https://github.com/MuhHidayatt/certificate-authority",
    accent: "violet",
    badge: "Featured Project"
  },
  {
    id: "splitku",
    title: "SplitKu",
    description:
      "Expense sharing and financial tracking application designed to simplify group expense management and transparent cost calculation.",
    tech: ["Next.js", "TypeScript", "Financial App", "Full Stack"],
    github: "https://github.com/MuhHidayatt/splitku",
    accent: "cyan",
    badge: "Built with AI-assisted workflow"
  },
  {
    id: "sipakar-laptop",
    title: "SIPAKAR Laptop",
    description:
      "Expert system application that helps users diagnose laptop issues using Forward Chaining and Certainty Factor methods with AI-assisted recommendations.",
    tech: ["React", "TypeScript", "Expert System", "AI Vision"],
    github: "https://github.com/MuhHidayatt/sipakar-laptop",
    accent: "cyan",
    badge: "AI-Powered"
  },
  {
    id: "photo-web",
    title: "AI Style Transfer Studio",
    description:
      "Transform your photos into stunning artworks using Neural Style Transfer. Experience the power of generative AI with just a few clicks.",
    tech: ["Neural Style Transfer", "Generative AI", "React", "UI/UX"],
    github: "https://github.com/MuhHidayatt/photo-web",
    accent: "violet",
    badge: "AI Studio"
  }
];

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  points: string[];
  tags?: string[];
  type: "technical" | "leadership";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "PKL (Praktik Kerja Lapangan)",
    organization: "Pusdatin — Universitas Muhammadiyah Cirebon",
    period: "Jun 2026 – Okt 2026",
    type: "technical",
    tags: ["Certificate Authority", "Document Security", "Web Development"],
    points: [
      "Terlibat dalam pengembangan sistem Certificate Authority untuk kebutuhan validasi dan verifikasi dokumen digital.",
      "Berkontribusi pada perancangan dan implementasi sistem yang mendukung keamanan serta keaslian dokumen elektronik.",
      "Mendukung proses pengembangan aplikasi dari tahap perencanaan hingga implementasi.",
    ],
  },
  {
    role: "Magang — Bidang SP-Egov Application",
    organization: "Diskominfo Kabupaten Cirebon",
    period: "Okt 2025 – Des 2025",
    type: "technical",
    tags: ["Government Technology", "SP-Egov", "Website Development", "Documentation"],
    points: [
      "Mendukung pengembangan dan pengelolaan aplikasi pemerintahan daerah dalam lingkup SP-Egov.",
      "Mengelola dan memperbarui website CSIRT Kabupaten Cirebon.",
      "Berpartisipasi dalam kegiatan sosialisasi dan pendampingan pengelolaan website desa.",
      "Membantu pengembangan website SIBANGKOM (Sistem Pelayanan Pengembangan Kompetensi).",
      "Membantu pengembangan website SIPASTI (Sistem Penilaian Statistik Sektoral).",
      "Menyusun notulen rapat dan dokumentasi kegiatan bidang SP-Egov.",
    ],
  },
  {
    role: "Sekretaris",
    organization: "Karang Taruna Margatama Desa Koreak",
    period: "Jan 2026 – Present",
    type: "leadership",
    points: [
      "Mengotomatisasi pengarsipan dokumentasi kepemudaan secara terstruktur.",
      "Menyusun 15+ notulensi rapat resmi dan laporan pertanggungjawaban kegiatan.",
      "Mengoordinasikan perencanaan serta alur pelaksanaan program pengabdian masyarakat.",
    ],
  },
  {
    role: "Sekretaris Umum",
    organization: "HIMASANTIKA",
    period: "Feb 2024 – Dec 2024",
    type: "leadership",
    points: [
      "Memimpin tata kelola kesekretariatan dan administrasi bagi 80+ anggota aktif.",
      "Mengarsip notulensi rapat bulanan serta dokumen legalitas kemahasiswaan.",
      "Mengoordinasikan komunikasi strategis dan agenda kerja bersama ketua himpunan.",
    ],
  },
  {
    role: "Staf Kaderisasi",
    organization: "HIMASANTIKA",
    period: "Feb 2023 – Dec 2023",
    type: "leadership",
    points: [
      "Mendesain kurikulum dan memfasilitasi program kaderisasi bagi 100+ mahasiswa baru.",
      "Mengoordinasikan pelatihan dasar kepemimpinan dan mentoring berkala.",
      "Mengelola database keaktifan dan pelaporan administratif program.",
    ],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How I Build", href: "#how-i-build" },
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
