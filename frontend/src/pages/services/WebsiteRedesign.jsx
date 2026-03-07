import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { ArrowRight, RefreshCcw, TrendingUp, Zap, Search } from 'lucide-react';

const WebsiteRedesign = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Website Redesign Services | Modernize Your Digital Presence"
                description="Is your website holding back your business? I specialize in professional website redesigns that improve user experience, fix technical SEO, and increase conversions."
                canonicalUrl="https://rayenlazizi.tech/services/redesign"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                    <RefreshCcw className="w-4 h-4" />
                    Website Redesign Services
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
                    Turn your outdated website into a <span className="text-gradient">lead generator.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    If your website hasn't been updated in 3+ years, it's costing you money. I rebuild slow, broken, and ugly websites into modern, high-performance engines built with React and Next.js.
                </p>
                <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors gap-2">
                    Request a Free Redesign Audit <ArrowRight className="w-5 h-5" />
                </a>
            </section>

            {/* Signs you need a redesign */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">4 signs you desperately need a redesign</h2>
                        <p className="text-muted-foreground">Don't let a bad website destroy a great business.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: <Zap className="w-6 h-6 text-red-400" />,
                                title: "It's Embarrassingly Slow",
                                desc: "53% of mobile users leave a site that takes longer than 3 seconds to load. Speed is revenue."
                            },
                            {
                                icon: <Search className="w-6 h-6 text-red-400" />,
                                title: "Invisible on Google",
                                desc: "Old code, missing metadata, and poor structure means your competitors are outranking you for free."
                            },
                            {
                                icon: <RefreshCcw className="w-6 h-6 text-red-400" />,
                                title: "Hard to Update",
                                desc: "If changing a single photo or text block requires you to email a developer from 2018, it's time to upgrade."
                            },
                            {
                                icon: <TrendingUp className="w-6 h-6 text-red-400" />,
                                title: "Low Conversion Rate",
                                desc: "You have traffic, but no one is filling out your forms or buying your products. The UX is broken."
                            }
                        ].map((sign, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 bg-red-500/5">
                                <div className="mb-4">{sign.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{sign.title}</h3>
                                <p className="text-muted-foreground text-sm">{sign.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">The Rebuild Process</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            A redesign isn't just a fresh coat of paint. It's an opportunity to fix your technical foundations and realign your website with your current business goals.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: "1", title: "Technical Audit & UX Strategy", text: "We analyze what's wrong with the current site and map out a user journey designed to convert." },
                                { step: "2", title: "Modern Stack Migration", text: "We move you off slow builders (like WordPress/Wix) onto lightning-fast React/Next.js infrastructure." },
                                { step: "3", title: "SEO Preservation", text: "We carefully map 301 redirects to ensure you don't lose your existing Google rankings during the switch." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl border border-primary/20 bg-primary/5">
                        <h3 className="text-2xl font-bold mb-6">Before & After Impact</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center py-3 border-b border-white/10">
                                <span className="text-red-400">Load Time: 6.2s</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground mx-4" />
                                <span className="text-green-400 font-bold">Load Time: 0.8s</span>
                            </li>
                            <li className="flex justify-between items-center py-3 border-b border-white/10">
                                <span className="text-red-400">Mobile Layout: Broken</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground mx-4" />
                                <span className="text-green-400 font-bold">Mobile Layout: Flawless</span>
                            </li>
                            <li className="flex justify-between items-center py-3 border-b border-white/10">
                                <span className="text-red-400">Bounce Rate: 78%</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground mx-4" />
                                <span className="text-green-400 font-bold">Bounce Rate: 32%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 text-center px-6">
                <h2 className="text-4xl font-bold mb-6">Don't let your website hurt your reputation.</h2>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors gap-2 hover:scale-105 duration-300">
                    Book a Redesign Consultation <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default WebsiteRedesign;
