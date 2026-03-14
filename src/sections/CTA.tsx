import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const formData = new FormData(formRef.current!);
      const API_URL = import.meta.env.VITE_WAITLIST_API_URL;
      
      if (API_URL === 'your_google_apps_script_url_here') {
        console.warn('Please set VITE_WAITLIST_API_URL in .env file');
      }
      
      await fetch(API_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      setName('');
      setEmail('');
      setStatus('success');

      if (successMessageRef.current) {
        gsap.fromTo(
          successMessageRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out' }
        );
      }

      // Reset form to idle state after 3 seconds to allow next person to join
      setTimeout(() => {
        setStatus('idle');
        if (successMessageRef.current) {
          gsap.to(successMessageRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in'
          });
        }
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
      
      // Reset error state after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

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
            Join developers finding their perfect match and building the future together.
          </p>

          {/* Waitlist Form */}
          <form
            ref={formRef}
            id="waitlist-form"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="animate-item space-y-2">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                disabled={status === 'submitting'}
                className="w-full px-5 py-4 rounded-xl border-[3px] border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent shadow-neo-sm hover:shadow-neo-lg hover:bg-white/20 disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            <div className="animate-item space-y-2">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === 'submitting'}
                className="w-full px-5 py-4 rounded-xl border-[3px] border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent shadow-neo-sm hover:shadow-neo-lg hover:bg-white/20 disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>

            <button
              ref={buttonRef}
              type="submit"
              disabled={status === 'submitting'}
              className="animate-item neo-btn-primary px-10 py-5 rounded-full text-xl w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ boxShadow: '6px 6px 0 0 #000' }}
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Joining...
                </>
              ) : (
                'Join the Waitlist'
              )}
            </button>

            {/* Success Message */}
            <div
              ref={successMessageRef}
              id="success-message"
              className="hidden"
              style={{ display: status === 'success' ? 'block' : 'none' }}
            >
              <div className="text-center px-4 py-3 bg-green-50 border-[3px] border-green-600 rounded-xl text-green-700 font-bold shadow-neo-sm animate-slide-up">
                You're on the waitlist! 🎉
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && errorMessage && (
              <div className="text-center px-4 py-3 bg-red-50 border-[3px] border-red-600 rounded-xl text-red-700 font-bold shadow-neo-sm animate-slide-up">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
