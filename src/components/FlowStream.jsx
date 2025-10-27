import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FlowStream() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dash = useTransform(scrollYProgress, [0, 1], [1200, 0]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <section ref={ref} className="relative bg-[#06030b] min-h-[90vh] overflow-hidden">
      {/* flowing SVG path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M 0 120 Q 220 200 400 160 T 800 220 T 1200 140 T 1440 220"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ strokeDasharray: 6, strokeDashoffset: dash }}
        />
        <motion.path
          d="M 0 520 Q 260 420 520 520 T 980 440 T 1440 520"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ strokeDasharray: 8, strokeDashoffset: dash }}
        />
        <motion.path
          d="M 0 860 Q 300 740 640 860 T 1080 780 T 1440 860"
          fill="none"
          stroke="url(#flow)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
          style={{ strokeDasharray: 10, strokeDashoffset: dash }}
        />
      </svg>

      {/* floating nodes along the stream */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="space-y-28">
          <Node title="Listen" desc="Agents observe events and ingest context across tools." x="15%" y="120px" progress={scrollYProgress} />
          <Node title="Reason" desc="Signals are prioritized; plans and prompts assemble on the fly." x="55%" y="420px" progress={scrollYProgress} />
          <Node title="Act" desc="Multi-step executions fan out reliably with guardrails." x="25%" y="760px" progress={scrollYProgress} />
        </div>
      </div>

      {/* subtle global glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 40% at 50% 50%, rgba(124,58,237,0.15), transparent)", opacity: glow }}
      />
    </section>
  );
}

function Node({ title, desc, x, y, progress }) {
  const tx = useTransform(progress, [0, 1], [0, 20]);
  const ty = useTransform(progress, [0, 1], [0, -20]);
  const opacity = useTransform(progress, [0, 0.2, 0.6, 1], [0, 1, 1, 0.9]);

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, translateX: tx, translateY: ty, opacity }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-8 rounded-full"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(168,85,247,0.10)",
              "0 0 0 16px rgba(168,85,247,0.0)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "loop" }}
        />
        <div className="flex items-baseline gap-4">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 shadow-[0_0_24px_rgba(168,85,247,0.8)]" />
          <div>
            <p className="text-white/80 uppercase tracking-[0.2em] text-xs">{title}</p>
            <p className="text-white text-xl sm:text-2xl leading-snug">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
