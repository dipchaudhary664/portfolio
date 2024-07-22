import {
  SiFirebase,
  SiShadcnui,
  SiChakraui,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiCss3,
  SiSemanticuireact,
  SiReactrouter,
  SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";
import { FaHtml5, FaGithub } from "react-icons/fa6";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";

const techStackData = {
  frontend: {
    title: "Frontend",
    stacks: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Redux",
        icon: TbBrandRedux,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Chakra UI",
        icon: SiChakraui,
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
      },
    ],
  },
  mobile: {
    title: "Mobile",
    stacks: [
      {
        name: "React-Native",
        icon: TbBrandReactNative,
      },
      {
        name: "React Navigation",
        icon: SiReactrouter,
      },
      {
        name: "NativeWind",
        icon: SiSemanticuireact,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  tools: {
    title: "Others And Tools",
    stacks: [
      {
        name: "Visual Studio Code",
        icon: SiVisualstudiocode,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "GitHub",
        icon: IoLogoFigma,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },
};

export default techStackData;
