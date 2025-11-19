import React from 'react';
import { Check } from 'lucide-react';

const Preise = () => {
  const pakete = [
    {
      name: 'Basic',
      preis: '79',
      features: [
        'Geschäftsadresse Wien',
        'Postannahme (Mon-Fri)',
        'Benachrichtigung per E-Mail',
        '3 Scans pro Monat',
        'Aufbewahrung 30 Tage'
      ]
    },
    {
      name: 'Premium',
      preis: '129',
      badge: 'Am beliebtesten',
      features: [
        'Alles aus Basic',
        'Unbegrenzte Scans',
        'Weiterleitung (1x/Monat)',
        'Dokumentendigitalisierung',
        'Direkter Steuerberater-Service',
        'Telefonische Beratung'
      ]
    },
    {
      name: 'Professional',
      preis: '199',
      features: [
        'Alles aus Standard',
        'Büro-Zugang (2h/Monat)',
        'Sofortige Weiterleitung',
        'Wöchentlicher Report',
        'Prioritäts-Support',
        'Individuelle Lösungen'
      ]
    }
  ];

  const scrollToKontakt = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="preise" className="py-20 md:py-32 bg-background-page relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold tracking-widest uppercase">
            Transparente Preise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6 font-serif">
            Investieren Sie in <span className="text-gradient-gold">Professionalität</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            Wählen Sie das passende Paket für Ihr Unternehmen. Keine versteckten Kosten, volle Transparenz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pakete.map((paket, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-500 reveal-on-scroll ${paket.badge
                ? 'glass border-2 border-accent-300/50 shadow-glow scale-105 z-10'
                : 'glass border border-white/40 hover:border-primary-200 hover:shadow-card-hover mt-0 md:mt-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              {paket.badge && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-600 to-accent-400 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-wide uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    {paket.badge}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary-950 mb-2 font-serif">
                  {paket.name}
                </h3>
                <p className="text-neutral-500 text-sm mb-6">Monatliche Abrechnung</p>

                <div className="mb-8 relative inline-block">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl text-neutral-400 mr-1 font-light">€</span>
                    <span className={`text-6xl font-bold tracking-tight ${paket.badge ? 'text-accent-600' : 'text-primary-900'}`}>{paket.preis}</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-2 font-medium uppercase tracking-wider">zzgl. 20% MwSt.</div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8"></div>

                <ul className="space-y-5 mb-10 text-left">
                  {paket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${paket.badge ? 'bg-accent-100 text-accent-600' : 'bg-primary-50 text-primary-600'
                        }`}>
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="text-neutral-700 font-light group-hover/item:text-primary-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToKontakt}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${paket.badge
                    ? 'bg-gradient-to-r from-primary-900 to-primary-800 text-white shadow-lg hover:shadow-primary-900/30'
                    : 'bg-white border-2 border-neutral-100 text-primary-900 hover:border-primary-200 hover:shadow-md'
                    }`}
                >
                  Jetzt {paket.name} wählen
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal-on-scroll">
          <p className="text-neutral-500 text-sm bg-white/50 inline-block px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
            * Mindestvertragslaufzeit: 3 Monate. Kündigungsfrist: 1 Monat zum Monatsende.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Preise;
