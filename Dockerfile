FROM node:16

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "node", "server.js" ]