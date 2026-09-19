import React from 'react'
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import ScrollProgress from "@/components/ScrollProgress"
import ScrollToTop from "@/components/ScrollToTop"


function Page() {
  return (
    <div>
      <Hero />
      <About />


      <ScrollProgress />
      <ScrollToTop />
    </div>
  )
}

export default Page