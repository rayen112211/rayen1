// Blog Infrastructure - Simple Static Page Setup
// This creates a dedicated blog area for SEO content

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BlogPage = () => {
    const { t } = useLanguage();

    const blogPosts = [
        {
            id: 1,
            title: "10 Essential SEO Tips for Web Developers in 2026",
            slug: "seo-tips-web-developers-2026",
            excerpt: "Discover the latest SEO strategies that every web developer needs to know to rank on Google in 2026.",
            date: "2026-02-05",
            category: "SEO",
            readTime: "5 min read",
            image: "/blog/seo-tips-cover.jpg"
        },
        {
            id: 2,
            title: "Building High-Performance React Applications",
            slug: "high-performance-react-apps",
            excerpt: "Learn how to optimize your React applications for maximum speed and Core Web Vitals performance.",
            date: "2026-02-03",
            category: "React",
            readTime: "8 min read",
            image: "/blog/react-performance-cover.jpg"
        },
        {
            id: 3,
            title: "The Complete Guide to Full-Stack Development",
            slug: "complete-fullstack-guide",
            excerpt: "Everything you need to know about becoming a successful full-stack developer, from frontend to backend.",
            date: "2026-01-28",
            category: "Career",
            readTime: "12 min read",
            image: "/blog/fullstack-guide-cover.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-background py-24">
            <div className="container-padding">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="heading-xl text-white mb-4">Web Development Insights</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Expert guides, tutorials, and industry insights from a professional full-stack developer
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                        >
                            {/* Featured Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <span className="text-white/50 text-sm">Featured Image</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-muted-foreground">{post.readTime}</span>
                                </div>

                                <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-sm text-muted-foreground">{post.date}</span>
                                    <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Read more →
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Want to Stay Updated?</h3>
                    <p className="text-muted-foreground mb-6">
                        Get notified when I publish new articles on web development, SEO, and tech trends.
                    </p>
                    <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
