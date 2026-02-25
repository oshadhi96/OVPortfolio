import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mic,
  BookOpen,
  Users,
  Video,
  ArrowRight,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import visualDesignWorkshopImage from "figma:asset/4fb9cbbb9a9d25120eec2b62b3b4ebdc0666ad42.png";
import fullstoryAnalyticsImage from "figma:asset/efe9e16a8b39f7099a4f719f2e41040db69aaa86.png";
import careerPanelMar2025Image from "figma:asset/fb02bd1caf1c1893b01ebdff0ef78dea0acc46bd.png";
import maximizingRoiImage from "figma:asset/f8afede70941bb9fec2a7c6540e2af2c686ea384.png";
import wireframingXrImage from "figma:asset/eeda201e36c58f78f60542f69c72ce5619c98d51.png";
import careerPanelMar2024Image from "figma:asset/7441fe066ef693ba97600b097671a3cb34ff838a.png";
import usability101Image from "figma:asset/c4a580d4e08bafea2a67504c5f629aa9fe4e82b2.png";
import userResearchImage from "figma:asset/57e10d11098b17423d2dd35e8f739da4a3b9f8cd.png";
import ifsRndImage from "figma:asset/5888b52f30c3730e13613f99adb36bee71e17cfd.png";
import remoteWorkshopImage from "figma:asset/3ef770cadaf6a46f147abbc14be3a80181cfa1f4.png";
import designThinkingImage from "figma:asset/061b7fa3874af028916d19b335fb880a0f76fab0.png";
import xrWorkshopImage from "figma:asset/922932e04559a025ca3e5f2fd36c470f125a135b.png";
import judgingPanelImage from "figma:asset/fd66280e50f16adbf2f433b906f1d37f0d7cbf76.png";
import designSprintJudgeImage from "figma:asset/d6eb931b6226d380330602c906e44e2a9fb892dd.png";
import uxCoachingImage from "figma:asset/d74e6488dcbe03ed74ff1474f1e91bc271cb835c.png";
import curtinLectureImage from "figma:asset/f8f5d5a1df9e0026d3d93f1c505fb8d97bb772df.png";
import designCode2022Image from "figma:asset/b0d4daa41efff45a92a84461bb2519cb0b711683.png";

