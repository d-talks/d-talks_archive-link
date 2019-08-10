FROM node:latest

ENV HOST 0.0.0.0
ENV APP_ROOT /usr/src/app

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}

COPY . .

RUN yarn && yarn run build
RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime", "ecosystem.config.js", "--env", "production" ]
