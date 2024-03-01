// Scrolling marquee banner between sections
import { Sparkles } from 'lucide-react';

const items = ['Root Canal Treatment', '★ 5.0 Rating', 'Teeth Cleaning', 'Professional Care', 'Tooth Extraction', 'Open 7 Days', 'Braces & Alignment', '786+ Happy Patients', 'Dental Laminates', 'Modern Equipment'];

export default function MarqueeSection() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-4 overflow-hidden border-y border-primary-100/50 bg-primary-50/40 flex">
      <div
        className="flex gap-8 whitespace-nowrap animate-marquee-mobile md:animate-marquee-desktop"
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-gray-400 text-sm font-mono tracking-wider uppercase">{item}</span>
            <Sparkles className="w-4 h-4 text-primary/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
