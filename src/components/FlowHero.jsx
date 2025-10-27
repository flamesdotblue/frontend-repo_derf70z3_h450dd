import Spline from "@splinetool/react-spline";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function FlowHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useTransform(mx, [-1, 1], ["0%", "100%"]);
  const glowY = useTransform(my, [-1, 1], ["0%", "100%"]);

  function onMouseMove(e) {
    const { innerWidth: w, innerHeight: h } = window;
    const x = (e.clientX / w) * 2 - 1;
    const y = (e.clientY / h) * 2 - 1;
    mx.set(x);
    my.set(y);
  }

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[92vh] bg-black overflow-hidden"
    >
      {/* Reactive light field */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 60%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(600px 300px at 60% 40%, rgba(251,146,60,0.10), transparent 60%)",
          backgroundPosition: glowX.get() + " " + glowY.get(),
        }}
      />

      {/* Spline scene */}
      <div className="relative h-[70vh] sm:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Intro copy layered above */}
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl sm:text-6xl font-semibold tracking-tight"
          >
            Automations that assemble themselves
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl text-white/70"
          >
            Follow the flow as agents connect, data streams, and outcomes emerge—no
            dashboards, just a living system.
          </motion.p>
        </div>
      </div>

      {/* Continuation path to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.0" />
              <stop offset="40%" stopColor="#a855f7" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#fb923c" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0 80 C 240 40, 480 120, 720 80 S 1200 40, 1440 80"
            fill="none"
            stroke="url(#g1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
