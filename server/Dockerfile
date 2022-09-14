FROM node:alpine

RUN mkdir /index
WORKDIR /index

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5007

CMD [ "index.js" ]