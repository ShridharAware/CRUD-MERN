FROM node:alpine

RUN npm install -g pm2

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["pm2-runtime", "ecosystem.config.json"]