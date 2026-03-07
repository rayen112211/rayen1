import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Scissors, Calendar, MapPin, Star } from 'lucide-react';

const HairSalonWebsites = () => {
    const { t } = useLanguage();

    return (
        <MainLayout>
            <SEOHead
                title="Hair Salon Website Developer | Booking Integrations & Local SEO"
                description="I build stunning, high-converting websites for hair salons, barbershops, and beauty studios. Integrate your booking system and rank higher on Google Maps."
                canonicalUrl="https://rayenlazizi.tech/services/hair-salon"
            />

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium mb-6 border border-pink-500/20">
                    <Scissors className="w-4 h-4" />
                    Websites for Salons & Beauty
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto">
                    Turn website visitors into <span className="text-pink-400">booked appointments.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    If your salon relies entirely on Instagram for bookings, you are missing out on thousands of local Google searches every month. I build premium salon websites that rank locally and convert traffic into paying clients.
                </p>
                <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors gap-2">
                    Get a Quote for Your Salon <ArrowRight className="w-5 h-5" />
                </a>
            </section>

            {/* Features */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                icon: <Calendar className="w-10 h-10 text-pink-400 mx-auto" />,
                                title: "Seamless Booking Integration",
                                desc: "I integrate your site directly with Fresha, Booksy, Vagaro, or Phorest so clients can book 24/7 without calling."
                            },
                            {
                                icon: <MapPin className="w-10 h-10 text-pink-400 mx-auto" />,
                                title: "Local SEO For Salons",
                                desc: "Optimized structure and Schema.org markup to ensure your salon shows up first when someone searches 'hair salon near me'."
                            },
                            {
                                icon: <Star className="w-10 h-10 text-pink-400 mx-auto" />,
                                title: "Premium Aesthetic Design",
                                desc: "Your website should look as good as your styling. I build custom, image-forward designs that showcase your best work."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image / Text Block */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
                        <div className="glass-card p-4 rounded-3xl border border-white/10 relative z-10 bg-black/50">
                            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" alt="Salon Website Design Layout" className="rounded-2xl opacity-80" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-bold mb-6">Your Instagram isn't enough anymore.</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Social media is great for portfolios, but when someone is ready to book, they search Google. If you don't have a professional website, they book with your competitor who does.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Own your traffic and client data",
                                "Display your full service menu and transparent pricing",
                                "Automate bookings and reduce phone calls by 60%",
                                "Build trust with Google Reviews integrated directly on your site"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className="text-pink-400">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-pink-500/5 text-center px-6 border-t border-pink-500/10">
                <h2 className="text-4xl font-bold mb-6">Ready to grow your salon?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Contact me today for a free consultation on how a custom website can increase your monthly bookings.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-pink-500 text-white text-lg font-semibold hover:bg-pink-600 transition-colors gap-2 hover:scale-105 duration-300">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default HairSalonWebsites;
