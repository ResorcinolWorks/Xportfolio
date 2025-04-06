import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { EducationSection } from "./sections/EducationSection/EducationSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { SkillsSection } from "./sections/SkillsSection/SkillsSection";
import { CPStatsSection } from "./sections/CPStatsSection/CPStatsSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { motion, AnimatePresence } from "framer-motion";
import { BlogsSection } from "./sections/BlogsSection 23-32-07-857/BlogsSection";

export const Screen = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About Me", active: true },
    { name: "Projects", active: false },
    { name: "Tech Stack", active: false },
    { name: "Education", active: false },
    { name: "CP Stats", active: false },
    { name: "Blogs", active: false },
    { name: "Contact", active: false },
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div 
      className="w-full bg-[#020202] relative"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Enhanced Grid Background */}
      <div className="fixed inset-0 grid-background" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #ec489944 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #3b82f644 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #8b5cf644 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #ec489944 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative">
        <div className="relative w-full">
          <header className="sticky top-0 z-50 w-full py-4 px-6 bg-[#020202]/80 backdrop-blur-md enhanced-shadow">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="font-medium text-[25px] leading-7 tracking-[0] gradient-border p-2 rounded-lg"
              >
                <span className="text-white text-glow">&lt;</span>
                <span className="text-[#9b9b9b] animated-gradient-text">Reso 🌱</span>
                <span className="text-white text-glow">/&gt;</span>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                    className={`font-['Montserrat',Helvetica] text-base leading-6 ${
                      item.active
                        ? "text-white text-glow"
                        : "text-[#9b9b9b] hover:text-white/80"
                    } transition-all duration-300 hover:scale-110`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="md:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute top-full left-0 right-0 bg-[#020202]/95 backdrop-blur-md py-4 px-6 enhanced-shadow"
                >
                  {navItems.map((item, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      href={`#${item.name.toLowerCase().replace(" ", "-")}`}
                      className={`block py-2 font-['Montserrat',Helvetica] text-base leading-6 ${
                        item.active
                          ? "text-white text-glow"
                          : "text-[#9b9b9b] hover:text-white/80"
                      } transition-all duration-300`}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.nav>
              )}
            </AnimatePresence>
          </header>

          <main className="w-full">
            <motion.section 
              id="about-me" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <AboutSection />
            </motion.section>

            <motion.section 
              id="projects" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ProjectsSection />
            </motion.section>

            <motion.section 
              id="tech-stack" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <SkillsSection />
            </motion.section>

            <motion.section 
              id="education" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <EducationSection />
            </motion.section>


            <motion.section 
              id="cp-stats" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <CPStatsSection />
            </motion.section>

            <motion.section 
              id="blogs" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <BlogsSection />
            </motion.section>

            <motion.section 
              id="contact" 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <ContactSection />
            </motion.section>

            <motion.footer 
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <FooterSection />
            </motion.footer>
          </main>
        </div>
      </div>
    </motion.div>
  );
};