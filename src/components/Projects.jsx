import { useEffect, useRef, useState } from "react";
import styles from "./Projects.module.css";

/* ── Data — sourced directly from project source code ── */
const projects = [
  {
    id: "dapursybilla",
    featured: true,
    title: "Dapur Sybilla",
    subtitle: "UMKM Home-Cooked Food Catalog & Ordering Platform",
    role: "Fullstack Developer",
    year: "2026",
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Auth",
      "Cloudinary",
      "REST API",
      "Tailwind CSS",
    ],
    description:
      "My final-year thesis — a full-stack MERN platform built from scratch to digitize a local home-cooked food UMKM. The system covers a customer-facing product catalog with WhatsApp ordering, a complete admin dashboard for inventory & category management, image hosting via Cloudinary, and JWT-based authentication.",
    highlights: [
      "RESTful API (Node.js + Express) with 5 route modules: auth, products, categories, upload, config",
      "React frontend with dynamic catalog, product detail pages, and URL-based category filtering",
      "Admin dashboard: full product CRUD, category management, site settings, Cloudinary image uploads",
      "MongoDB models: Product (portion, is_seasonal, is_preorder_only), Category, Admin, SiteConfig",
      'WhatsApp deep-link ordering — customers tap "Pesan" to send a pre-filled WA message instantly',
      "JWT middleware protecting all admin routes; deployed on Vercel with production CORS config",
    ],
    liveUrl: "https://dapursybilla.vercel.app/",
    demoUrl: "YOUR_DEMO_VIDEO_URL",
    caseStudyUrl:
      "https://medium.com/@maliarrayandeveloper/membangun-website-katalog-umkm-dari-nol-studi-kasus-dapursybilla-6bd6cd9e996e",
    isPrivate: true,
  },
  {
    id: "digital-invitation",
    featured: false,
    title: "Digital Invitation Catalog",
    subtitle: "Multi-Theme Personalized Wedding Invitation App",
    role: "Fullstack Developer",
    year: "2026",
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "react-icons",
    ],
    description:
      "A production-ready digital wedding invitation platform with three distinct themes (Classic Floral, Elegant Dark, Minimalist Modern). Guest names and themes are URL-param driven — enabling personalized invite links. Features animated petal effects, live countdown timer, RSVP via Supabase, and mobile bottom navigation.",
    highlights: [
      "URL-driven personalization: ?to=GuestName&theme=floral renders a fully personal invite",
      "3 complete themes — ClassicFloral, ElegantDark, MinimalistModern — each with unique layouts",
      "Framer Motion: cover slide-out, falling rose petals, scroll-triggered reveals per section",
      "Live countdown hook (useCountdown) counting down to the event date in real-time",
      "RSVP form backed by Supabase — guest responses stored in real-time database",
      "Background music player per template; public repo actively maintained",
    ],
    liveUrl:
      "https://katalog-undangan-digital.vercel.app/?to=Juliet&theme=floral",
    githubUrl:
      "https://github.com/maliarrayandeveloper/katalog-undangan-digital",
    isPrivate: false,
  },
];

