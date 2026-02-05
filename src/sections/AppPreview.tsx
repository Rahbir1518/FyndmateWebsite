import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTilt } from '../hooks/useTilt';

gsap.registerPlugin(ScrollTrigger);

// Profile card preview
const ProfilePreview = () => {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({ max: 6, scale: 1.01 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className="tilt-card"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="border-[2px] border-black rounded-xl overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        {/* Image */}
        <div className="aspect-[4/5] bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-[2px] border-white/40 flex items-center justify-center">
              <span className="text-3xl font-black text-white">JD</span>
            </div>
          </div>
          <div className="absolute top-3 right-3 geo-accent w-3 h-3" />
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full border-[2px] border-black">
            <span className="text-[10px] font-bold">San Francisco</span>
          </div>
        </div>
        
        {/* Info */}
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="font-black text-base">Jordan Doe</h4>
              <p className="text-xs font-bold text-[#5B21B6]">Full Stack Dev</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-400 border-[2px] border-black flex items-center justify-center">
              <span className="text-[8px] font-black">OPEN</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
            Building scalable web apps. Looking for frontend collaborators.
          </p>
          
          <div className="flex gap-1 flex-wrap mb-3">
            <span className="skill-tag text-[8px] px-1.5 py-0.5">React</span>
            <span className="skill-tag text-[8px] px-1.5 py-0.5">Node</span>
            <span className="skill-tag text-[8px] px-1.5 py-0.5">Postgres</span>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-full bg-white border-[2px] border-black text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
              Skip
            </button>
            <button className="flex-[2] py-2 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] border-[2px] border-black text-white text-xs font-bold shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chat preview
const ChatPreview = () => {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({ max: 6, scale: 1.01 });
  const messages = [
    { text: 'Hey! Saw your profile. Working on anything interesting?', sent: false },
    { text: 'Yeah! Building a dev tool for API testing.', sent: true },
    { text: 'That sounds cool! I have React experience.', sent: false },
    { text: 'Want to hop on a call?', sent: true },
  ];

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className="tilt-card"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="border-[2px] border-black rounded-xl overflow-hidden bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="p-3 border-b-[2px] border-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-[2px] border-white/40 flex items-center justify-center">
              <span className="text-xs font-black text-white">AS</span>
            </div>
            <div>
              <h4 className="font-black text-white text-xs">Alex Smith</h4>
              <p className="text-[10px] text-white/70 font-medium">Online</p>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="p-3 space-y-2 bg-[#FAFAFA] min-h-[180px]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] px-3 py-2 rounded-xl text-xs font-medium ${
                  msg.sent 
                    ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-br-sm' 
                    : 'bg-white border-[2px] border-black text-black rounded-bl-sm shadow-[1px_1px_0_0_rgba(0,0,0,1)]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        
        {/* Input */}
        <div className="p-2 border-t-[2px] border-black bg-white">
          <div className="flex gap-2">
            <div className="flex-1 px-3 py-2 bg-[#FAFAFA] border-[2px] border-black rounded-full text-xs text-gray-400">
              Type a message...
            </div>
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] border-[2px] border-black flex items-center justify-center shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
              <span className="text-white text-sm">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0, rotateY: -10 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="preview"
      className="relative py-16 lg:py-24 bg-black overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#6366F1]/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#EC4899]/15 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-[#8B5CF6] mb-4">
            App Preview
          </span>
          <h2 className="display-section text-white mb-4">
            SEE IT IN
            <span className="text-[#EC4899]"> ACTION</span>
          </h2>
          <p className="text-base text-white/60 max-w-lg mx-auto font-medium">
            A sneak peek at what awaits you. Swipe, match, and start collaborating.
          </p>
        </div>

        {/* Preview Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-12">
          <div>
            <ProfilePreview />
            <p className="text-center text-white/40 text-xs font-medium mt-3 uppercase tracking-wider">
              Discover Profiles
            </p>
          </div>
          <div>
            <ChatPreview />
            <p className="text-center text-white/40 text-xs font-medium mt-3 uppercase tracking-wider">
              Chat Instantly
            </p>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {[
            { label: 'Swipe Interface', value: 'Tinder-Style' },
            { label: 'Real-time Chat', value: 'Instant' },
            { label: 'GitHub Sync', value: 'One-Click' },
            { label: 'Verified Profiles', value: '100%' },
          ].map((item) => (
            <div key={item.label} className="text-center p-4 border border-white/10 rounded-xl">
              <p className="text-lg lg:text-xl font-black text-white mb-1">{item.value}</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
