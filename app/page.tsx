import IntroAnimation from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import ProjectPage from "@/features/Projects/ProjectPage";

export default function page() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <IntroAnimation />
      {/* <ProjectPage /> */}
    </div>
  );
}
