import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTilt } from '../hooks/useTilt';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

const FeatureCard = ({ number, title, description, tags, color }: FeatureCardProps) => {
  const { ref, onMouseMove, onMouseLeave, onMouseEnter } = useTilt({ max: 8, scale: 1.02 });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className="tilt-card h-full p-5 lg:p-6"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Number */}
      <div className="text-5xl lg:text-6xl font-black text-black/5 mb-2">
        {number}
      </div>
      
      {/* Accent bar */}
      <div 
        className="w-12 h-1.5 rounded-full mb-4"
        style={{ backgroundColor: color }}
      />
      
      {/* Title */}
      <h3 className="text-lg lg:text-xl font-black text-black mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-gray-600 font-medium leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="skill-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      number: '01',
      title: 'Smart Matching',
      description: 'Our AI analyzes your skills, interests, and project goals to find the perfect collaborators. No more random connections.',
      tags: ['AI-Powered', 'Skill-Based'],
      color: '#6366F1',
    },
    {
      number: '02',
      title: 'GitHub Integration',
      description: 'Connect your GitHub to showcase your code, contributions, and project history. Let your work speak for itself.',
      tags: ['Verified', 'Portfolio'],
      color: '#8B5CF6',
    },
    {
      number: '03',
      title: 'Project Discovery',
      description: 'Browse hackathons, startups, and side projects looking for team members. Find opportunities that match your interests.',
      tags: ['Hackathons', 'Startups'],
      color: '#EC4899',
    },
    {
      number: '04',
      title: 'Instant Messaging',
      description: 'Chat with matches in real-time. Discuss ideas, share code snippets, and plan your collaboration before committing.',
      tags: ['Real-time', 'Secure'],
      color: '#10B981',
    },
    {
      number: '05',
      title: 'Availability Settings',
      description: 'Set your availability, preferred work hours, and project types. We only show you matches that fit your schedule.',
      tags: ['Flexible', 'Time Zones'],
      color: '#F59E0B',
    },
    {
      number: '06',
      title: 'Team Building',
      description: 'Form complete teams for hackathons or long-term projects. Invite multiple collaborators and manage your team.',
      tags: ['Groups', 'Roles'],
      color: '#3B82F6',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-16 lg:py-24 bg-[#FAFAFA]"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366F1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-[#6366F1] mb-4">
            What We Offer
          </span>
          <h2 className="display-section text-black mb-4">
            FEATURES THAT
            <span className="gradient-text"> MATTER</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-medium">
            Everything you need to find, connect, and collaborate with the right developers.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
