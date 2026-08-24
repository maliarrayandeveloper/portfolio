import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "maliarrayandeveloper@gmail.com";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-4 md:px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-content mx-auto overflow-hidden rounded-xl4 bg-dark px-8 py-20 md:py-28 text-center"
      >
        {/* Decorative shapes */}
        <div className="blob w-64 h-64 bg-purple/20 -left-10 -top-10" />
        <div className="blob w-56 h-56 bg-yellow/10 right-0 bottom-0" />

        <div className="relative">
          <h2 className="font-extrabold text-white text-4xl md:text-6xl tracking-tight leading-[1.05]">
            Have an idea
            <br />
            worth building?
          </h2>
          <p className="mt-5 text-white/60 text-lg max-w-[440px] mx-auto">
            Let's turn it into something real.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-orange text-white font-semibold px-7 py-3.5 hover:-translate-y-0.5 hover:scale-[1.02] transition-transform"
            >
              Let's Talk
              <ArrowRight size={17} />
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white font-medium px-6 py-3.5 border border-white/15 hover:bg-white/15 transition-colors"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : EMAIL}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
