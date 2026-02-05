import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const shapes = shapesRef.current;
    const button = buttonRef.current;
    if (!section || !content || !shapes || !button) return;

    const ctx = gsap.context(() => {
      // Content entrance
      gsap.fromTo(
        content.querySelectorAll('.animate-item'),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Shapes vortex rotation
      gsap.to(shapes, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Individual shape orbits
      const shapeElements = shapes.querySelectorAll('.orbit-shape');
      shapeElements.forEach((shape, index) => {
        gsap.to(shape, {
          rotation: -360,
          duration: 15 + index * 5,
          ease: 'none',
          repeat: -1,
        });
      });

      // Button heartbeat
      gsap.to(button, {
        scale: 1.05,
        duration: 1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Button glow pulse
      gsap.to(button, {
        boxShadow: '0 0 40px rgba(99, 102, 241, 0.6), 6px 6px 0 0 #000',
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-32 overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, #6366F1 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #EC4899 0%, transparent 50%)',
          }}
        ></div>
      </div>

      {/* Orbiting shapes */}
      <div
        ref={shapesRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* Square */}
        <div
          className="orbit-shape absolute w-16 h-16 border-[3px] border-brand-purple bg-transparent"
          style={{
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
            top: '20%',
            left: '15%',
          }}
        ></div>

        {/* Triangle */}
        <div
          className="orbit-shape absolute w-0 h-0"
          style={{
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '50px solid #EC4899',
            filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.5))',
            top: '30%',
            right: '20%',
          }}
        ></div>

        {/* Circle */}
        <div
          className="orbit-shape absolute w-12 h-12 rounded-full border-[3px] border-brand-violet bg-transparent"
          style={{
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
            bottom: '25%',
            left: '20%',
          }}
        ></div>

        {/* Small square */}
        <div
          className="orbit-shape absolute w-8 h-8 bg-brand-pink"
          style={{
            boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
            bottom: '30%',
            right: '15%',
          }}
        ></div>

        {/* Diamond */}
        <div
          className="orbit-shape absolute w-10 h-10 bg-brand-purple rotate-45"
          style={{
            boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)',
            top: '60%',
            left: '10%',
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="section-container relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Ready to <span className="text-gradient">Build?</span>
          </h2>

          <p className="animate-item text-xl text-gray-300 font-medium mb-10 max-w-xl mx-auto">
            Join 10,000+ developers finding their perfect match and building the future together.
          </p>

          <button
            ref={buttonRef}
            className="animate-item neo-btn-primary px-10 py-5 rounded-full text-xl"
            style={{ boxShadow: '6px 6px 0 0 #000' }}
          >
            Download the App
          </button>

          {/* App store badges */}
          <div className="animate-item flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 border-2 border-white/30 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="text-sm font-bold text-white">App Store</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 bg-white/10 border-2 border-white/30 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="text-sm font-bold text-white">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
