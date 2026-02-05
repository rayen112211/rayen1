import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Persistent language selection
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('preferredLanguage');
        return saved || 'en';
    });

    useEffect(() => {
        localStorage.setItem('preferredLanguage', language);
        // Set document direction for RTL support (Arabic)
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = translations[language];

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
