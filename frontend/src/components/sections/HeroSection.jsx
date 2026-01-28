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
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-padding relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <div className="text-left space-y-8">
          <div className="animate-on-scroll opacity-0 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
              Available for New Projects
            </span>
            <h1 className="heading-xl tracking-tight text-white">
              Transforming Ideas into <br />
              <span className="text-gradient">Digital Engines.</span>
            </h1>
          </div>

          <p className="animate-on-scroll opacity-0 text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed delay-100">
            {developerInfo.tagline} I help forward-thinking businesses launch scalable, secure, and high-performance web platforms.
          </p>

          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 pt-4 delay-200">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#work"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
            >
              View Case Studies
            </a>
          </div>


        </div>

        {/* Right: Visual Abstract */}
        <div className="animate-on-scroll opacity-0 relative delay-200 mt-12 lg:mt-0">
          <div className="relative z-10 glass-card p-6 rounded-2xl md:rotate-1 hover:rotate-0 transition-transform duration-500">

            {/* Mock Code Interface */}
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-muted-foreground font-mono">growth_engine.ts</div>
            </div>

            <div className="font-mono text-sm space-y-4 text-muted-foreground">
              <div className="flex gap-2">
                <span className="text-purple-400">class</span>
                <span className="text-yellow-300">BusinessScaler</span>
                <span className="text-white">implements</span>
                <span className="text-yellow-300">Success</span>
                <span className="text-white">{'{'}</span>
              </div>
              <div className="pl-6 space-y-2">
                <div className="flex gap-2">
                  <span className="text-purple-400">private</span>
                  <span className="text-blue-400">infrastructure</span>
                  <span className="text-white">=</span>
                  <span className="text-green-300">'Robust'</span>
                  <span className="text-white">;</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-400">async</span>
                  <span className="text-blue-400">launch</span>
                  <span className="text-white">() {'{'}</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-purple-400">await</span>
                  <span className="text-green-400">this.optimizeRevenue</span>
                  <span className="text-white">();</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-purple-400">return</span>
                  <span className="text-orange-400">new</span>
                  <span className="text-yellow-300">Future</span>
                  <span className="text-white">();</span>
                </div>
              </div>
              <div className="text-white">{'}'}</div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-float">
              <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Performance</div>
                <div className="text-lg font-bold text-white">100/100</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-float delay-700">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Uptime Guaranteed</div>
                <div className="text-lg font-bold text-white">99.9%</div>
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
