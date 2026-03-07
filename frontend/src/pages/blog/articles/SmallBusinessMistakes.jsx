import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import SEOHead from '../../../components/seo/SEOHead';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmallBusinessMistakes = () => {
    return (
        <MainLayout>
            <SEOHead
                title="5 Expensive Mistakes Small Business Websites Make | Web Design"
                description="Is your website actively driving customers away? Learn the top 5 design and technical errors that are killing your conversion rate today."
                canonicalUrl="https://rayenlazizi.tech/blog/small-business-website-mistakes"
                type="article"
            />

            <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">5 Expensive Mistakes Small Business Websites Make</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By Rayen Lazizi</span>
                        <span>•</span>
                        <span>February 24, 2026</span>
                        <span>•</span>
                        <span className="text-primary font-medium bg-primary/10 px-2 py-1 rounded">Web Design</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-muted-foreground mb-8">
                        You built a website, put it on your business cards, and waited. And waited. But the phone isn't ringing. Here are the top 5 reasons why your website is bleeding potential revenue.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">1. The "Where am I?" Hero Section</h2>
                    <p>
                        When a user lands on your site, you have exactly 3 seconds to answer three questions: Who are you? What do you do? How do I get it? If your homepage just says "Welcome to Johnson & Sons" over a blurry stock photo of a handshake, they are leaving. Be direct. "Plumbing Services in Warsaw. 24/7 Emergency Repairs."
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">2. Hiding the Call to Action (CTA)</h2>
                    <p>
                        If I want to give you my money, how do I do it? Don't make me click a tiny "Contact" link in your footer. Your primary CTA (Book Now, Call us, Get a Quote) should be a highly visible button in the top right corner of your navigation, and repeated throughout every single page.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">3. Ignoring Mobile Users</h2>
                    <p>
                        Up to 80% of local business searches happen on a smartphone. Yet, thousands of business owners only review their website on a giant desktop monitor. If your text is too small to read on a phone, or your buttons are too close together to tap with a thumb, Google will literally punish your search ranking.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">4. Slow Load Times (The Silent Killer)</h2>
                    <p>
                        Amazon calculated that a page load slowdown of just one second could cost them $1.6 billion in sales each year. It affects small businesses just as heavily. If you used a bloated WordPress theme packed with unoptimized 5MB images, your site is slow. Users will hit the "Back" button before your logo even appears.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">5. Lack of Trust Signals</h2>
                    <p>
                        People do business with people they trust. If your site lacks Google reviews, testimonials, photos of your actual team (no stock photography!), or clear pricing structures, visitors will feel uneasy. Social proof is the strongest converting element you can add to a page.
                    </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Is your website making these mistakes?</h3>
                        <p className="text-muted-foreground mb-6">Let's fix it. I specialize in high-converting rebuilds for ambitious local agencies and businesses.</p>
                        <a href="/#contact" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                            Request a Free Website Audit
                        </a>
                    </div>
                </div>
            </article>
        </MainLayout>
    );
};

export default SmallBusinessMistakes;
