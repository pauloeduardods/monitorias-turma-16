# O React funciona de uma forma um pouco diferente, pois em um ambiente de produção nao vamos rodar o react com npm start, no ambiente de produção vamos buildar o nosso react.
# Quer ver como isso funciona?
# Entre no diretorio do frontend `cd frontend` e instale as dependencias `npm install`.
# Feito isso vamos buildar nosso frontend, para isso vamos para o diretorio do frontend e rode o comando `npm run build`.
# Perceba que esse comando gerou uma nova pasta com o nome build, e dentro dela temos o arquivo index.html, dentro dele esta toda nossa aplicação.
# Para rodar esse build na nossa maquina precisamos instalar o ´serve´ globalmente, para isso rode o comando `sudo npm install -g serve`.
# Feito isso rode o comando `serve -s build`, pronto você vai ver a sua aplicação rodando na porta 3000. Aparentemente igual ao que aconteceria com o comando `npm start`, porem aqui estamos utilizando o serve para rodar a aplicação comprimida.
# Em produção utilizamos esses arquivos gerados no `npm run build` para rodar a aplicação, e temos algumas ferramentas para isso como é o caso do servidor nginx! (Ou Apache)
# Sabendo disso precisamos utilizar um conceito em docker que chama multiple stages builds (builds em multiplas etapas), ou seja, vamos utilizar uma imagem NodeJs para buildar nossa aplicação React, e depois uma outra imagem para rodar o arquivo build gerado!
# Ou seja vamos ultilizar a imagem do NodeJs e a do Nginx para realmente rodar a aplicação! (Você pode usar a imagem do Apache tambem!)

#Stage 1 Build

# Aqui estamos pegando a imagem do NodeJs e estamos dando um nome para ela de build (AS build), pode ser o nome que você quiser!
FROM node:current-alpine3.15 AS build

# Definimos um diretorio de traabalho
WORKDIR /app

# Separamos as dependencias do resto do codigo como explicado no arquivo Dockerfile da pasta backend
COPY package.json .

RUN npm install

# Nossa aplicação React utiliza uma variavel de ambiente (REACT_APP_BASE_URL) para definir qual o url do nosso backend, por esse motivo precisamos passar o valor desse parametro para o nosso build
ARG REACT_APP_BASE_URL

# Aqui estamos falando que nossa variavel de ambiente REACT_APP_BASE_URL é a variavél de ambiente que sera passada pelo docker-compose ou pelo docker run utilizando a tag -e
# Essa variavel tem que ser a url do nosso backend, no caso http://localhost:<porta do backend> (porta do backend é a porta que o docker-compose ou docker run utilizou para liberar o acesso ao backend na sua maquina!)
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

# Copiamos o resto do codigo
COPY . .

# Aqui executamos o npm run build para gerar a pasta build
RUN npm run build

#Stage 2 Server

# Aqui esta o segundo estagio, onde vamos colocar a aplicacão para ser acessada por outros usuarios (algo parescido com o comando `serve -s build`)
FROM nginx:1.21.4-alpine AS prod

# Esse é um diretorio padrao do nginx, onde vamos colocar nosso html estatico (index.html que esta dentro de build)
# Voce pode conferir ele nesse link https://hub.docker.com/_/nginx para saber mais sobre o diretorio padrao do nginx
WORKDIR /usr/share/nginx/html

# Aqui passamos um arquivo de configuração para o nginx, como o `npm run build` gera um arquivo unico index.html precisamos passar essa configuração para que o neginx abra as rotas no arquivo index.html (dentro desse arquivo esta todas nossas rotas)
# https://enrico-portolan.medium.com/how-to-host-react-app-with-nginx-634ad0c8425a
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Aqui estamos copiando do container que renomeamos build (AS build) e pegamos os arquivos do /app/build e colocamos no diretorio /usr/share/nginx/html (que é o diretorio padrao do nginx e definido ali no WORKDIR)
# OBS: Poderiamos tirar o WORKDIR e mudariamos para `COPY --from=build /app/build /usr/share/nginx/html`
COPY --from=build /app/build .

EXPOSE 80

# Aqui onde iniciamos o nosso servidor nginx como podemos ver nesse link https://stackoverflow.com/questions/27355270/docker-nginx-deployment-entrypoint (no exeplo do link é usado o CMD, mas funciona com ENTRYPOINT tambem)

# Lembrando que o CMD pode ser subistituido no docker run, enquanto o ENTRYPOINT é sempre executado no docker run, qualquer comando passado no docker run vai ser executado depois do ENTRYPOINT
ENTRYPOINT ["nginx", "-g", "daemon off;"]
