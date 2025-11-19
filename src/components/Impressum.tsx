import React from 'react';

const Impressum = () => {
    return (
        <div className="pt-32 pb-20 bg-background-page min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-on-scroll">
                <div className="glass p-10 md:p-14 rounded-3xl shadow-xl border border-white/40">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-10 font-serif border-b border-accent-200 pb-6">Impressum</h1>

                    <div className="space-y-10 text-neutral-600 font-light leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Informationspflicht</h2>
                            <p className="text-sm text-neutral-500 mb-4 italic">
                                Laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
                            </p>
                            <p className="mb-2">
                                <strong className="text-primary-900 font-medium">BM Solution</strong><br />
                                Inhaber: [Vorname Nachname des Inhabers]<br />
                                [Straße Hausnummer]<br />
                                [PLZ] Wien<br />
                                Österreich
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Kontaktdaten</h2>
                            <p className="mb-2">
                                <strong className="text-primary-900 font-medium">Telefon:</strong> <a href="tel:+436606678988" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">+43 660 6678988</a><br />
                                <strong className="text-primary-900 font-medium">E-Mail:</strong> <a href="mailto:office@bmsolution.at" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">office@bmsolution.at</a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Unternehmensdaten</h2>
                            <p className="mb-2">
                                <strong className="text-primary-900 font-medium">UID-Nummer:</strong> [ATU Nummer hier einfügen]<br />
                                <strong className="text-primary-900 font-medium">Firmenbuchnummer:</strong> [FN Nummer hier einfügen, falls vorhanden]<br />
                                <strong className="text-primary-900 font-medium">Firmenbuchgericht:</strong> [Zuständiges Gericht, z.B. Handelsgericht Wien]<br />
                                <strong className="text-primary-900 font-medium">Firmensitz:</strong> Wien
                            </p>
                            <p className="mb-2">
                                <strong className="text-primary-900 font-medium">Mitglied der WKÖ, WK Wien</strong><br />
                                <strong className="text-primary-900 font-medium">Berufsrecht:</strong> Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 transition-colors">www.ris.bka.gv.at</a>
                            </p>
                            <p>
                                <strong className="text-primary-900 font-medium">Aufsichtsbehörde/Gewerbebehörde:</strong> Magistrat der Stadt Wien<br />
                                <strong className="text-primary-900 font-medium">Berufszweig:</strong> [Genaue Bezeichnung des Gewerbes, z.B. Büroservice]
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">EU-Streitschlichtung</h2>
                            <p>
                                Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:
                                <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 transition-colors ml-1">
                                    https://ec.europa.eu/consumers/odr
                                </a>.
                                Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Haftung für Inhalte dieser Webseite</h2>
                            <p>
                                Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns, korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie, uns umgehend zu kontaktieren.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Haftung für Links auf dieser Webseite</h2>
                            <p>
                                Unsere Webseite enthält Links zu anderen Webseiten, für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut § 17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Urheberrechtshinweis</h2>
                            <p>
                                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
