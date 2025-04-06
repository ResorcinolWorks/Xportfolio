import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ExternalLink } from "lucide-react";

export const ProjectsSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: "HealthAI",
      description: "AI-powered health monitoring and analysis platform",
      image: "https://placehold.co/600x400/333/white?text=HealthAI",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      link: "https://github.com/ResorcinolWorks/HealthAi",
    },
    {
      title: "BusBooker",
      description: "Online bus ticket booking system" ,
      image: "https://placehold.co/600x400/333/white?text=BusBooker",
      tech: ["React", "Java", "SpringBoot", "Typescript"],
      link : " https://github.com/ResorcinolWorks/busbooker ",
    },
    {
      title: "View More on GitHub",
      description: "Check out more of my projects and contributions",
      isGithubCard: true,
      link: "https://github.com/resorcinolworks",
    }
  ];

  return (
    <section className="w-full bg-black py-16 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {project.isGithubCard ? (
                <Card className="bg-[#4040404c] border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden group hover-card-animation h-full flex flex-col justify-center items-center p-8">
                  <CardContent className="p-0 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>
                    <Button 
                      className="bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Visit GitHub
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card onClick={() => window.open(project.link, "_blank")}
                className="bg-[#4040404c] border-neutral-800 hover:border-neutral-700 transition-all duration-100 overflow-hidden group hover-card-animation">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-centre h-full">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-[#ffffff1a] rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                    </div>
                  </CardContent>
                </Card>
                
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
