FROM node:20 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "node", "dist/src/main.js" ]


FROM base as production

ENV NODE_PATH=./build

RUN npm run build