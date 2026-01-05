import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Logo } from './ui/Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Handle scroll to top
    if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMobileMenuOpen(false);
        return;
    }

    // Handle anchor links
    if (href.startsWith('#')) {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            // Offset for fixed header (approx 80px)
            const headerOffset = 80; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    }
  };

  // Determine if we should show the compact navbar state
  const isCompact = isScrolled || mobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isCompact ? 'bg-sn-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="z-50 relative block group cursor-pointer min-w-[60px] min-h-[40px] flex items-center"
          aria-label="SN Design Homepage - Scroll to top"
          title="Scroll to Top"
        >
          <Logo 
            className={`transition-all duration-500 ease-in-out w-auto object-contain group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] ${
              isCompact ? 'h-12 md:h-20 opacity-100' : 'h-16 md:h-28 opacity-100 group-hover:opacity-100'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-300 font-light relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 relative focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-sn-black flex flex-col items-center justify-center space-y-8 md:hidden"
            >
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-2xl font-serif italic text-white hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};