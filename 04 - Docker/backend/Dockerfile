# Nosso backend utiliza o NodeJs, nesse caso entramos dentro do DockerHub para pegar uma imagem do node
# https://hub.docker.com/_/node

FROM node:current-alpine3.15

# O WORKDIR é opcional, mas é recomendado para que o código seja executado dentro de um diretorio especifico para ele
# A tradução do WORKDIR é: "Diretorio de trabalho"

WORKDIR /app

# Aqui tempos 2 opções:
# 1 - Copiar apenas o package.json para o diretorio /app (COPY package.json .)
# 2 - Copiar todos os arquivos para o diretorio /app (COPY . .)

# Qual a vantagem de utilizar o metodo 1?
# O metodo 1 copia apenas o package.json, isso cria um layer na imagem que vai ser gerada, agora imagine que você nao alterou nada no package.json, nesse caso a layer continua a mesma, e o docker nao precisa rodar o npm install novamente, pois as dependencias nao foram alteradas, economizando tempo durante o processo de build

# Caso utilize o metodo 2 (COPY . .), caso voce altere 1 linha no index.js (por exemplo) o docker vai ter q rodar o npm install novamente, pois nao separou o package.json do index.js, ou seja, mesmo que as dependencias continuem as mesmas o docker vai rodar o npm install novamente, pois algum arquivo foi alterado e ele não sabe se as dependencias continuam as mesmas ou nao, logo ele vai ter que rodar o npm install novamente

COPY package.json .

RUN npm install

# Aqui passamos todos os arquivos para dentro do diretorio /app (COPY . .)

COPY . .

# Aqui definimos qual o comando sera executado durante o docker run e nao durante o docker build
# O CMD é opcional, poderiamos passar o comando no docker run (docker run <nome ou ID do container> npm start)

CMD ["npm", "start"]

# Aqui estamos expondo uma porta, nesse caso colocamos o ${PORT} para que essa porta possa ser alterada com variaveis de ambiente
# Poderiamos passar o numero da porta direto, porem se olhamos na linha 11 do index.js estamos pegando a variavel de ambiente PORT como a porta onde vai rodar nosso backend, por esse motivo colocamos ${PORT} aqui

EXPOSE ${PORT}