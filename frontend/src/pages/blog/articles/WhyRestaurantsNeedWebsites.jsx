import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import SEOHead from '../../../components/seo/SEOHead';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyRestaurantsNeedWebsites = () => {
    return (
        <MainLayout>
            <SEOHead
                title="Why Restaurants Lose Customers Without a Custom Website | SEO"
                description="Relying solely on UberEats, Instagram, or a PDF menu is destroying your restaurant margins. Here is why you need your own digital storefront."
                canonicalUrl="https://rayenlazizi.tech/blog/why-restaurants-need-websites"
                type="article"
            />

            <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
                <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Restaurants Lose Customers Without a Custom Website</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By Rayen Lazizi</span>
                        <span>•</span>
                        <span>February 15, 2026</span>
                        <span>•</span>
                        <span className="text-primary font-medium bg-primary/10 px-2 py-1 rounded">Restaurant SEO</span>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="lead text-xl text-muted-foreground mb-8">
                        I speak to restaurant owners every week who tell me, "We don't need a website, we have Instagram and UberEats." Here is why that strategy is slowly suffocating your margins.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">You Don't Own Your Delivery Traffic</h2>
                    <p>
                        Delivery apps like UberEats and Deliveroo take anywhere from 15% to 30% of your revenue per order. Worse, they own the customer relationship. If a user searches "Pizza near me" on Google, your delivery app page isn't what ranks first—their own massive aggregator page does. A custom website allows you to rank locally and implement zero-commission direct ordering.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">The PDF Menu Disaster</h2>
                    <p>
                        If your website forces a hungry user on a 3G mobile connection to download a 10MB PDF just to see if you sell gluten-free pasta, they are going somewhere else. Period. HTML-based digital menus load instantly, look beautiful on any screen, and crucially—Google can actually read the text to index your dishes for search results.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Instagram Isn't Google</h2>
                    <p>
                        Instagram is fantastic for brand loyalty and showing off your tonight's special. But when someone is visiting your city for the weekend and searches "Best fine dining in Milan," they search Google. If you don't have a fast, SEO-optimized website, you simply do not exist to tourists and new locals.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-4">Reservation Friction</h2>
                    <p>
                        Calling a restaurant to book a table is an outdated friction point. Many Millennials and Gen Z diners simply won't do it. A custom website integrates seamlessly with OpenTable, Resy, or custom reservation tools, allowing you to secure bookings at 2:00 AM while you are sleeping.
                    </p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Stop leaving money on the table.</h3>
                        <p className="text-muted-foreground mb-6">I design and develop premium, reservation-driving websites for restaurants across Europe.</p>
                        <a href="/#contact" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                            Get a Restaurant Website Quote
                        </a>
                    </div>
                </div>
            </article>
        </MainLayout>
    );
};

export default WhyRestaurantsNeedWebsites;
