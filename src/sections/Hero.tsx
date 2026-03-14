import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const decor1Ref = useRef<HTMLDivElement>(null);
  const decor2Ref = useRef<HTMLDivElement>(null);
  const decor3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline split-word reveal
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.fromTo(
          words,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'expo.out', stagger: 0.08, delay: 0.3 }
        );
      }

      // Subheadline typewriter effect
      gsap.fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );

      // CTA button
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'back.out', delay: 1 }
      );

      // Phone 3D flip + drop
      gsap.fromTo(
        phoneRef.current,
        { rotateX: 90, y: -200, opacity: 0 },
        { rotateX: -5, y: 0, opacity: 1, duration: 1.2, ease: 'bounce.out', delay: 0.5 }
      );

      // Decorative shapes spiral in
      gsap.fromTo(
        decor1Ref.current,
        { scale: 0, rotation: 180, opacity: 0 },
        { scale: 1, rotation: 12, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.9 }
      );

      gsap.fromTo(
        decor2Ref.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: -12, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 1 }
      );

      gsap.fromTo(
        decor3Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out', delay: 1.1 }
      );

      // Phone floating animation
      gsap.to(phoneRef.current, {
        y: -10,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Decorative shapes orbit
      gsap.to(decor1Ref.current, {
        rotation: '+=20',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Scroll-based parallax
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(phoneRef.current, { y: progress * 150 });
          gsap.set(headlineRef.current, { filter: `blur(${progress * 10}px)` });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Mouse tilt effect for phone
  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = phone.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateY = ((e.clientX - centerX) / window.innerWidth) * 15;
      const rotateX = ((centerY - e.clientY) / window.innerHeight) * 15;

      gsap.to(phone, {
        rotateY: rotateY,
        rotateX: rotateX - 5,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(phone, {
        rotateY: 0,
        rotateX: -5,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    phone.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      phone.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gray via-white/50 to-brand-gray pointer-events-none"></div>

      {/* Decorative shapes */}
      <div
        ref={decor1Ref}
        className="absolute top-40 right-[-10] w-16 h-16 border-[3px] border-black bg-brand-violet rotate-12 pointer-events-none z-10"
        style={{ boxShadow: '4px 4px 0 0 #000' }}
      ></div>
      <div
        ref={decor2Ref}
        className="absolute bottom-32 left-[8%] w-12 h-12 border-[3px] border-black bg-brand-pink -rotate-12 pointer-events-none z-10"
        style={{ boxShadow: '3px 3px 0 0 #000' }}
      ></div>
      <div
        ref={decor3Ref}
        className="absolute top-1/3 left-[5%] w-8 h-8 rounded-full border-[3px] border-black bg-brand-purple pointer-events-none z-10"
        style={{ boxShadow: '2px 2px 0 0 #000' }}
      ></div>

      <div className="section-container relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 overflow-hidden"
            >
              <span className="word inline-block">Find</span>{' '}
              <span className="word inline-block">People</span>{' '}
              <span className="word inline-block">to</span>{' '}
              <span className="word inline-block text-gradient">Team Up With</span>
            </h1>

            <p
              ref={subheadlineRef}
              className="text-lg sm:text-xl text-brand-muted font-medium mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Match with curated tech talent. Find developers, designers and dreamers ready to build the future.
            </p>

            <button
              ref={ctaRef}
              onClick={() => scrollToSection('cta')}
              className="neo-btn-primary px-8 py-4 rounded-full text-lg"
            >
              Start Trouping
            </button>

            {/* Stats */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              {[
                { value: '10K+', label: 'Developers' },
                { value: '5K+', label: 'Matches Made' },
                { value: '500+', label: 'Startups' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-extrabold text-brand-purple">{stat.value}</div>
                  <div className="text-sm font-semibold text-brand-muted">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center perspective-1000">
            <div
              ref={phoneRef}
              className="relative preserve-3d will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
                {/* Phone frame */}
                <div className="relative rounded-[3rem] border-[4px] border-black overflow-hidden bg-black shadow-neo-lg">
                  <img
                    src="/hero-phone.jpg"
                    alt="Collab App Interface"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -right-4 top-1/4 bg-white border-[3px] border-black rounded-xl px-4 py-2 animate-float"
                  style={{ boxShadow: '4px 4px 0 0 #000' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-black"></div>
                    <span className="text-sm font-bold">Online</span>
                  </div>
                </div>

                {/* Skill badge */}
                <div
                  className="absolute -left-6 bottom-1/3 bg-brand-purple border-[3px] border-black rounded-xl px-4 py-2 animate-float-slow"
                  style={{ boxShadow: '4px 4px 0 0 #000', animationDelay: '1s' }}
                >
                  <span className="text-sm font-bold text-white">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
