import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Found my CTO here! We met on Collab and built a million-dollar startup in under a year.",
    author: 'Alex Thompson',
    role: 'Founder @ TechFlow',
    avatar: '/avatar-1.jpg',
  },
  {
    quote: "Best hackathon team ever. Matched with designers and devs who actually get things done.",
    author: 'Maya Rodriguez',
    role: 'Product Designer',
    avatar: '/avatar-2.jpg',
  },
  {
    quote: "My startup wouldn't exist without Collab. Found my technical co-founder within a week.",
    author: 'Sam Chen',
    role: 'CEO @ BuildFast',
    avatar: '/avatar-3.jpg',
  },
  {
    quote: "The quality of talent on here is incredible. Everyone is passionate about building.",
    author: 'Jordan Park',
    role: 'Full Stack Developer',
    avatar: '/avatar-1.jpg',
  },
  {
    quote: "Finally, a platform that understands what developers actually need in a collaborator.",
    author: 'Riley Kim',
    role: 'ML Engineer',
    avatar: '/avatar-2.jpg',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

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
    }, section);

    return () => ctx.revert();
  }, []);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gray via-white/30 to-brand-gray pointer-events-none"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 section-container">
          <div className="animate-item inline-flex items-center gap-2 px-4 py-2 bg-white border-[3px] border-black rounded-full mb-6"
            style={{ boxShadow: '3px 3px 0 0 #000' }}
          >
            <div className="w-3 h-3 rounded-full bg-brand-violet border-2 border-black"></div>
            <span className="text-sm font-bold">Success Stories</span>
          </div>
          <h2 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Loved by <span className="text-gradient">Builders</span>
          </h2>
          <p className="animate-item text-lg text-brand-muted max-w-2xl mx-auto">
            Hear from the community about how Collab helped them find their perfect match.
          </p>
        </div>

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className="relative overflow-hidden group"
        >
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-gray to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-gray to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling track */}
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] sm:w-[400px] group/card"
              >
                <div className="neo-card p-6 bg-white h-full transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-neo-lg">
                  {/* Quote */}
                  <div className="mb-6">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-purple mb-4">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg font-medium leading-relaxed">{testimonial.quote}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-[3px] border-black"
                    />
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-brand-muted font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - reverse direction */}
        <div className="relative overflow-hidden mt-6 group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-gray to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-gray to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
            style={{ animationDirection: 'reverse', animationDuration: '35s' }}
          >
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] sm:w-[400px] group/card"
              >
                <div className="neo-card p-6 bg-white h-full transition-all duration-300 group-hover/card:scale-105 group-hover/card:shadow-neo-lg">
                  <div className="mb-6">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-brand-pink mb-4">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-lg font-medium leading-relaxed">{testimonial.quote}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-[3px] border-black"
                    />
                    <div>
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-brand-muted font-medium">{testimonial.role}</div>
                    </div>
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

export default Testimonials;
