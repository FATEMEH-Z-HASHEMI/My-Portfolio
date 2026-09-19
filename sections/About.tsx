"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagneticText } from "@/components/ui/morphing-cursor";
import { TypewriterText } from "@/components/ui/typewriter-text";

function SectionDivider() {
  return (
    <div className="relative">
      <hr className="border-0 border-t border-text/15" />

      <span
        aria-hidden="true"
        className="absolute left-[5.05%] top-1/2 z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-sm font-medium leading-none text-text/50"
      >
        +
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[5%] top-1/2 z-20 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center text-sm font-medium leading-none text-text/50"
      >
        +
      </span>
    </div>
  );
}

function About() {
  const [activeParagraph, setActiveParagraph] = useState(0);

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate min-h-screen overflow-hidden py-16 sm:py-20 lg:py-10"
    >
      {/* Vertical guide lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[5%] w-px bg-text/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[5%] w-px bg-text/15"
      />

      {/* Top divider */}
      <SectionDivider />

      {/* Decorative illustration */}
      <Image
        src="/images/Decorations1.svg"
        alt="Decorations"
        width={140}
        height={140}
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-14 z-0 w-24 sm:w-28 lg:w-[140px]"
      />

      {/* Section heading */}
      <header className="relative z-10 mx-auto w-[80%] pt-16 sm:pt-20">
        <MagneticText
          as="p"
          text="About"
          className="mb-2 text-sm font-medium text-text/70"
          hoverClassName="bg-primary"
        />

        <h2
          id="about-title"
          className="title_font text-5xl font-bold tracking-tight"
        >
          <MagneticText
            text="A Bit About Me"
            className="title_font"
            hoverClassName="bg-text"
          />
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-text/70 sm:text-base">
          A little insight into who I am, what I do, and what I love creating.
        </p>
      </header>

      {/* About card */}
      <div className="relative z-10 mx-auto mt-14 w-[82%] max-w-[900px] sm:mt-16 lg:mt-20">
        {/* Top glue */}
        <Image
          src="/images/glue.svg"
          alt="glue"
          aria-hidden="true"
          width={200}
          height={200}
          className="pointer-events-none absolute -right-20 -top-20 z-20 w-32 sm:-right-20 sm:-top-24 sm:w-40"
        />

        {/* Bottom glue */}
        <Image
          src="/images/glue.svg"
          alt="glue"
          aria-hidden="true"
          width={200}
          height={200}
          className="pointer-events-none absolute -bottom-20 -left-20 z-20 w-32 rotate-180 sm:-bottom-24 sm:-left-20 sm:w-40"
        />

        <article className="-rotate-1 rounded-lg bg-light/90 px-6 py-10 shadow-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="mx-auto">
            {/* Card heading */}
            <h3 className="flex items-center gap-2 text-2xl font-extrabold sm:text-3xl">
              <MagneticText
                text="Hello"
                className="font-extrabold"
                hoverClassName="bg-primary"
              />

              <Image
                src="/icons/hello.svg"
                alt="hello icon"
                aria-hidden="true"
                width={34}
                height={34}
                className="h-8 w-8 sm:h-9 sm:w-9"
              />
            </h3>

            {/* Description */}
            <div className="mt-6 space-y-3 text-sm leading-7 text-text/90 sm:text-base sm:leading-7">
              <TypewriterText
                text="I'm a Front-End Developer and UI/UX Designer passionate about creating modern, responsive, and user-centered digital experiences. I enjoy turning ideas and designs into clean, functional, and intuitive interfaces that are not only visually appealing but also easy to use."
                speed={18}
                start={activeParagraph >= 0}
                onComplete={() => setActiveParagraph(1)}
              />

              <TypewriterText
                text="My experience includes working with React, Next.js, TypeScript, and modern CSS frameworks to build responsive web applications and data-driven interfaces. Alongside development, I have a strong interest in UI/UX design and enjoy working with tools like Figma to create thoughtful and consistent user experiences."
                speed={18}
                start={activeParagraph >= 1}
                onComplete={() => setActiveParagraph(2)}
              />

              <TypewriterText
                text="I'm always looking to improve my skills, explore new technologies, and take on projects that challenge me to learn and grow. I believe good products come from the combination of thoughtful design, clean code, and a clear understanding of the people who use them."
                speed={18}
                start={activeParagraph >= 2}
              />
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-light transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get in Touch
              </Link>

              <span className="inline-flex items-center gap-1 text-xs text-black/60 sm:text-sm">
                <Image
                  src="/icons/location.svg"
                  alt="location icon"
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="h-3.5 w-3.5"
                />
                Amol, Iran
              </span>
            </div>
          </div>
        </article>
      </div>

      {/* Bottom decoration */}
      <Image
        src="/images/Decorations2.svg"
        alt="Decorations1"
        width={140}
        height={140}
        aria-hidden="true"
        className="pointer-events-none ml-auto mt-1 mb-3 mr-[8%] w-24 sm:w-28 lg:w-[140px]"
      />

      {/* Bottom divider */}
      <SectionDivider />
    </section>
  );
}

export default About;
