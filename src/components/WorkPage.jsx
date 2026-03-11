import React, { useState } from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ArrowUpRight, Clock, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordModal } from "./PasswordModal";
import { useAuth } from "../contexts/AuthContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ReactGA from "react-ga4";
import sustainabilityImage from "figma:asset/524616a1f7f63515c08aff99d15a6fa2ddfd4d1e.png";
import bleepmedImage from "figma:asset/954412963dcb21eca65211548514dd170a77a564.png";
import dashboardImage from "figma:asset/9d47c43c7096aca688d62cf6b64b35d845463cc2.png";
import illustrationsImage from "figma:asset/ec123535667fb7c7348e05688cbc273c4bbe3c41.png";
import swedishFitnessOverview from "figma:asset/4b51bd1606c56d09a50e4a0d2b3123a5ff5e3e9f.png";
import expertrepublicimage from "figma:asset/4fd14448f0df2328217b29896eacaabceff1559a.png";
import aiVideo from "../assets/AIvideo.mp4";
import sustainability from "../assets/Sustainability.mp4";

// ─── GA4 Helpers ─────────────────────────────────────────────────────────────

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
    source: "work_page",
  });
  console.log("✅ GA4 event fired:", eventName, { cardUrl });
}

function trackExternalLinkClick(cardTitle, cardUrl) {
  const eventName = toEventSlug(cardTitle) + "_external";
  ReactGA.event(eventName, {
    external_url: cardUrl,
    page_path: window.location.pathname,
    source: "work_page",
  });
  console.log("✅ GA4 event fired:", eventName, { cardUrl });
}

// ─────────────────────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    id: 1,
    title: "IFS.ai ML Portal",
    company: "IFS",
    headline:
      "Accelerating machine learning and LLM use case innovation with a centralized portal for developers.",
    tags: ["AI", "B2B", "Featured"],
    readTime: "Password Protected",
    video: aiVideo,
    link: "/work/ifs-ai",
    isLocked: true,
    type: "featured",
  },
  {
    id: 2,
    title: "From uncertainty to certainty with Sustainability Management",
    company: "IFS",
    headline:
      "Helped shape a new sustainability management solution that reached 6M EUR TCV and 1M EUR ARR within 11 months of release.",
    tags: [
      "Enterprise UX",
      "Sustainability",
      "Leadership",
      "B2B",
      "SaaS",
      "Featured",
    ],
    readTime: "Password Protected",
    video: sustainability,
    link: "/work/ifs-sustainability",
    isLocked: true,
    type: "featured",
  },
  {
    id: 4,
    title:
      "Expert Republic - Increasing conversion rates and reducing support costs to optimize businesses during COVID 🇪🇪",
    company: "Rootcode",
    headline:
      "Connecting users with industry experts for 1-on-1 video consultations.",
    tags: ["Consumer UX", "Marketplace", "Mobile", "Featured", "Leadership"],
    readTime: "Password Protected",
    image: expertrepublicimage,
    link: "/work/expert-republic",
    isLocked: true,
    type: "featured",
  },
  {
    id: 7,
    title:
      "Defining the future fitness experience for one of Sweden's largest B2B enterprise software solution providers 🇸🇪",
    company: "Rootcode",
    headline: "Modernizing legacy ERP software for fitness industry.",
    tags: ["Enterprise UX", "B2B", "Systems", "Featured", "Leadership"],
    readTime: "Password Protected",
    image: swedishFitnessOverview,
    link: "/work/brp-systems",
    isLocked: true,
    type: "featured",
  },
  {
    id: 9,
    title:
      "B2B Dashboard Redesign - Turning a non-design customer into a design+development paid customer project",
    company: "Rootcode",
    headline:
      "An enterprise business analytics framework that is used by businesses to visualise their business data and visualizes millions of data points crucial to the operations of medium-sized organizations.",
    tags: [
      "Enterprise UX",
      "B2B",
      "Mobile App Design",
      "Web application Design",
    ],
    readTime: "5 min read",
    image: dashboardImage,
    link: "https://vanodhya-oshadhi.notion.site/B2B-Dashboard-Redesign-Turning-a-non-design-customer-into-a-design-development-paid-customer-proje-d2922a58b1c44da8bacfb8ae3b3068df?source=copy_link",
    type: "featured",
  },
  {
    id: 3,
    title: "BleepMed - Mobile App for booking Doctors in UAE 🇦🇪",
    company: "Rootcode",
    headline: "Simplified healthcare access and doctor booking in the UAE.",
    tags: ["Consumer UX", "Healthcare", "Mobile", "Web"],
    readTime: "4 min read",
    image: bleepmedImage,
    link: "https://vanodhya-oshadhi.notion.site/BleepMed-Mobile-App-for-booking-Doctors-in-UAE-6bc7e9c66620454391fda2ea8c69658b?source=copy_link",
    type: "featured",
  },
  {
    id: 6,
    title:
      "Design Leadership - Mentorship, workshops, and systems that raised UX maturity and grew the team",
    company: "All",
    headline:
      "The real bottleneck wasn't process in design agencies nor big tech — it was shared decision-making.",
    tags: ["Leadership", "Strategy", "Team Building"],
    readTime: "Password Protected",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3MzQ4MDk3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "/work/leadership",
    isLocked: true,
    type: "featured",
  },
  {
    id: 12,
    title: "Illustrations (Inprogress)",
    company: "None",
    headline: "Exploring the craft and creativity",
    tags: ["Fun Exploration Projects"],
    readTime: "1 min read",
    image: illustrationsImage,
    link: "https://www.notion.so/vanodhya-oshadhi/Illustrations-Inprogress-4d668455716347db85ae026989fd981c",
    type: "featured",
  },
];

