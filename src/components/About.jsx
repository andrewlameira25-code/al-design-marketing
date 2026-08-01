import React from 'react';

export default function About() {
  return (
    <section 
      id="sobre" 
      style={{
        padding: '100px 0',
        backgroundColor: '#0D0D0D',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      <div className="container">
        <div 
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Lado Esquerdo - Narrativa de Autoridade e História Real */}
          <div style={{ textAlign: 'left' }}>
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
              A Jornada Real
            </span>
            <h2 
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                lineHeight: '1.1',
                marginBottom: '32px',
                textTransform: 'uppercase'
              }}
            >
              Pele em risco: Eu entendo a dor do <span className="text-orange">dono de pequeno negócio.</span>
            </h2>
            
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                fontSize: '16px',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                lineHeight: '1.7'
              }}
            >
              <p>
                <strong>Não sou apenas um designer ou gestor de tráfego que vive de teoria.</strong>
              </p>
              <p>
                Sou um empreendedor que construiu e geriu uma academia do absoluto zero. Eu já passei noites sem dormir lidando com crises de imóvel, precisando recuperar dezenas de alunos inadimplentes no meio da pandemia e lutando para manter o fluxo de caixa saudável nos meses de baixa temporada.
              </p>
              <p>
                Usando minhas próprias estratégias de branding, precificação inteligente e design publicitário de alta conversão, nós <strong>dobramos as vendas de suplementos</strong> (transformando estoque parado em lucro), trouxemos parceiros renomados da região e criamos uma verdadeira <em>tribo fiel</em>.
              </p>
              <p>
                O marketing da <strong style={{ color: '#FFF' }}>A.L. Design</strong> não foi testado no laboratório, foi forjado no campo de batalha. E é exatamente essa bagagem agressiva de conversão, caixa rápido e autoridade que eu vou usar para alavancar o SEU negócio.
              </p>
            </div>

            {/* Três Pilares da Identidade */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
                marginTop: '40px'
              }}
            >
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#FF5500', textTransform: 'uppercase' }}>1. Foco em Caixa Real</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5' }}>Gatilhos de venda rápidos (combos, ancoragem) que injetam dinheiro logo.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#FF5500', textTransform: 'uppercase' }}>2. Design Sem Supérfluos</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5' }}>Hierarquia visual feita exclusivamente para gerar conversão e contato.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '8px', color: '#FF5500', textTransform: 'uppercase' }}>3. Efeito Ímã</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5' }}>Marcas de alto valor que atraem parcerias estratégicas naturalmente.</p>
              </div>
            </div>
          </div>

          {/* Lado Direito - Assinatura / Cartão de Visitas Digital do PDF */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* Cartão de Visita Corporativo Onyx/Orange */}
            <div 
              className="glass-panel tech-border-glow"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '40px 32px',
                textAlign: 'left',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Detalhe Laranja Lateral Esquerdo */}
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '15%',
                  bottom: '15%',
                  width: '4px',
                  backgroundColor: '#FF5500',
                  borderRadius: '0 4px 4px 0'
                }}
              />

              {/* Marca D'água sutil Tech Grid */}
              <div 
                style={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '10px',
                  width: '100px',
                  height: '100px',
                  backgroundImage: 'radial-gradient(rgba(255, 85, 0, 0.05) 1.5px, transparent 1.5px)',
                  backgroundSize: '12px 12px',
                  opacity: 0.6,
                  pointerEvents: 'none'
                }}
              />

              {/* Informações Profissionais */}
              <div style={{ marginBottom: '32px' }}>
                <h3 
                  style={{
                    fontSize: '28px',
                    fontWeight: 900,
                    fontFamily: 'var(--font-headline)',
                    lineHeight: '1',
                    marginBottom: '4px'
                  }}
                >
                  Andrew Lameira
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: '#FF5500',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}
                >
                  CEO, Gestor & Diretor de Arte
                </p>
              </div>

              {/* Dados de Contato e Localização */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Ícone de Pin Localização SVG */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Belém, Pará - Brasil</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* Ícone de Email SVG */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 400 }}>contato@aldesign.com.br</span>
                </div>
              </div>

              {/* Rodapé do Cartão */}
              <div 
                style={{
                  marginTop: '40px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
                  EXPERIÊNCIA REAL.
                </span>
                <span style={{ fontSize: '11px', color: '#FF5500', fontWeight: 700, letterSpacing: '0.1em' }}>
                  A.L. CONSULTING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}} />
    </section>
  );
}
