# Wireframe TDE

Wireframe de uma tela de **últimas transações**, desenvolvido em Angular. A página exibe uma tabela com as movimentações mais recentes (30 registros, exibindo os 10 primeiros), ordenadas da mais recente para a mais antiga.

## Funcionalidades

- Cabeçalho e rodapé reutilizáveis (componentes próprios)
- Tabela de transações com colunas de data, tipo e valor
- Estrutura de headings semântica (`h1` > `h2`)
- Cores com contraste adequado, seguindo as recomendações de acessibilidade do Lighthouse

## Tecnologias

- [Angular](https://angular.dev/) 21
- TypeScript
- HTML e CSS
- [Vitest](https://vitest.dev/) para testes unitários

## Estrutura do projeto

```
src/app/
├── app.html                    # Template principal
├── app.css                     # Estilos da página
├── app-header-wireframe/       # Componente do cabeçalho
├── app-footer-wireframe/       # Componente do rodapé
└── app-tabela-transacoes/      # Componente da tabela de transações
```

> Os nomes das pastas podem variar conforme a organização atual do projeto.

## Como rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) e npm instalados.

```bash
# clonar o repositório
git clone https://github.com/Maicon-Quevedo/wireframe-tde.git
cd wireframe-tde

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
ng serve
```

Depois, acesse `http://localhost:4200/` no navegador. A página recarrega automaticamente a cada alteração nos arquivos.

## Scripts úteis

| Comando    | O que faz                                  |
| ---------- | ------------------------------------------ |
| `ng serve` | Inicia o servidor de desenvolvimento       |
| `ng build` | Gera a versão de produção na pasta `dist/` |
| `ng test`  | Executa os testes unitários com Vitest     |

## Acessibilidade

O projeto foi auditado com o **Google Lighthouse**. Ajustes já aplicados:

- Correção da ordem dos headings (de `h4` para `h2`, sem pular níveis)
- Cor de `#555555` no subtítulo e no rodapé para melhorar o contraste

## Autor

Feito por [Maicon Quevedo](https://github.com/Maicon-Quevedo).