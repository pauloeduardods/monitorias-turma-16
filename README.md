# Revisão conteudo da turma 16 durante as monitorias

## 01 - Redux

Nesse repositório revisamos conteúdos da aula de Redux. Foi feito um app simples onde alguns botões que incrementam e decrementam um contador.
O gerenciamento de estado foi feito utilizando Redux para revisar o conceito de Redux e como utiliza-lo com o React.

### Como rodar o app 01 - Redux

1. Entrar na pasta do projeto com `cd '01 - Redux'`
2. Instalar as dependências do projeto com `npm install`
3. Rodar o app com `npm start`
4. Abrir o navegador e acessar http://localhost:3000

### Oque aprendemos

Aprendemos alguns conceitos básicos de Redux e como utiliza-los com o React.

### Como ver o estado do app 01 - Redux

 - Depois de iniciar o app, você pode ver o estado do Redux no browser utilizando o plugin [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR).
 - Para isso basta acessar o navegador e acessar http://localhost:3000/ e depois `inspecionar elemento` e na parte superior onde fica "Elements" "Console" "Network", e clicar em Redux.
 - Com essa extensão você pode ver o estado do seu app quando utiliza Redux.

## 01 - Redux Thunk

Nesse repositório revisamos conteúdos da aula de Redux Thunk. Foi feito um app onde temos 4 páginas
- A primeira que mostra o preço do bitcoin.
- /login que é feita para o usuário entrar com um nome e email.
- /user onde mostra a quantidade de criptomoeda que o usuário tem e o preço que ele comprou.
- /buy onde o usuário pode colocar a quantidade e o preço que ele comprou
Para pegar o preço do bitcoin foi utilizado a [API](https://biscoint.io/docs/api) da [Biscoint](https://biscoint.io/buy/btc/brl?amount=1000&isQuote=true) 

### Como rodar o app 02 - Redux Thunk

1. Entrar na pasta do projeto com `cd '02 - ReduxThunk'`
2. Instalar as dependências do projeto com `npm install`
3. Rodar o app com `npm start`
4. Abrir o navegador e acessar http://localhost:3000

### Oque aprendemos

Aprendemos como utilizar o Redux e Redux Thunk, além de mostrar algumas vantagens em fazer uma requisição no thunk do que fazer uma requisição direto no componente e depois disparar uma action com o resultado.

### Como ver o estado do app 01 - Redux

 - Depois de iniciar o app, você pode ver o estado do Redux no browser utilizando o plugin [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR).
 - Para isso basta acessar o navegador e acessar http://localhost:3000/ e depois `inspecionar elemento` e na parte superior onde fica "Elements" "Console" "Network", e clicar em Redux.
 - Com essa extensão você pode ver o estado do seu app quando utiliza Redux.
