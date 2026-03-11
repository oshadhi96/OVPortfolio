import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Monitor,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { PasswordModal } from "../PasswordModal";
import swedishFitnessOverview from "figma:asset/4b51bd1606c56d09a50e4a0d2b3123a5ff5e3e9f.png";

export function SwedishFitnessGuestOverview() {
  const navigate = useNavigate();
  const { unlockProject, isProjectUnlocked } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const projectId = "brp-systems";
  const projectTitle =
    "Swedish Fitness - Defining the future fitness experience";
  const projectUrl = window.location.href;

  const metrics = [
    {
      value: "3.5M+",
      label: "End users",
      description:
        "Fitnes enterprise provider for 2500+ facilities in Nordics region",
    },
    {
      value: "1000+",
      label: "Components",
      description: "Scalable design system for future releases",
    },
    {
      value: "2+",
      label: "Design Workshops",
      description:
        "Conducted workshops with Rootcode and Client's team to align on vision",
    },
  ];

  const handleUnlock = async (password) => {
    const success = await unlockProject(
      projectId,
      password,
      projectUrl,
      projectTitle,
    );
    if (success) {
      setShowPasswordModal(false);
      window.open(
        "https://www.notion.so/vanodhya-oshadhi/Defining-the-future-fitness-experience-for-one-of-Sweden-s-largest-B2B-enterprise-software-solution--653a1b12d8fd46738e821381c78e08a8",
        "_blank",
      );
    }
    return success;
  };

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/30 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Monitor className="w-4 h-4" />
            <span>Enterprise B2B Software</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight not-italic">
            Defining the future fitness experience for one of Sweden's largest
            B2B enterprise software solution providers 🇸🇪
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            An all-in-one management software platform that contributes to the
            growth and profit of fitness businesses while improving end-user
            satisfaction. Designed and implemented a white-labelled mobile and
            web application to phase out the legacy system.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" role="list">
          {metrics.map((metric, idx) => (
            <motion.li
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </motion.li>
          ))}
        </ul>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-indigo-900/20">
          <img
            src={swedishFitnessOverview}
            alt="Swedish Fitness ERP System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">
              Enterprise Fitness Management System
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32">
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-500" />
              Project Overview
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  The Challenge
                </h3>
                <p>
                  The fitness industry's leading B2B software provider needed to
                  phase out their legacy system and deliver a white-labelled
                  mobile and web application. The goal: create an intelligent,
                  intuitive, and future-proof platform delivering great
                  end-to-end UX for all customers—from tech-savvy power users to
                  less advanced, small-scale operators.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Project Timeline
                </h3>
                <p>More than 7 months (2021)</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Team
                </h3>
                <p>
                  Rootcode team with cross-functional collaboration including
                  Nordic designer 🇩🇰 from the client's team
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-500" />
              My Role & Activities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Responsibilities
                </h3>
                <p>
                  UX Design, UI Design, Led 2 Junior UX Designers, Requirements
                  Management
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Activities
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Led design workshops to establish project vision</li>
                  <li>Mentored junior designers through market research</li>
                  <li>Wireframes, personas & requirement analysis</li>
                  <li>Designed clickable prototypes for user feedback</li>
                  <li>Led weekly brainstorming sessions</li>
                  <li>
                    Design system development & guidance on managing design
                    system
                  </li>
                  <li>
                    Collaborated with the product manager to identify necessary
                    backend infrastructure (APIs) or phase out in the roadmap.
                  </li>
                  <li>Cross-functional collaboration</li>
                  <li>Accessibility implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Story */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-950/30 to-slate-900/30 p-8 md:p-12"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🎉</span>
                Customer Success Story
              </h2>
              <blockquote className="space-y-4">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed italic">
                  "The{" "}
                  <mark className="bg-green-500/20 text-green-300 px-1">
                    implementation has been extremely good and smooth
                  </mark>
                  . It has also been simpler than I thought. First of all, [...]
                  Furthermore, some of the associations that have gone live,{" "}
                  <mark className="bg-green-500/20 text-green-300 px-1">
                    have even gone live one week ahead of schedule
                  </mark>
                  , so the implementation has also been faster."
                </p>
                <footer className="text-sm text-slate-400 not-italic">
                  — Client Testimonial
                </footer>
              </blockquote>
              <a
                href="https://www.brpsystems.com/customer-stories/friskissvettis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                <span className="border-b border-indigo-400/50 group-hover:border-indigo-300">
                  Read full customer story
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* 2.5 KEY OUTCOMES */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif text-white mb-8">
              Key Outcomes & Learnings
            </h2>
            <ul className="grid md:grid-cols-2 gap-8" role="list">
              <li className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Learnt About Swedish Culture</span>
                </div>
                <p className="text-sm text-slate-400">
                  One of my very first enterprise projects collaborating with a
                  Nordic designer from the client's end, providing invaluable
                  cross-cultural experience.
                </p>
              </li>
              <li className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>87% On-Time Delivery</span>
                </div>
                <p className="text-sm text-slate-400">
                  Successfully managed requirements and changes through close
                  collaboration with the client's team via weekly sync-up calls
                  for design reviews.
                </p>
              </li>
              <li className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Improved Mentoring Skills</span>
                </div>
                <p className="text-sm text-slate-400">
                  Successfully guided two junior designers (Dinushi and Nishaz)
                  through this challenging project, learning the importance of
                  showing vision and enabling team growth.
                </p>
              </li>
              <li className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Scalable Design System</span>
                </div>
                <p className="text-sm text-slate-400">
                  Maintained 1000+ components from project initiation, ensuring
                  consistency and enabling future releases with reduced design
                  overhead.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* UNLOCK PROMPT - Guest View End */}
        <section className="relative">
          {/* Gradient fade effect */}
          <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-indigo-950/40 via-slate-900/40 to-purple-950/40 border border-indigo-500/20 rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />

            <div className="relative z-10">
              {/* Lock icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <Lock className="w-10 h-10 text-indigo-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Want to see the full story?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Unlock the complete case study to explore the detailed design
                process, user research findings, enterprise design system, and
                how we transformed legacy ERP software into a modern fitness
                management platform.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Unlock Full Case Study
                </button>

                <Link
                  to="/work"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-sm text-slate-400 mt-8">
                This case study is password protected. Contact me for access.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Bottom spacing */}
        <div className="h-20" />
      </main>

      {/* Password Modal */}
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onUnlock={handleUnlock}
        onViewAsGuest={() => {
          setShowPasswordModal(false);
          // Already in guest view, just close modal
        }}
        projectTitle={projectTitle}
      />
    </article>
  );
}
