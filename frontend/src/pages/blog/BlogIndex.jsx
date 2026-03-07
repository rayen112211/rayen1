import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import SEOHead from '../../components/seo/SEOHead';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const articles = [
    {
        slug: 'small-business-website-cost-2026',
        title: 'How Much Does a Small Business Website Cost in 2026?',
        excerpt: 'A complete breakdown of web design pricing, from cheap DIY builders to custom React applications, and how to know what your business actually needs.',
        date: 'March 1, 2026',
        category: 'Business Strategy'
    },
    {
        slug: 'small-business-website-mistakes',
        title: '5 Expensive Mistakes Small Business Websites Make',
        excerpt: 'Is your website actively driving customers away? Learn the top 5 design and technical errors that are killing your conversion rate today.',
        date: 'February 24, 2026',
        category: 'Web Design'
    },
    {
        slug: 'why-restaurants-need-websites',
        title: 'Why Restaurants Lose Customers Without a Custom Website',
        excerpt: 'Relying solely on UberEats, Instagram, or a PDF menu is destroying your restaurant margins. Here is why you need your own digital storefront.',
        date: 'February 15, 2026',
        category: 'Restaurant SEO'
    },
    {
        slug: 'nextjs-vs-wordpress',
        title: 'Next.js vs WordPress: Which is Better for Small Businesses?',
        excerpt: 'WordPress runs 40% of the web, but is it still the best choice? Discover why modern agencies are migrating businesses to Next.js for speed and security.',
        date: 'February 2, 2026',
        category: 'Technology'
    },
    {
        slug: 'when-to-redesign-website',
        title: 'When Should a Business Redesign Its Website?',
        excerpt: 'Not sure if you need a visual refresh or a total rebuild? Here are the 4 clear signs that it is time to invest in a website redesign.',
        date: 'January 18, 2026',
        category: 'Web Design'
    }
];

const BlogIndex = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Web Development & Business Growth Blog | Rayen Lazizi"
                description="Articles and guides on web development, SEO, and how custom websites drive real business growth for small businesses and agencies."
                canonicalUrl="https://rayenlazizi.tech/blog"
            />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Insights on Web Development & <span className="text-primary">Business Growth</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Practical advice, technical deep-dives, and strategies to help your business leverage the internet effectively.
                </p>
            </section>

            {/* Article List */}
            <section className="py-12 px-6 max-w-4xl mx-auto mb-24">
                <div className="space-y-8">
                    {articles.map((article) => (
                        <Link
                            to={`/blog/${article.slug}`}
                            key={article.slug}
                            className="block glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-muted-foreground mb-4">
                                <span className="inline-flex items-center gap-1 text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-md">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    {article.category}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {article.date}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {article.excerpt}
                            </p>
                            <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default BlogIndex;
