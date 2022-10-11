FROM node:14-alpine

WORKDIR /app/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]