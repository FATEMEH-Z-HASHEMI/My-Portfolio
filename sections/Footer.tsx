"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MagneticText } from "@/components/ui/morphing-cursor";
import Link from "next/link";

function Footer() {
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+98 911-775-5994";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="bg-[url('/images/Dot-Pattern-background.svg')] bg-repeat bg-bg px-0 pb-6 pt-32 sm:pb-10 sm:pt-60">
      <footer
        id="contact"
        className="relative m-auto flex w-[92%] flex-col overflow-visible rounded-2xl bg-light px-5 py-8 shadow animate-float sm:w-[90%] sm:px-10 sm:py-10 lg:px-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/star.svg"
            alt="star"
            width={34}
            height={34}
            className="absolute left-[11%] top-[14%] w-7 rotate-12 opacity-75"
          />
          <Image
            src="/images/sparkle.svg"
            alt="sparkles"
            width={28}
            height={28}
            className="absolute left-[43%] top-[22%] w-6 -rotate-12 opacity-60"
          />
          <Image
            src="/images/star.svg"
            alt="start"
            width={46}
            height={46}
            className="absolute right-[31%] top-[12%] w-9 -rotate-6 opacity-65"
          />
          <Image
            src="/images/sparkle.svg"
            alt="sparkles"
            width={38}
            height={38}
            className="absolute bottom-[18%] right-[72%] w-7 rotate-90 opacity-70"
          />
          <Image
            src="/images/sparkle.svg"
            alt="sparkles"
            width={38}
            height={38}
            className="absolute bottom-[2%] right-[22%] w-7 rotate-12 opacity-70"
          />
        </div>

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start justify-center gap-1 font-medium">
          <Image
            src="/icons/logo.svg"
            alt="me"
            width={100}
            height={100}
            className="mb-6 h-20 w-20 sm:mb-8 sm:h-[100px] sm:w-[100px]"
          />

          <MagneticText
            text="Front-End Developer & UI/UX Designer"
            hoverClassName="bg-text"
          />

          <MagneticText
            text="Building clean, responsive, and user-focused web experiences."
            hoverClassName="bg-text"
          />

          {/* Social Links */}
          <div className="mt-2 flex flex-row items-center justify-center">
            {/* Telegram */}
            <Link
              href="https://t.me/FTM_HASHEMI7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-[#229ED9] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <Image
                src="/icons/Telegram App.svg"
                alt="Telegram"
                width={20}
                height={20}
                className="relative z-10 transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
              />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/FATEMEH-Z-HASHEMI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-[#3D3D3D] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <Image
                src="/icons/Github.svg"
                alt="GitHub"
                width={20}
                height={20}
                className="relative z-10 transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/fatemeh-z-hashemi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-[#0A66C2] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <Image
                src="/icons/LinkedIn.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                className="relative z-10 transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
              />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/ftm.z.hashemipv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-[#E4405F] transition-transform duration-500 ease-out group-hover:translate-y-0" />

              <Image
                src="/icons/Instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="relative z-10 transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
              />
            </Link>
          </div>

          {/* Phone Number */}
          <div className="group relative mt-2">
            <button
              type="button"
              onClick={handleCopy}
              className="cursor-pointer"
              aria-label="Copy phone number"
            >
              <p className="text-base transition-opacity duration-300 group-hover:opacity-70">
                {phoneNumber}
              </p>
            </button>

            {/* Tooltip */}
            <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 scale-90 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs text-light opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
              {copied ? "Copied!" : "Click to copy"}

              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        {/* Me */}
        <div className="pointer-events-none relative mt-6 self-end sm:absolute sm:bottom-0 sm:right-8 sm:mt-0 lg:right-16">
          <Image
            src="/images/me.svg"
            alt="me"
            width={320}
            height={320}
            className="h-auto w-40 sm:w-[260px] lg:w-[320px]"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
