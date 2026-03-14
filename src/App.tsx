import { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Home page component with all landing page sections
function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize smooth scroll behavior
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-brand-gray grain-overlay">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
