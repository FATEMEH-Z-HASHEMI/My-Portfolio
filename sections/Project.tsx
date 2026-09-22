"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MagneticText } from "@/components/ui/morphing-cursor";
import { HoverLinkPreview } from "@/components/ui/hover-link-preview";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: "2026",
    title: "Startup Project",
    category: "Front-End Development • UI/UX Design",
    description:
      "A confidential startup project currently under development. I'm responsible for designing and building responsive interfaces, management dashboards, and user-focused experiences while working closely with the product requirements.",
    link: "",
    previewImage: "",
  },
  {
    year: "2025 - 2026",
    title: "Owj School",
    category: "Frontend Development • UI/UX Design",
    description:
      "A web-based project developed for a sports high school in Amol, where I worked on designing and building a simple, user-friendly, and responsive interface tailored to the school's management and administrative needs.",
    link: "https://panel.owjschool.ir/",
    previewImage: "/images/owj.svg",
  },
  {
    year: "2024",
    title: "Lazarus Packages",
    category: "Open Source Contribution",
    description:
      "Contributed to the development of packages for the Lazarus ecosystem, working with existing codebases and contributing to the improvement and development of software components.",
    link: "https://github.com/Lazarus-org",
    previewImage: "/images/Lazarus.svg",
  },
];

function Project() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

        if (!cards.length || !sectionRef.current) return;

        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? 1 : -1;

          gsap.set(card, {
            xPercent: direction * 125,
            y: index % 2 === 0 ? 35 : -35,
            rotation: direction * 8,
            opacity: 0,
          });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: "bottom 15%",
            scrub: 1,
          },
        });

        timeline.to(cards, {
          xPercent: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.8,
          ease: "power3.out",
        });

        timeline.to({}, { duration: 0.7 });

        cards.forEach((card, index) => {
          const direction = index % 2 === 0 ? -1 : 1;

          timeline.to(
            card,
            {
              xPercent: direction * 140,
              y: index % 2 === 0 ? -45 : 45,
              rotation: direction * 12,
              opacity: 0,
              duration: 1,
              ease: "power3.in",
            },
            "scatter",
          );
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 overflow-hidden bg-bg px-4 py-12 text-[#1f1d1b] sm:px-8 lg:px-10 bg-[url('/images/Dot-Pattern-background.svg')] bg-repeat"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Image
          src="/images/Wave1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute left-[-20px] top-10 h-24 w-24 animate-float"
        />
        <Image
          src="/images/Wave1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute right-[-30px] top-52 h-24 w-24 rotate-[220deg] animate-float"
        />
        <Image
          src="/images/Wave1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute right-[200px] bottom-82 h-20 w-20 rotate-[120deg] opacity-50 animate-float"
        />
        <Image
          src="/images/zigzag1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute left-[-20px] bottom-16 h-24 w-36 animate-float"
        />
        <Image
          src="/images/zigzag1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute left-[200px] bottom-126 h-12 w-18 opacity-70 rotate-180 animate-float"
        />
        <Image
          src="/images/zigzag1.svg"
          alt="Texture"
          width={40}
          height={40}
          className="absolute right-[-26px] bottom-[-10px] h-24 w-32 opacity-40 rotate-180 animate-float"
        />
      </div>

      <div className="relative mx-auto w-[96%]">
        <header className="relative z-10 mx-auto w-full">
          <div data-gsap="projects-title">
            <MagneticText
              as="p"
              text="Projects"
              className="mb-2 text-sm font-medium text-text/70"
              hoverClassName="bg-primary"
            />

            <h2
              id="projects-title"
              className="title_font text-4xl font-bold tracking-tight sm:text-5xl"
            >
              <MagneticText
                text="Selected Work"
                className="title_font"
                hoverClassName="bg-text"
              />
            </h2>
          </div>

          <div data-gsap="projects-description">
            <p className="mt-4 max-w-md text-sm leading-6 text-text/70 sm:text-base">
              A selection of projects and contributions that{" "}
              <br className="hidden sm:block" />
              reflect how I design, build, and solve problems.
            </p>
          </div>
        </header>

        <div className="relative md:mt-10 lg:mt-0">
          {projects.map((project) => (
            <div
              key={project.title}
              data-project-card
              className="group relative mx-auto grid w-full items-center justify-center gap-5 pb-8 pt-7 sm:w-[92%] lg:grid-cols-[220px_100px_1fr] lg:pb-12 bg-light/50 lg:bg-light/0 rounded-xl lg:rounded-none px-10 lg:px-0 my-10"
            >
              <div className="flex justify-center items-center">
                <div className="text-xl font-black tracking-[-0.05em] sm:text-2xl lg:pl-0">
                  <MagneticText text={project.year} hoverClassName="bg-text" />
                </div>
              </div>

              <div className="hidden h-full w-0.5 bg-text/40 lg:block" />

              <div className="relative lg:pl-10 text-center md:text-left">
                <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                  <MagneticText text={project.title} hoverClassName="bg-text" />
                </h3>

                <p className="mt-4 text-sm font-medium opacity-90 sm:mt-5 sm:text-lg">
                  {project.category}
                </p>

                <p className="my-3 text-xs leading-6 opacity-80 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                {project.link ? (
                  <HoverLinkPreview
                    href={project.link}
                    previewImage={project.previewImage}
                    imageAlt={`${project.title} preview`}
                  >
                    <Image
                      src="/icons/link.svg"
                      alt="Link"
                      width={18}
                      height={18}
                    />

                    {project.link}
                  </HoverLinkPreview>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
