import IntroAnimation from "@/components/HeroPage";
import InfiniteScrollText from "@/components/InfiniteScrollText";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectPage from "@/components/ProjectPage";

export default function page() {
  return (
    <>
    <div className="bg-white min-h-screen overflow-x-hidden">
      <IntroAnimation />
      <About />
      <ProjectPage />
      <InfiniteScrollText />
      <Skills />
    </div>
    </>

  );
}
