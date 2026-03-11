import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Leaf,
  Lock,
  TrendingUp,
  Target,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { PasswordModal } from "../PasswordModal";
import sustainability from "../../assets/Sustainability.mp4";

export function IfsSustainabilityGuestOverview() {
  const navigate = useNavigate();
  const { unlockProject } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const projectId = "ifs-sustainability";
  const projectTitle = "IFS Sustainability Management";
  const projectUrl = window.location.href;

  const metrics = [
    {
      value: "6M+ EUR",
      label: "Total Contract Value",
      description: "Influenced TCV within 11 months",
    },
    {
      value: "1M+ EUR",
      label: "Annual Recurring Revenue",
      description: "Achieved within 11 months of release",
    },
    {
      value: "33%",
      label: "Support Resolution",
      description: "Improved First Contact Resolution",
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
        "https://www.figma.com/proto/xaFwsR9tCrMeXkCCrT9dlj/Portfolio---Latest?node-id=2484-4881&t=vAucQBEQFeC4tcCi-1&scaling=contain&content-scaling=fixed&page-id=2447%3A20&starting-point-node-id=2449%3A90",
        "_blank",
      );
    }
    return success;
  };

  return (
    <article className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30">
      {/* 1. TOP: Impact Summary & Metrics */}
      <header className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/30 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            <span>Sustainability Management</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            From uncertainty to certainty with IFS Sustainability Management
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            Shaping a new sustainability offering that reached 6M+ EUR TCV and
            1M+ EUR ARR within 10 months, and improving first contact resolution
            by 33% for sustainability support.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-teal-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-emerald-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Video */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-teal-900/20">
          <video
            src={sustainability}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </header>

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32">
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-teal-500" />
              The Challenge
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                When I joined the IFS Sustainability initiative, we had a big
                investment ahead of us, a new collaboration with PwC, and a lot
                of unresolved questions.
              </p>
              <p>
                We were still figuring out what sustainability management should
                look like in practice, how should we help IFS customers navigate
                the CSRD regulations smoothly, and how customers would actually
                solve the data siloed problem.
              </p>
              <p>
                On top of that, my time was limited to roughly 1.5–2 days per
                week, the domain was new, and design maturity was still
                emerging.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-teal-500" />
              My Role & Focus
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Role
                </h3>
                <p className="text-slate-300">
                  UX Strategy, Stakeholder Interviews, Design Workshops, User
                  Research, Service Design
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Actions
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-400">
                  <li>Structured discovery & EDA artefacts</li>
                  <li>Jobs to be Done & Personas</li>
                  <li>Customer Focus Group (3.7/5 NPS)</li>
                  <li>Service Design for Emission Tracker</li>
                  <li>Mentoring a new UX designer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2.5 KEY OUTCOMES */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-teal-500" />
              Impact & Results
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Unblocked Enterprise Client</span>
                </div>
                <p className="text-sm text-slate-400">
                  Improved first contact resolution for the sustainability
                  product by 33% by addressing critical blockers in the service
                  journey.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strong Market Traction</span>
                </div>
                <p className="text-sm text-slate-400">
                  Team reached 6M EUR in TCV and 1M EUR in ARR within 11 months
                  of release.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Validated Customer Interest</span>
                </div>
                <p className="text-sm text-slate-400">
                  Achieved 3.7/5 NPS in focus groups with 74% of customers
                  expressing interest in the platform.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-teal-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Reusable Design Foundation</span>
                </div>
                <p className="text-sm text-slate-400">
                  Created personas, user story maps, and frameworks reused in
                  later work, reducing onboarding time for other teams.
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
            className="relative bg-gradient-to-br from-teal-950/40 via-slate-900/40 to-emerald-950/40 border border-teal-500/20 rounded-3xl p-12 text-center backdrop-blur-sm overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />

            <div className="relative z-10">
              {/* Lock icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <Lock className="w-10 h-10 text-teal-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Want to see the full story?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Unlock the complete case study to explore the detailed discovery
                process, persona development, focus group insights, and the
                strategic service design work that drove these results.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                <button
                  onClick={() => setShowPasswordModal(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                  <Lock className="w-5 h-5" />
                  Unlock Full Case Study
                </button>

                <Link
                  to="/work"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-white/10 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
        }}
        projectTitle={projectTitle}
      />
    </article>
  );
}
