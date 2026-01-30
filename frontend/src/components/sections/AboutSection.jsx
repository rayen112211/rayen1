import React, { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Globe } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';

const AboutSection = () => {
    const sectionRef = useRef(null);
    useScrollAnimation(sectionRef);
    const { t } = useLanguage();

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="container-padding relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Simple, Clear Profile Visual */}
                    <div className="animate-on-scroll opacity-0 relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-2 transition-transform duration-500 group-hover:rotate-6 sm:rotate-2 sm:group-hover:rotate-6 hidden sm:block" />
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-1 sm:hidden" />
                        <div className="relative overflow-hidden rounded-2xl bg-card border border-white/10 w-full h-auto lg:aspect-[4/5] shadow-2xl flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-card to-[#0f1115]">

                            {/* Avatar / Placeholder */}
                            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent mb-6 p-1">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">RL</span>
                                </div>
                            </div>

                            <h3 className="heading-lg text-white mb-2">{t.about.title}</h3>
                            <p className="text-primary font-medium tracking-wide mb-6">{t.about.role}</p>

                            <div className="w-full h-px bg-white/10 my-4" />

                            <p className="text-muted-foreground italic">
                                {t.about.quote}
                            </p>
                        </div>
                    </div>

                    {/* Right: Content - Who I Am */}
                    <div className="animate-on-scroll opacity-0 space-y-8" style={{ transitionDelay: '0.2s' }}>
                        <div>
                            <h2 className="heading-lg text-white mb-6">
                                {t.about.whoAmI.title} <br />
                                <span className="text-gradient">{t.about.whoAmI.subtitle}</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {t.about.whoAmI.p1}
                                <br /><br />
                                {t.about.whoAmI.p2}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Award className="w-8 h-8 text-yellow-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">{t.about.cards.results.title}</h4>
                                <p className="text-sm text-muted-foreground">{t.about.cards.results.desc}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">{t.about.cards.business.title}</h4>
                                <p className="text-sm text-muted-foreground">{t.about.cards.business.desc}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Globe className="w-8 h-8 text-accent mb-3" />
                                <h4 className="text-white font-bold mb-1">{t.about.cards.tech.title}</h4>
                                <p className="text-sm text-muted-foreground">{t.about.cards.tech.desc}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-white font-bold mb-1">{t.about.cards.expertise.title}</h4>
                                <p className="text-sm text-muted-foreground">{t.about.cards.expertise.desc}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
