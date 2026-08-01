import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { casesData } from '../data/cases';

export default function CasePage({ onContactClick }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Rola para o topo ao montar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = casesData.find(c => c.id === id);

  if (!project) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center', backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
        <h2 style={{ color: '#FFF' }}>Case não encontrado</h2>
        <button onClick={() => navigate('/')} className="btn-secondary" style={{ marginTop: '20px', padding: '12px 24px' }}>
          Voltar para Home
        </button>
      </div>
    );
  }

  return (
    <section 
      style={{
        padding: '120px 0 100px',
        backgroundColor: '#0D0D0D',
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh'
      }}
    >
      {/* Botão de voltar */}
      <div className="container" style={{ maxWidth: '1000px', marginBottom: '40px' }}>
        <button 
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 0',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          <span style={{ fontSize: '18px' }}>←</span> Voltar para Home
        </button>
      </div>

      <div className="container" style={{ maxWidth: '1000px' }}>
        <div 
          className="glass-panel tech-border-glow"
          style={{
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Cabeçalho do Case */}
          <div 
            style={{
              padding: '48px 32px',
              backgroundColor: '#161616',
              position: 'relative',
              borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
              overflow: 'hidden',
              textAlign: 'center'
            }}
          >
            {project.gridPattern && (
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'radial-gradient(rgba(255, 85, 0, 0.08) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  opacity: 0.8
                }}
              />
            )}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span 
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  backgroundColor: '#FF5500',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '24px'
                }}
              >
                {project.badge}
              </span>
              
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', textTransform: 'uppercase', marginBottom: '16px' }}>
                {project.title}
              </h1>
              <p style={{ fontSize: '16px', color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                Foco: {project.focus}
              </p>
            </div>
          </div>

          {/* Corpo do Case */}
          <div style={{ padding: '48px 32px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Cenário */}
            <div>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', marginBottom: '16px', color: '#FFF' }}>
                <span style={{ fontSize: '24px' }}>🎯</span> O Desafio / Cenário
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                {project.scenario}
              </p>
            </div>

            {/* Estratégia */}
            <div>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', marginBottom: '24px', color: '#FFF' }}>
                <span style={{ fontSize: '24px' }}>🚀</span> A Estratégia Executada {project.strategyTitle && <span style={{ color: '#FF5500' }}>- {project.strategyTitle}</span>}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {project.strategy.map((item, sIdx) => (
                  <li key={sIdx} style={{ fontSize: '16px', lineHeight: '1.7', backgroundColor: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '8px', borderLeft: '2px solid #FF5500' }}>
                    <span style={{ color: '#FFF', fontWeight: 700, display: 'block', marginBottom: '8px', fontSize: '17px' }}>{item.title}</span>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultados */}
            <div style={{ backgroundColor: 'rgba(255,85,0,0.03)', padding: '32px', borderRadius: '8px', border: '1px solid rgba(255,85,0,0.1)' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', marginBottom: '8px', color: '#FFF' }}>
                <span style={{ fontSize: '24px' }}>📊</span> {project.resultsTitle || 'Os Resultados Reais'}
              </h2>
              {project.resultsDesc && (
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
                  {project.resultsDesc}
                </p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '24px' }}>
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} style={{ backgroundColor: '#111', padding: '20px', borderRadius: '6px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#FF5500', marginBottom: '8px' }}>
                      {res.title}
                    </div>
                    <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                      {res.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lição */}
            <div style={{ borderLeft: '4px solid #FF5500', paddingLeft: '24px', marginTop: '16px', paddingBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#FF5500', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                💡 A Lição
              </span>
              <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#FFF', lineHeight: '1.6', fontWeight: 300 }}>
                {project.lesson}
              </p>
            </div>

            {/* CTA do Case Individual */}
            <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Quer esses resultados no seu negócio?</h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Eu posso aplicar essa mesma lógica na sua empresa. Vamos agendar uma sessão estratégica gratuita.
              </p>
              <button 
                onClick={onContactClick}
                className="btn-primary"
                style={{ padding: '18px 40px', fontSize: '16px' }}
              >
                Falar com Andrew
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
