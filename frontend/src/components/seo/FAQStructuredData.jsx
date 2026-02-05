import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * FAQStructuredData Component
 * Adds FAQ schema markup for rich search results
 */
const FAQStructuredData = () => {
    const { t } = useLanguage();

    // Generate FAQ schema from FAQ items
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": t.faq.items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
        </script>
    );
};

export default FAQStructuredData;
