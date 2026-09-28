export const PERSONAL = {
  name: "Muhammad Hidayat",
  role: "Fresh Graduate in Informatics Engineering | Data & Business Analysis | Systems & Tech",
  greeting: "Hi, I'm Muhammad Hidayat 👋",
  tagline: "Fresh Graduate in Informatics Engineering from Universitas Muhammadiyah Cirebon with an interest in data analysis, business analysis, information systems, and technology.",
  location: "Indonesia",
  github: "https://github.com/MuhHidayatt",
  linkedin: "https://www.linkedin.com/in/mhidayattt",
  email: "muhidayat467@gmail.com",
  instagram: "https://www.instagram.com/mhidayat._?igsh=cGFla3Z0YTVyZTdp",
  avatar: "/pas-foto-hidayat.jpeg",
  university: "Universitas Muhammadiyah Cirebon",
};

export const HERO_PILLS = [
  "📊 Data & Business Analysis",
  "💻 Information Systems & Tech",
  "⚡ Application Development",
];

export const HERO_TECH_STACK = [
  "Data Analysis",
  "System Analysis",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Excel",
];

export const STATS = [
  { value: "13+", label: "Repositories" },
  { value: "4", label: "Featured Projects" },
  { value: "Fresh Grad", label: "Teknik Informatika" },
];

export const ABOUT = {
  whoIAm:
    "Fresh Graduate Informatics Engineering from Universitas Muhammadiyah Cirebon with an interest in data analysis, business analysis, information systems, and technology. I enjoy working with data, understanding business processes, and turning information into structured insights and practical solutions.",
  whatILove:
    "I gained experience through an internship at the Cirebon Regency Communication and Informatics Office (Diskominfo Kabupaten Cirebon), where I was exposed to a professional environment involving information technology and administrative activities. In addition, through my experience at the Center for Data and Information Technology (PUSDATIN), Universitas Muhammadiyah Cirebon, I contributed to the development of an internal Certificate Authority (CA) system to support digital document signing and verification. These experiences strengthened my skills in system analysis, application development, documentation, and understanding business processes and user needs.",
  whyIBuild:
    "I am continuously developing my skills in data, business analysis, information technology, and administration. I am open to opportunities where I can contribute, learn, and grow in a professional and collaborative environment.",
  adminApproach:
    "Beyond my technical experience, my role as General Secretary of the Informatics Engineering Student Association strengthened my skills in administration, documentation, coordination, communication, and organizational management.",
  educationText:
    "Universitas Muhammadiyah Cirebon — S1 Teknik Informatika (Fresh Graduate)",
};

export interface Skill {
  name: string;
  category: "data" | "backend" | "frontend" | "ai" | "workflow";
}

