"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function GSAPAnimations() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const heroIntro = gsap.timeline({
        defaults: { duration: 0.85, ease: "power3.out" },
      });

      heroIntro
        .from("[data-gsap='hero-decoration-left']", {
          autoAlpha: 0,
          x: -70,
          y: -45,
          duration: 0.9,
        })
        .from(
          "[data-gsap='hero-decoration-right']",
          {
            autoAlpha: 0,
            x: 70,
            y: 45,
            duration: 0.9,
          },
          "<0.08",
        )
        .from("[data-gsap='hero-navbar']", {
          autoAlpha: 0,
          y: -28,
        })
        .from(
          "[data-gsap='hero-title'] > *",
          {
            autoAlpha: 0,
            x: -50,
            y: 24,
            rotationX: 8,
            transformPerspective: 1000,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          "[data-gsap='hero-marquee-plane']",
          {
            autoAlpha: 0,
            x: 90,
            scale: 0.98,
          },
          "-=0.55",
        )
        .from(
          "[data-gsap='hero-character']",
          {
            autoAlpha: 0,
            y: 90,
            scale: 0.96,
          },
          "-=0.6",
        )
        .from(
          "[data-gsap='hero-social']",
          {
            autoAlpha: 0,
            x: 36,
            scale: 0.9,
          },
          "-=0.55",
        );

      gsap.fromTo(
        "[data-gsap='about-page']",
        { y: "12vh" },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-gsap='about-page']",
            start: "top 95%",
            end: "top 48%",
            scrub: 1,
          },
        },
      );

      const aboutTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      aboutTimeline
        .from("[data-gsap='about-title']", {
          autoAlpha: 0,
          x: -90,
          y: 24,
          rotationX: 8,
          transformPerspective: 1000,
          duration: 0.8,
        })
        .from(
          "[data-gsap='about-description']",
          {
            autoAlpha: 0,
            x: 90,
            y: 18,
            duration: 0.7,
          },
          "-=0.45",
        )
        .from(
          "[data-gsap='about-card']",
          {
            autoAlpha: 0,
            y: 90,
            scale: 0.94,
            rotationX: 10,
            rotationY: -3,
            transformPerspective: 1200,
            duration: 1,
          },
          "-=0.2",
        )
        .from(
          "[data-gsap='about-glue-top']",
          {
            autoAlpha: 0,
            x: 40,
            y: -45,
            rotation: 12,
            duration: 0.65,
          },
          "-=0.35",
        )
        .from(
          "[data-gsap='about-glue-bottom']",
          {
            autoAlpha: 0,
            x: -40,
            y: 45,
            rotation: -12,
            duration: 0.65,
          },
          "-=0.48",
        );

      gsap.to("[data-gsap='about-decoration']", {
        y: 38,
        x: 12,
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    });

    return () => media.revert();
  }, []);

  return null;
}

export default GSAPAnimations;
