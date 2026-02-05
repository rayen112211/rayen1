import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Check } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    // Using SVG Flags from flagcdn.com for better Windows support
    const languages = [
        { code: 'en', label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
        { code: 'it', label: 'Italiano', flagUrl: 'https://flagcdn.com/w40/it.png' },
        { code: 'fr', label: 'Français', flagUrl: 'https://flagcdn.com/w40/fr.png' },
        { code: 'pl', label: 'Polski', flagUrl: 'https://flagcdn.com/w40/pl.png' },
    ];

    // Close click outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
            >
                <img
                    src={currentLang.flagUrl}
                    alt={currentLang.label}
                    className="w-5 h-3.5 object-cover rounded-sm"
                />
                <span className="text-sm font-medium uppercase font-mono">{currentLang.code}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-white/10 transition-colors ${language === lang.code ? 'text-primary' : 'text-white/70 hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={lang.flagUrl}
                                        alt={lang.label}
                                        className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                    />
                                    <span className={lang.code === 'ar' ? 'font-arabic' : ''}>{lang.label}</span>
                                </div>
                                {language === lang.code && <Check size={16} className="text-primary" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
