import React from "react";
import Navbar from "@/components/Navbar";
import { MagneticText } from "@/components/ui/morphing-cursor";
import { Magnetic } from "@/components/ui/magnetic";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div
      data-gsap="hero"
      className="relative min-h-[clamp(38rem,100svh,56rem)] overflow-hidden"
    >
      {/* Left decorative circle */}
      <div
        data-gsap="hero-decoration-left"
        className="
          absolute
          z-0
          -left-[16rem]
          -top-[18rem]
          size-[clamp(22rem,50vw,50rem)]
          rounded-full
          border
          border-black/30
          opacity-80
        "
      />

      {/* Right decorative circle */}
      <div
        data-gsap="hero-decoration-right"
        className="
          absolute
          z-0
          -right-[12rem]
          bottom-[-18rem]
          size-[clamp(20rem,44vw,44rem)]
          rounded-full
          border
          border-black/30
          opacity-55
        "
      />

      {/* Navbar */}
      <header
        data-gsap="hero-navbar"
        className="relative z-50 mx-auto w-[92%] max-w-[90rem]"
      >
        <Navbar />
      </header>

      {/* Hero content */}
      <section className="relative min-h-[calc(100svh-6rem)] sm:min-h-[calc(100vh-6.25rem)]">
        {/* Job title */}
        <div
          className="
            absolute
            left-[5%]
            top-[10%]
            z-30
            flex
            flex-col
            gap-1
            text-sm sm:text-lg
          "
          data-gsap="hero-title"
        >
          <MagneticText
            as="h2"
            className="font-bold"
            text="FRONT-END DEVELOPER"
          />
          <MagneticText as="h2" className="font-bold" text="& UI/UX DESIGNER" />
        </div>

        {/* Big FRONT-END text */}
        <div
          data-gsap="hero-marquee-plane"
          className="absolute inset-x-0 top-[26%] z-10 overflow-hidden sm:top-[24%]"
        >
          <div className="hero-marquee flex w-max">
            <Image
              src="/images/FRONT-END.svg"
              alt="Front-end developer"
              width={1600}
              height={500}
              priority
              className="h-auto w-[210vw] md:w-[170vw] lg:w-[90vw] max-w-none shrink-0"
            />

            <Image
              src="/images/FRONT-END.svg"
              alt=""
              aria-hidden="true"
              width={1600}
              height={500}
              priority
              className="h-auto w-[210vw] md:w-[170vw] lg:w-[90vw] max-w-none shrink-0 ml-10"
            />
          </div>
        </div>

        {/* Character */}
        <div className="absolute bottom-0 left-1/2 z-20 w-[min(94vw,48rem)] max-w-none -translate-x-1/2 sm:-bottom-4">
          <div data-gsap="hero-character-parallax">
            <div data-gsap="hero-character">
              <Image
                src="/images/me.svg"
                alt="Fatemeh Zahra Hashemi"
                width={800}
                height={1000}
                priority
                className="w-full md:w-[90%] lg:w-[88%] m-auto"
              />
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div
          data-gsap="hero-social"
          className="
            absolute
            bottom-[2%]
            right-[4%]
            z-30
            lg:flex
            hidden
            flex-col
            items-center 
          "
        >
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
            <Magnetic intensity={0.3} springOptions={{ bounce: 0 }}>
              <Link
                href="https://t.me/FTM_HASHEMI7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Image
                  src="/icons/Telegram App.svg"
                  alt="Telegram"
                  width={20}
                  height={20}
                />
              </Link>
            </Magnetic>

            <Magnetic intensity={0.3} springOptions={{ bounce: 0 }}>
              <Link
                href="https://github.com/FATEMEH-Z-HASHEMI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Image
                  src="/icons/Github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </Link>
            </Magnetic>

            <Magnetic intensity={0.3} springOptions={{ bounce: 0 }}>
              <Link
                href="https://www.linkedin.com/in/fatemeh-z-hashemi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/LinkedIn.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
            </Magnetic>

            <Magnetic intensity={0.3} springOptions={{ bounce: 0 }}>
              <Link
                href="https://www.instagram.com/ftm.z.hashemipv/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/Instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </Magnetic>
          </div>
          <div className="relative right-10 -top-4 hidden sm:block">
            <Image
              src="/images/line-arrow.svg"
              alt="arrow"
              width={70}
              height={70}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
