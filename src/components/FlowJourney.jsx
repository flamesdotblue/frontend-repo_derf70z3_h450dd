import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FlowJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const dash = useTransform(scrollYProgress, [0, 1], [1800, 0]);

  return (
    <section ref={ref} className="relative bg-[#04020a] min-h-[120vh] overflow-hidden">
      {/* master curve connecting the narrative */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="journey" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 140 Q 360 220 640 160 T 1120 220 T 1440 160 M 0 540 Q 420 420 860 560 T 1440 520 M 0 980 Q 420 1120 900 980 T 1440 960 M 0 1400 Q 420 1300 900 1400 T 1440 1380"
          fill="none"
          stroke="url(#journey)"
          strokeWidth="2"
          style={{ strokeDasharray: 10, strokeDashoffset: dash }}
          strokeLinecap="round"
          opacity={0.8}
        />
      </svg>

      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28" style={{ opacity }}>
        <Stage
          kicker="ingest"
          heading="Your sources light up"
          sub="Docs, CRMs, inboxes, calls—signal becomes structured context."
          align="left"
        />
        <Stage
          kicker="orchestrate"
          heading="Tools chain together"
          sub="Agents draft, validate, branch and retry along the flow."
          align="right"
        />
        <Stage
          kicker="go live"
          heading="Outcomes land where they matter"
          sub="Meetings booked, tickets closed, ops reconciled—continuously."
          align="center"
        />
      </motion.div>

      {/* ambient lighting */}
      <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />
    </section>
  );
}

function Stage({ kicker, heading, sub, align = "left" }) {
  const base = "my-28";
  const alignCls =
    align === "left"
      ? "text-left sm:max-w-xl"
      : align === "right"
      ? "text-right sm:ml-auto sm:max-w-xl"
      : "text-center sm:max-w-2xl mx-auto";

  return (
    <div className={`${base} ${alignCls}`}>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="uppercase tracking-[0.25em] text-xs text-white/60"
      >
        {kicker}
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl sm:text-5xl text-white font-semibold"
      >
        {heading}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-white/70 text-lg"
      >
        {sub}
      </motion.p>
    </div>
  );
}
