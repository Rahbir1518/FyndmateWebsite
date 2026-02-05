import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

      // Form
      gsap.fromTo(
        formRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: formRef.current,
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
          stagger: 0.1,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const benefits = [
    'Early access to the app',
    'Exclusive beta features',
    'Priority support',
    'Founder badge',
  ];

  return (
    <section
      ref={sectionRef}
      id="signup"
      className="relative py-16 lg:py-24 bg-gradient-to-br from-[#6366F1] via-[#7c3aed] to-[#6366F1] overflow-hidden"
    >
      {/* Code symbols background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-white/5 font-mono text-4xl font-bold animate-float-slow">{'{ }'}</div>
        <div className="absolute top-1/4 right-20 text-white/5 font-mono text-3xl font-bold animate-float">{'</>'}</div>
        <div className="absolute bottom-20 left-1/4 text-white/5 font-mono text-5xl font-bold animate-float-reverse">{'[]'}</div>
        <div className="absolute bottom-1/3 right-10 text-white/5 font-mono text-2xl font-bold animate-float-slow">{'=>'}</div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#EC4899]/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#6366F1]/30 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-white/70 mb-4">
            Limited Spots
          </span>
          <h2 className="display-section text-white mb-4">
            GET EARLY
            <span className="text-[#F9A8D4]"> ACCESS</span>
          </h2>
          <p className="text-base text-white/80 max-w-lg mx-auto font-medium">
            Join the waitlist and be among the first to experience Collab. We are launching soon.
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className="mb-10">
          {!isSubmitted ? (
            <div className="tilt-card bg-white p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-3 bg-[#FAFAFA] border-[3px] border-black rounded-xl text-black placeholder-gray-400 font-medium focus:outline-none focus:border-[#6366F1] transition-colors text-sm"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full neo-btn-primary py-4"
                >
                  Join Waitlist
                </button>
                
                <p className="text-center text-gray-400 text-xs font-medium">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
              
              {/* Benefits */}
              <div className="mt-6 pt-6 border-t-[2px] border-black/10">
                <p className="text-xs font-bold text-black uppercase tracking-wider mb-3">
                  What you get:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[10px] font-black">+</span>
                      </div>
                      <span className="text-gray-700 font-medium text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="tilt-card bg-white p-8 lg:p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center">
                <span className="text-2xl text-white font-black">+</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-black mb-2">
                You are on the list!
              </h3>
              <p className="text-gray-600 font-medium text-sm max-w-sm mx-auto">
                Thanks for joining. We will send you an email when Collab is ready for you.
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 lg:gap-10">
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-black text-white">2,547</p>
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider">On Waitlist</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-black text-white">Q2 2026</p>
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Launch Date</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-black text-white">500</p>
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider">Beta Spots</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
