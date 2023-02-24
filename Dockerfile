FROM node:18-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build


FROM node:18-alpine

WORKDIR /app

COPY --from=builder app/build .
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "index.js", "--enable-source-maps"]
