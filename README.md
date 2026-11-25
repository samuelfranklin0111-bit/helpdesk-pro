# HelpDesk Pro

![CI](https://github.com/samuelfranklin0111-bit/helpdesk-pro/actions/workflows/ci.yml/badge.svg)

Sistema web para registrar, acompanhar e resolver chamados de suporte técnico em pequenas empresas e equipes de TI.

**Módulos:** gerenciamento de chamados, usuários e autenticação (solicitante, técnico e administrador) e dashboard.

> Situação do projeto: o sistema (MVP), o ESLint e a pipeline do GitHub Actions estão configurados. Os testes automatizados e a medição de cobertura ainda serão adicionados. O badge de cobertura entra quando houver relatório real.

Na tela do sistema usamos a palavra **pedido**; no código e nos documentos, **chamado**. É a mesma coisa.

## Tecnologias

JavaScript, HTML5, CSS3, Node.js, Express e SQLite (módulo `node:sqlite`, embutido no Node).

## Requisitos

- Node.js 22.13 ou superior (o SQLite já vem dentro do Node) (https://nodejs.org)

## Como instalar e executar

```bash
npm install
npm run seed      # cria 3 usuários de demonstração (opcional)
npm start
```

Abra http://localhost:3000 no navegador.

Usuários de demonstração (apenas para uso local):

| Perfil | E-mail | Senha |
|---|---|---|
| Administrador | admin@helpdesk.local | Admin12345 |
| Técnico | tecnico@helpdesk.local | Tecnico12345 |
| Solicitante | solicitante@helpdesk.local | Solicit12345 |

Quem se cadastra pela tela de cadastro começa como Solicitante. O administrador altera os perfis na tela Usuários.

Variáveis opcionais: `PORT` (padrão 3000) e `DB_PATH` (padrão `data/helpdesk.db`).

## Verificação de qualidade

```bash
npm run lint      # análise estática (ESLint), meta: 0 erros e 0 avisos
```

A pipeline (`.github/workflows/ci.yml`) roda o ESLint a cada push e a cada pull request.

## Estrutura

```
src/frontend/   interface (HTML, CSS e JavaScript puro)
src/backend/    servidor Express: routes, controllers, services, middleware, database
src/shared/     constantes e validações usadas pelo servidor
tests/          unit/, integration/ e non-functional/ (a preencher)
features/       cenários Gherkin (.feature)
docs/           documentação
```

## Regras principais

- Chamado exige título (1 a 100 caracteres), descrição (10 a 1000), categoria e prioridade (Baixa, Média ou Alta). Começa como Aberto.
- Status: Aberto, Em andamento e Concluído. Concluir exige solução. Chamado concluído não pode ser alterado.
- Solicitante vê só os próprios chamados. Técnico vê os Abertos e os seus. Administrador vê todos.
- Toda mudança de status fica no histórico do chamado.
- Senhas são guardadas com hash (scrypt). A sessão usa cookie HttpOnly.
