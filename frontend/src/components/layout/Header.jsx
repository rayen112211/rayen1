import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container px-6 md:px-12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="text-primary font-heading font-bold text-2xl tracking-tight group"
        >
          RL<span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative text-muted-foreground hover:text-white font-medium text-sm uppercase tracking-wider transition-colors duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right side container */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Desktop only */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden lg:inline-flex px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Start Project
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-primary transition-colors relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-lg z-40 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-white text-2xl font-bold uppercase tracking-wider hover:text-primary transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className={`px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg mt-4 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Start Project
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
