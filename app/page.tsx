import IntroAnimation from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/ProjectPage";
import InfiniteScrollText from "@/components/InfiniteScrollText";
import About from "@/components/About";

export default function page() {
 
  return (
    <div className="h-screen w-full">
      <Navbar />
      <IntroAnimation />
      {/* <ProjectPage /> */}
      <InfiniteScrollText />
      <About />
      {/* <Skills /> */}
    </div>
  );
}
