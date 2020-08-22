FROM node:latest

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app

COPY package.json ./
# maybe webpack? susan's worked without;

RUN npm install

EXPOSE 2046

# Run the app when the container launches
CMD ['npm', 'start']

