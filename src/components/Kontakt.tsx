import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Send } from 'lucide-react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    unternehmen: '',
    paket: '',
    nachricht: '',
    datenschutz: false
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const paketOptions = [
    { value: 'basic', label: 'Basic (79€/Monat)' },
    { value: 'standard', label: 'Standard (129€/Monat)' },
    { value: 'plus', label: 'Plus (199€/Monat)' },
    { value: 'individuell', label: 'Individuelle Lösung' }
  ];

  const faqs = [
    {
      question: 'Wie schnell kann ich meinen Service nutzen?',
      answer: 'Der Service kann innerhalb von 24-48 Stunden nach Vertragsabschluss genutzt werden. Alle notwendigen Dokumente und Zugänge werden Ihnen umgehend zur Verfügung gestellt.'
    },
    {
      question: 'Welche Post wird angenommen?',
      answer: 'Wir nehmen alle geschäftliche Post an: Briefe, Pakete, Einschreiben, Mahnungen, behördliche Schreiben und Steuerunterlagen. Persönliche Post nehmen wir nicht entgegen.'
    },
    {
      question: 'Wie werden meine Dokumente sicher verwahrt?',
      answer: 'Alle Dokumente werden in einem sicheren, klimatisierten Archiv gelagert. Der Zugang ist nur für autorisierte Mitarbeiter möglich. Ihre Daten werden vertraulich behandelt und DSGVO-konform verwaltet.'
    },
    {
      question: 'Kann ich meine Post weitergeleitet bekommen?',
      answer: 'Ja, alle Pakete beinhalten die Möglichkeit der Weiterleitung. Bei Standard und Plus erhalten Sie eine unbegrenzte Weiterleitung, bei Basic einmal pro Monat kostenlos.'
    },
    {
      question: 'Wie funktioniert die Steuerberater-Betreuung?',
      answer: 'Wir bereiten alle erforderlichen Dokumente gemäß den Anforderungen Ihres Steuerberaters vor. Diese werden termingerecht und vollständig bereitgestellt, oft direkt an Ihren Steuerberater übermittelt.'
    },
    {
      question: 'Wie kündige ich meinen Vertrag?',
      answer: 'Der Vertrag hat eine Mindestlaufzeit von 3 Monaten. Anschließend kann mit einer Kündigungsfrist von 1 Monat zum Monatsende gekündigt werden. Die Kündigung muss schriftlich erfolgen.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim()) newErrors.email = 'E-Mail ist erforderlich';
    if (!formData.telefon.trim()) newErrors.telefon = 'Telefon ist erforderlich';
    if (!formData.unternehmen.trim()) newErrors.unternehmen = 'Unternehmen ist erforderlich';
    if (!formData.paket) newErrors.paket = 'Bitte wählen Sie ein Paket';
    if (!formData.datenschutz) newErrors.datenschutz = 'Sie müssen der Datenschutzerklärung zustimmen';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        // Web3Forms API endpoint
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: 'f630f9d8-eb8e-4e26-ab90-1a8ece54af84',
            subject: `Neue Anfrage von ${formData.name} - ${formData.unternehmen}`,
            from_name: formData.name,
            email: formData.email,
            to_email: 'office@bmsolution.at',
            message: `
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.telefon}
Unternehmen: ${formData.unternehmen}
Gewünschtes Paket: ${formData.paket}

Nachricht:
${formData.nachricht || 'Keine zusätzliche Nachricht'}
            `.trim()
          })
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            telefon: '',
            unternehmen: '',
            paket: '',
            nachricht: '',
            datenschutz: false
          });

          // Erfolgsmeldung nach 5 Sekunden ausblenden
          setTimeout(() => setSubmitStatus('idle'), 5000);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Fehler beim Senden:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-background-page relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl -z-10 translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-xs font-bold tracking-widest uppercase">
            Kontakt aufnehmen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-950 mb-6 font-serif">
            Wir sind für <span className="text-gradient-gold">Sie da</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch?
            Unser Team freut sich auf Ihre Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Kontaktformular */}
          <div className="glass p-8 md:p-10 rounded-3xl shadow-xl border border-white/40 relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500"></div>
            <h3 className="text-2xl font-bold text-primary-900 mb-8 font-serif">
              Nachricht senden
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-700 ml-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm transition-all duration-300 outline-none ${errors.name
                      ? 'border-semantic-error focus:ring-2 focus:ring-semantic-error/20'
                      : 'border-neutral-200 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 hover:border-accent-300'
                      }`}
                    placeholder="Max Mustermann"
                  />
                  {errors.name && <p className="text-semantic-error text-xs mt-1 ml-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-700 ml-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm transition-all duration-300 outline-none ${errors.email
                      ? 'border-semantic-error focus:ring-2 focus:ring-semantic-error/20'
                      : 'border-neutral-200 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 hover:border-accent-300'
                      }`}
                    placeholder="max@firma.at"
                  />
                  {errors.email && <p className="text-semantic-error text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="telefon" className="text-sm font-medium text-neutral-700 ml-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm transition-all duration-300 outline-none ${errors.telefon
                      ? 'border-semantic-error focus:ring-2 focus:ring-semantic-error/20'
                      : 'border-neutral-200 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 hover:border-accent-300'
                      }`}
                    placeholder="+43 660 ..."
                  />
                  {errors.telefon && <p className="text-semantic-error text-xs mt-1 ml-1">{errors.telefon}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="unternehmen" className="text-sm font-medium text-neutral-700 ml-1">
                    Unternehmen *
                  </label>
                  <input
                    type="text"
                    id="unternehmen"
                    name="unternehmen"
                    value={formData.unternehmen}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm transition-all duration-300 outline-none ${errors.unternehmen
                      ? 'border-semantic-error focus:ring-2 focus:ring-semantic-error/20'
                      : 'border-neutral-200 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 hover:border-accent-300'
                      }`}
                    placeholder="Firma GmbH"
                  />
                  {errors.unternehmen && <p className="text-semantic-error text-xs mt-1 ml-1">{errors.unternehmen}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="paket" className="text-sm font-medium text-neutral-700 ml-1">
                  Gewünschtes Paket *
                </label>
                <div className="relative">
                  <select
                    id="paket"
                    name="paket"
                    value={formData.paket}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 backdrop-blur-sm appearance-none transition-all duration-300 outline-none cursor-pointer ${errors.paket
                      ? 'border-semantic-error focus:ring-2 focus:ring-semantic-error/20'
                      : 'border-neutral-200 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 hover:border-accent-300'
                      }`}
                  >
                    <option value="">Bitte wählen Sie ein Paket</option>
                    {paketOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-500">
                    <ChevronDown size={16} />
                  </div>
                </div>
                {errors.paket && <p className="text-semantic-error text-xs mt-1 ml-1">{errors.paket}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="nachricht" className="text-sm font-medium text-neutral-700 ml-1">
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-sm focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 transition-all duration-300 outline-none resize-none hover:border-accent-300"
                  placeholder="Wie können wir Ihnen helfen?"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/50 rounded-xl border border-neutral-100">
                <div className="flex h-6 items-center">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    name="datenschutz"
                    checked={formData.datenschutz}
                    onChange={handleInputChange}
                    className="h-5 w-5 text-accent-600 border-neutral-300 rounded focus:ring-accent-500 cursor-pointer transition-all duration-200"
                  />
                </div>
                <label htmlFor="datenschutz" className="text-sm text-neutral-600 cursor-pointer select-none pt-0.5">
                  Ich stimme der <span className="text-primary-600 font-medium hover:underline">Datenschutzerklärung</span> zu. *
                </label>
              </div>
              {errors.datenschutz && <p className="text-semantic-error text-xs -mt-4 ml-1">{errors.datenschutz}</p>}

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-semantic-success/10 border border-semantic-success/30 rounded-xl text-semantic-success text-sm flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Vielen Dank! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns binnen 24 Stunden bei Ihnen.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-semantic-error/10 border border-semantic-error/30 rounded-xl text-semantic-error text-sm flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-primary-900 to-primary-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-900/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Wird gesendet...</span>
                  </>
                ) : (
                  <>
                    <span>Jetzt unverbindlich anfragen</span>
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Kontaktdaten & FAQ */}
          <div className="space-y-8 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            {/* Info Card */}
            <div className="bg-primary-950 p-8 md:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden border border-primary-800 group">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl group-hover:bg-accent-500/30 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10 font-serif">
                Direkter Kontakt
              </h3>

              <div className="space-y-6 relative z-10">
                <a href="mailto:office@bmsolution.at" className="flex items-center space-x-4 group/item p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-accent-500 group-hover/item:text-white transition-all duration-300 text-accent-400 shadow-inner">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-200 font-medium mb-0.5">E-Mail</p>
                    <p className="text-lg font-medium text-white tracking-wide">office@bmsolution.at</p>
                  </div>
                </a>

                <a href="tel:+436606678988" className="flex items-center space-x-4 group/item p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="p-3 bg-white/10 rounded-xl group-hover/item:bg-accent-500 group-hover/item:text-white transition-all duration-300 text-accent-400 shadow-inner">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-200 font-medium mb-0.5">Telefon</p>
                    <p className="text-lg font-medium text-white tracking-wide">0660 6678988</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl border border-transparent">
                  <div className="p-3 bg-white/10 rounded-xl text-accent-400 shadow-inner">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-primary-200 font-medium mb-0.5">Standort</p>
                    <p className="text-lg font-medium text-white tracking-wide">Wien, Österreich</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                <p className="text-sm text-primary-200 leading-relaxed">
                  <strong className="text-white block mb-1">Öffnungszeiten:</strong>
                  Mo - Fr: 09:00 - 17:00 Uhr
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="glass p-8 rounded-3xl shadow-lg border border-white/40">
              <h3 className="text-xl font-bold text-primary-950 mb-6 font-serif">
                Häufige Fragen
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-neutral-100 rounded-xl overflow-hidden bg-white/50">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-white transition-colors duration-300"
                    >
                      <span className="font-medium text-primary-900 text-sm pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp size={18} className="text-accent-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-neutral-400 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-5 bg-white/30 text-sm text-neutral-600 transition-all duration-500 ease-luxury overflow-hidden ${openFaq === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                        }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
