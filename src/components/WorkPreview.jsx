import React, {
  useState,
  memo,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Clock, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordModal } from "./PasswordModal";
import { useAuth } from "../contexts/AuthContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactGA from "react-ga4";
import sustainabilityImage from "figma:asset/524616a1f7f63515c08aff99d15a6fa2ddfd4d1e.png";
import swedishFitnessOverview from "figma:asset/4b51bd1606c56d09a50e4a0d2b3123a5ff5e3e9f.png";
import expertRepublicImage from "figma:asset/4fd14448f0df2328217b29896eacaabceff1559a.png";
import aiVideo from "../assets/AIvideo.mp4";
import sustainability from "../assets/Sustainability.mp4";

// ─── GA4 Helpers ──────────────────────────────────────────────────────────────

function useTrackSectionView(eventName) {
  const ref = useRef(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          ReactGA.event(eventName, { page_path: window.location.pathname });
          console.log("✅ GA4 event fired:", eventName);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eventName]);

  return ref;
}

function isExternalLink(url) {
  return url && (url.startsWith("http://") || url.startsWith("https://"));
}

function toEventSlug(title) {
  return (
    "click_" +
    title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .slice(0, 35)
  );
}

function trackCardClick(cardTitle, cardUrl) {
  const eventName = toEventSlug(cardTitle);
  ReactGA.event(eventName, {
    card_url: cardUrl,
    page_path: window.location.pathname,
    source: "home_page",
  });
  console.log("✅ GA4 event fired:", eventName, { cardUrl });
}

function trackExternalLinkClick(cardTitle, cardUrl) {
  const eventName = toEventSlug(cardTitle) + "_external";
  ReactGA.event(eventName, {
    external_url: cardUrl,
    page_path: window.location.pathname,
    source: "home_page",
  });
  console.log("✅ GA4 event fired:", eventName, { cardUrl });
}

// ─── Theme configuration ──────────────────────────────────────────────────────

const THEMES = {
  purple: {
    bg: "bg-slate-950/80 backdrop-blur-md",
    border: "border-violet-500/20",
    title: "text-white group-hover:text-violet-200",
    body: "text-slate-400",
    meta: "text-violet-300",
    divider: "bg-violet-500/20",
    badge:
      "bg-violet-500/10 border-violet-500/20 text-violet-200 hover:bg-violet-500/20",
    button:
      "text-white group-hover:text-violet-300 border-transparent group-hover:border-violet-500/50",
    icon: "text-violet-400",
    pulse: "bg-violet-400",
    imageOverlay: "from-transparent via-transparent to-slate-950/80",
    mobileOverlay: "from-slate-950 via-slate-950/90",
  },
  blue: {
    bg: "bg-slate-950/80 backdrop-blur-md",
    border: "border-blue-500/20",
    title: "text-white group-hover:text-blue-200",
    body: "text-slate-400",
    meta: "text-blue-300",
    divider: "bg-blue-500/20",
    badge:
      "bg-blue-500/10 border-blue-500/20 text-blue-200 hover:bg-blue-500/20",
    button:
      "text-white group-hover:text-blue-300 border-transparent group-hover:border-blue-500/50",
    icon: "text-blue-400",
    pulse: "bg-blue-400",
    imageOverlay: "from-transparent via-transparent to-slate-950/80",
    mobileOverlay: "from-slate-950 via-slate-950/90",
  },
  emerald: {
    bg: "bg-slate-950/80 backdrop-blur-md",
    border: "border-emerald-500/20",
    title: "text-white group-hover:text-emerald-200",
    body: "text-slate-400",
    meta: "text-emerald-300",
    divider: "bg-emerald-500/20",
    badge:
      "bg-emerald-500/10 border-emerald-500/20 text-emerald-200 hover:bg-emerald-500/20",
    button:
      "text-white group-hover:text-emerald-300 border-transparent group-hover:border-emerald-500/50",
    icon: "text-emerald-400",
    pulse: "bg-emerald-400",
    imageOverlay: "from-transparent via-transparent to-slate-950/80",
    mobileOverlay: "from-slate-950 via-slate-950/90",
  },
  rose: {
    bg: "bg-slate-950/80 backdrop-blur-md",
    border: "border-rose-500/20",
    title: "text-white group-hover:text-rose-200",
    body: "text-slate-400",
    meta: "text-rose-300",
    divider: "bg-rose-500/20",
    badge:
      "bg-rose-500/10 border-rose-500/20 text-rose-200 hover:bg-rose-500/20",
    button:
      "text-white group-hover:text-rose-300 border-transparent group-hover:border-rose-500/50",
    icon: "text-rose-400",
    pulse: "bg-rose-400",
    imageOverlay: "from-transparent via-transparent to-slate-950/80",
    mobileOverlay: "from-slate-950 via-slate-950/90",
  },
};

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "IFS.ai Developer Portal",
    company: "IFS",
    headline:
      "Accelerating machine learning and LLM use case innovation with a centralized portal for developers.",
    tags: ["Enterprise UX", "AI", "B2B"],
    readTime: "5 min read",
    video: aiVideo,
    link: "/work/ifs-ai",
    isLocked: true,
    theme: "purple",
  },
  {
    id: 4,
    title:
      "Defining the future fitness experience for one of Sweden's largest B2B enterprise software solution providers 🇸🇪",
    company: "Sweden company",
    headline: "Modernizing legacy ERP software for fitness industry.",
    tags: ["SaaS", "B2B", "Mobile", "Web"],
    readTime: "4 min read",
    image: swedishFitnessOverview,
    link: "/work/brp-systems",
    isLocked: true,
    type: "featured",
    theme: "blue",
  },
  {
    id: 2,
    title: "From uncertainty to certainty with Sustainability Management",
    company: "IFS",
    headline:
      "Helped shape a new sustainability management solution that reached 6M EUR TCV and 1M EUR ARR within 11 months of release.",
    tags: ["Enterprise UX", "Sustainability", "Leadership", "B2B", "SaaS"],
    readTime: "4 min read",
    video: sustainability,
    link: "/work/ifs-sustainability",
    isLocked: true,
    theme: "emerald",
  },
  {
    id: 5,
    title:
      "Increasing conversion rates and reducing support costs to optimize businesses during COVID",
    company: "Rootcode",
    headline:
      "Connecting users with industry experts for 1-on-1 video consultations.",
    tags: ["Consumer UX", "Marketplace", "Mobile"],
    readTime: "3 min read",
    image: expertRepublicImage,
    link: "/work/expert-republic",
    isLocked: true,
    theme: "rose",
  },
];

