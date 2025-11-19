import React from 'react';
import { MapPin, Mail, FileText, CheckCircle, Shield, Clock } from 'lucide-react';

const Vorteile = () => {
  const vorteile = [
    {
      icon: MapPin,
      title: 'Premium-Geschäftsadresse',
      description: 'Professionelle Wiener Adresse für Ihr repräsentatives Unternehmensprofil und einen glaubwürdigen Geschäftsauftritt.'
    },
    {
      icon: Mail,
      title: 'Professionelle Postannahme',
      description: 'Zuverlässige Entgegennahme und sichere Verwahrung Ihrer geschäftlichen Post – immer zeitnah und ordnungsgemäß.'
    },
    {
      icon: FileText,
      title: 'Dokumentenorganisation',
      description: 'Strukturierte Ablage und Vorbereitung Ihrer Unterlagen für effiziente Nachverfolgung und einfachen Zugriff.'
    },
    {
      icon: CheckCircle,
      title: 'Steuerberater-ready',
      description: 'Alle Dokumente werden nach steuerrechtlichen Anforderungen vorbereitet und termingerecht bereitgestellt.'
    },
    {
      icon: Shield,
      title: 'Diskretion & Verlässlichkeit',
      description: '100% Vertraulichkeit Ihrer Geschäftsunterlagen mit garantierter Zuverlässigkeit und vertrauensvoller Behandlung.'
    },
    {
      icon: Clock,
      title: 'Schnelle Reaktionszeiten',
      description: 'Umgehende Bearbeitung und Rückmeldung zu allen Angelegenheiten – für maximalen Service und Ihre Sicherheit.'
    }
  ];

  return (
    <section id="vorteile" className="py-20 md:py-32 bg-background-page relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold tracking-widest uppercase">
            Ihre Vorteile
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6 font-serif tracking-tight">
            Warum unser Backoffice & <br />
            <span className="text-gradient-gold">Geschäftsadresse in Wien?</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed">
            Entdecken Sie die Vorteile, die unseren Service zur ersten Wahl für EPU, KMU und Onlinehändler machen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vorteile.map((vorteil, index) => (
            <div
              key={index}
              className="glass glass-hover p-10 rounded-3xl group relative overflow-hidden reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/5 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:bg-accent-500/10 transition-all duration-700"></div>

              <div className="mb-8 inline-flex p-4 rounded-2xl bg-primary-50 text-primary-700 group-hover:bg-primary-900 group-hover:text-accent-400 group-hover:shadow-lg transition-all duration-500 relative z-10">
                <vorteil.icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold text-primary-950 mb-4 group-hover:text-primary-700 transition-colors relative z-10 font-serif">
                {vorteil.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed relative z-10 text-lg font-light">
                {vorteil.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vorteile;
