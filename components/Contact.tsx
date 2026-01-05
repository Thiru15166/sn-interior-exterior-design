import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

export const Contact: React.FC = () => {
  const message = encodeURIComponent("Hi SN Design, I would like to discuss a project.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${message}`;
  
  // Strip spaces for the tel: link to ensure it works on all dialers
  const phoneLink = `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-sn-black text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 via-black to-black" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading subtitle="Get In Touch" title="Start Your Project" />

        <div className="flex flex-col lg:flex-row justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div className="space-y-8">
                {/* Email */}
                <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-start gap-6 hover:opacity-80 transition-opacity">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-sn-gold/50 transition-colors">
                        <Mail className="w-6 h-6 text-sn-gold" />
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Email Us</h4>
                        <p className="text-xl md:text-2xl font-serif break-words">{CONTACT_INFO.email}</p>
                    </div>
                </a>

                {/* Phone - Clickable for Dialer */}
                <a href={phoneLink} className="group flex items-start gap-6 hover:opacity-80 transition-opacity">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-sn-gold/50 transition-colors">
                        <Phone className="w-6 h-6 text-sn-gold" />
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Call Us</h4>
                        <p className="text-xl md:text-2xl font-serif">{CONTACT_INFO.phone}</p>
                    </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-6">
                    <div className="p-4 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-6 h-6 text-sn-gold" />
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-1">Visit Us</h4>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* CTA / WhatsApp Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="h-full p-8 md:p-12 bg-gradient-to-br from-sn-charcoal to-black border border-white/10 rounded-none relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                <h3 className="text-3xl font-serif italic mb-6 relative z-10">Ready to transform your space?</h3>
                <p className="text-gray-400 mb-10 leading-relaxed relative z-10">
                    We are currently accepting new projects. Contact us to discuss your vision and how we can bring it to life.
                </p>
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-sn-gold text-black px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 relative z-10"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};