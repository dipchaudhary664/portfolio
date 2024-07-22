import React from "react";
import CustomLink from "./CustomLink";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="Home">
      <div className="grid md:grid-cols-2 pt-0 sm:pt-4 items-center h-[calc(100vh-100px)] max-h-[678px]">
        <div>
          <p className="text-lg mb-1">Hi 👋🏽 , I am</p>
          <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
            Frontend Developer
          </h1>
          <h2 className="font-title tracking-wider text-3xl sm:text-5xl -ml-0.5 text-violet-900 mt-1">
            Mobile Developer
          </h2>
          <h3 className="text-2xl font-normal text-purple-800">
            Upgrade your life in silence, and I love what I do.
          </h3>
          <p className="text-zinc-300 my-3">
            I love building user-friendly, performant, and accessible websites.
            With a strong background in both frontend and mobile development, I
            strive to create seamless, engaging experiences across all
            platforms. My expertise includes modern web technologies, responsive
            design, and ensuring optimal performance and accessibility for all
            users.
          </p>

          <div className="flex gap-4">
            <CustomLink
              href="https://drive.google.com/uc?export=download&id=1eRyyJemW-SANrpp0REjgjowHtAihTOMV"
              linkType="secondary"
              className="my-4 "
              download
            >
              Resume
            </CustomLink>
            <CustomLink href="#project" linkType="primary" className="my-4">
              My Work
            </CustomLink>
          </div>
        </div>
        <div className="hidden md:flex w-full h-full relative overflow-hidden">
          <Image
            src="/deep0.png"
            width={600}
            height={600}
            alt="Deep"
            className="object-cover w-full h-full "
          />
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
