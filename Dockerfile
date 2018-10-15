FROM node:8
# Create app directory
WORKDIR /app
 # Install app dependencies
RUN npm install -g nodemon
COPY package.json ./
COPY package-lock.json ./
RUN npm install
 # Bundle app source
COPY . /app
CMD [ "npm", "run", "start" ]
