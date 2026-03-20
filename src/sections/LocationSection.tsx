import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Map, Phone } from 'lucide-react';
import { isClinicOpen } from '../utils/time';

export default function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const isOpen = isClinicOpen();
  const mapsUrl = 'https://www.google.com/maps?q=17.3258575,76.8536312';

  return (
    <section id="location" className="relative py-16 md:py-32 overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary-50/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Google Maps Embed Map */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[460px] lg:h-[500px] w-full rounded-3xl overflow-hidden bg-primary-50 border border-primary-100 shadow-xl"
          >
            <iframe 
              src="https://maps.google.com/maps?q=17.3258575,76.8536312&hl=en&z=17&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.1)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs font-mono text-dental-dark font-bold shadow-lg border border-primary-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Kalaburagi, Karnataka
            </div>
            
            {/* Subtle inset shadow to soften iframe edges */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_30px_rgba(14,154,167,0.1)] rounded-3xl" />
          </motion.div>

          {/* Right: Info */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-primary tracking-widest uppercase"
            >
              <div className="w-8 h-px bg-primary" /> Find Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-extrabold mb-8 text-dental-dark leading-tight"
            >
              Our <span className="gradient-text">Location</span>
            </motion.h2>

            {/* Address card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="card-light rounded-2xl p-7 mb-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary shrink-0 border border-primary-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-dental-dark font-display font-bold text-lg mb-1.5">Sun Dental Clinic</div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    Shop No. 10, MBH Complex,<br />
                    Near Kharge Petrol Bunk,<br />
                    Jaynagar, Tilak Nagar, Kusnoor,<br />
                    Kalaburagi, Karnataka 585105
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-primary-50/50 rounded-2xl p-6 mb-8 border border-primary-100/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary border border-primary-100/50 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-dental-dark text-lg">Opening Hours</span>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold border ${isOpen ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 'bg-red-100 text-red-700 border-red-200'}`}>
                  ● {isOpen ? 'Open Now' : 'Closed'}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm px-1">
                <div className="text-gray-500 font-medium">Monday – Sunday</div>
                <div className="text-primary font-bold">10:00 AM – 08:00 PM</div>
                <div className="text-gray-500 font-medium">Phone Number</div>
                <a href="tel:09964611955" className="text-primary font-bold hover:text-primary-dark transition-colors">099646 11955</a>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-bold text-sm shadow-[0_4px_16px_rgba(14,154,167,0.3)] hover:shadow-[0_6px_24px_rgba(14,154,167,0.45)]"
              >
                <Map className="w-4 h-4" /> Open in Google Maps
              </motion.a>
              <motion.a
                href="tel:09964611955"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-semibold text-sm bg-white"
              >
                <Phone className="w-4 h-4" /> Call Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
