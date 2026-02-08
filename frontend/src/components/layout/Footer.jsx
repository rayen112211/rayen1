import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { developerInfo } from '../../data/mock';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.header.about, href: '#about' },
    { label: t.header.services, href: '#services' },
    { label: t.header.work, href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-16 px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a href="#hero" className="inline-block mb-6 group">
              <span className="text-primary font-heading font-bold text-2xl tracking-tight">
                RL<span className="text-white">.</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${developerInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <Mail size={18} className="text-primary" />
                <span>{developerInfo.email}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href={`https://wa.me/${developerInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors group"
              >
                <Phone size={18} className="text-primary" />
                <span>{developerInfo.whatsapp}</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin size={18} className="text-primary" />
                <span>{t.contact.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
              <a
                href={developerInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={developerInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6">{t.footer.explore}</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium group flex items-center gap-2"
                >
                  <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA Column */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">{t.footer.startScaling}</h4>
            <p className="text-muted-foreground mb-6">
              {t.footer.ctaDescription}
            </p>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t.footer.ctaButton}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {developerInfo.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.designed}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
