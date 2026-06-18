import React from 'react';

export default function Portfolio({ onContactClick }) {
  const projects = [
    {
      title: 'Clínica Odonto Premier',
      category: 'Identidade Visual & Branding',
      desc: 'Desenvolvimento de marca completa e papelaria corporativa premium para reposicionamento no mercado de alto ticket.',
      result: '+40% no valor das consultas particulares',
      badge: 'B2B Premium',
      gridPattern: true
    },
    {
      title: 'Boutique Della Donna',
      category: 'Design Publicitário & Redes Sociais',
      desc: 'Criação de identidade para campanhas de lançamentos e organização estética completa do feed do Instagram.',
      result: '+120% no engajamento orgânico do perfil',
      badge: 'Lançamento',
      gridPattern: false
    },
    {
      title: 'Advocacia Pinheiro & Associados',
      category: 'Branding & Direção de Arte',
      desc: 'Design e arquitetura de marca baseados em grids rígidos para transmitir autoridade jurídica e segurança corporativa.',
      result: 'Fechamento facilitado de novos contratos de assessoria',
      badge: 'Corporate',
      gridPattern: true
    }
  ];

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
          bottom: '20%',
          right: '5%',
          width: '40vw',
          height: '40vw',
          maxWidth: '400px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.08) 0%, rgba(255, 85, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container">
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
            Projetos que geraram <span className="text-orange">autoridade e conversão</span>
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
            Veja exemplos práticos de como transformamos a comunicação visual de marcas e impulsionamos seus resultados de vendas na região.
          </p>
        </div>

        {/* Grid do Portfólio */}
        <div 
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="glass-panel tech-border-glow"
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Visual Showcase - Simulando a arte de design premium */}
              <div 
                style={{
                  height: '240px',
                  backgroundColor: '#161616',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                  overflow: 'hidden'
                }}
              >
                {/* Tech Grid Pattern no Fundo do Showcase */}
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

                {/* Efeito Glow Laranja */}
                <div 
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(255, 85, 0, 0.25) 0%, rgba(255, 85, 0, 0) 70%)',
                    filter: 'blur(15px)',
                    zIndex: 1
                  }}
                />

                {/* Tipografia em destaque simulando o logotipo do projeto */}
                <div 
                  style={{
                    zIndex: 2,
                    textAlign: 'center',
                    padding: '24px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 900,
                      fontSize: '20px',
                      color: '#FFFFFF',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px'
                    }}
                  >
                    {project.title}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      color: '#FF5500',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Badge Superior Esquerda */}
                <span 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    fontSize: '10px',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    backgroundColor: '#FF5500',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    zIndex: 3
                  }}
                >
                  {project.badge}
                </span>
              </div>

              {/* Informações e Métricas do Projeto */}
              <div 
                style={{
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                    {project.desc}
                  </p>
                </div>

                {/* Bloco de Resultado Comercial - Muito importante para o dono da empresa */}
                <div 
                  style={{
                    backgroundColor: 'rgba(255, 85, 0, 0.04)',
                    border: '1px solid rgba(255, 85, 0, 0.15)',
                    padding: '16px',
                    borderRadius: '6px',
                    marginBottom: '24px'
                  }}
                >
                  <span 
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 700,
                      color: '#FF5500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px'
                    }}
                  >
                    Resultado Alcançado:
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 800,
                      fontSize: '15px',
                      color: '#FFFFFF'
                    }}
                  >
                    {project.result}
                  </span>
                </div>

                {/* Botão de Solicitação de Projeto Similar */}
                <button 
                  onClick={onContactClick}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '12px',
                    border: '1px dashed rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Solicitar Projeto Semelhante
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer da seção com botão geral */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <button 
            onClick={onContactClick}
            className="btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '14px'
            }}
          >
            Quero Profissionalizar Minha Marca
          </button>
        </div>
      </div>
    </section>
  );
}
