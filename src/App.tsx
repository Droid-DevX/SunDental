import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Sections
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ReviewsSection from './sections/ReviewsSection';
import LocationSection from './sections/LocationSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <MarqueeSection />
        <ServicesSection />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
