import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-[#0a0114]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-400 to-orange-300" />
                AI Automation Agency
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Scale with autonomous agents, not headcount
              </h1>
              <p className="text-base sm:text-lg text-white/70 max-w-xl">
                We design and deploy AI agents that work 24/7 across your ops: lead gen, support, workflows and data. Modern, reliable, measurable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="#contact" className="inline-flex justify-center items-center rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors shadow ring-1 ring-white/20">
                  Book a strategy call
                </a>
                <a href="#services" className="inline-flex justify-center items-center rounded-md bg-white/5 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors ring-1 ring-white/10">
                  Explore services
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/20">
              <Spline
                scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
              {/* Subtle gradient aura overlay that doesn't block interactions */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-orange-400/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-24 right-1/2 h-72 w-72 sm:h-[24rem] sm:w-[24rem] translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/20 to-orange-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-6rem] left-1/3 h-72 w-72 sm:h-[22rem] sm:w-[22rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />
    </section>
  );
}
