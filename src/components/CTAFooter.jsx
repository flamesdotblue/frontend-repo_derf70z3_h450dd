import { Mail } from "lucide-react";

export default function CTAFooter() {
  return (
    <section id="contact" className="relative bg-[#07010f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.02] p-8 sm:p-12 overflow-hidden relative">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/30 via-fuchsia-500/20 to-orange-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to automate?</h3>
            <p className="mt-3 text-white/70 max-w-2xl">Tell us your goal. We’ll come prepared with a plan, timeline and ROI model.</p>

            <form
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const email = data.get("email");
                const msg = data.get("message");
                const subject = encodeURIComponent("AI Automation Inquiry");
                const body = encodeURIComponent(`Email: ${email}\n\n${msg}`);
                window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
              }}
            >
              <input
                name="email"
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-md bg-black/60 text-white placeholder:text-white/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30"
              />
              <input
                name="message"
                type="text"
                placeholder="What would you like to automate?"
                className="w-full rounded-md bg-black/60 text-white placeholder:text-white/50 px-4 py-3 ring-1 ring-white/10 focus:outline-none focus:ring-white/30 sm:col-span-2"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors shadow ring-1 ring-white/20 sm:col-span-1"
              >
                <Mail className="h-4 w-4" />
                Request proposal
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Flames AI Automation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
