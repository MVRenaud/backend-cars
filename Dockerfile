FROM node:latest

WORKDIR /code

ENV PORT 100

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["npm", "start"]