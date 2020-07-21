FROM node:latest
WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
RUN npm i @adonisjs/cli
CMD ["npm", "start"]