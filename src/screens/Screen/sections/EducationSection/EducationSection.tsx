import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const EducationSection = (): JSX.Element => {
  const education = [
    {
      institution: "Delhi Technological University, New Delhi",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 - 2026",
      details: [
        "Current CGPA: 8.1/10",
        "Member of Competitive Programming Club",
        "Teaching Assistant for Data Structures and Algorithms course",
      ],
    },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-[1280px]">
        <h2 className="text-[73.3px] leading-[72px] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-normal text-center mb-16">
          EDUCATION
        </h2>

        <div className="flex flex-col gap-10 max-w-[800px] mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="bg-[#4040404c] border-neutral-800 rounded-lg overflow-hidden shadow-[0px_20px_25px_-5px_#0000001a,0px_8px_10px_-6px_#0000001a]">
              <CardContent className="p-6">
                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium text-slate-200 text-[20.8px] leading-7">
                      {edu.institution}
                    </h3>
                    <div className="mx-3 w-px h-6 border-l border-gray-500"></div>
                    <span className="font-normal text-[#d5d5d5] text-[19.3px] leading-7">
                      {edu.degree}
                    </span>
                  </div>
                  <p className="font-normal text-gray-300 text-[16.5px] leading-5">
                    {edu.period}
                  </p>
                </div>

                <ul className="space-y-4 pl-4">
                  {edu.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="relative">
                      <div className="absolute w-[7px] h-[7px] top-1.5 -left-3.5">
                        <img alt="Marker" src="/marker.svg" />
                      </div>
                      <p className="font-normal text-gray-200 text-[15px] leading-5">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
