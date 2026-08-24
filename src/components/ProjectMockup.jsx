// Elegant placeholder mockup — swap for a real screenshot via `project.image` later.
export default function ProjectMockup({ project }) {
  const { primary, surface } = project.mockupTheme;
  return (
    <div className="rounded-2xl overflow-hidden border border-line bg-white shadow-softer">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-bg border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-xs text-muted truncate">
          {project.url.replace("https://", "")}
        </span>
      </div>

      {/* Screen */}
      <div className="p-5" style={{ background: surface }}>
        <div
          className="h-3 w-24 rounded-full mb-4"
          style={{ background: primary, opacity: 0.85 }}
        />
        <div className="h-6 w-3/4 rounded-lg bg-white/70 mb-2" />
        <div className="h-6 w-1/2 rounded-lg bg-white/50 mb-6" />
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-white/60 p-2.5">
              <div
                className="h-14 rounded-lg mb-2"
                style={{ background: primary, opacity: 0.25 + i * 0.1 }}
              />
              <div className="h-2 w-4/5 rounded-full bg-white/80 mb-1.5" />
              <div className="h-2 w-2/5 rounded-full bg-white/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
