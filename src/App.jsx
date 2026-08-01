import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import CasePage from './components/CasePage';
import ContactModal from './components/ContactModal';

function Home({ openContact }) {
  return (
    <>
      <Hero onContactClick={openContact} />
      <About />
      <Skills />
      <Portfolio onContactClick={openContact} />
    </>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <Router>
      {/* Menu Cabeçalho */}
      <Navbar onContactClick={openContact} />

      {/* Conteúdo Principal */}
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home openContact={openContact} />} />
          <Route path="/case/:id" element={<CasePage onContactClick={openContact} />} />
        </Routes>
      </main>

      {/* Rodapé Premium */}
      <footer 
        style={{
          backgroundColor: '#0A0A0A',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          padding: '48px 0 32px',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div className="container">
          <div 
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
              marginBottom: '40px'
            }}
          >
            {/* Bloco 1 - Identidade */}
            <div style={{ textAlign: 'left', maxWidth: '350px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div 
                  style={{
                    backgroundColor: '#FF5500',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 900,
                    fontSize: '13px',
                    padding: '4px 6px',
                    borderRadius: '3px',
                    lineHeight: 1
                  }}
                >
                  AL
                </div>
                <span 
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 900,
                    fontSize: '18px',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}
                >
                  A.L. <span style={{ color: '#FF5500' }}>Design & Marketing</span>
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Transformamos a presença digital de negócios locais através de estratégias visuais sólidas, processos em grids matemáticos e foco em conversão comercial.
              </p>
            </div>

            {/* Bloco 2 - Navegação */}
            <div style={{ textAlign: 'left' }}>
              <h4 
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}
              >
                Navegação
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['inicio', 'sobre', 'servicos', 'portfolio'].map((sec) => (
                  <li key={sec}>
                    <a 
                      href={`/#${sec}`} 
                      style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}
                      onMouseEnter={(e) => e.target.style.color = '#FF5500'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                    >
                      {sec === 'inicio' ? 'Início' : sec === 'sobre' ? 'Sobre Mim' : sec === 'servicos' ? 'Serviços' : 'Portfólio'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloco 3 - Contato */}
            <div style={{ textAlign: 'left' }}>
              <h4 
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  letterSpacing: '0.1em',
                  marginBottom: '16px'
                }}
              >
                Contato
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                Belém, Pará - Brasil
              </p>
              <a 
                href="mailto:contato@aldesign.com.br"
                style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 500 }}
                onMouseEnter={(e) => e.target.style.color = '#FF5500'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                contato@aldesign.com.br
              </a>
            </div>
          </div>

          {/* Copyright e Linha de Divisão */}
          <div 
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              paddingTop: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: 'var(--color-text-muted)'
            }}
            className="footer-bottom"
          >
            <span>
              &copy; {new Date().getFullYear()} A.L. Design & Marketing. Todos os direitos reservados.
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Direção de Arte por <strong style={{ color: 'var(--color-text-secondary)' }}>Andrew Lameira</strong>
            </span>
          </div>
        </div>
      </footer>

      {/* Modal de Contato */}
      <ContactModal isOpen={isContactOpen} onClose={closeContact} />

      {/* Estilos adicionais responsivos para o rodapé */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}} />
    </Router>
  );
}

export default App;
