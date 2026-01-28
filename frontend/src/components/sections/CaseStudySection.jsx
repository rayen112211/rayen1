import React from 'react';
import { caseStudy } from '../../data/mock';
import { ArrowUpRight, CheckCircle2, ShoppingBag } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section id="work" className="py-24 bg-card relative overflow-hidden">

      <div className="container-padding relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 text-primary text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Featured Success Story</span>
            </div>

            <h2 className="heading-lg text-white">
              {caseStudy.title}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>

            <div className="glass-card p-6 rounded-2xl border-l-4 border-primary bg-background/50">
              <h4 className="text-white font-bold mb-2">The Solution</h4>
              <p className="text-secondary-foreground text-sm">
                {caseStudy.solution}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white font-medium">{result}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={caseStudy.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                Visit Live Site <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Visual Showcase */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

            <div className="relative z-10 group">
              {/* Main Monitor/Laptop Frame */}
              <div className="glass-card p-2 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="rounded-xl overflow-hidden aspect-video bg-black relative">
                  <div className="absolute top-0 w-full h-8 bg-black flex items-center px-4 space-x-2 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="mx-auto w-1/2 h-4 bg-muted/20 rounded text-[10px] text-center text-muted-foreground leading-4">unyamee.shop</div>
                  </div>
                  <img
                    src={caseStudy.image}
                    alt="Unyamee.shop Preview"
                    className="w-full h-full object-cover mt-8"
                  />

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 right-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-float-delayed">
                    <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                      <ShoppingBag size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Sales</div>
                      <div className="text-lg font-bold text-white">Live</div>
                    </div>
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

export default CaseStudySection;
