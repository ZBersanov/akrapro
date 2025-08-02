import About from "./_components/About";
import Contacts from "./_components/Contacts";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
}
