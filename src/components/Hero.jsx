import { motion } from "framer-motion";
import { Github, Linkedin, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36"
    >
      {/* Decorative ambient blobs */}
      <div className="blob w-72 h-72 bg-yellow/50 -left-16 top-24" />
      <div className="blob w-80 h-80 bg-purple/50 right-0 top-10" />
      <div className="blob w-64 h-64 bg-mint/60 right-24 top-72" />

      <div className="relative max-w-content mx-auto px-6 flex flex-col items-center text-center">
        {/* Status pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 bg-white rounded-full shadow-soft border border-line px-4 py-2 text-sm font-medium text-dark/80 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Fast turnaround · Currently available
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="font-extrabold text-dark leading-[0.95] tracking-tight text-[48px] sm:text-[64px] md:text-[88px] lg:text-[104px]"
        >
          I turn ideas into
          <br />
          <span className="relative inline-block text-orange">
            real products
            <svg
              className="absolute left-0 -bottom-2 md:-bottom-4 w-full"
              height="14"
              viewBox="0 0 300 14"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 10 Q 150 -4 298 10"
                stroke="#FFE69A"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <Sparkles
              className="absolute -right-10 top-0 text-accent hidden md:block"
              size={32}
              strokeWidth={1.5}
            />
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="mt-8 max-w-[600px] text-lg md:text-xl text-muted leading-relaxed"
        >
          I help startups and small businesses design and build websites, web
          apps, dashboards, and mobile apps that launch fast and work in
          production.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={scrollToWork}
            className="rounded-full bg-dark text-white font-semibold px-6 py-3.5 hover:-translate-y-0.5 hover:scale-[1.02] transition-transform"
          >
            See My Work ↓
          </button>
          <a
            href="mailto:maliarrayandeveloper@gmail.com"
            className="rounded-full bg-white border border-line text-dark font-semibold px-6 py-3.5 hover:-translate-y-0.5 hover:scale-[1.02] transition-transform shadow-softer"
          >
            maliarrayandeveloper@gmail.com
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-8 flex items-center gap-3"
        >
          <a
            href="https://github.com/maliarrayandeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-line text-dark/70 hover:text-dark transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/maliarrayan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-line text-dark/70 hover:text-dark transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
