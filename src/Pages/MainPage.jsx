import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Porto from "../Components/Porto";
import Skills from "../Components/Skills";

export default function MainPage() {
  return (
    <div className="bg-[#f4f0e8] overflow-x-clip">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="project">
          <Porto />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
