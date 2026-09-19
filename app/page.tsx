import React from "react";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
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
        <About />
      </div>

      <GSAPAnimations />

      <ScrollProgress />
      <ScrollToTop />
    </div>
  );
}

export default Page;
