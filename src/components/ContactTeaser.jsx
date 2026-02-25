import { motion } from "motion/react";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function ContactTeaser() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-900/20 rounded-[100%] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,1))]" />
      </div>

      <div className="container relative mx-auto max-w-8xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-6 tracking-tight">
            I'm <span className="italic text-violet-400">thrilled</span> that
            you are here
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you're a hiring manager looking for a designer, a founder
            building the next big thing, or a community organizer—I'd love to
            connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-base bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.6)] group"
            >
              <a
                href="#/contact"
                className="shiny-cta group focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact me
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Decorative Wave Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        />
      </div>
    </section>
  );
}
