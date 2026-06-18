import React from 'react';

export default function Hero({ onContactClick }) {
  return (
    <section 
      id="inicio" 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Detalhe de luz de fundo - Efeito Neon Orange Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-55%, -50%)',
          width: '50vw',
          height: '50vw',
          maxWidth: '500px',
          maxHeight: '500px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.12) 0%, rgba(255, 85, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
            textAlign: 'center'
          }}
          className="hero-grid"
        >
          {/* Lado Esquerdo / Texto Principal */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {/* Tag / Badge de Entrada */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255, 85, 0, 0.08)',
                border: '1px solid rgba(255, 85, 0, 0.25)',
                padding: '6px 16px',
                borderRadius: '50px',
                marginBottom: '24px',
                userSelect: 'none'
              }}
            >
              <span 
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#FF5500',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite'
                }}
              />
              <span 
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  fontSize: '11px',
                  color: '#FF5500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                Posicionamento Premium & Conversão
              </span>
            </div>

            {/* Título Principal de Alto Impacto */}
            <h1 
              style={{
                fontSize: 'clamp(38px, 6vw, 68px)',
                lineHeight: '1.05',
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}
            >
              Transformamos negócios locais em <span className="text-orange glow-text">marcas de alto valor</span>.
            </h1>

            {/* Subtítulo voltado para o cliente leigo em marketing */}
            <p 
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
                marginBottom: '40px',
                maxWidth: '680px',
                fontWeight: 300
              }}
            >
              Pare de perder clientes para a concorrência por falta de profissionalismo. Criamos a identidade visual estratégica, o design publicitário e gerimos suas redes sociais para destacar sua autoridade na região.
            </p>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                justifyContent: 'center'
              }}
            >
              <button 
                onClick={onContactClick} 
                className="btn-primary"
                style={{
                  padding: '16px 36px',
                  fontSize: '14px',
                  letterSpacing: '0.08em'
                }}
              >
                Solicitar Orçamento
              </button>
              <a 
                href="#servicos" 
                className="btn-secondary"
                style={{
                  padding: '16px 36px',
                  fontSize: '14px',
                  letterSpacing: '0.08em'
                }}
              >
                Conhecer Serviços
              </a>
            </div>
          </div>

          {/* Cards de Destaque Rápido / Visual Showcase */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            {/* Card 1 - Design Publicitário */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left' }}>
              <div 
                style={{
                  color: '#FF5500',
                  fontSize: '24px',
                  marginBottom: '16px',
                  fontWeight: '900',
                  fontFamily: 'var(--font-headline)'
                }}
              >
                01.
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>DESIGN ESTRATÉGICO</h3>
              <p style={{ fontSize: '14px' }}>
                Artes e materiais publicitários que vendem o seu serviço à primeira vista, comunicando autoridade e qualidade extrema.
              </p>
            </div>

            {/* Card 2 - Redes Sociais */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left' }}>
              <div 
                style={{
                  color: '#FF5500',
                  fontSize: '24px',
                  marginBottom: '16px',
                  fontWeight: '900',
                  fontFamily: 'var(--font-headline)'
                }}
              >
                02.
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>GESTÃO DE MÍDIAS</h3>
              <p style={{ fontSize: '14px' }}>
                Você não precisa se preocupar com postagens. Nós planejamos, agendamos e organizamos todo o seu posicionamento digital.
              </p>
            </div>

            {/* Card 3 - Consultoria */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left' }}>
              <div 
                style={{
                  color: '#FF5500',
                  fontSize: '24px',
                  marginBottom: '16px',
                  fontWeight: '900',
                  fontFamily: 'var(--font-headline)'
                }}
              >
                03.
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>DIREÇÃO DE ARTE</h3>
              <p style={{ fontSize: '14px' }}>
                Processos visuais lógicos (Grid System) estruturados sob a liderança de Andrew Lameira em Belém/PA.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Injeção rápida de keyframes para animações de pulse e responsividade */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 85, 0, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(255, 85, 0, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 85, 0, 0); }
        }
      `}} />
    </section>
  );
}
