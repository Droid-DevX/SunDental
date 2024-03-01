import { motion } from 'framer-motion';
import { Phone, Gem, Leaf, Star } from 'lucide-react';
import { isClinicOpen } from '../utils/time';

export default function HeroSection() {
  const scrollDown = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  const isOpen = isClinicOpen();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-white">
      {/* Soft radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(14,154,167,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-mono mb-6 border shadow-sm whitespace-nowrap ${isOpen ? 'text-primary border-primary-100' : 'text-red-500 border-red-100'}`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse shrink-0 ${isOpen ? 'bg-emerald-400' : 'bg-red-500'}`} />
            {isOpen ? 'Open Today · 10:00 AM – 10:00 PM' : 'Closed · Opens at 10:00 AM'}
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-dental-dark">Premium</span>
            <br />
            <span className="gradient-text">Dental</span>
            <br />
            <span className="text-dental-dark">Care</span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg font-body leading-relaxed mb-8 max-w-md">
            Sun Dental — trusted by <span className="text-primary font-semibold">900+ patients</span> in Kalaburagi. Advanced treatments, gentle hands, perfect smiles.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-6 sm:px-8 py-4 rounded-xl font-display font-bold text-sm sm:text-base shadow-[0_4px_16px_rgba(14,154,167,0.3)] hover:shadow-[0_6px_24px_rgba(14,154,167,0.45)] transition-all"
            >
              Book Appointment
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="tel:09964611955"
              className="btn-outline px-6 sm:px-8 py-4 rounded-xl font-display font-semibold text-sm sm:text-base flex items-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </motion.a>
          </div>
          
          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br z-[${4-i}]`} style={{ background: i%2===0 ? 'linear-gradient(135deg, #0e9aa7, #087f8c)' : 'linear-gradient(135deg, #14b8a6, #0e9aa7)' }}>
                  {['VK', 'SA', 'RM', 'P'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-4 h-4" />
                ))}
              </div>
              <div className="text-xs text-gray-400 font-medium">5.0 from 786+ reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side: Image + Floating Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block relative"
        >
          {/* Main big elegant photo */}
          <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/50 bg-white">
            <img 
              src="/dental-checkup.png" 
              alt="Premium Dental Care" 
              className="w-full h-full object-cover scale-[1.02]"
            />
            {/* Subtle inner shadow for photo */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(14,154,167,0.1)] pointer-events-none" />
          </div>

          {/* Floating Stat 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -4 }}
            className="absolute -right-12 top-20 card-light px-6 py-4 rounded-3xl flex items-center gap-4 w-56 backdrop-blur-md bg-white/95"
          >
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary border border-primary-100 shrink-0">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-black text-xl gradient-text">Modern</div>
              <div className="text-gray-400 text-xs font-medium">Advanced Tech</div>
            </div>
          </motion.div>

          {/* Floating Stat 2 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -4 }}
            className="absolute -left-12 bottom-24 card-light px-6 py-4 rounded-3xl flex items-center gap-4 w-60 backdrop-blur-md bg-white/95"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100 shrink-0">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-black text-xl text-emerald-500">Painless</div>
              <div className="text-gray-400 text-xs font-medium">Gentle Treatments</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary text-xs"
      >
        <span className="font-mono tracking-widest text-primary/50">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.button>
    </section>
  );
}
