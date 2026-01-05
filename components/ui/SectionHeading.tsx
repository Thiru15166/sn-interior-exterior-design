import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center', light = true }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center';
  const textColor = light ? 'text-sn-cream' : 'text-sn-black';
  const subColor = light ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`flex flex-col ${alignClass} mb-16`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-xs tracking-[0.25em] uppercase mb-4 ${subColor} font-sans font-medium`}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-4xl md:text-5xl font-serif italic ${textColor}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-[1px] w-24 mt-6 ${light ? 'bg-sn-cream/30' : 'bg-sn-black/30'}`} 
      />
    </div>
  );
};