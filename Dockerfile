FROM node:12.9.1

WORKDIR /src/app

ENV PORT 80

COPY package.json /src/app/package.json

RUN npm install

COPY . /src/app

CMD ["node", "server/server.js"]
# CMD ["npm", "start"]
# CMD ["nodemon", "server/server.js"]
# nodemon

# RUN mkdir -p /src/app

# COPY . /src/app

# maybe webpack? susan's worked without;

# RUN npm install

# EXPOSE 2046

# Run the app when the container launches
# CMD ['npm', 'start']
