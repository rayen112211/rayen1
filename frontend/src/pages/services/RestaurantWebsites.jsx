import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Utensils, Smartphone, Search, Clock } from 'lucide-react';

const RestaurantWebsites = () => {
    const { t } = useLanguage();

    return (
        <MainLayout>
            <SEOHead
                title="Restaurant Website Developer | Custom Menus & Reservations"
                description="Hire a specialized restaurant website developer. Get a stunning, mobile-first website with interactive menus, online reservations, and local SEO to pack your tables."
                canonicalUrl="https://rayenlazizi.tech/services/restaurant"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
                    <Utensils className="w-4 h-4" />
                    Restaurant Website Developer
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
                    Websites that <span className="text-orange-400">pack your tables</span> every night.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    People eat with their eyes first. If your restaurant's website has a PDF menu that doesn't load on mobile, you are losing reservations to the place down the street.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors gap-2">
                        Book a Free Consultation <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Smartphone className="w-8 h-8 text-orange-400" />,
                                title: "100% Mobile Optimized",
                                desc: "80% of restaurant searches happen on mobile devices while people are hungry. Your site must be flawless on phones."
                            },
                            {
                                icon: <Search className="w-8 h-8 text-orange-400" />,
                                title: "Local SEO Dominance",
                                desc: "Rank #1 for 'restaurant near me' and 'best [cuisine] in [your city]' with technical Schema.org markup."
                            },
                            {
                                icon: <Utensils className="w-8 h-8 text-orange-400" />,
                                title: "Digital Menus (No PDFs)",
                                desc: "Fast, interactive HTML menus that Google can read and customers can easily browse without downloading files."
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-orange-400" />,
                                title: "Reservation Integration",
                                desc: "Seamlessly connect with OpenTable, Resy, or custom reservation systems to secure bookings 24/7."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all">
                                <div className="mb-6 bg-orange-500/10 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="bg-gradient-to-br from-orange-400/20 to-transparent p-1 rounded-3xl">
                    <div className="glass-card bg-[#0a0a0a] p-10 md:p-16 rounded-[22px] flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold">See it in action: <br /><span className="text-orange-400">La Petite</span></h2>
                            <p className="text-xl text-muted-foreground">
                                I designed and built the complete digital experience for La Petite, an upscale Italian fine dining restaurant in Florence. Complete with multi-language support (i18n), dynamic menus, and a sophisticated dark-mode aesthetic.
                            </p>
                            <a href="https://lapetite-firenze.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300">
                                View the La Petite Case Study <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                        <div className="flex-1 w-full">
                            <img src="/assets/lapetite.jpg" alt="La Petite Restaurant Website Preview" className="rounded-xl border border-white/10 shadow-2xl shadow-orange-500/10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center px-6">
                <h2 className="text-4xl font-bold mb-6">Stop losing diners to bad design.</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Whether you're opening a new concept or upgrading an established institution, your website needs to reflect the quality of your food.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-colors gap-2 hover:scale-105 duration-300">
                    Request a Quote <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default RestaurantWebsites;
