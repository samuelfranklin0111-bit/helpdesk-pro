# HelpDesk Pro: Documento do Marco 1

Visão do produto, elicitação, requisitos e backlog.

Repositório: https://github.com/samuelfranklin0111-bit/helpdesk-pro

| Item | Situação |
|---|---|
| Nomes dos integrantes da equipe (seção 8) | [Samuel Franklin valença pilar,Eduardo Silva de siqueira vasconcelos,José Ricardo vergueira de oliveira,Jeyfesson De Souza Freire,Kauã Gabriel Gomes] |
| Datas reais de aplicação do questionário (seção 3.1) | [ 30/10/2026] |

## 1. Visão do produto

### 1.1 Problema

Pequenas empresas e equipes de suporte técnico não têm um jeito organizado de registrar, acompanhar e resolver pedidos de ajuda. Os pedidos chegam por canais soltos, como WhatsApp, e-mail e telefone, e quem pediu não consegue saber em que etapa está o pedido.

### 1.2 Objetivo

O HelpDesk Pro centraliza os chamados de suporte técnico. O solicitante abre e acompanha o chamado, o técnico assume e resolve, e o administrador gerencia usuários e acompanha o atendimento, com histórico de cada alteração.

Na tela do sistema usamos a palavra "pedido"; neste documento e no código, "chamado". É a mesma coisa.

### 1.3 Módulos do sistema

| Módulo | O que faz |
|---|---|
| 1. Gerenciamento de chamados | Abrir, listar, ver detalhes, acompanhar status, comentar, registrar solução e consultar histórico |
| 2. Usuários e autenticação | Cadastro, login e logout, perfis (solicitante, técnico, administrador) e controle de acesso |
| 3. Dashboard | Totais por status e por prioridade, com filtros |

### 1.4 Tecnologias

JavaScript, HTML, CSS, Node.js, Express e SQLite (módulo `node:sqlite`, embutido no Node), com testes automatizados e integração contínua no GitHub Actions.

## 2. Usuários e personas

As personas misturam dois tipos de informação: o que veio do questionário (**dado real**) e o que é hipótese de projeto (**hipótese**). Idade e profissão são ilustrativas.

| | Mariana Souza (Solicitante) | Carlos Lima (Técnico) | Patrícia Alves (Administradora) |
|---|---|---|---|
| Perfil | 29 anos, assistente administrativa (hipótese) | 34 anos, técnico de suporte (hipótese) | 41 anos, coordenadora de TI (hipótese) |
| Como pede ajuda hoje | Principalmente por mensagem de WhatsApp (3 de 4 respondentes) e também por sistema de chamados (2 de 4). Dado real | Recebe pedidos por vários canais (hipótese) | Responde pela equipe e pelas contas de acesso (hipótese) |
| O que quer | Acompanhar o andamento do pedido: os 4 respondentes deram nota 5 de importância. Dado real | Ver o que precisa ser atendido e registrar a solução (hipótese) | Ver quantos chamados estão abertos, em andamento e concluídos, e controlar os perfis (hipótese) |
| O que a frustra | Quase ninguém sabe sempre em que etapa está o pedido: 3 responderam "às vezes" e 1 "quase nunca". Um respondente citou a falta de rastreamento detalhado das etapas. Dado real | Chamados com pouca informação e dois técnicos no mesmo problema (hipótese) | Falta de visão geral e de histórico (hipótese) |
| Informações que acha importantes | Descrição detalhada (3 de 4), categoria (2 de 4) e urgência (2 de 4). Dado real | | |
| Dispositivo | Computador e celular (3 de 4). Dado real | Computador (hipótese) | Computador (hipótese) |

O questionário foi respondido por pessoas que pedem suporte, ou seja, solicitantes. Por isso os perfis de técnico e administrador ainda são hipóteses.

## 3. Elicitação de requisitos

### 3.1 Técnicas usadas

| Técnica | Situação |
|---|---|
| Questionário online (Google Forms), 10 perguntas, anônimo | Aplicado com 4 respostas. Datas de aplicação: [A PREENCHER] |
| Personas, construídas a partir das respostas do questionário | Seção 2 |

### 3.2 Resultados do questionário (4 respostas)

| Pergunta | Resultado |
|---|---|
| Já pediu suporte técnico | Sim: 4 de 4 |
| Canal usado | WhatsApp: 3. Sistema de chamados: 2. E-mail: 1. Telefone: 1. Pessoalmente: 0 |
| Sabe se o pedido foi visto e em que etapa está | Às vezes: 3. Quase nunca: 1. Sempre: 0 |
| Informações indispensáveis | Descrição detalhada: 3. Categoria: 2. Urgência: 2. Local ou setor: 1. Print de tela: 1. Título: 0 |
| Importância de acompanhar o andamento | Nota 5: 4 de 4 |
| Situações que quer ver | Em andamento: 4. Aguardando você: 2. Aberto: 1 (Concluído e Cancelado não foram lidos na captura de tela) |
| Aviso quando o status mudar | Sim: 4 de 4 |
| Dispositivo | Os dois: 3. Computador: 1. Celular: 0 |
| O que incomoda (aberta) | "Falta de rastreamento detalhado entre as etapas" |
| Funcionalidade que faria falta (aberta) | "Andamento e progresso dos chamados" |

### 3.3 Limitações

A amostra é pequena (4 respondentes) e de conveniência, e **uma das 4 respostas é do próprio autor do projeto**. Os resultados são **exploratórios** e não representam um público maior. Por isso os números são apresentados como "3 de 4" e não como porcentagem.

### 3.4 Do achado ao requisito

