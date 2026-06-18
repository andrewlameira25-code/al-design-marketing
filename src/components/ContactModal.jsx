import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    need: 'design'
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Por favor, preencha seu nome e WhatsApp.');
      return;
    }
    
    setStatus('loading');
    
    // Simulação de requisição de rede (1.5 segundos)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  // Mensagem pré-formatada para o WhatsApp real
  const whatsappNumber = '5591999999999'; // Número demonstrativo. Pode ser alterado depois.
  const whatsappText = encodeURIComponent(
    `Olá Andrew! Vi o portfólio da A.L. Design & Marketing. Meu nome é ${formData.name}${formData.company ? ` da empresa ${formData.company}` : ''} e preciso de ajuda com ${
      formData.need === 'design' 
        ? 'Design de Identidade Visual / Logotipo' 
        : formData.need === 'social' 
        ? 'Gestão de Redes Sociais' 
        : 'Consultoria de Posicionamento'
    }. Gostaria de solicitar um orçamento!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(13, 13, 13, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        className="glass-panel tech-border-glow"
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '40px',
          borderRadius: '8px',
          position: 'relative',
          backgroundColor: '#101010',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.8)'
        }}
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no conteúdo
      >
        {/* Botão de Fechar */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-secondary)',
            fontSize: '24px',
            cursor: 'pointer',
            lineHeight: 1,
            transition: 'color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
        >
          &times;
        </button>

        {status === 'success' ? (
          /* Estado de Sucesso */
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: 'rgba(255, 85, 0, 0.1)',
                border: '1px solid #FF5500',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 
              style={{
                fontSize: '24px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              Solicitação Enviada!
            </h3>

            <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '32px', color: 'var(--color-text-secondary)' }}>
              Obrigado pelo contato, <strong>{formData.name}</strong>. Nossa equipe liderada por Andrew Lameira irá analisar sua solicitação e entrar em contato no WhatsApp informado dentro de 24 horas úteis.
            </p>

            {/* Acelerador de Conversão - Link Direto para WhatsApp */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  textTransform: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {/* Ícone simplificado de conversa do WhatsApp */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Falar no WhatsApp Imediatamente
              </a>
              
              <button 
                onClick={onClose}
                className="btn-secondary"
                style={{ fontSize: '13px', border: 'none' }}
              >
                Voltar para o site
              </button>
            </div>
          </div>
        ) : (
          /* Formulário de Lead B2B */
          <div>
            <div style={{ marginBottom: '28px' }}>
              <h3 
                style={{
                  fontSize: '24px',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                Iniciar Orçamento
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Preencha os dados abaixo de forma rápida. Entraremos em contato via WhatsApp para entender seu negócio.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Campo Nome */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em'
                  }}
                >
                  Seu Nome *
                </label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva" 
                  required
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '14px',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF5500'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                />
              </div>

              {/* Campo Empresa (Opcional) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em'
                  }}
                >
                  Nome da Empresa (Opcional)
                </label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange}
                  placeholder="Ex: Boutique Della" 
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '14px',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF5500'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                />
              </div>

              {/* Campo WhatsApp */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em'
                  }}
                >
                  Número de WhatsApp *
                </label>
                <input 
                  type="tel" 
                  name="whatsapp" 
                  value={formData.whatsapp} 
                  onChange={handleChange}
                  placeholder="Ex: (91) 99999-9999" 
                  required
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '14px',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF5500'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                />
              </div>

              {/* Campo Necessidade */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    letterSpacing: '0.05em'
                  }}
                >
                  O que seu negócio mais precisa hoje?
                </label>
                <select 
                  name="need" 
                  value={formData.need} 
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  style={{
                    backgroundColor: '#161616',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '14px',
                    transition: 'border-color 0.2s',
                    cursor: 'pointer'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#FF5500'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                >
                  <option value="design">Design de Marca / Logotipo Profissional</option>
                  <option value="social">Organização e Postagens no Instagram</option>
                  <option value="consultoria">Consultoria de Posicionamento Premium</option>
                  <option value="all">Todas as opções / Não sei por onde começar</option>
                </select>
              </div>

              {/* Botão de Envio */}
              <button 
                type="submit" 
                className="btn-primary"
                disabled={status === 'loading'}
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '14px',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {status === 'loading' ? (
                  <>
                    <span 
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderTopColor: '#FFFFFF',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                        display: 'inline-block'
                      }}
                    />
                    Processando...
                  </>
                ) : (
                  'Solicitar Atendimento'
                )}
              </button>
            </form>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
