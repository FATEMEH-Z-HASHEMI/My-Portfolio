"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="mx-auto mt-4 flex w-full items-center justify-between rounded-xl bg-light/80 px-4 py-2 shadow backdrop-blur-sm sm:mt-6 sm:px-6 sm:py-0 lg:grid lg:grid-cols-3">
        <div className="flex min-w-0 items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo site"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 sm:h-16 sm:w-16"
          />

          <p className="truncate text-xs font-bold">
            Fatemeh Zahra Hashemi
          </p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center justify-center gap-4 text-[10px] font-medium text-text/70 lg:flex xl:gap-5">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.href}>
              {index > 0 && (
                <li aria-hidden="true" className="text-primary/50">
                  /
                </li>
              )}

              <li>
                <a
                  href={item.href}
                  className="group relative inline-block py-1 transition-colors duration-300 hover:text-text"
                >
                  {item.label}

                  <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden justify-end lg:flex">
          <Button />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isSidebarOpen}
          onClick={() => setIsSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-primary/10 lg:hidden"
        >
          <Menu size={24} strokeWidth={1.8} />
        </button>
      </nav>

      {/* Mobile Sidebar + Overlay */}
      {isMounted &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              aria-hidden={!isSidebarOpen}
              onClick={() => setIsSidebarOpen(false)}
              className={`fixed inset-0 z-[60] bg-text/55 backdrop-blur-md transition-opacity duration-300 ease-out lg:hidden ${
                isSidebarOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            />

            {/* Sidebar */}
            <aside
              aria-label="Mobile navigation"
              aria-hidden={!isSidebarOpen}
              className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(86vw,22rem)] flex-col bg-light px-6 py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
                isSidebarOpen
                  ? "translate-x-0"
                  : "translate-x-[calc(100%+50px)]"
              }`}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-text/10 pb-5">
                <p className="title_font text-lg font-bold">Menu</p>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-primary/10"
                >
                  <X size={24} strokeWidth={1.8} />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-2 py-6 text-lg font-medium">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className="block rounded-lg px-3 py-3 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/icons/logo.svg"
                    alt="logo site"
                    width={64}
                    height={64}
                    className="h-12 w-12 shrink-0 sm:h-22 sm:w-22"
                  />
                  <p>+98 911-775-5994</p>
                </div>
                <div>
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
                </div>
              </div>
            </aside>
          </>,
          document.body,
        )}
    </>
  );
}

export default Navbar;
