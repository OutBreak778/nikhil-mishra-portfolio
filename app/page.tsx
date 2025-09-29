
import IntroAnimation from "@/components/HeroPage";
import InfiniteScrollText from "@/components/InfiniteScrollText";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/ProjectPage";
import SmoothScroll from "@/components/SmoothScroll";

export default function page() {

  return (
    <>
      <div className="bg-white min-h-screen overflow-x-hidden">
        <SmoothScroll>

        <IntroAnimation />
        <About />
        <ProjectPage />
        <InfiniteScrollText />
        <Skills />
        </SmoothScroll>
      </div>
    </>
  );
}
