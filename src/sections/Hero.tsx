import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Code-themed floating elements for hero background
const CodeBackground = () => {
  const codeSnippets = [
    { text: '</>', x: '10%', y: '20%', size: '4rem', delay: 0 },
    { text: '{}', x: '85%', y: '15%', size: '3rem', delay: 0.5 },
    { text: '[]', x: '75%', y: '70%', size: '3.5rem', delay: 1 },
    { text: '&&', x: '15%', y: '75%', size: '2.5rem', delay: 1.5 },
    { text: '=>', x: '90%', y: '45%', size: '2rem', delay: 0.3 },
    { text: 'git', x: '5%', y: '50%', size: '1.5rem', delay: 0.8 },
    { text: 'npm', x: '70%', y: '85%', size: '1.2rem', delay: 1.2 },
    { text: '//', x: '25%', y: '90%', size: '2rem', delay: 0.6 },
    { text: '**', x: '60%', y: '10%', size: '1.8rem', delay: 1.8 },
    { text: '||', x: '40%', y: '25%', size: '2.2rem', delay: 0.9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#6366F1]/30 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#EC4899]/20 to-transparent blur-3xl" />
      
      {/* Code symbols floating */}
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute font-mono font-bold text-white/10 animate-float-slow"
          style={{
            left: snippet.x,
            top: snippet.y,
            fontSize: snippet.size,
            animationDelay: `${snippet.delay}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        >
          {snippet.text}
        </div>
      ))}
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};

// Phone mockup
const PhoneMockup = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`phone-frame w-56 h-[480px] ${className}`}>
      <div className="phone-screen relative">
        {/* Status bar */}
        <div className="h-7 bg-[#FAFAFA] flex justify-between items-center px-4 pt-1">
          <span className="text-[10px] font-bold text-black">9:41</span>
          <div className="flex gap-0.5">
            <div className="w-3 h-2.5 bg-black rounded-sm" />
            <div className="w-3 h-2.5 bg-black rounded-sm" />
            <div className="w-4 h-2.5 bg-black rounded-sm" />
          </div>
        </div>
        
        {/* App header */}
        <div className="px-3 py-2 border-b-[2px] border-black flex items-center justify-center gap-2">
          <div className="geo-accent w-5 h-5" />
          <span className="font-black text-sm">COLLAB</span>
        </div>
        
        {/* Profile card */}
        <div className="p-2">
          <div className="border-[2px] border-black rounded-xl overflow-hidden bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#6366F1] to-[#EC4899] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-[2px] border-white/40 flex items-center justify-center">
                  <span className="text-2xl font-black text-white">SL</span>
                </div>
              </div>
              <div className="absolute top-2 right-2 geo-accent w-2 h-2" />
            </div>
            
            <div className="p-2">
              <h4 className="font-black text-sm">Sarah Lee</h4>
              <p className="text-[10px] font-bold text-[#5B21B6]">Backend Engineer</p>
              
              <div className="flex gap-1 mt-1 flex-wrap">
                <span className="skill-tag text-[8px] px-1.5 py-0.5">TS</span>
                <span className="skill-tag text-[8px] px-1.5 py-0.5">Node</span>
              </div>
              
              <div className="flex gap-1.5 mt-2">
                <button className="flex-1 py-1.5 rounded-full bg-white border-[2px] border-black text-[10px] font-bold shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                  Skip
                </button>
                <button className="flex-[2] py-1.5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] border-[2px] border-black text-white text-[10px] font-bold shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t-[2px] border-black px-3 py-1.5 flex justify-between">
          {['Home', 'Req', 'Chat', 'Me'].map((item, i) => (
            <div key={item} className={`flex flex-col items-center gap-0.5 ${i === 0 ? '' : 'opacity-40'}`}>
              <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-[#5B21B6]' : 'bg-black'}`} />
              <span className="text-[7px] font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - staggered letters effect
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.title-line') || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.3,
        }
      );

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.8,
        }
      );

      // CTA buttons
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 1,
        }
      );

      // Stats
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 1.2,
        }
      );

      // Phone
      gsap.fromTo(
        phoneRef.current,
        { y: 60, opacity: 0, rotateY: -15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.5,
        }
      );

      // Parallax on scroll
      gsap.to(phoneRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#6366F1] via-[#7c3aed] to-[#6366F1]"
    >
      {/* Code-themed background */}
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-6rem)]">
          {/* Left - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Launching Q2 2026
              </span>
            </div>

            {/* Title */}
            <div ref={titleRef} className="mb-6">
              <span className="title-line block display-hero text-white">
                FIND
              </span>
              <span className="title-line block display-hero" style={{ color: '#F9A8D4' }}>
                YOUR
              </span>
              <span className="title-line block display-hero text-white">
                COLLAB
              </span>
            </div>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base lg:text-lg text-white/80 max-w-md mx-auto lg:mx-0 mb-8 font-medium leading-relaxed"
            >
              The dating app for developers. Swipe through profiles, match with talented builders, and build something amazing together.
            </p>

            {/* CTA */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a href="#signup" className="neo-btn-primary">
                Join Waitlist
              </a>
              <a href="#preview" className="neo-btn-secondary bg-white/10 text-white border-white/30">
                See Preview
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
              <div>
                <p className="text-3xl lg:text-4xl font-black text-white">2.5K</p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Waitlist</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black text-white">500+</p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Developers</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black text-white">50+</p>
                <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>

          {/* Right - Phone */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div ref={phoneRef} className="relative">
              <PhoneMockup />
              
              {/* Floating elements around phone */}
              <div className="absolute -top-4 -right-4 geo-accent w-6 h-6 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-10 h-10 hatched rounded-full border-[2px] border-black animate-float-reverse" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 36C840 40 960 48 1080 52C1200 56 1320 56 1380 56L1440 56V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FAFAFA"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
