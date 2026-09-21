import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Project from "@/sections/Project";
import Footer from "@/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import GSAPAnimations from "@/components/GSAPAnimations";

function Page() {
  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 z-0">
          <Hero />
        </div>

        <div className="relative z-10">
          <About />
          <Skills />
          <Project />
          <Footer />
        </div>
      </div>

      <GSAPAnimations />

      <ScrollProgress />
      <ScrollToTop />
    </div>
  );
}

export default Page;
