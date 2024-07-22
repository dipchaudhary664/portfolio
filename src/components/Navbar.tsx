"use client";
import { navMenuList } from "@/Data/NavbarData";
import React, { useState, useEffect } from "react";
import CustomLink from "./CustomLink";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { cn } from "@/utils/helper";

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const overFlowValue = isNavOpen ? "hidden" : "auto";
    document.body.style.overflow = overFlowValue;
  }, [isNavOpen]);

  const isLastElement = (index: number) => index === navMenuList.length - 1;

  return (
    <div className="py-4 border-b border-zinc-800 shadow-md sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <h2>Chaudhary</h2>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setNavOpen((prevState) => !prevState)}
        >
          {isNavOpen ? <IoClose size={30} /> : <LuMenu size={30} />}
        </div>
        <div
          className={cn(
            "max-md:fixed max-md:top-[58px] max-md:py-10 max-md:left-0 max-md:w-full max-md:h-screen max-md:bg-zinc-900/100 md:backdrop-blur-lg",
            !isNavOpen && "max-md:hidden"
          )}
        >
          <ul className="flex items-center flex-col md:flex-row gap-6 ">
            {navMenuList.map(({ title, href }, index) => (
              <li
                key={href}
                onClick={() => {
                  if (isNavOpen) {
                    setNavOpen(false);
                  }
                }}
              >
                <CustomLink
                  href={href}
                  linkType={isLastElement(index) ? "primary" : "link"}
                >
                  {title}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
