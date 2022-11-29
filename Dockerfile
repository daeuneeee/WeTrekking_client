FROM node:14

COPY . /We_Trekking/
WORKDIR /We_Trekking/

RUN yarn install
RUN yarn build
# RUN yarn start

CMD yarn start