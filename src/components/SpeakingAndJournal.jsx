import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Mic2,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import xrHackathonImage from "figma:asset/d28d7f6b3a41fbad64bc3d49916d40007ca9ec78.png";
import ifsGuildExpoImage from "figma:asset/5888b52f30c3730e13613f99adb36bee71e17cfd.png";
import maximizingRoiImage from "figma:asset/f8afede70941bb9fec2a7c6540e2af2c686ea384.png";

const items = [
  {
    id: 1,
    type: "Talk",
    title: "Maximizing ROI: Designing AI Solutions that deliver impact",
    description:
      "Exploring new paradigms in interaction design as we move from command-based interfaces to intent-based systems.",
    event: "Australia 2024",
    date: "Oct 2024",
    tags: ["AI", "UX", "Future of Work"],
    image: maximizingRoiImage,
  },
  {
    id: 2,
    type: "Panel Discussion",
    title: "'UX Guild' at IFS R&D Career & Guild Expo",
    description:
      "Shared thoughts to 1000+ colleagues on; What's happening at UX Guild and our aims Shared some examples of how we can use research data to make our designs intuitive for better interaction designing How our UX designers collaborate with roles such as SEs, Product managers, Programme Managers, QA, and many other roles at RnD.",
    event: "IFS Conference",
    date: "Sep 2023",
    tags: ["Design Culture", "Design Ops", "UX"],
    image: ifsGuildExpoImage,
  },
  {
    id: 3,
    type: "Judging panel",
    title: "IX 2023",
    description: "Contributed to the final round of judging submissions.",
    event: "XR related hackathon",
    date: "Feb 2023",
    tags: ["Mentoring", "XR", "Hackathon"],
    image: xrHackathonImage,
  },
];

export function SpeakingAndJournal() {
  return (
    <section id="journal" className="py-24 relative">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-8xl px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-6">
              Giving back to Community..
            </h2>
            <p className="text-slate-400 text-lg">
              I believe in growing the design community by sharing knowledge and
              experiences. I actively speak at conferences and mentor aspiring
              designers.
            </p>
          </motion.div>

          <Link to="/journal">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center gap-2 text-violet-300 hover:text-white transition-colors group"
            >
              <span className="font-medium">View speaking and journal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex h-full"
            >
              <a
                href={
                  item.id === 1
                    ? "https://www.linkedin.com/posts/oshadhi-vanodhya_melbourne-ecommerce-recruitment-activity-7248658550460145664-9I58?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU"
                    : item.id === 2
                      ? "https://www.linkedin.com/posts/oshadhi-vanodhya_ifs-uxmaturity-ux-activity-7119167151189463040-AM1H?utm_source=share&utm_medium=member_desktop&rcm=ACoAABrk3dsBuajxKqlKkKcoMsgKfARhYCQboaU"
                      : item.id === 3
                        ? "https://vanodhya-oshadhi.notion.site/Design-Events-a7e738a3649c4869b3a847f9e9f7ac34?pvs=97#65ed6fce3e8f442ea4f42c3b37adaf96"
                        : "#"
                }
                target={
                  item.id === 1 || item.id === 2 || item.id === 3
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.id === 1 || item.id === 2 || item.id === 3
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative flex flex-col w-full bg-slate-900/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-slate-900/60 hover:border-violet-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <div className="relative h-88 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 z-10" />
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      className={`
                        ${item.type === "Talk" ? "bg-violet-500/20 text-violet-200 border-violet-500/30" : "bg-emerald-500/20 text-emerald-200 border-emerald-500/30"} 
                        backdrop-blur-md border hover:bg-opacity-30
                      `}
                    >
                      {item.type === "Talk" ? (
                        <Mic2 className="w-3 h-3 mr-1" />
                      ) : (
                        <FileText className="w-3 h-3 mr-1" />
                      )}
                      {item.type}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center text-xs text-slate-400 mb-2 gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="w-1 h-1 bg-slate-600 rounded-full" />
                    <span className="uppercase tracking-wide font-medium text-slate-400">
                      {item.event}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-violet-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-0 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-2 border-t border-white/5 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {(item.id === 1 || item.id === 2) && (
                  <span className="sr-only">(opens in a new tab)</span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/journal"
            className="flex w-full justify-center items-center gap-2 px-6 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700 transition-colors"
          >
            <span>View speaking and journal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
