import Navbar from "./components/Navbar";
import FlowHero from "./components/FlowHero";
import FlowStream from "./components/FlowStream";
import FlowJourney from "./components/FlowJourney";
import FlowCTA from "./components/FlowCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <FlowHero />
        <FlowStream />
        <FlowJourney />
        <FlowCTA />
      </main>
    </div>
  );
}
