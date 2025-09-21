import IntroAnimation from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import InfiniteScrollText from "@/components/InfiniteScrollText";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/ProjectPage";

export default function page() {
 
  return (
    <div className="h-screen w-full">
      <Navbar />
      <IntroAnimation />
      <About />
      <ProjectPage />
      <InfiniteScrollText />
      <Skills />
    </div>
  );
}
