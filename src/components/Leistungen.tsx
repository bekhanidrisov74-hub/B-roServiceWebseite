import React from 'react';
import { Building, Inbox, FolderOpen, Calculator, Check, ArrowRight } from 'lucide-react';

const Leistungen = () => {
  const leistungen = [
    {
      icon: Building,
      title: 'Geschäftsadresse Wien',
      intro: 'Ihre professionelle Wiener Firmenadresse für repräsentative Geschäftskommunikation.',
      features: [
        'Zentrale Wiener Lage',
        'Professionelle Briefkastenverwaltung',
        'Postannahme Mo-Fr',
        'Zugang zu Geschäftsräumen auf Anfrage',
        'Diskretion garantiert'
      ]
    },
    {
      icon: Inbox,
      title: 'Postservice & Postannahme',
      intro: 'Zuverlässige Entgegennahme und Bearbeitung Ihrer geschäftlichen Post in Wien.',
      features: [
        'Sofortige Benachrichtigung per E-Mail',
        'Sichere Lagerung bis zur Abholung',
        'Scanning auf Wunsch',
        'Weiterleitung national/international',
        'Abholservice verfügbar'
      ]
    },
    {
      icon: FolderOpen,
      title: 'Dokumentenmanagement',
      intro: 'Professionelle Organisation und Verwaltung Ihrer geschäftlichen Unterlagen.',
      features: [
        'Strukturierte Ablage',
        'Digitalisierung von Dokumenten',
        'Archivierung nach Fristen',
        'Sicherer Datenzugang',
        'Backup und Schutz'
      ]
    },
    {
      icon: Calculator,
      title: 'Steuerberater-Betreuung',
      intro: 'Vorbereitung aller erforderlichen Unterlagen für Ihren Steuerberater.',
      features: [
        'Vollständige Dokumentensammlung',
        'Termingerechte Bereitstellung',
        'Compliance mit Steuerrecht',
        'Direkte Übermittlung',
        'Nachverfolgung garantiert'
      ]
    }
  ];

  const scrollToPreise = () => {
    const element = document.querySelector('#preise');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="leistungen" className="py-20 md:py-32 bg-background-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-bold tracking-widest uppercase">
            Unser Angebot
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6 font-serif">
            Unsere Leistungen <span className="text-neutral-400 font-light italic">im Detail</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            Umfassende Services für Ihre geschäftlichen Anforderungen in Wien – von der Postannahme bis zur Steuerberater-ready Dokumentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leistungen.map((leistung, index) => (
            <div
              key={index}
              className="glass glass-hover p-10 rounded-3xl group relative overflow-hidden reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -translate-y-32 translate-x-32 group-hover:bg-accent-100/40 transition-all duration-700"></div>

              <div className="flex items-start space-x-8 relative z-10">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-2xl bg-white border border-neutral-100 text-primary-600 group-hover:bg-primary-900 group-hover:text-accent-400 group-hover:border-primary-800 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    <leistung.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-primary-950 mb-3 group-hover:text-primary-700 transition-colors font-serif">
                    {leistung.title}
                  </h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed text-lg font-light">
                    {leistung.intro}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {leistung.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mr-3 mt-1 border border-accent-100 group-hover/item:bg-accent-500 group-hover/item:text-white group-hover/item:border-accent-500 transition-all duration-300">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span className="text-neutral-700 group-hover/item:text-primary-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToPreise}
                    className="text-primary-800 hover:text-accent-600 font-medium transition-colors duration-300 flex items-center group/btn text-sm tracking-wide uppercase border-b border-transparent hover:border-accent-600 pb-0.5"
                  >
                    Details ansehen
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leistungen;
