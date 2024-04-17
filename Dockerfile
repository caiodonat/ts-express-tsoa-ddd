FROM node:20 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

ADD nginx.conf /etc/nginx/nginx.conf

COPY . .

CMD [ "node", "dist/src/main.js" ]

EXPOSE 3000