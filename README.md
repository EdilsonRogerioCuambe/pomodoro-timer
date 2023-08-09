# Aplicativo Pomodoro Timer com ReactJS

Este repositório contém um aplicativo Pomodoro Timer construído usando ReactJS. O aplicativo permite que os usuários gerenciem seus ciclos de trabalho e pausa usando a técnica Pomodoro. Ele oferece uma interface amigável e utiliza styled-components para temas visuais. O aplicativo foi projetado para ajudar os usuários a manterem o foco e a produtividade ao alocar intervalos de tempo específicos para o trabalho e as pausas.

## Sumário
- [Instalação](#instalação)
- [Uso](#uso)
- [Recursos](#recursos)
- [Dependências](#dependências)
- [Contexto e Gerenciamento de Estado](#contexto-e-gerenciamento-de-estado)
- [Lógica do Contador](#lógica-do-contador)
- [Design](#design)

## Instalação

1. Clone este repositório para a sua máquina local.
2. Navegue até o diretório do projeto em seu terminal.
3. Execute `npm install` para instalar as dependências necessárias.
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador da web e acesse `http://localhost:5173`.

## Uso

O aplicativo Pomodoro Timer ajuda você a gerenciar seus ciclos de trabalho e pausa usando a técnica Pomodoro. A interface do usuário do aplicativo fornece um temporizador que exibe o tempo restante para o ciclo de trabalho ou pausa atual. Você pode criar novos ciclos, pausar ciclos e marcá-los como concluídos.

## Recursos

- Crie novos ciclos especificando a tarefa e a duração.
- Transição automática entre ciclos de trabalho e pausa.
- Pausa e retome os ciclos conforme necessário.
- Exibe o tempo restante para o ciclo ativo.
- Atualiza o título do documento com o tempo restante e a tarefa do ciclo atual.
- Estado persistente do ciclo usando armazenamento local.

## Dependências

O aplicativo depende das seguintes bibliotecas:

- `@hookform/resolvers`
- `date-fns`
- `immer`
- `phosphor-react`
- `react`
- `react-dom`
- `react-hook-form`
- `react-router-dom`
- `styled-components`
- `zod`

As dependências de desenvolvimento incluem pacotes relacionados ao ESLint e TypeScript para manter a qualidade do código e a segurança dos tipos.

## Contexto e Gerenciamento de Estado

O aplicativo utiliza o contexto `CyclesContext` e o componente `CyclesContextProvider` para gerenciar o estado dos ciclos. Esse contexto fornece métodos para criar novos ciclos, marcar ciclos como concluídos e gerenciar intervalos de tempo.

## Lógica do Contador

O componente `Counter` é responsável por gerenciar a lógica do cronômetro de contagem regressiva. Ele calcula o tempo restante para o ciclo ativo, atualiza a exibição do cronômetro e lida com a transição entre ciclos de trabalho e pausa. O cronômetro é atualizado a cada segundo usando `setInterval` e pausa automaticamente, marcando ciclos como concluídos quando o cronômetro chega a zero.

## Design

![Pomodoro Timer](./src/assets/home.png, "Pomodoro Timer")
![Pomodoro Timer](./src/assets/historico.png, "Pomodoro Timer")

Para obter mais informações e detalhes sobre este projeto, consulte o código-fonte e os comentários nos arquivos fornecidos. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato!