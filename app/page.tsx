import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import LandingPage from "@/features/Home/LandingPage";

export default function page() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <IntroAnimation />
    </div>
  );
}
