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

                    {/* Left: Code/Architecture Visual */}
                    <div className="animate-on-scroll opacity-0 relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />
                        <div className="relative overflow-hidden rounded-2xl bg-[#0f1115] border border-white/10 aspect-[4/5] shadow-2xl flex flex-col">
                            {/* Window Header */}
                            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="ml-auto text-xs font-mono text-muted-foreground">business_logic.ts</div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden relative flex-1">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

                                <div className="space-y-4 relative z-10">
                                    <div className="flex">
                                        <span className="text-purple-400 mr-2">class</span>
                                        <span className="text-yellow-300">DigitalGrowth</span>
                                        <span className="text-white ml-2">{'{'}</span>
                                    </div>

                                    <div className="pl-4">
                                        <span className="text-slate-500">// Engineering scalable systems</span>
                                    </div>

                                    <div className="pl-4 flex">
                                        <span className="text-purple-400 mr-2">constructor</span>
                                        <span className="text-white">() {'{'}</span>
                                    </div>

                                    <div className="pl-8 space-y-1">
                                        <div className="flex text-blue-300">
                                            this.stack <span className="text-white mx-2">=</span> ['React', 'Node', 'AWS'];
                                        </div>
                                        <div className="flex text-blue-300">
                                            this.focus <span className="text-white mx-2">=</span> 'ROI-Driven';
                                        </div>
                                    </div>
                                    <div className="pl-4 text-white">{'}'}</div>

                                    <div className="pl-4 flex">
                                        <span className="text-purple-400 mr-2">async</span>
                                        <span className="text-blue-400">deploy</span>
                                        <span className="text-white">() {'{'}</span>
                                    </div>
                                    <div className="pl-8 space-y-1">
                                        <div className="flex">
                                            <span className="text-purple-400 mr-2">await</span>
                                            <span className="text-green-400">optimizeSEO</span>
                                            <span className="text-white">();</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-purple-400 mr-2">return</span>
                                            <span className="text-orange-300">Success</span>
                                            <span className="text-white">;</span>
                                        </div>
                                    </div>
                                    <div className="pl-4 text-white">{'}'}</div>
                                </div>
                            </div>

                            {/* Floating "Architecture" Badge */}
                            <div className="absolute bottom-6 right-6">
                                <div className="glass-card p-4 rounded-xl border-l-4 border-accent animate-float-delayed">
                                    <p className="text-white font-heading font-bold text-lg">System Architect</p>
                                    <p className="text-accent text-sm">Clean Code. Scalable Results.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="animate-on-scroll opacity-0 space-y-8" style={{ transitionDelay: '0.2s' }}>
                        <div>
                            <h2 className="heading-lg text-white mb-6">
                                Bridging the Gap Between <br />
                                <span className="text-gradient">Tech & Business.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {developerInfo.bio}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                                <h4 className="text-white font-bold mb-1">Education</h4>
                                <p className="text-sm text-muted-foreground">Computer Engineering <br /> University of Florence</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Globe className="w-8 h-8 text-accent mb-3" />
                                <h4 className="text-white font-bold mb-1">Global Experience</h4>
                                <p className="text-sm text-muted-foreground">Projects for Startups <br /> in Tunisia & Europe</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Briefcase className="w-8 h-8 text-purple-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">Entrepreneurial</h4>
                                <p className="text-sm text-muted-foreground">Founder Mindset <br /> Business-First Solutions</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                                <Award className="w-8 h-8 text-yellow-400 mb-3" />
                                <h4 className="text-white font-bold mb-1">Excellence</h4>
                                <p className="text-sm text-muted-foreground">High School Diploma <br /> Technology Sciences</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
