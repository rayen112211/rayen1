import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { ArrowRight, Code2, Database, Globe, Cpu } from 'lucide-react';

const NextjsDeveloper = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Freelance Next.js Developer | React Experts for Fast Web Apps"
                description="Hire a senior freelance Next.js developer to build lightning-fast, SEO-optimized, server-side rendered React applications. Available for new builds and migrations."
                canonicalUrl="https://rayenlazizi.tech/services/nextjs-developer"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20 md:mx-auto">
                    <Code2 className="w-4 h-4" />
                    Senior React / Next.js Engineer
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl md:mx-auto">
                    Enterprise-grade web apps built with <span className="text-blue-500">Next.js</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl md:mx-auto leading-relaxed">
                    I'm a freelance Full-Stack Developer specializing in Next.js, React, and Node.js. I help agencies, startups, and established brands build high-performance web applications with superior SEO capabilities.
                </p>
                <div className="flex flex-col sm:flex-row md:justify-center gap-4">
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors gap-2">
                        Hire Me <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Why Next.js Section */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4">Why choose Next.js for your next project?</h2>
                        <p className="text-muted-foreground">Standard React apps are great, but they suffer from poor SEO and slow initial load times. Next.js solves this.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe className="w-8 h-8 text-blue-400" />,
                                title: "Server-Side Rendering (SSR)",
                                desc: "Pages are generated on the server, meaning Google and Facebook can instantly read and index your content. Perfect for E-commerce and Blogs."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-blue-400" />,
                                title: "Incredible Performance",
                                desc: "Next.js automatically optimizes images, fonts, and scripts resulting in 100/100 Core Web Vitals scores."
                            },
                            {
                                icon: <Database className="w-8 h-8 text-blue-400" />,
                                title: "Full-Stack Capabilities",
                                desc: "API routes built directly into the framework. No need to spin up a separate backend server for simple database queries."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5">
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">My Next.js Expertise</h2>
                        <div className="space-y-6">
                            {[
                                "Migrations from WordPress to Headless Next.js",
                                "Migrations from standard Create React App (CRA) to Next.js",
                                "Custom SaaS dashboards and AI integrations",
                                "E-commerce storefronts (Shopify Headless, Stripe)",
                                "Static Site Generation (SSG) for high-traffic blogs"
                            ].map((skill, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg text-white/90">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card p-1 bg-[#0d1117] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <pre className="p-6 text-sm md:text-base font-mono text-blue-300 overflow-x-auto"><code>{`export default async function Page() {
  // Server-side data fetching
  const data = await fetchUserData();
  
  return (
    <main>
      <h1>Welcome, {data.name}</h1>
      <AnalyticsProvider />
    </main>
  );
}`}</code></pre>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600/10 text-center px-6 border-t border-blue-500/10">
                <h2 className="text-4xl font-bold mb-6">Looking for a reliable React partner?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Available for contract work, agency partnerships, and dedicated project builds.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors gap-2 hover:scale-105 duration-300">
                    Discuss Your Project <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

// Needed missing import for CheckCircle2 above
import { CheckCircle2 } from 'lucide-react';

export default NextjsDeveloper;
