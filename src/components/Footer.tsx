import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-950 text-white border-t border-primary-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-900 via-accent-500 to-primary-900"></div>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary-900/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 reveal-on-scroll">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 font-serif tracking-wide flex items-center">
              BM <span className="text-accent-500 ml-1">Solution</span>
            </h3>
            <p className="text-primary-200 mb-8 leading-relaxed font-light text-lg max-w-sm">
              Ihr zuverlässiger Partner für Geschäftsadressen & Backoffice-Services in Wien.
              Professionell, diskret und effizient.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:office@bmsolution.at"
                className="flex items-center space-x-4 text-primary-200 hover:text-accent-400 transition-colors group"
              >
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-accent-500/20 transition-colors border border-white/5 group-hover:border-accent-500/30">
                  <Mail size={18} />
                </div>
                <span className="tracking-wide">office@bmsolution.at</span>
              </a>
              <a
                href="tel:+436606678988"
                className="flex items-center space-x-4 text-primary-200 hover:text-accent-400 transition-colors group"
              >
                <div className="p-2.5 bg-white/5 rounded-xl group-hover:bg-accent-500/20 transition-colors border border-white/5 group-hover:border-accent-500/30">
                  <Phone size={18} />
                </div>
                <span className="tracking-wide">0660 6678988</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-8 font-serif border-b border-primary-800 pb-2 inline-block">
              Navigation
            </h3>
            <nav className="space-y-4">
              {[
                { id: '#vorteile', label: 'Vorteile' },
                { id: '#leistungen', label: 'Leistungen' },
                { id: '#preise', label: 'Preise' },
                { id: '#ueber-uns', label: 'Über uns' },
                { id: '#kontakt', label: 'Kontakt' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-200 hover:text-accent-400 hover:translate-x-1 transition-all duration-300 font-light"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-8 font-serif border-b border-primary-800 pb-2 inline-block">
              Rechtliches
            </h3>
            <nav className="space-y-4 flex flex-col">
              <Link
                to="/impressum"
                className="text-primary-200 hover:text-accent-400 hover:translate-x-1 transition-all duration-300 font-light"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-primary-200 hover:text-accent-400 hover:translate-x-1 transition-all duration-300 font-light"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-900/50 mt-16 pt-8 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-primary-400 font-light">
              © {currentYear} BM Solution – Wien. Alle Rechte vorbehalten.
            </p>

            <div className="flex items-center gap-6">
              <p className="text-sm text-primary-400 font-light flex items-center">
                Made in Vienna
              </p>
              <button
                onClick={scrollToTop}
                className="p-3 bg-primary-900/50 hover:bg-accent-500 text-primary-300 hover:text-white rounded-full transition-all duration-300 border border-primary-800 hover:border-accent-400 group"
                aria-label="Nach oben scrollen"
              >
                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
