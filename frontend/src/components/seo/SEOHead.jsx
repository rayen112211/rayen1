import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEOHead Component
 * Dynamically manages page-specific meta tags, title, and structured data
 * Use this component on individual pages/sections for custom SEO
 */
const SEOHead = ({
    title = "Rayen Lazizi | Expert Full-Stack Web Developer - React, Node.js, Python",
    description = "Professional full-stack web developer specializing in React, Node.js, Python, and AI integration. Custom web applications, SEO optimization, and high-performance solutions for businesses worldwide.",
    keywords = "web developer, full-stack developer, React developer, Node.js developer, Python developer, freelance web developer, custom web development, SEO optimization",
    canonicalUrl = "https://rayenlazizi.tech/",
    ogImage = "https://rayenlazizi.tech/og-image.jpg",
    structuredData = null
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Structured Data (Optional) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
