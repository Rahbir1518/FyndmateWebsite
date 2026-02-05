import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  projectType: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  image,
  quote,
  rating,
  projectType,
}: TestimonialProps) => {
  return (
    <div className="neo-card neo-card-hover p-6 md:p-8 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6">
        <Quote className="w-6 h-6 text-white" />
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 font-medium leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>

      {/* Project Type Badge */}
      <div className="mb-6">
        <span className="looking-chip text-xs">{projectType}</span>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-100">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-[3px] border-black"
        />
        <div>
          <h4 className="font-bold text-black">{name}</h4>
          <p className="text-sm text-[#5B21B6] font-medium">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      name: 'Alex Chen',
      role: 'Full Stack Developer',
      company: 'Stripe',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote:
        "I found my hackathon teammate on Collab and we ended up winning first place! The matching algorithm is incredibly accurate. We had complementary skills and worked together seamlessly.",
      rating: 5,
      projectType: 'Hackathon Teammate',
    },
    {
      name: 'Maya Rodriguez',
      role: 'Product Designer',
      company: 'Figma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote:
        "Collab helped me find a technical co-founder for my startup. We've been working together for 6 months now and just raised our seed round. Couldn't have done it without this app!",
      rating: 5,
      projectType: 'Co-founder',
    },
    {
      name: 'Jordan Park',
      role: 'ML Engineer',
      company: 'OpenAI',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      quote:
        "As someone who works remotely, it's hard to meet other developers. Collab made it easy to connect with people who share my interests in AI and machine learning.",
      rating: 5,
      projectType: 'Side Project Partner',
    },
    {
      name: 'Sarah Kim',
      role: 'Frontend Developer',
      company: 'Vercel',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote:
        "I've used Collab to find collaborators for three different projects now. Every match has been spot-on. The skill verification through GitHub is a game-changer.",
      rating: 5,
      projectType: 'Project Partner',
    },
    {
      name: 'David Liu',
      role: 'Backend Engineer',
      company: 'Netflix',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote:
        "The instant chat feature made it so easy to discuss project details before committing. Found an amazing iOS developer to partner with on my app idea.",
      rating: 5,
      projectType: 'App Development',
    },
    {
      name: 'Emily Watson',
      role: 'DevOps Engineer',
      company: 'AWS',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      quote:
        "Collab's hackathon mode is genius. Found a team in under 10 minutes for a last-minute competition. We had a blast and built something we're all proud of!",
      rating: 5,
      projectType: 'Hackathon Team',
    },
  ];

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  const maxIndex = Math.max(0, testimonials.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderRef.current,
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
      id="testimonials"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-[#FAFAFA] overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-[#6366F1] rotate-45 border-2 border-black opacity-20" />
      <div className="absolute bottom-40 right-20 geo-circle w-6 h-6 opacity-30" />
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-[#EC4899] rounded-full border-2 border-black opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EDE9FE] border-2 border-black rounded-full px-4 py-2 mb-6 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
            <Sparkles className="w-4 h-4 text-[#5B21B6] fill-[#5B21B6]" />
            <span className="text-[#5B21B6] text-sm font-bold">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
            Loved by <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            See what developers are saying about their experience with Collab.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div ref={sliderRef}>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="neo-card p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-6">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="mb-4">
                <span className="looking-chip text-xs">
                  {testimonials[currentIndex].projectType}
                </span>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t-2 border-gray-100">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-[3px] border-black"
                />
                <div>
                  <h4 className="font-bold text-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[#5B21B6] font-medium">
                    {testimonials[currentIndex].role} at{' '}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(testimonials.length)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full border-2 border-black transition-all ${
                    i === currentIndex
                      ? 'bg-[#6366F1] w-8'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - 1}
              className="w-12 h-12 rounded-full bg-white border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 md:mt-20">
          <p className="text-center text-gray-500 font-medium mb-8">
            Trusted by developers from top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Netflix'].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl md:text-2xl font-extrabold text-gray-400"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
