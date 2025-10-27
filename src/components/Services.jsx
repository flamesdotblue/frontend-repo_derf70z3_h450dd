import { Bot, Workflow, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Sales & Lead Gen",
    desc: "Outbound agents that research, personalize and book meetings autonomously.",
    icon: Zap,
  },
  {
    title: "Customer Support Agents",
    desc: "Voice and chat agents trained on your knowledge base with human-level empathy.",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    desc: "Orchestrate multi-step ops across CRMs, sheets, docs and APIs with reliability.",
    icon: Workflow,
  },
  {
    title: "Compliance & Guardrails",
    desc: "Policy, data privacy and approval gates built-in for safe enterprise rollouts.",
    icon: Shield,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#07010f] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">What we build</h2>
          <p className="mt-3 text-white/70">Production-grade automations and agents designed around your KPIs.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5 hover:bg-white/[0.05] transition-colors"
            >
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-purple-500 to-orange-400 grid place-items-center mb-4 shadow-lg">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 max-w-5xl bg-gradient-to-r from-purple-500/20 via-fuchsia-500/10 to-orange-400/20 blur-3xl" />
    </section>
  );
}
