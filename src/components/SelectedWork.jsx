import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectMockup from "./ProjectMockup";

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">
        {/* Section head */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label mb-4">✦ Selected Work</span>
          <h2 className="mt-4 font-extrabold text-dark text-4xl md:text-5xl tracking-tight">
            Products I've shipped
          </h2>
          <p className="mt-4 max-w-[560px] text-muted text-lg leading-relaxed">
            A closer look at real platforms, catalogs, booking flows, and
            dashboards built for actual users.
          </p>
        </motion.div>

        {/* Featured card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-6 md:gap-4 bg-white border border-line rounded-xl4 p-4 shadow-soft"
          >
            {/* Left: mockup */}
            <div className="flex items-center">
              <ProjectMockup project={project} />
            </div>

            {/* Right: info */}
            <div className="p-3 md:p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-5">
                {project.pills.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium text-dark/70 bg-bg border border-line rounded-full px-3 py-1.5"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <h3 className="font-extrabold text-2xl md:text-3xl text-dark tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-dark/80">
                {project.description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 pt-5 border-t border-line">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                    Role
                  </p>
                  <p className="text-sm text-dark">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-dark leading-snug">
                    {project.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-accent bg-purple/50 rounded-full px-3 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-dark hover:text-orange transition-colors w-fit"
              >
                View Live
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Project selector tabs */}
        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 md:overflow-visible">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`shrink-0 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border transition-colors ${
                active === i
                  ? "bg-dark text-white border-dark"
                  : "bg-white text-dark/70 border-line hover:text-dark"
              }`}
            >
              <span className="opacity-60">{p.number}</span>
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
