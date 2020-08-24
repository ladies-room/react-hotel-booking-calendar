FROM node:12.9.1

WORKDIR /src/app

# ENV PORT 2046
EXPOSE 2046

COPY package.json /src/app/package.json

RUN npm install

COPY . /src/app

CMD ["npm", "start"]
