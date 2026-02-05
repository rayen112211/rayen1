
import React from 'react';
import { Layout, Globe, Zap, Shield, Check, Mail, MessageSquare, ArrowRight, ShoppingBag, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const translations = {
    en: {
        header: {
            about: "About",
            services: "Services",
            work: "Work",
            startProject: "Start Project"
        },
        hero: {
            status: "Accepting New Clients",
            titleStart: "Websites That Turn",
            titleEnd: "Visitors Into Clients.",
            subtitle: "I build high-performance, premium websites designed to grow your business. Stop losing customers to slow, outdated sites.",
            ctaPrimary: "Get a Free Quote",
            ctaSecondary: "View My Work",
            card: {
                title: "Business Growth",
                subtitle: "Optimized for Conversion & Speed",
                performance: "Performance",
                seo: "SEO",
                secure: "Secure",
                ssl: "SSL Ready",
                sales: "Sales",
                live: "Live"
            }
        },
        about: {
            title: "Rayen Lazizi",
            role: "Full Stack Developer & Strategist",
            quote: "\"I don't just write code. I build digital assets that bring you more revenue.\"",
            whoAmI: {
                title: "Who Am I?",
                subtitle: "Your Tech Partner.",
                p1: "I'm not just another freelancer who delivers a template. I am a dedicated developer who understands that your website is an investment.",
                p2: "My goal is to make your business stand out in a crowded market. I focus on speed, design, and user experience to ensure every visitor trusts you instantly."
            },
            cards: {
                results: { title: "Results Driven", desc: "Focus on ROI, Speed, and SEO ranking." },
                business: { title: "Business Mindset", desc: "I speak your language, not just code." },
                tech: { title: "Modern Tech", desc: "Built with the latest, fastest technologies." },
                expertise: { title: "Expertise", desc: "Continuous learning and professional engineering." }
            }
        },
        services: {
            label: "What I Deliver",
            title: "Comprehensive Solutions for",
            titleGradient: "Modern Businesses",
            description: "I don't just sell \"websites\". I provide the digital infrastructure your business needs to grow, operate efficiently, and scale.",
            items: [
                {
                    id: 1,
                    title: "Custom Business Platforms",
                    description: "Move beyond generic templates. I build bespoke web applications tailored to your specific operational needs—whether it's a client portal, a booking system, or a complex dashboard.",
                    features: ["React/Next.js Architecture", "Scalable Database Design", "Secure User Authentication"]
                },
                {
                    id: 2,
                    title: "High-Conversion E-Commerce",
                    description: "Launch an online store that actually sells. From product showcases to secure payment processing and inventory management, I build shopping experiences that customers trust.",
                    features: ["Stripe/PayPal Integration", "Cart & Checkout Optimization", "Admin Dashboard"]
                },
                {
                    id: 3,
                    title: "Professional SEO & Growth",
                    description: "A beautiful website is useless if no one finds it. I implement professional Technical SEO to ensure your business ranks high on Google, driving consistent organic traffic and real customers without paid ads.",
                    features: ["Google Ranking Strategy", "Keyword Optimization", "Performance Tuning"]
                },
                {
                    id: 4,
                    title: "Workflow Automation",
                    description: "Stop doing repetitive tasks. I integrate your website with tools like CRMs, email marketing platforms, and analytics to put your business on autopilot.",
                    features: ["API Integrations", "Automated Email Sequences", "Real-time Notifications"]
                }
            ]
        },
        caseStudy: {
            label: "Featured Success Story",
            title: "Unyamee.shop – A Global E-Commerce Ecosystem",
            challenge: "The client needed a scalable, international e-commerce platform capable of handling multi-currency transactions, real-time inventory tracking for thousands of SKUs, and a seamless mobile experience for a fashion-forward audience.",
            solutionTitle: "The Solution",
            solution: "I engineered a custom full-stack solution using React and Python. Key features included a dynamic product filtering engine, a secure checkout flow integrated with Stripe, and a custom admin panel that reduced inventory management time by 40%.",
            visitSite: "Visit Live Site",
            salesLive: "Sales",
            live: "Live",
            results: [
                "35% Increase in Mobile Conversions",
                "Sub-2s Page Load Speeds",
                "Automated Order Processing",
                "100% Secure Payment Uptime"
            ]
        },
        pricing: {
            label: "Investment Strategy",
            title: "Transparent, Value-Based",
            titleGradient: "Pricing.",
            description: "Choose how you want to work. I offer a flexible model that separates the build cost from ongoing care, giving you full control over your budget.",
            discuss: "Discuss This Plan",
            plans: [
                {
                    type: "Essential Build",
                    title: "The Foundation",
                    price: "€400 - €1.200",
                    paymentStructure: "50% Upfront • 50% on Completion",
                    description: "The core investment. I design and build your custom platform from scratch. You own 100% of the code and assets forever.",
                    features: ["Custom UI/UX Design", "Mobile Responsive Development", "SEO Infrastructure Setup", "Admin Panel Configuration", "One-time Payment"],
                    badge: ""
                },
                {
                    type: "Optional Maintenance",
                    title: "Peace of Mind",
                    price: "Starts at €50/mo",
                    description: "Secure your investment. I handle hosting, updates, and technical issues so you never have to verify plugins or servers.",
                    features: ["Premium High-Speed Hosting", "Domain Name Management", "Weekly Security Updates", "24/7 Uptime Monitoring", "Cancel Anytime"],
                    badge: "Recommended Add-on"
                }
            ]
        },
        faq: {
            title: "Common Questions",
            description: "Transparency is key to a good partnership. Here are honest answers to the questions I get asked most often.",
            moreQuestions: "Have another question?",
            items: [
                {
                    question: "Do I have to pay the monthly fee?",
                    answer: "No, it is 100% optional. You can choose to pay only for the website build and manage the hosting yourself. However, for just $50/mo, I ensure your site stays fast, secure, and online without you lifting a finger."
                },
                {
                    question: "How long does it take to build a website?",
                    answer: "A standard business website typically takes 4-7 days. Complex platforms with custom features (like booking systems or e-commerce) usually take 1-3 weeks. I work efficiently to get you online fast without sacrificing quality."
                },
                {
                    question: "Who owns the website?",
                    answer: "You do. Once the one-time build fee is paid, you own 100% of the code, design, and content. No lock-in contracts."
                },
                {
                    question: "Can you help me rank on Google?",
                    answer: "Absolutely. My 'Professional SEO' service is built into the development process. I ensure your site is technically optimized for Google’s algorithms from day one."
                }
            ]
        },
        contact: {
            label: "Start Your Transformation",
            title: "Ready to Scale Your",
            titleGradient: "Digital Presence?",
            description: "You focus on running your business. I'll handle the technology that helps it grow. Let's discuss your project today.",
            emailBtn: "Email Me",
            whatsappBtn: "WhatsApp",
            responseTime: "Response time: < 24 hours",
            location: "Located in Italy, serving clients worldwide."
        },
        footer: {
            tagline: "I don't just write code. I build high-performance digital engines that scale your business.",
            explore: "Explore",
            startScaling: "Start Scaling",
            ctaDescription: "Your business deserves a digital platform that performs. Let's build it together.",
            ctaButton: "Get in Touch",
            rights: "All rights reserved.",
            designed: "Designed for Impact."
        }
    },
    it: {
        header: {
            about: "Chi Sono",
            services: "Servizi",
            work: "Lavori",
            startProject: "Inizia Progetto"
        },
        hero: {
            status: "Nuovi Clienti Accettati",
            titleStart: "Siti Web Che Trasformano",
            titleEnd: "Visitatori in Clienti.",
            subtitle: "Creo siti web premium ad alte prestazioni progettati per far crescere il tuo business. Smetti di perdere clienti a causa di siti lenti e obsoleti.",
            ctaPrimary: "Richiedi Preventivo",
            ctaSecondary: "Vedi i Miei Lavori",
            card: {
                title: "Crescita Aziendale",
                subtitle: "Ottimizzato per Conversion & Speed",
                performance: "Performance",
                seo: "SEO",
                secure: "Sicuro",
                ssl: "SSL Ready",
                sales: "Sales",
                live: "Live"
            }
        },
        about: {
            title: "Rayen Lazizi",
            role: "Full Stack Developer & Strategist",
            quote: "\"Non scrivo solo codice. Costruisco asset digitali che ti portano più entrate.\"",
            whoAmI: {
                title: "Chi Sono?",
                subtitle: "Il Tuo Tech Partner.",
                p1: "Non sono solo un altro freelancer che consegna un template. Sono uno sviluppatore dedicato che capisce che il tuo sito web è un investimento.",
                p2: "Il mio obiettivo è far risaltare il tuo business in un mercato affollato. Mi concentro su velocità, design ed esperienza utente per garantire che ogni visitatore si fidi di te all'istante."
            },
            cards: {
                results: { title: "Orientato ai Risultati", desc: "Focus su ROI, Speed e SEO ranking." },
                business: { title: "Mentalità Business", desc: "Parlo la tua lingua, non solo codice." },
                tech: { title: "Modern Tech", desc: "Costruito con le tecnologie più veloci." },
                expertise: { title: "Expertise", desc: "Apprendimento continuo e ingegneria professionale." }
            }
        },
        services: {
            label: "Cosa Offro",
            title: "Soluzioni Complete per",
            titleGradient: "Business Moderni",
            description: "Non vendo solo \"siti web\". Fornisco l'infrastruttura digitale di cui il tuo business ha bisogno per crescere, operare in modo efficiente e scalare.",
            items: [
                {
                    id: 1,
                    title: "Piattaforme Business Personalizzate",
                    description: "Vai oltre i template generici. Costruisco applicazioni web su misura per le tue esigenze operative specifiche—che sia un portale clienti, un sistema di prenotazione o una dashboard complessa.",
                    features: ["Architettura React/Next.js", "Design Database Scalabile", "Autenticazione Utente Sicura"]
                },
                {
                    id: 2,
                    title: "E-Commerce ad Alta Conversione",
                    description: "Lancia un negozio online che vende davvero. Dalle vetrine prodotti ai pagamenti sicuri, costruisco esperienze d'acquisto di cui i clienti si fidano.",
                    features: ["Integrazione Stripe/PayPal", "Ottimizzazione Carrello", "Dashboard Amministrazione"]
                },
                {
                    id: 3,
                    title: "SEO Professionale e Crescita",
                    description: "Un bel sito è inutile se nessuno lo trova. Implemento SEO Tecnico professionale per garantire che il tuo business si posizioni in alto su Google.",
                    features: ["Strategia Ranking Google", "Ottimizzazione Keyword", "Ottimizzazione Performance"]
                },
                {
                    id: 4,
                    title: "Automazione Flussi di Lavoro",
                    description: "Smetti di fare compiti ripetitivi. Integro il tuo sito con strumenti come CRM e piattaforme di email marketing per mettere il tuo business col pilota automatico.",
                    features: ["Integrazioni API", "Sequenze Email Automatizzate", "Notifiche in Tempo Reale"]
                }
            ]
        },
        caseStudy: {
            label: "Storia di Successo",
            title: "Unyamee.shop – Un Ecosistema E-Commerce Globale",
            challenge: "Il cliente necessitava di una piattaforma e-commerce scalabile e internazionale, capace di gestire transazioni multi-valuta, tracciamento inventario in tempo reale per migliaia di SKU e un'esperienza mobile fluida per un pubblico fashion.",
            solutionTitle: "La Soluzione",
            solution: "Ho ingegnerizzato una soluzione full-stack personalizzata usando React e Python. Le funzionalità chiave includono un motore di filtri dinamico, un checkout sicuro integrato con Stripe e un pannello admin che ha ridotto la gestione dell'inventario del 40%.",
            visitSite: "Visita Sito Live",
            salesLive: "Sales",
            live: "Live",
            results: [
                "35% Aumento Conversioni Mobile",
                "Caricamento Pagina < 2s",
                "Processo Ordini Automatizzato",
                "100% Uptime Pagamenti Sicuri"
            ]
        },
        pricing: {
            label: "Strategia di Investimento",
            title: "Prezzi Trasparenti e",
            titleGradient: "Basati sul Valore.",
            description: "Scegli come vuoi lavorare. Offro un modello flessibile che separa il costo di costruzione dalla manutenzione, dandoti il pieno controllo sul tuo budget.",
            discuss: "Discuti Questo Piano",
            plans: [
                {
                    type: "Costruzione Essenziale",
                    title: "Le Fondamenta",
                    price: "€400 - €1.200",
                    paymentStructure: "50% Acconto • 50% alla Consegna",
                    description: "L'investimento principale. Progetto e costruisco la tua piattaforma personalizzata da zero. Possiedi il 100% del codice e degli asset per sempre.",
                    features: ["Design UI/UX Personalizzato", "Sviluppo Mobile Responsive", "Setup Infrastruttura SEO", "Configurazione Pannello Admin", "Pagamento Unico"],
                    badge: ""
                },
                {
                    type: "Manutenzione Opzionale",
                    title: "Tranquillità",
                    price: "Da €50/mese",
                    description: "Proteggi il tuo investimento. Gestisco hosting, aggiornamenti e problemi tecnici così non devi mai preoccuparti di plugin o server.",
                    features: ["Hosting Premium Veloce", "Gestione Nome Dominio", "Aggiornamenti Sicurezza Settimanali", "Monitoraggio Uptime 24/7", "Disdici Quando Vuoi"],
                    badge: "Add-on Consigliato"
                }
            ]
        },
        faq: {
            title: "Domande Frequenti",
            description: "La trasparenza è fondamentale. Ecco risposte oneste alle domande che ricevo più spesso.",
            moreQuestions: "Hai un'altra domanda?",
            items: [
                {
                    question: "Devo pagare il canone mensile?",
                    answer: "No, è opzionale al 100%. Puoi scegliere di pagare solo per la costruzione del sito e gestire l'hosting da solo. Tuttavia, per soli €50/mese, assicuro che il tuo sito rimanga veloce, sicuro e online senza che tu debba alzare un dito."
                },
                {
                    question: "Quanto tempo ci vuole per costruire un sito?",
                    answer: "Un sito aziendale standard richiede in genere 4-7 giorni. Piattaforme complesse con funzionalità personalizzate (come sistemi di prenotazione o e-commerce) richiedono solitamente 1-3 settimane. Lavoro in modo efficiente per metterti online velocemente senza sacrificare la qualità."
                },
                {
                    question: "Chi possiede il sito web?",
                    answer: "Tu. Una volta pagata la tariffa unica di costruzione, possiedi il 100% del codice, del design e dei contenuti. Nessun contratto vincolante."
                },
                {
                    question: "Puoi aiutarmi a posizionarmi su Google?",
                    answer: "Assolutamente. Il mio servizio 'SEO Professionale' è integrato nel processo di sviluppo. Assicuro che il tuo sito sia tecnicamente ottimizzato per gli algoritmi di Google fin dal primo giorno."
                }
            ]
        },
        contact: {
            label: "Inizia la Tua Trasformazione",
            title: "Pronto a Scalare la Tua",
            titleGradient: "Presenza Digitale?",
            description: "Tu concentrati sul gestire il tuo business. Io gestirò la tecnologia che lo aiuta a crescere. Discutiamo del tuo progetto oggi.",
            emailBtn: "Inviami Email",
            whatsappBtn: "WhatsApp",
            responseTime: "Risposta: < 24 ore",
            location: "Basato in Italia, clienti globali."
        },
        footer: {
            tagline: "Non scrivo solo codice. Costruisco motori digitali ad alte prestazioni che fanno scalare il tuo business.",
            explore: "Esplora",
            startScaling: "Inizia a Scalare",
            ctaDescription: "Il tuo business merita una piattaforma digitale che performi. Costruiamola insieme.",
            ctaButton: "Contattami",
            rights: "Tutti i diritti riservati.",
            designed: "Progettato per l'Impatto."
        }
    },
    fr: {
        header: {
            about: "À Propos",
            services: "Services",
            work: "Projets",
            startProject: "Lancer Projet"
        },
        hero: {
            status: "Nouveaux Clients Acceptés",
            titleStart: "Des Sites Qui Transforment",
            titleEnd: "Visiteurs en Clients.",
            subtitle: "Je construis des sites web premium haute performance conçus pour faire croître votre entreprise. Arrêtez de perdre des clients à cause de sites lents et obsolètes.",
            ctaPrimary: "Devis Gratuit",
            ctaSecondary: "Voir Mes travaux",
            card: {
                title: "Croissance",
                subtitle: "Optimisé pour Conversion & Speed",
                performance: "Performance",
                seo: "SEO",
                secure: "Sécure",
                ssl: "SSL Ready",
                sales: "Sales",
                live: "Live"
            }
        },
        about: {
            title: "Rayen Lazizi",
            role: "Full Stack Developer & Strategist",
            quote: "\"Je ne fais pas que coder. Je construis des actifs numériques qui vous rapportent plus de revenus.\"",
            whoAmI: {
                title: "Qui Suis-Je ?",
                subtitle: "Votre Tech Partner.",
                p1: "Je ne suis pas juste un autre freelance qui livre un template. Je suis un développeur dévoué qui comprend que votre site web est un investissement.",
                p2: "Mon objectif est de faire sortir votre entreprise du lot. Je me concentre sur la vitesse, le design et l'expérience utilisateur pour garantir la confiance instantanée de chaque visiteur."
            },
            cards: {
                results: { title: "Axé Résultats", desc: "Focus sur ROI, Speed et SEO ranking." },
                business: { title: "Esprit Business", desc: "Je parle votre langue, pas juste du code." },
                tech: { title: "Modern Tech", desc: "Construit avec les technologies les plus rapides." },
                expertise: { title: "Expertise", desc: "Apprentissage continu et ingénierie pro." }
            }
        },
        services: {
            label: "Ce Que J'offre",
            title: "Solutions Complètes pour",
            titleGradient: "Entreprises Modernes",
            description: "Je ne vends pas juste des \"sites web\". Je fournis l'infrastructure numérique dont votre entreprise a besoin pour croître et opérer efficacement.",
            items: [
                {
                    id: 1,
                    title: "Plateformes Business Sur Mesure",
                    description: "Au-delà des templates. Je construis des applications web sur mesure pour vos besoins opérationnels—portail client, système de réservation ou tableau de bord complexe.",
                    features: ["Architecture React/Next.js", "Design Base de Données Scalable", "Authentification Sécurisée"]
                },
                {
                    id: 2,
                    title: "E-Commerce Haute Conversion",
                    description: "Lancez une boutique en ligne qui vend vraiment. De la vitrine au paiement sécurisé, je construis des expériences d'achat en lesquelles les clients ont confiance.",
                    features: ["Intégration Stripe/PayPal", "Optimisation Panier", "Tableau de Bord Admin"]
                },
                {
                    id: 3,
                    title: "SEO Professionnel & Croissance",
                    description: "Un beau site est inutile si personne ne le trouve. J'implémente un SEO technique pour garantir que votre entreprise se classe haut sur Google.",
                    features: ["Stratégie Ranking Google", "Optimisation Mots-clés", "Réglage Performance"]
                },
                {
                    id: 4,
                    title: "Automazione de Workflow",
                    description: "Arrêtez les tâches répétitives. J'intègre votre site avec des CRM et outils marketing pour mettre votre entreprise en pilote automatique.",
                    features: ["Intégrations API", "Séquences Email Auto", "Notifications Temps Réel"]
                }
            ]
        },
        caseStudy: {
            label: "Succès en Vedette",
            title: "Unyamee.shop – Un Écosystème E-Commerce Global",
            challenge: "Le client avait besoin d'une plateforme e-commerce scalable et internationale, capable de gérer des transactions multi-devises, un suivi d'inventaire temps réel pour des milliers de SKU, et une expérience mobile fluide.",
            solutionTitle: "La Solution",
            solution: "J'ai conçu une solution full-stack sur mesure avec React et Python. Les fonctionnalités clés incluent un moteur de filtrage dynamique, un flux de paiement sécurisé intégré avec Stripe, et un panneau admin réduisant le temps de gestion d'inventaire de 40%.",
            visitSite: "Voir Site Live",
            salesLive: "Sales",
            live: "Live",
            results: [
                "35% Augmentation Conversions Mobile",
                "Vitesse Chargement < 2s",
                "Traitement Commandes Automatisé",
                "100% Uptime Paiements Sécurisés"
            ]
        },
        pricing: {
            label: "Stratégie d'Investissement",
            title: "Tarification Transparente et",
            titleGradient: "Basée sur la Valeur.",
            description: "Choisissez comment vous voulez travailler. J'offre un modèle flexible qui sépare le coût de construction de l'entretien continu.",
            discuss: "Discuter ce Plan",
            plans: [
                {
                    type: "Construction Essentielle",
                    title: "La Fondation",
                    price: "€400 - €1.200",
                    paymentStructure: "50% Acompte • 50% à la Livraison",
                    description: "L'investissement principal. Je conçois et construis votre plateforme sur mesure de zéro. Vous possédez 100% du code et des actifs pour toujours.",
                    features: ["Design UI/UX Personnalisé", "Développement Mobile Responsive", "Configuration Infrastructure SEO", "Configuration Panneau Admin", "Paiement Unique"],
                    badge: ""
                },
                {
                    type: "Maintenance Optionnelle",
                    title: "Tranquillité d'Esprit",
                    price: "À partir de 50€/mois",
                    description: "Sécurisez votre investissement. Je gère l'hébergement, les mises à jour et les problèmes techniques.",
                    features: ["Hébergement Premium Rapide", "Gestion Nom de Domaine", "Mises à jour Sécurité Hebdo", "Monitoring 24/7", "Annulez Quand Vous Voulez"],
                    badge: "Add-on Recommandé"
                }
            ]
        },
        faq: {
            title: "Questions Fréquentes",
            description: "La transparence est la clé. Voici des réponses honnêtes aux questions qu'on me pose le plus souvent.",
            moreQuestions: "Autre question ?",
            items: [
                {
                    question: "Dois-je payer les frais mensuels ?",
                    answer: "Non, c'est 100% optionnel. Vous pouvez choisir de payer uniquement pour la création du site et gérer l'hébergement vous-même. Cependant, pour juste 50€/mois, je m'assure que votre site reste rapide, sécurisé et en ligne sans que vous leviez le petit doigt."
                },
                {
                    question: "Combien de temps pour créer un site ?",
                    answer: "Un site vitrine standard prend généralement 4-7 jours. Les plateformes complexes avec des fonctionnalités sur mesure (comme des systèmes de réservation ou e-commerce) prennent généralement 1-3 semaines. Je travaille efficacement pour vous mettre en ligne rapidement."
                },
                {
                    question: "À qui appartient le site ?",
                    answer: "À vous. Une fois les frais de création payés, vous possédez 100% du code, du design et du contenu. Aucun contrat de verrouillage."
                },
                {
                    question: "Pouvez-vous m'aider à être classé sur Google ?",
                    answer: "Absolument. Mon service de 'SEO Professionnel' est intégré dans le processus de développement. Je m'assure que votre site est techniquement optimisé pour les algorithmes de Google dès le premier jour."
                }
            ]
        },
        contact: {
            label: "Commencez Votre Transformation",
            title: "Prêt à Scaler Votre",
            titleGradient: "Présence Numérique ?",
            description: "Concentrez-vous sur votre business. Je gère la technologie qui l'aide à grandir. Discutons de votre projet aujourd'hui.",
            emailBtn: "Envoyez-moi un Email",
            whatsappBtn: "WhatsApp",
            responseTime: "Réponse : < 24 heures",
            location: "Basé en Italie, clients mondiaux."
        },
        footer: {
            tagline: "Je ne fais pas que coder. Je construis des moteurs numériques haute performance qui font scaler votre business.",
            explore: "Explorer",
            startScaling: "Commencer à Scaler",
            ctaDescription: "Votre entreprise mérite une plateforme numérique performante. Construisons-la ensemble.",
            ctaButton: "Contactez-moi",
            rights: "Tous droits réservés.",
            designed: "Conçu pour l'Impact."
        }
    },
    pl: {
        header: {
            about: "O Mnie",
            services: "Usługi",
            work: "Projekty",
            startProject: "Rozpocznij Projekt"
        },
        hero: {
            status: "Nowi Klienci Mile Widziani",
            titleStart: "Strony, Które Zmieniają",
            titleEnd: "Odwiedzających w Klientów.",
            subtitle: "Tworzę wydajne strony premium zaprojektowane, aby rozwijać Twój biznes. Przestań tracić klientów przez wolne, przestarzałe strony.",
            ctaPrimary: "Darmowa Wycena",
            ctaSecondary: "Zobacz Moje Prace",
            card: {
                title: "Wzrost Biznesu",
                subtitle: "Zoptymalizowane pod Conversion & Speed",
                performance: "Performance",
                seo: "SEO",
                secure: "Bezpieczne",
                ssl: "SSL Ready",
                sales: "Sales",
                live: "Live"
            }
        },
        about: {
            title: "Rayen Lazizi",
            role: "Full Stack Developer & Strategist",
            quote: "\"Nie piszę tylko kodu. Buduję cyfrowe aktywa, które przynoszą Ci większe zyski.\"",
            whoAmI: {
                title: "Kim Jestem?",
                subtitle: "Twój Tech Partner.",
                p1: "Nie jestem kolejnym freelancerem dostarczającym szablon. Jestem dedykowanym programistą, który rozumie, że Twoja strona to inwestycja.",
                p2: "Moim celem jest wyróżnienie Twojego biznesu na zatłoczonym rynku. Skupiam się na szybkości, designie i doświadczeniu użytkownika, aby każdy odwiedzający od razu Ci zaufał."
            },
            cards: {
                results: { title: "Nastawienie na Wyniki", desc: "Focus na ROI, Speed i SEO ranking." },
                business: { title: "Podejście Biznesowe", desc: "Mówię Twoim językiem, nie tylko kodem." },
                tech: { title: "Modern Tech", desc: "Zbudowane na najszybszych technologiach." },
                expertise: { title: "Ekspertyza", desc: "Ciągła nauka i profesjonalna inżynieria." }
            }
        },
        services: {
            label: "Co Dostarczam",
            title: "Kompleksowe Rozwiązania dla",
            titleGradient: "Nowoczesnych Firm",
            description: "Nie sprzedaję tylko \"stron www\". Dostarczam infrastrukturę cyfrową, której Twój biznes potrzebuje do wzrostu i sprawnego działania.",
            items: [
                {
                    id: 1,
                    title: "Dedykowane Platformy Biznesowe",
                    description: "Wyjdź poza szablony. Buduję aplikacje webowe szyte na miarę Twoich potrzeb operacyjnych—czy to portal klienta, system rezerwacji czy skomplikowany pulpit.",
                    features: ["Architektura React/Next.js", "Skalowalne Bazy Danych", "Bezpieczne Uwierzytelnianie"]
                },
                {
                    id: 2,
                    title: "E-Commerce o Wysokiej Konwersji",
                    description: "Uruchom sklep online, który naprawdę sprzedaje. Od prezentacji produktów po bezpieczne płatności, buduję doświadczenia zakupowe, którym klienci ufają.",
                    features: ["Integracja Stripe/PayPal", "Optymalizacja Koszyka", "Panel Administracyjny"]
                },
                {
                    id: 3,
                    title: "Profesjonalne SEO i Wzrost",
                    description: "Piękna strona jest bezużyteczna, jeśli nikt jej nie znajdzie. Wdrażam profesjonalne techniczne SEO, aby Twój biznes był wysoko w Google.",
                    features: ["Strategia Rankingu Google", "Optymalizacja Słów Kluczowych", "Poprawa Performance"]
                },
                {
                    id: 4,
                    title: "Automatyzacja Pracy",
                    description: "Przestań robić powtarzalne zadania. Integruję Twoją stronę z narzędziami CRM i email marketingu, aby Twój biznes działał na autopilocie.",
                    features: ["Integracje API", "Automatyczne Sekwencje Email", "Powiadomienia w Czasie Rzeczywistym"]
                }
            ]
        },
        caseStudy: {
            label: "Wyróżnione Success Story",
            title: "Unyamee.shop – Globalny Ekosystem E-Commerce",
            challenge: "Klient potrzebował skalowalnej, międzynarodowej platformy e-commerce obsługującej wiele walut, śledzenie zapasów w czasie rzeczywistym dla tysięcy produktów i płynne doświadczenie mobilne.",
            solutionTitle: "Rozwiązanie",
            solution: "Stworzyłem dedykowane rozwiązanie full-stack używając React i Python. Kluczowe funkcje to dynamiczny silnik filtrowania, bezpieczny checkout zintegrowany ze Stripe i panel admina redukujący czas zarządzania o 40%.",
            visitSite: "Odwiedź Stronę",
            salesLive: "Sales",
            live: "Live",
            results: [
                "35% Wzrost Konwersji Mobilnych",
                "Czas Ładowania < 2s",
                "Automatyczne Przetwarzanie",
                "100% Uptime Płatności"
            ]
        },
        pricing: {
            label: "Strategia Inwestycyjna",
            title: "Przejrzyste Ceny Oparte na",
            titleGradient: "Wartości.",
            description: "Wybierz jak chcesz pracować. Oferuję elastyczny model oddzielający koszt budowy od bieżącej opieki, dając Ci pełną kontrolę nad budżetem.",
            discuss: "Omów ten Plan",
            plans: [
                {
                    type: "Niezbędna Budowa",
                    title: "Fundament",
                    price: "€400 - €1.200",
                    paymentStructure: "50% Zadatek • 50% przy Odbiorze",
                    description: "Główna inwestycja. Projektuję i buduję Twoją platformę od zera. Jesteś właścicielem 100% kodu i zasobów na zawsze.",
                    features: ["Dedykowany Design UI/UX", "Responsywność Mobilna", "Infrastruktura SEO", "Konfiguracja Panelu Admina", "Jednorazowa Płatność"],
                    badge: ""
                },
                {
                    type: "Opcjonalne Utrzymanie",
                    title: "Spokój Ducha",
                    price: "Od 50€/mies",
                    description: "Zabezpiecz swoją inwestycję. Zarządzam hostingiem, aktualizacjami i problemami technicznymi.",
                    features: ["Szybki Hosting Premium", "Zarządzanie Domeną", "Cotygodniowe Aktualizacje Bezpieczeństwa", "Monitoring 24/7", "Anuluj Kiedy Chcesz"],
                    badge: "Zalecany Dodatek"
                }
            ]
        },
        faq: {
            title: "Częste Pytania",
            description: "Przejrzystość to klucz do dobrej współpracy. Oto szczere odpowiedzi na pytania, które słyszę najczęściej.",
            moreQuestions: "Masz inne pytanie?",
            items: [
                {
                    question: "Czy muszę płacić miesięczny abonament?",
                    answer: "Nie, to w 100% opcjonalne. Możesz zapłacić tylko za budowę strony i zarządzać hostingiem samodzielnie. Jednak za jedyne 50€/miesiąc dbam o to, by Twoja strona była szybka, bezpieczna i zawsze online."
                },
                {
                    question: "Ile trwa budowa strony?",
                    answer: "Standardowa strona firmowa powstaje zazwyczaj w 4-7 dni. Rozbudowane platformy z dedykowanymi funkcjami (jak rezerwacje czy e-commerce) zajmują zwykle 1-3 tygodnie. Pracuję sprawnie, byś mógł szybko zacząć działać online."
                },
                {
                    question: "Kto jest właścicielem strony?",
                    answer: "Ty. Po opłaceniu jednorazowej opłaty za budowę, masz 100% praw do kodu, designu i treści. Żadnych umów wiążących."
                },
                {
                    question: "Czy pomożesz mi być wysoko w Google?",
                    answer: "Oczywiście. Moja usługa 'Profesjonalne SEO' jest wbudowana w proces tworzenia. Zapewniam, że Twoja strona jest technicznie zoptymalizowana pod algorytmy Google od pierwszego dnia."
                }
            ]
        },
        contact: {
            label: "Rozpocznij Transformację",
            title: "Gotowy na Skalowanie",
            titleGradient: "Obecności Cyfrowej?",
            description: "Ty skup się na prowadzeniu biznesu. Ja zajmę się technologią, która pomaga mu rosnąć. Porozmawiajmy o Twoim projekcie dziś.",
            emailBtn: "Napisz do Mnie",
            whatsappBtn: "WhatsApp",
            responseTime: "Odpowiedź: < 24 godziny",
            location: "Siedziba we Włoszech, klienci globalni."
        },
        footer: {
            tagline: "Nie piszę tylko kodu. Buduję cyfrowe silniki o wysokiej wydajności, które skalują Twój biznes.",
            explore: "Eksploruj",
            startScaling: "Zacznij Skalować",
            ctaDescription: "Twój biznes zasługuje na platformę cyfrową, która działa. Zbudujmy ją razem.",
            ctaButton: "Skontaktuj się",
            rights: "Wszelkie prawa zastrzeżone.",
            designed: "Zaprojektowane dla Wyników."
        }
    }
};
