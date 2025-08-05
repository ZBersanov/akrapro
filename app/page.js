import dynamic from "next/dynamic";
import Hero from "../components/Hero";

// Динамически загружаемые компоненты
const About = dynamic(() => import("../components/About/About"));
const Services = dynamic(() => import("../components/Services/Services"));
const Portfolio = dynamic(() => import("../components/Portfolio/Portfolio"));

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}
