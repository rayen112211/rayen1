import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { ArrowRight, MapPin, MoveRight, TrendingUp, MonitorSmartphone } from 'lucide-react';

const ParisDeveloper = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Créateur de Site Web Paris | Développeur Web Freelance React"
                description="Besoin d'un développeur web à Paris ? Je crée des sites internet sur mesure, rapides et optimisés pour le référencement naturel (SEO). Demandez un devis."
                canonicalUrl="https://rayenlazizi.tech/locations/paris"
            />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-left md:text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20 md:mx-auto">
                    <MapPin className="w-4 h-4" />
                    Développeur Web Paris
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl md:mx-auto">
                    Des sites internet qui développent votre activité à <span className="text-purple-500">Paris.</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl md:mx-auto leading-relaxed">
                    Fini les sites lents et les templates WordPress obsolètes. J'accompagne les entreprises franciliennes en développant des applications de haute performance en React.js et Next.js concues pour attirer des clients.
                </p>
                <div className="flex flex-col sm:flex-row md:justify-center gap-4">
                    <a href="/#contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors gap-2">
                        Obtenir un Devis Gratuit <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            {/* Expertise */}
            <section className="py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Mon Expertise Technique</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Mon approche n'est pas simplement esthétique, elle est stratégique. Chaque site est pensé pour générer des résultats tangibles pour votre PME, restaurant ou agence parisienne.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Sites Vitrines Sur-Mesure", desc: "Design exceptionnel pour mettre en valeur votre marque à Paris." },
                                    { title: "Référencement Local (SEO)", desc: "Code optimisé (Next.js SSR) pour atteindre la première page de Google." },
                                    { title: "Performance Mobile", desc: "Temps de chargement instantanés et design adaptatif irréprochable." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold flex-shrink-0">
                                            <MoveRight className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[160px]">
                                <TrendingUp className="w-10 h-10 text-purple-400 mb-3" />
                                <span className="font-bold">Conversion SEO</span>
                            </div>
                            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[160px] translate-y-8">
                                <MonitorSmartphone className="w-10 h-10 text-purple-400 mb-3" />
                                <span className="font-bold">100% Responsive</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-purple-600/10 text-center px-6 border-t border-purple-500/10">
                <h2 className="text-4xl font-bold mb-6">Votre nouveau site internet vous attend.</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Parlons de votre projet et de la manière dont une architecture web moderne peut augmenter votre chiffre d'affaires.</p>
                <a href="/#contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition-colors gap-2 hover:scale-105 duration-300">
                    Discutons-en <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </MainLayout>
    );
};

export default ParisDeveloper;
