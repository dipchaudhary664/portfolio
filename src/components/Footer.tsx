import { socialLinks } from "@/Data/SocialLinkData";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contact">
      <footer className=" mt-20 border-t border-zinc-800 shadow-md backdrop-blur-md text-white py-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center border-b border-gray-700 pb-6 mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Chaudhary Dip</h2>
            </div>
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
            <div className="text-start space-y-1">
              <p className="text-lg font-medium flex items-center">Contact</p>
              <p className="text-sm mt-2 flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-500" />{" "}
                <a
                  href="tel:+660988731603"
                  className="hover:underline transition-colors duration-300"
                >
                  +66 0988731603
                </a>
              </p>
              <p className="text-sm flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />{" "}
                <a
                  href="mailto:dipchaudhary664@gmail.com"
                  className="hover:underline transition-colors duration-300"
                >
                  dipchaudhary664@gmail.com
                </a>
              </p>
              <p className="text-sm flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />{" "}
                <a
                  href="mailto:dipchaudhary947@gmail.com"
                  className="hover:underline transition-colors duration-300"
                >
                  dipchaudhary947@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Chaudhary Dip :)
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
