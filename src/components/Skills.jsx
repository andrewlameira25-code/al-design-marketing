import React from 'react';

export default function Skills() {
  const services = [
    {
      num: '01',
      title: 'Identidade de Marca Premium',
      description: 'Criamos logotipos corporativos, paletas de cores estratégicas e manuais visuais. A sua marca deixará de parecer amadora para se destacar e transmitir confiança imediata a clientes exigentes.',
      tags: ['Logotipo', 'Brand System', 'Estética Corporativa']
    },
    {
      num: '02',
      title: 'Design Publicitário & Flyers',
      description: 'Desenvolvimento de peças publicitárias de alto impacto visual. O design não compete com a mensagem de vendas; ele direciona o olhar do cliente para o produto e estimula o fechamento do contrato.',
      tags: ['Flyers', 'Campanhas', 'Criativos de Conversão']
    },
    {
      num: '03',
      title: 'Gestão Completa de Mídias',
      description: 'Não tem tempo ou não sabe o que postar? Cuidamos de todo o processo: planejamento de cronogramas, agendamento estruturado e criação das postagens, mantendo o seu Instagram ativo e profissional.',
      tags: ['Cronogramas', 'Organização de Feed', 'Presença Digital']
    },
    {
      num: '04',
      title: 'Consultoria de Posicionamento',
      description: 'Análise estratégica da comunicação da sua empresa para reposicionar a marca. Ajudamos lojistas e profissionais liberais a cobrarem mais caro ao demonstrar um posicionamento de alto valor.',
      tags: ['Auditoria Visual', 'Valor de Marca', 'Estratégia B2B']
    }
  ];

  return (
    <section 
      id="servicos" 
      style={{
        padding: '100px 0',
        backgroundColor: '#0D0D0D',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px' }}>
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
            Nossas Soluções
          </span>
          <h2 
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: '1.1',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}
          >
            Serviços focados em trazer <span className="text-orange">resultados reais</span> para o seu negócio
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--color-text-secondary)' }}>
            Nós cuidamos da engenharia visual e da estratégia de comunicação do seu negócio para que você possa focar no que faz de melhor: atender seus clientes.
          </p>
        </div>

        {/* Grade de Serviços */}
        <div 
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-panel tech-border-glow"
              style={{
                padding: '40px 32px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '8px'
              }}
            >
              <div>
                {/* Número do Serviço e Header do Card */}
                <div 
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '28px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 900,
                      fontSize: '32px',
                      color: 'rgba(255, 85, 0, 0.15)',
                      lineHeight: 1
                    }}
                  >
                    {service.num}
                  </span>
                  
                  {/* Ícone de Engrenagem / Tecnologia / Grid SVG sutil */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
                    {index === 0 && (
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    )}
                    {index === 1 && (
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    )}
                    {index === 2 && (
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    )}
                    {index === 3 && (
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM9 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path>
                    )}
                  </svg>
                </div>

                <h3 style={{ fontSize: '20px', marginBottom: '16px', textTransform: 'uppercase' }}>
                  {service.title}
                </h3>
                
                <p style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>

              {/* Tags do Serviço */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {service.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 700,
                      color: 'var(--color-text-secondary)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
