import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { useLanguage } from '../../context/LanguageContext';
import OptimizedImage from '../ui/OptimizedImage';

const ProjectCard = ({ project, index }) => {
    return (
        <div
            className="animate-on-scroll opacity-0 group"
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <div className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)]">

                {/* Browser Frame Mockup */}
                <div className="relative">
                    <div className="bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-white/5 rounded-md px-3 py-1 text-[11px] text-gray-400 text-center truncate">
                                {project.link.replace('https://', '')}
                            </div>
                        </div>
                    </div>

                    {/* Screenshot */}
                    <div className="aspect-video overflow-hidden bg-black">
                        <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-tight">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        {project.tech.map((t, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/10"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Visit Link */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors pt-2 group/link"
                    >
                        {project.visitLabel}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    useScrollAnimation(sectionRef);
    const { t } = useLanguage();

    return (
        <section id="work" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-padding relative z-10">
                {/* Section Header */}
                <div className="animate-on-scroll opacity-0 text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <span className="text-primary text-sm font-bold tracking-widest uppercase">
                        {t.projects.label}
                    </span>
                    <h2 className="heading-lg text-white">
                        {t.projects.title}{' '}
                        <span className="text-gradient">{t.projects.titleGradient}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t.projects.description}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.projects.items.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
