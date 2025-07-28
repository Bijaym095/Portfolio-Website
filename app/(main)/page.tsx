import Contact from "@/components/layouts/home-contact";
import EducationWorkExperience from "@/components/layouts/home-education-work-experience";
import Hero from "@/components/layouts/home-hero";
import Projects from "@/components/layouts/home-projects";
import Services from "@/components/layouts/home-services";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <EducationWorkExperience />
      <Projects/>
      <Contact />
    </>
  );
}

export default Home;
