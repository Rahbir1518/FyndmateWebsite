import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Entrance animation
    gsap.fromTo(
      nav,
      { y: -100, scale: 0.8, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.2 }
    );

    // Animate links
    gsap.fromTo(
      nav.querySelectorAll('.nav-link'),
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'back.out', stagger: 0.05, delay: 0.6 }
    );

    // Animate CTA
    gsap.fromTo(
      nav.querySelector('.nav-cta'),
      { scale: 0 },
      { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)', delay: 0.8 }
    );

    // Scroll listener for background change
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-4 py-3 rounded-full border-[3px] border-black transition-all duration-300 ${
        isScrolled ? 'glass shadow-neo-sm' : 'bg-white/90'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold flex items-center tracking-tight hover:text-brand-purple transition-colors"
        > 
          <img src="/logo_noBg.png" alt="Troupe Logo" className="w-10 h-10 mr-2" />
          Troupe
          <span className="inline-block w-2 h-2 bg-brand-pink rounded-full ml-1 align-top"></span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Features', id: 'features' },
            { label: 'Stories', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="nav-link relative text-sm font-semibold text-brand-muted hover:text-black transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('cta')}
          className="nav-cta neo-btn-primary px-4 py-2 rounded-full text-sm"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
