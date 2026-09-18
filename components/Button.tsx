import React from "react";

function Button() {
  return (
    <div className="flex items-center justify-end">
      <button
        className="
          group
          relative
          cursor-pointer
          overflow-hidden
          rounded-xl
          border
          border-primary
          px-6
          py-2.5
          font-medium
          text-primary
          transition-colors
          duration-300
          hover:text-bg
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
      </button>
    </div>
  );
}

export default Button;
