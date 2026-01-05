import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { SectionHeading } from './ui/SectionHeading';

export const ProjectShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 md:py-32 bg-sn-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Selected Works" title="Curated Excellence" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-16 md:gap-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* Image Wrapper */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-sn-charcoal shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-white/5">
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Safety check to prevent infinite loops
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1600585154526-998dbeb1b0db?auto=format&fit=crop&w=1200&q=80";
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[0.25,1,0.5,1]" 
                />
              </div>
              
              {/* Caption */}
              <div className="mt-6 flex flex-col">
                 <span className="text-xs font-sans font-medium text-gray-500 uppercase tracking-[0.2em] mb-2 group-hover:text-sn-gold transition-colors duration-300">
                   {project.category}
                 </span>
                 <h3 className="text-3xl font-serif italic text-white group-hover:text-gray-300 transition-colors duration-300">
                   {project.title}
                 </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};