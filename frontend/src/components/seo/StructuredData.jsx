import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * StructuredData Component
 * Adds JSON-LD structured data for better SEO and rich search results
 */
const StructuredData = () => {
    // Person Schema - Establishes you as a professional
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rayen Lazizi",
        "url": "https://rayenlazizi.tech",
        "image": "https://rayenlazizi.tech/profile.jpg",
        "jobTitle": "Full-Stack Web Developer",
        "description": "Professional full-stack web developer specializing in React, Node.js, Python, and AI integration",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "sameAs": [
            // User requested to keep only Whatsapp/Email for now
        ],
        "knowsAbout": [
            "React",
            "Node.js",
            "Python",
            "Full-Stack Development",
            "AI Integration",
            "Web Application Development",
            "SEO Optimization",
            "Performance Optimization"
        ],
        "knowsLanguage": ["English", "French", "Arabic", "Italian"],
        "email": "rayenazizi112211@gmail.com",
        "telephone": "+48662250830"
    };

    // ProfessionalService Schema - Defines your services
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Rayen Lazizi Web Development Services",
        "description": "Professional full-stack web development services including custom web applications, SEO optimization, and performance enhancements",
        "provider": {
            "@type": "Person",
            "name": "Rayen Lazizi"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
        },
        "serviceType": [
            "Web Development",
            "Full-Stack Development",
            "React Development",
            "Node.js Backend Development",
            "Python Development",
            "SEO Optimization",
            "Web Performance Optimization",
            "Custom Web Applications"
        ],
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock"
        }
    };

    // WebSite Schema with SearchAction
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rayen Lazizi Portfolio",
        "alternateName": "Rayen Lazizi Web Developer",
        "url": "https://rayenlazizi.tech",
        "description": "Professional portfolio of Rayen Lazizi, full-stack web developer",
        "publisher": {
            "@type": "Person",
            "name": "Rayen Lazizi"
        }
    };

    // BreadcrumbList Schema - Helps with site navigation
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://rayenlazizi.tech/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://rayenlazizi.tech/#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Portfolio",
                "item": "https://rayenlazizi.tech/#work"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Contact",
                "item": "https://rayenlazizi.tech/#contact"
            }
        ]
    };

    return (
        <>
            {/* Person Schema */}
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>

            {/* Service Schema */}
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>

            {/* Website Schema */}
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>

            {/* Breadcrumb Schema */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </>
    );
};

export default StructuredData;
