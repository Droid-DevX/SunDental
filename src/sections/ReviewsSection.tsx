import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Priya Sharma', date: 'Jan 2025', rating: 5, text: 'Doctor is very professional and explains everything clearly before the procedure. The RCT was completely painless. Best dental clinic in Kalaburagi!', avatar: 'PS', color: '#0e9aa7' },
  { name: 'Ravi Kumar', date: 'Dec 2024', rating: 5, text: 'Friendly staff and a great experience overall. The clinic is very clean and modern. My teeth cleaning was thorough and they made sure I was comfortable throughout.', avatar: 'RK', color: '#14b8a6' },
  { name: 'Ananya Reddy', date: 'Feb 2025', rating: 5, text: 'Careful and painless treatment. Dr. sahab takes time to listen and understand your concerns. My child was not scared at all — they have such a calming way.', avatar: 'AR', color: '#8b5cf6' },
  { name: 'Mohammed Imran', date: 'Nov 2024', rating: 5, text: 'Very good service at affordable prices. Had a tooth extraction done and felt zero pain. Post procedure care instructions were clear. Highly recommend Sun Dental!', avatar: 'MI', color: '#f59e0b' },
  { name: 'Lakshmi Devi', date: 'Mar 2025', rating: 5, text: 'Amazing experience! The braces adjustment was quick and the doctor was very gentle. The clinic has great ambience and the staff is warm and welcoming.', avatar: 'LD', color: '#ec4899' },
  { name: 'Suresh Patil', date: 'Oct 2024', rating: 5, text: 'I had composite bonding done and the results are stunning. Natural-looking finish and done in a single visit. 5 stars is not enough for this clinic!', avatar: 'SP', color: '#10b981' },
];

function StarRating({ count = 5, delay = 0 }: { count?: number; delay?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.06, type: 'spring', stiffness: 300 }}
          className="text-amber-400"
        >
          <Star fill="currentColor" className="w-4 h-4" />
        </motion.span>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="bg-white rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden min-w-[300px] max-w-[340px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Subtle glow */}
      <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-10 blur-2xl" style={{ background: review.color }} />

      {/* Quote mark */}
      <div className="absolute top-4 right-4 font-display text-6xl text-gray-100 leading-none select-none">"</div>

      <StarRating delay={index * 0.1} />

      <p className="text-gray-500 text-sm leading-relaxed flex-1 relative z-10">"{review.text}"</p>

      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-sm"
          style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}cc)` }}
        >
          {review.avatar}
        </div>
        <div>
          <div className="text-dental-dark font-semibold text-sm">{review.name}</div>
          <div className="text-gray-400 text-xs">{review.date} · Google Review</div>
        </div>
        <div className="ml-auto">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#4285F4" />
            <path d="M17.6 12.2c0-.4 0-.7-.1-1H12v2h3.1c-.1.7-.6 1.3-1.2 1.7v1.4h2c1.1-1 1.7-2.5 1.7-4.1z" fill="#34A853" />
            <path d="M12 18c1.6 0 2.9-.5 3.8-1.4l-2-1.4c-.5.3-1.1.5-1.8.5-1.4 0-2.6-.9-3-2.2H7v1.5C7.9 16.9 9.8 18 12 18z" fill="#FBBC05" />
            <path d="M9 13.5c-.1-.3-.2-.7-.2-1s.1-.7.2-1V10H7c-.4.8-.6 1.6-.6 2.5s.2 1.7.6 2.5l2-1.5z" fill="#EA4335" />
            <path d="M12 8.9c.8 0 1.5.3 2 .8l1.5-1.5C14.9 7.3 13.6 6.8 12 6.8c-2.2 0-4.1 1.1-5 2.8l2 1.5c.4-1.3 1.6-2.2 3-2.2z" fill="#EA4335" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let frame: number;
    let paused = false;
    const scroll = () => {
      if (!paused && el) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      frame = requestAnimationFrame(scroll);
    };
    frame = requestAnimationFrame(scroll);
    el.addEventListener('mouseenter', () => { paused = true; });
    el.addEventListener('mouseleave', () => { paused = false; });
    return () => cancelAnimationFrame(frame);
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="relative py-16 md:py-32 overflow-hidden bg-white">
      {/* Big background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-8xl md:text-[12rem] font-extrabold text-gray-50 whitespace-nowrap select-none pointer-events-none">
        REVIEWS
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 text-xs font-mono text-primary tracking-widest uppercase"
          >
            <div className="w-8 h-px bg-primary" /> Patient Reviews <div className="w-8 h-px bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold mb-4 text-dental-dark leading-tight"
          >
            What Our <span className="gradient-text">Patients Say</span>
          </motion.h2>

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-4 bg-primary-50 px-8 py-4 rounded-2xl mt-4 border border-primary-100 shadow-sm"
          >
            <div className="font-display text-4xl sm:text-5xl font-extrabold gradient-text">5.0</div>
            <div className="text-left">
              <div className="flex gap-1 mb-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
              </div>
              <div className="text-gray-500 text-xs font-medium">Based on 786 Google Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden px-6 pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} index={i % reviews.length} />
        ))}
      </div>
    </section>
  );
}
