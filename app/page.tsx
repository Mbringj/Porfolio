import Hero from "@/app/layouts/Hero";
import About from "@/app/layouts/About";
import SkillAndStack from "@/app/layouts/SkillAndStack";
import Projets from "@/app/layouts/Projets";
import BugBounty from "@/app/layouts/Bug-bounty";
import Work from "./layouts/work";
import Education from "@/app/layouts/Education";
import Certification from "@/app/layouts/Certification";
import Contacts from "@/app/layouts/Contacts";
import Footer from "@/app/layouts/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <section className="mb-4">
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <SkillAndStack />
      </section>
      <section>
        <Projets />
      </section>
      <section>
        <BugBounty />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Certification />
      </section>
      <section>
        <Contacts />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
