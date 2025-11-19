import React from 'react';
import { CheckCircle, Lock, Users } from 'lucide-react';

const UeberUns = () => {
  const werte = [
    {
      icon: CheckCircle,
      title: 'Klare Prozesse',
      description: 'Strukturierte Arbeitsabläufe sorgen für maximale Effizienz und Zuverlässigkeit in allen Belangen.'
    },
    {
      icon: Lock,
      title: 'Vertraulichkeit',
      description: 'Ihre Geschäftsunterlagen werden mit höchster Diskretion behandelt – das Vertrauen unserer Kunden ist unser wertvollstes Gut.'
    },
    {
      icon: Users,
      title: 'Hands-on Support',
      description: 'Persönliche Betreuung und direkter Ansprechpartner für all Ihre Fragen und Anliegen.'
    }
  ];

  return (
    <section id="ueber-uns" className="py-20 md:py-32 bg-background-page overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="reveal-on-scroll">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold tracking-widest uppercase">
              Über BM Solution
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-8 leading-tight font-serif">
              Ihr Partner für <br /> professionelle <span className="text-gradient-gold">Exzellenz</span>
            </h2>

            <div className="prose prose-lg text-neutral-600 mb-12 leading-relaxed font-light">
              <p className="mb-6">
                Als erfahrener Anbieter von Geschäftsadressen und Backoffice-Services in Wien unterstützen wir
                seit Jahren EPU, KMU und Onlinehändler bei der professionellen Organisation ihrer geschäftlichen
                Abläufe.
              </p>
              <p>
                Unser Ziel ist es, Ihnen den Rücken frei zu halten, damit Sie sich voll und ganz auf Ihr
                Kerngeschäft konzentrieren können. Wir verstehen uns nicht nur als Dienstleister, sondern als
                strategischer Partner für Ihren Erfolg.
              </p>
            </div>

            {/* Wie wir arbeiten */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center font-serif">
                <span className="w-12 h-px bg-accent-500 mr-4"></span>
                Unsere Prinzipien
              </h3>

              {werte.map((wert, index) => (
                <div key={index} className="flex items-start space-x-6 group p-6 rounded-2xl hover:bg-white hover:shadow-card transition-all duration-500 border border-transparent hover:border-neutral-100">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 rounded-xl bg-primary-50 text-primary-700 group-hover:bg-primary-900 group-hover:text-accent-400 transition-all duration-500 shadow-sm">
                      <wert.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-950 mb-2 font-serif group-hover:text-primary-700 transition-colors">
                      {wert.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed font-light">
                      {wert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-full flex items-center justify-center reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-full max-w-lg">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="relative bg-white p-4 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-1000 ease-luxury border border-white/60">
                <div className="absolute inset-0 border border-neutral-100 rounded-3xl m-4 pointer-events-none z-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Modernes Büro Wien"
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/5] filter contrast-[1.02] saturate-[0.95]"
                />

                {/* Floating Card */}
                <div className="absolute bottom-10 -left-10 glass p-6 rounded-2xl border border-white/60 shadow-lg max-w-xs animate-float">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-neutral-100 border-2 border-white flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full bg-primary-200/50"></div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary-900 font-serif">
                        Exzellenter Service
                      </p>
                      <p className="text-xs text-neutral-500">
                        Persönlich & Kompetent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UeberUns;
