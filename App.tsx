import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Founder } from './components/Founder';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CONTACT_INFO } from './constants';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.012-1.052 1.012-1.052.589.589 1.235.961 1.953 1.123.719.163 1.555.104 2.258-.174.704-.279 1.322-.742 1.803-1.358l.12-.153c.482-.616.793-1.349.913-2.113.12-.763.045-1.546-.222-2.283-.266-.737-.715-1.383-1.313-1.884l-.07-.057zM12 21.75c-1.776 0-3.522-.463-5.078-1.34l-.363-.205-3.777.99.998-3.682-.209-.332a10.535 10.535 0 0 1-1.618-5.66C1.953 5.737 6.46 1.228 12 1.228c5.54 0 10.047 4.508 10.047 10.048 0 5.539-4.507 10.047-10.047 10.047z" />
  </svg>
);

const App: React.FC = () => {
  // Pre-filled message to ensure context when opening the chat
  const message = encodeURIComponent("Hi SN Design, I'm interested in your services.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${message}`;

  return (
    <div className="bg-sn-black min-h-screen text-white font-sans selection:bg-sn-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <Founder />
        <About />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-[#25D366]/50 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="font-bold text-sm tracking-wide">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default App;