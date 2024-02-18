import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Services', 'Reviews', 'Location', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3 px-6 mx-4 border border-primary-100/50' : ''}`}>
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-md">
            <span className="text-white font-extrabold text-sm tracking-tight">SD</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            <span className="text-dental-dark">Sun </span>
            <span className="gradient-text">Dental</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-gray-500 hover:text-primary text-sm font-medium transition-colors duration-200 tracking-wide relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:09964611955" className="text-primary text-sm font-medium hover:text-primary-dark transition-colors">
            📞 099646 11955
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            Book Now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-dental-dark transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dental-dark transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-dental-dark transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-xl mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4 shadow-xl border border-primary-100/30"
          >
            {links.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="text-gray-600 hover:text-primary text-left text-lg font-display transition-colors">
                {link}
              </button>
            ))}
            <button onClick={() => scrollTo('contact')} className="btn-primary px-5 py-3 rounded-xl font-semibold mt-2">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
