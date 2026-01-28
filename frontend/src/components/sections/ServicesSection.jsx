import React from 'react';
import { services } from '../../data/mock';
import { ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container-padding">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-4 block">What I Deliver</span>
          <h2 className="heading-lg text-white mb-6">
            Comprehensive Solutions for <span className="text-gradient">Modern Businesses</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I don't just sell "websites". I provide the digital infrastructure your business needs to grow, operate efficienty, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-secondary-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
