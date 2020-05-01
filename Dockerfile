# Stage 1 base image
FROM node:12.16.2 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

# Stage 2 nginx image to serve application
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/thesis-portal-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
COPY ./auth/ssl/localhost.crt /etc/ssl
COPY ./auth/ssl/localhost.key /etc/ssl