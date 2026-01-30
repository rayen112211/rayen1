import React, { useRef } from 'react';
import { developerInfo } from '../../data/mock';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useToast } from '../../hooks/use-toast';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleEmailClick = (e) => {
    // We allow the default mailto: behavior, but also copy to clipboard
    // just in case the user doesn't have a mail client configured.
    navigator.clipboard.writeText(developerInfo.email);
    toast({
      title: "Email Copied!",
      description: "Address copied to clipboard in case mail app doesn't open.",
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

      <div className="container-padding relative z-10 text-center">

        <div className="animate-on-scroll opacity-0 inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wide mb-8 animate-pulse-subtle">
          <span className="w-2 h-2 rounded-full bg-primary mr-2" />
          {t.contact.label}
        </div>

        <h2 className="animate-on-scroll opacity-0 heading-xl text-white mb-6" style={{ transitionDelay: '0.1s' }}>
          {t.contact.title} <br />
          <span className="text-gradient">{t.contact.titleGradient}</span>
        </h2>

        <p className="animate-on-scroll opacity-0 text-muted-foreground text-xl max-w-2xl mx-auto mb-12" style={{ transitionDelay: '0.2s' }}>
          {t.contact.description}
        </p>

        <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6" style={{ transitionDelay: '0.3s' }}>
          <a
            href={`mailto:${developerInfo.email}`}
            onClick={handleEmailClick}
            className="group relative px-8 py-5 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 min-w-[200px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              {t.contact.emailBtn}
            </span>
          </a>

          <a
            href={`https://wa.me/${developerInfo.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-5 rounded-xl border border-white/10 bg-background hover:bg-white/5 font-bold text-white transition-all duration-300 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-3">
              <MessageSquare className="w-5 h-5 text-green-500" />
              {t.contact.whatsappBtn}
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        <div className="animate-on-scroll opacity-0 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground" style={{ transitionDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span>{t.contact.responseTime}</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div>
            {t.contact.location}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
