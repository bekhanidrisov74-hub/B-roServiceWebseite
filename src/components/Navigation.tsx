import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#vorteile', label: 'Vorteile' },
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#preise', label: 'Preise' },
    { href: '#ueber-uns', label: 'Über uns' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
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

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMobileMenuOpen
          ? 'bg-background-page py-3 shadow-none'
          : isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20 py-3'
            : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group relative z-50" onClick={handleLogoClick}>
            <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-primary-950' : 'text-primary-950'
              }`}>
              BM <span className="text-accent-500">Solution</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${isScrolled
                  ? 'text-primary-800 hover:text-accent-600'
                  : 'text-primary-900 hover:text-accent-600'
                  }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('#kontakt')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${isScrolled
                ? 'bg-primary-900 text-white hover:bg-primary-800 shadow-md'
                : 'bg-white/90 backdrop-blur-sm text-primary-900 hover:bg-white shadow-sm border border-white/50'
                }`}
            >
              Kontakt aufnehmen
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-900 hover:text-accent-600 transition-colors"
              aria-label="Menü öffnen"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-background-page/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col justify-center items-center space-y-8 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        style={{ top: '0', paddingTop: '80px' }}
      >
        <div className="flex flex-col items-center space-y-6 w-full px-6">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-3xl font-serif font-medium text-primary-900 hover:text-accent-500 transition-all duration-300 transform hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </button>
          ))}

          <div className="w-16 h-0.5 bg-neutral-200 my-6"></div>

          <button
            onClick={() => scrollToSection('#kontakt')}
            className="w-full max-w-xs px-8 py-4 bg-primary-900 text-white rounded-2xl text-lg font-bold hover:bg-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <span>Kontakt aufnehmen</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
