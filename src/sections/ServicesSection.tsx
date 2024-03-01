import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    short: 'RCT',
    desc: 'Advanced endodontic therapy to save your natural tooth painlessly.',
    image: '/root-canal.png',
  },
  {
    id: 'cleaning',
    title: 'Teeth Cleaning',
    short: 'Scaling',
    desc: 'Professional ultrasonic scaling and polishing for a healthier mouth.',
    image: '/teeth-cleaning.png',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    short: 'Whitening',
    desc: 'LED-powered whitening treatment that brightens your smile beautifully.',
    image: '/teeth-whitening.png',
  },
  {
    id: 'checkup',
    title: 'General Checkup',
    short: 'Checkup',
    desc: 'Comprehensive oral examination with modern digital diagnostics.',
    image: '/dental-checkup.png',
  },
  {
    id: 'extraction',
    title: 'Tooth Extraction',
    short: 'Extraction',
    desc: 'Safe and gentle removal procedures including wisdom teeth extraction.',
    image: '/tooth-extraction.png',
  },
  {
    id: 'braces',
    title: 'Braces & Alignment',
    short: 'Braces',
    desc: 'Correct misaligned teeth with traditional or modern ceramic braces.',
    image: '/braces.png',
  },
  {
    id: 'pulpectomy',
    title: 'Pulpectomy',
    short: 'Pediatric',
    desc: 'Specialized pediatric pulp therapy to preserve child tooth vitality.',
    image: '/pulpectomy.png',
  },
  {
    id: 'laminates',
    title: 'Dental Laminates',
    short: 'Veneers',
    desc: 'Ultra-thin porcelain veneers that beautifully transform your smile.',
    image: '/dental-laminates.png',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col h-[440px] rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: '#ffffff',
        border: '1px solid rgba(14, 154, 167, 0.1)',
        boxShadow: hovered 
          ? '0 20px 40px rgba(14, 154, 167, 0.12), 0 0 0 1px rgba(14, 154, 167, 0.4)' 
          : '0 4px 20px rgba(0, 0, 0, 0.04)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {/* Image Area - ~70% height */}
      <div className="relative h-[280px] w-full overflow-hidden shrink-0 bg-primary-50">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {/* Light fade gradient at the bottom of the image smoothly blending into the card */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent opacity-100" />
        
        {/* Pill Badge Top Right/Left */}
        <div className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow-[0_2px_8px_rgba(14,154,167,0.3)] transition-transform duration-300 group-hover:scale-105 bg-primary">
          {service.short}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative flex-1 p-6 flex flex-col bg-transparent -mt-5 z-10">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-2">
          <h3 className="font-display font-bold text-xl text-dental-dark mb-2 leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
          <p className="font-body text-gray-500 text-sm leading-relaxed line-clamp-2">
            {service.desc}
          </p>
        </div>
        
        {/* Learn More Button - Fades in on hover & translates up */}
        <div 
          className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
        >
          <span className="font-display font-bold text-xs text-primary uppercase tracking-wider">Learn More</span>
          <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden bg-white">
      {/* Decorative glows (light mode version) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.05] blur-[120px] bg-primary" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] pointer-events-none opacity-[0.04] blur-[100px] rounded-full bg-accent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 text-xs font-mono tracking-widest uppercase text-primary"
            >
              <div className="w-8 h-px bg-primary" /> Services <div className="hidden md:block w-8 h-px bg-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-extrabold text-dental-dark leading-tight"
            >
              Excellence in every <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="gradient-text">dental procedure.</span>
              </span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block pb-2"
          >
            <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary transition-all shadow-[0_4px_16px_rgba(14,154,167,0.25)] hover:shadow-[0_6px_24px_rgba(14,154,167,0.35)]">
              View All Treatments →
            </a>
          </motion.div>
        </div>

        {/* Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
