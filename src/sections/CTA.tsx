import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Apple, Star, Sparkles, Zap, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// 3D Floating Elements
const FloatingElement = ({ 
  shape, 
  color, 
  position, 
  scale = 1 
}: { 
  shape: 'cube' | 'sphere' | 'torus' | 'cone';
  color: string;
  position: [number, number, number];
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const geometry = {
    cube: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.6, 32, 32]} />,
    torus: <torusGeometry args={[0.5, 0.2, 16, 32]} />,
    cone: <coneGeometry args={[0.5, 1, 32]} />,
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry[shape]}
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#EC4899" />
      
      <FloatingElement shape="cube" color="#6366F1" position={[-4, 2, 0]} scale={0.7} />
      <FloatingElement shape="sphere" color="#F9A8D4" position={[4, -1, -1]} scale={0.6} />
      <FloatingElement shape="torus" color="#8B5CF6" position={[-3, -2, -2]} scale={0.8} />
      <FloatingElement shape="cone" color="#EC4899" position={[3, 2, 0]} scale={0.5} />
    </>
  );
};

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    'Free to use',
    'No credit card required',
    'GitHub verification',
    'Unlimited matches',
  ];

  return (
    <section
      id="download"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden section-purple"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/80 via-[#8B5CF6]/80 to-[#8B5CF6]/90 z-[1]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-[3px] border-white/20 rotate-45 z-[2]" />
      <div className="absolute bottom-40 right-20 w-8 h-8 bg-[#EC4899] rounded-full border-2 border-black z-[2]" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-lg border-2 border-white/30 rotate-12 z-[2]" />
      <div className="absolute bottom-20 left-1/4 geo-circle w-6 h-6 z-[2] opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white text-sm font-semibold">
              Start Collaborating Today
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Ready to Find Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9A8D4] to-[#EC4899]">
              Perfect Match?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
            Join thousands of developers who are already building amazing things
            together. Download Collab today and start your collaboration journey.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full px-4 py-2"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="neo-btn-secondary flex items-center justify-center gap-3 bg-white text-black py-4 px-8">
              <Apple className="w-7 h-7" />
              <div className="text-left">
                <p className="text-xs font-medium text-gray-600">Download on the</p>
                <p className="text-lg font-bold leading-tight">App Store</p>
              </div>
            </button>
            <button className="neo-btn-secondary flex items-center justify-center gap-3 bg-white text-black py-4 px-8">
              <Download className="w-7 h-7" />
              <div className="text-left">
                <p className="text-xs font-medium text-gray-600">Get it on</p>
                <p className="text-lg font-bold leading-tight">Google Play</p>
              </div>
            </button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">4.9/5</p>
              <p className="text-white/70 text-sm">App Store Rating</p>
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div className="text-left">
              <p className="text-white font-bold">50K+</p>
              <p className="text-white/70 text-sm">Downloads</p>
            </div>
          </div>

          {/* Decorative Phone Mockups */}
          <div className="relative mt-16 hidden md:block">
            <div className="flex justify-center items-end gap-4">
              {/* Left Phone */}
              <div className="w-48 h-80 bg-black rounded-[32px] p-2 transform -rotate-6 translate-y-8 opacity-60">
                <div className="w-full h-full bg-[#FAFAFA] rounded-[24px] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-[#6366F1]" />
                  </div>
                </div>
              </div>

              {/* Center Phone */}
              <div className="w-56 h-96 bg-black rounded-[36px] p-2 z-10 shadow-2xl">
                <div className="w-full h-full bg-[#FAFAFA] rounded-[28px] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-[#6366F1] to-[#EC4899] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 border-white/30">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <p className="font-bold text-lg">Collab</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="w-48 h-80 bg-black rounded-[32px] p-2 transform rotate-6 translate-y-8 opacity-60">
                <div className="w-full h-full bg-[#FAFAFA] rounded-[24px] overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <Star className="w-12 h-12 text-[#EC4899]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
