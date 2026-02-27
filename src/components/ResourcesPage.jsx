import { motion } from "motion/react";
import {
  Download,
  Video,
  FileText,
  Coffee,
  Instagram,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Sparkles,
  BookOpen,
  Users,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import expoImage from "figma:asset/1e7f3db186973d4889e0984e089dac0312cc6659.png";

export function ResourcesPage() {
  const resources = [
    {
      category: "Template",
      icon: Download,
      title: "Case Study Notion Template",
      description:
        "A structured template to help you document your design process effectively.",
      link: "#",
      cta: "Duplicate Template",
    },
    {
      category: "Mentoring",
      icon: Coffee,
      title: "1:1 Career Strategy",
      description:
        "Book a 30-minute session to discuss your portfolio, career path, or specific challenges.",
      link: "#",
      cta: "Book on ADPList",
    },
    {
      category: "Article",
      icon: FileText,
      title: "The Junior Designer's Handbook",
      description:
        "A comprehensive guide to landing your first role and surviving the first year.",
      link: "#",
      cta: "Read Guide",
    },
    {
      category: "Template",
      icon: Download,
      title: "Figma Handoff Checklist",
      description:
        "Ensure your designs are developer-ready with this comprehensive checklist.",
      link: "#",
      cta: "Get Figma File",
    },
    {
      category: "Article",
      icon: FileText,
      title: "Understanding UX Research Methods",
      description:
        "When to use what: A cheat sheet for quantitative vs qualitative research.",
      link: "#",
      cta: "Read Article",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-teal-500/30">
      {/* Hero / Mentorship Section Moved Here */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Giving Back</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-white mb-6 leading-tight">
              For students & <br className="hidden md:block" />
              <span className="text-violet-200">early career designers</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Design is better when we grow together. I've had the privilege of
              teaching UX to hundreds of learners and mentoring designers as
              they navigate their first roles in tech.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-violet-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Practical Resources
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Curated toolkits, templates, and reading lists to help you
                    bridge the gap between theory and practice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-violet-400">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    Honest Stories
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Real talk about working in product teams, handling
                    stakeholder feedback, and overcoming imposter syndrome.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8"
                asChild
              >
                <a href="/contact">
                  Request Mentorship
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 text-white hover:bg-white/5 hover:text-violet-300 rounded-full px-8 group"
                asChild
              >
                <a
                  href="https://www.instagram.com/oshadhi.ux/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 w-4 h-4" />
                  Follow oshadhi.ux
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract Visual Representation of Mentorship */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              <img
                src="https://scontent.fper6-1.fna.fbcdn.net/v/t39.30808-6/490585378_1248068300658788_2130582136760273458_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ayWcJzN6CuoQ7kNvwGOkzO3&_nc_oc=Adm-G2C9TQkvdzA5NmfR30v0YEplPrumduzBN4dm8kv9BJa9G9qLU1bEsW6yfh6NxQs3cavMRu7MvSuCkM5Gpqyt&_nc_zt=23&_nc_ht=scontent.fper6-1.fna&_nc_gid=CgkotdoFF7LrYGMzCzfQfg&oh=00_AfqmlfjF1HjaqzSYVJoHo96pspYtd9Y0hVWSVd5lAFIUEQ&oe=697773F1"
                className="w-full h-full object-cover opacity-80"
              />
              <ImageWithFallback
                src={expoImage}
                alt="R&D Career & Guilds Expo"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Stats/Cards */}
              <div className="absolute bottom-8 left-8 right-8 grid gap-4">
                <Card className="bg-slate-900/80 backdrop-blur-md border-white/10 text-white">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 bg-violet-500/20 rounded-lg text-violet-300">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold font-serif italic">
                        1617+
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">
                        Students Taught
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/80 backdrop-blur-md border-white/10 text-white ml-auto max-w-[200px] hidden md:block transform translate-x-4">
                  <CardContent className="p-4">
                    <div className="flex -space-x-2 mb-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold"
                        >
                          {i === 3 ? "+" : ""}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-300 font-medium">
                      "Oshadhi's mentorship changed my career trajectory."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-900/60 hover:border-teal-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>

              <div className="text-xs font-bold tracking-widest text-[rgb(156,167,186)] mb-2 uppercase">
                {item.category}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 mt-auto cursor-not-allowed">
                Available Soon <Sparkles className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social CTA */}
      <section className="px-4 sm:px-6 lg:px-8 container mx-auto max-w-8xl pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-br from-slate-900 to-[#050f2c] border border-white/10 rounded-3xl p-8 md:p-12 text-center md:text-left relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                Keep the conversation going
              </h2>
              <p className="text-slate-400 max-w-lg mb-0">
                I share daily design tips, process behind-the-scenes, and career
                advice on social media. Come say hi!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://www.linkedin.com/in/oshadhi-vanodhya/"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-[#0077b5] hover:bg-[#006097] text-white rounded-xl transition-colors font-medium min-w-[160px]"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect</span>
              </a>
              <a
                href="https://www.instagram.com/oshadhi.ux/"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white rounded-xl transition-opacity font-medium min-w-[160px]"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