const allProjects = [...featuredProjects];

const filterTags = [
  "All",
  "Featured",
  "Fun Exploration Projects",
  "Enterprise UX",
  "Consumer UX",
  "Leadership",
];

export function WorkPage() {
  const [selectedTag, setSelectedTag] = useState("Featured");

  const getFilteredProjects = () => {
    if (selectedTag === "All") {
      return { featured: featuredProjects };
    }
    return {
      featured: featuredProjects.filter((project) =>
        project.tags?.includes(selectedTag),
      ),
    };
  };

  const { featured: filteredFeatured } = getFilteredProjects();

  return (
    <div className="min-h-screen pt-[178px] pb-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-8xl px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6 mt-2">
            Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl">
            A comprehensive collection of case studies and explorations across
            enterprise, consumer, and innovation projects.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-violet-500 text-white"
                    : "bg-slate-900/50 text-slate-300 border border-white/10 hover:border-violet-500/30 hover:bg-white/5"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        {filteredFeatured.length > 0 && (
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-serif italic text-white mb-8"
            >
              My Work So Far...
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredFeatured.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredFeatured.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-slate-400 text-lg">
              No projects found with the tag "{selectedTag}". Try selecting a
              different filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const navigate = useNavigate();
  const { unlockProject, setGuestView } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const isExternalLink = !!project.link && project.link.startsWith("http");
  const hasLink = !!project.link;

  const projectId = project.link ? project.link.replace("/work/", "") : "";

  const guestOverviewPath =
    projectId === "expert-republic"
      ? "/work/expert-republic-guest-overview"
      : projectId === "brp-systems"
        ? "/work/swedish-fitness-guest-overview"
        : undefined;

  const handleCardClick = (e) => {
    if (project.isLocked && !isExternalLink) {
      e.preventDefault();
      e.stopPropagation();
      setShowPasswordModal(true);
    }
  };

  const handleUnlock = async (password) => {
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
  };

  const handleGuestView = () => {
    setGuestView(projectId);
    setShowPasswordModal(false);

    if (guestOverviewPath) {
      navigate(guestOverviewPath);
    } else {
      navigate(project.link);
    }
  };

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative flex flex-col h-full bg-slate-900/50 border rounded-2xl overflow-hidden ${
          hasLink
            ? "hover:border-violet-500/30 cursor-pointer"
            : "border-white/5 cursor-default"
        } transition-all duration-500 focus-within:ring-2 focus-within:ring-violet-500/50 ${
          project.isLocked ? "border-violet-500/20" : "border-white/5"
        }`}
        data-project-card
      >
        {/* Card Image / Video */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

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

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-90" />

          {/* Top Labels */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
            <Badge
              variant="outline"
              className="bg-slate-950/60 backdrop-blur-md border-white/10 text-slate-300 hover:bg-slate-900/80"
            >
              {project.company}
            </Badge>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-slate-300">
              {project.isLocked ? (
                <Lock className="w-3 h-3" />
              ) : (
                <Clock className="w-3 h-3" />
              )}
              {project.isLocked ? "Password protected" : project.readTime}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-6 md:p-8 relative z-20 -mt-20">
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {(project.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-violet-300/80 bg-violet-500/10 px-2 py-1 rounded-md border border-violet-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors flex items-center gap-2">
              {project.title}
              {project.isLocked ? (
                <Lock className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300 text-violet-400" />
              ) : (
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-violet-400" />
              )}
            </h3>

            <p className="text-slate-300 text-lg font-serif italic leading-relaxed">
              {project.headline}
            </p>
          </div>

          {/* Read Case Study Button */}
          {hasLink && (
            <div className="mt-auto pt-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm font-semibold text-violet-400 border-b border-violet-400/30 pb-0.5 group-hover:border-violet-400 transition-colors">
                Read Case Study
              </span>
            </div>
          )}
        </div>

        {/* Full Card Link (Accessible) */}
        {hasLink &&
          (isExternalLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackCardClick(project.title, project.link);
                trackExternalLinkClick(project.title, project.link);
              }}
              className="absolute inset-0 z-30 focus:outline-none"
            >
              <span className="sr-only">
                View case study for {project.title}
              </span>
            </a>
          ) : project.isLocked ? (
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
              className="absolute inset-0 z-30 focus:outline-none cursor-pointer"
              aria-label={`Unlock ${project.title}`}
            />
          ) : (
            <Link
              to={project.link}
              onClick={() => trackCardClick(project.title, project.link)}
              className="absolute inset-0 z-30 focus:outline-none"
            >
              <span className="sr-only">
                View case study for {project.title}
              </span>
            </Link>
          ))}
      </motion.div>
    </>
  );
}
