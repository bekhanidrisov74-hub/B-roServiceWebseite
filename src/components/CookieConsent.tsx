import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-5xl mx-auto">
                <div className="glass-dark p-6 md:p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6 md:gap-8 animate-slide-up">
                    <div className="p-3 bg-white/10 rounded-2xl shrink-0">
                        <Cookie className="text-accent-400 w-8 h-8" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-white font-bold text-lg mb-2 font-serif">Wir schätzen Ihre Privatsphäre</h3>
                        <p className="text-primary-200 text-sm leading-relaxed font-light">
                            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und Ihnen personalisierte Inhalte bereitzustellen.
                            Durch die Nutzung unserer Website stimmen Sie unserer Verwendung von Cookies zu.
                            <a href="/datenschutz" className="text-accent-400 hover:text-accent-300 hover:underline ml-1 transition-colors">Mehr erfahren</a>
                        </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="px-6 py-2.5 text-primary-300 hover:text-white text-sm font-medium transition-colors"
                        >
                            Ablehnen
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-8 py-3 bg-accent-500 hover:bg-accent-400 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5"
                        >
                            Akzeptieren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
