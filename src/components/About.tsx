import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { socialLinks } from "@/Data/SocialLinkData";
import Link from "next/link";

export default function About() {
  return (
    <section className="my-5 scroll-mt-36" id="about">
      <div className="mb-10 mt-20">
        <Heading title="About Me" desc="Let Me Know something About Me :)" />
      </div>

      <div className="flex flex-col gap-10 md:flex-row items-center">
        <div className="h-64 w-64 shrink-0 bg-zinc-800 rounded-full overflow-hidden">
          <Image
            src="/coding.gif"
            width={500}
            height={500}
            alt="Deep"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-100">
            Hi 👋🏽, I&apos;m chaudhary Deep :)
          </h2>
          <p className="text-sm font-normal text-zinc-400">
            During my internship, I had the valuable experience of working
            closely with a team, where I actively contributed to frontend
            development in a project. I collaborated with colleagues to
            implement frontend features using technologies like Next.js and
            React Native. This hands-on experience not only enhanced my
            technical skills but also taught me the importance of teamwork and
            effective communication in delivering successful projects!
          </p>

          <ul className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <li key={index}>
                <Link href={href} legacyBehavior>
                  <a
                    title={Icon.name}
                    className="group flex justify-center items-center p-0 h-10 w-10 rounded-full border border-gray-300 text-gray-500 transition-all duration-300 hover:bg-gray-300 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-7 w-7" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
