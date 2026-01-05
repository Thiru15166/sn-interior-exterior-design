import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('showcase');
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-sn-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={PROJECTS[currentSlide].imageUrl} 
            alt={PROJECTS[currentSlide].title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              // Safety check to prevent infinite loops if fallback fails
              target.onerror = null;
              target.src = "https://images.unsplash.com/photo-1600585154526-998dbeb1b0db?auto=format&fit=crop&w=1200&q=80";
            }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 lg:px-32">
        <div className="max-w-4xl mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sn-cream text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            Premium Architecture & Design
          </motion.p>
          
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white italic leading-tight mb-8"
          >
            {PROJECTS[currentSlide].title}
          </motion.h1>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="flex items-center gap-4"
          >
            <a 
              href="#showcase"
              onClick={handleScrollToProject}
              className="group flex items-center gap-2 text-white border border-white/30 px-8 py-4 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              View Project
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="hidden md:flex gap-2 ml-8">
              {PROJECTS.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className="p-2 focus:outline-none group"
                  aria-label={`Go to project ${idx + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-white' : 'w-6 bg-white/30 group-hover:bg-white/60'}`} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-24 bg-white/20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scrolldown"></div>
        </div>
      </motion.div>
    </section>
  );
};