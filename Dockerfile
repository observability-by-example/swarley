FROM node:14.15.4

EXPOSE 3333

COPY . /src

WORKDIR /src

RUN npm i -g @adonisjs/cli

RUN npm install && node ace migration:run

CMD adonis serve --dev