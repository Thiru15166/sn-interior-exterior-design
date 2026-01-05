import React from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_DATA } from '../constants';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="relative min-h-[85vh] py-24 w-full flex items-center justify-center overflow-hidden bg-sn-black">
      {/* Background Layer - Subtle Gradient instead of Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-sn-charcoal/20 to-black z-0 opacity-50" />
        {/* Radial gradient for spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sn-charcoal/30 via-black/50 to-black z-0" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-sn-gold mb-8 block font-medium"
          >
            The Visionary
          </motion.span>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-10 leading-tight italic">
            "{FOUNDER_DATA.vision}"
          </h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-[1px] bg-white/40 mx-auto mb-10" 
          />
          
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl md:text-3xl font-serif text-white">
              {FOUNDER_DATA.name}
            </h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300">
              {FOUNDER_DATA.role}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};