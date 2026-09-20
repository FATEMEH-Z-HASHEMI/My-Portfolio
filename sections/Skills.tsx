"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { MagneticText } from "@/components/ui/morphing-cursor";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      id: 1,
      name: "Next.js",
      path: "/icons/next.svg",
    },
    {
      id: 2,
      name: "React",
      path: "/icons/react.svg",
    },
    {
      id: 3,
      name: "Typescript",
      path: "/icons/typescript.svg",
    },
    {
      id: 4,
      name: "Javascript",
      path: "/icons/javascript.svg",
    },
    {
      id: 5,
      name: "Jquery",
      path: "/icons/jquery.svg",
    },
    {
      id: 6,
      name: "React native Expo",
      path: "/icons/expo.svg",
    },
    {
      id: 7,
      name: "Tailwindcss",
      path: "/icons/tailwindcss.svg",
    },
    {
      id: 8,
      name: "Bootstrap",
      path: "/icons/bootstrap.svg",
    },
    {
      id: 9,
      name: "Sass",
      path: "/icons/sass.svg",
    },
    {
      id: 10,
      name: "Jest",
      path: "/icons/jest.svg",
    },
    {
      id: 11,
      name: "Playwright",
      path: "/icons/playwright.svg",
    },
    {
      id: 12,
      name: "Cypress",
      path: "/icons/cypress.svg",
    },
    {
      id: 13,
      name: "Sentry",
      path: "/icons/sentry.svg",
    },
    {
      id: 14,
      name: "Docker",
      path: "/icons/docker.svg",
    },
    {
      id: 15,
      name: "Git",
      path: "/icons/git.svg",
    },
    {
      id: 16,
      name: "Postman",
      path: "/icons/postman.svg",
    },
    {
      id: 17,
      name: "Vite",
      path: "/icons/vite.svg",
    },
    {
      id: 18,
      name: "Trello",
      path: "/icons/trello.svg",
    },
    {
      id: 19,
      name: "Open Claw",
      path: "/icons/openClaw.svg",
    },
  ];

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const title = section.querySelector<HTMLElement>(
        '[data-gsap="skills-title"]',
      );

      const description = section.querySelector<HTMLElement>(
        '[data-gsap="skills-description"]',
      );

      const codingImage = section.querySelector<HTMLElement>(
        "[data-coding-image]",
      );

      const cards = gsap.utils.toArray<HTMLElement>("[data-skill-card]");

      if (!title || !description || !codingImage || !cards.length) return;

      // --------------------------------
      // Scatter positions
      // --------------------------------

      const scatterPositions = [
        { x: -900, y: -500, rotation: -45, scale: 0.45 },
        { x: 750, y: -550, rotation: 38, scale: 0.5 },
        { x: -1000, y: 50, rotation: -55, scale: 0.4 },
        { x: 950, y: 100, rotation: 50, scale: 0.45 },
        { x: -800, y: 500, rotation: 40, scale: 0.5 },
        { x: 850, y: 550, rotation: -45, scale: 0.45 },

        { x: -600, y: -700, rotation: 55, scale: 0.4 },
        { x: 600, y: -650, rotation: -50, scale: 0.45 },
        { x: -700, y: 700, rotation: -40, scale: 0.5 },
        { x: 700, y: 650, rotation: 45, scale: 0.45 },

        { x: -1200, y: -250, rotation: 60, scale: 0.4 },
        { x: 1100, y: -300, rotation: -55, scale: 0.45 },
        { x: -1100, y: 350, rotation: 50, scale: 0.4 },
        { x: 1200, y: 400, rotation: -50, scale: 0.45 },

        { x: -450, y: -850, rotation: -60, scale: 0.4 },
        { x: 450, y: -850, rotation: 55, scale: 0.4 },
        { x: -450, y: 850, rotation: 50, scale: 0.45 },
        { x: 450, y: 850, rotation: -55, scale: 0.45 },

        { x: 0, y: -1000, rotation: 35, scale: 0.4 },
      ];

      // --------------------------------
      // INITIAL STATE
      // --------------------------------

      gsap.set(title, {
        x: -700,
        y: -350,
        rotation: -25,
        scale: 0.55,
        opacity: 0,
        z: -500,
        transformPerspective: 1500,
      });

      gsap.set(description, {
        x: 700,
        y: 350,
        rotation: 20,
        scale: 0.55,
        opacity: 0,
        z: -500,
        transformPerspective: 1500,
      });

      gsap.set(codingImage, {
        x: 0,
        y: -900,
        rotation: -25,
        scale: 0.45,
        opacity: 0,
        z: -800,
        transformPerspective: 1500,
      });

      cards.forEach((card, index) => {
        const position = scatterPositions[index];

        gsap.set(card, {
          x: position.x,
          y: position.y,
          rotation: position.rotation,
          scale: position.scale,
          opacity: 0,
          z: -600,
          transformPerspective: 1500,
          transformStyle: "preserve-3d",
        });
      });

      // --------------------------------
      // MAIN TIMELINE
      // --------------------------------

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      // ========================================
      // ENTER
      // ========================================

      tl.to(
        codingImage,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        0,
      );

      tl.to(
        title,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        0.1,
      );

      tl.to(
        description,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        0.15,
      );

      tl.to(
        cards,
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1.3,
          stagger: {
            each: 0.06,
            from: "random",
          },
          ease: "back.out(1.8)",
        },
        0.1,
      );

      // ========================================
      // HOLD
      // ========================================

      tl.to({}, { duration: 0.7 });

      // ========================================
      // EXIT / EXPLOSION
      // ========================================

      tl.to(
        codingImage,
        {
          x: -800,
          y: -700,
          rotation: -35,
          scale: 0.4,
          opacity: 0,
          z: -700,
          duration: 1.2,
          ease: "power4.in",
        },
        "explode",
      );

      tl.to(
        title,
        {
          x: -700,
          y: -400,
          rotation: -30,
          scale: 0.5,
          opacity: 0,
          z: -600,
          duration: 1.1,
          ease: "power4.in",
        },
        "explode",
      );

      tl.to(
        description,
        {
          x: 700,
          y: 400,
          rotation: 30,
          scale: 0.5,
          opacity: 0,
          z: -600,
          duration: 1.1,
          ease: "power4.in",
        },
        "explode",
      );

      cards.forEach((card, index) => {
        const position = scatterPositions[index];

        tl.to(
          card,
          {
            x: position.x,
            y: position.y,
            rotation: position.rotation,
            scale: position.scale,
            opacity: 0,
            z: -600,
            duration: 1.2,
            ease: "power4.in",
          },
          "explode",
        );
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      data-gsap="skills-page"
      className="
        relative
        z-50
        -mt-[10vh]
        min-h-[120vh]
        overflow-hidden
        bg-bg
        sm:-mt-[12vh]
      "
    >
      {/* Coding illustration */}
      <div data-coding-image className="relative mx-auto w-full transform-gpu">
        <Image
          src="/images/coding.svg"
          alt="coding"
          width={200}
          height={200}
          className="w-full"
        />
      </div>

      {/* Section heading */}

      <header className="relative z-10 mx-auto w-[90%]">
        <div data-gsap="skills-title">
          <MagneticText
            as="p"
            text="Skills"
            className="mb-2 text-sm font-medium text-text/70"
            hoverClassName="bg-primary"
          />

          <h2
            id="skills-title"
            className="title_font text-5xl font-bold tracking-tight"
          >
            <MagneticText
              text="My Toolkit"
              className="title_font"
              hoverClassName="bg-text"
            />
          </h2>
        </div>

        <div data-gsap="skills-description">
          <p className="mt-4 max-w-md text-sm leading-6 text-text/70 sm:text-base">
            A collection of technologies and tools I use to <br />
            design and build digital experiences.
          </p>
        </div>
      </header>

      {/* Skills */}
      <div
        className="
          mx-auto
          my-10
          grid
          w-[80%]
          grid-cols-2
          gap-4
          sm:grid-cols-3
          sm:gap-5
          lg:grid-cols-4
          xl:grid-cols-6
        "
      >
        {skills.map((item) => (
          <div
            key={item.id}
            data-skill-card
            className="
              flex
              h-30
              w-full
              transform-gpu
              flex-col
              items-center
              justify-center
              gap-4
              rounded-xl
              bg-light/40
              shadow-skill
              will-change-transform
              [transform-style:preserve-3d]
            "
          >
            <div data-skill-icon className="transform-gpu">
              <Image src={item.path} alt={item.name} width={40} height={40} />
            </div>

            <p className="text-center text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
