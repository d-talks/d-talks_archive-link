FROM node:8

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn run build

RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js", "--env", "production" ]
