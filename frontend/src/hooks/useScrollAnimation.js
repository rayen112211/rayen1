import { useEffect } from 'react';

const useScrollAnimation = (ref, selector = '.animate-on-scroll', threshold = 0.1) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            },
            { threshold }
        );

        const elements = ref.current?.querySelectorAll(selector);
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [ref, selector, threshold]);
};

export default useScrollAnimation;
