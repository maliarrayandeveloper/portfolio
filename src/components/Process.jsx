import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    tag: "30 min",
    title: "Scope the build",
    desc: "We talk through the idea, what's already clear, what still needs shaping, and whether I'm the right fit.",
  },
  {
    num: "02",
    tag: "1–2 days",
    title: "Lock the plan",
    desc: "You get the scope, timeline, deliverables, and price before the build starts. No vague promises.",
  },
  {
    num: "03",
    tag: "Build phase",
    title: "Build & ship",
    desc: "I build fast, share working previews, handle feedback, and get the product ready for real users.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label">✦ Process</span>
          <h2 className="mt-4 font-extrabold text-dark text-4xl md:text-5xl tracking-tight">
            How it works
          </h2>
          <p className="mt-4 max-w-[520px] text-muted text-lg leading-relaxed">
            Simple enough to move quickly, structured enough that you always
            know what's happening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white border border-line rounded-xl4 p-7"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-extrabold text-dark/10">
                  {s.num}
                </span>
                <span className="text-xs font-semibold text-orange bg-orange/10 rounded-full px-3 py-1.5">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">{s.title}</h3>
              <p className="text-[15px] text-muted leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
