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
              maxWidth: '850px',
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
                Chega de Achismos no Marketing
              </span>
            </div>

            {/* Título Principal de Alto Impacto (Gatilho da Dor + Solução) */}
            <h1 
              style={{
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                lineHeight: '1.1',
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}
            >
              Você está cansado de gastar com marketing que <span className="text-orange glow-text">não dá retorno?</span>
            </h1>

            {/* Subtítulo focado no resultado (Agitação + Solução) */}
            <p 
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
                marginBottom: '40px',
                maxWidth: '720px',
                fontWeight: 300
              }}
            >
              O problema não é o seu produto, é a <strong>forma como você se posiciona</strong>. Eu construo marcas premium, aplico ancoragem de preços e desenvolvo ecossistemas visuais para colocar <strong>dinheiro no seu caixa</strong>. Resultados reais que já alavancaram de academias a comércios varejistas.
            </p>

            {/* CTAs Focados em Conversão */}
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
                  padding: '18px 40px',
                  fontSize: '15px',
                  letterSpacing: '0.05em'
                }}
              >
                Agendar Diagnóstico Gratuito
              </button>
              <a 
                href="#portfolio" 
                className="btn-secondary"
                style={{
                  padding: '18px 40px',
                  fontSize: '15px',
                  letterSpacing: '0.05em'
                }}
              >
                Quero Ver Seus Resultados
              </a>
            </div>
          </div>

          {/* Cards de Destaque Rápido / Visual Showcase (Gatilhos de Autoridade) */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginTop: '48px'
            }}
          >
            {/* Card 1 - Posicionamento */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left', borderTop: '2px solid #FF5500' }}>
              <div style={{ color: '#FF5500', fontSize: '24px', marginBottom: '16px', fontWeight: '900', fontFamily: 'var(--font-headline)' }}>
                01.
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>BRANDING DE AUTORIDADE</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Seu negócio vai parar de parecer amador. Construímos uma estética que atrai os clientes certos e cobra o preço justo.
              </p>
            </div>

            {/* Card 2 - Caixa Rápido */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left', borderTop: '2px solid #FF5500' }}>
              <div style={{ color: '#FF5500', fontSize: '24px', marginBottom: '16px', fontWeight: '900', fontFamily: 'var(--font-headline)' }}>
                02.
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>GIRAMOS SEU CAIXA</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Você tem estoque parado ou inadimplência? Criamos funis estratégicos e de ancoragem para acelerar seu faturamento mensal.
              </p>
            </div>

            {/* Card 3 - Peças Vendedoras */}
            <div className="glass-panel tech-border-glow" style={{ padding: '32px 24px', textAlign: 'left', borderTop: '2px solid #FF5500' }}>
              <div style={{ color: '#FF5500', fontSize: '24px', marginBottom: '16px', fontWeight: '900', fontFamily: 'var(--font-headline)' }}>
                03.
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>CONVERSÃO IMEDIATA</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Usamos psicologia de consumo no seu design. Suas campanhas vão guiar o cliente até a compra sem ele perceber.
              </p>
            </div>
          </div>
        </div>
      </div>

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
