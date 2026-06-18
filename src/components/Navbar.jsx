import React, { useState, useEffect } from 'react';

export default function Navbar({ onContactClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(13, 13, 13, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        padding: isScrolled ? '14px 0' : '22px 0'
      }}
    >
      <div 
        className="container" 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* LOGO - Primary Horizontal Lockup baseada no PDF */}
        <a 
          href="#inicio" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            userSelect: 'none'
          }}
        >
          {/* Monograma AL de Apoio */}
          <div 
            style={{
              backgroundColor: '#FF5500',
              color: '#FFFFFF',
              fontFamily: 'var(--font-headline)',
              fontWeight: 900,
              fontSize: '15px',
              padding: '6px 8px',
              borderRadius: '4px',
              letterSpacing: '0.05em',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            AL
          </div>
          {/* Logo Estendido */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span 
              style={{
                fontFamily: 'var(--font-headline)',
                fontWeight: 900,
                fontSize: '18px',
                color: '#FF5500',
                letterSpacing: '-0.02em'
              }}
            >
              A.L.
            </span>
            <span 
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '10px',
                color: '#FFFFFF',
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              Design & Marketing
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <div 
          className="nav-links-desktop"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
        >
          {['inicio', 'sobre', 'servicos', 'portfolio'].map((section) => (
            <a 
              key={section} 
              href={`#${section}`}
              style={{
                fontFamily: 'var(--font-headline)',
                fontWeight: 500,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
              onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
            >
              {section === 'inicio' ? 'Início' : section === 'sobre' ? 'Sobre' : section === 'servicos' ? 'Serviços' : 'Portfólio'}
            </a>
          ))}
          <button 
            onClick={onContactClick}
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '12px'
            }}
          >
            Falar Conosco
          </button>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button 
          onClick={toggleMobileMenu}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 60,
            padding: '4px'
          }}
          aria-label="Menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: '0.3s', opacity: isMobileMenuOpen ? 0 : 1 }}></span>
            <span style={{ width: '22px', height: '2px', backgroundColor: '#FFFFFF', transition: '0.3s', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </div>
        </button>
      </div>

      {/* Menu Mobile */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(13, 13, 13, 0.98)',
          zIndex: 45,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        {['inicio', 'sobre', 'servicos', 'portfolio'].map((section) => (
          <a 
            key={section} 
            href={`#${section}`}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '22px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#FFFFFF'
            }}
          >
            {section === 'inicio' ? 'Início' : section === 'sobre' ? 'Sobre' : section === 'servicos' ? 'Serviços' : 'Portfólio'}
          </a>
        ))}
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            onContactClick();
          }}
          className="btn-primary"
          style={{
            padding: '14px 32px',
            fontSize: '14px',
            marginTop: '16px'
          }}
        >
          Falar Conosco
        </button>
      </div>

      {/* Injeção rápida de estilos responsivos para a Navbar */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .nav-links-desktop {
            display: flex !important;
          }
          nav button[aria-label="Menu"] {
            display: none !important;
          }
        }
      `}} />
    </nav>
  );
}
