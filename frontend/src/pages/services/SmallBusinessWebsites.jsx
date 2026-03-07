import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const SmallBusinessWebsites = () => {
    const { t } = useLanguage();

    return (
        <MainLayout>
            <SEOHead
                title="Custom Websites for Small Businesses | High-Conversion Web Design"
                description="I build custom, high-converting websites for small businesses. Stop losing customers to outdated templates. Get a scalable React/Next.js website today."
                canonicalUrl="https://rayenlazizi.tech/services/small-business"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Websites for Small Businesses
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Stop losing customers to an <span className="text-gradient">outdated website.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Your website is your 24/7 salesperson. If it's slow, broken on mobile, or looks like it was built in 2010, you are actively sending clients to your competitors. I build custom, high-performance websites that actually generate leads.
                    </p>
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors gap-2">
                        Get a Free Website Audit <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why templated websites fail small businesses</h2>
                            <p className="text-muted-foreground mb-6">
                                Most small businesses make the mistake of using cheap drag-and-drop builders like Wix or generic WordPress templates. Here's why that hurts your bottom line:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Slow loading speeds that kill your Google ranking",
                                    "Hidden fees and confusing maintenance",
                                    "Terrible mobile experience (where 80% of your traffic is)",
                                    "Generic designs that look exactly like your competitors"
                                ].map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm md:text-base">
                                        <span className="text-red-400 font-bold">✕</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card p-8 rounded-2xl border border-primary/20 bg-primary/5">
                            <h3 className="text-2xl font-bold mb-6">The Custom Advantage</h3>
                            <ul className="space-y-4">
                                {[
                                    "Lightning-fast load times (sub 1-second)",
                                    "Built with modern React/Next.js architecture",
                                    "Flawless mobile-first responsive design",
                                    "Technical SEO built-in from day one",
                                    "You actually own 100% of your code"
                                ].map((point, i) => (
                                    <li key={i} className="flex gap-3 text-sm md:text-base">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="text-white/90">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process/Features */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">A proven system for growth</h2>
                    <p className="text-muted-foreground">I don't just write code. I engineer digital storefronts designed to convert visitors into paying clients.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "1. Strategy & SEO Planning",
                            desc: "Before writing a single line of code, we analyze your local competitors and identify the exact keywords your customers are typing into Google."
                        },
                        {
                            title: "2. Custom Design & Build",
                            desc: "Your website is hand-coded using React or Next.js. No bloated plugins. Just clean, scalable infrastructure that loads instantly."
                        },
                        {
                            title: "3. Launch & Lead Generation",
                            desc: "We deploy on premium global CDNs, configure your Google Analytics, and ensure your contact forms route directly to your pipeline."
                        }
                    ].map((step, i) => (
                        <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">{step.title}</h3>
                            <p className="text-muted-foreground relative z-10">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-t border-primary/10 text-center px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Ready to upgrade your digital presence?</h2>
                    <p className="text-xl text-muted-foreground mb-10">Stop treating your website like a digital brochure. Let's build an engine that actually grows your small business.</p>
                    <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors gap-2 hover:scale-105 duration-300">
                        Start Your Project Today <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>
        </MainLayout>
    );
};

export default SmallBusinessWebsites;
