import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Programs } from "@/components/Programs";
import { Projects } from "@/components/Projects";
import { Campaigns } from "@/components/Campaigns";
import { DonateWidget } from "@/components/DonateWidget";

const Home = () => {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <Programs />
      <Projects />
      <Campaigns />
      <DonateWidget />
    </main>
  );
};

export default Home;
