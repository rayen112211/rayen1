import React, { useRef } from 'react';
import { Layout, Globe, Zap, Shield, CheckCircle2 } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  const { t } = useLanguage();

  const iconMap = [Layout, Globe, Zap, Shield];

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      <div className="container-padding relative z-10">

        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary text-sm font-bold tracking-widest uppercase">{t.services.label}</span>
          <h2 className="heading-lg text-white">
            {t.services.title} <span className="text-gradient">{t.services.titleGradient}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={service.id}
                className="animate-on-scroll opacity-0 glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-primary/50"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-secondary-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
