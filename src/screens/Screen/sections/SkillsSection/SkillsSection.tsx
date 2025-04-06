import React from "react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFramer, SiGithub, SiVisualstudiocode } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

export const SkillsSection = (): JSX.Element => {
  // Data for skill badges
  const skills = [
    { name: "React JS", icon: SiReact },
    { name: "Next JS", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Java", icon: FaJava },
    { name: "Node JS", icon: SiNodedotjs },
    { name: "Express JS", icon: SiExpress },
    { name: "Spring Boot", icon: BiLogoSpringBoot },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Framer Motion", icon: SiFramer },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: SiVisualstudiocode },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto">
        <h2 className="text-[73.3px] leading-[72px] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-normal text-center mb-16">
          TECH STACK
        </h2>
        
        <div className="flex flex-wrap gap-4 justify-center max-w-[1000px] mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center px-6 py-3 bg-[#ffffff1a] rounded-full border-2 border-solid border-gray-600 hover:border-gray-400 transition-colors"
              >
                <Icon className="w-6 h-6 mr-2 text-white" />
                <span className="font-normal text-white text-[19.8px] leading-7">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};