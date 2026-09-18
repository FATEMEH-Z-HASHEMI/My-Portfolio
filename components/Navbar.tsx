import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

function Navbar() {
  return (
    <nav className="grid grid-cols-3 m-auto bg-light/80 rounded-xl px-6 py-1.5 shadow">
      <div className="flex flex-row justify-start items-center gap-1">
        <Image src="./icons/logo.svg" alt="logo site" width={80} height={80} />
        <p className="font-bold">Fatemeh Zahra Hashemi</p>
      </div>

      <ul className="flex items-center justify-center gap-4 text-sm font-medium text-text/70 sm:gap-5">
        <li>
          <a
            href="#about"
            className="
                group
                relative
                inline-block
                py-1
                transition-colors
                duration-300
                hover:text-text
              "
          >
            About me
            <span
              className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-right
                  scale-x-0
                  bg-primary
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
            />
          </a>
        </li>

        <li aria-hidden="true" className="text-primary/50">
          /
        </li>

        <li>
          <a
            href="#skills"
            className="
                group
                relative
                inline-block
                py-1
                transition-colors
                duration-300
                hover:text-text
              "
          >
            Skills
            <span
              className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-right
                  scale-x-0
                  bg-primary
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
            />
          </a>
        </li>

        <li aria-hidden="true" className="text-primary/50">
          /
        </li>

        <li>
          <a
            href="#projects"
            className="
                group
                relative
                inline-block
                py-1
                transition-colors
                duration-300
                hover:text-text
              "
          >
            Featured Projects
            <span
              className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-right
                  scale-x-0
                  bg-primary
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
            />
          </a>
        </li>

        <li aria-hidden="true" className="text-primary/50">
          /
        </li>

        <li>
          <a
            href="#contact"
            className="
                group
                relative
                inline-block
                py-1
                transition-colors
                duration-300
                hover:text-text
              "
          >
            Contact me
            <span
              className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-right
                  scale-x-0
                  bg-primary
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:origin-left
                  group-hover:scale-x-100
                "
            />
          </a>
        </li>
      </ul>

      <Button />
    </nav>
  );
}

export default Navbar;
