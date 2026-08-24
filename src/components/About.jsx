import { motion } from "framer-motion";

const categories = [
  "Product development",
  "UI/UX implementation",
  "Full-stack development",
  "Web applications",
  "Dashboards",
  "Internal tools",
  "Mobile applications",
  "API integrations",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">✦ About</span>
          <h2 className="mt-4 font-extrabold text-dark text-3xl md:text-4xl tracking-tight leading-tight">
            More than just
            <br />
            shipping code.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[17px] leading-relaxed text-dark/80">
            I'm a dedicated full-stack developer completing my degree in
            Informatics, focused on turning ideas into digital products people
            actually use — not just demos that look good in a portfolio.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-dark/80">
            I help startups and small businesses design and build websites,
            web apps, dashboards, and internal tools using the MERN stack —
            keeping things simple, fast, and production-ready.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <span
                key={c}
                className="text-sm font-medium text-dark/70 bg-white border border-line rounded-full px-4 py-2"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-line">
            <div>
              <p className="font-extrabold text-3xl text-dark">2+</p>
              <p className="text-sm text-muted mt-1">Projects shipped</p>
            </div>
            <div>
              <p className="font-extrabold text-3xl text-dark">8th</p>
              <p className="text-sm text-muted mt-1">Final semester</p>
            </div>
            <div>
              <p className="font-extrabold text-3xl text-dark">∞</p>
              <p className="text-sm text-muted mt-1">Remote-ready</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
