# Histórias de usuário

Cada história tem um arquivo de cenários em Gherkin na pasta `features/`.

| ID | História | Requisitos | Cenários |
|---|---|---|---|
| H1 | Como **visitante**, quero me cadastrar e fazer login, para acessar o sistema com a minha conta. | RF01, RF02 | `features/cadastro_login.feature` |
| H2 | Como **solicitante**, quero abrir um chamado com título, descrição, categoria e prioridade, para registrar o meu problema. | RF05 | `features/abrir_chamado.feature` |
| H3 | Como **solicitante**, quero ver a lista dos meus chamados e o status de cada um, para acompanhar o andamento. | RF06, RF09 | `features/consultar_chamados.feature` |
| H4 | Como **técnico**, quero assumir um chamado aberto, para começar o atendimento. | RF07 | `features/assumir_chamado.feature` |
| H5 | Como **técnico**, quero registrar a solução e concluir o chamado, para que o solicitante veja o resultado. | RF08 | `features/concluir_chamado.feature` |

## Critérios de aceitação (resumo)

**H1.** Cadastro com dados válidos cria uma conta com perfil Solicitante. E-mail já usado é recusado. Login com dados corretos dá acesso. Login com senha errada é recusado com a mensagem "E-mail ou senha inválidos".

**H2.** Com dados válidos, o chamado é criado com identificador único e status Aberto. Título vazio ou descrição com menos de 10 caracteres são recusados e nenhum chamado é criado.

**H3.** O solicitante vê apenas os próprios chamados. Depois que um técnico assume, o status mostrado é Em andamento e o histórico registra a mudança. Abrir o chamado de outra pessoa é negado.

**H4.** O técnico assume um chamado Aberto sem responsável: o status vai para Em andamento e ele vira o responsável. Assumir um chamado que já tem responsável é recusado. O solicitante não pode assumir chamados.

**H5.** Com a solução registrada, o chamado passa para Concluído e o solicitante vê a solução. Concluir sem solução é recusado e o status continua Em andamento. Um chamado concluído não pode ser alterado.

## Observação

Por enquanto os cenários são **documentação do comportamento esperado**. Eles ainda não são testes automatizados, porque o Cucumber.js não foi configurado.
