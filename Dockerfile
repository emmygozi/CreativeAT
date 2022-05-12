FROM node:14-alpine

# Create app directory

WORKDIR /usr/node-app

ENV PORT=3000

COPY . .

RUN npm install


EXPOSE 3000

ENTRYPOINT ["npm", "run", "start" ]