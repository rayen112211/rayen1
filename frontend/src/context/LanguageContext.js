
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Default to English, or check localStorage if you want persistence (optional for now)
    const [language, setLanguage] = useState('en');

    // Helper to get nested translation value, e.g. t('hero.title')
    // But actually, passing the whole object for the current language is often easier.
    // We will expose the whole current dictionary.

    const t = translations[language];

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
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
