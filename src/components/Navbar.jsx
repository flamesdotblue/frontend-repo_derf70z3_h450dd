import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="relative grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-orange-400 shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Flames AI Automation</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors shadow ring-1 ring-white/20">
              <Rocket className="h-4 w-4" />
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
