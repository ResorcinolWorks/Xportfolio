import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

export const CPStatsSection = (): JSX.Element => {
  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      stats: {
        rating: "1829",
        solved: "350+ Problems",
        rank: "Top 5%",
      },
      color: "text-yellow-500",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      stats: {
        rating: "1750 (3★)",
        contests: "5+ Contests",
        rank: "Top 14%",
      },
      color: "text-orange-500",
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      stats: {
        rating: "1365 (Pupil)",
        contests: "25+ Contests",
        rank: "Top 20%",
      },
      color: "text-blue-500",
    },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="container mx-auto max-w-[1280px]">
        <h2 className="text-[73.3px] leading-[72px] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-normal text-center mb-16">
          CP STATS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card key={index} className="bg-[#4040404c] border-neutral-800 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className={`w-10 h-10 ${platform.color}`} />
                    <h3 className="text-2xl font-semibold text-white">
                      {platform.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(platform.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 capitalize">{key}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};