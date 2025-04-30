import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlowCard from './GlowCard';
import { Award, LineChart } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type RatingPoint = {
  date: string;
  rating: number;
};

type PlatformInfo = {
  name: string;
  icon: React.ReactNode;
  color: string;
  username: string;
  url: string;
  rating: string;
  fetchData: (username: string) => Promise<RatingPoint[]>;
  problems?: string;
};

const leetcodeData = async (username: string): Promise<RatingPoint[]> => {
  const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest/history`);
  const data = await res.json();
  if (!data || !data.contestHistory) return [];
  // Filter only attended contests
  const filteredData = data.contestHistory.filter((entry: any) => entry.attended);
  return filteredData.map((entry: any) => ({
    date: new Date(
      (entry.contest?.startTime ?? entry.startTime) * 1000
    ).toISOString().split('T')[0],
    rating: entry.rating,
  }));
};


const codeforcesData = async (username: string): Promise<RatingPoint[]> => {
  const res = await fetch(`https://codeforces.com/api/user.rating?handle=${username}`);
  const data = await res.json();
  if (data.status !== 'OK') return [];
  return data.result.map((entry: any) => ({
    date: new Date(entry.ratingUpdateTimeSeconds * 1000).toISOString().split('T')[0],
    rating: entry.newRating,
  }));
};

const codechefData = async (username: string): Promise<RatingPoint[]> => {
  const res = await fetch(`https://codechef-api.vercel.app/handle/${username}`);
  const data = await res.json();
  if (!data.ratingData) return [];
  return data.ratingData.map((entry: any) => ({
    year : entry.getyear,
    month: entry.getmonth,
    day: entry.getday,
    date : `${entry.getyear}-${entry.getmonth}-${entry.getday}`,
    rating: entry.rating,
  }));
};

const platformsWithInfo: PlatformInfo[] = [
  {
    name: "LeetCode- Knight 🛡️",
    icon: <Award className="w-6 h-6 text-[#FFA116]" />,
    color: '#FFA116',
    username: 'resorcinol',
    url: 'https://leetcode.com/resorcinol/',
    rating: "1856",
    fetchData: leetcodeData,
    problems: "Solved 350+ problems",
  },
  {
    name: "Codeforces - specialist 🩵",
    icon: <LineChart className="w-6 h-6 text-[#318CE7]" />,
    color: '#318CE7',
    username: 'resorcinol',
    url: 'https://codeforces.com/profile/resorcinol',
    rating: "1465",
    fetchData: codeforcesData,
  },
  {
    name: "CodeChef - 4 star ⭐",
    icon: <Award className="w-6 h-6 text-[#9C7A2E]" />,
    color: '#9C7A2E',
    username: 'resorcinol',
    url: 'https://www.codechef.com/users/resorcinol',
    rating: "1802",
    fetchData: codechefData,
  }
];

const CompetitiveStats: React.FC = () => {
  const [chartData, setChartData] = useState<RatingPoint[][]>([[], [], []]);
  const [loading, setLoading] = useState([true, true, true]);

  useEffect(() => {
    platformsWithInfo.forEach((platform, idx) => {
      platform.fetchData(platform.username).then(data => {
        setChartData(prev => {
          const newData = [...prev];
          newData[idx] = data;
          return newData;
        });
        setLoading(prev => {
          const newLoading = [...prev];
          newLoading[idx] = false;
          return newLoading;
        });
      });
    });
  }, []);

  const renderChart = (data: RatingPoint[], color: string) => (
    <ResponsiveContainer width="100%" height={150}>
      <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
        <XAxis dataKey="date" stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
        <YAxis stroke="#666666" tick={{ fill: '#666666', fontSize: 10 }} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333333', borderRadius: '4px', boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)' }} 
          labelStyle={{ color: 'white' }} 
        />
        <Line 
          type="monotone" 
          dataKey="rating" 
          stroke={color} 
          strokeWidth={3} 
          dot={{ r: 3, fill: color, strokeWidth: 2, stroke: "#ffffff" }} 
          activeDot={{ r: 6, fill: color, stroke: 'white', strokeWidth: 2 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-corner-light-premium opacity-30 z-0"></div>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="section-heading-premium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Competitive Programming Stats
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platformsWithInfo.map((platform, index) => (
            <GlowCard 
              key={platform.name} 
              delayIndex={index} 
              intensity="high"
              className="comp-card"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {platform.icon}
                  <h3 className="text-xl font-bold italic ml-2">{platform.name}</h3>
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <p className="text-white/80">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="underline-link">
                      @{platform.username}
                    </a>
                  </p>
                  <p className="text-lg font-semibold" style={{color: platform.color}}>{platform.rating}</p>
                </div>
                <div className="mb-3 h-[150px]">
                  {loading[index] ? (
                    <div className="flex items-center justify-center h-full text-white/60">Loading...</div>
                  ) : (
                    renderChart(chartData[index], platform.color)
                  )}
                </div>
                {platform.problems && (
                  <p className="text-sm text-white/60 text-center mt-4">{platform.problems}</p>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;
