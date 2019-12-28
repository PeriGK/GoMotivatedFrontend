# Inspired from https://mherman.org/blog/dockerizing-a-react-app/

FROM node:10
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm start