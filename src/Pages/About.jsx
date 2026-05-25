import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import "./About.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function AboutUs() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <TeamSection />
    </main>
  );
}

export default AboutUs;