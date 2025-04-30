
import React from 'react';
import { 
  Github, Code2, Database, 
  ServerCrash, Container, Cpu, Cloud, Terminal, 
  Paintbrush, Layers, CheckCircle, Award, BarChart3
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "React", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Node.js", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "TailwindCSS", icon: <Paintbrush className="w-5 h-5 mr-2" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5 mr-2" /> },
    { name: "Docker", icon: <Container className="w-5 h-5 mr-2" /> },
  ];
  
  const techStackRow2 = [
    { name: "Java", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Kubernetes", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "GitHub Actions", icon: <Github className="w-5 h-5 mr-2" /> }
  ];
  
  const renderMarqueeItems = (items: Array<{ name: string, icon: React.ReactNode }>) => {
    // Duplicate items enough times to fill the marquee and avoid empty start
    const repeatCount = 6; // Adjust this number based on your marquee/container width
    const duplicatedItems = Array.from({ length: repeatCount }).flatMap(() => items);
    // To ensure an infinite loop and never empty, duplicate items enough times to always fill the visible area.
    // The animation should be seamless, so the content must be at least twice as wide as the container.
    // This is handled by duplicating the items array multiple times.
    return (
      <>
      {duplicatedItems.map((tech, index) => (
        <span key={index} className="tech-badge-premium mx-3 flex items-center shrink-0">
        {tech.icon}
        {tech.name}
        </span>
      ))}
      </>
    );
    };

    return (
    <section className="py-20 flex flex-col bg-dark-100/30 relative overflow-hidden">
      {/* Light effect for tech section */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      
      {/* Top row - scrolling right */}
      <div className="relative flex overflow-x-hidden">
      <div className="animate-scroll-right py-5 flex whitespace-nowrap">
        {renderMarqueeItems(techStackRow1)}
      </div>
      </div>
      
      {/* Bottom row - scrolling left */}
      <div className="relative flex overflow-x-hidden">
      <div className="animate-scroll-left py-5 flex whitespace-nowrap">
        {renderMarqueeItems(techStackRow2)}
      </div>
      </div>
    </section>
    );
  };

export default TechMarquee;
