import React from 'react';

export default function About() {
  return (
    <section 
      id="sobre" 
      style={{
        padding: '120px 0',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      {/* Background Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          maxWidth: '500px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.05) 0%, rgba(255, 85, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          maxWidth: '400px',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.05) 0%, rgba(255, 85, 0, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span 
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 700,
              fontSize: '13px',
              color: '#FF5500',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            Minha Jornada Real
          </span>
          <h2 
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '1.1',
              textTransform: 'uppercase',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            De operar na sala de casa a <span className="text-orange glow-text">gerir ecossistemas de marca.</span>
          </h2>
        </div>

        {/* PARTE 1: A ORIGEM E O CARTÃO */}
        <div 
          className="about-grid-top"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center',
            marginBottom: '80px'
          }}
        >
          {/* Lado Esquerdo - O Cartão de Visitas e Autoridade */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div 
              className="glass-panel tech-border-glow"
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '40px 32px',
                textAlign: 'left',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            >
              <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: '4px', backgroundColor: '#FF5500', borderRadius: '0 4px 4px 0' }} />
              <div style={{ position: 'absolute', right: '10px', bottom: '10px', width: '100px', height: '100px', backgroundImage: 'radial-gradient(rgba(255, 85, 0, 0.05) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px', opacity: 0.6, pointerEvents: 'none' }} />

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 900, fontFamily: 'var(--font-headline)', lineHeight: '1', marginBottom: '4px' }}>
                  Andrew Lameira
                </h3>
                <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '12px', color: '#FF5500', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Estrategista & Diretor de Arte
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Belém, Pará - Brasil</span>
                </div>
              </div>

              <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>PELE EM RISCO.</span>
                <span style={{ fontSize: '11px', color: '#FF5500', fontWeight: 700, letterSpacing: '0.1em' }}>A.L. CONSULTING</span>
              </div>
            </div>
          </div>

          {/* Lado Direito - A História da Força & Estilo */}
          <div style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: 300 }}>
            <p style={{ marginBottom: '24px', fontSize: '18px', color: '#FFF' }}>
              <strong>Não sou apenas um gestor de marketing ou designer. Sou um empreendedor que construiu negócios do zero, superou crises profundas e transformou limitações em alavancas de crescimento.</strong>
            </p>
            <p style={{ marginBottom: '24px' }}>
              Minha trajetória não começou em grandes escritórios, mas na resiliência do dia a dia. Tudo começou com a <em>Força & Estilo</em>, um projeto familiar de roupas e suplementos. Enfrentei conflitos societários, o fechamento da parte física e a desistência de sócios.
            </p>
            <p>
              Sozinho, sem loja e operando da minha sala, pivotei o negócio focando apenas no que funcionava: suplementos. Com estratégia de entrega personalizada e atendimento de excelência, levei a marca para todo Belém, Ananindeua e até o Marajó, provando que <strong>uma marca forte vale mais que um ponto comercial.</strong>
            </p>
          </div>
        </div>

        {/* PARTE 2: O CASE G4 (A Prova de Fogo) */}
        <div 
          className="glass-panel"
          style={{
            padding: '48px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 85, 0, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            marginBottom: '80px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', color: '#FF5500', textTransform: 'uppercase', marginBottom: '16px', fontFamily: 'var(--font-headline)' }}>
              A Prova de Fogo: Academia Oficina G4
            </h3>
            <p style={{ fontSize: '16px', color: '#FFF', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Identifiquei uma oportunidade onde outros viam fracasso: uma academia encerrando as operações, com equipamentos velhos, espaço sujo e uma carteira de 30 alunos inadimplentes. <strong>Com apenas R$ 600,00 no bolso, assumi o desafio.</strong>
            </p>
          </div>

          <div 
            className="about-grid-timeline"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px'
            }}
          >
            {/* Bloco 1 */}
            <div>
              <h4 style={{ color: '#FFF', fontSize: '15px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FF5500' }}>01.</span> Arquitetura Total
              </h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                Não apenas aluguei o espaço; redesenhei toda a <strong>identidade visual</strong> da G4, criando uma atmosfera de comunidade antes mesmo da primeira reforma.
              </p>
            </div>
            
            {/* Bloco 2 */}
            <div>
              <h4 style={{ color: '#FFF', fontSize: '15px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FF5500' }}>02.</span> Investimento & Caixa
              </h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                Injetei meu estoque de suplementos (avaliado em R$ 4.000) e criei um <strong>ecossistema integrado onde o varejo financiava o treino</strong> nos meses difíceis.
              </p>
            </div>

            {/* Bloco 3 */}
            <div>
              <h4 style={{ color: '#FFF', fontSize: '15px', textTransform: 'uppercase', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#FF5500' }}>03.</span> Força Magnética
              </h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                Trouxe a atleta Karla Lameira (Fisiculturismo) para ser o rosto da marca. Crescemos de 30 para 80 alunos ativos e atraímos parceiros de boxe e estética <strong>sem esforço de venda</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* PARTE 3: A CONCLUSÃO / CTA */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h3 
            style={{
              fontSize: '28px',
              textTransform: 'uppercase',
              color: '#FFF',
              marginBottom: '24px',
              fontFamily: 'var(--font-headline)'
            }}
          >
            Por Que Isso Importa Para Você?
          </h3>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '40px', fontWeight: 300 }}>
            Essa jornada me ensinou que recursos limitados não são desculpas, são desafios criativos. <strong>Eu sei como tirar uma empresa do vermelho, como criar uma marca que vende sozinha e como usar o marketing para gerar caixa rápido quando o aperto aperta.</strong>
            <br/><br/>
            Hoje, ofereço não apenas serviços. Ofereço a experiência real de quem já esteve na trincheira, arriscou o próprio dinheiro e venceu. Se eu consegui transformar uma academia quebrada e uma sala de casa em ecossistemas de sucesso, <strong>imagino o que podemos fazer juntos pelo seu negócio.</strong>
          </p>

          <a 
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              const contactBtn = document.querySelector('nav button');
              if(contactBtn) contactBtn.click();
            }}
            className="btn-primary"
            style={{
              padding: '20px 48px',
              fontSize: '16px',
              display: 'inline-block',
              letterSpacing: '0.05em'
            }}
          >
            Vamos Conversar Sobre Seu Negócio
          </a>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .about-grid-top {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
        @media (max-width: 767px) {
          .glass-panel {
            padding: 32px 24px !important;
          }
        }
      `}} />
    </section>
  );
}
