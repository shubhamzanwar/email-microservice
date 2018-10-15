FROM node:8.9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV production

COPY ./package.json ./package-lock.json /usr/src/app/
COPY ./bin /usr/src/app/bin/
COPY ./node_modules /usr/src/app/node_modules/
COPY ./src /usr/src/app/src/
RUN npm install

EXPOSE 80
CMD [ "npm", "run", "start:prod" ]