export const SKILLS: Skill[] = [
  // Data & Business Analysis
  { name: "Data Analysis", category: "data" },
  { name: "Business Process Analysis", category: "data" },
  { name: "System Analysis", category: "data" },
  { name: "Microsoft Excel (Advanced)", category: "data" },
  { name: "Data Processing", category: "data" },
  { name: "Data Visualization", category: "data" },
  { name: "Requirement Gathering", category: "data" },
  { name: "SQL Querying", category: "data" },

  // Information Systems & Databases
  { name: "PostgreSQL", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Database Schema Design", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "REST API", category: "backend" },

  // Web & Application Technology
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  
  // AI & Productivity Tools
  { name: "Claude", category: "ai" },
  { name: "Gemini", category: "ai" },
  { name: "Antigravity", category: "ai" },
  { name: "AI-Assisted Workflow", category: "ai" },
  
  // Workflow, Documentation & Administration
  { name: "Technical Documentation", category: "workflow" },
  { name: "Administrative Management", category: "workflow" },
  { name: "Microsoft Word", category: "workflow" },
  { name: "Report Writing", category: "workflow" },
  { name: "Meeting Minutes", category: "workflow" },
  { name: "GitHub", category: "workflow" },
  { name: "Figma", category: "workflow" },
  { name: "Vercel", category: "workflow" },
];

export const HOW_I_BUILD_FLOW = [
  { name: "Requirements Discovery", icon: "💡" },
  { name: "Data & Process Analysis", icon: "🔍" },
  { name: "System Design & Modeling", icon: "📐" },
  { name: "Development & Integration", icon: "💻" },
  { name: "Testing & Verification", icon: "🧪" },
  { name: "Deployment & Reporting", icon: "🚀" }
];

export const HOW_I_BUILD_TOOLS = [
  "Microsoft Excel",
  "PostgreSQL",
  "MySQL",
  "Next.js",
  "TypeScript",
  "Laravel",
  "Figma",
  "GitHub",
  "Claude",
  "Gemini",
  "Antigravity",
  "Vercel"
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
    title: "Certificate Authority (CA System)",
    description:
      "A web-based digital certificate authority and verification system designed for academic institutions to issue, sign, and validate digital documents with cryptographic QR verification and tamper-evident auditing.",
    tech: ["Information Systems", "System Analysis", "Next.js", "TypeScript", "Digital Signature", "QR Verification"],
    github: "https://github.com/MuhHidayatt/certificate-authority",
    accent: "violet",
    badge: "Information System • Featured"
  },
  {
    id: "splitku",
    title: "SplitKu — Financial Tracking System",
    description:
      "Expense sharing and financial tracking application designed to streamline group expense management, automate transparent cost distribution, and provide analytical cost summaries.",
    tech: ["Financial Data Tracking", "Next.js", "TypeScript", "Cost Analysis", "Full Stack"],
    github: "https://github.com/MuhHidayatt/splitku",
    accent: "cyan",
    badge: "Data & Financial System"
  },
  {
    id: "sipakar-laptop",
    title: "SIPAKAR — Expert Decision Support System",
    description:
      "Expert decision support system that diagnoses computer hardware and software issues using Forward Chaining inference and Certainty Factor probability calculations.",
    tech: ["Decision Support System (DSS)", "Forward Chaining", "Certainty Factor", "React", "TypeScript"],
    github: "https://github.com/MuhHidayatt/sipakar-laptop",
    accent: "cyan",
    badge: "Decision Support System"
  },
  {
    id: "photo-web",
    title: "AI Style Transfer Studio",
    description:
      "Interactive digital media application applying deep neural network algorithms for style synthesis and image transformation, combining modern frontend tech with generative models.",
    tech: ["Interactive Tech", "Neural Style Transfer", "React", "UI/UX"],
    github: "https://github.com/MuhHidayatt/photo-web",
    accent: "violet",
    badge: "AI & Interactive Tech"
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
    role: "PKL (Praktik Kerja Lapangan) — System & CA Development",
    organization: "Pusdatin — Universitas Muhammadiyah Cirebon",
    period: "Jun 2026 – Okt 2026",
    type: "technical",
    tags: ["Information Systems", "System Analysis & CA", "Document Verification", "Digital Security"],
    points: [
      "Menganalisis kebutuhan sistem dan berkontribusi dalam perancangan arsitektur internal Certificate Authority (CA) untuk penandatanganan dan verifikasi dokumen akademik digital.",
      "Mengimplementasikan fitur verifikasi QR code dan validasi keabsahan dokumen guna memastikan integritas data (tamper-evident).",
      "Menyusun dokumentasi teknis sistem dan flow bisnis verifikasi dokumen dari tahap inisiasi hingga pengujian.",
    ],
  },
  {
    role: "Magang — Bidang SP-Egov Application & Data Systems",
    organization: "Diskominfo Kabupaten Cirebon",
    period: "Okt 2025 – Des 2025",
    type: "technical",
    tags: ["E-Government (SPBE)", "Sectoral Statistics (SIPASTI)", "Public Service Systems", "Process Documentation"],
    points: [
      "Mendukung analisis dan pengelolaan aplikasi pemerintahan daerah dalam ekosistem SPBE (Sistem Pemerintahan Berbasis Elektronik).",
      "Berkontribusi pada pengembangan sistem SIPASTI (Sistem Penilaian Statistik Sektoral) untuk mempermudah pengelolaan dan evaluasi data statistik daerah.",
      "Membantu pengembangan sistem pelayanan SIBANGKOM (Sistem Pelayanan Pengembangan Kompetensi) dan pemeliharaan website resmi CSIRT Kabupaten Cirebon.",
      "Menyusun dokumentasi kebutuhan sistem, notulensi rapat koordinasi, serta materi sosialisasi pengelolaan website instansi dan desa.",
    ],
  },
  {
    role: "Sekretaris",
    organization: "Karang Taruna Margatama Desa Koreak",
    period: "Jan 2026 – Present",
    type: "leadership",
    points: [
      "Mengotomatisasi pengarsipan dokumentasi kepemudaan secara terstruktur dan tertib administrasi.",
      "Menyusun 15+ notulensi rapat resmi serta laporan pertanggungjawaban kegiatan.",
      "Mengoordinasikan perencanaan serta alur pelaksanaan program pengabdian masyarakat.",
    ],
  },
  {
    role: "Sekretaris Umum",
    organization: "HIMASANTIKA",
    period: "Feb 2024 – Dec 2024",
    type: "leadership",
    points: [
      "Memimpin tata kelola kesekretariatan, pengarsipan berkas legalitas, dan administrasi database bagi 80+ anggota aktif.",
      "Menyusun notulensi rapat bulanan serta standarisasi tata kelola persuratan kemahasiswaan.",
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
      "Mengelola database keaktifan dan pelaporan administratif program secara terstruktur.",
    ],
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Workflow", href: "#how-i-build" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
