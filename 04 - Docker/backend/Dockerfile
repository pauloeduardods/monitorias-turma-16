FROM node:current-alpine3.15

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000