import React, { useRef } from 'react';
import { ArrowRight, ArrowDown, Code, TrendingUp, ShieldCheck } from 'lucide-react';
import { developerInfo } from '../../data/mock';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  const heroRef = useRef(null);
  useScrollAnimation(heroRef);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background */}
      {/* Dynamic Background - Optimized for Mobile Performance */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 -left-1/4 w-[200px] md:w-[800px] h-[200px] md:h-[800px] bg-primary/5 rounded-full blur-[40px] md:blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-0 -right-1/4 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-accent/5 rounded-full blur-[40px] md:blur-[100px] animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-padding relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content - Direct & Client Focused */}
        <div className="text-left space-y-8">
          <div className="animate-on-scroll opacity-0 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              Accepting New Clients
            </span>
            <h1 className="heading-xl tracking-tight text-white">
              Websites That Turn <br />
              <span className="text-gradient">Visitors Into Clients.</span>
            </h1>
          </div>

          <p className="animate-on-scroll opacity-0 text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed delay-100">
            I build high-performance, premium websites designed to grow your business. Stop losing customers to slow, outdated sites.
          </p>

          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 pt-4 delay-200">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
            >
              View My Work
            </a>
          </div>


        </div>

        {/* Right: Visual Abstract - Simplified for Performance & Clarity */}
        <div className="animate-on-scroll opacity-0 relative delay-200 mt-12 lg:mt-0 hidden md:block">
          <div className="relative z-10 glass-card p-8 rounded-2xl md:rotate-1 hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center space-y-6">

            {/* Central Value Prop Icon/Graphic */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
              <TrendingUp className="w-16 h-16 text-primary relative z-10" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">Business Growth</h3>
              <p className="text-muted-foreground">Optimized for Conversion & Speed</p>
            </div>

            {/* Stats/Proof */}
            <div className="grid grid-cols-2 gap-4 w-full pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-white">SEO</div>
                <div className="text-xs text-muted-foreground">Optimized</div>
              </div>
            </div>

            {/* Floating Badges - Reduced complexity */}
            <div className="absolute -top-6 -right-6 glass-card p-3 rounded-xl flex items-center gap-3 animate-float shadow-xl">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Secure</div>
                <div className="text-sm font-bold text-white">SSL Ready</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-white transition-colors cursor-pointer p-2"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
