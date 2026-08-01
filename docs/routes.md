# Arquitetura de Rotas e Páginas (React Router)

## Decisão Arquitetural
Para a expansão dos Casos de Sucesso em páginas individuais, introduzimos a biblioteca `react-router-dom`. Optamos pelo **HashRouter** em vez do tradicional `BrowserRouter`.

### Por que HashRouter?
O HashRouter insere um `#` na URL (ex: `site.com/#/case/loja-suplementos-integrada`).
- **Resiliência a "F5" (Refresh):** Servidores estáticos padrão (sem configuração de reescrita de URL) tratam rotas do lado do cliente como "Página não encontrada (404)" quando o usuário aperta F5. Ao usar a âncora `#`, o servidor ignora a rota e sempre retorna o `index.html`. O React assume o controle a partir dali e renderiza a página correta instantaneamente, mantendo a experiência fluida sem perda de estado.
- **Portabilidade:** Funciona nativamente em qualquer hospedagem (HostGator, Vercel, GitHub Pages) sem nenhuma configuração de servidor.

## Estrutura de Navegação
1. **Página Inicial (`/`):** 
   - Centraliza os componentes de `Hero`, `About`, `Skills` e `Portfolio`.
   - O `Portfolio` agora funciona como uma "vitrine" interativa. Os cards disparam uma navegação para a rota do case.
2. **Página do Case (`/case/:id`):** 
   - Renderiza o componente `CasePage`.
   - Lê os dados de `src/data/cases.js` baseado no `:id`.
   - Possui lógica `window.scrollTo(0, 0)` ativada na renderização, garantindo que o usuário veja a página desde o topo ao trocar de rota.

## Facilidade de Expansão
- **Para adicionar novos cases:** Basta inserir um objeto no array exportado em `src/data/cases.js`. A página inicial gera o card automaticamente, e a rota de detalhes passa a existir instantaneamente graças ao roteamento dinâmico.
