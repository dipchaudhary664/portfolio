import React from "react";
import Heading from "./Heading";
import techStackData from "@/Data/TechStackData";

export default function Skills() {
  return (
    <section className="my-5 scroll-mt-36" id="slills">
      <div className="mb-5 mt-20">
        <Heading title="My Skills" desc="My Current Tech Stacks Are:" />
      </div>
      <div className="space-y-6">
        {Object.values(techStackData).map((category, index) => (
          <div key={index} className="mb-8">
            <p className="text-lg font-semibold text-gray-400 mb-2">
              {category.title}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {category.stacks.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="bg-zinc-800/50 border border-zinc-800 p-4 flex items-center justify-center gap-4 rounded-md shadow-lg transition transform hover:scale-105 hover:bg-zinc-700"
                >
                  <Icon className="text-xl shrink-0 text-teal-400" />
                  <span className="text-xs text-gray-200 truncate whitespace-nowrap overflow-hidden">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
