FROM node:18.17.0
LABEL authors="ivan.hernandez"

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]