import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { ArrowRight, MapPin, Layout, SearchCheck, Zap } from 'lucide-react';

const MilanDeveloper = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Web Developer Milano | Siti Web Professionali in React & Next.js"
                description="Cerchi un Web Developer a Milano? Realizzo siti web veloci, eleganti e ottimizzati SEO per aziende e startup. Aumenta i tuoi clienti online."
                canonicalUrl="https://rayenlazizi.tech/locations/milan"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6 border border-green-500/20 md:mx-auto">
                    <MapPin className="w-4 h-4" />
                    Sviluppatore Web Milano
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl md:mx-auto">
                    Siti Web di Alta Qualità per Aziende a <span className="text-green-500">Milano.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl md:mx-auto leading-relaxed">
                    Distinguiti nel mercato competitivo milanese. Dimentica i vecchi template: sviluppo siti web premium con React.js e Next.js progettati per convertire visitatori in clienti reali.
                </p>
                <div className="flex flex-col sm:flex-row md:justify-center gap-4">
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors gap-2">
                        Richiedi un Preventivo Gratuito <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4">Cosa posso fare per il tuo business</h2>
                        <p className="text-muted-foreground">Soluzioni tecniche avanzate, dal design moderno all'ottimizzazione per i motori di ricerca.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Layout className="w-8 h-8 text-green-400" />,
                                title: "Design Moderno & Pulito",
                                desc: "Un'interfaccia utente (UI/UX) progettata per l'estetica e l'usabilità, riflettendo lo stile di Milano."
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-green-400" />,
                                title: "Performance Estreme",
                                desc: "Sviluppo custom che carica le tue pagine istantaneamente. Più veloci del 90% della concorrenza."
                            },
                            {
                                icon: <SearchCheck className="w-8 h-8 text-green-400" />,
                                title: "Ottimizzazione SEO",
                                desc: "Apparire su Google non è un caso. Utilizzo metadati dinamici e JSON-LD per posizionarti ai primi posti."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                                <div className="mb-6 bg-green-500/10 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-green-600/10 text-center px-6 border-t border-green-500/10">
                <h2 className="text-4xl font-bold mb-6">Pronto per scalare il tuo business a Milano?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">La tua azienda merita una piattaforma digitale all'avanguardia.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition-colors gap-2 hover:scale-105 duration-300">
                    Inizia il Tuo Progetto <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default MilanDeveloper;
