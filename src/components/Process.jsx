import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    desc: "We map your workflows, data sources and success metrics.",
  },
  {
    title: "Design",
    desc: "We architect agents, prompts, tools and guardrails.",
  },
  {
    title: "Deployment",
    desc: "We implement, integrate and test against real scenarios.",
  },
  {
    title: "Scale",
    desc: "We monitor, optimize and expand into new functions.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">How we work</h2>
          <p className="mt-3 text-white/70">A proven delivery model for fast, safe impact.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6"
            >
              <div className="absolute -top-3 -left-3 h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 text-white font-semibold shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-purple-500/10 via-fuchsia-500/10 to-transparent blur-2xl" />
    </section>
  );
}
