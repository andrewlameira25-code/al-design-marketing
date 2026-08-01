import React from 'react';

export default function Portfolio({ onContactClick }) {
  const cases = [
    {
      title: 'ACADEMIA OFICINA G4',
      focus: 'Crescimento em Baixa Temporada, Retenção e Gestão de Crise',
      scenario: 'Enfrentar a sazonalidade crítica de junho/julho (férias escolares) e recuperar a inadimplência pós-pandemia, mantendo o caixa positivo e a motivação da equipe.',
      strategyTitle: '',
      strategy: [
        { title: 'Campanha de Maio ("Efeito Cascata")', desc: 'Funil de vendas no WhatsApp + Promoção Relâmpago focada em indicações.' },
        { title: 'Gestão de Crise Humanizada', desc: 'Abordagem direta para renegociação de 40+ alunos inadimplentes, oferecendo condições viáveis.' },
        { title: 'Comunidade Ativa', desc: 'Transformação do grupo de alunos em uma "tribo" engajada, gerando prova social constante.' }
      ],
      results: [
        { title: 'Crescimento Expressivo', desc: 'Base de alunos saltou de ~60 para 80 ativos em maio (+33%).' },
        { title: 'Resiliência Comprovada', desc: 'Mesmo na queda natural de julho, manteve-se uma base sólida de 60 alunos, com entrada constante de 10-15 novos alunos/mês.' },
        { title: 'Recuperação Financeira', desc: 'Regularização imediata de pendências críticas, garantindo fluxo de caixa operacional.' },
        { title: 'Engajamento Total', desc: 'Grupos de WhatsApp com interação diária e alta conversão de ofertas.' }
      ],
      lesson: '"Não existe mês ruim se a estratégia for boa. Comunicação assertiva e senso de comunidade transformam crises em oportunidades de fidelização."',
      badge: 'Retenção & Crescimento',
      gridPattern: true
    },
    {
      title: 'LOJA DE SUPLEMENTOS (INTEGRADA)',
      focus: 'Giro de Estoque, Engenharia de Preço e Aceleração de Caixa',
      scenario: 'Produto essencial (Creatina) com baixa rotatividade (apenas 3 unidades/mês) no modelo de venda avulsa tradicional, gerando capital parado na prateleira.',
      strategyTitle: '"O Poder do Combo e Ancoragem"',
      strategy: [
        { title: 'Reengenharia de Mix', desc: 'Substituição estratégica por uma linha básica de alto giro.' },
        { title: 'Tática de Preço Psicológico', desc: 'Oferta de Volume (Gatilho): "Leve 2 por R$ 96,00" (saindo a R$ 48,00/unidade). Ancoragem (Preço Cheio): Se o cliente quisesse apenas 1 unidade, pagava R$ 60,00.' },
        { title: 'Foco em Liquidez', desc: 'Priorizar o giro rápido do estoque sobre a margem unitária máxima, transformando produto parado em dinheiro vivo em dias.' }
      ],
      results: [
        { title: 'Explosão de Volume', desc: 'Vendas pularam de 3 unidades/mês para 10+ unidades/mês (+233% de crescimento).' },
        { title: 'Caixa Imediato', desc: 'O dinheiro que ficaria preso por meses entrou no caixa semanalmente.' },
        { title: 'Venda Cruzada Automática', desc: 'Quem ia buscar o combo de creatina (oferta isca) acabava levando Whey ou outros itens, alavancando o lucro total da loja.' },
        { title: 'Satisfação do Cliente', desc: 'Percepção de "negócio imperdível" ao levar o combo, fidelizando pela economia percebida.' }
      ],
      lesson: '"No varejo, giro é rei. Às vezes, vender mais volume com margem ajustada gera muito mais lucro final do que ter estoque parado com margem alta. A âncora de preço (R$ 60 vs R$ 48 no combo) é a chave para destravar vendas."',
      badge: 'Varejo & Caixa',
      gridPattern: false
    }
  ];

  const services = [
    { title: 'Diagnóstico de Crise', desc: 'Capacidade de identificar gargalos (como a creatina parada ou alunos inadimplentes) e resolver rápido.' },
    { title: 'Estratégia de Preço', desc: 'Habilidade para criar ofertas (combos, ancoragem) que aumentam o ticket médio e o giro.' },
    { title: 'Gestão de Comunidade', desc: 'Técnicas para transformar clientes em fãs que compram repetidamente.' },
    { title: 'Foco em Caixa', desc: 'Todas as ações são desenhadas para colocar dinheiro no seu bolso o mais rápido possível.' }
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
            Nossos métodos aplicados na prática: crescimento de base, recuperação de caixa e aumento drástico de ticket médio.
          </p>
        </div>

        {/* Listagem de Cases */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {cases.map((project, idx) => (
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
              {/* Cabeçalho do Case */}
              <div 
                style={{
                  padding: '32px',
                  backgroundColor: '#161616',
                  position: 'relative',
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
                    top: '-50px',
                    left: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(255, 85, 0, 0.15) 0%, rgba(255, 85, 0, 0) 70%)',
                    filter: 'blur(20px)',
                    zIndex: 1
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span 
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      backgroundColor: '#FF5500',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '16px'
                    }}
                  >
                    {project.badge}
                  </span>
                  
                  <h3 style={{ fontSize: '28px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#FF5500', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    Foco: {project.focus}
                  </p>
                </div>
              </div>

              {/* Corpo do Case */}
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Cenário */}
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '8px', color: '#FFF' }}>
                    <span style={{ fontSize: '18px' }}>🎯</span> O Cenário
                  </h4>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    {project.scenario}
                  </p>
                </div>

                {/* Estratégia */}
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '12px', color: '#FFF' }}>
                    <span style={{ fontSize: '18px' }}>🚀</span> A Estratégia Executada {project.strategyTitle && <span style={{ color: '#FF5500' }}>- {project.strategyTitle}</span>}
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {project.strategy.map((item, sIdx) => (
                      <li key={sIdx} style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        <span style={{ color: '#FF5500', fontWeight: 600, marginRight: '6px' }}>{item.title}:</span>
                        <span style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resultados */}
                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', marginBottom: '16px', color: '#FFF' }}>
                    <span style={{ fontSize: '18px' }}>📊</span> Os Resultados Reais
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>
                          {res.title}
                        </div>
                        <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                          {res.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lição */}
                <div style={{ borderLeft: '3px solid #FF5500', paddingLeft: '16px', marginTop: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#FF5500', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                    💡 A Lição
                  </span>
                  <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#E0E0E0', lineHeight: '1.5' }}>
                    {project.lesson}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Seção Como isso se traduz em serviço */}
        <div 
          className="glass-panel tech-border-glow"
          style={{
            marginTop: '64px',
            padding: '48px 32px',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 85, 0, 0.02)',
            border: '1px solid rgba(255, 85, 0, 0.15)'
          }}
        >
          <span style={{ fontSize: '24px', display: 'block', marginBottom: '16px' }}>🚀</span>
          <h3 style={{ fontSize: '24px', textTransform: 'uppercase', marginBottom: '16px' }}>
            Como isso se traduz em <span className="text-orange">serviço para você?</span>
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Ao contratar o <strong style={{ color: '#FFF' }}>Andrew Gestão & Marketing</strong>, você não leva apenas "postagens no Instagram". Você leva:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'left' }}>
            {services.map((svc, idx) => (
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
              Quero Resultados Assim no Meu Negócio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
