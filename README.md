# Revisão conteudo da turma 16 durante as monitorias

## 01 - Redux

Nesse repositório revisamos conteúdos da aula de Redux. Foi feito um app simples onde alguns botões que incrementam e decrementam um contador.
O gerenciamento de estado foi feito utilizando Redux para revisar o conceito de Redux e como utiliza-lo com o React.

### Como rodar o app 01 - Redux

1. Entrar na pasta do projeto com `cd '01 - Redux'`
2. Instalar as dependências do projeto com `npm install`
3. Rodar o app com `npm start`
4. Abrir o navegador e acessar http://localhost:3000

### O que aprendemos

Aprendemos alguns conceitos básicos de Redux e como utiliza-los com o React.

### Como ver o estado do app 01 - Redux

 - Depois de iniciar o app, você pode ver o estado do Redux no browser utilizando o plugin [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR).
 - Para isso basta acessar o navegador e acessar http://localhost:3000/ e depois `inspecionar elemento` e na parte superior onde fica "Elements" "Console" "Network", e clicar em Redux.
 - Com essa extensão você pode ver o estado do seu app quando utiliza Redux.

## 02 - Redux Thunk

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

### O que aprendemos

Aprendemos como utilizar o Redux e Redux Thunk, além de mostrar algumas vantagens em fazer uma requisição no thunk do que fazer uma requisição direto no componente e depois disparar uma action com o resultado.

### Como ver o estado do app 02 - Redux Thunk

 - Depois de iniciar o app, você pode ver o estado do Redux no browser utilizando o plugin [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR).
 - Para isso basta acessar o navegador e acessar http://localhost:3000/ e depois `inspecionar elemento` e na parte superior onde fica "Elements" "Console" "Network", e clicar em Redux.
 - Com essa extensão você pode ver o estado do seu app quando utiliza Redux.

## 03 - Test Redux

Neste repositório revisamos o conteúdo de redux, redux thunk e testamos a aplicação utilizando o renderWithRouterAndRedux.
- Testamos a tela de login, simulamos um usuário colocando seu nome e email e verificamos se o estado do redux foi alterado.
- Fizemos um mock na função fetch, e disparamos a action do Redux Thunk para pegar o preço do bitcoin, e verificamos se o estado do redux foi alterado corretamente.
- Aprendemos como usar o `waitFor` para fazer o ultimo teste mencionado.

### Como rodar o app 03 - Test Redux

1. Entrar na pasta do projeto com `cd '03 - Test Redux'`
2. Instalar as dependências do projeto com `npm install`
3. Rodar o app com `npm start`
4. Abrir o navegador e acessar http://localhost:3000

### Como testar o app 03 - Test Redux

1. Entrar na pasta do projeto com `cd '03 - Test Redux'`
2. Instalar as dependências do projeto com `npm install`
3. Rodar o teste com `npm test`

OU se preferir você pode gerar um report de cobertura com o seguinte comando:

`npm run test-coverage`

Quando se utiliza o test-coverage é gerado uma nova pasta com o nome de `coverage`, dentro dessa pasta tem outra que chama `Icov-report`, onde está o relatório de cobertura em index.html, Podendo ser aberto com a extensão `Live Server`.

### O que aprendemos

Aprendemos a testar uma aplicação utilizando o renderWithRouterAndRedux. Além de recapitular algumas funções do RTL e Jest.

## 03 - Test Redux

Nesse repositorio revisamos o conteúdo de Docker, criamos um Dockerfile para uma aplicação node backend e um Dockerfile para uma aplicação React frontend.

### Como rodar a aplicação

#### Com docker-compose
1. Entrar no diretório do projeto com `cd '04 - Docker'`
2. Rodar `docker-compose up`
3. Abrir o navegador e acessar http://localhost

#### Com docker

1. Entrar no diretório do projeto com `cd '04 - Docker'`
2. Buildar a imagem do backend com `docker build -t backend ./backend`
3. Rodar o container com `docker run -p 8080:3000 -e PORT=3000 backend`
4. Buildar a imagem do frontend com `docker build --build-arg REACT_APP_BASE_URL=http://localhost:8080 -t frontend ./frontend `
5. Rodar o container com `docker run -p 80:80 frontend`
6. Abrir o navegador e acessar http://localhost