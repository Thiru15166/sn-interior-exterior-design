import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-sn-cream text-sn-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
           <SectionHeading subtitle="Our Philosophy" title="Refined Minimalism" align="center" light={false} />
           
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-light leading-relaxed text-gray-800 font-serif"
           >
             SN is more than a design studio; it is an atelier of spatial poetry. 
             We specialize in creating bespoke interior and exterior environments 
             that balance luxury with livability.
           </motion.p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
             {[
               { title: "Holistic Design", desc: "Seamless integration of architecture, landscape, and interiors." },
               { title: "Sustainable Luxury", desc: "Ethically sourced materials meet uncompromising aesthetic standards." },
               { title: "Bespoke Craft", desc: "Every detail is custom-designed and handcrafted for your space." }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.2 }}
                 className="flex flex-col items-center"
               >
                 <div className="w-12 h-12 border border-sn-black/20 rounded-full flex items-center justify-center mb-6 text-sn-black/50 font-serif italic">
                   0{idx + 1}
                 </div>
                 <h4 className="text-lg font-medium uppercase tracking-widest mb-4">{item.title}</h4>
                 <p className="text-gray-600 font-light text-sm leading-relaxed max-w-xs">
                   {item.desc}
                 </p>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};