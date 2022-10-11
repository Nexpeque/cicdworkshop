#Multi stage Dockerfile
FROM node:16.17-alpine AS build-env

WORKDIR /app

COPY . .

RUN npm install && npm build

FROM nginx:1.21.6-alpine

COPY --from=build-env /app/build /usr/share/nginx/html

EXPOSE 80
