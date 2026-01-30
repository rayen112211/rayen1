import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';

const PricingSection = () => {
    // Keep track of hover or selection if needed, currently static display is effectively clear
    const { t } = useLanguage();

    return (
        <section id="pricing" className="py-24 bg-[#0f1115] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />

            <div className="container-padding relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">{t.pricing.label}</span>
                    <h2 className="heading-lg text-white mb-6">
                        {t.pricing.title} <span className="text-gradient">{t.pricing.titleGradient}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t.pricing.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {t.pricing.plans.map((plan, index) => {
                        // Assuming the second plan in the list is the highlighted one (index 1) across all languages based on current mock structure
                        // Or we can verify by checking if badge is present/not empty string
                        const isHighlighted = plan.badge !== "";

                        return (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border transition-all duration-300 ${isHighlighted
                                    ? 'bg-card border-primary/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)]'
                                    : 'bg-background border-white/5 hover:border-white/10'
                                    }`}
                            >
                                {isHighlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                                        {plan.badge}
                                    </div>
                                )}

                                <div className="space-y-4 mb-8 text-center md:text-left">
                                    <p className={`text-sm font-bold tracking-wider uppercase ${isHighlighted ? 'text-primary' : 'text-muted-foreground'}`}>
                                        {plan.type}
                                    </p>
                                    <h3 className="text-3xl font-bold text-white">{plan.title}</h3>
                                    <div className="text-2xl font-mono text-white/90">{plan.price}</div>
                                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-secondary-foreground">
                                            <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${isHighlighted ? 'text-primary' : 'text-white/20'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`block w-full py-4 rounded-lg text-center font-bold text-sm transition-all duration-300 ${isHighlighted
                                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]'
                                        : 'bg-white/5 text-white hover:bg-white/10'
                                        }`}
                                >
                                    {t.pricing.discuss}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
