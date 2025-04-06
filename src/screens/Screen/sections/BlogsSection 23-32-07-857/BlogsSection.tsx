import { ClockIcon, EyeIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const BlogsSection = (): JSX.Element => {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      title:
        "Ultimate Guide to Database Management Systems (DBMS) - Everything You Need to Know",
      excerpt:
        "DBMS is a theoretical subject crucial for a software engineer. It has one of the most asked qns in interview...",
      author: "Resorcinol",
      date: "May 25, 2024",
      readTime: "3 min read",
      tags: ["theory", "transaction", "dbms", "database"],
      link: "https://x.com/Resorcinolworks/status/1794115219284951493",
    },
    {
      id: 2,
      title:
        "Competitive Programming: A Beginner's Guide to Problem Solving",
      excerpt:
        "Feeling stuck in initial stages of competitive programming? This blog post is for you. It covers the basics...",
      author: "Resorcinol",
      date: "January 1, 2025",
      readTime: "4 min read",
      tags: ["beginner", "problem solving", "algorithms"],
      link: "https://x.com/Resorcinol10104/status/1874398550018425035",
    },
  ];

  return (
    <section className="w-full py-20 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col max-w-[848px] mx-auto space-y-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Card className="w-full bg-zinc-900 rounded-xl overflow-hidden border-0">
                <CardContent className="p-0">
                  <div className="p-6 space-y-6">
                    {/* Author info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[url('https://avatars.githubusercontent.com/u/136371552?v=4')] bg-cover bg-center" />
                      <div className="flex flex-col">
                        <span className="font-medium text-[14.5px] text-white font-['Inter',Helvetica]">
                          {post.author}
                        </span>
                        <span className="text-[12.9px] text-gray-400 font-['Inter',Helvetica]">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-0">
                      <h3 className="font-['Poppins',Helvetica] font-bold text-white text-2xl leading-8">
                        {post.title}
                      </h3>
                    </div>

                    {/* Excerpt */}
                    <div className="font-['Inter',Helvetica] font-normal text-gray-400 text-[19.9px] leading-6">
                      {post.excerpt}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="bg-zinc-800 text-gray-300 hover:bg-zinc-700 rounded font-normal text-[12.9px] px-2 py-1 h-6"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1 text-gray-500">
                        <ClockIcon className="w-5 h-5" />
                        <span className="text-sm font-['Montserrat',Helvetica]">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

