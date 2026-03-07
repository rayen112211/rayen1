import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, MapPin, Code2, Rocket, Globe } from 'lucide-react';

const WarsawDeveloper = () => {
    const { t } = useLanguage();

    return (
        <MainLayout>
            <SEOHead
                title="Niezależny Twórca Stron Internetowych Warszawa | React & Next.js"
                description="Szukasz programisty stron internetowych w Warszawie? Buduję super szybkie, zoptymalizowane pod SEO strony internetowe dla lokalnych firm w Polsce. Darmowa wycena."
                canonicalUrl="https://rayenlazizi.tech/locations/warsaw"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6 border border-red-500/20 md:mx-auto">
                    <MapPin className="w-4 h-4" />
                    Twórca Stron Warszawa
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl md:mx-auto">
                    Najlepsze Strony Internetowe dla <span className="text-red-500">Warszawskich</span> Firm.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl md:mx-auto leading-relaxed">
                    Zdominuj lokalny rynek w Warszawie dzięki stronie, która ładuje się błyskawicznie, zachwyca designem i faktycznie sprzedaje. Tworzę nowoczesne rozwiązania oparte na React i Next.js dla ambitnych polskich firm.
                </p>
                <div className="flex flex-col sm:flex-row md:justify-center gap-4">
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors gap-2">
                        Poproś o Darmową Wycenę <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold mb-4">Dlaczego warto ze mną współpracować?</h2>
                        <p className="text-muted-foreground">Nie jestem agencją z setkami klientów. Jestem specjalistą, który osobiście dba o Twój sukces w sieci.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            {
                                icon: <Rocket className="w-10 h-10 text-red-400 mx-auto" />,
                                title: "Błyskawiczne Działanie",
                                desc: "Używamy Next.js, dzięki czemu Twoja strona będzie szybsza niż 95% konkurencji w Warszawie. Google to uwielbia."
                            },
                            {
                                icon: <Globe className="w-10 h-10 text-red-400 mx-auto" />,
                                title: "Lokalne SEO Polska",
                                desc: "Odpowiednio wdrożone nagłówki, metadane i znaczniki Schema, aby zdobywać klientów z wyników wyszukiwania."
                            },
                            {
                                icon: <Code2 className="w-10 h-10 text-red-400 mx-auto" />,
                                title: "Czysty, Własny Kod",
                                desc: "Żadnych powolnych szablonów na WordPressie. Pełna kontrola, niestandardowy nowoczesny design."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all">
                                <div className="mb-6">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-red-600/10 text-center px-6 border-t border-red-500/10">
                <h2 className="text-4xl font-bold mb-6">Gotowy na rozwój swojego biznesu w Warszawie?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Zbudujmy cyfrowe narzędzie, które każdego dnia będzie generować dla Ciebie zyski.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition-colors gap-2 hover:scale-105 duration-300">
                    Skontaktuj się ze mną <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default WarsawDeveloper;