| Achado | Requisito ou decisão |
|---|---|
| Todos dão nota máxima a acompanhar o andamento | RF06, RF07 e RF09 são Must |
| Ninguém sabe sempre a etapa do pedido | Status visível e histórico (RF06, RF09, RN12) |
| Descrição, categoria e urgência são as informações mais citadas | Campos obrigatórios do chamado (RN01 a RN03) |
| 3 de 4 usariam computador e celular | Interface responsiva (RNF04) |
| 4 de 4 querem aviso de mudança de status | Aviso por e-mail fica fora (Won't); aviso dentro do sistema fica como Could |
| 2 de 4 pediram o status "Aguardando você" | Fica como Could no backlog |

## 4. Requisitos funcionais

| ID | O sistema deve... | Módulo |
|---|---|---|
| RF01 | Permitir cadastro de usuário (nome, e-mail e senha) | Usuários |
| RF02 | Permitir login e logout | Usuários |
| RF03 | Limitar o que cada perfil pode ver e fazer | Usuários |
| RF04 | Deixar o administrador listar usuários e mudar o perfil deles | Usuários |
| RF05 | Permitir abrir chamado (título, descrição, categoria, prioridade) | Chamados |
| RF06 | Listar chamados e mostrar os detalhes de cada um | Chamados |
| RF07 | Permitir que o técnico assuma um chamado e atualize o status | Chamados |
| RF08 | Permitir comentários e o registro da solução para concluir o chamado | Chamados |
| RF09 | Guardar e mostrar o histórico de alterações do chamado | Chamados |
| RF10 | Mostrar no dashboard os totais por status e por prioridade, com filtros | Dashboard |

## 5. Requisitos não funcionais

As metas abaixo ainda não foram todas medidas. Os testes vão mostrar se foram atingidas.

| ID | Tipo | O sistema deve... | Meta |
|---|---|---|---|
| RNF01 | Desempenho | Responder rápido nas consultas (lista, detalhes e dashboard) | 95% das respostas em menos de 500 ms, com 20 usuários ao mesmo tempo |
| RNF02 | Segurança | Guardar as senhas protegidas (hash) | 100% das senhas sem texto puro no banco |
| RNF03 | Segurança | Bloquear acesso sem login ou sem permissão | 100% das rotas protegidas bloqueadas (erro 401 sem login e 403 sem permissão) |
| RNF04 | Usabilidade | Funcionar bem em computador e celular, com mensagens claras de erro | Uso sem rolagem lateral de 360 px a 1920 px de largura, e 100% dos formulários com mensagem de erro |
| RNF05 | Confiabilidade | Não perder chamados | 100% dos chamados continuam salvos depois de reiniciar o sistema |

## 6. Regras de negócio

| ID | Regra |
|---|---|
| RN01 | Todo chamado exige título (1 a 100 caracteres) e descrição (10 a 1000 caracteres) |
| RN02 | Todo chamado exige prioridade: Baixa, Média ou Alta |
| RN03 | Todo chamado exige categoria: Hardware, Software, Rede, Acesso e conta ou Outros |
| RN04 | Chamado novo recebe um ID único e começa com status Aberto |
| RN05 | O solicitante só vê os próprios chamados |
| RN06 | O técnico vê os chamados Abertos, os atribuídos a ele e os que ele mesmo abriu; o administrador vê todos |
| RN07 | Só técnico e administrador alteram o status |
| RN08 | O status segue a ordem Aberto, Em andamento, Concluído. O técnico também pode devolver Em andamento para Aberto. Não dá para pular etapas |
| RN09 | Um chamado tem só um técnico responsável, e só um chamado Aberto pode ser assumido |
| RN10 | Para concluir, é obrigatório registrar a solução (10 a 1000 caracteres) |
| RN11 | Chamado Concluído não pode ser alterado nem reaberto |
| RN12 | Toda mudança de status ou de responsável vira um registro no histórico (quem, quando, valor antes e depois), e o histórico não pode ser editado |
| RN13 | O cadastro comum cria só o perfil Solicitante, e só o administrador muda perfis |
| RN14 | O e-mail é único. A senha tem de 8 a 64 caracteres, com pelo menos uma letra e um número |
| RN15 | Comentários têm de 1 a 500 caracteres e só podem ser feitos em chamado não concluído, por quem pode ver aquele chamado |

## 7. Backlog priorizado (MoSCoW)

| Grupo | Itens | Por quê |
|---|---|---|
| **Must have** | RF01, RF02, RF03, RF05, RF06, RF07, RF08, RF09, RF10 | Formam o fluxo principal e os 3 módulos. O status e o histórico respondem à maior necessidade do questionário |
| **Should have** | RF04 (administrador gerencia usuários e perfis) | Faz parte do sistema, mas técnico e administrador podem ser criados por um script inicial se faltar tempo |
| **Could have** | Aviso dentro do sistema quando o status mudar; status "Aguardando solicitante"; busca por texto; paginação da lista | Os dois primeiros vieram do questionário (4 de 4 querem aviso; 2 de 4 pediram "Aguardando você") |
| **Won't have** | Aviso por e-mail ou mensagem; reabertura de chamado concluído; anexos; SLA automático; recuperação de senha; autenticação em dois fatores; aplicativo de celular nativo; integrações externas | Exigem serviços externos ou mais tempo. A reabertura já é bloqueada pela regra RN11 |

O MVP entregue é Must mais Should. Se algum item não ficar pronto, ele será declarado como não entregue no relatório.

## 8. Equipe

| Papel | Integrante |
|---|---|
| Product Owner e Requisitos, mais Engenheiro DevOps | [Samuel] |
| Líder de SQA e Arquiteto | [Ricardo] |
| Dev Testes 1 (unitários e BDD) | [Eduardo] |
| Dev Testes 2 (integração e carga) | [Jeyfesson] |
| Desenvolvedor Full Stack | [Kauã] |
