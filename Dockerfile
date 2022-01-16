FROM node:16.13.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN cd /usr/src/app

COPY . /usr/src/app
RUN yarn install

EXPOSE 5000

CMD ["yarn", "start"]
