# git stage
FROM bitnami/git:latest as git-stage
WORKDIR /app
RUN git clone https://github.com/edward-ganuelas/edward-g.me.git

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY --from=git-stage /app/edward-g.me/. /app/
RUN yarn 
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/. /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
