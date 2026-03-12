import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Smart Matching',
    description: 'Our algorithm pairs you with collaborators based on skills, interests, and project goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: '#6366F1',
  },
  {
    title: 'Verified Profiles',
    description: 'Connect your GitHub, LinkedIn, and portfolio. Know exactly who you are collaborating with.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    color: '#8B5CF6',
  },
  {
    title: 'Project Showcase',
    description: 'Display your best work, side projects, and open source contributions to attract the right partners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    color: '#EC4899',
  },
  {
    title: 'Instant Chat',
    description: 'Real-time messaging to discuss ideas, share files, and plan your collaboration from day one.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    color: '#6366F1',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!section || !heading || !grid) return;

    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(
        heading.querySelectorAll('.animate-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid lines draw animation
      gsap.fromTo(
        grid.querySelectorAll('.grid-line'),
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards 3D flip entrance
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { rotateX: 90, opacity: 0 },
          {
            rotateX: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: grid,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // Holographic tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
    });

    // Sheen effect
    const sheen = card.querySelector('.sheen') as HTMLElement;
    if (sheen) {
      const sheenX = (x / rect.width) * 100;
      const sheenY = (y / rect.height) * 100;
      sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.2) 0%, transparent 50%)`;
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-white border-[3px] border-black rounded-full mb-6"
            style={{ boxShadow: '3px 3px 0 0 #000' }}
          >
            <div className="w-3 h-3 rounded-full bg-brand-pink border-2 border-black"></div>
            <span className="text-sm font-bold">Why Troupe?</span>
          </div>
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Built for <span className="text-gradient">Builders</span>
          </h2>
          <p className="animate-item text-lg text-brand-muted max-w-2xl mx-auto">
            Everything you need to find the perfect collaborator and bring your ideas to life.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="relative max-w-5xl mx-auto perspective-1000">
          {/* Grid lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <line className="grid-line" x1="50%" y1="0" x2="50%" y2="100%" stroke="#000" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" />
            <line className="grid-line" x1="0" y1="50%" x2="100%" y2="50%" stroke="#000" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="1000" />
          </svg>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={(el) => { cardRefs.current[index] = el; }}
                className="group relative preserve-3d cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="neo-card p-8 bg-white relative overflow-hidden transition-shadow duration-300 group-hover:shadow-neo-lg">
                  {/* Sheen overlay */}
                  <div className="sheen absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl border-[3px] border-black flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: feature.color, boxShadow: '4px 4px 0 0 #000' }}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-extrabold mb-3">{feature.title}</h3>
                  <p className="text-brand-muted font-medium leading-relaxed">{feature.description}</p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-[3px] border-black bg-brand-gray flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    style={{ boxShadow: '2px 2px 0 0 #000' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
