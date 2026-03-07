import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Main Layout wrapper for all non-landing pages (Services, Locations, Blog)
 * Provides consistent header/footer and top-level padding.
 */
const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
            <Header />
            <main role="main" aria-label="Main content" className="flex-1 pt-24">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
