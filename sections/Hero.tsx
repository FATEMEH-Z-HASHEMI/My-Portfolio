import React from "react";
import Navbar from "@/components/Navbar";
import { MagneticText } from "@/components/ui/morphing-cursor";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Left decorative circle */}
      <div
        className="
          absolute
          z-0
          -left-[290px]
          -top-[320px]
          size-200
          rounded-full
          border
          border-black/30
          opacity-80
        "
      />

      {/* Right decorative circle */}
      <div
        className="
          absolute
          z-0
          -right-[180px]
          bottom-[-320px]
          size-175
          rounded-full
          border
          border-black/30
          opacity-55
        "
      />

      {/* Navbar */}
      <div className="relative z-50 mx-auto w-[90%]">
        <Navbar />
      </div>

      {/* Hero content */}
      <section className="relative min-h-[calc(100vh-100px)]">
        {/* Job title */}
        <div
          className="
            absolute
            left-[5%]
            top-[13%]
            z-30
            flex
            flex-col
            gap-1
            text-lg
          "
        >
          <MagneticText
            as="h2"
            className="font-bold"
            text="FRONT-END DEVELOPER"
          />
          <MagneticText as="h2" className="font-bold" text="& UI/UX DESIGNER" />
        </div>

        {/* Big FRONT-END text */}
        <Image
          src="/images/FRONT-END.svg"
          alt="Front-end developer"
          width={1600}
          height={500}
          priority
          className="
            absolute
            left-1/2
            top-[24%]
            z-10
            w-full
            max-w-none
            -translate-x-1/2
          "
        />

        {/* Character */}
        <Image
          src="/images/me.svg"
          alt="Fatemeh Zahra Hashemi"
          width={800}
          height={1000}
          priority
          className="
            absolute
            bottom-0
            left-5/9
            z-20
            w-185
            max-w-none
            -translate-x-1/2
          "
        />

        {/* Social icons */}
        <div
          className="
            absolute
            bottom-[-3%]
            right-[5%]
            z-30
            flex
            flex-col
            items-center
          "
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/icons/Telegram App.svg"
              alt="Telegram"
              width={20}
              height={20}
            />

            <Image
              src="/icons/Github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />

            <Image
              src="/icons/LinkedIn.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />

            <Image
              src="/icons/Instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
            />
          </div>
          <div className="relative right-14 -top-6">
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
