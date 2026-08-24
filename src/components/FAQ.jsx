import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What do you build?",
    a: "Full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) — customer-facing apps, admin dashboards, and REST APIs, from planning through deployment.",
  },
  {
    q: "Are you open to full-time or freelance work?",
    a: "Both. I'm actively looking for full-time remote engineering roles, and I also take on select freelance builds when the scope is a good fit.",
  },
  {
    q: "Can you work with a team across time zones?",
    a: "Yes — I'm used to async communication, clear written updates, and structured handoffs so distance and time zones don't slow a project down.",
  },
  {
    q: "What does a typical project need from me?",
    a: "Just clarity on the goal to start. I handle the technical planning, keep you updated with working previews along the way, and flag anything that needs your input early.",
  },
  {
    q: "Can I see the code for your projects?",
    a: "Some repos are public and linked directly on each project. Others are private (client or thesis work) — for those I can walk you through the code on a call.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`bg-white border rounded-xl3 overflow-hidden transition-colors ${
        isOpen ? "border-dark/20" : "border-line"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-dark">{item.q}</span>
        <span
          className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-bg border border-line text-dark/70 transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <Plus size={16} />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[15px] text-muted leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-t border-line">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">✦ FAQ</span>
          <h2 className="mt-4 font-extrabold text-dark text-3xl md:text-4xl tracking-tight">
            Clear answers for quick decisions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
