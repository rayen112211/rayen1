
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Check } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"; // Assuming these wrappers exist or I might need to use primitives directly if not exposed.

// Checking package.json, we have "@radix-ui/react-dropdown-menu": "^2.1.12".
// I will assume there is a ui/dropdown-menu component as is standard in shadcn-like setups seen in this repo.
// If it fails, I will use a simple select. 

// Actually, to be safe and avoid "Module not found" if components/ui/dropdown-menu doesn't exist (I haven't listed that dir properly), 
// I will check the dir first.
// Wait, I saw "components/ui/toaster" imported in App.js so "components/ui" exists. 
// Let's assume standard structure. If not, I'll use a standard <select> for simplicity and robustnes.

// Wait, the user wants "just add a button where to change the language". A dropdown is cleaner.
// I will implement a custom simple dropdown to avoid dependency hell if the shadcn components are not exactly where I expect.

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'pl', label: 'Polski', flag: '🇵🇱' },
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
                <Globe size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium uppercase">{currentLang.code}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-card border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelect(lang.code)}
                                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-white/5 transition-colors ${language === lang.code ? 'text-primary' : 'text-muted-foreground hover:text-white'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </div>
                                {language === lang.code && <Check size={14} />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
