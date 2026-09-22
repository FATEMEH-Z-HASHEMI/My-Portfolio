"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex items-center h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full mb-20">
        <div className="flex flex-col gap-10 md:gap-20 max-w-md text-center">
          <h2 className="font-extrabold text-9xl md:text-[200px] text-text font-sans">
            <span className="sr-only">Error</span>
            404
          </h2>
          <div className="flex flex-col gap-5">
            <p className="text-md md:text-lg text-text">
              Sorry,
              <br /> the page you’re looking for could not be found.
            </p>
            <Link href={"/"} passHref>
              <Button
                sx={{
                  backgroundColor: "#b86b40",
                  color: "#fffdf9",
                  transition: "background-color 0.3s ease",
                  padding: "14px 30px",
                  borderRadius: "12px",
                  fontFamily: "inter",
                  "&:hover": {
                    backgroundColor: "#9f5833",
                  },
                }}
                variant="contained"
              >
               Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
