import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FlowCTA() {
  return (
    <section id="contact" className="relative bg-black overflow-hidden">
      {/* flowing underline into CTA */}
      <svg className="absolute -top-24 left-0 right-0 w-full h-28" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cta" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 80 C 240 120, 480 40, 720 80 S 1200 120, 1440 80"
          fill="none"
          stroke="url(#cta)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2 }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.h4
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-5xl font-semibold text-center"
        >
          Ready to watch your automations build themselves?
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/70 text-center max-w-2xl mx-auto"
        >
          Share a goal—sales, support, ops—and we’ll return with a living flow you can run tomorrow.
        </motion.p>

        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const email = data.get("email");
            const msg = data.get("message");
            const subject = encodeURIComponent("AI Automation Inquiry");
            const body = encodeURIComponent(`Email: ${email}\n\n${msg}`);
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Work email"
            className="w-full sm:w-72 rounded-md bg-white/5 text-white placeholder:text-white/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30"
          />
          <input
            name="message"
            type="text"
            placeholder="What should the flow achieve?"
            className="w-full sm:w-96 rounded-md bg-white/5 text-white placeholder:text-white/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors ring-1 ring-white/20"
          >
            Send
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.form>
      </div>

      {/* ambience */}
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 bg-orange-400/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -top-10 right-1/3 h-72 w-72 bg-purple-500/20 blur-3xl rounded-full" />
    </section>
  );
}
