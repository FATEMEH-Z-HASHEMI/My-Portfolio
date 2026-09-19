import React from 'react'
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import ScrollProgress from "@/components/ScrollProgrress"

function Page() {
  return (
    <div>
      <Hero />
      <About />
      <ScrollProgress />
    </div>
  )
}

export default Page