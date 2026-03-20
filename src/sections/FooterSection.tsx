import { motion } from 'framer-motion';
import { MapPin, Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const socials = [
  { label: 'Google', icon: MapPin, href: 'https://www.google.com/maps?q=17.3258575,76.8536312' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/919964611955' },
];

const links = {
  Services: ['Root Canal', 'Teeth Cleaning', 'Extraction', 'Braces', 'Laminates', 'Checkup'],
  Hours: ['Mon – Sun', '10:00 AM – 08:00 PM', 'Walk-ins Welcome', 'Appointments Preferred'],
};

export default function FooterSection() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a2332 0%, #0f1922 100%)' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0e9aa7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-md">
                <span className="text-white font-extrabold text-sm">SD</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl text-white">Sun <span className="gradient-text">Dental</span></span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Premium dental care in Kalaburagi. Trusted by 786+ patients since 2023.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-primary border border-white/10 hover:border-primary/30 transition-all duration-200 bg-white/5"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([heading, items], gi) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + gi * 0.08 }}
            >
              <div className="font-display font-semibold text-white text-sm mb-4 tracking-wide">{heading}</div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item}>
                    <span className="text-white/35 text-xs sm:text-sm hover:text-white/70 transition-colors duration-200 cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Big logo watermark */}
        <div className="text-center mb-8">
          <div className="font-display text-5xl sm:text-[5rem] md:text-[8rem] font-extrabold text-white/[0.03] select-none leading-none tracking-tight">
            SUN DENTAL
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs font-mono">© 2023 Sun Dental, Kalaburagi. All rights reserved.</div>
          <div className="flex items-center flex-wrap justify-center gap-4 text-white/30 text-xs">
            <a href="tel:09964611955" className="hover:text-primary transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> 099646 11955
            </a>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Sedam Road, Karnataka 585105
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
