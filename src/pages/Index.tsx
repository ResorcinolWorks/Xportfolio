import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import ProjectsSection from '@/components/ProjectsSection';
import EducationTimeline from '@/components/EducationTimeline';
import CompetitiveStats from '@/components/CompetitiveStats';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index: React.FC = () => {
  useEffect(() => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainContent = document.querySelector('main');
    const navLinks = document.querySelectorAll('#mobile-menu a');

    const openMenu = () => {
      if (mobileMenu) {
        mobileMenu.style.transform = 'translateX(0)';
        if (mainContent) {
          mainContent.style.filter = 'blur(4px)';
        }
      }
    };

    const closeMenu = () => {
      if (mobileMenu) {
        mobileMenu.style.transform = 'translateX(100%)';
        if (mainContent) {
          mainContent.style.filter = 'none';
        }
      }
    };

    mobileMenuButton?.addEventListener('click', openMenu);
    closeMenuButton?.addEventListener('click', closeMenu);
    
    // Add click event to all navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      mobileMenuButton?.removeEventListener('click', openMenu);
      closeMenuButton?.removeEventListener('click', closeMenu);
      navLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-dark min-h-screen relative"
      >
        {/* Enhanced premium light source effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Main light source */}
          <div className="absolute -top-[30vh] -left-[30vh] w-[80vh] h-[80vh] rounded-full bg-radial-glow-premium opacity-60 animate-glow-pulse"></div>
          
          {/* Secondary light source */}
          <div className="absolute top-[70vh] -right-[20vh] w-[50vh] h-[50vh] rounded-full bg-radial-glow-premium opacity-40 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Premium light rays */}
          <div className="light-ray-premium" style={{ 
            top: '15vh', 
            left: 0, 
            width: '40vw', 
            transform: 'rotate(30deg)',
            opacity: 0.2
          }}></div>
          
          <div className="light-ray-premium" style={{ 
            top: '35vh', 
            left: 0, 
            width: '60vw', 
            transform: 'rotate(15deg)',
            opacity: 0.15,
            animationDelay: '1s'
          }}></div>
          
          <div className="light-ray-premium" style={{ 
            top: '65vh', 
            left: 0, 
            width: '50vw', 
            transform: 'rotate(-10deg)',
            opacity: 0.12,
            animationDelay: '2s'
          }}></div>
          
          {/* Floating glow orbs */}
          <div className="absolute w-[100px] h-[100px] rounded-full bg-white/5 blur-xl animate-float" style={{ 
            top: '20vh', 
            left: '30vw',
            animationDelay: '0s'
          }}></div>
          
          <div className="absolute w-[80px] h-[80px] rounded-full bg-white/5 blur-xl animate-float" style={{ 
            top: '60vh', 
            right: '25vw',
            animationDelay: '1.5s'
          }}></div>
        </div>
        
        <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold ">Resorcinol</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#projects" className="hover:text-white transition-colors relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-white transition-colors relative group">
                    Education
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#cp-stats" className="hover:text-white transition-colors relative group">
                    CP Stats
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="hover:text-white transition-colors relative group">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1DbpoLYU3wDHafolh9WwFPfvNOkRzWNc-/view?usp=sharing" 
                    className="cta-button-premium text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors" id="mobile-menu-button" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Mobile Menu */}
            <div className="md:hidden fixed inset-0 bg-black z-50 transform transition-all duration-300 ease-in-out translate-x-full" id="mobile-menu">
              <div className="absolute inset-0 bg-black"></div>
              <div className="relative z-10">
                <div className="flex justify-end p-4">
                  <button className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors" id="close-menu" aria-label="Close menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col items-center space-y-8 p-8">
                  <a href="#projects" className="text-white hover:text-white/80 transition-colors text-lg font-medium">Projects</a>
                  <a href="#education" className="text-white hover:text-white/80 transition-colors text-lg font-medium">Education</a>
                  <a href="#cp-stats" className="text-white hover:text-white/80 transition-colors text-lg font-medium">CP Stats</a>
                  <a href="#blogs" className="text-white hover:text-white/80 transition-colors text-lg font-medium">Blogs</a>
                  <a href="#contact" className="text-white hover:text-white/80 transition-colors text-lg font-medium">Contact</a>
                  <a 
                    href="https://drive.google.com/file/d/1DbpoLYU3wDHafolh9WwFPfvNOkRzWNc-/view?usp=sharing" 
                    className="cta-button-premium text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
        
        <main className="pt-16 relative z-10">
          <HeroSection />
          <TechMarquee />
          <ProjectsSection />
          <section id="education" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading-premium">Education</h2>
              <EducationTimeline />
            </div>
          </section>
          <section id="cp-stats" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading-premium">Competitive Programming</h2>
              <CompetitiveStats />
            </div>
          </section>
          <section id="blogs" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="section-heading-premium">Blogs</h2>
              <BlogSection />
            </div>
          </section>
          <ContactSection />
        </main>
        
        <footer className="py-12 px-4 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Resorcinol. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
