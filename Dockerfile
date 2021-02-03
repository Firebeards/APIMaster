FROM node:lts

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 8080
EXPOSE 27017
EXPOSE 8081
CMD [ "node", "server.js" ]