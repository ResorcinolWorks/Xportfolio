import { Github } from "lucide-react";
import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black py-6 px-4">
      <div className="container mx-auto max-w-[1280px] flex flex-col items-center justify-center">
        <h2 className="font-bold text-2xl md:text-[29.1px] text-slate-200 leading-8 font-['Inter',Helvetica] mb-8 md:mb-12 text-center">
          Resorcinol
        </h2>

        <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
          <a
            href="https://github.com/ResorcinolWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
           <a
            href="https://twitter.com/resorcinolworks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-200 hover:text-white bg-white transition-colors p-2 hover:bg-white/10 rounded-full"
          >
            <img src="https://imgs.search.brave.com/fBZO_bCIScU_iYaSl0a1Sb0VrNZs6x1D_EZCD9Sp26g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NlL1hfbG9nb18y/MDIzLnN2Zw" alt="Twitter" className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        

        <div className="text-center px-4">
          <p className="font-['Inter',Helvetica] font-normal text-slate-200 text-sm md:text-[16.5px] leading-5">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};