import React, { useRef } from 'react';
import { Award, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { developerInfo } from '../../data/mock';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const AboutSection = () => {
    const sectionRef = useRef(null);
    useScrollAnimation(sectionRef);

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

                            <h3 className="heading-lg text-white mb-2">Rayen Lazizi</h3>
                            <p className="text-primary font-medium tracking-wide mb-6">Full Stack Developer & Strategist</p>

                            <div className="w-full h-px bg-white/10 my-4" />

                            <p className="text-muted-foreground italic">
                                "I don't just write code involved. I build digital assets that bring you more revenue."
                            </p>
                        </div>
                    </div>

                    {/* Right: Content - Who I Am */}
                    <div className="animate-on-scroll opacity-0 space-y-8" style={{ transitionDelay: '0.2s' }}>
                        <div>
                            <h2 className="heading-lg text-white mb-6">
                                Who Am I? <br />
                                <span className="text-gradient">Your Tech Partner.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                I'm not just another freelancer who delivers a template. I am a dedicated developer who understands that your website is an investment.
                                <br /><br />
                                My goal is to make your business stand out in a crowded market. I focus on speed, design, and user experience to ensure every visitor trusts you instantly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Award className="w-8 h-8 text-yellow-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">Results Driven</h4>
                                <p className="text-sm text-muted-foreground">Focus on ROI, Speed, and SEO ranking.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">Business Mindset</h4>
                                <p className="text-sm text-muted-foreground">I speak your language, not just code.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Globe className="w-8 h-8 text-accent mb-3" />
                                <h4 className="text-white font-bold mb-1">Modern Tech</h4>
                                <p className="text-sm text-muted-foreground">Built with the latest, fastest technologies.</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-white font-bold mb-1">Expertise</h4>
                                <p className="text-sm text-muted-foreground">Continuous learning and professional engineering.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
