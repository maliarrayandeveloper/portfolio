// Data-driven project list — sourced from real project source code.
// Swap `mockupTheme` colors or add a real screenshot URL to `image` later.

export const projects = [
  {
    number: "01",
    id: "dapursybilla",
    title: "Dapur Sybilla",
    tagline: "UMKM Catalog & Ordering Platform",
    description:
      "A full-stack MERN platform built to digitize a local home-cooked food UMKM — customer-facing catalog with WhatsApp ordering, plus a complete admin dashboard for inventory and category management.",
    pills: ["Product catalog", "Admin dashboard", "WhatsApp ordering"],
    role: "Full-stack developer",
    outcome:
      "Replaced a manual, chat-only ordering process with a searchable online catalog and a real admin dashboard for inventory and category control.",
    technologies: ["React", "Node.js", "MongoDB", "JWT Auth", "Cloudinary"],
    url: "https://dapursybilla.vercel.app/",
    mockupTheme: { primary: "#6B4A2F", surface: "#F0E8DC" },
  },
  {
    number: "02",
    id: "digital-invitation",
    title: "Digital Invitation Catalog",
    tagline: "Multi-Theme Wedding Invitation App",
    description:
      "A production-ready digital wedding invitation platform with three distinct themes. Guest names and themes are URL-driven, enabling personalized invite links with live RSVP.",
    pills: ["URL personalization", "3 themes", "Live RSVP"],
    role: "Full-stack developer",
    outcome:
      "Gave couples a shareable, personalized invite link per guest — with animated themes and real-time RSVP tracking instead of a static PDF invite.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase"],
    url: "https://katalog-undangan-digital.vercel.app/?to=Juliet&theme=floral",
    mockupTheme: { primary: "#8B5CF6", surface: "#F3EEFF" },
  },
];
