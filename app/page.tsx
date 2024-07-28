import Footer from "./(home)/components/Footer";
import HeroSection from "./(home)/components/HeroSection";
import Navbar from "./(home)/components/Navbar";
import Project from "./(home)/components/Project";
import Skills from "./(home)/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen  bg-black overflow-hidden">
      <div className="dark:bg-black bg-grid-white/[0.1] relative">
        <div className="max-w-7xl mx-auto py-2 px-5 ">
          <Navbar />
          <HeroSection />
        </div>
      {/* <div className="h-10  xl:h-32  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div> */}
      </div>
      <div className="max-w-7xl mt-20 mx-auto py-2 px-5">
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
