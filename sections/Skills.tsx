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
      const ctx = gsap.context(() => {
        const title = sectionRef.current?.querySelector("[data-skills-title]");

        const description = sectionRef.current?.querySelector(
          "[data-skills-description]",
        );

        const cards = gsap.utils.toArray<HTMLElement>("[data-skill-card]");

        const codingImage = sectionRef.current?.querySelector(
          "[data-coding-image]",
        );

        if (!title || !description || !cards.length) return;

        // --------------------------------
        // Section title
        // --------------------------------

        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 60,
            rotationX: 12,
            transformPerspective: 1000,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // --------------------------------
        // Description
        // --------------------------------

        gsap.fromTo(
          description,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: description,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // --------------------------------
        // Coding illustration
        // --------------------------------

        if (codingImage) {
          gsap.fromTo(
            codingImage,
            {
              opacity: 0,
              y: -40,
              scale: 0.92,
              rotation: -4,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: codingImage,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        // --------------------------------
        // Skills cards - 3D stagger
        // --------------------------------

        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 70,
            z: -120,
            scale: 0.85,
            rotationX: 18,
            rotationY: -8,
            transformPerspective: 1200,
          },
          {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: {
              each: 0.08,
              from: "start",
            },
            scrollTrigger: {
              trigger: cards[0],
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );

        // --------------------------------
        // Card hover
        // --------------------------------

        cards.forEach((card) => {
          const icon = card.querySelector("[data-skill-icon]");

          const enter = () => {
            gsap.to(card, {
              y: -8,
              scale: 1.04,
              rotationX: -3,
              rotationY: 3,
              duration: 0.35,
              ease: "power2.out",
            });

            if (icon) {
              gsap.to(icon, {
                y: -4,
                scale: 1.08,
                duration: 0.35,
                ease: "power2.out",
              });
            }
          };

          const leave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              duration: 0.45,
              ease: "power3.out",
            });

            if (icon) {
              gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
              });
            }
          };

          card.addEventListener("mouseenter", enter);
          card.addEventListener("mouseleave", leave);

          return () => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
          };
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      data-gsap="skills-page"
      className="relative z-50 -mt-[10vh] min-h-screen overflow-hidden bg-bg sm:-mt-[12vh]"
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
        <div data-skills-title>
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

        <div data-skills-description>
          <p className="mt-4 max-w-md text-sm leading-6 text-text/70 sm:text-base">
            A collection of technologies and tools I use to <br /> design and
            build digital experiences.
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
