import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { isClinicOpen } from '../utils/time';

function LightInput({ label, type = 'text', value, onChange, placeholder, required = false }: {
  label: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mt-2">
      <motion.label
        initial={false}
        animate={{ y: focused || value ? -14 : 0, scale: focused || value ? 0.75 : 1, color: focused ? '#0e9aa7' : '#94a3b8' }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute left-5 top-5 text-sm font-medium pointer-events-none origin-left z-10"
      >
        {label}
      </motion.label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        className="w-full rounded-xl px-5 pt-8 pb-3 text-dental-dark text-sm outline-none transition-shadow duration-300 bg-white placeholder:text-gray-300"
        style={{
          border: `1.5px solid ${focused ? '#0e9aa7' : '#e2e8f0'}`,
          boxShadow: focused ? '0 0 0 3px rgba(14,154,167,0.08)' : 'none',
        }}
      />
    </div>
  );
}

function LightTextarea({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="relative mt-2">
      <motion.label
        initial={false}
        animate={{ y: focused || value ? -14 : 0, scale: focused || value ? 0.75 : 1, color: focused ? '#0e9aa7' : '#94a3b8' }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="absolute left-5 top-5 text-sm font-medium pointer-events-none origin-left z-10"
      >
        {label}
      </motion.label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        rows={4}
        className="w-full rounded-xl px-5 pt-8 pb-3 text-dental-dark text-sm outline-none resize-none transition-shadow duration-300 bg-white placeholder:text-gray-300"
        style={{
          border: `1.5px solid ${focused ? '#0e9aa7' : '#e2e8f0'}`,
          boxShadow: focused ? '0 0 0 3px rgba(14,154,167,0.08)' : 'none',
        }}
      />
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const isOpen = isClinicOpen();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden bg-white">
      {/* Soft background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(14,154,167,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-primary tracking-widest uppercase"
            >
              <div className="w-8 h-px bg-primary" /> Contact Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-dental-dark leading-tight"
            >
              Book Your<br /><span className="gradient-text">Appointment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 mb-10 leading-relaxed max-w-sm"
            >
              Ready for your perfect smile? Get in touch with us — we'll respond within the hour during clinic hours.
            </motion.p>

            {/* Contact quick info */}
            {[
              { icon: Phone, label: 'Call Us', value: '099646 11955', href: 'tel:09964611955' },
              { icon: Clock, label: 'Hours', value: isOpen ? 'Open Now · Closes at 08 PM' : 'Closed · Opens at 10 AM', href: undefined },
              { icon: MapPin, label: 'Address', value: 'MBH Complex, Kalaburagi', href: 'https://www.google.com/maps?q=17.3258575,76.8536312' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 mb-5"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary shrink-0 border border-primary-100">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-dental-dark hover:text-primary transition-colors text-sm font-medium">{item.value}</a>
                  ) : (
                    <div className="text-dental-dark text-sm font-medium">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xl relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ background: '#0e9aa7' }} />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="mb-4 text-emerald-500"
                    >
                      <CheckCircle2 className="w-16 h-16" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-dental-dark mb-2">Request Sent!</h3>
                    <p className="text-gray-500">We'll call you back within the hour. See you at Sun Dental!</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }); }} className="mt-6 text-primary text-sm font-medium hover:text-primary-dark transition-colors">Submit another request →</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h3 className="font-display text-xl font-bold text-dental-dark mb-2">Send us a message</h3>
                    <LightInput label="Your Name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="John Doe" required />
                    <LightInput label="Phone Number" type="tel" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} placeholder="9876543210" required />
                    <div className="relative mt-2">
                      <label className="absolute left-5 top-[6px] text-[10.5px] text-gray-400 font-medium pointer-events-none z-10">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        className="w-full rounded-xl px-5 pt-8 pb-3 text-dental-dark text-sm outline-none transition-shadow duration-300 bg-white appearance-none"
                        style={{ border: '1.5px solid #e2e8f0' }}
                      >
                        <option value="">Select a service</option>
                        {['Root Canal Treatment', 'Teeth Cleaning', 'Teeth Whitening', 'Dental Checkup', 'Tooth Extraction', 'Braces', 'Dental Laminates', 'Composite Bonding', 'Pulpectomy', 'Other'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {/* Custom arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 font-bold text-lg">▾</div>
                    </div>
                    <LightTextarea label="Message (optional)" value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} placeholder="Tell us about your dental concern..." />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full py-4 mt-2 rounded-xl font-display font-bold text-base transition-all relative overflow-hidden shadow-lg"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </span>
                      ) : 'Book Appointment →'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
