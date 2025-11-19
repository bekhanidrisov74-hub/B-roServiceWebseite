import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToKontakt = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToLeistungen = () => {
    const element = document.querySelector('#leistungen');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-blob mix-blend-multiply"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-accent-200/50 shadow-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
          <span className="text-sm font-medium text-primary-800 tracking-wide uppercase">
            Wiens Premium Geschäftsadresse
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-950 tracking-tight mb-8 animate-slide-up font-serif leading-tight">
          Ihr Erfolg braucht <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 relative inline-block">
            die richtige Adresse
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-300/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-200 font-light">
          Repräsentative Geschäftsadresse, professionelles Postmanagement und digitale Services im Herzen von Wien.
          <span className="block mt-2 text-primary-700 font-medium">Diskret. Zuverlässig. Exklusiv.</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up animation-delay-400">
          <button
            onClick={scrollToKontakt}
            className="group relative px-8 py-4 bg-primary-900 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:bg-primary-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Jetzt starten
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={scrollToLeistungen}
            className="px-8 py-4 bg-white text-primary-900 border border-neutral-200 rounded-full font-medium text-lg shadow-sm hover:shadow-md hover:border-primary-200 hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-1"
          >
            Leistungen ansehen
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center space-x-8 animate-fade-in animation-delay-600 opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="flex items-center bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/40 shadow-sm">
            <div className="flex -space-x-2 mr-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center text-xs font-bold text-neutral-600">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center text-accent-500 mb-0.5">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
              <p className="text-xs font-medium text-neutral-600">
                Vertraut von <span className="font-bold text-primary-900">500+ Unternehmen</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
