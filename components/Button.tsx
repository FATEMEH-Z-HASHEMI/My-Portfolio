import React from "react";
import Link from "next/link";

function Button() {
  return (
    <div className="flex w-full items-center justify-end">
      <Link
        href="#contact"
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-lg
          border
          border-primary
          px-4
          py-2
          text-xs
          font-medium
          text-primary
          transition-colors
          duration-300
          hover:text-light
        "
      >
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
          Get in Touch
        </span>

        <span
          className="
            absolute
            inset-0
            origin-left
            scale-x-0
            bg-primary
            transition-transform
            duration-300
            ease-out
            group-hover:scale-x-100
          "
        />
      </Link>
    </div>
  );
}

export default Button;
