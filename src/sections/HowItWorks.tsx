import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTilt } from '../hooks/useTilt';

gsap.registerPlugin(ScrollTrigger);

interface StepProps {
  number: string;
  title: string;
  description: string;
  isReversed?: boolean;
  color: string;
}

const Step = ({ number, title, description, isReversed, color }: StepProps) => {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({ max: 5, scale: 1.01 });

  return (
    <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isReversed ? '' : ''}`}>
      {/* Content */}
      <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
            style={{ backgroundColor: color }}
          >
            <span className="text-xl font-black text-white">{number}</span>
          </div>
          <div className="h-0.5 w-8 bg-black/10 rounded-full" />
        </div>
        
        <h3 className="text-xl lg:text-2xl font-black text-black mb-3">
          {title}
        </h3>
        
        <p className="text-sm lg:text-base text-gray-600 font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Visual */}
      <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        <div
          ref={ref}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          className="tilt-card aspect-[4/3] flex items-center justify-center"
          style={{ 
            transformStyle: 'preserve-3d',
            background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`
          }}
        >
          <div className="text-center">
            <div 
              className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              style={{ backgroundColor: color }}
            >
              <span className="text-3xl font-black text-white">{number}</span>
            </div>
            <p className="text-xs font-bold text-black/40 uppercase tracking-wider">Step {number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      // Steps
      const steps = stepsRef.current?.querySelectorAll('.step-item');
      steps?.forEach((step, index) => {
        gsap.fromTo(
          step,
          { 
            x: index % 2 === 0 ? -60 : 60, 
            opacity: 0 
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up with your GitHub account and build your developer profile. Add your skills, tech stack, and what kind of projects you are interested in.',
      color: '#6366F1',
    },
    {
      number: '02',
      title: 'Browse & Swipe',
      description: 'Discover talented developers from around the world. Swipe right on profiles that match your interests. Our algorithm learns your preferences.',
      color: '#8B5CF6',
    },
    {
      number: '03',
      title: 'Match & Connect',
      description: 'When both developers swipe right, it is a match! Start chatting instantly to discuss ideas and see if you are a good fit.',
      color: '#EC4899',
    },
    {
      number: '04',
      title: 'Build Together',
      description: 'Form your dream team and start building. Whether it is a weekend hackathon or the next big startup, Collab helps you make it happen.',
      color: '#10B981',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-16 lg:py-24 bg-[#FAFAFA]"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-[#EC4899] mb-4">
            Simple Process
          </span>
          <h2 className="display-section text-black mb-4">
            HOW IT
            <span className="gradient-text"> WORKS</span>
          </h2>
          <p className="text-base text-gray-600 max-w-md mx-auto font-medium">
            Four simple steps to find your perfect collaborator.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item">
              <Step {...step} isReversed={index % 2 === 1} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-16 lg:mt-20 text-center">
          <div className="inline-block tilt-card bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-black text-white mb-3">
              Ready to start?
            </h3>
            <p className="text-white/80 font-medium mb-5 max-w-sm mx-auto text-sm">
              Join thousands of developers on the waitlist. Be the first to know when we launch.
            </p>
            <a href="#signup" className="neo-btn-secondary inline-block bg-white text-black">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
