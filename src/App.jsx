import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CTAFooter from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CTAFooter />
      </main>
    </div>
  );
}
