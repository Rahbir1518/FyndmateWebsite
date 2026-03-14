import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Showcase your skills, experience, and what you are looking for. Connect your GitHub to verify your work.',
    image: '/step-1.jpg',
    color: '#6366F1',
  },
  {
    number: '02',
    title: 'Request & Match',
    description: 'Browse through curated profiles of developers, designers, and builders. Send request to connect.',
    image: '/step-2.jpg',
    color: '#8B5CF6',
  },
  {
    number: '03',
    title: 'Start Building',
    description: 'Chat with your matches, discuss ideas, and start collaborating on your next big project.',
    image: '/step-3.jpg',
    color: '#EC4899',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!section || !heading || !cardsContainer) return;

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

      // Cards entrance with stagger
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateY: index % 2 === 0 ? -15 : 15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Card glow pulse
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.to(card, {
          boxShadow: '8px 8px 0 0 #8B5CF6, 0 0 30px rgba(139, 92, 246, 0.3)',
          duration: 1.5,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <div className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-white border-[3px] border-black rounded-full mb-6"
            style={{ boxShadow: '3px 3px 0 0 #000' }}
          >
            <div className="w-3 h-3 rounded-full bg-brand-purple border-2 border-black"></div>
            <span className="text-sm font-bold">Simple Process</span>
          </div>
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="animate-item text-lg text-brand-muted max-w-2xl mx-auto">
            Three simple steps to find your perfect collaborator and start building together.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsContainerRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative preserve-3d"
            >
              <div className="neo-card overflow-hidden bg-white transition-transform duration-300 group-hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute top-4 left-4 z-10">
                  <div
                    className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center text-white font-extrabold text-lg"
                    style={{ backgroundColor: step.color, boxShadow: '3px 3px 0 0 #000' }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-brand-gray">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold mb-3">{step.title}</h3>
                  <p className="text-brand-muted font-medium leading-relaxed">{step.description}</p>
                </div>

                {/* Bottom accent */}
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: step.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
