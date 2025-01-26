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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <SkillAndStack />
      <Projets />
      <BugBounty />
      <Work />
      <Education />
      <Certification />
      <Contacts />
      <Footer />
    </main>
  );
}