const contentData = [
  {
    id: "1",
    title: "Visual Design & Figma Design",
    format: "Workshop",
    topic: "Other",
    eventOrPlatform: "DesignX IEEE UCSC '25",
    date: "Dec 2025",
    summary:
      "workshop on design principles, accessibility, design systems and designing great user interfaces",
    image: visualDesignWorkshopImage,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-a7e738a3649c4869b3a847f9e9f7ac34#2410474b8a3980a4bfd1c45d30aaa680",
  },
  {
    id: "2",
    title: "From Guesswork to Insight - Learning Fullstory Analytics",
    format: "Talk",
    topic: "Other",
    eventOrPlatform: "IFS",
    date: "Sep 2025",
    summary:
      "Presented about how we can use analytics and a case study of using analytics to improve experience further",
    image: fullstoryAnalyticsImage,
    link: "#",
  },
  {
    id: "3",
    title: "Career Panel Discussion",
    format: "Panel",
    topic: "Design Careers",
    eventOrPlatform: "SL University students",
    date: "Mar 2025",
    summary:
      "A practical guide to role of UX designers at IFS and tips to find the career pathway",
    image: careerPanelMar2025Image,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-a7e738a3649c4869b3a847f9e9f7ac34#2410474b8a3980a4bfd1c45d30aaa680",
  },
  {
    id: "4",
    title: "Maximizing ROI: Design AI Solutions that deliver impact",
    format: "Talk",
    topic: "AI",
    eventOrPlatform: "Startup meetup at Australia",
    date: "Oct 2024",
    summary:
      "Exploring new paradigme in interaction design as we move from command-based interfaces to intent-based systems.",
    image: maximizingRoiImage,
    link: "https://www.linkedin.com/posts/oshadhi-vanodhya_ecommerce-recruitment-ai-activity-7248658550460145664-Kl2R/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU",
  },
  {
    id: "5",
    title: "Wireframing & Prototypying for AI and XR",
    format: "Talk",
    topic: "AI",
    eventOrPlatform: "IX '24'",
    date: "Aug 2024",
    summary:
      "Presented about prototypying for AI and XR for 160+ uni students and it's benefits",
    image: wireframingXrImage,
    link: "https://www.linkedin.com/posts/oshadhi-vanodhya_ai-xr-prototyping-activity-7230403933981007872-VEsg?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU",
  },
  {
    id: "6",
    title: "Career Panel Discussion",
    format: "Panel",
    topic: "Design Careers",
    eventOrPlatform: "BIT Students from University of Moratuwa",
    date: "Mar 2024",
    summary:
      "A practical guide to role of UX designers at IFS and tips to find the career pathway",
    image: careerPanelMar2024Image,
    link: "https://www.linkedin.com/posts/oshadhi-vanodhya_teampurple-ai-makeyourmoment-activity-7210210734486474752-4z2d?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU",
  },
  {
    id: "7",
    title: "Usability 101: Introduction to Usability",
    format: "Talk",
    topic: "Other",
    eventOrPlatform: "IFS",
    date: "Jul 2023",
    summary: "Session on Introduction to Usability for Colleagues",
    image: usability101Image,
    link: "#",
  },
  {
    id: "8",
    title: "User Research",
    format: "Talk",
    topic: "Other",
    eventOrPlatform: "IFS",
    date: "Nov 2023",
    summary:
      "Educate colleagues about user research and how to conduct usability testing",
    image: userResearchImage,
    link: "#",
  },
  {
    id: "9",
    title: "Representing the UX Designers at IFS RnD",
    format: "Panel",
    topic: "Enterprise UX",
    eventOrPlatform: "Conference",
    date: "Oct 2023",
    summary:
      "Shared thoughts to 1000+ colleagues on; What's happening at UX Guild and our aims Shared some examples of how we can use research data to make our designs intuitive ...",
    image: ifsRndImage,
    link: "https://www.linkedin.com/posts/lalinda-adihetty_ifs-ugcPost-7117717627283656704-_HaJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU",
  },
  {
    id: "10",
    title: "Remote Workshop",
    format: "Workshop",
    topic: "Other",
    eventOrPlatform: "IFS",
    date: "Sep 2023",
    summary: "Workshop on FigJam to help onboard",
    image: remoteWorkshopImage,
    link: "#",
  },
  {
    id: "11",
    title: "Design thinking for Innovation through empathy and creativity",
    format: "Talk",
    topic: "Enterprise UX",
    eventOrPlatform: "IFS",
    date: "Aug 2023",
    summary:
      "Deep dive into design thinking and user research in data-heavy dark interfaces.",
    image: designThinkingImage,
    link: "https://www.linkedin.com/posts/oshadhi-vanodhya_designthinking-uxevangelizing-teampurple-activity-7165047449475117056-o_36?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU",
  },
  {
    id: "12",
    title: "Design Thinking for XR",
    format: "Workshop",
    topic: "Other",
    eventOrPlatform: "IX 2023",
    date: "Jul 2023",
    summary:
      "Design thinking for XR (Extended Reality) and workshop for writing good user interview questiona and empathy maps",
    image: xrWorkshopImage,
    link: "https://drive.google.com/file/d/1ZXJNHZkdRl-ocZmoDUvP8H17_p_ixpHB/view?pli=1",
  },
  {
    id: "13",
    title: "Judging Panel for Final Round",
    format: "Panel",
    topic: "Other",
    eventOrPlatform: "IX 2023 Design Hackathon",
    date: "Jul 2023",
    summary: "Sharing advice and judging design submissions",
    image: judgingPanelImage,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-6cd27d3f4de34664bd69ebde6314f7de#5d419a5e3858495da3e3a507f6f322d2",
  },
  {
    id: "14",
    title: "Official judging panel for DesignSprint",
    format: "Panel",
    topic: "Leadership",
    eventOrPlatform: "CodeSprint 7.0",
    date: "Apr 2023",
    summary:
      "Helped to formulate the judging criteria by collaborating with other design sprint judges",
    image: designSprintJudgeImage,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-6cd27d3f4de34664bd69ebde6314f7de#5d419a5e3858495da3e3a507f6f322d2",
  },
  {
    id: "15",
    title: "Life of a UX Designer",
    format: "Talk",
    topic: "Leadership",
    eventOrPlatform: "CodeSprint 7.0",
    date: "Aug 2022",
    summary:
      "Coached & evangelized on UX by presenting to 300+ employees which persuaded to hire more UX designers in BA groups",
    image: uxCoachingImage,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-6cd27d3f4de34664bd69ebde6314f7de#b6cab08c518f413d95b1593598f6661f",
  },
  {
    id: "16",
    title: "Curtin Univeristy Students",
    format: "Panel",
    topic: "Leadership",
    eventOrPlatform: "Industry Visit",
    date: "Apr 2022",
    summary: "Share insights on soft skills for Curtin university students",
    image: curtinLectureImage,
    link: "#",
  },
  {
    id: "17",
    title: "Why UX Design Matters",
    format: "Talk",
    topic: "Other",
    eventOrPlatform: "Design Code 2022",
    date: "Dec 2022",
    summary:
      "Guest lecture session on “Why UX Design Matters” at ‘Design Code 2022’ for 100+ students",
    image: designCode2022Image,
    link: "https://vanodhya-oshadhi.notion.site/Design-Events-6cd27d3f4de34664bd69ebde6314f7de#5d419a5e3858495da3e3a507f6f322d2",
  },
];

const ITEMS_PER_PAGE = 6;

