FROM node:12.22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chmod 777 node_modules

COPY . .

EXPOSE 3000

CMD ["npm", "start"]