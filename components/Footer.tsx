import React from 'react';
import { Logo } from './ui/Logo';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center items-center">
        <a 
          href="/" 
          onClick={scrollToTop} 
          className="inline-block mb-6 cursor-pointer min-w-[60px] min-h-[40px] group"
          title="Scroll to Top"
        >
          <Logo 
            className="h-20 md:h-24 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
          />
        </a>
        <p className="text-gray-600 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} SN Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
};