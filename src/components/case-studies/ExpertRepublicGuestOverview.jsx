import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Smartphone,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { PasswordModal } from "../PasswordModal";
import expertRepublicHomepage from "figma:asset/cc690824e11248be9fe4443526735fe6eca9d755.png";
import expertRepublicTestimonials from "figma:asset/5dd958cbfdb0c841b4f47065da24f6b3175d59ca.png";

export function ExpertRepublicGuestOverview() {
  const navigate = useNavigate();
  const { unlockProject, isProjectUnlocked } = useAuth();
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const projectId = "expert-republic";
  const projectTitle = "Expert Republic - Increasing conversion rates";
  const projectUrl = window.location.href;

  const metrics = [
    {
      value: "+30%",
      label: "Conversion Rate",
      description: "Increase in Expert onboarding rate",
    },
    {
      value: "4.5+",
      label: "App Store Rating",
      description: "Maintained a higher rating in iOS and Google Play Store",
    },
    {
      value: "#2",
      label: "Product of the Day",
      description: "In Product Hunt and featured in Estonian E-residency blog",
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
        "https://vanodhya-oshadhi.notion.site/Increasing-conversion-rates-and-reducing-support-costs-to-optimize-businesses-during-COVID-2f431056cf974f6b8a2dd6f37ce9d41f?source=copy_link",
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
            <Smartphone className="w-4 h-4" />
            <span>Mobile & Web Application</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Increasing conversion rates and reducing support costs during
            COVID-19
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            Expert Republic connects professionals with customers through 1-1
            video consultations, allowing professionals to get paid without any
            friction. Born during the COVID-19 pandemic to bridge the gap
            between professional services provided by verified Experts and
            customers worldwide.
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
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm text-center group hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400 mb-2">
                {metric.value}
              </div>
              <div className="text-white font-medium mb-2">{metric.label}</div>
              <div className="text-sm text-slate-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-indigo-900/20">
          <motion.img
            src={expertRepublicHomepage}
            alt="Expert Republic App"
            className="w-full h-[100%] object-cover object-top"
            animate={{
              objectPosition: [
                "50% 0%",
                "50% 0%",
                "50% 100%",
                "50% 100%",
                "50% 0%",
              ],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 text-center md:text-left">
            <span className="text-sm font-mono text-slate-400 bg-black/50 px-3 py-1 rounded border border-white/10">
              Expert Republic - Mobile & Web Platform
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 space-y-32">
        {/* 2. CONTEXT & ROLE */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Layers className="w-6 h-6 text-indigo-500" aria-hidden="true" />
              Project Overview
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  The Challenge
                </h3>
                <p className="text-slate-300">
                  Expert Republic connects professionals with customers through
                  1-1 video consultations, allowing professionals to get paid
                  without any friction.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Project Timeline
                </h3>
                <p className="text-slate-300">10 months (2020)</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Team
                </h3>
                <p className="text-slate-300">
                  Rootcode team - Product Designer, Junior UI/UX Designer,
                  Senior Project Manager, Product Manager, Business Analyst, and
                  CEO
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-serif text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-500" aria-hidden="true" />
              My Role & Activities
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Responsibilities
                </h3>
                <p className="text-slate-300">
                  UI Design, UX Design, Lead 1 Junior UX Designer, User Research
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-2">
                  Key Activities
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Design System</li>
                  <li>Analytics & User Research</li>
                  <li>Competitor Analysis & Focus Groups</li>
                  <li>Interaction Design & UI Design</li>
                  <li>Designs for Product Hunt Campaigns</li>
                  <li>Icons, Illustrations & Lottie Animations</li>
                  <li>Design QA</li>
                  <li>Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Testimonials & Achievements */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img
              src={expertRepublicTestimonials}
              alt="User Testimonials and Achievements"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Press Article */}
          <motion.a
            href="https://medium.com/e-residency-blog/serving-for-the-greater-good-a5cec4e930f"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="block p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-indigo-500/30 transition-all hover:bg-slate-900/70 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="text-sm text-indigo-400 font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
                  Press Article
                </div>
                <h3 className="text-xl text-white group-hover:text-indigo-400 transition-colors">
                  Serving for the Greater Good
                </h3>
                <p className="text-slate-400 text-sm">
                  Featured in Estonian E-Residency Blog
                </p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors flex-shrink-0 mt-1" />
            </div>
          </motion.a>
        </section>

        {/* 2.5 KEY OUTCOMES */}
        <section className="bg-slate-900/50 border-y border-white/5 py-12 -mx-4 sm:-mx-8 px-4 sm:px-8">
          <div className="max-w-8xl mx-auto">
            <h2 className="text-2xl font-serif text-white mb-8">
              Key Outcomes & Learnings
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Increased Expert Onboarding by 30%</span>
                </div>
                <p className="text-sm text-slate-400">
                  Highlighting the effectiveness of a well-designed user journey
                  and strategic improvements to the onboarding flow.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Drove Company Recovery</span>
                </div>
                <p className="text-sm text-slate-400">
                  Contributed to the company's recovery within one year through
                  self-initiatives, user-focused products and design
                  improvements.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Attracted International Customers</span>
                </div>
                <p className="text-sm text-slate-400">
                  Helped attract new international customers for new product
                  collaborations, with the product becoming a key reference case
                  (Swedish Enterprise customers, Gov. related projects).
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Design System for Scalability</span>
                </div>
                <p className="text-sm text-slate-400">
                  Recognized the value of a design system for rebranding and
                  scalability, ensuring consistency and efficiency across the
                  project.
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
                process, user research findings, design system implementation,
                and cross-functional collaboration that led to 30% increase in
                expert onboarding.
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
          // Already in guest view, just close modal
        }}
        projectTitle={projectTitle}
      />
    </article>
  );
}
