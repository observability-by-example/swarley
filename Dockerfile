FROM node:14.15.4

EXPOSE 3333

COPY . /src

WORKDIR /src

RUN npm install && node ace migration:run

CMD npm start