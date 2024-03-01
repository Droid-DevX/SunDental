import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, UserCheck, Microscope, Calendar } from 'lucide-react';

const cards = [
  { icon: Star, title: '5.0 Rating', sub: '786 Google Reviews', color: '#f59e0b' },
  { icon: UserCheck, title: 'Expert Doctors', sub: 'Trained specialists', color: '#0e9aa7' },
  { icon: Microscope, title: 'Modern Equipment', sub: 'Latest dental tech', color: '#14b8a6' },
  { icon: Calendar, title: 'Open 7 Days', sub: '10 AM – 10 PM daily', color: '#8b5cf6' },
];

function LightCard({ icon: Icon, title, sub, color, index }: typeof cards[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden group border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Subtle color accent top-right */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20" style={{ background: color, filter: 'blur(20px)' }} />

      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}12`, border: `1px solid ${color}20`, color: color }}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <div className="font-display font-bold text-lg text-dental-dark leading-tight">{title}</div>
        <div className="text-gray-500 text-sm mt-0.5">{sub}</div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-16 md:py-32 overflow-hidden bg-white">
      {/* Subtle decorative dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute w-px bg-primary" style={{ left: `${10 + i * 12}%`, top: 0, bottom: 0 }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-primary tracking-widest uppercase"
            >
              <div className="w-8 h-px bg-primary" />
              About Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-dental-dark tracking-tight"
            >
              Where Smiles<br />
              <span className="gradient-text">Come Alive</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-500 text-base md:text-lg leading-relaxed mb-6"
            >
              Established in February 2023, Sun Dental has rapidly grown to be Kalaburagi's most trusted dental clinic. Located conveniently on Sedam Road near Kharge Petrol Bunk, we combine modern technology with compassionate care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-500 leading-relaxed mb-8"
            >
              Our team of highly skilled professionals offers comprehensive dental treatments — from routine checkups to complex procedures — in a relaxing, welcoming environment designed for your comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">786+</div>
                <div className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Patients Served</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">5.0</div>
                <div className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Avg Rating</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">2+</div>
                <div className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Years Strong</div>
              </div>
            </motion.div>
          </div>

          {/* Right: cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => <LightCard key={card.title} {...card} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
