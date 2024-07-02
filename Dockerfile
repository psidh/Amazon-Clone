FROM node:20-alpine

WORKDIR /app

COPY  package* .

RUN npm install

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
