# Documentação do Componente: Portfolio

## Objetivo
O componente `Portfolio` exibe os principais "Casos de Sucesso" e detalha as estratégias de Gestão & Marketing aplicadas, além de apresentar os serviços oferecidos. Seu objetivo central é gerar autoridade, transmitir os resultados práticos (aumento de faturamento, crescimento de base, etc.) e conduzir o usuário à conversão (contato).

## Estrutura de Dados
O componente é alimentado por dois arrays principais:
1. `cases`: Contém os estudos de caso. Cada objeto possui:
   - `title`: Título do projeto (ex: ACADEMIA OFICINA G4)
   - `focus`: Área de foco principal da estratégia.
   - `scenario`: O contexto ou problema inicial.
   - `strategyTitle` (opcional): Título específico para a tática utilizada.
   - `strategy`: Array de objetos detalhando as etapas da estratégia (`title` e `desc`).
   - `results`: Array de objetos com os resultados alcançados (`title` e `desc`).
   - `lesson`: Conclusão ou aprendizado central.
   - `badge`: Etiqueta de destaque visual.
   - `gridPattern`: Booleano para exibir ou não um padrão visual de fundo no card.
2. `services`: Array que mapeia como os resultados se traduzem em serviços práticos, com `title` e `desc`.

## Aspectos Visuais e de UX
- Layout responsivo usando CSS Grid.
- Design no estilo "glassmorphism" com bordas iluminadas (`tech-border-glow`).
- Uso extensivo de paleta escura (`#0D0D0D`, `#161616`) e destaque com a cor laranja (`#FF5500`) típica da marca.
- Efeitos decorativos de luz (radial-gradients) ao fundo para dar um tom "premium" e moderno.

## Integração
O componente recebe uma função de callback `onContactClick` via props, que é acionada ao clicar no botão "Quero Resultados Assim no Meu Negócio" ou equivalentes, possivelmente abrindo um modal de contato, redirecionando para o WhatsApp ou rolando a página até a seção de formulário.

## Tecnologias Envolvidas
- React (Functional Component).
- Inline styling e classes CSS (arquivos globais `index.css` e possivelmente `App.css`).

## Manutenção
Para atualizar ou adicionar novos casos de sucesso, basta editar o array `cases` no início do arquivo `Portfolio.jsx`. O componente cuidará de renderizá-lo automaticamente mantendo o padrão visual.