export function SpeakingJournalPage() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const topics = [
    "All",
    "Leadership",
    "Enterprise UX",
    "AI",
    "Design Careers",
    "Other",
  ];
  const formats = ["All", "Talk", "Panel", "Workshop", "Article"];

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTopic, selectedFormat]);

  const filteredContent = contentData.filter((item) => {
    const topicMatch = selectedTopic === "All" || item.topic === selectedTopic;
    const formatMatch =
      selectedFormat === "All" || item.format === selectedFormat;
    return topicMatch && formatMatch;
  });

  const totalPages = Math.ceil(filteredContent.length / ITEMS_PER_PAGE);
  const currentContent = filteredContent.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const getIcon = (format) => {
    switch (format) {
      case "Talk":
        return <Mic className="w-4 h-4" />;
      case "Panel":
        return <Users className="w-4 h-4" />;
      case "Workshop":
        return <Video className="w-4 h-4" />;
      case "Article":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <style>{`
          @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
          @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
          @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
          @property --gradient-shine { syntax: "<color>"; initial-value: #2dd4bf; inherits: false; }

          .shiny-cta {
            --gradient-angle: 0deg;
            --gradient-angle-offset: 0deg;
            --gradient-percent: 20%;
            --gradient-shine: #2dd4bf;
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 1rem 2rem;
            font-weight: 500;
            color: #ffffff;
            background: linear-gradient(#020617, #020617) padding-box,
              conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                transparent 0%,
                #0d9488 5%,
                var(--gradient-shine) 15%,
                #0d9488 30%,
                transparent 40%,
                transparent 100%
              ) border-box;
            border: 3px solid transparent;
            box-shadow: inset 0 0 0 1px #1a1818;
            transition: box-shadow 0.3s;
            animation: border-spin 2.5s linear infinite;
          }
          @keyframes border-spin { to { --gradient-angle: 360deg; } }

          .shiny-cta::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.15), transparent 70%);
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight italic">
            Sharing the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              journey
            </span>
            ,<br />
            one story at a time.
          </h1>

          <p className="text-lg text-slate-400 max-w-4xl leading-relaxed mb-8">
            I believe knowledge grows when shared. Whether it's on stage, in a
            workshop, or through writing, I love exploring the intersection of
            design, leadership, and technology.
          </p>

          <div className="mb-10">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Mic className="w-4 h-4 text-teal-400" />
              Topics I can speak about
            </h3>

            <div className="flex flex-wrap gap-2 max-w-3xl">
              {[
                "Design thinking",
                "How I AI",
                "Designing AI workflows people trust",
                "Developer experience: reducing cognitive load",
                "Enterprise UX: creating adoption-ready flows",
                "Storytelling",
                "Growing UX maturity",
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:text-white hover:border-teal-500/30 transition-colors cursor-default"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#/contact"
            className="shiny-cta inline-flex items-center gap-2 group"
          >
            <span>Invite me to Speak</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl mb-12">
        <div className="flex flex-col md:flex-row gap-8 pb-8 border-b border-white/5">
          {/* Topic Filter */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold flex items-center gap-2">
              <Filter className="w-3 h-3" /> Topic
            </div>

            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-200 ${
                    selectedTopic === topic
                      ? "bg-teal-500/10 border-teal-500/50 text-teal-300"
                      : "bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Format Filter */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              Format
            </div>

            <div className="flex flex-wrap gap-2">
              {formats.map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`px-3 py-1.5 text-sm rounded-full border transition-all duration-200 ${
                    selectedFormat === format
                      ? "bg-blue-500/10 border-blue-500/50 text-blue-300"
                      : "bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <AnimatePresence mode="popLayout">
            {currentContent.map((item) => {
              const hasLink = item.link && item.link !== "#";

              const cardInner = (
                <>
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6 bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span
                        className={`flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/5 ${
                          item.format === "Article"
                            ? "text-blue-300"
                            : "text-teal-300"
                        }`}
                      >
                        {getIcon(item.format)} {item.format}
                      </span>

                      <span className="px-2 py-1 rounded bg-white/5 border border-white/5">
                        {item.topic}
                      </span>
                    </div>

                    <span className="text-xs text-slate-600 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                    {item.eventOrPlatform}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-3 flex-grow">
                    {item.summary}
                  </p>

                  {hasLink && (
                    <div className="pt-2 mt-auto border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-teal-400 transition-colors">
                        READ MORE
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </>
              );

              const className =
                "group relative bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 hover:border-teal-500/30 transition-all duration-300 flex flex-col h-full text-left";

              const anim = {
                layout: true,
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.95 },
                transition: { duration: 0.3 },
              };

              return hasLink ? (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  {...anim}
                >
                  {cardInner}
                </motion.a>
              ) : (
                <motion.div key={item.id} className={className} {...anim}>
                  {cardInner}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-slate-900/50 border border-white/10 text-slate-400 hover:text-white hover:border-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-sm text-slate-500 font-mono">
              Page <span className="text-teal-400">{currentPage}</span> of{" "}
              {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-slate-900/50 border border-white/10 text-slate-400 hover:text-white hover:border-teal-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {filteredContent.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p>No content found for the selected filters.</p>
            <button
              onClick={() => {
                setSelectedTopic("All");
                setSelectedFormat("All");
              }}
              className="mt-4 text-teal-400 hover:text-teal-300 underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
