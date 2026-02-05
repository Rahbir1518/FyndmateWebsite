import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Preview', href: '#preview' },
    { name: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b-[2px] border-black'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="geo-accent w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span
              className={`text-xl font-black tracking-tight transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              COLLAB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#signup"
              className="neo-btn-primary text-xs"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 border-[2px] border-black rounded-lg transition-colors ${
              isScrolled ? 'bg-white' : 'bg-white/20 backdrop-blur-sm'
            }`}
          >
            <span className={`w-4 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-4 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-4 h-0.5 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b-[2px] border-black transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-black hover:text-[#6366F1] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="neo-btn-primary block text-center mt-4"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
