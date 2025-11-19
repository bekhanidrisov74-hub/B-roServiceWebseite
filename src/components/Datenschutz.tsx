import React from 'react';

const Datenschutz = () => {
  return (
    <div className="pt-32 pb-20 bg-background-page min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-on-scroll">
        <div className="glass p-10 md:p-14 rounded-3xl shadow-xl border border-white/40">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-950 mb-10 font-serif border-b border-accent-200 pb-6">Datenschutzerklärung</h1>

          <div className="space-y-10 text-neutral-600 font-light leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Einleitung und Überblick</h2>
              <p className="mb-4">
                Wir haben diese Datenschutzerklärung (Fassung 2025) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
                <br /><br />
                <strong className="text-primary-900 font-medium">Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Verantwortlicher</h2>
              <p className="mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br /><br />
                <strong className="text-primary-900 font-medium">BM Solution</strong><br />
                [Straße Hausnummer]<br />
                [PLZ] Wien, Österreich<br />
                E-Mail: <a href="mailto:office@bmsolution.at" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">office@bmsolution.at</a><br />
                Telefon: <a href="tel:+436606678988" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">+43 660 6678988</a><br />
                Impressum: <a href="/impressum" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">Link zum Impressum</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Rechte laut Datenschutz-Grundverordnung</h2>
              <p className="mb-4">
                Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen Datenschutzgesetzes (DSG) grundsätzlich die folgende Rechte zu:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-accent-500">
                <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
              </ul>
              <p>
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde, deren Webseite Sie unter <a href="https://www.dsb.gv.at/" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 transition-colors font-medium">https://www.dsb.gv.at/</a> finden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Datensicherheit</h2>
              <p className="mb-4">
                Wir haben technische und organisatorische Sicherheitsmaßnahmen getroffen, um Ihre personenbezogenen Daten gegen unbeabsichtigte oder unrechtmäßige Löschung, Veränderung oder gegen Verlust und gegen unberechtigte Weitergabe oder unberechtigten Zugriff zu schützen.
              </p>
              <h3 className="text-xl font-bold text-primary-800 mb-2 font-serif">TLS-Verschlüsselung mit https</h3>
              <p>
                Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Kommunikation</h2>
              <p className="mb-4">
                Wenn Sie mit uns Kontakt aufnehmen und per Telefon oder E-Mail kommunizieren, werden die von Ihnen angegebenen Daten (Name, Kontaktdaten, Inhalt der Anfrage) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Cookies</h2>
              <p className="mb-4">
                Unsere Website verwendet sogenannte „Cookies“. Das sind kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                <br /><br />
                Wenn Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-900 mb-4 font-serif">Webhosting</h2>
              <p className="mb-4">
                Unsere Website wird von einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                <br /><br />
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
