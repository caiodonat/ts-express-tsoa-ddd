FROM node:20 as base

WORKDIR /home/node/app

# ADD nginx.conf /etc/nginx/nginx.conf

COPY package*.json ./

RUN npm i

RUN chown -R node /app/node_modules

COPY . .

EXPOSE 3333

CMD [ "node", "dist/src/main.js" ]

FROM base as production

ENV NODE_PATH=./build


RUN npm run build

EXPOSE 3333