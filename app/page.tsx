import IntroAnimation from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
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
