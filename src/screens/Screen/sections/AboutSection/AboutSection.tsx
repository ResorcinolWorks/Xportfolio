import React from "react";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

export const AboutSection = (): JSX.Element => {
  const introText = [
    "I specialize in crafting high-performance, responsive, and visually stunning web applications. With expertise in",
    "JavaScript, TypeScript, React, Next.js, and Node.js, I build seamless user experiences. Whether it's a custom website, a",
    "web app, or a SaaS platform, I turn ideas into scalable digital solutions.",
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto py-16 px-4 relative">
      <div className="flex flex-col items-center">
        {/* Main heading with reduced size */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full mb-8 text-center"
        >
          <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl leading-tight tracking-[-0.02em] text-white mb-4 heading-glow">
            I am Resorcinol
          </h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="inline-block relative">
              <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight tracking-[-0.02em] animated-gradient-text p-4">
                a FullStack Developer
              </h2>
              <motion.div
                className="absolute -inset-2 rounded-xl opacity-20"
                animate={{
                  background: [
                    "linear-gradient(0deg, #ec4899, #8b5cf6, #3b82f6)",
                    "linear-gradient(360deg, #3b82f6, #ec4899, #8b5cf6)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Description paragraphs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[1088px] mb-16 px-4"
        >
          {introText.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-light text-base md:text-lg tracking-wide leading-relaxed text-gray-300 text-center mb-2"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Resume button with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <Button onClick={() => window.open('https://drive.google.com/file/d/1KTkBeRJL17TkEYg20SnM0F3dkPgTQSjs/view?usp=drive_link', '_blank')} className="bg-[#1a1a1a] text-white rounded-[100px] border border-[#ffffff1a] h-[54px] w-[167px] relative overflow-hidden glow-shadow">
            <span className="font-medium text-lg tracking-wide relative z-10">
              View Resume
            </span>
            <motion.div
              className="absolute inset-0 rounded-[100px]"
              animate={{
              background: [
                "linear-gradient(0deg, #ec4899, #8b5cf6, #3b82f6)",
                "linear-gradient(360deg, #3b82f6, #ec4899, #8b5cf6)",
              ],
              }}
              transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              }}
              style={{ opacity: 0.2 }}
            />
            </Button>
        </motion.div>
      </div>
    </section>
  );
};