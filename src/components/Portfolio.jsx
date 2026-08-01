import React from 'react';
import { useNavigate } from 'react-router-dom';
import { casesData, portfolioServices } from '../data/cases';

export default function Portfolio({ onContactClick }) {
  const navigate = useNavigate();

  return (
    <section 
      id="portfolio" 
      style={{
        padding: '100px 0',
        backgroundColor: '#0D0D0D',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      {/* Luz de fundo decorativa */}
      <div 
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '500px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.06) 0%, rgba(255, 85, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Header da Seção */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 64px'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '13px',
              color: '#FF5500',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: '12px'
            }}
          >
            Casos de Sucesso
          </span>
          <h2 
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: '1.1',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}
          >
            Estratégias que geraram <span className="text-orange">resultados reais</span>
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
            Nossos métodos aplicados na prática. Clique em cada case para ver os detalhes da execução e resultados.
          </p>
        </div>

        {/* Grid de Cases (Links) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {casesData.map((project) => (
            <div 
              key={project.id}
              onClick={() => navigate(`/case/${project.id}`)}
              className="glass-panel tech-border-glow"
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Showcase Visual */}
              <div 
                style={{
                  height: '200px',
                  backgroundColor: '#161616',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  overflow: 'hidden'
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
                <div 
                  style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255, 85, 0, 0.2) 0%, rgba(255, 85, 0, 0) 70%)',
                    filter: 'blur(20px)',
                    zIndex: 1
                  }}
                />
                
                {/* Título do Case dentro do banner */}
                <div style={{ zIndex: 2, textAlign: 'center', padding: '24px' }}>
                  <span style={{ fontSize: '11px', color: '#FF5500', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
                    {project.badge}
                  </span>
                  <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 900, fontSize: '20px', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Infos rápidas */}
              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '15px', color: '#FFF', marginBottom: '8px' }}>
                    Foco da Estratégia
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '24px' }}>
                    {project.focus}
                  </p>
                </div>
                
                <span style={{ color: '#FF5500', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Ver Case Completo <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Seção Como isso se traduz em serviço (Pacote Andrew) */}
        <div 
          className="glass-panel tech-border-glow"
          style={{
            marginTop: '80px',
            padding: '48px 32px',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 85, 0, 0.02)',
            border: '1px solid rgba(255, 85, 0, 0.15)'
          }}
        >
          <span style={{ fontSize: '24px', display: 'block', marginBottom: '16px' }}>🏆</span>
          <h3 style={{ fontSize: '24px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Visão Geral do Portfólio <span className="text-orange">(O Pacote Andrew)</span>
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '650px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Eu ajudo pequenos negócios a pararem de parecer amadores, começarem a girar caixa rápido e construírem uma marca tão forte que os clientes e parceiros vêm até eles.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {portfolioServices.map((svc, idx) => (
              <div key={idx} style={{ backgroundColor: '#111', padding: '24px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: '#FF5500', fontSize: '16px', marginBottom: '8px' }}>{svc.title}</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '48px' }}>
            <button 
              onClick={onContactClick}
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '14px'
              }}
            >
              Quero Profissionalizar Meu Negócio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
