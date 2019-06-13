FROM node:8

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8080

CMD [ "yarn", "start" ]
