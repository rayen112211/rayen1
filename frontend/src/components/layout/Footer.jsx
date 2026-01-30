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