/* ── Architecture diagram — DapurSybilla ── */
function ArchDiagram() {
  return (
    <div className={styles.arch}>
      <p className={styles.archLabel}>System Architecture</p>
      <div className={styles.archRow}>
        <div className={`${styles.archBox} ${styles.frontend}`}>
          <span>⚛️</span>
          <span>React</span>
          <span className={styles.archSub}>Visitor + Admin UI</span>
        </div>
        <span className={styles.archArrow}>→</span>
        <div className={`${styles.archBox} ${styles.backend}`}>
          <span>🟢</span>
          <span>Express API</span>
          <span className={styles.archSub}>5 route modules</span>
        </div>
        <span className={styles.archArrow}>→</span>
        <div className={styles.archStack}>
          <div className={`${styles.archBox} ${styles.db}`}>
            <span>MongoDB</span>
            <span className={styles.archSub}>4 models</span>
          </div>
          <div className={`${styles.archBox} ${styles.cloud}`}>
            <span>Cloudinary</span>
            <span className={styles.archSub}>Images</span>
          </div>
        </div>
      </div>
      <div className={styles.archRoutes}>
        {[
          "/api/auth",
          "/api/products",
          "/api/categories",
          "/api/upload",
          "/api/config",
        ].map((r) => (
          <span key={r} className={styles.routePill}>
            {r}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Theme preview — Digital Invitation ── */
function ThemePreview() {
  const themes = [
    { name: "Classic Floral", color: "#6B8F71", bg: "#f0f7f1", emoji: "🌸" },
    { name: "Elegant Dark", color: "#E8D5B7", bg: "#1a1a2e", emoji: "🌙" },
    { name: "Minimalist", color: "#374151", bg: "#f9fafb", emoji: "✦" },
  ];
  return (
    <div className={styles.themeRow}>
      {themes.map((t) => (
        <div
          key={t.name}
          className={styles.themeCard}
          style={{ background: t.bg }}
        >
          <span className={styles.themeEmoji}>{t.emoji}</span>
          <span className={styles.themeName} style={{ color: t.color }}>
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function Tag({ label }) {
  return <span className={styles.tag}>{label}</span>;
}

/* ── Featured card — DapurSybilla ── */
function FeaturedProject({ p, visible }) {
  return (
    <div className={`${styles.featuredCard} ${visible ? styles.visible : ""}`}>
      <div className={styles.featuredInfo}>
        <div className={styles.cardHeader}>
          <span className={styles.featuredBadge}>
            Featured · Thesis Project
          </span>
          <span className={styles.year}>{p.year}</span>
        </div>
        <h3 className={styles.projTitle}>{p.title}</h3>
        <p className={styles.projSubtitle}>{p.subtitle}</p>
        <p className={styles.projRole}>Role: {p.role}</p>
        <p className={styles.projDesc}>{p.description}</p>

        <ul className={styles.highlights}>
          {p.highlights.map((h, i) => (
            <li key={i}>
              <span className={styles.arrow}>→</span>
              {h}
            </li>
          ))}
        </ul>

        <ArchDiagram />

        <div className={styles.tags}>
          {p.stack.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSolid}
          >
            View Live ↗
          </a>
          {p.demoUrl !== "YOUR_DEMO_VIDEO_URL" && (
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              ▶ Watch Demo
            </a>
          )}
          {p.caseStudyUrl && (
            <a
              href={p.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Case Study ↗
            </a>
          )}
          <span className={styles.privateNote}>🔒 Private repo</span>
        </div>
      </div>

      {/* Right: DapurSybilla UI mockup */}
      <div className={styles.featuredVisual}>
        <div className={styles.browserFrame}>
          <div className={styles.browserBar}>
            <span
              className={styles.browserDot}
              style={{ background: "#FF5F57" }}
            />
            <span
              className={styles.browserDot}
              style={{ background: "#FEBC2E" }}
            />
            <span
              className={styles.browserDot}
              style={{ background: "#28C840" }}
            />
            <span className={styles.browserUrl}>dapursybilla.vercel.app</span>
          </div>
          <div className={styles.browserBody}>
            <div className={styles.dsScreen}>
              {/* Navbar */}
              <div className={styles.dsNav}>
                <div className={styles.dsNavBrand} />
                <div className={styles.dsNavLinks}>
                  {[36, 36, 36].map((w, i) => (
                    <div
                      key={i}
                      className={styles.dsNavDot}
                      style={{ width: w }}
                    />
                  ))}
                </div>
              </div>
              {/* Hero */}
              <div className={styles.dsHero}>
                <div className={styles.dsHeroLeft}>
                  <div className={styles.dsBadge}>UMKM Makanan Rumahan</div>
                  <div className={styles.dsH1} />
                  <div
                    className={styles.dsH1}
                    style={{ width: "65%", opacity: 0.45 }}
                  />
                  <div className={styles.dsBtnRow}>
                    <div
                      className={styles.dsBtn}
                      style={{ background: "#6B4A2F" }}
                    />
                    <div
                      className={styles.dsBtn}
                      style={{ border: "1.5px solid #6B4A2F" }}
                    />
                  </div>
                  {/* Stats */}
                  <div className={styles.dsStats}>
                    {["20+ Menu", "500+ Pelanggan", "5★ Rating"].map((s) => (
                      <div key={s} className={styles.dsStat}>
                        <div className={styles.dsStatNum} />
                        <div className={styles.dsStatLabel} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.dsHeroCircle}>🍱</div>
              </div>
              {/* Category pills */}
              <div className={styles.dsCats}>
                {["Semua", "Snack", "Kue", "Nasi"].map((c, i) => (
                  <div
                    key={c}
                    className={styles.dsCatPill}
                    style={{
                      background: i === 0 ? "#6B4A2F" : "#F0E8DC",
                      color: i === 0 ? "#FAF6F0" : "#6B4A2F",
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
              {/* Product grid */}
              <div className={styles.dsGrid}>
                {[
                  { bg: "#DDD0BF" },
                  { bg: "#C4AA8E" },
                  { bg: "#EDE3D6" },
                  { bg: "#C4AA8E" },
                  { bg: "#DDD0BF" },
                  { bg: "#EDE3D6" },
                ].map((c, i) => (
                  <div key={i} className={styles.dsCard}>
                    <div
                      className={styles.dsCardImg}
                      style={{ background: c.bg }}
                    />
                    <div className={styles.dsCardBody}>
                      <div className={styles.dsLine} style={{ width: "80%" }} />
                      <div className={styles.dsPriceRow}>
                        <div
                          className={styles.dsLine}
                          style={{ width: "45%" }}
                        />
                        <div
                          className={styles.dsLine}
                          style={{ width: "25%", opacity: 0.4 }}
                        />
                      </div>
                      <div className={styles.dsWaBtn} />
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.phHint}>↑ Replace with actual screenshots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Regular card — Digital Invitation ── */
function ProjectCard({ p, visible, delay }) {
  return (
    <div
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.year}>{p.year}</span>
        {!p.isPrivate && (
          <span className={styles.publicBadge}>Public · Active</span>
        )}
      </div>
      <h3 className={styles.projTitle}>{p.title}</h3>
      <p className={styles.projSubtitle}>{p.subtitle}</p>
      <p className={styles.projRole}>Role: {p.role}</p>
      <p className={styles.projDesc}>{p.description}</p>

      <ThemePreview />

      <ul className={styles.highlights}>
        {p.highlights.map((h, i) => (
          <li key={i}>
            <span className={styles.arrow}>→</span>
            {h}
          </li>
        ))}
      </ul>

      <div className={styles.tags}>
        {p.stack.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <div className={styles.actions}>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSolid}
          >
            View Live ↗
          </a>
        )}
        {p.githubUrl && p.githubUrl !== "YOUR_GITHUB_REPO_URL" && (
          <a
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            GitHub Source ↗
          </a>
        )}
      </div>
    </div>
  );
}

/* ── Main section ── */
export default function Projects() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.inner}>
        <div
          className={`${styles.sectionHead} ${visible ? styles.visible : ""}`}
        >
          <p className={styles.label}>Projects</p>
          <h2 className={styles.heading}>
            Things I've built
            <br />
            <em>that actually work.</em>
          </h2>
        </div>

        {featured && <FeaturedProject p={featured} visible={visible} />}

        {rest.length > 0 && (
          <div className={styles.grid}>
            {rest.map((p, i) => (
              <ProjectCard
                key={p.id}
                p={p}
                visible={visible}
                delay={0.1 * (i + 1)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
