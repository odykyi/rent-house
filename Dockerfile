FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm react-scripts cross-env
RUN npm install -qy

EXPOSE 4100
EXPOSE 5858

CMD ["npm", "start"]
