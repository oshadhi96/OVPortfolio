import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Lock,
  TrendingUp,
  Target,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { PasswordModal } from "../PasswordModal";
import aiVideo from "../../assets/AIvideo.mp4";

export function IfsAiGuestOverview() {
  const navigate = useNavigate();
  const { unlockProject } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const projectId = "ifs-ai";
  const projectTitle = "IFS.ai ML Portal";
  const projectUrl = "/work/ifs-ai";

  const metrics = [
    {
      value: "1.77mo",
      label: "Faster Onboarding",
      description: "Reduction in time-to-productivity for engineers",
    },
    {
      value: "4.11 / 5",
      label: "User Satisfaction",
      description: "Post-release survey score for overall experience",
    },
    {
      value: "15",
      label: "Issues Fixed",
      description:
        "Identified and fixed 5 high, 5 medium, and 5 low priority UX issues",
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
      navigate(projectUrl);
    }

    return success;
  };

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-violet-500/30">
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Internal Tooling</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Accelerating innovation by enhancing developer experience in AI Dev
            Portal
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            By restructuring the information architecture and simplifying
            technical terminology, we cut the onboarding time for R&amp;D
            engineers by{" "}
            <span className="text-violet-400 font-medium">1.77 months</span>.
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
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-violet-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </motion.li>
          ))}
        </ul>

        {/* Hero Video */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-violet-900/20">
          <video
            src={aiVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">
              ifs.ai Developer Portal 2.0
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32">
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-violet-500" />
              The Challenge
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                The <strong className="text-white">ML Developer Portal</strong>{" "}
                is an internal tool within the IFS.ai ecosystem used by solution
                engineers to explore data and configure experiments.
              </p>
              <p>
                However, it was initially developed without UX support. Landing
                pages looked empty, terminology like "EDA" was confusing (67% of
                users couldn&apos;t explain it), and help was buried.
              </p>
              <p>
                Developers could technically complete tasks, but they were
                burning time figuring out where to start. This friction slowed
                onboarding and hurt confidence in the portal as the foundation
                for IFS.ai use cases.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-violet-500" />
              My Role &amp; Focus
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Role
                </h3>
                <p className="text-slate-300">
                  Sole UX &amp; UI Designer (End-to-End)
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Key Actions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Conducted UX audit</li>
                  <li>
                    Pitched &amp; led moderated Usability Testing (6 sessions)
                  </li>
                  <li>Information Architecture Restructuring</li>
                  <li>
                    Initiated UI design revamp (Home, Datasets, Experiments for
                    ML and LLM)
                  </li>
                  <li>Accessibility Annotations &amp; Dev Specs</li>
                  <li>Designed components utilizing IFS Design system</li>
                  <li>Design QA &amp; Front-end code Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 KEY OUTCOMES */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-violet-500" />
              Impact &amp; Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-violet-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Developers learned faster</span>
                </div>
                <p className="text-sm text-slate-400">
                  Clearer language and flows reduced training time and surfaced
                  a potential{" "}
                  <strong className="text-violet-400">
                    1.77-month reduction
                  </strong>{" "}
                  in total R&amp;D onboarding effort.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-violet-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Experience felt friendlier</span>
                </div>
                <p className="text-sm text-slate-400">
                  The post-release survey scored{" "}
                  <strong className="text-violet-400">4.11 / 5</strong>. One SE
                  shared: "The overall layout design is user friendly."
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-violet-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Team confidence increased</span>
                </div>
                <p className="text-sm text-slate-400">
                  The Automation team felt more proud and motivated about the
                  product, and usability insights helped align the wider IFS.ai
                  strategy around developer experience.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-violet-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Improved Consistency</span>
                </div>
                <p className="text-sm text-slate-400">
                  Successfully integrated IFS Design System tokens, ensuring the
                  portal looks and feels like part of the broader IFS Cloud
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UNLOCK PROMPT - Guest View End */}
        <section className="relative">
          {/* Gradient fade effect */}
          <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#020617] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-violet-950/40 via-slate-900/40 to-indigo-950/40 border border-violet-500/20 rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />

            <div className="relative z-10">
              {/* Lock icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Lock className="w-10 h-10 text-violet-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Want to see the full story?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Unlock the complete case study to explore the detailed discovery
                process, usability testing insights, before/after UI
                comparisons, and the journey mapping that drove these results.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 flex items-center justify-center gap-2"
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

              <p className="text-sm text-slate-500 mt-8">
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
        }}
        projectTitle={projectTitle}
      />
    </article>
  );
}
