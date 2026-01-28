import React, { useState } from 'react';
import { faq } from '../../data/mock';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/5 last:border-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-secondary-foreground group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-muted-foreground leading-relaxed pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-card relative">
            <div className="container-padding">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left: Header */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                            <HelpCircle size={24} />
                        </div>
                        <h2 className="heading-md text-white">
                            Common Questions
                        </h2>
                        <p className="text-muted-foreground">
                            Transparency is key to a good partnership. Here are honest answers to the questions I get asked most often.
                        </p>
                        <a href="#contact" className="inline-block text-primary font-medium hover:underline">
                            Have another question?
                        </a>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:col-span-8">
                        <div className="bg-background/50 rounded-2xl p-2 md:p-8">
                            {faq.map((item, index) => (
                                <FAQItem
                                    key={index}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