// ─── Animation configs ────────────────────────────────────────────────────────

const HEADER_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const CARD_TRANSITION_BASE = { duration: 0.5 };

const getGuestOverviewPath = (projectId) => {
  if (projectId === "expert-republic")
    return "/work/expert-republic-guest-overview";
  if (projectId === "brp-systems")
    return "/work/swedish-fitness-guest-overview";
  return undefined;
};

// ─── WorkPreview ──────────────────────────────────────────────────────────────

export function WorkPreview() {
  const sectionRef = useTrackSectionView("selected_work_section_viewed");

  return (
    <section ref={sectionRef} id="work" className="py-12 md:py-24 relative">
      <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-8xl px-4 md:px-6 relative z-10">
        <motion.div
          {...HEADER_ANIMATION}
          className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6">
              Selected Work
            </h2>
            <p className="text-slate-400 text-lg">
              Featured case studies demonstrating impact across enterprise,
              consumer, and sustainability sectors.
            </p>
          </div>
          <Link
            to="/work"
            onClick={() => trackCardClick("View All Projects", "/work")}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 hover:border-violet-500/30 transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-0 md:gap-0 pb-12 md:pb-24 relative -mt-32 sm:pt-0 md:mt-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

        <div className="mt-32 text-center md:hidden relative z-20">
          <Link
            to="/work"
            onClick={() => trackCardClick("View All Projects", "/work")}
            className="flex w-full mt-32 justify-center items-center gap-2 px-6 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  const { unlockProject, setGuestView } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const theme = THEMES[project.theme] || THEMES.purple;

  const projectId = useMemo(
    () => (project.link ? project.link.replace("/work/", "") : ""),
    [project.link],
  );

  const guestOverviewPath = useMemo(
    () => getGuestOverviewPath(projectId),
    [projectId],
  );

  const cardTransition = useMemo(
    () => ({ ...CARD_TRANSITION_BASE, delay: index * 0.1 }),
    [index],
  );

  const handleCardClick = useCallback(
    (e) => {
      if (project.isLocked) {
        e.preventDefault();
        e.stopPropagation();
        setShowPasswordModal(true);
      }
    },
    [project.isLocked],
  );

  const handleUnlock = useCallback(
    async (password) => {
      const success = await unlockProject(
        projectId,
        password,
        project.link,
        project.title,
      );
      if (success) {
        setShowPasswordModal(false);
        navigate(project.link);
      }
      return success;
    },
    [projectId, project.link, project.title, unlockProject, navigate],
  );

  const handleGuestView = useCallback(() => {
    setGuestView(projectId);
    setShowPasswordModal(false);
    navigate(guestOverviewPath || project.link);
  }, [projectId, project.link, guestOverviewPath, setGuestView, navigate]);

  const stickyTop = 120 + index * 20;

  return (
    <>
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onUnlock={handleUnlock}
        onViewAsGuest={handleGuestView}
        projectTitle={project.title}
        guestOverviewPath={guestOverviewPath}
      />

      <div
        className="relative md:sticky top-0 md:top-[var(--sticky-top)]"
        style={{ "--sticky-top": `${stickyTop}px`, zIndex: 10 + index }}
      >
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={cardTransition}
          className={`group flex flex-col md:grid md:grid-cols-2 ${theme.bg} border ${theme.border} rounded-3xl overflow-x-hidden hover:shadow-2xl hover:shadow-violet-900/10 transition-all duration-500 shadow-xl`}
          data-project-card
        >
          {/* Card Content - Left Side */}
          <div className="flex flex-col justify-center p-8 md:p-16 order-2 md:order-1 relative z-20 gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <div
                className={`flex items-center gap-2 text-sm font-medium ${theme.meta}`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${theme.pulse} animate-pulse`}
                />
                {project.company}
              </div>
              <div className={`w-px h-4 ${theme.divider}`} />
              <div
                className={`flex items-center gap-1.5 text-sm font-medium ${theme.meta}`}
              >
                <Clock className="w-3.5 h-3.5" />
                {project.readTime}
              </div>
            </div>

            <div>
              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-serif ${theme.title} mb-6 leading-tight`}
              >
                {project.title}
              </h3>
              <p
                className={`text-md md:text-lg leading-relaxed mb-8 font-light ${theme.body}`}
              >
                {project.headline}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={`${theme.badge} font-normal px-4 py-1.5`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <span
                className={`inline-flex items-center gap-3 text-base font-medium ${theme.button} transition-colors pb-1 border-b border-transparent`}
              >
                {project.isLocked ? "Read Case Study" : "View Case Study"}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </div>
          </div>

          {/* Card Image / Video - Right Side */}
          <div className="relative h-64 md:h-full min-h-[300px] order-1 md:order-2 p-4 md:p-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              )}
              <div
                className={`absolute inset-0 bg-gradient-to-l ${theme.imageOverlay}`}
              />
              <div
                className={`md:hidden absolute inset-0 bg-gradient-to-t ${theme.mobileOverlay} opacity-30`}
              />
            </div>
          </div>

          {/* Full Card Click Handler */}
          {project.isLocked ? (
            <button
              onClick={(e) => {
                trackCardClick(project.title, project.link);

                const ifsAiPath = project.link.includes("ifs-ai")
                  ? "/work/ifs-ai-guest-overview"
                  : null;
                const sustainabilityPath = project.link.includes(
                  "ifs-sustainability",
                )
                  ? "/work/ifs-sustainability-guest-overview"
                  : null;
                const targetPath =
                  ifsAiPath || sustainabilityPath || guestOverviewPath;

                if (targetPath) {
                  e.preventDefault();
                  setGuestView(projectId);
                  navigate(targetPath);
                } else {
                  handleCardClick(e);
                }
              }}
              className="absolute inset-0 z-30 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer hover:bg-violet-500/5 hover:ring-1 hover:ring-violet-500/30 transition-all duration-300"
              aria-label={`Unlock ${project.title}`}
            />
          ) : isExternalLink(project.link) ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackCardClick(project.title, project.link);
                trackExternalLinkClick(project.title, project.link);
              }}
              className="absolute inset-0 z-30 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span className="sr-only">
                View case study for {project.title}
              </span>
            </a>
          ) : (
            <Link
              to={project.link}
              onClick={() => trackCardClick(project.title, project.link)}
              className="absolute inset-0 z-30 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span className="sr-only">
                View case study for {project.title}
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );
});
